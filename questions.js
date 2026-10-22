/**
 * BANCO DE PREGUNTAS DGAC - PERÚ
 * Acreditación transitoria de pilotos / operadores de RPAS
 * Total: 180 preguntas oficiales con respuestas validadas
 */

const QUESTIONS_DATA = [
  // 1 - 10
  {
    id: 1,
    num: 1,
    category: "Reglamentos y Normativa",
    question: "¿Qué es un Plan de Vuelo?",
    options: [
      { text: "Información respecto a un vuelo proyectado o parte del mismo.", isCorrect: true },
      { text: "Información respecto al tiempo meteorológico del momento.", isCorrect: false },
      { text: "Información respecto a un vuelo únicamente de uso comercial", isCorrect: false }
    ]
  },
  {
    id: 2,
    num: 2,
    category: "Reglamentos y Normativa",
    question: "¿Qué es el AIP?",
    options: [
      { text: "Publicación de Información de Mantenimiento", isCorrect: false },
      { text: "Publicación de información para la Navegación Aérea", isCorrect: true },
      { text: "a) y b) son correctas.", isCorrect: false }
    ]
  },
  {
    id: 3,
    num: 3,
    category: "Reglamentos y Normativa",
    question: "¿Cuál es la definición de una aeronave RPA?",
    options: [
      { text: "Una aeronave que puede volar con o sin tripulación.", isCorrect: false },
      { text: "Una RPA es una aeronave pilotada a Distancia.", isCorrect: true },
      { text: "Es un vehículo aéreo de combate no tripulado.", isCorrect: false }
    ]
  },
  {
    id: 4,
    num: 4,
    category: "Reglamentos y Normativa",
    question: "¿Qué función cumple la DGAC?",
    options: [
      { text: "Es la entidad que ejerce la autoridad aeronáutica civil en el país.", isCorrect: false },
      { text: "Es la entidad que regula supervisa, controla, fiscaliza y sanciona todas las actividades aeronáuticas civiles.", isCorrect: false },
      { text: "Todas las anteriores.", isCorrect: true, isAllAbove: true }
    ]
  },
  {
    id: 5,
    num: 5,
    category: "Reglamentos y Normativa",
    question: "Los sistemas de aeronaves pilotadas a distancia (RPAS)",
    options: [
      { text: "Están sujeto a la legislación aeronáutica vigente en el Perú", isCorrect: true },
      { text: "Están sujeto a la legislación aeronáutica del país del fabricante del RPA", isCorrect: false },
      { text: "Actualmente no están sujeto a ningún tipo de legislación", isCorrect: false }
    ]
  },
  {
    id: 6,
    num: 6,
    category: "Reglamentos y Normativa",
    question: "¿Qué es un Área Natural Protegida?",
    options: [
      { text: "Espacio del territorio nacional expresamente reconocido y declarado como tal para conservar la diversidad biológica y demás valores asociados", isCorrect: true },
      { text: "Constituye un paisaje urbanístico del Perú.", isCorrect: false },
      { text: "Porción del territorio nacional de interés histórico.", isCorrect: false }
    ]
  },
  {
    id: 7,
    num: 7,
    category: "Reglamentos y Normativa",
    question: "¿A qué se denomina “Zona Peligrosa” en el espacio aéreo?",
    options: [
      { text: "Área designada en la que no existen condiciones adecuadas de comunicación", isCorrect: false },
      { text: "Espacio aéreo de dimensiones definidas en el cual pueden desplegarse en determinados momentos actividades peligrosas para el vuelo de las aeronaves.", isCorrect: true },
      { text: "Cualquier zona que se encuentre expuesta a eventos naturales.", isCorrect: false }
    ]
  },
  {
    id: 8,
    num: 8,
    category: "Reglamentos y Normativa",
    question: "¿A qué se denomina “Zona Restringida” en el espacio aéreo?",
    options: [
      { text: "Zona entendida como un área geográfica que se reserva para la industrialización.", isCorrect: false },
      { text: "Porción de un terreno o superficie que se halla delimitada, la extensión territorial cuyos límites dependen de cuestiones relacionadas a la política.", isCorrect: false },
      { text: "Espacio aéreo de dimensiones definidas sobre el territorio o las aguas jurisdiccionales de un Estado, dentro del cual está restringido el vuelo de las aeronaves, de acuerdo con determinadas condiciones especificadas", isCorrect: true }
    ]
  },
  {
    id: 9,
    num: 9,
    category: "Reglamentos y Normativa",
    question: "¿A qué se denomina “Zona Prohibida” en el espacio aéreo?",
    options: [
      { text: "Espacio aéreo de dimensiones definidas sobre el territorio o las aguas jurisdiccionales del Estado Peruano, dentro del cual está prohibido el vuelo de las aeronaves", isCorrect: true },
      { text: "Zona entendida como un área geográfica que se reserva para la industrialización.", isCorrect: false },
      { text: "Porción de un terreno o superficie que se halla delimitada, la extensión territorial cuyos límites dependen de cuestiones relacionadas a la política.", isCorrect: false }
    ]
  },
  {
    id: 10,
    num: 10,
    category: "Reglamentos y Normativa",
    question: "¿A qué se denomina “Zona Urbana”?",
    options: [
      { text: "Territorio que mayormente se compone de campos en los cuales se desarrolla la agricultura y se cría ganado.", isCorrect: false },
      { text: "Urbes que están incorporando una serie de sistemas tecnológicos y se consideran como Ciudades inteligentes.", isCorrect: false },
      { text: "Espacio donde habita una población que cuenta con una red de servicios básicos, tales como alumbrado público o servicios de agua potable. Incluye edificaciones, calles, plazas y toda infraestructura utilizada frecuentemente por un colectivo humano.", isCorrect: true }
    ]
  },
  // 11 - 20
  {
    id: 11,
    num: 11,
    category: "Operaciones y Procedimientos",
    question: "¿A qué se denomina “Operación con Visibilidad Directa”?",
    options: [
      { text: "Operación en la cual la tripulación remota mantiene contacto visual directo con la aeronave para dirigir su vuelo.", isCorrect: true },
      { text: "Operación en la cual la tripulación remota no mantiene contacto visual y no puede satisfacer las responsabilidades de separación y anticolisión.", isCorrect: false },
      { text: "Operación que requiere que la tripulación remota establezca contacto visual con la ayuda de cámaras y lentes de aumento tales como telescopios.", isCorrect: false }
    ]
  },
  {
    id: 12,
    num: 12,
    category: "Reglamentos y Normativa",
    question: "¿Cuál es el significado de RPA?",
    options: [
      { text: "Regulation Piloted Aircraft", isCorrect: false },
      { text: "Regulación Aeronáutica del Perú", isCorrect: false },
      { text: "Remote Piloted Aircraft (Aeronave Pilotada a Distancia)", isCorrect: true }
    ]
  },
  {
    id: 13,
    num: 13,
    category: "Reglamentos y Normativa",
    question: "¿Cuál es el significado de RPAS?",
    options: [
      { text: "Remote Piloted Aircraft Survey (Sondeo de Aeronave Pilotada a Distancia)", isCorrect: false },
      { text: "Regulaciones Aeronáuticas del Perú", isCorrect: false },
      { text: "Remote Piloted Aircraft System (Sistema de Aeronaves Pilotadas a Distancia)", isCorrect: true }
    ]
  },
  {
    id: 14,
    num: 14,
    category: "Reglamentos y Normativa",
    question: "¿Cuál es el significado de NOTAM?",
    options: [
      { text: "Notice To Airmen (Información para el personal encargado de las operaciones de vuelo.)", isCorrect: true },
      { text: "Nota de Prensa", isCorrect: false },
      { text: "Nota de Peligro", isCorrect: false }
    ]
  },
  {
    id: 15,
    num: 15,
    category: "Reglamentos y Normativa",
    question: "Según el NTC 001 – 205, la definición de vuelo nocturno es:",
    options: [
      { text: "De 1 hora tras el ocaso a 1 hora antes del amanecer.", isCorrect: false },
      { text: "Un vuelo que se realiza en condiciones no visuales.", isCorrect: false },
      { text: "Un vuelo que ocurre después de la puesta o antes de la salida del sol.", isCorrect: true }
    ]
  },
  {
    id: 16,
    num: 16,
    category: "Responsabilidad y Autoridad",
    question: "La autoridad final con respecto a la operación de una aeronave es:",
    options: [
      { text: "La DGAC.", isCorrect: false },
      { text: "El piloto al mando.", isCorrect: true },
      { text: "El fabricante de una aeronave.", isCorrect: false }
    ]
  },
  {
    id: 17,
    num: 17,
    category: "Mantenimiento y Aeronavegabilidad",
    question: "La responsabilidad de garantizar que una aeronave recibe mantenimiento de condición aeronavegable reside de manera primordial en:",
    options: [
      { text: "El piloto al mando.", isCorrect: false },
      { text: "El propietario u operador.", isCorrect: true },
      { text: "El mecánico que realiza el trabajo.", isCorrect: false }
    ]
  },
  {
    id: 18,
    num: 18,
    category: "Navegación y Conceptos Aéreos",
    question: "La altura es:",
    options: [
      { text: "La distancia vertical entre la aeronave y la superficie terrestre.", isCorrect: true },
      { text: "La distancia entre la aeronave y el nivel del mar.", isCorrect: false },
      { text: "La distancia vertical entre la aeronave y el nivel del mar", isCorrect: false }
    ]
  },
  {
    id: 19,
    num: 19,
    category: "Navegación y Conceptos Aéreos",
    question: "Diferencia entre altitud y altura:\nAltitud: Es cuando se usa un nivel de referencia\nAltura: Es algo que nunca varía",
    options: [
      { text: "Cierto", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 20,
    num: 20,
    category: "Meteorología",
    question: "La presión atmosférica es:",
    options: [
      { text: "Es cuando la densidad del aire disminuye.", isCorrect: false },
      { text: "Es la fuerza por unidad de área que ejerce el aire sobre la superficie terrestre.", isCorrect: true },
      { text: "Es un cambio meteorológico", isCorrect: false }
    ]
  },
  // 21 - 30
  {
    id: 21,
    num: 21,
    category: "Operaciones y Seguridad",
    question: "¿Qué se puede usar para ayudar a cumplir con los parámetros visuales y evitar potenciales peligros?",
    options: [
      { text: "Binoculares", isCorrect: false },
      { text: "Cámara de vista en primera persona", isCorrect: false },
      { text: "Diligencia del piloto remoto", isCorrect: true }
    ]
  },
  {
    id: 22,
    num: 22,
    category: "Limitaciones Operacionales",
    question: "Ninguna persona podrá operar un RPAS en proximidad de personas u obstáculos, debiendo mantener una separación vertical del RPA:",
    options: [
      { text: "Mayor de 10 metros y horizontal mayor de 15 metros, en relación a cualquier obstáculo.", isCorrect: false },
      { text: "Mayor de 20 metros y horizontal mayor de 30 metros, en relación a cualquier obstáculo.", isCorrect: true },
      { text: "Mayor de 40 metros y horizontal mayor de 60 metros, en relación a cualquier obstáculo", isCorrect: false }
    ]
  },
  {
    id: 23,
    num: 23,
    category: "Limitaciones Operacionales",
    question: "Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "Si la masa máxima de despegue del RPA excede los 6 Kg.", isCorrect: false },
      { text: "Si la masa máxima de despegue del RPA excede los 15 Kg.", isCorrect: false },
      { text: "Si la masa máxima de despegue del RPA excede los 25 Kg.", isCorrect: true }
    ]
  },
  {
    id: 24,
    num: 24,
    category: "Información Aeronáutica",
    question: "La información de tiempo crítico sobre los aeropuertos y los cambios que afectan el sistema nacional de espacio aéreo son proporcionados por:",
    options: [
      { text: "NOTAMS", isCorrect: true },
      { text: "Circulares de Asesoramiento", isCorrect: false },
      { text: "Boletín diario del Centro Principal De Comunicaciones AFTN de Lima", isCorrect: false }
    ]
  },
  {
    id: 25,
    num: 25,
    category: "Aerodinámica y Seguridad",
    question: "Lo más peligroso de una entrada en pérdida puede ser:",
    options: [
      { text: "La recuperación.", isCorrect: false },
      { text: "Que se produzca a poca altura.", isCorrect: true },
      { text: "La posible aparición de pérdidas secundarias.", isCorrect: false },
      { text: "La desorientación a la que se ve sometida el piloto.", isCorrect: false }
    ]
  },
  {
    id: 26,
    num: 26,
    category: "Tripulación y Roles",
    question: "¿De quién es única tarea durante una operación UAS de informar cualquier peligro potencial al resto de la tripulación?",
    options: [
      { text: "Piloto remoto al mando", isCorrect: false },
      { text: "Persona manipulando los controles", isCorrect: false },
      { text: "Observador visual", isCorrect: true }
    ]
  },
  {
    id: 27,
    num: 27,
    category: "Limitaciones Operacionales",
    question: "Limitaciones de Operación: Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "Sobre zonas pobladas, cuya población sea menos de 2,000 habitantes.", isCorrect: false },
      { text: "Sobre zonas pobladas, salvo los casos excepcionales que autorice la DGAC", isCorrect: true },
      { text: "Sobre zonas pobladas, salvo casos de emergencia.", isCorrect: false }
    ]
  },
  {
    id: 28,
    num: 28,
    category: "Limitaciones Operacionales",
    question: "Limitaciones de Operación: Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "Sin antes haber realizado una inspección de pre-vuelo para determinar que el RPAS se encuentra en condiciones seguras para operar", isCorrect: true },
      { text: "Sin antes haber revisado la cámara.", isCorrect: false },
      { text: "Sin antes verificar el nivel de carga de la batería", isCorrect: false }
    ]
  },
  {
    id: 29,
    num: 29,
    category: "Limitaciones Operacionales",
    question: "Limitaciones de Operación: Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "Por encima de 600 ft (200.4 m) de altura sobre el terreno", isCorrect: false },
      { text: "Por encima de 400 ft (100.4 m) de altura sobre el terreno", isCorrect: false },
      { text: "Por encima de 500 ft (152.4 m) de altura sobre el terreno", isCorrect: true }
    ]
  },
  {
    id: 30,
    num: 30,
    category: "Limitaciones Operacionales",
    question: "Limitaciones de Operación: Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "A más de 100 mph (87 Kt) de velocidad aérea.", isCorrect: true },
      { text: "A más de 150 mph (80 Kt) de velocidad aérea.", isCorrect: false },
      { text: "A más de 180 mph (90 Kt) de velocidad aérea.", isCorrect: false }
    ]
  },
  // 31 - 40
  {
    id: 31,
    num: 31,
    category: "Limitaciones Operacionales",
    question: "Limitaciones de Operación: Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "Sin apoyo de otros sistemas en una operación con visibilidad directa visual", isCorrect: false },
      { text: "Fuera de condiciones de una operación con visibilidad directa visual", isCorrect: true },
      { text: "Fuera de condiciones de una operación con visibilidad indirecta visual", isCorrect: false }
    ]
  },
  {
    id: 32,
    num: 32,
    category: "Limitaciones Operacionales",
    question: "Limitaciones de Operación: Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "En condiciones nocturnas (después de la puesta o antes de la salida del sol).", isCorrect: true },
      { text: "En condiciones nocturnas sin apoyo de sistemas de iluminación externa.", isCorrect: false },
      { text: "En condiciones nocturnas (antes de la salida del sol).", isCorrect: false }
    ]
  },
  {
    id: 33,
    num: 33,
    category: "Limitaciones Operacionales",
    question: "Limitaciones de Operación: Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "Durante más de 45 minutos continuos.", isCorrect: false },
      { text: "Durante más de una 01 hora continua.", isCorrect: true },
      { text: "Durante más de dos 02 horas continuas.", isCorrect: false }
    ]
  },
  {
    id: 34,
    num: 34,
    category: "Limitaciones Operacionales",
    question: "Limitaciones de Operación: Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "Con un piloto que no haya sido acreditado y/o que no haya sido autorizado.", isCorrect: true },
      { text: "Sin un piloto privado.", isCorrect: false },
      { text: "Sin un piloto planeador.", isCorrect: false }
    ]
  },
  {
    id: 35,
    num: 35,
    category: "Limitaciones Operacionales",
    question: "Limitaciones de Operación: Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "Bajo la influencia de las drogas o el alcohol.", isCorrect: true },
      { text: "Bajo la influencia de drogas o medicamentos salvo autorización del gerente de la empresa.", isCorrect: false },
      { text: "Bajo la influencia de alcohol salvo no exceda del límite máximo de alcohol permitido en la sangre a 0,25 gramos/litro", isCorrect: false }
    ]
  },
  {
    id: 36,
    num: 36,
    category: "Limitaciones Operacionales",
    question: "Limitaciones de Operación: Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "A menos de 4 km de un aeródromo, excepto para fines de prevención de impactos con aves", isCorrect: true },
      { text: "A menos de 3 km de un aeródromo, excepto para fines de prevención de impactos con aves", isCorrect: false },
      { text: "A menos de 2 km de un aeródromo, excepto para fines de prevención de impactos con aves.", isCorrect: false }
    ]
  },
  {
    id: 37,
    num: 37,
    category: "Limitaciones Operacionales",
    question: "Limitaciones de Operación: Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "Descuidando la atención exclusiva al control de la operación del RPAS salvo cuente con un piloto de apoyo.", isCorrect: false },
      { text: "Descuidando la atención exclusiva al control de la operación del RPAS salvo cuente con sistemas de apoyo.", isCorrect: false },
      { text: "Descuidando la atención exclusiva al control de la operación del RPAS", isCorrect: true }
    ]
  },
  {
    id: 38,
    num: 38,
    category: "Limitaciones Operacionales",
    question: "Limitaciones de Operación: Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "Sobre vías de transporte “señalizadas”, incluyendo toda infraestructura vial (viaductos, carreteras, caminos, senderos, puentes), infraestructura de transmisión eléctrica y de telecomunicaciones.", isCorrect: false },
      { text: "Sobre vías de comunicación, incluyendo toda infraestructura vial (viaductos, carreteras, caminos, senderos, puentes), infraestructura de transmisión eléctrica y de telecomunicaciones (postes, torres, cables y antenas), cursos de agua navegables y ductos para transporte de hidrocarburos", isCorrect: true },
      { text: "Sobre vías de comunicación salvo no se perciba concentración de personas.", isCorrect: false }
    ]
  },
  {
    id: 39,
    num: 39,
    category: "Limitaciones Operacionales",
    question: "Limitaciones de Operación:",
    options: [
      { text: "No podrá dejar caer ni lanzar objetos, material o fluidos desde el RPAS salvo en los casos en que haya sido informado a un Inspector DGAC.", isCorrect: false },
      { text: "No podrá dejar caer ni lanzar objetos, material o fluidos desde el RPAS salvo en los casos en que cuente con autorización expresa de la DGAC sobre la base de informes técnicos.", isCorrect: true },
      { text: "No podrá dejar caer ni lanzar objetos, material o fluidos desde el RPAS salvo en los casos de volantes u objetos que no causen daño a la población.", isCorrect: false }
    ]
  },
  {
    id: 40,
    num: 40,
    category: "Limitaciones Operacionales",
    question: "Limitaciones de Operación: Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "En zonas peligrosas, zonas prohibidas y zonas restringidas publicadas en la AIP-PERÚ o en los NOTAM incluidos en el sitio web de CORPAC.", isCorrect: true },
      { text: "En zonas peligrosas, zonas prohibidas y zonas restringidas salvo se responsabilice de causar daños a terceros.", isCorrect: false },
      { text: "En zonas peligrosas, zonas prohibidas salvo cuente con una póliza de seguro.", isCorrect: false }
    ]
  },
  // 41 - 50
  {
    id: 41,
    num: 41,
    category: "Limitaciones Operacionales",
    question: "Limitaciones de Operación: Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "En una navegación aérea internacional o en alta mar, salvo se haya informado previamente a un Inspector DGAC.", isCorrect: false },
      { text: "En una navegación aérea internacional o en alta mar, salvo que cuente con una autorización apropiada de la DGAC.", isCorrect: true },
      { text: "En una navegación aérea internacional o en alta mar, salvo sea realmente imprescindible, de acuerdo a una evaluación de riesgos.", isCorrect: false }
    ]
  },
  {
    id: 42,
    num: 42,
    category: "Operaciones Urbanas",
    question: "La operación de un RPAS en zonas urbanas podrá autorizarse excepcionalmente a los RPA con un peso máximo de despegue de:",
    options: [
      { text: "10 kg", isCorrect: false },
      { text: "5 kg", isCorrect: false },
      { text: "6 kg", isCorrect: true }
    ]
  },
  {
    id: 43,
    num: 43,
    category: "Operaciones Urbanas",
    question: "La operación de un RPAS en zonas urbanas podrá autorizarse excepcionalmente a los RPA sólo en los siguientes casos:",
    options: [
      { text: "Operado por Entidades gubernamentales por razones de seguridad ciudadana, Entidades privadas que prestan servicios declarados de interés público, Cuerpo General de Bomberos Voluntarios del Perú e Instituto Nacional de Defensa Civil (INDECI), en actividades de búsqueda y salvamento, en el combate de incendios y otras emergencias.", isCorrect: true },
      { text: "Operado por Entidades privadas para recreación en días festivos calendarios.", isCorrect: false },
      { text: "Operado por Organismos No Gubernamentales sin fines de lucro.", isCorrect: false }
    ]
  },
  {
    id: 44,
    num: 44,
    category: "Operaciones Urbanas",
    question: "¿En qué casos la DGAC podría autorizar las operaciones RPAS en zonas urbanas?:",
    options: [
      { text: "Siempre que presente una evaluación de riesgo, el RPA no supere una masa máxima de despegue de 6 kg, cuente con paracaídas y póliza de seguros.", isCorrect: true },
      { text: "Solo en operaciones no comerciales", isCorrect: false },
      { text: "A RPAs con una masa máxima de despegue de hasta 25 kg.", isCorrect: false }
    ]
  },
  {
    id: 45,
    num: 45,
    category: "Operaciones Urbanas",
    question: "¿Cuáles son las únicas operaciones de RPAs en zonas urbanas que pueden ser autorizadas sin tener que presentar un análisis de riesgo?:",
    options: [
      { text: "Operaciones del Cuerpo General de Bomberos Voluntarios del Perú y del INDECI, en actividades de búsqueda y salvamento, en el combate de incendios y otras emergencias.", isCorrect: true },
      { text: "Operaciones a cargo de un piloto que cuente con una acreditación de operador RPAS.", isCorrect: false },
      { text: "Operaciones para el control de peligro aviario.", isCorrect: false }
    ]
  },
  {
    id: 46,
    num: 46,
    category: "Regulaciones y Acreditación",
    question: "Las operaciones de RPAS para fines aerodeportivas o recreativas requieren:",
    options: [
      { text: "Autorización de la DGAC", isCorrect: false },
      { text: "Registro del RPAS", isCorrect: true },
      { text: "Que el piloto a distancia cuente con una acreditación de operador RPAS", isCorrect: false }
    ]
  },
  {
    id: 47,
    num: 47,
    category: "Seguridad y Responsabilidad",
    question: "¿Quién es el máximo responsable de identificar los peligros y tomar medidas (o intervenir cuando otra persona manipula los controles) para garantizar la seguridad del vuelo?",
    options: [
      { text: "Piloto remoto al mando", isCorrect: true },
      { text: "Persona manipulando los controles", isCorrect: false },
      { text: "Observador visual", isCorrect: false }
    ]
  },
  {
    id: 48,
    num: 48,
    category: "Navegación y Cartografía",
    question: "¿Qué son coordenadas geográficas?",
    options: [
      { text: "Son los meridianos de un lugar", isCorrect: false },
      { text: "Son los paralelos de un lugar", isCorrect: false },
      { text: "Es el punto imaginario donde convergen la longitud y la latitud de un lugar.", isCorrect: true }
    ]
  },
  {
    id: 49,
    num: 49,
    category: "Navegación y Cartografía",
    question: "Existen 24 Husos Horarios separados cada 15 grados alrededor de todo el Mundo:",
    options: [
      { text: "Cierto", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 50,
    num: 50,
    category: "Navegación y Cartografía",
    question: "¿En cuántos meridianos está dividida la esfera terrestre?",
    options: [
      { text: "730", isCorrect: false },
      { text: "360", isCorrect: true },
      { text: "180", isCorrect: false }
    ]
  },
  // 51 - 60
  {
    id: 51,
    num: 51,
    category: "Navegación y Cartografía",
    question: "Las coordenadas geográficas de un punto son:",
    options: [
      { text: "Un punto determinado, entre el Ecuador y un Meridiano.", isCorrect: false },
      { text: "Un punto en el Espacio, entre un Meridiano y el Meridiano Cero.", isCorrect: false },
      { text: "Un punto situado en el espacio, determinado por un valor", isCorrect: true }
    ]
  },
  {
    id: 52,
    num: 52,
    category: "Navegación y Cartografía",
    question: "Los Meridianos son círculos mayores de Longitud:",
    options: [
      { text: "Cierto", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 53,
    num: 53,
    category: "Navegación y Cartografía",
    question: "Las Líneas que dividen la tierra en 360 partes iguales son los paralelos:",
    options: [
      { text: "Cierto", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 54,
    num: 54,
    category: "Comunicaciones Aeronáuticas",
    question: "¿Cómo deletrearía la palabra ALTITUD según el alfabeto internacional de radiocomunicaciones?",
    options: [
      { text: "Alfa, Limón, Tanto, India, Tango, Uniform, Delta.", isCorrect: false },
      { text: "Alba, Lima, Tango, India, Tango, Uniform, Delta.", isCorrect: false },
      { text: "Alfa, Lima, Tango, India, Tango, Uniform, Delta.", isCorrect: true },
      { text: "Alfa, Limón, Tango, Indio, Tango, Uniform, Delta.", isCorrect: false }
    ]
  },
  {
    id: 55,
    num: 55,
    category: "Reglamentos y Normativa",
    question: "¿Cuál es el ámbito de aplicación de la norma para Operaciones de Sistemas de Aeronaves Pilotadas a Distancia?",
    options: [
      { text: "Dentro de los límites del territorio peruano", isCorrect: true },
      { text: "A nivel internacional", isCorrect: false },
      { text: "A nivel de la región de Sudamérica.", isCorrect: false }
    ]
  },
  {
    id: 56,
    num: 56,
    category: "Emergencias y Procedimientos",
    question: "¿Qué hacer si se pierde contacto visual con el vehículo o sistema aéreo piloteado a distancia?",
    options: [
      { text: "Si tiene sistema de guiado automático por gps activarlo inmediatamente para regresarlo al punto de partida.", isCorrect: false },
      { text: "Si tiene sistema de guiado automático por gps activarlo inmediatamente para regresar al punto de partida o alcance un punto donde se tenga nuevamente contacto visual y se retome el control manual.", isCorrect: true },
      { text: "Tratar de ubicarlo nuevamente realizando maniobras a ciegas.", isCorrect: false }
    ]
  },
  {
    id: 57,
    num: 57,
    category: "Operaciones y Planificación",
    question: "¿Qué puedes hacer para evitar que te sorprenda una baja autonomía?",
    options: [
      { text: "Esperar que se agote la fuente de energía, que se caiga y lo voy a buscar.", isCorrect: false },
      { text: "Operar tomando los tiempos y siempre regresarlo a la base con autonomía remanente.", isCorrect: false },
      { text: "Planificar los vuelos a realizar teniendo en cuenta la distancia y tiempos necesarios para la operación previendo autonomía remanente para regresar a la base o proceder a un aterrizaje controlado.", isCorrect: true }
    ]
  },
  {
    id: 58,
    num: 58,
    category: "Emergencias y Notificación",
    question: "¿Qué hacer si se pierde contacto visual con el vehículo o sistema aéreo piloteado a distancia y no se logra recuperar el mismo?",
    options: [
      { text: "Nada, buscar a ver dónde puede haber caído.", isCorrect: false },
      { text: "Verificar de acuerdo a la planificación del vuelo donde puede estar dándole indicación de retorno a base o a tomar altura para evitar obstáculos.", isCorrect: false },
      { text: "Verificar de acuerdo a la planificación del vuelo donde puede estar dándole indicación de retorno a base o a tomar altura para evitar obstáculos, informar inmediatamente a la autoridad aeronáutica competente si no logramos recuperarlo.", isCorrect: true }
    ]
  },
  {
    id: 59,
    num: 59,
    category: "Meteorología",
    question: "La Niebla se forma cuando:",
    options: [
      { text: "Existe aire húmedo y gran densidad.", isCorrect: false },
      { text: "El aire se enfría por debajo de su punto de rocío.", isCorrect: false },
      { text: "Las nubes están muy bajas, cerca o a nivel del suelo y formadas por partículas de agua de pequeño volumen.", isCorrect: true }
    ]
  },
  {
    id: 60,
    num: 60,
    category: "Meteorología",
    question: "La cantidad de vapor de agua que puede contener el aire depende de:",
    options: [
      { text: "El punto de rocío.", isCorrect: false },
      { text: "La temperatura del aire.", isCorrect: true },
      { text: "La estabilidad del aire", isCorrect: false }
    ]
  },
  // 61 - 70
  {
    id: 61,
    num: 61,
    category: "Meteorología",
    question: "Las nubes, neblina o rocío siempre deben su origen a:",
    options: [
      { text: "La condensación del vapor de agua.", isCorrect: true },
      { text: "La presencia del vapor de agua.", isCorrect: false },
      { text: "Una humedad relativa de 100 por ciento.", isCorrect: false }
    ]
  },
  {
    id: 62,
    num: 62,
    category: "Meteorología",
    question: "La presencia de granizo sobre la superficie es un indicativo de la existencia de:",
    options: [
      { text: "Tormentas en el área.", isCorrect: false },
      { text: "Un pasaje de frente frío.", isCorrect: false },
      { text: "Una inversión térmica con lluvia congelada a una altitud considerable", isCorrect: true }
    ]
  },
  {
    id: 63,
    num: 63,
    category: "Meteorología",
    question: "¿Dónde se suscita el viento cortante?",
    options: [
      { text: "Sólo en altitudes mayores.", isCorrect: false },
      { text: "Sólo en altitudes menores.", isCorrect: false },
      { text: "En todas las altitudes, en todas las direcciones", isCorrect: true }
    ]
  },
  {
    id: 64,
    num: 64,
    category: "Meteorología",
    question: "¿Qué condiciones son necesarias para la formación de tormentas?",
    options: [
      { text: "Alta humedad, fuerza impulsora, y condiciones inestables.", isCorrect: true },
      { text: "Alta humedad, alta temperatura, y nubes cumulus.", isCorrect: false },
      { text: "Fuerza impulsora, aire húmedo, y gran cubierta de nubes.", isCorrect: false }
    ]
  },
  {
    id: 65,
    num: 65,
    category: "Meteorología",
    question: "¿Qué fenómeno meteorológico suele estar asociado a una tormenta?",
    options: [
      { text: "Relámpagos.", isCorrect: true },
      { text: "Lluvia considerable.", isCorrect: false },
      { text: "Granizo.", isCorrect: false }
    ]
  },
  {
    id: 66,
    num: 66,
    category: "Meteorología",
    question: "¿Existe alguna diferencia entre niebla y neblina?",
    options: [
      { text: "Sí, la principal diferencia entre la niebla y la neblina radica en su densidad.", isCorrect: true },
      { text: "No, es lo mismo, impiden la visibilidad a través de ella", isCorrect: false },
      { text: "No, es lo mismo, se producen bajo temperaturas muy bajas.", isCorrect: false }
    ]
  },
  {
    id: 67,
    num: 67,
    category: "Meteorología",
    question: "¿Por qué se originan los vientos?",
    options: [
      { text: "Los vientos se originan por las bajas temperaturas.", isCorrect: false },
      { text: "Los vientos se originan como consecuencia de las diferencias en la presión atmosférica.", isCorrect: true },
      { text: "Los vientos se originan como un aviso de una próxima lluvia.", isCorrect: false }
    ]
  },
  {
    id: 68,
    num: 68,
    category: "Meteorología",
    question: "¿Por qué se origina la brisa marina?",
    options: [
      { text: "Se producen por el efecto de las diferencias de calentamiento y enfriamiento que experimenta la Tierra y las masas de agua.", isCorrect: true },
      { text: "Se originan por el calentamiento del mar.", isCorrect: false },
      { text: "Se producen en las costas.", isCorrect: false }
    ]
  },
  {
    id: 69,
    num: 69,
    category: "Meteorología",
    question: "La presión atmosférica depende de:",
    options: [
      { text: "Altitud, humedad y temperatura.", isCorrect: true },
      { text: "La época del año.", isCorrect: false },
      { text: "Si es anticiclón o borrasca.", isCorrect: false },
      { text: "Todas las anteriores son correctas", isCorrect: false }
    ]
  },
  {
    id: 70,
    num: 70,
    category: "Meteorología",
    question: "Durante el paso de un frente frío, el viento:",
    options: [
      { text: "Disminuye y cambia de dirección.", isCorrect: false },
      { text: "Permanece constante.", isCorrect: false },
      { text: "Aumenta y cambia de dirección.", isCorrect: true },
      { text: "Aumenta y mantiene la misma dirección", isCorrect: false }
    ]
  },
  // 71 - 80
  {
    id: 71,
    num: 71,
    category: "Meteorología",
    question: "¿Cómo se realiza la formación de las nubes?",
    options: [
      { text: "Por la transformación del vapor de agua en cristales de hielo.", isCorrect: false },
      { text: "Por enfriamiento del aire húmedo.", isCorrect: true },
      { text: "Por calentamiento del aire húmedo.", isCorrect: false },
      { text: "Por el aumento de la presión atmosférica.", isCorrect: false }
    ]
  },
  {
    id: 72,
    num: 72,
    category: "Meteorología",
    question: "Cada proceso físico del clima va acompañado o es el resultado de un:",
    options: [
      { text: "Movimiento del aire", isCorrect: false },
      { text: "Presión diferencial", isCorrect: false },
      { text: "Intercambio de calor", isCorrect: true }
    ]
  },
  {
    id: 73,
    num: 73,
    category: "Meteorología",
    question: "¿Cuáles son las características de una masa de aire húmedo inestable?",
    options: [
      { text: "Turbulencia y precipitación lluviosa", isCorrect: true },
      { text: "Poca visibilidad y aire suave", isCorrect: false },
      { text: "Mala visibilidad y humo", isCorrect: false }
    ]
  },
  {
    id: 74,
    num: 74,
    category: "Meteorología",
    question: "¿Qué fenómeno climático señala el comienzo de la etapa madura de una tormenta eléctrica?",
    options: [
      { text: "Nubes con apariencia de “cabeza de yunque”", isCorrect: false },
      { text: "Precipitación que comienza a caer", isCorrect: true },
      { text: "Tasa de crecimiento máxima de las nubes", isCorrect: false }
    ]
  },
  {
    id: 75,
    num: "74b",
    category: "Meteorología",
    question: "¿Qué condiciones son necesarias para la formación de tormentas eléctricas?",
    options: [
      { text: "Alta humedad, fuerza de elevación y condiciones inestables", isCorrect: true },
      { text: "Alta humedad, alta temperatura y cúmulos", isCorrect: false },
      { text: "Fuerza de elevación, la mayoría del aire y una extensa capa de nubes", isCorrect: false }
    ]
  },
  {
    id: 76,
    num: 75,
    category: "Espacio Aéreo",
    question: "¿Qué es un espacio aéreo segregado?",
    options: [
      { text: "Un espacio aéreo para vuelos privados", isCorrect: false },
      { text: "Un espacio aéreo de dimensiones específicas asignado a usuarios específicos para uso exclusivo.", isCorrect: true },
      { text: "Un espacio sin dimensiones específicas asignado a usuarios específicos para uso exclusivo", isCorrect: false }
    ]
  },
  {
    id: 77,
    num: 76,
    category: "Meteorología",
    question: "Se define como ráfaga:",
    options: [
      { text: "El valor de la intensidad del viento cuando es constante.", isCorrect: false },
      { text: "El valor máximo de la intensidad del viento cuando no es constante.", isCorrect: true },
      { text: "La turbulencia creada al sotavento de una montaña.", isCorrect: false }
    ]
  },
  {
    id: 78,
    num: 77,
    category: "Meteorología",
    question: "El aire está saturado cuando…",
    options: [
      { text: "No se puede comprimir más.", isCorrect: false },
      { text: "No admite mayor cantidad de vapor de agua.", isCorrect: true },
      { text: "Su tensión de vapor es mínima", isCorrect: false }
    ]
  },
  {
    id: 79,
    num: 78,
    category: "Meteorología",
    question: "La temperatura a la cual se alcanza el punto de saturación del vapor de agua, se denomina:",
    options: [
      { text: "Punto de saturación.", isCorrect: false },
      { text: "Punto de rocío.", isCorrect: true },
      { text: "Temperatura de ebullición", isCorrect: false }
    ]
  },
  {
    id: 80,
    num: 79,
    category: "Meteorología",
    question: "¿Qué son los núcleos de condensación?",
    options: [
      { text: "Zonas donde el aire alcanza el nivel de condensación.", isCorrect: false },
      { text: "Partículas de la atmósfera en suspensión, sobre las cuales se forman las gotas de agua.", isCorrect: true },
      { text: "Zonas donde se realiza la formación de las nubes", isCorrect: false }
    ]
  },
  // 81 - 90
  {
    id: 81,
    num: 80,
    category: "Meteorología",
    question: "La nube más peligrosa para el vuelo es:",
    options: [
      { text: "Ns. Nimbo Strato.", isCorrect: false },
      { text: "Sc. Strato cúmulos", isCorrect: false },
      { text: "Cb. Cúmulo Nimbos.", isCorrect: true }
    ]
  },
  {
    id: 82,
    num: 81,
    category: "Meteorología",
    question: "Las corrientes de aire en la etapa de desarrollo de una tormenta, son:",
    options: [
      { text: "Ascendente.", isCorrect: true },
      { text: "Descendente.", isCorrect: false },
      { text: "Horizontales.", isCorrect: false }
    ]
  },
  {
    id: 83,
    num: 82,
    category: "Meteorología y Altimetría",
    question: "¿Cuál es la presión de la Atmósfera Estándar a nivel del mar?",
    options: [
      { text: "760 cmHg.", isCorrect: false },
      { text: "1013 hPa", isCorrect: true },
      { text: "1.023 milibares.", isCorrect: false }
    ]
  },
  {
    id: 84,
    num: 83,
    category: "Meteorología",
    question: "Nivel de condensación es:",
    options: [
      { text: "El nivel al cual los cristales de hielo se convierten en agua.", isCorrect: false },
      { text: "La altitud a la cual el vapor de agua alcanza su punto de rocío.", isCorrect: true },
      { text: "La altitud a la cual se trasforma en vapor de agua.", isCorrect: false }
    ]
  },
  {
    id: 85,
    num: 84,
    category: "Meteorología",
    question: "¿Qué es necesario para que se produzca precipitaciones?",
    options: [
      { text: "Que la temperatura ambiente sea elevada.", isCorrect: false },
      { text: "Que la presión atmosférica sea alta.", isCorrect: false },
      { text: "Que el aire esté saturado.", isCorrect: true }
    ]
  },
  {
    id: 86,
    num: 85,
    category: "Meteorología",
    question: "Después del paso de un frente frío, la visibilidad es:",
    options: [
      { text: "Buena.", isCorrect: true },
      { text: "Mala.", isCorrect: false },
      { text: "Regular.", isCorrect: false }
    ]
  },
  {
    id: 87,
    num: 86,
    category: "Meteorología",
    question: "Las nubes bajas, desde cerca del suelo hasta 2.000 metros, son:",
    options: [
      { text: "Nimbo Strato (Ns) - Cirro Cúmulo (Cc) - Strato Cúmulo (Sc).", isCorrect: false },
      { text: "Strato (St) - Strato Cúmulo (Sc) - Nimbo Strato (Ns).", isCorrect: true },
      { text: "Strato Cúmulo (Sc) - Cúmulo (Cu) - Cúmulo Nimbos (Cb).", isCorrect: false }
    ]
  },
  {
    id: 88,
    num: 87,
    category: "Factores Humanos",
    question: "¿Se puede eliminar el error humano?",
    options: [
      { text: "Sí, con el apoyo de la tecnología.", isCorrect: false },
      { text: "No, sin embargo nos podemos preparar para fallar lo menos posible.", isCorrect: true },
      { text: "Sí, con reglas claras y sanciones que se cumplan.", isCorrect: false }
    ]
  },
  {
    id: 89,
    num: 88,
    category: "Factores Humanos y Salud",
    question: "¿Puedo operar una aeronave si estoy sufriendo de alguna dolencia física?",
    options: [
      { text: "Sí, me encuentro medicado", isCorrect: false },
      { text: "No, porque puede interferir con la operación segura del RPA", isCorrect: true },
      { text: "Sí, siempre y cuando tenga un piloto de apoyo.", isCorrect: false }
    ]
  },
  {
    id: 90,
    num: 89,
    category: "Factores Humanos y Actitud",
    question: "¿Es conveniente que el piloto tenga un exceso de confianza en el manejo del RPA?",
    options: [
      { text: "Sí, porque le permite un alto grado de automatización y fiabilidad.", isCorrect: false },
      { text: "Sí, siempre y cuando tenga años de experiencia.", isCorrect: false },
      { text: "No, porque le puede impedir detectar los peligros y subestimar el riesgo", isCorrect: true }
    ]
  },
  // 91 - 100
  {
    id: 91,
    num: 90,
    category: "Factores Humanos y Automatización",
    question: "¿Qué es la complacencia hacia la tecnología?",
    options: [
      { text: "Dependemos de la tecnología. Los avances técnicos nos fuerzan a una dependencia cada vez mayor de ellos", isCorrect: false },
      { text: "Se incrementa el sentimiento de que los sistemas resuelven todos los problemas", isCorrect: false },
      { text: "Todas las anteriores", isCorrect: true, isAllAbove: true }
    ]
  },
  {
    id: 92,
    num: 91,
    category: "Factores Humanos y Fisiología",
    question: "La importancia de detectar las reacciones fisiológicas frente a una situación extrema tiene como objetivo:",
    options: [
      { text: "Evaluar lo que nos está ocurriendo.", isCorrect: false },
      { text: "Determinar conductas que nos permitan aliviar o controlar la reacción.", isCorrect: false },
      { text: "Todas las anteriores", isCorrect: true, isAllAbove: true }
    ]
  },
  {
    id: 93,
    num: 92,
    category: "Ética y Privacidad",
    question: "Respecto a la privacidad de las personas, no está permitido:",
    options: [
      { text: "La grabación y difusión de la imagen de una persona sin su consentimiento ni autorización puede constituir una violación del derecho a la intimidad", isCorrect: false },
      { text: "La grabación de imágenes con fines de espionaje.", isCorrect: false },
      { text: "Todas las anteriores", isCorrect: true, isAllAbove: true }
    ]
  },
  {
    id: 94,
    num: 93,
    category: "Factores Humanos",
    question: "¿Cuál es la premisa básica para enfrentar el tema del error?",
    options: [
      { text: "El entrenamiento puede disminuir a cero la ocurrencia de errores.", isCorrect: false },
      { text: "El error es constitutivo de la naturaleza humana.", isCorrect: true },
      { text: "El error debe ser sancionado.", isCorrect: false }
    ]
  },
  {
    id: 95,
    num: 94,
    category: "Factores Humanos y Cognición",
    question: "¿Cuál es la principal diferencia entre la alerta y la atención?",
    options: [
      { text: "La alerta es una percepción global del entorno, la atención es la focalización en algunos de los estímulos del entorno.", isCorrect: true },
      { text: "La atención es un requisito de la alerta", isCorrect: false },
      { text: "La atención es una percepción global y la alerta es la focalización en algunos de los estímulos del entorno.", isCorrect: false }
    ]
  },
  {
    id: 96,
    num: 95,
    category: "Factores Humanos y Estrés",
    question: "¿Cuáles son los síntomas fácilmente observables a simple vista de un cuadro de estrés?",
    options: [
      { text: "Sudores, piel enrojecida, pupilas dilatadas, respiración acelerada", isCorrect: true },
      { text: "Inhalaciones rápidas y profundas, pinchazos precordiales", isCorrect: false },
      { text: "Aumento de la presión arterial, contracción de las pupilas, pinchazos precordiales", isCorrect: false },
      { text: "Bajadas de la presión arterial", isCorrect: false }
    ]
  },
  {
    id: 97,
    num: 96,
    category: "Factores Humanos y Sustancias",
    question: "Las anfetaminas:",
    options: [
      { text: "Estimulan la vigilancia y combaten la sensación de fatiga, pero provocan una fase posterior de depresión.", isCorrect: false },
      { text: "Tienen efectos anorexígenos.", isCorrect: false },
      { text: "Están completamente contraindicados si se va a operar. Han sido los fármacos que han ocasionado mayor número de incidentes aéreos.", isCorrect: false },
      { text: "Todas las anteriores son ciertas.", isCorrect: true, isAllAbove: true }
    ]
  },
  {
    id: 98,
    num: 97,
    category: "Normativa NTC 001-2015",
    question: "¿Qué número de Norma Técnica Complementaria norma las operaciones de Sistemas de Aeronaves Pilotadas a Distancia?",
    options: [
      { text: "NTC 001 - 2015", isCorrect: true },
      { text: "NTC 001 - 2014", isCorrect: false },
      { text: "NTC 001 - 2016", isCorrect: false }
    ]
  },
  {
    id: 99,
    num: 98,
    category: "Autoridades Aeronáuticas",
    question: "¿Quién es la entidad responsable de controlar el uso de un RPAS en el Perú se realice en el ámbito de la ley y la seguridad?",
    options: [
      { text: "El MTC es responsable de controlar que el uso de dichas aeronaves en el Perú se realice en el ámbito de la ley y la seguridad.", isCorrect: false },
      { text: "La DGAC es responsable de controlar que el uso de dichas aeronaves en el Perú se realice en el ámbito de la ley y la seguridad.", isCorrect: true },
      { text: "Ninguna es correcta", isCorrect: false }
    ]
  },
  {
    id: 100,
    num: 99,
    category: "Normativa NTC 001-2015",
    question: "¿A quién se aplica la NTC 001 - 2015?",
    options: [
      { text: "Esta NTC es aplicable a las personas u organizaciones que pretendan hacer uso de sistemas de aeronaves pilotadas a distancia (RPAS) para cualquier actividad civil.", isCorrect: true },
      { text: "Esta NTC es aplicable a las personas u organizaciones que pretendan hacer uso de sistemas de aeronaves pilotadas a distancia (RPAS) para cualquier actividad civil o militar.", isCorrect: false },
      { text: "Las dos anteriores son correctas", isCorrect: false }
    ]
  },
  // 101 - 110
  {
    id: 101,
    num: 100,
    category: "Normativa NTC 001-2015",
    question: "¿A quién no se aplica la NTC 001 - 2015?",
    options: [
      { text: "No aplica a las operaciones de fotografía.", isCorrect: false },
      { text: "No aplica a las aeronaves de civiles.", isCorrect: false },
      { text: "No aplica a las aeronaves de Estado, es decir a aquellas que sean utilizadas en servicios militares, de policía o de aduanas.", isCorrect: true }
    ]
  },
  {
    id: 102,
    num: 101,
    category: "Registro y DGAC",
    question: "¿Qué debe hacer todo propietario de un RPAS ante la DGAC?",
    options: [
      { text: "Todo propietario de un RPAS deberá registrarlo en la DGAC, en la Dirección de Certificaciones y Autorizaciones.", isCorrect: true },
      { text: "Todo propietario de un RPAS deberá registrarlo en la DGAC, Dirección de Regulación y Promoción.", isCorrect: false },
      { text: "Ambas son correctas", isCorrect: false }
    ]
  },
  {
    id: 103,
    num: 102,
    category: "Registro y DGAC",
    question: "¿Qué Dirección de la DGAC otorga al operador la Tarjeta de registro del RPAS?",
    options: [
      { text: "La Dirección de Certificaciones y Autorizaciones", isCorrect: true },
      { text: "La Dirección de Regulación y Promoción", isCorrect: false },
      { text: "La Dirección de Seguridad Aeronáutica", isCorrect: false }
    ]
  },
  {
    id: 104,
    num: 103,
    category: "Acreditación de Piloto",
    question: "¿Dónde será tramitada la Acreditación transitoria del operador/piloto de RPAS?",
    options: [
      { text: "Será tramitada ante la Coordinación Técnica de Operaciones de la Dirección de Seguridad Aeronáutica de la DGAC", isCorrect: false },
      { text: "Será tramitada ante la Coordinación Técnica de Licencias de la Dirección de Certificaciones y Autorizaciones de la DGAC", isCorrect: true },
      { text: "Será tramitada ante la Coordinación Técnica de Aeronavegabilidad de la Dirección de Seguridad Aeronáutica de la DGAC", isCorrect: false }
    ]
  },
  {
    id: 105,
    num: 104,
    category: "Autorizaciones de Vuelo",
    question: "¿Quién debe contar con una autorización para operar un RPAS?",
    options: [
      { text: "Toda persona que opere o pilotee a distancia un RPAS para la práctica aerodeportiva o recreativa.", isCorrect: false },
      { text: "Toda persona que opere o pilotee a distancia un RPAS para la práctica aerodeportiva, recreativa o militar.", isCorrect: false },
      { text: "Toda persona que opere o pilotee a distancia un RPAS para usos diferentes a la práctica aerodeportiva o recreativa.", isCorrect: true }
    ]
  },
  {
    id: 106,
    num: 105,
    category: "Apéndices NTC 001-2015",
    question: "El Apéndice “A” de la NTC 001 - 2015 se refiere a:",
    options: [
      { text: "Declaración jurada simple de responsabilidad solidaria NTC", isCorrect: false },
      { text: "Declaración jurada simple de solicitante de acreditación transitoria de operador / piloto de RPAS", isCorrect: false },
      { text: "Formato de solicitud de registro de datos de RPAS", isCorrect: true }
    ]
  },
  {
    id: 107,
    num: 106,
    category: "Apéndices NTC 001-2015",
    question: "El Apéndice “B” de la NTC 001 - 2015 se refiere a:",
    options: [
      { text: "Declaración jurada simple de responsabilidad solidaria", isCorrect: false },
      { text: "Declaración jurada simple de solicitante de acreditación transitoria de operador / piloto de RPAS", isCorrect: true },
      { text: "Formato de solicitud de registro de datos de RPAS", isCorrect: false }
    ]
  },
  {
    id: 108,
    num: 107,
    category: "Apéndices NTC 001-2015",
    question: "El Apéndice “C” de la NTC 001 - 2015 se refiere a:",
    options: [
      { text: "Declaración jurada simple de responsabilidad solidaria", isCorrect: true },
      { text: "Declaración jurada simple de solicitante de acreditación transitoria de operador / piloto de RPAS", isCorrect: false },
      { text: "Formato de solicitud de autorización y análisis de riesgo para una operación de sistema de aeronave pilotada a distancias en zonas urbanas o en la vecindad de aeródromos", isCorrect: false }
    ]
  },
  {
    id: 109,
    num: 108,
    category: "Requisitos de Edad",
    question: "¿Pueden ser menores de edad los operadores Sistemas de Aeronaves Pilotadas a Distancia con fines recreativos o deportivos?",
    options: [
      { text: "Sí, cuando sea mayor de 16 años y bajo supervisión de un mayor de edad.", isCorrect: false },
      { text: "No, debes tener 18 años o más.", isCorrect: true },
      { text: "Sí, solo si está acompañado de un instructor.", isCorrect: false }
    ]
  },
  {
    id: 110,
    num: 109,
    category: "Seguros y Pólizas",
    question: "¿Es obligatorio toda persona que opere o pilotee a distancia un RPAS para usos diferentes a la práctica aerodeportiva o recreativa cuente con una póliza de seguro?",
    options: [
      { text: "No es obligatorio", isCorrect: false },
      { text: "No, solo presentar una declaración jurada de responsabilidad solidaria", isCorrect: false },
      { text: "Es obligatorio contar con una póliza de seguros de responsabilidad civil frente a terceros por los daños que puedan surgir durante sus operaciones.", isCorrect: true }
    ]
  },
  // 111 - 120
  {
    id: 111,
    num: 110,
    category: "Seguros y Pólizas",
    question: "Los seguros a contratar por un operador de un RPAS para usos diferentes a la práctica aerodeportiva o recreativa, ¿qué tipo de cobertura tendrán?",
    options: [
      { text: "La cobertura mínima será de 10 UITs", isCorrect: true },
      { text: "Todo riesgo", isCorrect: false },
      { text: "Solo terceros en superficie.", isCorrect: false }
    ]
  },
  {
    id: 112,
    num: 111,
    category: "Operaciones y Seguridad",
    question: "Se recomienda a los pilotos de los vehículos o sistemas aéreos piloteados a distancia que posean luces de navegación encenderlas…",
    options: [
      { text: "En cualquier momento que el vehículo se encuentre en operación.", isCorrect: false },
      { text: "Solo cuando está volando", isCorrect: false },
      { text: "Durante cualquier tipo de operación de día o de noche", isCorrect: true }
    ]
  },
  {
    id: 113,
    num: 112,
    category: "Limitaciones Operacionales",
    question: "Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "Sobre personas no involucradas en la operación.", isCorrect: false },
      { text: "En proximidad de personas u obstáculos, debiendo mantener una separación vertical del RPA mayor de 20 metros y horizontal mayor de 30 metros, en relación a cualquier obstáculo.", isCorrect: false },
      { text: "Las dos anteriores son verdaderas", isCorrect: true, isAllAbove: true }
    ]
  },
  {
    id: 114,
    num: 113,
    category: "Requisitos de Operación",
    question: "Ninguna persona podrá operar un RPAS:",
    options: [
      { text: "Sin contar con una batería adicional", isCorrect: false },
      { text: "Sin contar con el manual del fabricante del RPAS", isCorrect: true },
      { text: "Sin contar con los teléfonos de emergencia", isCorrect: false }
    ]
  },
  {
    id: 115,
    num: 114,
    category: "Seguridad Aeroportuaria",
    question: "Para control de peligro aviario, el explotador del aeródromo deberá contener como mínimo las siguientes previsiones:",
    options: [
      { text: "Características de la fauna aviar vinculada a incidentes en el aeródromo y localización del peligro aviar", isCorrect: true },
      { text: "Entidades gubernamentales encargadas de la fauna aviar", isCorrect: false },
      { text: "Cuerpo General de Bomberos Voluntarios del Perú", isCorrect: false }
    ]
  },
  {
    id: 116,
    num: 115,
    category: "Operaciones Urbanas",
    question: "La operación de un RPAS en zonas urbanas podrá autorizarse excepcionalmente a los RPA con un peso máximo de despegue:",
    options: [
      { text: "De hasta 6 kg equipados con paracaídas de emergencia", isCorrect: true },
      { text: "De dos (2) Kg.", isCorrect: false },
      { text: "De tres (3) kg.", isCorrect: false }
    ]
  },
  {
    id: 117,
    num: 116,
    category: "Legislación Peruana",
    question: "¿Cuál es el nombre y número de la ley que regula el uso y las operaciones de los Sistemas de Aeronaves Pilotadas a Distancia (RPAS) en Perú?",
    options: [
      { text: "Ley N.° 30720 - Uso y Operaciones de Aeronaves Comerciales.", isCorrect: false },
      { text: "Ley N.° 30740 - Ley que regula el uso y las operaciones de los Sistemas de Aeronaves Pilotadas a Distancia (RPAS).", isCorrect: true },
      { text: "Ley N.° 30680 - Regulación de Tránsito Aéreo Local.", isCorrect: false }
    ]
  },
  {
    id: 118,
    num: 117,
    category: "Legislación Ley 30740",
    question: "¿Qué autoridad es responsable de regular el uso de los Sistemas de Aeronaves Pilotadas a Distancia (RPAS) en Perú según la Ley N.° 30740?",
    options: [
      { text: "El Ministerio de Defensa.", isCorrect: false },
      { text: "La Dirección General de Aeronáutica Civil (DGAC).", isCorrect: true },
      { text: "La Policía Nacional del Perú.", isCorrect: false }
    ]
  },
  {
    id: 119,
    num: 118,
    category: "Operación de Vuelo",
    question: "¿Cuántos RPAS puede operar el piloto remoto a la vez? (a menos que la DGAC autorice lo contrario, por ejemplo en vuelos de enjambre de drones)",
    options: [
      { text: "1", isCorrect: true },
      { text: "5", isCorrect: false },
      { text: "No más de 2", isCorrect: false }
    ]
  },
  {
    id: 120,
    num: 119,
    category: "Tripulación y Licencias",
    question: "¿Qué tripulante debe tener una acreditación de piloto remoto?",
    options: [
      { text: "Piloto remoto al mando", isCorrect: true },
      { text: "Observador visual", isCorrect: false },
      { text: "Piloto privado", isCorrect: false }
    ]
  },
  // 121 - 130
  {
    id: 121,
    num: 120,
    category: "Legislación Ley 30740",
    question: "La Ley N.° 30740 regula el uso y las operaciones de los sistemas de aeronaves pilotadas a distancia (RPAS).",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 122,
    num: 121,
    category: "Normativa NTC 001-2015",
    question: "La NTC 001 - 2015 establece requisitos técnicos y operativos para las operaciones de RPAS en el Perú.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 123,
    num: 122,
    category: "Operaciones Urbanas",
    question: "Un RPAS NO puede operar en zonas urbanas sin autorización previa.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 124,
    num: 123,
    category: "Línea de Vista y Operaciones",
    question: "El piloto remoto debe mantener contacto visual directo con el RPAS durante toda la operación.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 125,
    num: 124,
    category: "Áreas Naturales Protegidas",
    question: "La operación de RPAS en áreas naturales protegidas está permitida sin restricciones.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 126,
    num: 125,
    category: "Autoridades Aeronáuticas",
    question: "La DGAC es la entidad encargada de regular y supervisar las actividades relacionadas con RPAS en el Perú.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 127,
    num: 126,
    category: "Limitaciones y Peso",
    question: "El peso máximo de despegue permitido para un RPAS sin paracaídas es de 25 kg.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 128,
    num: 127,
    category: "Seguridad Operacional",
    question: "El piloto remoto es responsable de evitar colisiones con otras aeronaves y obstáculos.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 129,
    num: 128,
    category: "Sanciones y Régimen Legal",
    question: "La Ley N.° 30740 contempla las sanciones por incumplimiento de las normativas de RPAS.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 130,
    num: 129,
    category: "Privacidad y Vigilancia",
    question: "El uso de cámaras en RPAS para vigilancia requiere autorización específica.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  // 131 - 140
  {
    id: 131,
    num: 130,
    category: "Operaciones Nocturnas",
    question: "La NTC 001 - 2015 no permite operaciones nocturnas de RPAS.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 132,
    num: 131,
    category: "Plan de Vuelo",
    question: "El plan de vuelo es obligatorio para todas las operaciones de RPAS.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 133,
    num: 132,
    category: "Espacio Aéreo",
    question: "Los RPAS pueden operar en zonas restringidas sin necesidad de permisos adicionales.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 134,
    num: 133,
    category: "Seguridad Operacional",
    question: "La Ley N.° 30740 garantiza la seguridad operacional de los usuarios del espacio aéreo.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 135,
    num: 134,
    category: "Normativa NTC 001-2015",
    question: "La NTC 001 - 2015 regula las características técnicas de los RPAS.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 136,
    num: 135,
    category: "Licencias Comerciales",
    question: "El uso de RPAS para actividades comerciales requiere una licencia específica.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 137,
    num: 136,
    category: "Responsabilidad del Piloto",
    question: "El piloto remoto NO puede delegar la responsabilidad de la operación a un tercero no certificado.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 138,
    num: 137,
    category: "Operaciones Urbanas",
    question: "La operación de RPAS en zonas de alta densidad poblacional requiere medidas de seguridad adicionales.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 139,
    num: 138,
    category: "Ámbito de la Ley 30740",
    question: "La Ley N.° 30740 aplica únicamente a RPAS de uso recreativo.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 140,
    num: 139,
    category: "Documentación y Operación",
    question: "El manual del fabricante del RPAS debe estar disponible durante la operación.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  // 141 - 150
  {
    id: 141,
    num: 140,
    category: "Mercancías Peligrosas",
    question: "La NTC 001 - 2015 permite el uso de RPAS para transporte de mercancías peligrosas sin restricciones.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 142,
    num: 141,
    category: "Inspecciones Previas",
    question: "El piloto remoto debe realizar inspecciones previas al vuelo del RPAS.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 143,
    num: 142,
    category: "Espacio Aéreo Controlado",
    question: "La Ley N.° 30740 no regula el uso de RPAS en espacios aéreos controlados.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 144,
    num: 143,
    category: "Sanciones Administrativas",
    question: "El incumplimiento de las normativas de RPAS puede resultar en sanciones administrativas, como multas.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 145,
    num: 144,
    category: "Autorizaciones Especiales",
    question: "El uso de RPAS para actividades de investigación científica requiere autorización de la DGAC.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 146,
    num: 145,
    category: "Operación de Múltiples RPAS",
    question: "El piloto remoto puede operar múltiples RPAS simultáneamente sin restricciones.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 147,
    num: 146,
    category: "Desarrollo Tecnológico",
    question: "La Ley N.° 30740 promueve el desarrollo de tecnologías RPAS en el Perú.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 148,
    num: 147,
    category: "Zonas de Conflicto",
    question: "El uso de RPAS en zonas de conflicto armado está permitido bajo la Ley N.° 30740.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 149,
    num: 148,
    category: "Línea de Vista (VLOS)",
    question: "El piloto de RPAS debe mantener una línea de vista directa con la aeronave durante toda la operación.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 150,
    num: 149,
    category: "Aglomeraciones de Personas",
    question: "La NTC 001 - 2015 permite el vuelo de RPAS sobre aglomeraciones de personas sin ninguna restricción.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  // 151 - 160
  {
    id: 151,
    num: 150,
    category: "Sustancias y Alcohol",
    question: "Está prohibido operar un RPAS bajo la influencia de sustancias psicoactivas o alcohol según la normativa vigente.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 152,
    num: 151,
    category: "Responsabilidad del Propietario",
    question: "El propietario de un RPAS es responsable de asegurar el cumplimiento de la normativa de seguridad operacional.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 153,
    num: 152,
    category: "Inspecciones Previas",
    question: "No es necesario realizar una inspección previa al vuelo del RPAS antes de cada operación.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 154,
    num: 153,
    category: "Condiciones Meteorológicas",
    question: "Las condiciones meteorológicas adversas pueden limitar la operación segura de un RPAS.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 155,
    num: 154,
    category: "Actividades Comerciales",
    question: "El uso de un RPAS para actividades comerciales está regulado por la NTC 001 - 2015.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 156,
    num: 155,
    category: "Zonas Restringidas",
    question: "Un operador de RPAS puede sobrevolar zonas restringidas sin autorización previa.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 157,
    num: 156,
    category: "Carga Útil y Rendimiento",
    question: "La carga útil del RPAS afecta su desempeño y características de vuelo.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 158,
    num: 157,
    category: "Acreditación y Licencias",
    question: "Los operadores de RPAS deben contar con una licencia vigente para realizar vuelos autorizados según la normativa.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 159,
    num: 158,
    category: "Procedimientos de Emergencia",
    question: "La pérdida de conexión entre el RPA y el control remoto requiere procedimientos de emergencia inmediatos.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 160,
    num: 159,
    category: "Documentación Técnica",
    question: "La documentación técnica del RPAS debe estar disponible durante todas las operaciones.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  // 161 - 170
  {
    id: 161,
    num: 160,
    category: "Operaciones Nocturnas",
    question: "Está permitido operar RPAS durante la noche bajo la NTC 001 - 2015 sin restricciones adicionales.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 162,
    num: 161,
    category: "Espacio Aéreo Controlado",
    question: "Los pilotos de RPAS tienen la obligación de garantizar que no se invadan espacios aéreos controlados sin autorización.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 163,
    num: 162,
    category: "Normativa NTC 001-2015",
    question: "La NTC 001 - 2015 regula el uso de RPAS exclusivamente para fines recreativos.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 164,
    num: 163,
    category: "Plan de Vuelo Urbano",
    question: "Un plan de vuelo no es necesario para operaciones de RPAS dentro de zonas urbanas.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 165,
    num: 164,
    category: "Registro de RPAS",
    question: "Es obligatorio registrar la aeronave RPAS antes de realizar operaciones comerciales.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 166,
    num: 165,
    category: "Infraestructura Crítica",
    question: "La operación de RPAS cerca de infraestructura crítica debe cumplir con restricciones específicas según la normativa.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 167,
    num: 166,
    category: "Objetivos Normativos",
    question: "El objetivo de un Reglamento para el uso del espacio aéreo por drones, por ejemplo la NTC 001 – 2015 es establecer los requisitos y limitaciones para la operación de RPAS de uso civil, con el objeto de garantizar la seguridad operacional de todos los demás usuarios del espacio aéreo así como la seguridad de las personas y bienes en tierra.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  {
    id: 168,
    num: 167,
    category: "Definiciones Operacionales",
    question: "¿Qué es un área poblada?",
    options: [
      { text: "Área donde habitan personas, incluyendo sus viviendas, centros de trabajo y lugares en los que realizan actividades recreacionales y sociales. Incluye edificaciones, calles, plazas, playas y toda infraestructura o espacio público utilizado frecuentemente por un colectivo humano.", isCorrect: true },
      { text: "Un área donde la gente está presente permanentemente", isCorrect: false },
      { text: "Un área con más de 10 habitantes por metro cuadrado.", isCorrect: false }
    ]
  },
  {
    id: 169,
    num: 168,
    category: "Pilotos Extranjeros",
    question: "Un piloto extranjero que cuente con licencia en su país de origen tendrá libertad de volar con las mismas autorizaciones en el Perú, siempre que registre su aeronave no tripulada.",
    options: [
      { text: "Verdadero", isCorrect: false },
      { text: "Falso", isCorrect: true }
    ]
  },
  {
    id: 170,
    num: 169,
    category: "Meteorología y Clima Espacial",
    question: "Se debe verificar cuidadosamente el índice KP en el área donde se pretende volar y los índices mayores o iguales a 4 deben considerarse como una tormenta solar, lo que puede dificultar el control de aeronaves no tripuladas, drones.",
    options: [
      { text: "Verdadero", isCorrect: true },
      { text: "Falso", isCorrect: false }
    ]
  },
  // 171 - 180
  {
    id: 171,
    num: 170,
    category: "Pilotos Recreativos",
    question: "Un piloto recreativo es una persona que:",
    options: [
      { text: "Vuela su RPA simplemente por diversión.", isCorrect: true },
      { text: "Es posible que le paguen por volar en ocasiones específicas.", isCorrect: false },
      { text: "Puedes volar mientras trabajas, profesionalmente, siempre y cuando no te paguen nada.", isCorrect: false }
    ]
  },
  {
    id: 172,
    num: 171,
    category: "Restricciones de Vuelo",
    question: "En el caso de eventos importantes, por ejemplo una visita al país de autoridades importantes (reunión de jefes de Estado), ¿qué sucederá normalmente?",
    options: [
      { text: "La Policía enviará un correo electrónico o SMS de alerta a todos los pilotos de RPAS.", isCorrect: false },
      { text: "No hay nada que afecte las operaciones de vuelo de los RPAS.", isCorrect: false },
      { text: "Se podría emitir una Restricción Temporal de Vuelo, e incluso se podrían cancelar vuelos previamente autorizados.", isCorrect: true }
    ]
  },
  {
    id: 173,
    num: 172,
    category: "Verificación de Zonas",
    question: "¿Cómo puede un piloto recreativo comprobar si está autorizado a volar en la zona que pretende volar?",
    options: [
      { text: "Contactar con la policía local.", isCorrect: false },
      { text: "Contactar con la DGAC.", isCorrect: false },
      { text: "Uso de la herramienta Visor Geográfico.", isCorrect: true }
    ]
  },
  {
    id: 174,
    num: 173,
    category: "Espacio Aéreo Controlado",
    question: "¿En qué zonas tendremos normalmente espacio aéreo controlado?",
    options: [
      { text: "Cerca de aeropuertos, grandes ciudades y áreas metropolitanas.", isCorrect: true },
      { text: "Pequeñas ciudades y zonas rurales.", isCorrect: false },
      { text: "Todo el espacio aéreo es controlado.", isCorrect: false }
    ]
  },
  {
    id: 175,
    num: 174,
    category: "Prioridad de Paso",
    question: "Marca la alternativa correcta:",
    options: [
      { text: "Independientemente de la altura de vuelo del helicóptero, debo ceder el paso y, si es necesario, aterrizar inmediatamente mi dron.", isCorrect: true },
      { text: "El helicóptero debe volar por encima de los 400 pies. Como estoy volando hasta un máximo de 400 pies, no necesito hacer nada y puedo seguir volando mi dron.", isCorrect: false },
      { text: "Si estoy volando mi dron de forma recreativa en un vuelo permitido, si aparece un helicóptero, el piloto del helicóptero debe evitar mi dron.", isCorrect: false }
    ]
  },
  {
    id: 176,
    num: 175,
    category: "Línea de Vista y Observador",
    question: "Si estoy volando con la ayuda de un observador, ¿puedo volar más allá de la línea de visión (sin ver mi dron)?",
    options: [
      { text: "Verdadero, siempre y cuando el observador vea mi dron en todo momento.", isCorrect: false },
      { text: "Verdadero, siempre que el observador tenga contacto con el piloto en todo momento.", isCorrect: false },
      { text: "Falso. El observador puede ayudar en la conducción del vuelo del dron, pero debe estar cerca del piloto y no está permitido volar más allá de la línea de visión.", isCorrect: true }
    ]
  },
  {
    id: 177,
    num: 176,
    category: "Operación FPV",
    question: "Cuando un piloto está realizando un vuelo recreativo, utilizando gafas FPV:",
    options: [
      { text: "Debe haber un observador que ayude a realizar el vuelo.", isCorrect: false },
      { text: "Debe haber un observador que mantenga el dron en la línea de visión visual en todo momento.", isCorrect: false },
      { text: "El piloto es responsable del vuelo; el observador es solo un asistente.", isCorrect: false },
      { text: "Todas las afirmaciones son correctas.", isCorrect: true, isAllAbove: true }
    ]
  },
  {
    id: 178,
    num: 177,
    category: "Enlace de Control y Emergencias",
    question: "La pérdida de la señal del enlace de control es la causa más común de incidentes con drones, por lo que además de mantener el dron en la línea de visión, es importante que observe la intensidad de la señal del enlace de control establecido entre el control remoto y el dron. Seleccione la opción correcta:",
    options: [
      { text: "El piloto puede perder la señal de control debido a una interferencia o una mala conexión. Por eso debes prestar atención a las zonas donde vuelas tu dron.", isCorrect: false },
      { text: "Es importante comprender, conocer y ajustar qué sucederá con su dron si el piloto pierde la conexión de radio (RTH, RTL, estacionario o aterrizaje).", isCorrect: false },
      { text: "Es importante saber que es posible que el dron pierda la señal de conexión y no realice el procedimiento esperado como RTH. El piloto debe conocer el manual y estar preparado.", isCorrect: false },
      { text: "Todas las afirmaciones son correctas.", isCorrect: true, isAllAbove: true }
    ]
  },
  {
    id: 179,
    num: 178,
    category: "Responsabilidad y Automatización",
    question: "Un piloto recreativo debe comprender todo lo que su dron realizará en cada maniobra de vuelo automatizada.",
    options: [
      { text: "El piloto no es responsable del vuelo automático. La responsabilidad recae en el fabricante del dron.", isCorrect: false },
      { text: "Como la maniobra es automática, el piloto queda libre de la responsabilidad de mantener la separación entre personas y obstáculos.", isCorrect: false },
      { text: "Independientemente de si se vuela de forma automática, la responsabilidad del vuelo siempre recae en el Piloto y, si ocurre algún incidente o accidente, éste será responsable de lo ocurrido.", isCorrect: true }
    ]
  },
  {
    id: 180,
    num: 179,
    category: "Buenas Prácticas Pre-Vuelo",
    question: "Antes de volar su dron, es una buena práctica...",
    options: [
      { text: "Avisar a las personas que vas a sobrevolarlas.", isCorrect: false },
      { text: "Conocer el manual del dron, especialmente la información de seguridad.", isCorrect: false, idCode: "b" },
      { text: "Configurar correctamente las acciones que realizará el dron en caso de pérdida de la señal de enlace de control.", isCorrect: false, idCode: "c" },
      { text: "Conocer el manual y configurar correctamente las acciones ante pérdida de enlace son correctas.", isCorrect: true, isCombo: true }
    ]
  }
];

// Verify integrity
if (typeof window !== 'undefined') {
  window.QUESTIONS_DATA = QUESTIONS_DATA;
}
