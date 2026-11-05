import type { ToolContentRecord } from "./types";

export const esToolContent: ToolContentRecord = {
  "episode-title-generator": {
    metaTitle: "Generador de Títulos para Podcast Gratis | Pod Studio",
    metaDescription:
      "Convierte el tema de tu episodio en decenas de títulos claros y atractivos. Filtra por estilo —curiosidad, guía práctica, contrario— y copia tu favorito. Gratis.",
    overview: [
      "El Generador de Títulos convierte un tema, y opcionalmente el nombre de un invitado, en una larga lista de ideas basadas en patrones probados: promesas prácticas, intriga, opiniones a contracorriente, listas numeradas y ganchos centrados en el invitado.",
      "Está pensado para presentadores que saben de qué trata el episodio pero no encuentran cómo decirlo. Úsalo para explorar ángulos rápidamente y elige el título que describa el episodio con honestidad y se lea bien en la pantalla de un móvil.",
    ],
    steps: [
      { title: "Describe el episodio", text: "Escribe el tema principal en pocas palabras, como «presupuesto para freelancers» o «los primeros 100 suscriptores»." },
      { title: "Añade un invitado (opcional)", text: "Incluye el nombre o la especialidad del invitado cuando sea el motivo principal para escuchar." },
      { title: "Filtra por estilo", text: "Cambia entre fórmulas de curiosidad, guía práctica, contrarias y otras para comparar ángulos." },
      { title: "Copia o exporta", text: "Copia un solo título o exporta la lista completa como archivo de texto para compartirla con tu equipo." },
    ],
    tips: [
      "Coloca las palabras más concretas y buscables en la primera mitad del título: muchas apps cortan el final.",
      "Promete solo lo que el episodio cumple. Los títulos precisos retienen mejor a la audiencia y evitan malas reseñas.",
      "Deja fuera el número de episodio y el nombre del programa salvo que tus oyentes los necesiten.",
    ],
  },
  "show-notes-generator": {
    metaTitle: "Generador de Notas de Episodio para Podcast | Pod Studio",
    metaDescription:
      "Crea notas de episodio limpias con resumen, invitado, marcas de tiempo, ideas clave y enlaces. Exporta en Markdown, HTML o texto plano. Gratis y sin registro.",
    overview: [
      "El Generador de Show Notes organiza los datos de tu episodio en notas bien estructuradas: un resumen breve, el invitado destacado, capítulos con marcas de tiempo, las ideas clave y los recursos mencionados.",
      "Puedes obtener el resultado en Markdown, HTML o texto plano y pegarlo directamente en Buzzsprout, Libsyn, Podbean, Spotify for Creators, YouTube o tu web sin volver a darle formato.",
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
  },
  "podcast-name-generator": {
    metaTitle: "Generador de Nombres para Podcast Gratis | Pod Studio",
    metaDescription:
      "Genera ideas de nombres memorables para tu podcast según nicho, tema y estilo de marca. Haz tu lista corta y verifica dominios y marcas por tu cuenta. Gratis.",
    overview: [
      "El Generador de Nombres sugiere nombres de programa a partir de tu nicho, una palabra o tema personalizado opcional y el estilo de marca que buscas, desde nombres directos y fáciles de encontrar hasta opciones creativas.",
      "Es una herramienta de lluvia de ideas: no comprueba la disponibilidad de dominios ni de marcas registradas. Úsala para crear una lista corta y después verifica el nombre con un registrador de dominios, los directorios de podcasts y una búsqueda de marcas antes de anunciarlo.",
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
  },
  "episode-outline-builder": {
    metaTitle: "Creador de Escaletas para Episodios de Podcast | Pod Studio",
    metaDescription:
      "Crea una escaleta con tiempos para tu podcast: cold open, intro, bloques, cuñas de patrocinio y cierre. Mantén la grabación a tiempo. Plantilla gratuita.",
    overview: [
      "El Creador de Escaletas genera un guion de producción con tiempos: una hoja de ruta que enumera cada bloque, cuándo empieza aproximadamente y cuánto debe durar.",
      "Ayuda a presentadores, invitados y productores a coordinar música, patrocinios, bloques de entrevista y llamadas a la acción, sin tener que escribir cada palabra de la conversación.",
    ],
    steps: [
      { title: "Pon nombre al episodio", text: "Escribe un título provisional para identificar la escaleta más tarde." },
      { title: "Define la duración", text: "Indica la duración total en minutos para ver cómo suman los tiempos de cada bloque." },
      { title: "Edita los bloques", text: "Ajusta o añade el cold open, la intro, los actos principales, la pausa publicitaria y el cierre, con notas para cada uno." },
      { title: "Exporta la escaleta", text: "Exporta el esquema en Markdown y envíalo a tu invitado o productor antes de grabar." },
    ],
    tips: [
      "Sitúa el patrocinio de mitad de episodio en una pausa natural, entre un tercio y la mitad de la grabación.",
      "Deja unos minutos de margen para desvíos: los mejores momentos a menudo no estaban planeados.",
      "Envía la escaleta a los invitados con antelación para que preparen historias, no solo respuestas.",
    ],
  },
  "guest-question-generator": {
    metaTitle: "Generador de Preguntas para Entrevistas de Podcast | Pod Studio",
    metaDescription:
      "Genera preguntas de entrevista para cualquier invitado: rompehielos, historias de origen, fracasos, aprendizajes y ronda rápida. Gratis y sin registro.",
    overview: [
      "El generador de Preguntas para Invitados construye un arco completo para tu entrevista: desde rompehielos e historias de origen hasta momentos decisivos, lecciones aprendidas, predicciones y una ronda rápida final.",
      "Introduce el nombre del invitado, su profesión y el tema del episodio para obtener una lista inicial adaptada que puedes completar con tu propia investigación.",
    ],
    steps: [
      { title: "Añade los datos del invitado", text: "Escribe su nombre, su profesión o rol y el tema principal del episodio." },
      { title: "Navega por etapas", text: "Filtra las preguntas por etapa: rompehielos, origen, fracasos y giros, hasta el cierre." },
      { title: "Revisa el arco", text: "Conserva las preguntas que invitan a contar historias y descarta las que se responden con una palabra." },
      { title: "Copia o exporta el guion", text: "Copia el guion de preguntas o expórtalo como texto y añade repreguntas sobre su trabajo reciente." },
    ],
    tips: [
      "Pide un momento concreto —«Cuéntame el día en que…»— en lugar de opiniones generales.",
      "Ten dos o tres preguntas imprescindibles y deja que el resto se adapte a la conversación.",
      "Guarda la pregunta más personal para la mitad de la entrevista, cuando el invitado ya esté cómodo.",
    ],
  },
  "monetization-calculator": {
    metaTitle: "Calculadora de CPM e Ingresos de Podcast | Pod Studio",
    metaDescription:
      "Estima los ingresos publicitarios de tu podcast según descargas, CPM, espacios y tasa de ocupación. Compara pre-roll, mid-roll y post-roll. Calculadora gratis.",
    overview: [
      "La Calculadora de CPM estima lo que tu programa podría ganar con publicidad usando la fórmula estándar: (descargas ÷ 1.000) × CPM × espacios publicitarios vendidos.",
      "Ajusta las descargas por episodio, la frecuencia de publicación, los espacios pre-roll, mid-roll y post-roll, la tasa de ocupación y las membresías de oyentes para ver proyecciones mensuales, por episodio y anuales.",
    ],
    steps: [
      { title: "Introduce tus descargas", text: "Usa la media de descargas por episodio en los primeros 30 días, según tu plataforma de hosting." },
      { title: "Indica la frecuencia", text: "Añade cuántos episodios publicas al mes." },
      { title: "Configura los espacios", text: "Activa o desactiva pre-roll, mid-roll y post-roll, fija un CPM para cada uno y estima la ocupación." },
      { title: "Revisa y exporta", text: "Compara el desglose, suma ingresos por membresías si los tienes y exporta la proyección." },
    ],
    tips: [
      "Los mid-roll leídos por el presentador suelen tener el CPM más alto porque la atención es máxima.",
      "Sé prudente con la tasa de ocupación: la mayoría de programas independientes no venden todos los espacios.",
      "Usa cifras de descargas verificadas al negociar; los anunciantes pueden pedir capturas de tu plataforma.",
    ],
  },
  "cover-art-preview": {
    metaTitle: "Vista Previa de Portada de Podcast: Apple y Spotify | Pod Studio",
    metaDescription:
      "Comprueba cómo se ve tu portada en Apple Podcasts, Spotify, la pantalla de bloqueo y miniaturas pequeñas. Revisa tamaño y legibilidad. Gratis y privado.",
    overview: [
      "El Previsualizador de Portadas muestra cómo se ve tu arte en diseños tipo Apple Podcasts y Spotify, en la pantalla de bloqueo de un móvil y como miniatura de búsqueda diminuta.",
      "Tu imagen nunca sale de tu dispositivo. Se comprueba frente al requisito habitual de los directorios —imagen cuadrada entre 1400 × 1400 y 3000 × 3000 píxeles— para detectar problemas antes de subirla.",
    ],
    steps: [
      { title: "Sube tu portada", text: "Arrastra un archivo JPG o PNG (o prueba la portada de ejemplo). Se procesa solo en tu navegador." },
      { title: "Revisa las especificaciones", text: "Comprueba si la imagen es cuadrada y está dentro del rango de píxeles recomendado." },
      { title: "Cambia de vista", text: "Compara el feed de Apple Podcasts, la vista de reproducción de Spotify, la pantalla de bloqueo, la zona segura y la miniatura de 50 × 50 px." },
      { title: "Ajusta y vuelve a probar", text: "Modifica el tamaño del texto o el contraste en tu editor y sube la nueva versión para comparar." },
    ],
    tips: [
      "Si el título no se lee en miniatura, usa menos palabras o una tipografía más grande.",
      "No coloques texto importante cerca de los bordes: algunas apps redondean las esquinas.",
      "Prueba en modo claro y oscuro; un texto fino y oscuro puede desaparecer sobre fondos oscuros.",
    ],
  },
  "rss-feed-validator": {
    metaTitle: "Validador de Feed RSS para Podcast Gratis | Pod Studio",
    metaDescription:
      "Revisa tu feed RSS: etiquetas que faltan, enclosures rotos, portada y GUID antes de enviarlo a Apple Podcasts o Spotify. Gratis y privado, en tu navegador.",
    overview: [
      "El Validador de Feed RSS inspecciona tu feed en busca de los problemas que más bloquean o retrasan la publicación: XML inválido, metadatos del programa incompletos, problemas de portada, GUID duplicados o ausentes y episodios sin un enclosure de audio válido.",
      "Cada resultado se explica en lenguaje claro e indica qué corregir, para que lo soluciones en tu plataforma de hosting antes de que Apple Podcasts o Spotify rechacen el feed.",
    ],
    steps: [
      { title: "Pega tu feed", text: "Pega el XML de tu feed (o carga el ejemplo) en el validador." },
      { title: "Ejecuta la revisión", text: "El validador analiza el feed en tu navegador y comprueba las etiquetas obligatorias y recomendadas." },
      { title: "Revisa los resultados", text: "Atiende primero a los errores y después a los avisos. Cada punto explica por qué importa." },
      { title: "Corrige y vuelve a validar", text: "Actualiza la configuración en tu hosting, pega el feed actualizado y vuelve a ejecutar la revisión." },
    ],
    tips: [
      "No cambies nunca el GUID de un episodio publicado: las apps podrían tratarlo como un episodio nuevo.",
      "Asegúrate de que la etiqueta explicit es correcta; afecta a dónde puede aparecer tu programa.",
      "Vuelve a validar tras cambiar de hosting o de portada; son las causas más comunes de nuevos errores.",
    ],
  },
  "episode-timestamp-generator": {
    metaTitle: "Generador de Capítulos y Marcas de Tiempo | Pod Studio",
    metaDescription:
      "Convierte tus notas en capítulos limpios para YouTube, Spotify y las notas del episodio. Formato de tiempo consistente con un clic. Gratis y sin registro.",
    overview: [
      "El Generador de Capítulos convierte tus notas de grabación en marcas ordenadas como «00:00 Introducción» y «05:12 Trayectoria del invitado», con una línea de tiempo visual del episodio.",
      "Usa el resultado en descripciones de YouTube y Spotify y en tus notas para que los oyentes salten a la parte que les interesa y los buscadores entiendan mejor qué cubre el episodio.",
    ],
    steps: [
      { title: "Añade tus capítulos", text: "Introduce cada capítulo con hora de inicio y título, o pega una lista rápida como «0:00 Intro, 5:30 Giro»." },
      { title: "Mantén un formato coherente", text: "Usa un único formato de tiempo y ordena los capítulos tal como ocurren." },
      { title: "Revisa la línea de tiempo", text: "Mira la línea de tiempo visual para detectar huecos, duplicados o capítulos demasiado cortos." },
      { title: "Copia los capítulos", text: "Copia la lista formateada en tus notas, la descripción de YouTube o tu hosting." },
    ],
    tips: [
      "YouTube exige que la primera marca sea 00:00 para mostrar los capítulos.",
      "Escribe títulos de capítulo como mini titulares: lo concreto gana a lo vago («Errores de precio el primer año» frente a «Parte 2»).",
      "Procura que cada capítulo dure al menos unos minutos; demasiados capítulos cortos cuestan de leer.",
    ],
  },
  "intro-script-generator": {
    metaTitle: "Generador de Intros y Ganchos para Podcast | Pod Studio",
    metaDescription:
      "Escribe una intro breve y un gancho inicial que den a los oyentes un motivo para quedarse. Formatos de entrevista, monólogo y narrativa. Generador gratis.",
    overview: [
      "El Generador de Intros te ayuda a escribir los primeros 30–60 segundos del episodio: un gancho que despierte curiosidad o interés, seguido de una breve presentación que fije expectativas.",
      "Elige formato y tono, completa algunos datos y obtén un guion listo para leer en vista de teleprompter, que puedes adaptar a tu voz.",
    ],
    steps: [
      { title: "Elige formato y tono", text: "Selecciona entrevista, monólogo o narrativa, y una entrega enérgica, reflexiva o conversacional." },
      { title: "Añade los detalles", text: "Escribe el tema o la promesa del episodio y, si aplica, el nombre y cargo del invitado." },
      { title: "Genera el guion", text: "Obtén un guion breve que va del gancho a la presentación y a «esto es lo que vas a aprender»." },
      { title: "Léelo en voz alta", text: "Ensáyalo una o dos veces y recorta cualquier frase que no suene a ti." },
    ],
    tips: [
      "Ve al grano en los primeros 15 segundos: ahí muchos oyentes deciden si se quedan.",
      "Una buena cita del invitado es un excelente cold open antes de la sintonía.",
      "Mantén cortas las intros recurrentes; los avisos y patrocinios largos van más tarde.",
    ],
  },
  "audience-growth-estimator": {
    metaTitle: "Estimador de Crecimiento de Descargas de Podcast | Pod Studio",
    metaDescription:
      "Proyecta las descargas de tu podcast a 12 meses según tus cifras actuales, tu calendario de publicación y una tasa de crecimiento mensual. Calculadora gratis.",
    overview: [
      "El Estimador de Crecimiento proyecta tus descargas futuras aplicando una tasa de crecimiento mensual a tus descargas actuales por episodio y multiplicando por la frecuencia de publicación.",
      "Es una ilustración sencilla del crecimiento compuesto, no una predicción: no tiene en cuenta estacionalidad, picos virales ni pérdida de oyentes. Úsalo para fijar objetivos realistas y ver cómo pequeñas mejoras suman en un año.",
    ],
    steps: [
      { title: "Introduce tus descargas", text: "Añade tu media actual de descargas a 30 días por episodio." },
      { title: "Indica tu calendario", text: "Escribe cuántos episodios publicas al mes." },
      { title: "Elige una tasa de crecimiento", text: "Selecciona un porcentaje mensual que refleje tu tendencia reciente o tu objetivo." },
      { title: "Lee el gráfico", text: "Revisa la trayectoria a 12 meses y compárate con los percentiles globales de descargas." },
    ],
    tips: [
      "Empieza con una tasa moderada: el interés compuesto hace que las cifras optimistas se disparen rápido.",
      "Combina esta proyección con la calculadora de CPM para ver cuándo el patrocinio es realista.",
      "Compara cada mes la proyección con tus cifras reales y ajusta los datos.",
    ],
  },
  "description-generator": {
    metaTitle: "Generador de Descripciones de Podcast y Episodios | Pod Studio",
    metaDescription:
      "Escribe descripciones claras del programa y de cada episodio para Apple Podcasts y Spotify. Modos separados y aviso del corte «más» en móvil. Gratis.",
    overview: [
      "El Generador de Descripciones redacta dos tipos de texto: la descripción del programa, que explica su promesa y su audiencia, y las descripciones de episodio, que resumen una grabación concreta.",
      "Una buena descripción ayuda a decidir si seguir el programa y a que las apps entiendan de qué trata, por eso la herramienta coloca la información clave al principio, donde las apps la muestran.",
    ],
    steps: [
      { title: "Elige un modo", text: "Indica si escribes la descripción del programa o la de un episodio." },
      { title: "Añade lo esencial", text: "Escribe tu audiencia objetivo, los temas e ideas clave y tus enlaces o llamada a la acción." },
      { title: "Revisa el corte", text: "Mira dónde cortan el texto las apps móviles con «…más» y asegúrate de que el gancho y la palabra clave van primero." },
      { title: "Edita y pega", text: "Ajusta el texto a tu voz y pégalo en tu plataforma de hosting." },
    ],
    tips: [
      "La primera frase es la más importante: muchas apps solo muestran una o dos líneas antes de «más».",
      "Nombra a tu audiencia directamente («para emprendedores primerizos») para que se reconozca.",
      "Usa palabras clave naturales, nunca listas de términos; Apple puede rechazar descripciones con spam.",
    ],
  },
  "category-finder": {
    metaTitle: "Buscador de Categorías de Apple Podcasts | Pod Studio",
    metaDescription:
      "Encuentra las mejores categorías y subcategorías de Apple Podcasts para tu programa. Busca por tema y copia la etiqueta XML exacta. Herramienta gratuita.",
    overview: [
      "El Buscador de Categorías te ayuda a elegir la categoría y subcategoría de Apple Podcasts adecuadas. Apple permite hasta dos categorías y la principal es la más visible.",
      "Busca por tema o palabra clave para ver categorías y subcategorías coincidentes y copia con un clic la etiqueta XML exacta para tu feed RSS.",
    ],
    steps: [
      { title: "Busca por tema", text: "Escribe tu tema principal, como «finanzas personales» o «true crime»." },
      { title: "Compara opciones", text: "Revisa las categorías y subcategorías sugeridas." },
      { title: "Elige la categoría principal", text: "Quédate con la que mejor describe la mayoría de tus episodios." },
      { title: "Copia la etiqueta XML", text: "Haz clic en una subcategoría para copiar su etiqueta de iTunes o selecciónala en tu hosting." },
    ],
    tips: [
      "Elige la categoría que tus oyentes explorarían, no la que tiene menos competencia.",
      "Una subcategoría precisa suele dar más visibilidad a un programa nuevo.",
      "Consulta la lista oficial actual de Apple antes de publicar; los nombres cambian de vez en cuando.",
    ],
  },
  "hook-generator": {
    metaTitle: "Generador de Ganchos para Clips de Podcast | Pod Studio",
    metaDescription:
      "Escribe ganchos que detengan el scroll para clips de podcast en TikTok, Reels, Shorts y LinkedIn. Elige estilo, compara opciones y copia. Gratis.",
    overview: [
      "El generador de Ganchos Sociales escribe frases de apertura cortas e impactantes para clips y publicaciones, para que los mejores momentos de un episodio funcionen por sí solos.",
      "Introduce el tema del episodio y, si quieres, el invitado destacado; elige un estilo de gancho y obtén varias frases para usar como texto en pantalla o pie de foto en TikTok, Reels, YouTube Shorts o LinkedIn.",
    ],
    steps: [
      { title: "Escribe el tema", text: "Describe el tema o sector del episodio del que sale el clip." },
      { title: "Añade un invitado (opcional)", text: "Incluye al invitado cuando su nombre o experiencia sea el atractivo." },
      { title: "Elige un estilo", text: "Filtra por estilo de gancho y compara varias frases de apertura." },
      { title: "Copia y publica", text: "Usa el mejor gancho como texto en pantalla o pie, y enlaza al episodio completo." },
    ],
    tips: [
      "La primera línea tiene unos dos segundos para captar atención: empieza por lo más concreto.",
      "Asegúrate de que el clip cumple lo que promete el gancho; los ganchos engañosos dañan la confianza.",
      "Subtitula todos tus clips: mucha gente los ve sin sonido.",
    ],
  },
  "transcript-formatter": {
    metaTitle: "Limpiador de Transcripciones de Podcast | Pod Studio",
    metaDescription:
      "Limpia transcripciones de podcast: nombra a los hablantes, elimina muletillas y marcas de tiempo y deja el texto listo para publicar. Gratis y privado.",
    overview: [
      "El Limpiador de Transcripciones ordena el texto exportado de cualquier servicio de transcripción. Sustituye etiquetas genéricas por nombres reales, elimina muletillas habituales en inglés (um, uh…) y quita o conserva las marcas de tiempo.",
      "Funciona con el texto que pegas; no transcribe audio. El resultado es más legible y está listo para publicarse como transcripción accesible, artículo de blog o extracto de las notas.",
    ],
    steps: [
      { title: "Pega tu transcripción", text: "Copia el texto exportado de tu servicio de transcripción y pégalo en el editor." },
      { title: "Nombra a los hablantes", text: "Sustituye «SPEAKER_00» y similares por nombres reales y decide si quitar las marcas de tiempo." },
      { title: "Revisa el resultado", text: "Comprueba la transcripción formateada y haz las correcciones necesarias." },
      { title: "Copia o descarga", text: "Copia el texto limpio o descárgalo para publicarlo en tu web o hosting." },
    ],
    tips: [
      "Publicar transcripciones hace accesibles tus episodios y da a los buscadores texto real que indexar.",
      "Elimina muletillas para ganar legibilidad, pero conserva lo que cambie el sentido de una cita.",
      "Revisa nombres y términos técnicos: las herramientas de transcripción suelen fallar en ellos.",
    ],
  },
  "trailer-script-builder": {
    metaTitle: "Creador de Guiones para Tráiler de Podcast | Pod Studio",
    metaDescription:
      "Escribe un guion de tráiler que explique tu programa, para quién es y por qué seguirlo. Estructura probada para tráileres de 60–90 segundos. Gratis.",
    overview: [
      "El Creador de Trailers te da una estructura probada: un gancho, de qué trata el programa, para quién es, qué lo diferencia y una invitación clara a seguirlo.",
      "Muchos directorios destacan el tráiler en la página del programa, así que suele ser lo primero que escuchan los nuevos oyentes. Esta herramienta te ayuda a aprovechar esos 60–90 segundos.",
    ],
    steps: [
      { title: "Datos del programa", text: "Añade el título del programa, el nombre del presentador y el calendario de publicación." },
      { title: "Plantea la gran pregunta", text: "Escribe la pregunta central que explora tu programa y la promesa que haces a los oyentes." },
      { title: "Genera el guion", text: "Obtén un guion estructurado con gancho, cuerpo y llamada a la acción." },
      { title: "Graba y recorta", text: "Léelo en voz alta, cronométralo y elimina las frases que repitan ideas." },
    ],
    tips: [
      "Incluye un fragmento real de un episodio si lo tienes: muestra en lugar de contar.",
      "Termina con una sola acción clara: seguir el programa en la app del oyente.",
      "Actualiza el tráiler cuando cambie el enfoque o el formato del programa.",
    ],
  },
  "review-response-generator": {
    metaTitle: "Generador de Respuestas a Reseñas de Podcast | Pod Studio",
    metaDescription:
      "Responde a reseñas de oyentes y escribe menciones al aire, tanto para elogios como para críticas. Plantillas cercanas y profesionales. Herramienta gratis.",
    overview: [
      "El generador de Respuestas a Reseñas te ayuda a contestar a tus oyentes y a escribir menciones al aire que agradezcan su apoyo y animen a más personas a valorar el programa.",
      "Cubre reseñas entusiastas, comentarios constructivos y críticas injustas, con respuestas respetuosas, sin ponerse a la defensiva y mencionando mejoras concretas cuando tiene sentido.",
    ],
    steps: [
      { title: "Añade la reseña", text: "Escribe el nombre o usuario del oyente y lo que dijo." },
      { title: "Indica el tono", text: "Marca la reseña como elogio de 5 estrellas, constructiva o crítica." },
      { title: "Elige el formato", text: "Obtén una mención para leer al aire, una respuesta para redes y un mensaje privado de agradecimiento." },
      { title: "Personalízala", text: "Añade un detalle de la reseña para que el oyente sepa que la leíste." },
    ],
    tips: [
      "Lee algunas reseñas al aire cada mes: es una de las formas más sencillas de conseguir más valoraciones.",
      "Nunca nombres ni ridiculices a quien te critica; responde a la idea, no a la persona.",
      "Agradece los comentarios concretos y cuenta qué cambiaste gracias a ellos.",
    ],
  },
  "collab-finder": {
    metaTitle: "Creador de Propuestas para Invitados y Collabs | Pod Studio",
    metaDescription:
      "Escribe propuestas para ser invitado y emails de promoción cruzada que reciben respuesta. Explica el valor mutuo y el siguiente paso. Plantillas gratis.",
    overview: [
      "El creador de Propuestas de Colaboración redacta emails para proponerte como invitado, invitar a alguien a tu programa o plantear una promoción cruzada con otro podcast.",
      "Cada borrador explica a quién sirve tu programa, el formato propuesto, el valor para ambas partes y un siguiente paso sencillo: lo que buscan los presentadores ocupados antes de decir que sí.",
    ],
    steps: [
      { title: "Elige el objetivo", text: "Proponte como invitado, invita a alguien a tu programa o plantea un intercambio de promoción." },
      { title: "Añade ambos programas", text: "Indica el programa y presentador destino, el nombre de tu podcast y el ángulo o valor que ofreces." },
      { title: "Genera el email", text: "Obtén un borrador breve con asunto, propuesta de valor y llamada a la acción clara." },
      { title: "Personaliza y envía", text: "Menciona un episodio suyo que te gustara y envíalo desde tu propio correo." },
    ],
    tips: [
      "Mantén corto el primer email: cinco o seis frases son suficientes.",
      "Comparte solo cifras de audiencia que puedas verificar; exagerarlas destruye la confianza.",
      "Haz un único seguimiento a la semana y, si no hay respuesta, pasa página con educación.",
    ],
  },
};
