# 🚁 Simulador de Examen RPAS DGAC Perú

Aplicación web interactiva para la preparación y práctica del examen teórico de **Acreditación Transitoria de Operadores y Pilotos de RPAS (Drones)** ante la **Dirección General de Aeronáutica Civil (DGAC) - MTC Perú**, conforme a la **NTC 001-2015** y la **Ley N.° 30740**.

---

## 📱 ¿Cómo subirlo a GitHub y usarlo en tu celular?

La web está 100% optimizada para dispositivos móviles (smartphones y tablets) y es totalmente compatible con **GitHub Pages** (alojamiento gratuito).

### Paso 1: Crear el repositorio en GitHub
1. Ingresa a [github.com](https://github.com) e inicia sesión con tu cuenta.
2. Haz clic en el botón verde **"New"** (Nuevo repositorio).
3. Ponle un nombre, por ejemplo: `quiz-rpas` o `examen-rpas`.
4. Asegúrate de marcarlo como **Public** (Público).
5. Haz clic en **"Create repository"**.

### Paso 2: Subir los archivos
1. En la página de tu nuevo repositorio, haz clic en el enlace **"uploading an existing file"** (subir archivos existentes).
2. Arrastra y suelta todos los archivos de esta carpeta:
   - `index.html`
   - `styles.css`
   - `questions.js`
   - `app.js`
   - `manifest.json`
   - `README.md`
3. Haz clic en el botón verde **"Commit changes"**.

### Paso 3: Activar GitHub Pages (1 Clic)
1. En tu repositorio de GitHub, ve a la pestaña **Settings** (Configuración ⚙️ arriba a la derecha).
2. En el menú lateral izquierdo, haz clic en **Pages**.
3. En la sección **Build and deployment > Branch**:
   - Cambia `None` por **`main`** (o `master`).
   - Deja la carpeta en `/(root)`.
   - Haz clic en **Save** (Guardar).
4. Espera entre 30 y 60 segundos. Recarga la página y verás un mensaje verde con tu enlace público:
   > 🌐 `https://tu-usuario.github.io/quiz-rpas/`

---

## 📲 ¿Cómo usarlo como App en tu Celular (Android / iPhone)?

Una vez que tengas tu enlace de GitHub Pages:

### En Android (Google Chrome):
1. Abre el enlace en Chrome.
2. Toca los tres puntos (⋮) arriba a la derecha.
3. Selecciona **"Agregar a la pantalla principal"** o **"Instalar aplicación"**.
4. ¡Listo! Se creará un acceso directo con el icono de helicóptero/dron y funcionará a pantalla completa como una app nativa, incluso sin conexión a internet.

### En iPhone (Safari):
1. Abre el enlace en Safari.
2. Toca el botón de Compartir (el cuadrado con la flecha hacia arriba en la barra inferior).
3. Desliza hacia abajo y selecciona **"Agregar al inicio"** (Add to Home Screen).
4. ¡Listo! Tendrás el simulador como una aplicación en tu pantalla de inicio.

---

## ✨ Características y Reglas Implementadas

1. **🔀 Doble Aleatoriedad Inteligente (Preguntas y Respuestas)**:
   - Al hacer clic en **"Iniciar Examen"**, el orden de las preguntas y las opciones se mezcla aleatoriamente en cada intento.
   - El sistema valida la opción correcta mediante identificador lógico: si la respuesta era la `b` y ahora aparece como opción `a`, el simulador siempre validará correctamente.
2. **⚡ Feedback Instantáneo**:
   - Indicación visual inmediata (verde = acierto, rojo = error).
   - Si fallas, resalta en rojo la marcada y en verde la respuesta oficial correcta.
3. **🎯 Calificación Oficial (75% Aprobatorio)**:
   - Evalúa tu efectividad al terminar.
   - Si obtienes 75.0% o más: ¡APROBADO! con animación de confeti.
4. **📚 180 Preguntas Oficiales**:
   - Incluye el banco íntegro de la DGAC actualizado a 2025.
   - Modos: Examen Completo (180), Simulacro DGAC (40 preguntas), Práctica Rápida (20 preguntas) y Por Materia.
   - Botón para reintentar solo las preguntas falladas.
5. **🎧 Sonido y Modos**:
   - Efectos sonoros integrados mediante Web Audio API (no requiere descargar archivos de audio).
   - Modo Oscuro y Modo Claro.
