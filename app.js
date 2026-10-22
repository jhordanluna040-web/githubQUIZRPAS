/**
 * SIMULADOR DE EXAMEN RPAS DGAC PERÚ
 * Application Engine & Logic
 */

(function () {
  'use strict';

  // State Management
  const state = {
    allQuestions: [],
    activeQuestions: [],
    currentIndex: 0,
    answersLog: [], // Records each answered question { question, selectedOption, isCorrect, optionsOrder }
    score: {
      correct: 0,
      wrong: 0,
      total: 0
    },
    timerInterval: null,
    secondsElapsed: 0,
    soundEnabled: true,
    theme: 'dark',
    currentMode: 'full',
    selectedCategory: '',
    audioCtx: null
  };

  // DOM Elements Cache
  const elements = {
    // Views
    viewWelcome: document.getElementById('view-welcome'),
    viewQuiz: document.getElementById('view-quiz'),
    viewResults: document.getElementById('view-results'),
    viewReview: document.getElementById('view-review'),

    // Header buttons
    btnThemeToggle: document.getElementById('btn-theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),
    btnSoundToggle: document.getElementById('btn-sound-toggle'),
    soundIcon: document.getElementById('sound-icon'),

    // Welcome Screen
    modeCards: document.querySelectorAll('.mode-card'),
    categoryPickerWrapper: document.getElementById('category-picker-wrapper'),
    selectCategory: document.getElementById('select-category'),
    btnStartQuiz: document.getElementById('btn-start-quiz'),

    // Quiz Screen
    currentQIndex: document.getElementById('current-q-index'),
    totalQCount: document.getElementById('total-q-count'),
    liveCorrectCount: document.getElementById('live-correct-count'),
    liveWrongCount: document.getElementById('live-wrong-count'),
    quizTimer: document.getElementById('quiz-timer'),
    progressFill: document.getElementById('progress-fill'),
    qCategoryTag: document.getElementById('q-category-tag'),
    qOriginalNum: document.getElementById('q-original-num'),
    qText: document.getElementById('q-text'),
    optionsList: document.getElementById('options-list'),
    feedbackBox: document.getElementById('feedback-box'),
    feedbackIcon: document.getElementById('feedback-icon'),
    feedbackHeading: document.getElementById('feedback-heading'),
    feedbackDetail: document.getElementById('feedback-detail'),
    btnNextQuestion: document.getElementById('btn-next-question'),
    btnQuitQuiz: document.getElementById('btn-quit-quiz'),

    // Results Screen
    resultStatusBadge: document.getElementById('result-status-badge'),
    resultStatusIcon: document.getElementById('result-status-icon'),
    resultStatusText: document.getElementById('result-status-text'),
    resultHeadline: document.getElementById('result-headline'),
    resultSubtext: document.getElementById('result-subtext'),
    finalPercentageNum: document.getElementById('final-percentage-num'),
    metricCorrect: document.getElementById('metric-correct'),
    metricWrong: document.getElementById('metric-wrong'),
    metricTotal: document.getElementById('metric-total'),
    metricTime: document.getElementById('metric-time'),
    btnRetryAll: document.getElementById('btn-retry-all'),
    btnRetryFailed: document.getElementById('btn-retry-failed'),
    countFailedTag: document.getElementById('count-failed-tag'),
    btnShowReview: document.getElementById('btn-show-review'),
    btnBackHome: document.getElementById('btn-back-home'),

    // Review Screen
    rfCountAll: document.getElementById('rf-count-all'),
    rfCountCorrect: document.getElementById('rf-count-correct'),
    rfCountWrong: document.getElementById('rf-count-wrong'),
    reviewFilters: document.querySelectorAll('.filter-btn'),
    reviewSearch: document.getElementById('review-search'),
    reviewList: document.getElementById('review-list'),
    btnBackToResults: document.getElementById('btn-back-to-results'),

    // Canvas
    confettiCanvas: document.getElementById('confetti-canvas')
  };

  /* ==========================================================================
     AUDIO SYNTHESIZER (Web Audio API - Zero external files)
     ========================================================================== */
  function initAudio() {
    if (!state.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        state.audioCtx = new AudioContext();
      }
    }
    if (state.audioCtx && state.audioCtx.state === 'suspended') {
      state.audioCtx.resume();
    }
  }

  function playSound(type) {
    if (!state.soundEnabled) return;
    try {
      initAudio();
      if (!state.audioCtx) return;

      const now = state.audioCtx.currentTime;
      const osc = state.audioCtx.createOscillator();
      const gain = state.audioCtx.createGain();

      osc.connect(gain);
      gain.connect(state.audioCtx.destination);

      if (type === 'correct') {
        // High, cheerful double chime (C6 -> G6)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12); // G5
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'wrong') {
        // Low, brief buzzer (A2 -> F2)
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(140, now + 0.22);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'fanfare') {
        // Multi-tone victory fanfare
        const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
        notes.forEach((freq, idx) => {
          const o = state.audioCtx.createOscillator();
          const g = state.audioCtx.createGain();
          o.connect(g);
          g.connect(state.audioCtx.destination);
          o.type = 'triangle';
          o.frequency.setValueAtTime(freq, now + idx * 0.1);
          g.gain.setValueAtTime(0.15, now + idx * 0.1);
          g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.3);
          o.start(now + idx * 0.1);
          o.stop(now + idx * 0.1 + 0.3);
        });
      }
    } catch (e) {
      console.warn('Audio playback not supported or blocked:', e);
    }
  }

  /* ==========================================================================
     SHUFFLE ALGORITHM (Fisher-Yates)
     ========================================================================== */
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /**
   * Prepares question options with robust randomization.
   * If an option is "Todas las anteriores" / isAllAbove, it stays as the last choice.
   */
  function prepareRandomizedOptions(rawOptions) {
    // Separate any "all of the above" or special combo options if needed
    const normalOptions = [];
    const trailingOptions = [];

    rawOptions.forEach((opt, idx) => {
      const item = {
        ...opt,
        originalIndex: idx
      };
      if (opt.isAllAbove) {
        trailingOptions.push(item);
      } else {
        normalOptions.push(item);
      }
    });

    const shuffledNormals = shuffleArray(normalOptions);
    return [...shuffledNormals, ...trailingOptions];
  }

  /* ==========================================================================
     NAVIGATION & VIEW SWITCHING
     ========================================================================== */
  function switchView(viewName) {
    [elements.viewWelcome, elements.viewQuiz, elements.viewResults, elements.viewReview].forEach(view => {
      view.classList.remove('active');
    });

    if (viewName === 'welcome') {
      elements.viewWelcome.classList.add('active');
      stopTimer();
    } else if (viewName === 'quiz') {
      elements.viewQuiz.classList.add('active');
    } else if (viewName === 'results') {
      elements.viewResults.classList.add('active');
      stopTimer();
    } else if (viewName === 'review') {
      elements.viewReview.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ==========================================================================
     TIMER ENGINE
     ========================================================================== */
  function startTimer() {
    stopTimer();
    state.secondsElapsed = 0;
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
      state.secondsElapsed++;
      updateTimerDisplay();
    }, 1000);
  }

  function stopTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
  }

  function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  function updateTimerDisplay() {
    elements.quizTimer.textContent = formatTime(state.secondsElapsed);
  }

  /* ==========================================================================
     QUIZ LIFECYCLE
     ========================================================================== */
  function initCategoriesDropdown() {
    const categories = new Set();
    state.allQuestions.forEach(q => {
      if (q.category) categories.add(q.category);
    });

    elements.selectCategory.innerHTML = '<option value="">-- Selecciona una Materia --</option>';
    categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      const count = state.allQuestions.filter(q => q.category === cat).length;
      opt.textContent = `${cat} (${count} preguntas)`;
      elements.selectCategory.appendChild(opt);
    });
  }

  function startQuiz(mode, customQuestionsList = null) {
    state.currentMode = mode;
    state.answersLog = [];
    state.score = { correct: 0, wrong: 0, total: 0 };
    state.currentIndex = 0;

    let pool = [];

    if (customQuestionsList && customQuestionsList.length > 0) {
      // Re-testing failed questions
      pool = [...customQuestionsList];
    } else if (mode === 'full') {
      pool = [...state.allQuestions];
    } else if (mode === 'sim') {
      // Pick 40 random questions from bank
      const shuffledAll = shuffleArray(state.allQuestions);
      pool = shuffledAll.slice(0, 40);
    } else if (mode === 'quick') {
      // Pick 20 random questions
      const shuffledAll = shuffleArray(state.allQuestions);
      pool = shuffledAll.slice(0, 20);
    } else if (mode === 'category') {
      const selectedCat = elements.selectCategory.value;
      if (!selectedCat) {
        alert('Por favor selecciona una materia primero.');
        return;
      }
      pool = state.allQuestions.filter(q => q.category === selectedCat);
    }

    if (pool.length === 0) {
      alert('No se encontraron preguntas para este modo.');
      return;
    }

    // 1. Shuffle question order
    state.activeQuestions = shuffleArray(pool).map(q => {
      // 2. Shuffle options for each question
      return {
        ...q,
        shuffledOptions: prepareRandomizedOptions(q.options)
      };
    });

    state.score.total = state.activeQuestions.length;

    // Update UI counters
    elements.totalQCount.textContent = state.score.total;
    elements.liveCorrectCount.textContent = '0';
    elements.liveWrongCount.textContent = '0';

    startTimer();
    switchView('quiz');
    renderQuestion(state.currentIndex);
  }

  function renderQuestion(index) {
    if (index >= state.activeQuestions.length) {
      finishQuiz();
      return;
    }

    const currentItem = state.activeQuestions[index];
    const letters = ['A', 'B', 'C', 'D', 'E'];

    // Update metadata & progress
    elements.currentQIndex.textContent = index + 1;
    elements.qCategoryTag.textContent = currentItem.category || 'DGAC';
    elements.qOriginalNum.textContent = `Banco DGAC #${currentItem.num || currentItem.id}`;
    elements.qText.textContent = currentItem.question;

    const progressPct = ((index) / state.activeQuestions.length) * 100;
    elements.progressFill.style.width = `${progressPct}%`;

    // Reset feedback and Next button
    elements.feedbackBox.className = 'feedback-box';
    elements.feedbackBox.style.display = 'none';
    elements.btnNextQuestion.disabled = true;

    if (index === state.activeQuestions.length - 1) {
      elements.btnNextQuestion.innerHTML = '<span>Ver Calificación</span> <span>🏆</span>';
    } else {
      elements.btnNextQuestion.innerHTML = '<span>Siguiente Pregunta</span> <span>➡️</span>';
    }

    // Render options
    elements.optionsList.innerHTML = '';

    currentItem.shuffledOptions.forEach((opt, optIdx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.dataset.index = optIdx;

      const letterBadge = document.createElement('span');
      letterBadge.className = 'option-letter';
      letterBadge.textContent = letters[optIdx] || (optIdx + 1);

      const textSpan = document.createElement('span');
      textSpan.className = 'option-text';
      textSpan.textContent = opt.text;

      const statusIcon = document.createElement('span');
      statusIcon.className = 'option-status-icon';
      statusIcon.textContent = '•';

      btn.appendChild(letterBadge);
      btn.appendChild(textSpan);
      btn.appendChild(statusIcon);

      btn.addEventListener('click', () => handleOptionSelected(optIdx));

      elements.optionsList.appendChild(btn);
    });
  }

  function handleOptionSelected(selectedIdx) {
    const currentItem = state.activeQuestions[state.currentIndex];
    const buttons = elements.optionsList.querySelectorAll('.option-btn');

    // If already answered, do nothing
    if (elements.btnNextQuestion.disabled === false) return;

    // Disable all options
    buttons.forEach(btn => btn.disabled = true);

    const chosenOption = currentItem.shuffledOptions[selectedIdx];
    const isCorrect = chosenOption.isCorrect === true;

    // Record in answer log
    state.answersLog.push({
      questionIndex: state.currentIndex + 1,
      question: currentItem,
      selectedOption: chosenOption,
      selectedIdx: selectedIdx,
      isCorrect: isCorrect,
      optionsOrder: currentItem.shuffledOptions
    });

    const letters = ['A', 'B', 'C', 'D', 'E'];
    const chosenLetter = letters[selectedIdx];

    // Highlight options
    buttons.forEach((btn, bIdx) => {
      const opt = currentItem.shuffledOptions[bIdx];
      const icon = btn.querySelector('.option-status-icon');

      if (bIdx === selectedIdx) {
        if (isCorrect) {
          btn.classList.add('correct-choice');
          icon.textContent = '✅';
        } else {
          btn.classList.add('wrong-choice');
          icon.textContent = '❌';
        }
      } else if (opt.isCorrect) {
        // Reveal the correct one if user missed it
        btn.classList.add('correct-choice');
        icon.textContent = '✅';
      } else {
        btn.classList.add('faded-choice');
      }
    });

    // Update live metrics & show feedback banner
    elements.feedbackBox.style.display = 'block';

    if (isCorrect) {
      state.score.correct++;
      elements.liveCorrectCount.textContent = state.score.correct;
      elements.feedbackBox.className = 'feedback-box correct active';
      elements.feedbackIcon.textContent = '✅';
      elements.feedbackHeading.textContent = '¡Respuesta Correcta!';
      elements.feedbackDetail.textContent = `Marcaste la opción [${chosenLetter}]. ¡Excelente conocimiento del reglamento!`;
      playSound('correct');
    } else {
      state.score.wrong++;
      elements.liveWrongCount.textContent = state.score.wrong;
      elements.feedbackBox.className = 'feedback-box incorrect active';
      elements.feedbackIcon.textContent = '❌';
      elements.feedbackHeading.textContent = 'Respuesta Incorrecta';

      // Find which letter was correct
      const correctIdx = currentItem.shuffledOptions.findIndex(o => o.isCorrect);
      const correctLetter = letters[correctIdx];
      const correctText = currentItem.shuffledOptions[correctIdx].text;

      elements.feedbackDetail.innerHTML = `Marcaste [${chosenLetter}]. La respuesta correcta era <strong>[${correctLetter}]:</strong> ${escapeHtml(correctText)}`;
      playSound('wrong');
    }

    // Enable Next Question button
    elements.btnNextQuestion.disabled = false;
    elements.btnNextQuestion.focus();
  }

  function goToNextQuestion() {
    state.currentIndex++;
    renderQuestion(state.currentIndex);
  }

  /* ==========================================================================
     RESULTS & EVALUATION (Passing mark = 75%)
     ========================================================================== */
  function finishQuiz() {
    stopTimer();
    elements.progressFill.style.width = '100%';

    const total = state.score.total;
    const correct = state.score.correct;
    const wrong = state.score.wrong;
    const percentage = total > 0 ? ((correct / total) * 100) : 0;
    const isPassing = percentage >= 75.0; // Official 75% rule

    // Populate Metrics
    elements.finalPercentageNum.textContent = `${percentage.toFixed(1)}%`;
    elements.metricCorrect.textContent = correct;
    elements.metricWrong.textContent = wrong;
    elements.metricTotal.textContent = total;
    elements.metricTime.textContent = formatTime(state.secondsElapsed);

    if (isPassing) {
      elements.resultStatusBadge.className = 'result-status-badge passed';
      elements.resultStatusIcon.textContent = '🏆';
      elements.resultStatusText.textContent = 'APROBADO';
      elements.finalPercentageNum.className = 'percentage-number passed';
      elements.resultHeadline.textContent = '¡Felicitaciones! Has aprobado el examen';
      elements.resultSubtext.textContent = `Superaste con éxito el umbral del 75.0% requerido por la DGAC del Perú con un ${percentage.toFixed(1)}% de efectividad.`;
      playSound('fanfare');
      fireConfetti();
    } else {
      const neededCorrect = Math.ceil(total * 0.75);
      const diff = neededCorrect - correct;
      elements.resultStatusBadge.className = 'result-status-badge failed';
      elements.resultStatusIcon.textContent = '⚠️';
      elements.resultStatusText.textContent = 'NO APROBADO';
      elements.finalPercentageNum.className = 'percentage-number failed';
      elements.resultHeadline.textContent = 'Examen No Aprobatorio';
      elements.resultSubtext.textContent = `Obtuviste ${percentage.toFixed(1)}%. Necesitas al menos 75.0% (${neededCorrect} aciertos, te faltaron ${diff}) para aprobar ante la DGAC. ¡Te sugerimos repasar las falladas!`;
    }

    // Configure retry failed button
    if (wrong > 0) {
      elements.btnRetryFailed.style.display = 'inline-flex';
      elements.countFailedTag.textContent = wrong;
    } else {
      elements.btnRetryFailed.style.display = 'none';
    }

    switchView('results');
  }

  /* ==========================================================================
     REVIEW SCREEN
     ========================================================================== */
  function renderReview(filter = 'all', searchTerm = '') {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const totalCount = state.answersLog.length;
    const correctCount = state.answersLog.filter(a => a.isCorrect).length;
    const wrongCount = totalCount - correctCount;

    elements.rfCountAll.textContent = totalCount;
    elements.rfCountCorrect.textContent = correctCount;
    elements.rfCountWrong.textContent = wrongCount;

    let items = state.answersLog;

    if (filter === 'correct') {
      items = items.filter(a => a.isCorrect);
    } else if (filter === 'wrong') {
      items = items.filter(a => !a.isCorrect);
    }

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      items = items.filter(a =>
        a.question.question.toLowerCase().includes(term) ||
        (a.question.category && a.question.category.toLowerCase().includes(term))
      );
    }

    elements.reviewList.innerHTML = '';

    if (items.length === 0) {
      elements.reviewList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-dim); background: var(--bg-card); border-radius: var(--radius-md);">
          No se encontraron preguntas con los filtros seleccionados.
        </div>
      `;
      return;
    }

    items.forEach((item, displayIdx) => {
      const card = document.createElement('div');
      card.className = `review-item ${item.isCorrect ? 'is-correct' : 'is-incorrect'}`;

      const header = document.createElement('div');
      header.className = 'review-q-header';

      const numSpan = document.createElement('span');
      numSpan.className = 'review-q-num';
      numSpan.textContent = `Pregunta #${item.questionIndex} (Banco DGAC #${item.question.num || item.question.id})`;

      const badge = document.createElement('span');
      badge.className = `review-badge ${item.isCorrect ? 'correct' : 'incorrect'}`;
      badge.textContent = item.isCorrect ? 'CORRECTO' : 'INCORRECTO';

      header.appendChild(numSpan);
      header.appendChild(badge);

      const title = document.createElement('h4');
      title.className = 'review-q-title';
      title.textContent = item.question.question;

      const optionsDiv = document.createElement('div');
      optionsDiv.className = 'review-options';

      item.optionsOrder.forEach((opt, oIdx) => {
        const optLetter = letters[oIdx];
        const isUserChoice = oIdx === item.selectedIdx;
        const isOptCorrect = opt.isCorrect;

        const optRow = document.createElement('div');
        optRow.className = 'review-opt';

        let marker = '';
        if (isUserChoice && isOptCorrect) {
          optRow.classList.add('was-correct');
          marker = '✅ Tu respuesta (Correcta): ';
        } else if (isUserChoice && !isOptCorrect) {
          optRow.classList.add('user-picked', 'wrong');
          marker = '❌ Tu respuesta (Incorrecta): ';
        } else if (isOptCorrect) {
          optRow.classList.add('was-correct');
          marker = '🎯 Respuesta Correcta oficial: ';
        }

        optRow.innerHTML = `<strong>[${optLetter}]</strong> ${marker}${escapeHtml(opt.text)}`;
        optionsDiv.appendChild(optRow);
      });

      card.appendChild(header);
      card.appendChild(title);
      card.appendChild(optionsDiv);

      elements.reviewList.appendChild(card);
    });
  }

  /* ==========================================================================
     CONFETTI GENERATOR (Pure Vanilla Canvas Effect)
     ========================================================================== */
  function fireConfetti() {
    const canvas = elements.confettiCanvas;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const colors = ['#38bdf8', '#0284c7', '#10b981', '#34d399', '#f59e0b', '#fbbf24', '#a855f7'];

    for (let i = 0; i < 110; i++) {
      particles.push({
        x: width / 2,
        y: height / 2 + 50,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.8) * 18,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8,
        life: 140
      });
    }

    let animationFrame;
    function render() {
      ctx.clearRect(0, 0, width, height);

      let alive = false;
      particles.forEach(p => {
        if (p.life > 0) {
          alive = true;
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.35; // gravity
          p.vx *= 0.985; // friction
          p.rotation += p.rotSpeed;
          p.life--;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.min(1, p.life / 30);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (alive) {
        animationFrame = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    }

    cancelAnimationFrame(animationFrame);
    render();
  }

  /* ==========================================================================
     UTILITIES
     ========================================================================== */
  function escapeHtml(text) {
    if (!text) return '';
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /* ==========================================================================
     EVENT LISTENERS & BINDINGS
     ========================================================================== */
  function bindEvents() {
    // Theme toggle
    elements.btnThemeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      state.theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
      elements.themeIcon.textContent = state.theme === 'light' ? '☀️' : '🌙';
      localStorage.setItem('rpas_quiz_theme', state.theme);
    });

    // Sound toggle
    elements.btnSoundToggle.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      elements.soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
      localStorage.setItem('rpas_quiz_sound', state.soundEnabled);
      if (state.soundEnabled) playSound('correct');
    });

    // Mode cards selection
    elements.modeCards.forEach(card => {
      card.addEventListener('click', () => {
        elements.modeCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        const mode = card.dataset.mode;
        state.currentMode = mode;

        if (mode === 'category') {
          elements.categoryPickerWrapper.classList.add('visible');
        } else {
          elements.categoryPickerWrapper.classList.remove('visible');
        }
      });
    });

    // Start Quiz Button
    elements.btnStartQuiz.addEventListener('click', () => {
      startQuiz(state.currentMode);
    });

    // Next Question Button
    elements.btnNextQuestion.addEventListener('click', () => {
      goToNextQuestion();
    });

    // Quit Quiz Button
    elements.btnQuitQuiz.addEventListener('click', () => {
      if (confirm('¿Deseas salir del examen en progreso? El avance no guardado se perderá.')) {
        switchView('welcome');
      }
    });

    // Results Actions
    elements.btnRetryAll.addEventListener('click', () => {
      startQuiz(state.currentMode);
    });

    elements.btnRetryFailed.addEventListener('click', () => {
      const failedQuestions = state.answersLog
        .filter(a => !a.isCorrect)
        .map(a => a.question);
      if (failedQuestions.length > 0) {
        startQuiz('failed', failedQuestions);
      }
    });

    elements.btnShowReview.addEventListener('click', () => {
      renderReview('all');
      switchView('review');
    });

    elements.btnBackHome.addEventListener('click', () => {
      switchView('welcome');
    });

    // Review Actions
    elements.btnBackToResults.addEventListener('click', () => {
      switchView('results');
    });

    let currentReviewFilter = 'all';
    elements.reviewFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.reviewFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentReviewFilter = btn.dataset.filter;
        renderReview(currentReviewFilter, elements.reviewSearch.value);
      });
    });

    elements.reviewSearch.addEventListener('input', (e) => {
      renderReview(currentReviewFilter, e.target.value);
    });

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      // Only active during quiz view
      if (!elements.viewQuiz.classList.contains('active')) return;

      const key = e.key.toUpperCase();

      // Number keys 1-5 or Letter keys A-E
      const letterMap = { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4 };
      if (letterMap.hasOwnProperty(key)) {
        const optionIndex = letterMap[key];
        const buttons = elements.optionsList.querySelectorAll('.option-btn');
        if (buttons[optionIndex] && !buttons[optionIndex].disabled) {
          handleOptionSelected(optionIndex);
        }
      }

      // Enter or Space to go to next question if enabled
      if ((e.key === 'Enter' || e.key === ' ') && !elements.btnNextQuestion.disabled) {
        e.preventDefault();
        goToNextQuestion();
      }
    });

    // Window resize for canvas
    window.addEventListener('resize', () => {
      if (elements.confettiCanvas) {
        elements.confettiCanvas.width = window.innerWidth;
        elements.confettiCanvas.height = window.innerHeight;
      }
    });
  }

  /* ==========================================================================
     APP INITIALIZATION
     ========================================================================== */
  function init() {
    // Restore sound preference
    const savedSound = localStorage.getItem('rpas_quiz_sound');
    if (savedSound !== null) {
      state.soundEnabled = savedSound === 'true';
      elements.soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
    }

    // Restore theme preference
    const savedTheme = localStorage.getItem('rpas_quiz_theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
      state.theme = 'light';
      elements.themeIcon.textContent = '☀️';
    }

    // Load questions data
    if (typeof QUESTIONS_DATA !== 'undefined' && Array.isArray(QUESTIONS_DATA)) {
      state.allQuestions = QUESTIONS_DATA;
    } else if (window.QUESTIONS_DATA && Array.isArray(window.QUESTIONS_DATA)) {
      state.allQuestions = window.QUESTIONS_DATA;
    } else {
      console.error('No se pudo encontrar QUESTIONS_DATA.');
    }

    initCategoriesDropdown();
    bindEvents();
    switchView('welcome');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
