import type { ToolContentRecord } from "./types";

export const esToolContent: ToolContentRecord = {
  "episode-title-generator": {
    metaTitle: "Generador de Títulos de Podcast Gratis | Pod Studio",
    metaDescription:
      "Crea títulos de episodios con alto CTR con nuestro generador de títulos de podcast. Fórmulas de curiosidad y entrevistas para Apple y Spotify. Gratis.",
    overview: [
      "El Generador de Títulos de Podcast convierte el tema de tu episodio y el nombre del invitado en ideas de títulos de alto CTR basadas en marcos psicológicos probados: intriga, promesas prácticas y opiniones a contracorriente.",
      "Diseñado para creadores que conocen el contenido de su episodio pero necesitan titulares atractivos y optimizados para destacar en las pantallas de Apple Podcasts y Spotify.",
    ],
    steps: [
      { title: "Describe el episodio", text: "Escribe el tema principal en pocas palabras, como «presupuesto para freelancers» o «los primeros 100 suscriptores»." },
      { title: "Añade un invitado (opcional)", text: "Incluye el nombre o la especialidad del invitado cuando sea el motivo principal para escuchar." },
      { title: "Filtra por estilo", text: "Cambia entre fórmulas de curiosidad, guía práctica, contrarias y listas para comparar ángulos." },
      { title: "Copia o exporta", text: "Copia un solo título o exporta la lista de títulos como archivo de texto para compartirla con tu equipo." },
    ],
    tips: [
      "Coloca las palabras más concretas y buscables en la primera mitad del título: muchas apps cortan después de 60 caracteres.",
      "Promete solo lo que el episodio cumple. Los títulos precisos retienen mejor a la audiencia y evitan malas reseñas.",
      "Deja fuera el número de episodio y el nombre del programa salvo que tus oyentes los necesiten.",
    ],
  },
  "show-notes-generator": {
    metaTitle: "Generador de Show Notes para Podcast | Pod Studio",
    metaDescription:
      "Crea notas de episodio profesionales con nuestra plantilla de show notes para podcast gratuita. Exporta resúmenes, marcas de tiempo y enlaces. Gratis.",
    overview: [
      "El Generador de Show Notes organiza los datos de tu episodio en notas bien estructuradas y optimizadas para SEO: resumen breve, biografía del invitado, marcas de tiempo con capítulos y enlaces a recursos mencionados.",
      "Puedes obtener el resultado en Markdown, HTML o texto plano y pegarlo directamente en Buzzsprout, Libsyn, Podbean, Spotify for Podcasters, descripciones de YouTube o tu sitio web.",
    ],
    steps: [
      { title: "Completa lo básico", text: "Escribe el título del episodio y un resumen de una o dos frases que explique por qué escucharlo." },
      { title: "Añade invitados y capítulos", text: "Indica los invitados y pega las marcas de tiempo con el formato «00:00 Tema», una por línea." },
      { title: "Añade ideas clave y enlaces", text: "Escribe las lecciones principales y los libros, herramientas o webs mencionados." },
      { title: "Elige formato y copia", text: "Selecciona Markdown, HTML o texto plano según tu plataforma y copia las notas terminadas." },
    ],
    tips: [
      "Escribe la primera frase pensando en personas y buscadores: es lo que la mayoría de apps muestran antes de «más».",
      "Incluye solo marcas de tiempo comprobadas con la edición final; los capítulos erróneos frustran a los oyentes.",
      "Usa la misma estructura cada semana para que tu audiencia sepa dónde encontrar los enlaces.",
    ],
    sections: [
      {
        heading: "Plantilla de show notes para podcast",
        intro: "Unas notas limpias y optimizadas ayudan a tus oyentes y ofrecen a los buscadores texto estructurado para indexar:",
        template: `# Título del Episodio: Dominando el Crecimiento de Audiencia en 2026

## Resumen del Episodio
En este episodio conversamos con la estratega de audio Elena Rostova para analizar las métricas reales de retención. Elena explica por qué la constancia semanal supera a los picos virales en redes, cómo estructurar los capítulos para maximizar la escucha completa y qué datos buscan realmente los patrocinadores.

## Marcas de Tiempo y Capítulos
- [00:00] Gancho inicial y resumen del episodio
- [02:15] Trayectoria de Elena en producción de audio
- [07:45] La regla de los 30 segundos para retener oyentes
- [14:20] Cómo calcular el precio de tu primer anuncio
- [23:10] Errores comunes de SEO en notas de episodios
- [31:00] Ronda de preguntas rápidas y conclusiones

## Conclusiones Clave
1. Engancha a los oyentes con una promesa clara en los primeros 30 segundos.
2. Estructura tus notas con encabezados y marcas de tiempo para mejorar el SEO.
3. Las menciones leídas por el presentador retienen más del 85% de la atención.

## Recursos Mencionados
- Libro: *Sound Reporting: The NPR Guide to Audio Journalism*
- Herramienta: Creador de Escaletas de Pod Studio
- Contacto: @elenaaudio en redes sociales

## Apoya el Programa
Si disfrutaste este episodio, déjanos una valoración de 5 estrellas en Apple Podcasts y síguenos en Spotify.`,
      },
    ],
  },
  "podcast-name-generator": {
    metaTitle: "Generador de Nombres de Podcast Gratis | Pod Studio",
    metaDescription:
      "Genera ideas de nombres de podcast memorables según tu nicho con nuestro generador de nombres de podcast gratuito. Comprueba disponibilidad hoy. Gratis.",
    overview: [
      "El Generador de Nombres de Podcast te ayuda a descubrir ideas de nombres de podcast memorables y con fuerza de marca según tu temática, palabras clave y estilo deseado: desde nombres directos hasta opciones ingeniosas.",
      "Utiliza estas ideas de nombres de podcast para crear una lista sólida de opciones y luego verifica su disponibilidad en Apple Podcasts, Spotify y registros de dominios antes del lanzamiento.",
    ],
    steps: [
      { title: "Elige tu nicho", text: "Selecciona el género que encaja con tu programa: tecnología, finanzas, true crime, desarrollo personal y más." },
      { title: "Añade una palabra (opcional)", text: "Escribe una palabra o tema que quieras en el nombre: un asunto, un lugar o una idea recurrente." },
      { title: "Elige un estilo y preselecciona", text: "Cambia de estilo de marca y guarda los tres a cinco nombres que te imagines diciendo en cada episodio." },
      { title: "Verifica antes de lanzar", text: "Busca duplicados en Apple Podcasts y Spotify y comprueba tú mismo el dominio y las redes sociales." },
    ],
    tips: [
      "Di cada nombre en voz alta: si la gente no sabe escribirlo tras oírlo una vez, el boca a boca sufrirá.",
      "Incluir una palabra clara sobre el tema ayuda a que nuevos oyentes te encuentren en el buscador de podcasts.",
      "Evita nombres que dependan de una moda o de un año; buscas algo que siga encajando en el episodio 200.",
    ],
    sections: [
      {
        heading: "Ideas de nombres de podcast por nicho",
        intro: "¿Buscas inspiración para bautizar tu programa? Explora estas ideas de nombres de podcast organizadas por categoría:",
        groups: [
          {
            category: "Negocios y Emprendimiento",
            items: [
              "El Fundador Consciente",
              "Escalar con Estrategia",
              "De Cero a Semilla",
              "Líderes de Mercado",
            ],
          },
          {
            category: "True Crime y Misterio",
            items: [
              "Sin Resolver y Sin Voz",
              "Almanaque de Casos Fríos",
              "Detrás de la Cinta Amarilla",
              "La Sombra de la Duda",
            ],
          },
          {
            category: "Comedia y Entretenimiento",
            items: [
              "Nadie lo Había Pedido",
              "Ligeramente Cínicos",
              "Riendo en el Intento",
              "El Ridículo Cotidiano",
            ],
          },
          {
            category: "Salud y Bienestar",
            items: [
              "Protocolo Mente y Cuerpo",
              "El Hábito de la Longevidad",
              "Radio Causa Raíz",
              "Laboratorio de Bienestar",
            ],
          },
          {
            category: "Tecnología e Inteligencia Artificial",
            items: [
              "Prompt y Paradigma",
              "El Giro Neuronal",
              "Silicio y Código",
              "Futuro en Construcción",
            ],
          },
          {
            category: "Espiritualidad y Reflexión",
            items: [
              "Paz en el Silencio",
              "El Camino del Peregrino",
              "Arraigados y Presentes",
              "Fe en lo Cotidiano",
            ],
          },
        ],
      },
    ],
  },
  "episode-outline-builder": {
    metaTitle: "Plantilla de Guion de Podcast y Escaleta | Pod Studio",
    metaDescription:
      "Estructura tu programa con una plantilla de guion de podcast gratuita y creador de escaletas. Planifica bloques, pausas publicitarias y tiempos. Gratis.",
    overview: [
      "El Creador de Escaletas genera una hoja de ruta con tiempos para tu producción: asigna minutos a la apertura, música, bloques temáticos, menciones de patrocinio y llamadas a la acción.",
      "Permite que presentadores, colaboradores y productores mantengan el ritmo del programa y cumplan la duración estimada sin necesidad de guionizar cada palabra.",
    ],
    steps: [
      { title: "Nombra el episodio", text: "Escribe un título provisional para identificar con facilidad la escaleta." },
      { title: "Define la duración objetivo", text: "Indica los minutos totales del episodio para verificar cómo suman los bloques de tiempo." },
      { title: "Edita los bloques", text: "Ajusta la apertura, introducción, secciones principales, pausas publicitarias y cierre con notas breves." },
      { title: "Exporta la escaleta", text: "Descarga la pauta en Markdown y compártela con tus invitados o equipo de edición." },
    ],
    tips: [
      "Programa las pausas publicitarias en puntos de transición naturales, a mitad de la conversación.",
      "Deja un margen de algunos minutos para digresiones espontáneas: los mejores momentos suelen ser imprevistos.",
      "Envía la escaleta al invitado con antelación para que prepare anécdotas concretas.",
    ],
    sections: [
      {
        heading: "Plantilla de guion de podcast gratuita",
        intro: "Aprovecha esta plantilla modular de guion y escaleta para organizar tus grabaciones de forma profesional, tanto para episodios en solitario como con invitados:",
        template: `[00:00 - 01:00] APERTURA / GANCHO
- Gancho: Frase impactante, pregunta provocadora o cita que capture la atención.
- Promesa del episodio: "En el episodio de hoy vas a descubrir..."

[01:00 - 02:30] INTRODUCCIÓN Y PRE-ROLL
- Música de cabecera / Sintonía
- Saludo y presentación: Nombre del host, propuesta del podcast y contexto del tema.
- Anuncio Pre-Roll (15-30s): "Este episodio cuenta con el apoyo de..."

[02:30 - 12:00] BLOQUE 1: CONTEXTO Y ANTECEDENTES
- Planteamiento del problema o tema central.
- Anécdota personal o presentación del invitado.
- Conclusión clave #1.

[12:00 - 13:30] PAUSA PUBLICITARIA MID-ROLL
- Transición fluida: "Volvemos enseguida con la mayor lección tras un breve mensaje..."
- Menciones de patrocinador Mid-Roll 1 y 2 (lectura de 60s con código de descuento).

[13:30 - 25:00] BLOQUE 2: PROFUNDIZACIÓN Y ANÁLISIS
- Desarrollo táctico: pasos, marco de trabajo o análisis entre bastidores.
- Errores comunes a evitar y perspectivas contraintuitivas.
- Conclusión clave #2.

[25:00 - 35:00] BLOQUE 3: CONSEJOS PRÁCTICOS Y PREGUNTAS
- Aplicación práctica para los oyentes.
- Ronda de preguntas rápidas o interacción con la comunidad.
- Conclusión clave #3.

[35:00 - 38:00] RESUMEN, LLAMADA A LA ACCIÓN Y CIERRE
- Resumen en 60 segundos de las ideas principales.
- Llamada a la acción (CTA): "Suscríbete en Spotify y deja tu reseña en Apple Podcasts".
- Avance del próximo episodio.
- Despedida y fundido musical de salida.`,
      },
    ],
  },
  "guest-question-generator": {
    metaTitle: "Generador de Preguntas para Invitados | Pod Studio",
    metaDescription:
      "Genera preguntas de entrevista para podcast memorables. Rompehielos, historias profundas, lecciones y rondas rápidas para cualquier invitado. Gratis.",
    overview: [
      "El Generador de Preguntas de Entrevista para Podcast diseña arcos conversacionales completos: desde preguntas rompehielos hasta momentos de inflexión, herramientas tácticas y rondas rápidas de preguntas.",
      "Indica el nombre de tu invitado, su especialidad y el tema del episodio para generar un cuestionario personalizado que evite respuestas cliché y revele vivencias reales.",
    ],
    steps: [
      { title: "Añade datos del invitado", text: "Escribe el nombre del invitado, su profesión o cargo y el tema central del episodio." },
      { title: "Filtra por fase de la entrevista", text: "Organiza las preguntas por etapas: rompehielos, historia personal, aprendizajes y cierre rápido." },
      { title: "Revisa el arco de la conversación", text: "Selecciona las preguntas que provoquen anécdotas en lugar de respuestas de sí o no." },
      { title: "Copia o exporta la pauta", text: "Copia la lista de preguntas o expórtala en archivo de texto para preparar tu grabación." },
    ],
    tips: [
      "Pregunta por momentos concretos —«Cuéntame el día que...»— en lugar de opiniones abstractas.",
      "Conserva dos o tres preguntas esenciales y deja que el resto fluya con la conversación.",
      "Reserva la pregunta más personal para la mitad de la entrevista, cuando el invitado esté cómodo.",
    ],
    sections: [
      {
        heading: "Preguntas de entrevista para podcast para cualquier invitado",
        intro: "Las mejores entrevistas surgen al dejar atrás el currículum para explorar historias auténticas. Aquí tienes 18 preguntas de alto impacto divididas por fases:",
        groups: [
          {
            category: "Rompehielos y Primeras Impresiones",
            items: [
              "¿Qué idea defendías al inicio de tu carrera que hoy consideras completamente equivocada?",
              "¿Cuál fue el primer proyecto que te hizo apasionarte de verdad por tu profesión?",
              "Si no te dedicaras a esto hoy, ¿hacia qué camino inesperado habrías ido?",
              "¿Cuál es el consejo más repetido en tu sector que la gente debería ignorar?",
            ],
          },
          {
            category: "Historias, Tropiezos y Puntos de Inflexión",
            items: [
              "Cuéntame el momento más difícil de tu trayectoria: ¿cómo fue el día siguiente?",
              "¿En qué punto estuviste a punto de tirar la toalla, pero decidiste seguir?",
              "¿Qué mentor o crítico pronunció unas palabras que cambiaron para siempre tu forma de trabajar?",
              "¿Qué tuviste que desaprender para poder dar el siguiente salto profesional?",
            ],
          },
          {
            category: "Metodología y Lecciones Tácticas",
            items: [
              "Explícanos paso a paso cómo organizas tus horas de mayor concentración cada mañana.",
              "¿Qué hábito, herramienta o métrica genera el 80% de tus resultados actuales?",
              "Cuando todo parece caótico, ¿cuál es el protocolo exacto que sigues?",
              "¿Cuál ha sido la decisión más contraintuitiva que tomaste y que todos desaconsejaban?",
              "¿Qué problema emergente en tu campo nadie está debatiendo todavía pero será clave en dos años?",
            ],
          },
          {
            category: "Reflexiones Finales y Ronda Rápida",
            items: [
              "¿Qué libro o recurso has regalado o recomendado más a menudo?",
              "¿Cuál ha sido tu mejor inversión de menos de 100 dólares en los últimos meses?",
              "¿Qué significa el éxito para ti hoy en comparación con cuando empezaste?",
              "Si pudieras colocar un mensaje en una valla publicitaria para millones de personas, ¿qué diría?",
              "¿Dónde pueden encontrarte los oyentes y apoyar tus proyectos actuales?",
            ],
          },
        ],
      },
    ],
  },
  "monetization-calculator": {
    metaTitle: "Calculadora de Ingresos de Podcast | Pod Studio",
    metaDescription:
      "Calcula cuánto gana tu programa con nuestra calculadora de ingresos de podcast gratuita. Modela tarifas CPM, descargas y acuerdos de patrocinio. Gratis.",
    overview: [
      "La Calculadora de Ingresos de Podcast estima las ganancias potenciales de tu programa aplicando la fórmula publicitaria estándar: (descargas ÷ 1.000) × CPM × menciones comercializadas.",
      "Modela ingresos mensuales y anuales considerando espacios pre-roll, mid-roll y post-roll, porcentaje de ocupación y suscripciones de oyentes para negociar tarifas con datos reales.",
    ],
    steps: [
      { title: "Introduce tus descargas", text: "Usa el promedio de descargas por episodio en los primeros 30 días según tu plataforma de alojamiento." },
      { title: "Define la frecuencia de emisión", text: "Indica cuántos episodios publicas al mes." },
      { title: "Configura los espacios de anuncios", text: "Activa o desactiva pre-roll, mid-roll y post-roll, fija el CPM de cada uno y estima la ocupación." },
      { title: "Revisa y exporta", text: "Analiza el desglose de ingresos, añade aportaciones de oyentes si las tienes y exporta la previsión." },
    ],
    tips: [
      "Las menciones mid-roll leídas por el host logran los CPM más altos gracias a la atención de los oyentes.",
      "Sé prudente con la tasa de ocupación: la mayoría de podcasts independientes no comercializan todos los huecos cada mes.",
      "Utiliza métricas verificadas al negociar; los patrocinadores pueden solicitar capturas de tu plataforma.",
    ],
    sections: [
      {
        heading: "¿Cuánto dinero gana un podcast?",
        paragraphs: [
          "Los ingresos de un podcast varían ampliamente en función de las descargas verificadas a 30 días, la frecuencia de publicación y los espacios publicitarios disponibles. Los programas de entre 1.000 y 5.000 descargas por episodio suelen generar entre 50 y 300 dólares por entrega combinando patrocinios CPM y enlaces de afiliados.",
          "Los podcasts independientes consolidados con entre 10.000 y 50.000 descargas por episodio alcanzan tarifas de CPM de entre 25 y 35 dólares, sumando miles de dólares al mes en patrocinio directo junto con programas de membresía y venta de productos.",
        ],
        link: {
          text: "Lee el informe completo con datos reales: ¿Cuánto gana un podcast en 2026? →",
          href: "/guides/how-much-do-podcasts-make",
        },
      },
    ],
  },
  "cover-art-preview": {
    metaTitle: "Tamaño de Portada de Podcast: Verificador | Pod Studio",
    metaDescription:
      "Comprueba el tamaño de portada de podcast para Apple y Spotify. Previsualiza tu diseño de 3000x3000px en móviles, pantallas de bloqueo y modo oscuro. Gratis.",
    overview: [
      "La herramienta de Verificación de Tamaño y Vista Previa de Portadas de Podcast comprueba tu diseño en interfaces reales de Apple Podcasts, Spotify, pantallas de bloqueo de móviles y miniaturas de 50x50 píxeles.",
      "La comprobación se realiza 100% en tu navegador y valida los estándares técnicos oficiales: relación de aspecto cuadrada 1:1, espacio de color RGB y resolución de entre 1400x1400px y 3000x3000px.",
    ],
    steps: [
      { title: "Sube tu portada", text: "Arrastra una imagen JPG o PNG (o prueba el diseño de ejemplo). Se procesa únicamente en tu navegador." },
      { title: "Revisa las especificaciones", text: "Comprueba si la imagen es cuadrada y cumple el rango de resolución recomendado." },
      { title: "Alterna maquetas", text: "Compara la vista en el feed de Apple Podcasts, Spotify, pantalla de bloqueo y miniatura de 50 × 50 px." },
      { title: "Ajusta y vuelve a probar", text: "Corrige el tamaño del texto o el contraste en tu programa de diseño y sube la nueva versión." },
    ],
    tips: [
      "Si el título no se lee bien en tamaño miniatura, reduce palabras o amplía la tipografía.",
      "Evita colocar textos esenciales cerca de los bordes: algunas plataformas redondean las esquinas.",
      "Comprueba el diseño en modo claro y oscuro para evitar que los textos se pierdan en fondos oscuros.",
    ],
  },
  "rss-feed-validator": {
    metaTitle: "Validador de Feed RSS de Podcast Gratis | Pod Studio",
    metaDescription:
      "Revisa tu feed RSS de podcast antes de enviarlo a Apple Podcasts o Spotify. Detecta etiquetas faltantes, enlaces rotos y problemas de carátula. Gratis.",
    overview: [
      "El Validador de Feed RSS analiza tu feed en busca de los errores que más frecuentemente retrasan o impiden la publicación: XML no válido, metadatos ausentes, fallos de carátula, identificadores GUID duplicados o audios inaccesibles.",
      "Cada aviso se explica con claridad para que puedas corregir los ajustes en tu plataforma de alojamiento antes de enviar el feed a los directorios oficiales.",
    ],
    steps: [
      { title: "Pega tu feed", text: "Pega el código XML de tu feed (o carga el ejemplo) en el validador." },
      { title: "Inicia la comprobación", text: "El validador analiza el feed en tu navegador y comprueba las etiquetas requeridas y recomendadas." },
      { title: "Revisa los resultados", text: "Lee primero los errores críticos y luego las advertencias con sus explicaciones." },
      { title: "Corrige y vuelve a validar", text: "Ajusta la configuración en tu plataforma de podcasting y comprueba de nuevo el feed actualizado." },
    ],
    tips: [
      "Nunca cambies el GUID de un episodio ya publicado; las aplicaciones podrían interpretarlo como un episodio nuevo.",
      "Asegúrate de marcar adecuadamente la etiqueta de contenido explícito para evitar restricciones de visualización.",
      "Vuelve a comprobar el feed tras cambiar de plataforma de alojamiento o renovar la carátula.",
    ],
  },
  "episode-timestamp-generator": {
    metaTitle: "Generador de Marcas de Tiempo y Capítulos | Pod Studio",
    metaDescription:
      "Crea marcas de tiempo y capítulos de YouTube para tu podcast. Genera marcas clicables para Spotify, Apple Podcasts y descripciones de video. Gratis.",
    overview: [
      "El Generador de Marcas de Tiempo y Capítulos convierte tus anotaciones en códigos de tiempo estandarizados y capítulos interactivos para descripciones de YouTube, Spotify y notas del programa.",
      "Facilita la navegación de tus oyentes y ayuda a los motores de búsqueda a indexar fragmentos concretos de tus episodios para atraer nuevas audiencias.",
    ],
    steps: [
      { title: "Añade tus capítulos", text: "Introduce cada capítulo con su tiempo de inicio y título corto, o pega una lista rápida." },
      { title: "Mantén un formato constante", text: "Usa el mismo formato horario en todo el episodio y ordena los capítulos cronológicamente." },
      { title: "Revisa la línea de tiempo", text: "Verifica visualmente la distribución de temas para detectar saltos o bloques excesivamente breves." },
      { title: "Copia los capítulos", text: "Pega la lista formateada en las notas de tu episodio, en YouTube o en tu gestor de podcasts." },
    ],
    tips: [
      "YouTube exige que la primera marca de tiempo sea 00:00 para activar los capítulos del reproductor.",
      "Escribe títulos descriptivos: es mejor «Errores de fijación de precios» que «Parte 2».",
      "Procura que los capítulos duren al menos unos minutos para no saturar al oyente.",
    ],
    sections: [
      {
        heading: "Cómo dar formato a marcas de tiempo y capítulos de YouTube",
        paragraphs: [
          "Los capítulos clicables hacen que los episodios extensos resulten más accesibles y permiten que la audiencia salte a las secciones de su interés. En YouTube, los códigos de tiempo con el formato «00:00 Introducción» incluidos en la descripción activan automáticamente una barra de progreso segmentada.",
          "Para asegurar que tus tiempos activen correctamente los capítulos en YouTube y Spotify, empieza siempre con una marca en 00:00 (o 0:00), incluye un mínimo de tres capítulos ordenados cronológicamente y procura que cada tramo tenga al menos diez segundos de duración.",
        ],
      },
    ],
  },
  "intro-script-generator": {
    metaTitle: "Generador de Guiones de Intro para Podcast | Pod Studio",
    metaDescription:
      "Escribe aperturas atractivas con el generador de guiones de intro para podcast. Ejemplos de introducciones para solos, parejas y entrevistas. Gratis.",
    overview: [
      "El Generador de Guiones de Intro para Podcast te ayuda a redactar los primeros 30 a 60 segundos de cada episodio: una apertura intrigante que capture el interés y reduzca el abandono prematuro.",
      "Indica el formato de tu programa, los datos del invitado y el tono deseado para generar un texto listo para leer en teleprónter con promesas claras y ganchos de curiosidad.",
    ],
    steps: [
      { title: "Elige formato y tono", text: "Selecciona si es una entrevista, episodio en solitario o narrativo, y el estilo de locución adecuado." },
      { title: "Añade detalles", text: "Introduce el tema central, la promesa del episodio y, si corresponde, el nombre del invitado." },
      { title: "Genera el guion", text: "Obtén un texto estructurado con gancho, presentación de anfitriones y beneficios para el oyente." },
      { title: "Léelo en voz alta", text: "Ensayalo un par de veces y adapta cualquier frase para que suene con tu voz natural." },
    ],
    tips: [
      "Ve al grano en los primeros 15 segundos: ahí es donde la audiencia decide si continúa escuchando.",
      "Una cita llamativa del invitado funciona como una magnífica apertura antes de la sintonía.",
      "Mantén las introducciones breves; los avisos largos y agradecimientos encajan mejor más adelante.",
    ],
    sections: [
      {
        heading: "Ejemplos de intro para podcast",
        intro: "Los primeros treinta segundos deciden si un oyente continúa el episodio o se marcha. Aquí tienes cinco ejemplos probados que puedes adaptar a tu estilo:",
        list: [
          {
            title: "1. El Gancho Directo de Alto Impacto (Solo)",
            description: "«La mayoría pasa cinco años construyendo su empresa antes de descubrir que creó el producto equivocado. Hoy comparto los tres métodos de validación que me habrían ahorrado 80.000 dólares. Bienvenidos a Diario de Fundadores».",
          },
          {
            title: "2. Charla Natural de Copresentadores",
            description: "«Bienvenidos de nuevo a La Sobremesa. Soy Álex y como siempre me acompaña Laura. Laura, antes de entrar en debate sobre la última presentación tecnológica, cuéntale a todos por qué casi no llegas al aeropuerto ayer...».",
          },
          {
            title: "3. El Avance Intrigante con Invitado",
            description: "«“Si no despides a tu cliente más grande antes del sexto mes, tu agencia quebrará”. Eso fue lo que me dijo David Miller diez minutos antes de encender los micrófonos. Hoy nos cuenta cómo facturar siete cifras sin quemarse».",
          },
          {
            title: "4. La Narrativa Envolvente",
            description: "«Un martes helado de febrero de 2014, treinta y dos servidores de un centro de datos en Virginia se apagaron a la vez. Lo que vino después fue el mayor ciberataque no resuelto en la historia de las criptomonedas. Esto es Crónicas Ocultas».",
          },
          {
            title: "5. La Promesa Práctica de Negocios y Tecnología",
            description: "«¿Quieres posicionarte en la primera página de Google sin dedicar meses a conseguir enlaces externos? En los próximos veinte minutos desglosamos la arquitectura de contenidos exacta que utilizamos para alcanzar 450.000 visitas al mes».",
          },
        ],
      },
    ],
  },
  "audience-growth-estimator": {
    metaTitle: "Previsión de Descargas y Crecimiento de Podcast | Pod Studio",
    metaDescription:
      "Calcula el crecimiento de descargas de tu podcast a 12 meses a partir de tus cifras actuales, periodicidad y tasa mensual. Calculadora gratuita.",
    overview: [
      "El Estimador de Crecimiento de Audiencia simula la evolución de descargas aplicando una tasa mensual de crecimiento a tus métricas actuales según tu ritmo de publicación.",
      "Es una proyección matemática orientativa que ilustra el poder del interés compuesto en la creación de contenido, ayudándote a fijar metas razonables y evaluar el progreso a lo largo de un año.",
    ],
    steps: [
      { title: "Indica tus descargas actuales", text: "Introduce tu promedio de descargas a 30 días por episodio publicado." },
      { title: "Añade tu frecuencia de emisión", text: "Escribe la cantidad de episodios que lanzas cada mes." },
      { title: "Selecciona una tasa de crecimiento", text: "Elige un porcentaje mensual acorde con tu ritmo reciente o tus objetivos inmediatos." },
      { title: "Consulta la gráfica", text: "Analiza la trayectoria proyectada a 12 meses y compárala con percentiles globales de la industria." },
    ],
    tips: [
      "Comienza con una tasa de crecimiento moderada; el efecto compuesto multiplica las cifras con rapidez.",
      "Combina esta estimación con la calculadora de CPM para proyectar cuándo será viable buscar patrocinadores.",
      "Compara mensualmente las previsiones con tus datos reales y ajusta los parámetros.",
    ],
  },
  "description-generator": {
    metaTitle: "Generador de Descripciones para Podcast | Pod Studio",
    metaDescription:
      "Redacta descripciones claras para tu canal de podcast y episodios individuales en Apple Podcasts y Spotify. Optimizado para SEO. Herramienta gratuita.",
    overview: [
      "El Generador de Descripciones elabora dos tipos de texto: la descripción general del programa (su propuesta de valor y audiencia objetivo) y la sinopsis de cada entrega individual.",
      "Unas buenas descripciones facilitan que nuevos oyentes se suscriban y que los algoritmos de recomendación comprendan la temática del show, situando la información clave en las primeras líneas visibles.",
    ],
    steps: [
      { title: "Elige el tipo de texto", text: "Selecciona si vas a redactar la presentación del canal o la sinopsis de un episodio específico." },
      { title: "Añade los datos esenciales", text: "Indica tu público objetivo, temas centrales, aprendizajes destacados y enlaces principales." },
      { title: "Comprueba el punto de corte", text: "Observa dónde cortan las aplicaciones móviles el texto antes de «más» y coloca al inicio las palabras clave." },
      { title: "Edita y publica", text: "Adapta la redacción a tu estilo y pégala en tu plataforma de alojamiento de podcast." },
    ],
    tips: [
      "La primera frase es determinante: muchas aplicaciones solo dejan ver una o dos líneas antes de pulsar «más».",
      "Menciona con claridad a tu oyente ideal para que se reconozca de inmediato al leer la sinopsis.",
      "Usa términos de búsqueda naturales y evita listas artificiales de palabras clave.",
    ],
  },
  "category-finder": {
    metaTitle: "Categorías de Apple Podcasts y Buscador | Pod Studio",
    metaDescription:
      "Explora la lista completa de categorías de Apple Podcasts oficiales y géneros de Spotify. Encuentra subcategorías con menor competencia hoy. Gratis.",
    overview: [
      "El Buscador de Categorías te orienta por la taxonomía oficial de Apple Podcasts y Spotify para encontrar las categorías principales y secundarias donde tu programa tenga mayores probabilidades de posicionamiento y descubrimiento.",
      "Revisa la estructura de géneros, explora por temática y compara el nivel de competencia para clasificar tu podcast en el lugar más idóneo.",
    ],
    steps: [
      { title: "Busca por temática", text: "Escribe tu tema principal, como «finanzas personales» o «crímenes reales»." },
      { title: "Compara resultados", text: "Revisa las categorías y subcategorías sugeridas de forma paralela." },
      { title: "Elige la categoría principal", text: "Selecciona la que mejor refleje la temática habitual de la mayoría de episodios." },
      { title: "Copia la etiqueta XML", text: "Copia la etiqueta iTunes correspondiente o elígela en el panel de tu plataforma de alojamiento." },
    ],
    tips: [
      "Escoge la categoría que consultarían tus oyentes ideales, no simplemente la que tenga menos competidores.",
      "Una subcategoría bien delimitada suele ofrecer más visibilidad a un programa recién estrenado.",
      "Revisa la lista oficial antes del lanzamiento, ya que los directorios actualizan su taxonomía ocasionalmente.",
    ],
    sections: [
      {
        heading: "Lista de categorías de Apple Podcasts",
        intro: "A continuación encontrarás la taxonomía oficial completa de categorías y subcategorías reconocidas por Apple Podcasts y Spotify para la clasificación de programas:",
        groups: [
          {
            category: "Arte y Diseño",
            items: ["Libros", "Diseño", "Moda y Belleza", "Gastronomía", "Artes Escénicas", "Artes Visuales"],
          },
          {
            category: "Negocios y Empresa",
            items: ["Desarrollo Profesional", "Emprendimiento", "Inversión", "Gestión", "Marketing", "Organizaciones sin Ánimo de Lucro"],
          },
          {
            category: "Comedia y Humor",
            items: ["Entrevistas de Comedia", "Improvisación", "Stand-Up"],
          },
          {
            category: "Educación y Aprendizaje",
            items: ["Cursos", "Guías Prácticas", "Aprendizaje de Idiomas", "Superación Personal"],
          },
          {
            category: "Ficción y Ficción Sonora",
            items: ["Ficción Humorística", "Drama", "Ciencia Ficción"],
          },
          {
            category: "Gobierno y Política",
            items: ["Administración Pública", "Política Municipal", "Política Nacional"],
          },
          {
            category: "Historia",
            items: ["Historia Antigua", "Historia Medieval", "Historia Militar", "Historia Moderna", "Historia Regional"],
          },
          {
            category: "Salud y Bienestar",
            items: ["Medicina Alternativa", "Fitness", "Medicina", "Salud Mental", "Nutrición", "Sexualidad"],
          },
          {
            category: "Familia e Infancia",
            items: ["Educación Infantil", "Crianza", "Mascotas y Animales", "Cuentos Infantiles"],
          },
          {
            category: "Ocio y Pasatiempos",
            items: ["Animación y Manga", "Motor", "Aviación", "Manualidades", "Juegos de Mesa", "Videojuegos", "Hogar y Jardinería"],
          },
          {
            category: "Música",
            items: ["Crítica Musical", "Historia de la Música", "Entrevistas Musicales"],
          },
          {
            category: "Noticias y Actualidad",
            items: ["Noticias de Negocios", "Noticias Diarias", "Entretenimiento", "Opinión y Política", "Deportes", "Tecnología"],
          },
          {
            category: "Religión y Espiritualidad",
            items: ["Budismo", "Cristianismo", "Hinduismo", "Islam", "Judaísmo", "Religión", "Espiritualidad"],
          },
          {
            category: "Ciencia y Naturaleza",
            items: ["Astronomía", "Química", "Ciencias de la Tierra", "Biología", "Matemáticas", "Física", "Ciencias Sociales"],
          },
          {
            category: "Sociedad y Cultura",
            items: ["Documentales", "Diarios Personales", "Filosofía", "Viajes y Lugares", "Relaciones"],
          },
          {
            category: "Deportes",
            items: ["Fútbol", "Baloncesto", "Béisbol", "Ciclismo", "Running", "Natación", "Tenis", "Montaña"],
          },
          {
            category: "Tecnología",
            items: ["Inteligencia Artificial", "Programación", "Tecnología de Consumo", "Ciberseguridad", "Software"],
          },
          {
            category: "True Crime y Crímenes Reales",
            items: ["Investigaciones Policiales", "Casos en Serie", "Misterios sin Resolver"],
          },
          {
            category: "Cine y Televisión",
            items: ["Análisis de Series", "Crítica Cinematográfica", "Historia del Cine", "Entrevistas de Cine"],
          },
        ],
      },
    ],
  },
  "hook-generator": {
    metaTitle: "Generador de Ganchos y Aperturas de Podcast | Pod Studio",
    metaDescription:
      "Crea ganchos de apertura atractivos con nuestro generador de ganchos para podcast gratuito. Evita el abandono de oyentes en los primeros 60 segundos. Gratis.",
    overview: [
      "El Generador de Ganchos y Aperturas de Podcast crea frases de impacto y aperturas intrigantes a partir del tema de tu episodio para enganchar a los oyentes desde el primer instante.",
      "Genera titulares diseñados para clips de TikTok, Instagram Reels, YouTube Shorts y cold opens de audio que despiertan el interés inmediato de la audiencia.",
    ],
    steps: [
      { title: "Escribe la temática", text: "Describe el asunto del episodio o el sector al que va dirigido el clip." },
      { title: "Añade un invitado (opcional)", text: "Indica el invitado especial cuando su presencia sea el gancho principal." },
      { title: "Elige un estilo", text: "Filtra por estilo de gancho y compara varias opciones de apertura." },
      { title: "Copia y comparte", text: "Usa la mejor frase como subtítulo o texto en pantalla y enlaza al episodio completo." },
    ],
    tips: [
      "La primera frase tiene apenas un par de segundos para captar la atención: empieza con la afirmación más concreta.",
      "Asegúrate de que el contenido del audio cumpla la expectativa del gancho para no defraudar al oyente.",
      "Añade subtítulos a todos tus clips de video: una gran parte de la audiencia los reproduce sin sonido.",
    ],
  },
  "transcript-formatter": {
    metaTitle: "Formato de Transcripción de Podcast | Pod Studio",
    metaDescription:
      "Limpia texto de audio al formato estándar de transcripción de podcast. Añade etiquetas de hablante y elimina muletillas fácilmente. Gratis sin registro.",
    overview: [
      "El Formateador de Transcripciones de Podcast transforma exportaciones automáticas de voz a texto en un formato estándar con nombres de locutor claros, marcas de tiempo ordenadas y párrafos legibles.",
      "Funciona con total privacidad en tu navegador, sin enviar datos a servidores externos, dejando el texto listo para publicarlo en la web del episodio o en notas de show.",
    ],
    steps: [
      { title: "Pega la transcripción", text: "Copia la exportación de texto de tu herramienta de transcripción y pégala en el editor." },
      { title: "Nombra a los participantes", text: "Sustituye etiquetas genéricas como «SPEAKER_00» por los nombres reales y decide si conservar los tiempos." },
      { title: "Previsualiza el resultado", text: "Revisa la transcripción formateada y haz cualquier corrección manual necesaria." },
      { title: "Copia o descarga", text: "Copia el texto limpio o descárgalo para añadirlo a tu web o plataforma de podcast." },
    ],
    tips: [
      "Publicar transcripciones hace tus episodios accesibles y proporciona texto indexable a los motores de búsqueda.",
      "Elimina muletillas para mejorar la lectura, pero conserva las palabras que aporten matices a las frases.",
      "Revisa siempre los nombres propios y términos técnicos, ya que suelen presentar errores en transcripciones automáticas.",
    ],
    sections: [
      {
        heading: "Formato estándar de transcripción de podcast (ejemplo)",
        intro: "Los directorios y buscadores web esperan transcripciones formateadas con etiquetas de hablante claras, marcas de tiempo y párrafos organizados:",
        template: `[00:00:02] Sara Montero (Presentadora):
Bienvenidos de nuevo a Frontera Creativa. Hoy exploramos cómo los creadores de audio independientes pueden generar ingresos sostenibles sin perder su identidad. Mi invitado de hoy es Marcos Vega, fundador de AudioMedia. Marcos, bienvenido al programa.

[00:00:24] Marcos Vega (Invitado):
Muchas gracias por invitarme, Sara. Encantado de estar aquí. Sinceramente, el mayor error que veo en creadores primerizos es obsesionarse con patrocinios antes de haber consolidado la retención de sus oyentes.

[00:00:41] Sara Montero (Presentadora):
Profundicemos en eso. Cuando hablas de retención, ¿cómo se traduce en la práctica para alguien que publica sus primeros veinte episodios?

[00:00:52] Marcos Vega (Invitado):
Se resume en tres pilares: una apertura predecible que prometa valor en los primeros treinta segundos, un ritmo de bloques ordenado para no perder al oyente y una llamada a la acción clara al final del episodio.`,
      },
    ],
  },
  "trailer-script-builder": {
    metaTitle: "Creador de Guiones para Trailers de Podcast | Pod Studio",
    metaDescription:
      "Escribe un guion breve para el trailer de tu podcast que explique la temática y llame a la suscripción. Plantilla estructurada para 60-90 segundos. Gratis.",
    overview: [
      "El Creador de Guiones para Trailers te ofrece una estructura probada para la presentación de tu podcast: un gancho de apertura, la temática del show, tu oyente objetivo y una llamada a la acción.",
      "Muchos directorios destacan el trailer en la cabecera de tu programa, convirtiéndolo en la primera impresión de tu audiencia. Esta herramienta te ayuda a que cada segundo cuente.",
    ],
    steps: [
      { title: "Introduce los datos básicos", text: "Escribe el título del programa, tu nombre y el ritmo de publicación." },
      { title: "Plantea la gran pregunta", text: "Redacta la pregunta central que aborda tu podcast y la promesa que haces a quienes te escuchen." },
      { title: "Genera el guion", text: "Obtén un texto estructurado con gancho, presentación y llamada a la acción." },
      { title: "Graba y ajusta", text: "Léelo en voz alta, mide el tiempo y recorta cualquier repetición innecesaria." },
    ],
    tips: [
      "Incluye un fragmento sonoro real de un episodio si lo tienes: ayuda a mostrar en lugar de solo contar.",
      "Concluye con una sola acción evidente: seguir el programa en su aplicación preferida.",
      "Actualiza el trailer cuando evolucione el enfoque o formato de tu podcast.",
    ],
  },
  "review-response-generator": {
    metaTitle: "Generador de Respuestas a Reseñas de Podcast | Pod Studio",
    metaDescription:
      "Redacta agradecimientos y respuestas amables para las valoraciones de tu podcast, tanto positivas como constructivas. Plantillas profesionales gratuitas.",
    overview: [
      "El Generador de Respuestas a Reseñas te ayuda a contestar a las opiniones de los oyentes y a preparar menciones de agradecimiento en el episodio para fomentar nuevas valoraciones.",
      "Ofrece opciones para comentarios elogiosos, críticas constructivas y comentarios difíciles, manteniendo siempre un tono profesional y receptivo.",
    ],
    steps: [
      { title: "Añade la reseña", text: "Escribe el nombre o alias del oyente y el contenido de su comentario." },
      { title: "Define el tono", text: "Indica si se trata de un comentario de 5 estrellas, una sugerencia constructiva o una crítica." },
      { title: "Elige el formato", text: "Obtén un guion para leer en el episodio, una respuesta para redes y un mensaje de agradecimiento privado." },
      { title: "Personaliza el texto", text: "Menciona un detalle concreto de la reseña para demostrar que la has leído con atención." },
    ],
    tips: [
      "Lee un par de reseñas al aire cada mes: es la forma más directa de incentivar nuevas valoraciones.",
      "Nunca nombres ni ridiculices a un oyente crítico; responde a los argumentos con educación.",
      "Agradece los comentarios específicos e indica las mejoras que hayas implementado gracias a ellos.",
    ],
  },
  "collab-finder": {
    metaTitle: "Creador de Correos de Colaboración de Podcast | Pod Studio",
    metaDescription:
      "Redacta propuestas de entrevistas y colaboraciones entre podcasts con respuestas aseguradas. Muestra el valor mutuo y próximos pasos claramente. Gratis.",
    overview: [
      "El Creador de Propuestas de Colaboración genera borradores de correo para proponerte como invitado, invitar a expertos a tu programa o plantear menciones cruzadas entre podcasts afines.",
      "Cada borrador explica a quién se dirige tu programa, la dinámica sugerida, el beneficio mutuo y un paso sencillo para coordinarse, tal como esperan los anfitriones ocupados.",
    ],
    steps: [
      { title: "Define el objetivo", text: "Postúlate como invitado, invita a un ponente o sugiere un intercambio de promoción." },
      { title: "Añade los datos de ambos", text: "Indica el programa de destino, el nombre del anfitrión y el valor específico que aportas." },
      { title: "Genera el correo", text: "Obtén una propuesta concisa con asunto atractivo, propuesta de valor y llamada a la acción." },
      { title: "Personaliza y envía", text: "Menciona un episodio concreto de su programa que hayas escuchado y envía desde tu correo habitual." },
    ],
    tips: [
      "Mantén el primer correo breve: cinco o seis frases suelen ser más que suficientes.",
      "Comparte únicamente datos de audiencia que puedas demostrar; exagerar las cifras arruina la confianza.",
      "Haz un seguimiento educado una semana después si no obtienes respuesta.",
    ],
  },
};
