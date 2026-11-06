import type { LocalizedGuideArticle } from "../guidesData";

export const esNewGuides: Record<string, LocalizedGuideArticle> = {
  "how-much-do-podcasts-make": {
    title: "¿Cuánto Gana un Podcast? Ingresos Reales por Número de Oyentes",
    description: "Descubre cuánto ganan los podcasts en 2026. Analiza ingresos por CPM publicitario, membresías, patrocinios y ganancias según descargas. Guía gratis.",
    readTime: "Lectura de 8 min",
    publishedAt: "2026-11-06",
    category: "Monetización",
    sections: [
      {
        heading: "¿Cuánto Gana un Podcast en 2026?",
        paragraphs: [
          "Los ingresos de un podcast varían desde cero en programas aficionados hasta cientos de miles de euros al año en grandes cadenas de audio. Sin embargo, para la mayoría de los creadores independientes, los ingresos están ligados al volumen verificado de descargas a 30 días, el poder adquisitivo del oyente y la diversificación de fuentes de monetización.",
          "Según estudios de mercado de AdvertiseCast, el informe IAB/PwC sobre publicidad en podcasts y datos de Patreon, los podcasters generan ingresos combinando patrocinios leídos por el anfitrión, marketing de afiliados, membresías y venta de productos o servicios propios. Utiliza nuestra <a href=\"/es/tools/monetization-calculator\" class=\"text-[#0070f3] underline font-medium\">Calculadora de Ingresos de Podcast</a> gratuita para estimar tu potencial.",
        ],
      },
      {
        heading: "Ingresos de Podcast según Descargas por Episodio",
        paragraphs: [
          "La mayoría de los acuerdos de patrocinio se calculan sobre una base CPM (Coste Por Mil descargas), que abona entre 18 y 35 dólares por cada 1.000 descargas en cuñas mid-roll de 60 segundos. Estos son los ingresos mensuales típicos para un podcast semanal (4 episodios al mes):",
        ],
        cards: [
          {
            title: "Aficionado (Menos de 1.000 descargas)",
            value: "0 € – 150 € / mes",
            description: "Monetización mediante enlaces de afiliados, propinas voluntarias o pequeños comercios locales.",
          },
          {
            title: "Creador en Crecimiento (1.000 – 5.000 descargas)",
            value: "200 € – 1.200 € / mes",
            description: "Acceso a patrocinadores especializados de nicho (25 € CPM mid-roll), suscripciones prémium y guías digitales.",
            highlight: true,
          },
          {
            title: "Podcast Consolidado (10.000 – 50.000 descargas)",
            value: "2.500 € – 15.000 € / mes",
            description: "Espacios de patrocinio completos en pre-roll y mid-roll, comunidad en Patreon de pago y eventos.",
            highlight: true,
          },
        ],
      },
      {
        heading: "Publicidad CPM frente a Vías Alternativas de Monetización",
        paragraphs: [
          "Depender únicamente de anuncios CPM exige una escala considerable. Un podcast con 2.000 descargas por episodio ingresa unos 100-200 € por entrega. En cambio, los creadores más rentables utilizan el podcast como motor de confianza para productos de alto margen:",
        ],
        list: [
          {
            title: "Membresías de Oyentes (Patreon, Apple Subscriptions)",
            description: "Convertir tan solo el 2% de una audiencia de 3.000 oyentes en mecenas a 6 €/mes genera 360 € mensuales recurrentes y predecibles.",
          },
          {
            title: "Comisiones de Afiliación",
            description: "Recomendar herramientas, software y libros especializados con códigos de descuento supera a menudo las tarifas fijas de CPM.",
          },
          {
            title: "Consultoría y Captación de Clientes",
            description: "Los podcasts de negocios y servicios profesionales actúan como el canal de confianza número uno para conseguir clientes de alto valor.",
          },
          {
            title: "Productos Digitales y Talleres",
            description: "Cursos, plantillas y comunidades privadas que monetizan directamente el interés de los seguidores más comprometidos.",
          },
        ],
      },
      {
        heading: "Ejemplo Práctico: El Podcast de 1.000 €/mes frente al de 10.000 €/mes",
        paragraphs: [
          "Podcast A: 2.500 descargas por episodio con publicación semanal. Al vender dos anuncios mid-roll a 25 € CPM (125 €/episodio) y mantener 60 miembros en Patreon a 6 €/mes, ingresa 500 € en anuncios + 360 € en suscripciones + 180 € en afiliación = 1.040 € al mes.",
          "Podcast B: 20.000 descargas por episodio. Con 3 anuncios por entrega (pre-roll a 18 € CPM + dos mid-rolls a 28 € CPM = 1.480 €/episodio), alcanza 5.920 € mensuales en patrocinios directos. Sumando 400 miembros de comunidad a 10 €/mes (4.000 €), sus ingresos superan los 10.000 € mensuales.",
        ],
      },
    ],
    cta: {
      title: "Calcula los Ingresos de tu Podcast",
      description: "Calcula tus anuncios pre-roll, mid-roll y membresías según tu volumen de descargas.",
      buttonText: "Abrir Calculadora de Ingresos",
      toolSlug: "monetization-calculator",
    },
  },

  "how-to-monetize-a-podcast": {
    title: "Cómo Monetizar un Podcast (y Conseguir tu Primer Patrocinador)",
    description: "Aprende cómo monetizar un podcast y atraer patrocinadores. Descubre 8 vías de ingresos comprobadas, tarifas y plantillas de contacto. Guía gratis.",
    readTime: "Lectura de 8 min",
    publishedAt: "2026-11-06",
    category: "Monetización",
    sections: [
      {
        heading: "Las 8 Formas Comprobadas de Monetizar un Podcast",
        paragraphs: [
          "Monetizar un podcast ya no está reservado a producciones con decenas de miles de oyentes. Los creadores actuales construyen ingresos sólidos combinando varios canales complementarios sin depender de agencias externas.",
          "Tengas 300 oyentes o 30.000, puedes empezar a monetizar alineando tu oferta con la confianza de tu audiencia. Planifica tus pausas publicitarias con nuestro <a href=\"/es/tools/episode-outline-builder\" class=\"text-[#0070f3] underline font-medium\">Creador de Escaletas de Podcast</a>.",
        ],
        list: [
          {
            title: "1. Patrocinios Leídos por el Presentador",
            description: "Propuestas directas a marcas afines para menciones naturales de 30 a 60 segundos integradas en la conversación.",
          },
          {
            title: "2. Marketing de Afiliados y Cupones",
            description: "Compartir códigos de descuento exclusivos y enlaces de referencia de herramientas que utilizas y recomiendas honestamente.",
          },
          {
            title: "3. Canales Prémium y Suscripciones de Pago",
            description: "Ofrecer episodios sin publicidad, entrevistas extendidas o contenido extra mediante Patreon o Apple Podcasts Subscriptions.",
          },
          {
            title: "4. Alianzas de Marca y Series Patrocinadas",
            description: "Colaborar con empresas del sector para crear temporadas temáticas o mesas redondas co-producidas.",
          },
          {
            title: "5. Productos Digitales y Plantillas",
            description: "Vender guías, libros electrónicos, plantillas o herramientas directamente relacionadas con la temática del programa.",
          },
          {
            title: "6. Consultoría y Adquisición de Clientes B2B",
            description: "Utilizar el podcast como el principal canal de atracción de clientes para tu agencia, estudio o consultoría.",
          },
          {
            title: "7. Eventos en Directo y Talleres Virtuales",
            description: "Organizar grabaciones en vivo, sesiones magistrales de preguntas y respuestas o talleres de pago.",
          },
          {
            title: "8. Monetización en Vídeo y Clips en Redes",
            description: "Publicar episodios completos y momentos destacados en YouTube para captar ingresos publicitarios y nuevo tráfico.",
          },
        ],
      },
      {
        heading: "Cómo conseguir patrocinadores para un podcast",
        paragraphs: [
          "Conseguir tu primer patrocinador no requiere un representante. Consiste en identificar marcas que ya invierten en llegar a tu público objetivo y demostrar que tus oyentes valoran tus recomendaciones. Redacta propuestas profesionales con nuestro <a href=\"/es/tools/collab-finder\" class=\"text-[#0070f3] underline font-medium\">Generador de Propuestas y Colaboraciones</a>.",
          "Según la IAB y Edison Research, los anuncios leídos por el presentador logran un recuerdo de marca superior al 70%, muy por encima de los banners en internet. Al contactar patrocinadores, destaca la afinidad con la audiencia y datos de escucha reales.",
        ],
      },
      {
        heading: "Qué debe Incluir tu Dosier de Prensa (Media Kit)",
        paragraphs: [
          "Mantén tu dosier de patrocinio en una sola página limpia o PDF. Los responsables de marketing reciben decenas de propuestas semanales; facilita su decisión:",
        ],
        list: [
          {
            title: "Perfil y Datos Demográficos de la Audiencia",
            description: "Sectores profesionales, intereses, nivel adquisitivo y cómo encajan con el cliente ideal del patrocinador.",
          },
          {
            title: "Promedio de Descargas a 30 Días Verificado",
            description: "Capturas reales de tu plataforma de alojamiento (Buzzsprout, Spotify for Podcasters, Libsyn).",
          },
          {
            title: "Opciones de Publicidad y Tarifas Claras",
            description: "Precios detallados para pre-roll (15-30s), mid-roll (60s) y enlaces en notas, con descuentos por paquetes de 4 a 8 episodios.",
          },
          {
            title: "Muestra de Audio o Caso de Éxito",
            description: "Un fragmento de 30 segundos que demuestre cómo integras las recomendaciones con naturalidad sin sonar a cuña fría.",
          },
        ],
      },
    ],
    cta: {
      title: "Modela tu Estrategia de Monetización",
      description: "Prueba tarifas CPM y modelos de membresías con nuestra calculadora gratuita.",
      buttonText: "Abrir Calculadora de Ingresos",
      toolSlug: "monetization-calculator",
    },
  },

  "podcast-topic-ideas": {
    title: "Ideas para Temas de Podcast, Episodios y Secciones",
    description: "Explora 100 ideas para temas de podcast, formatos de episodios y secciones recurrentes. Supera el bloqueo creativo y cautiva a tus oyentes. Guía gratis.",
    readTime: "Lectura de 9 min",
    publishedAt: "2026-11-06",
    category: "Contenido",
    sections: [
      {
        heading: "No te Quedes sin Temas para tu Podcast",
        paragraphs: [
          "El motivo principal por el que muchos podcasters abandonan es el estrés de buscar qué contar cada semana. Los mejores podcasts no inventan la rueda en cada grabación, sino que recurren a un banco estructurado de temas comprobados y secciones recurrentes.",
          "A continuación tienes una selección de 100 ideas para temas de podcast, formatos de episodios y secciones organizadas por géneros populares. Cuando elijas un tema, usa nuestro <a href=\"/es/tools/episode-title-generator\" class=\"text-[#0070f3] underline font-medium\">Generador de Títulos de Podcast</a> para crear titulares atractivos.",
        ],
      },
      {
        heading: "Ideas de temas de podcast por nicho",
        paragraphs: [
          "50 ideas organizadas en cinco de los sectores con mayor demanda en las plataformas de podcast:",
        ],
        list: [
          {
            title: "Negocios y Emprendimiento (10 Temas)",
            description: "1. Cómo pasar de 0 a 10.000 € mensuales sin inversión externa. 2. Cómo contratar a tu primer colaborador sin malgastar fondos. 3. Autopsia de un lanzamiento fallido: lecciones clave. 4. Psicología de precios: por qué deberías cobrar más hoy. 5. Gestión del agotamiento y fatiga mental del fundador. 6. La verdad entre buscar inversión o crecer con beneficios propios. 7. Cómo crear un sistema de recomendaciones boca a boca. 8. Correos en frío que consiguen respuesta real. 9. Superar crisis de tesorería en el primer año. 10. Construir en público: ventajas y precauciones.",
          },
          {
            title: "True Crime e Investigaciones (10 Temas)",
            description: "11. El robo sin resolver que burló a la policía internacional. 12. Avances forenses que resolvieron casos fríos tras 30 años. 13. La psicología tras las falsas confesiones en juicios mediáticos. 14. Desapariciones en parques naturales: mitos y certezas. 15. El rastro digital que delató a un maestro del cibercrimen. 16. Denunciantes que destaparon corrupción empresarial. 17. La ciencia de la genealogía por ADN en crímenes. 18. Falsificaciones históricas que engañaron al mundo. 19. En la mente de los grandes estafadores. 20. Enigmas marítimos sin explicación.",
          },
          {
            title: "Salud, Rendimiento y Bienestar (10 Temas)",
            description: "21. La ciencia del sueño reparador y los ritmos circadianos. 22. Ayuno intermitente: qué dicen los últimos estudios clínicos. 23. Ejercicio cardiovascular en Zona 2 frente a HIIT. 24. Desarrollar masa muscular a partir de los 40 años. 25. Mitos de nutrición desmentidos por dietistas. 26. Gestión del estrés crónico en trabajos exigentes. 27. La microbiota intestinal y su impacto en el estado de ánimo. 28. Suplementos con evidencia científica frente a modas. 29. Encadenamiento de hábitos para cambios duraderos. 30. Terapia de frío y sauna: beneficios reales.",
          },
          {
            title: "Tecnología e Inteligencia Artificial (10 Temas)",
            description: "31. Cómo la IA generativa transforma el desarrollo de software. 32. Hábitos esenciales de ciberseguridad para todo profesional. 33. Modelos de código abierto frente a grandes plataformas cerradas. 34. Computación cuántica explicada para no ingenieros. 35. Dilemas éticos de la toma de decisiones algorítmica. 36. Cómo escala la infraestructura de una aplicación moderna. 37. Innovaciones de hardware en energías renovables. 38. La lucha por la privacidad en la era del big data. 39. Robótica y el futuro laboral en la próxima década. 40. Computación espacial y realidad mixta.",
          },
          {
            title: "Cultura, Filosofía y Crecimiento Personal (10 Temas)",
            description: "41. Filosofía estoica para calmar la ansiedad digital actual. 42. El valor de las conversaciones profundas en tiempos de aislamiento. 43. Por qué se reduce la capacidad de atención y cómo recuperarla. 44. El síndrome del impostor y las dudas creativas. 45. Cómo diseñar tu dieta informativa para ganar claridad mental. 46. Independencia financiera y el concepto de suficiencia. 47. Cómo el entorno arquitectónico influye en las emociones. 48. Rituales cotidianos a lo largo de la historia. 49. El hábito del trabajo enfocado sin distracciones. 50. Cómo reinventarse profesionalmente a mitad de carrera.",
          },
        ],
      },
      {
        heading: "Ideas para episodios de podcast",
        paragraphs: [
          "El formato determina el enganche. Utiliza estos 30 conceptos para transformar cualquier tema en un episodio fascinante:",
        ],
        list: [
          {
            title: "Casos Prácticos y Análisis a Fondo (10 Formatos)",
            description: "51. Análisis paso a paso de un éxito reciente. 52. Radiografía de un fracaso rotundo y sus lecciones. 53. Un día en la vida de un profesional de élite. 54. Retrospectiva histórica: qué ocurrió realmente. 55. El reto de conseguir un objetivo con presupuesto cero. 56. Desglose con cifras reales y transparentes. 57. Caso de transformación de antes y después. 58. Guía definitiva para dominar una habilidad concreta. 59. Secretos y malas prácticas de un sector al descubierto. 60. Pronósticos y tendencias para el próximo año.",
          },
          {
            title: "Interacción con la Audiencia (10 Formatos)",
            description: "61. Consultorio y buzón de preguntas rápidas. 62. Auditoría o asesoría en directo a un oyente. 63. Confesionario de anécdotas de la comunidad. 64. El gran debate: dos posturas opuestas frente a frente. 65. Reacción a notas de voz enviadas por oyentes. 66. Comprobación y desmontaje de mitos populares. 67. Episodio de opiniones impopulares y polémicas. 68. Comparativa: visión del novato frente al veterano. 69. Resumen de noticias con opiniones sinceras. 70. Mesa redonda con creadores invitados.",
          },
          {
            title: "Recomendaciones y Reflexión Personal (10 Formatos)",
            description: "71. Las 5 herramientas que me ahorran 10 horas semanales. 72. Libros que cambiaron mi forma de pensar. 73. Cosas que dejé de hacer tras varios años de experiencia. 74. Las mejores inversiones por menos de 100 €. 75. Una carta a mi yo de hace diez años. 76. Aprendizajes sinceros tras alcanzar un hito importante. 77. El peor consejo habitual en mi profesión. 78. Cómo se produce este podcast entre bambalinas. 79. Hábitos clave para mantener energía alta. 80. El kit definitivo de recursos imprescindibles.",
          },
        ],
      },
      {
        heading: "Ideas para secciones de podcast",
        paragraphs: [
          "Las secciones fijas dan identidad a tu programa y facilitan la estructura en nuestro <a href=\"/es/tools/episode-outline-builder\" class=\"text-[#0070f3] underline font-medium\">Creador de Escaletas</a>. Aquí tienes 20 ideas:",
        ],
        list: [
          {
            title: "20 Secciones Recurrentes para Episodios",
            description: "81. Pregunta del Oyente al Inicio (audio de 30 segundos). 82. Ronda Rápida de 60 Segundos. 83. Herramienta de la Semana. 84. Opinión Impopular. 85. Fe de Errores y Aclaraciones. 86. Victorias y Fracasos de la Semana. 87. Desmontando Jerga Técnica. 88. Comentario Cómico de Titulares. 89. Un Libro, Una Idea. 90. Menciones y Reseñas de Oyentes. 91. El Dilema del Día. 92. Sobrevalorado / Infravalorado. 93. La Cita Inspiradora. 94. Error de Principiante. 95. Cifras al Descubierto. 96. Revisión de Predicciones Pasadas. 97. El Discurso de Ascensor del Invitado. 98. Reto Práctico para la Semana. 99. La Parte Positiva de una Mala Noticia. 100. Reflexión Final para Recordar.",
          },
        ],
      },
    ],
    cta: {
      title: "Convierte tus Temas en Títulos Atractivos",
      description: "Toma tu idea favorita y genera 15+ titulares con alto porcentaje de clics.",
      buttonText: "Generar Títulos de Episodio",
      toolSlug: "episode-title-generator",
    },
  },

  "how-to-start-a-podcast": {
    title: "Cómo Empezar un Podcast: Guía Paso a Paso para Principiantes",
    description: "Guía paso a paso para crear un podcast en 2026. Planificación, micrófonos, grabación, edición, alojamiento RSS y distribución en Apple y Spotify. Gratis.",
    readTime: "Lectura de 12 min",
    publishedAt: "2026-11-06",
    category: "Producción",
    sections: [
      {
        heading: "Guía Completa Paso a Paso para Lanzar tu Podcast",
        paragraphs: [
          "Crear un podcast nunca ha sido tan sencillo, pero más del 70% de los nuevos programas no superan el décimo episodio. La diferencia entre los proyectos que se apagan y los que logran una comunidad fiel radica en seguir un método claro de producción desde el inicio.",
          "Según los estudios de consumo de audio digital, más de cien millones de personas escuchan podcasts cada semana. Esta guía cubre todas las etapas necesarias en 2026: definición del concepto, equipo recomendado, grabación, edición, portada, alojamiento RSS y distribución en los directorios principales.",
        ],
      },
      {
        heading: "Paso 1: Define tu Temática, Formato y Público Objetivo",
        paragraphs: [
          "Todo buen podcast comienza con una promesa clara: ¿a quién se dirige y qué valor concreto aporta cada entrega? Acota tu nicho para que cuando un oyente lea tu descripción piense de inmediato: «este programa está hecho para mí».",
          "Decide si grabarás en solitario, con coanfitrión o mediante entrevistas. Utiliza nuestro <a href=\"/es/tools/episode-outline-builder\" class=\"text-[#0070f3] underline font-medium\">Creador de Escaletas de Podcast</a> para planificar los tiempos de cada bloque.",
        ],
      },
      {
        heading: "Paso 2: Elige un Nombre Memorável y Buscable",
        paragraphs: [
          "El título de tu programa debe ser fácil de recordar, sencillo de pronunciar y contener términos que tus oyentes busquen habitualmente. Evita juegos de palabras confusos y prueba nombres con nuestro <a href=\"/es/tools/podcast-name-generator\" class=\"text-[#0070f3] underline font-medium\">Generador de Nombres de Podcast</a>.",
        ],
      },
      {
        heading: "Paso 3: Equipamiento Básico y Programas de Grabación",
        paragraphs: [
          "No necesitas un estudio costoso para sonar bien. La calidad depende en un 80% del entorno acústico y la posición frente al micro, y solo en un 20% del aparato. Kit recomendado de inicio:",
        ],
        list: [
          {
            title: "Micrófono Dinámico USB/XLR",
            description: "El Audio-Technica ATR2100x-USB o el Samson Q2U se conectan directo por USB y rechazan el eco de la habitación mucho mejor que los micrófonos de condensador.",
          },
          {
            title: "Auriculares Cerrados de Monitorización",
            description: "Audio-Technica ATH-M20x o Sony MDR-7506 para evitar que el sonido de tus cascos se cuele de nuevo en la grabación.",
          },
          {
            title: "Programas de Grabación y Edición",
            description: "Audacity (gratuito) o Descript (edición de audio mediante texto); Riverside.fm para entrevistas remotas en alta fidelidad.",
          },
          {
            title: "Acondicionamiento Acústico Casero",
            description: "Graba en una habitación con alfombra, cortinas y estanterías para amortiguar el rebote del sonido.",
          },
        ],
      },
      {
        heading: "Paso 4: Diseña una Portada Conforme a las Especificaciones",
        paragraphs: [
          "La portada es tu escaparate en Apple Podcasts y Spotify. Ambas plataformas exigen formato 1:1 perfectamente cuadrado, resolución de entre 1400x1400px y 3000x3000px y espacio de color RGB.",
          "Asegúrate de que el título sea legible incluso a tamaño miniatura de 50x50 píxeles comprobándolo en nuestro <a href=\"/es/tools/cover-art-preview\" class=\"text-[#0070f3] underline font-medium\">Comprobador de Portadas de Podcast</a>.",
        ],
      },
      {
        heading: "Paso 5: Graba el Tráiler y los Primeros Episodios",
        paragraphs: [
          "Antes de publicar, prepara un tráiler de 60 a 90 segundos que resuma la temática e invite a seguir el canal. Escribe el guión con nuestro <a href=\"/es/tools/trailer-script-builder\" class=\"text-[#0070f3] underline font-medium\">Creador de Guiones para Tráiler</a> y crea aperturas impactantes con el <a href=\"/es/tools/intro-script-generator\" class=\"text-[#0070f3] underline font-medium\">Generador de Guiones de Introducción</a>.",
          "Si harás entrevistas, diseña preguntas memorables que vayan más allá del currículum con el <a href=\"/es/tools/guest-question-generator\" class=\"text-[#0070f3] underline font-medium\">Generador de Preguntas de Entrevista</a>.",
        ],
      },
      {
        heading: "Paso 6: Elige Alojamiento y Valida tu Feed RSS",
        paragraphs: [
          "Los archivos de audio no se suben directamente a Spotify o Apple Podcasts. Se alojan en una plataforma especializada (Buzzsprout, Podbean, Libsyn, Spotify for Podcasters) que genera un feed RSS en formato XML.",
          "Antes de enviar tu feed a los directorios, revisa que no falten etiquetas ni haya enlaces rotos con nuestro <a href=\"/es/tools/rss-feed-validator\" class=\"text-[#0070f3] underline font-medium\">Validador de Feed RSS de Podcast</a>.",
        ],
      },
      {
        heading: "Paso 7: Optimiza Títulos, Notas y Categorías",
        paragraphs: [
          "La visibilidad depende de tus textos. Diseña títulos atractivos con el <a href=\"/es/tools/episode-title-generator\" class=\"text-[#0070f3] underline font-medium\">Generador de Títulos de Episodio</a>, estructura notas completas con el <a href=\"/es/tools/show-notes-generator\" class=\"text-[#0070f3] underline font-medium\">Generador de Show Notes</a> y elige tu categoría oficial con el <a href=\"/es/tools/category-finder\" class=\"text-[#0070f3] underline font-medium\">Buscador de Categorías de Apple Podcasts</a>.",
        ],
      },
      {
        heading: "Lista de comprobación para el lanzamiento del podcast",
        paragraphs: [
          "Comprueba estos 12 puntos clave antes de anunciar tu estreno:",
        ],
        list: [
          { title: "1. Concepto y Audiencia Clara", description: "Nicho definido y propuesta de valor documentada." },
          { title: "2. Nombre Verificado", description: "Sin conflictos de marcas ni programas idénticos en directorios." },
          { title: "3. Portada Conforme a Requisitos", description: "3000x3000px, RGB, JPG/PNG, legible en miniatura." },
          { title: "4. Tráiler Grabado", description: "Audio de 60-90 segundos con llamada clara a seguir el programa." },
          { title: "5. Lote de 3 Episodios Iniciales", description: "Lanza con tráiler más 3 episodios completos para enganchar al nuevo oyente." },
          { title: "6. Audio Masterizado y Exportado", description: "Volumen uniforme (-16 LUFS estéreo / -19 LUFS mono) en MP3 a 128 kbps." },
          { title: "7. Alojamiento Configurado", description: "Metadatos, autor, derechos de copia y carátula cargados." },
          { title: "8. Feed RSS Validado", description: "Comprobado sin errores en el validador." },
          { title: "9. Solicitud en Apple Podcasts", description: "Enviado a Apple Podcasts Connect al menos 5 días antes del estreno." },
          { title: "10. Conexión en Spotify for Podcasters", description: "Perfil de creador reclamado y verificado." },
          { title: "11. Notas de Episodio Listas", description: "Resumen, enlaces y marcas de tiempo preparados para cada entrega." },
          { title: "12. Plan de Difusión Preparado", description: "Mensaje a contactos, publicaciones en redes sociales y petición inicial de valoraciones." },
        ],
      },
    ],
    cta: {
      title: "Elige el Nombre de tu Podcast Hoy",
      description: "Genera nombres pegadizos y buscables por categoría con nuestra herramienta gratuita.",
      buttonText: "Abrir Generador de Nombres",
      toolSlug: "podcast-name-generator",
    },
  },
};
