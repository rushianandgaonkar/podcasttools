import type { GuideExtrasRecord } from "./types";

export const esGuideExtras: GuideExtrasRecord = {
  "podcast-sponsorship-cpm-guide-2026": {
    metaTitle: "Tarifas y CPM de Podcasts 2026: Guía y Precios | Pod Studio",
    firstHeading: "Tarifas de publicidad y precios CPM en podcasts",
    readMinutes: 6,
    sections: [
      {
        heading: "Tarifas de Publicidad en Podcasts y Puntos de Referencia 2026",
        paragraphs: [
          "Según los informes de tarifas publicitarias de AdvertiseCast 2026 y el estudio IAB/PwC, los anuncios en podcasts mantienen una de las tasas de retorno más altas del sector digital. Las marcas pagan tarifas prémium porque las menciones leídas por el anfitrión capturan una atención mucho mayor que los banners convencionales.",
        ],
      },
      {
        heading: "Ejemplo Práctico: Precios para un Episodio",
        paragraphs: [
          "Supongamos que tus episodios alcanzan un promedio de 5.000 descargas en sus primeros 30 días. Divide entre 1.000 para obtener 5 «unidades» y multiplica por el CPM de cada ubicación.",
          "Con 18 $ por un pre-roll, 25 $ por un mid-roll leído por el presentador y 10 $ por un post-roll, un episodio con todas las cuñas vendidas vale 90 $ + 125 $ + 50 $ = 265 $. Con cuatro entregas mensuales, esto supone unos 1.060 $ al mes antes de comisiones.",
        ],
        formula: "5.000 ÷ 1.000 = 5 → (5 × 18 $) + (5 × 25 $) + (5 × 10 $) = 265 $ por episodio",
      },
      {
        heading: "Anuncios Leídos por el Anfitrión vs. Publicidad Programática",
        paragraphs: [
          "Las cuñas leídas por el anfitrión están redactadas o aprobadas por la marca y se locutan con tu propia voz. Los oyentes confían en ellas, por lo que alcanzan las tarifas más elevadas. Pueden grabarse fijas en el audio o insertarse dinámicamente para cambiarlas con el tiempo.",
          "Los anuncios programáticos se gestionan automáticamente a través de redes publicitarias desde tu plataforma de alojamiento. Suelen abonar CPMs más bajos, pero permiten monetizar el catálogo antiguo de episodios que sigue recibiendo escuchas.",
        ],
      },
      {
        heading: "Qué Incluir en una Propuesta para Patrocinadores",
        paragraphs: ["Los patrocinadores desean evaluar la afinidad rápidamente. Un dosier de una página debe incluir:"],
        list: [
          { title: "Perfil de la audiencia", description: "Quién escucha el programa y por qué coincide con el público objetivo del patrocinador." },
          { title: "Descargas verificadas", description: "Promedio de descargas por episodio a 30 días con capturas del hosting si las solicitan." },
          { title: "Espacios y tarifas", description: "Formatos disponibles, duración y tu precio por CPM o tarifa fija." },
          { title: "Muestra de audio o resultados", description: "Un fragmento de recomendación previa o código promocional para medir la conversión." },
        ],
      },
      {
        heading: "Alternativas para Podcasts Pequeños",
        paragraphs: [
          "Si las fórmulas de CPM aún no resultan rentables para tu volumen de escuchas, muchos programas independientes inician con acuerdos a precio fijo, marketing de afiliados o clubes de suscripción de oyentes. Esto crea una base sólida para negociar con patrocinadores mayores a medida que creces.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Qué es un buen CPM para un podcast pequeño?",
        answer:
          "No existe una cifra única. Las tarifas de esta guía sirven como referencia inicial; los programas de nicho con un público muy especializado suelen cobrar importes más altos, mientras que los de entretenimiento general cobran menos. Muchos podcasts pequeños inician con tarifas fijas o comisiones de afiliados.",
      },
      {
        question: "¿Cuántas descargas necesito para conseguir patrocinadores?",
        answer:
          "No hay un umbral obligatorio. Las grandes redes de publicidad exigen un mínimo, pero los anunciantes de nicho trabajan gustosamente con programas de menos de 1.000 oyentes si el público objetivo está muy alineado con su producto.",
      },
      {
        question: "¿Los patrocinadores pagan por descarga o por episodio?",
        answer:
          "Los acuerdos por CPM se abonan por cada 1.000 descargas acumuladas en los primeros 30 a 45 días tras el lanzamiento. Otros patrocinadores prefieren un importe fijo cerrado por episodio o campaña.",
      },
    ],
  },
  "apple-spotify-cover-art-specs-guide": {
    metaTitle: "Medidas de Portada para Apple y Spotify | Pod Studio",
    firstHeading: "Requisitos de tamaño para la portada de podcast",
    readMinutes: 6,
    sections: [
      {
        heading: "Diseña Primero para el Tamaño Miniatura",
        paragraphs: [
          "La mayoría de las personas descubre tu portada al tamaño de una yema de dedo en los resultados de búsqueda. Un diseño que luce espectacular a pantalla completa puede convertirse en una mancha ilegible al reducirse.",
        ],
        list: [
          { title: "Pocas palabras y tipografía grande", description: "El nombre de tu podcast con una fuente gruesa suele ser suficiente. Deja subtítulos para la descripción." },
          { title: "Máximo contraste visual", description: "Letras claras sobre fondo oscuro, o letras oscuras sobre fondo claro. Evita fotos con demasiado ruido visual detrás del texto." },
          { title: "Un único elemento principal", description: "Un rostro, un icono o el título, pero no los tres compitiendo al mismo tiempo." },
        ],
      },
      {
        heading: "Zonas Seguras y Recortes de las Aplicaciones",
        paragraphs: [
          "Muchas aplicaciones redondean las esquinas de las imágenes o colocan etiquetas sobre ellas. Mantén el texto y elementos esenciales dentro del 80% central del cuadrado para evitar cortes accidentales.",
        ],
      },
      {
        heading: "Motivos Habituales de Rechazo de Portadas",
        paragraphs: ["Además de las medidas técnicas, las plataformas revisan la calidad del contenido. Evita:"],
        list: [
          { title: "Logotipos y marcas de las plataformas", description: "No incluyas logotipos de Apple Podcasts o Spotify ni des a entender un patrocinio que no tienes." },
          { title: "Imágenes de baja resolución o estiradas", description: "Gráficos pixelados o distorsionados serán rechazados por proyectar mala imagen." },
          { title: "Imágenes engañosas o inapropiadas", description: "La portada debe representar con honestidad la temática del programa." },
        ],
      },
      {
        heading: "Lista de Verificación antes de Subir tu Portada",
        paragraphs: ["Antes de subir el archivo a tu alojamiento, comprueba que sea:"],
        list: [
          { title: "Cuadrado a 3000 × 3000 px", description: "Proporción 1:1 exacta, dentro del rango oficial de 1400 a 3000 píxeles." },
          { title: "JPEG o PNG en perfil RGB", description: "Usa espacio de color RGB (no CMYK) con su extensión correspondiente." },
          { title: "Legible a 50 × 50 px", description: "Comprueba su nitidez en miniatura antes de confirmar." },
          { title: "Guardado con un nombre nuevo", description: "Al renovar la portada, cambiar el nombre del archivo ayuda a que los directorios actualicen la imagen rápidamente." },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Qué tamaño debe tener la portada de un podcast?",
        answer:
          "Se recomienda una imagen cuadrada de 3000 × 3000 píxeles. Apple Podcasts acepta desde 1400 × 1400 hasta 3000 × 3000 píxeles en JPEG o PNG con perfil de color RGB, medida que funciona perfectamente en Spotify y el resto de apps.",
      },
      {
        question: "¿Puedo usar la misma imagen en Apple Podcasts y Spotify?",
        answer:
          "Sí. Ambas plataformas leen la imagen directamente de tu feed RSS o panel de alojamiento, por lo que una única imagen de 3000 × 3000 px servirá para todos los agregadores.",
      },
      {
        question: "¿Por qué no se actualiza mi nueva portada?",
        answer:
          "Las aplicaciones guardan las carátulas en memoria caché, por lo que pueden tardar desde unas horas hasta varios días en mostrar el cambio. Asegúrate de haber modificado el enlace de la imagen en tu hosting, preferiblemente con un nombre de archivo distinto.",
      },
    ],
  },
  "how-to-write-clickable-episode-titles": {
    metaTitle: "Cómo Escribir Títulos de Podcast con Clics | Pod Studio",
    description:
      "Fórmulas comprobadas para títulos de episodios de podcast que destacan en Apple Podcasts y Spotify: ejemplos, consejos de búsqueda y errores a evitar.",
    firstHeading: "Por Qué el Título de tu Episodio es Determinante",
    readMinutes: 5,
    sections: [
      {
        heading: "Otras Cinco Fórmulas para Experimentar",
        paragraphs: ["Combina estas fórmulas con los arquetipos principales para abordar el mismo tema desde distintos ángulos:"],
        list: [
          { title: "4. La Promesa Tutorial", description: "«Cómo lanzar un podcast con 100 € de presupuesto»: directo, práctico y fácil de buscar." },
          { title: "5. La Lista Numerada", description: "«7 preguntas de entrevista que desbloquean mejores historias»: define expectativas inmediatas." },
          { title: "6. El Gancho con Invitado Destacado", description: "«[Nombre del Invitado] sobre cómo crear una marca sin redes sociales»: ideal cuando el invitado atrae al público." },
          { title: "7. La Pregunta Provocadora", description: "«¿Ha muerto el correo en frío en 2026?»: invita al oyente a descubrir la respuesta." },
          { title: "8. El Marco del Error", description: "«El error de precios que nos costó todo el primer año»: lección real con riesgo palpable." },
        ],
      },
      {
        heading: "Los Títulos y la Búsqueda en Directorios",
        paragraphs: [
          "El buscador de Apple Podcasts y Spotify analiza las palabras del título y la descripción. Incluir los términos que tus oyentes escribirían en la barra de búsqueda ayuda a que descubran tu contenido.",
          "Coloca las palabras clave al inicio, ya que las pantallas pequeñas suelen recortar los títulos largos tras unos 60 caracteres.",
        ],
      },
      {
        heading: "Errores Habituales en Títulos de Podcast",
        paragraphs: ["Estos hábitos restan reproducciones de forma silenciosa:"],
        list: [
          { title: "Empezar por el número de episodio", description: "Las aplicaciones ya muestran el número; poner «Ep. 112:» desperdicia tus caracteres más visibles." },
          { title: "Frases demasiado abstractas", description: "«Una charla fascinante» no le dice nada a quien no te conoce sobre por qué darle al play." },
          { title: "Titulares engañosos", description: "Prometer de más genera abandono en el primer minuto y reseñas negativas." },
          { title: "Chistes internos de la comunidad", description: "Referencias que solo entienden tus seguidores habituales ahuyentan a los nuevos oyentes." },
        ],
      },
      {
        heading: "Una Rutina Sencilla para tus Títulos",
        paragraphs: [
          "Escribe al menos diez opciones con diferentes fórmulas, selecciona las tres mejores y míralas en la pantalla de tu móvil como las vería un oyente. Elige la que comunique el beneficio con mayor claridad.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Debo incluir el número de episodio en el título?",
        answer:
          "Por lo general, no. Los feeds de podcast tienen un campo específico para la numeración que los reproductores ya muestran, por lo que repetirlo en el título resta espacio útil para el tema central.",
      },
      {
        question: "¿Qué longitud debe tener el título de un episodio?",
        answer:
          "No existe un límite estricto, pero cuanto más conciso, mejor. Mantén la idea principal en las primeras palabras para que no se corte en teléfonos ni relojes inteligentes.",
      },
      {
        question: "¿Puedo cambiar el título de un episodio tras publicarlo?",
        answer:
          "Sí. Puedes modificarlo en tu plataforma de alojamiento y el cambio se actualizará en el feed RSS. No modifiques el identificador GUID del episodio para evitar que se interprete como una entrega nueva.",
      },
    ],
  },
  "how-much-do-podcasts-make": {
    metaTitle: "¿Cuánto Gana un Podcast en 2026? | Pod Studio",
    readMinutes: 8,
    sections: [
      {
        heading: "Las Tres Palancas que Multiplican los Ingresos",
        paragraphs: [
          "Los podcasts que generan ingresos muy superiores a su volumen de descargas se centran en tres palancas estratégicas: el poder adquisitivo de su nicho, la frecuencia de publicación y los canales de conversión directa.",
          "Un podcast de negocios que llega a 1.000 directores generales generará muchos más ingresos a través de contratos de asesoría que un programa de entretenimiento general que llega a 50.000 adolescentes mediante anuncios programáticos.",
        ],
        list: [
          {
            title: "Poder de Compra de la Audiencia",
            description: "Los sectores profesionales (finanzas, software B2B, medicina) alcanzan tarifas CPM de 40 a 60 € frente a los 18-22 € del entretenimiento general.",
          },
          {
            title: "Constancia y Frecuencia de Episodios",
            description: "Publicar dos veces por semana duplica el inventario publicitario comercializable sin requerir el doble de oyentes únicos.",
          },
          {
            title: "Canales de Venta Directa",
            description: "Captar correos de oyentes para vender cursos, membresías privadas y talleres exclusivos con altos márgenes.",
          },
        ],
      },
      {
        heading: "¿Cuándo es Viable Dedicarse al Podcast a Tiempo Completo?",
        paragraphs: [
          "La mayoría de los creadores da el salto profesional cuando los ingresos recurrentes combinados de patrocinios, membresías y venta de servicios superan sus gastos habituales durante al menos seis meses consecutivos. Esto suele ocurrir al alcanzar entre 10.000 y 20.000 descargas por entrega o al contar con una cartera de clientes B2B estable.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cuántas descargas necesitas para ganar dinero con un podcast?",
        answer:
          "Puedes monetizar con tan solo 200 a 500 oyentes fieles si ofreces servicios de asesoría, consultoría o productos de afiliación especializados. Para patrocinios tradicionales al CPM, las marcas suelen solicitar un mínimo de 1.000 a 5.000 descargas por entrega a 30 días.",
      },
      {
        question: "¿Cuál es el ingreso medio de un podcast con 1.000 descargas?",
        answer:
          "Un podcast semanal con 1.000 descargas suele generar entre 100 y 300 € al mes solo con publicidad CPM. Si se suma un canal de membresías en Patreon con 30 miembros a 5 €/mes y enlaces de afiliados, los ingresos se sitúan entre 300 y 700 € mensuales.",
      },
      {
        question: "¿Cómo ganan millones los mejores podcasters sin depender del CPM?",
        answer:
          "Los podcasts de mayor facturación utilizan su audiencia como plataforma para crear empresas de software, marcas de consumo, contratos editoriales, inversiones en startups y giras de eventos en directo con entradas de pago.",
      },
      {
        question: "¿Se puede monetizar un podcast con menos de 500 oyentes?",
        answer:
          "Sí. Los micro-podcasts son extraordinariamente rentables cuando funcionan como carta de presentación y generador de confianza para consultoría, agencias o servicios profesionales donde un solo cliente cerrado compensa la producción de todo un año.",
      },
    ],
  },
  "how-to-monetize-a-podcast": {
    metaTitle: "Cómo Monetizar un Podcast y Lograr Patrocinios | Pod Studio",
    readMinutes: 8,
    sections: [
      {
        heading: "El Método de 4 Pasos para Contactar Patrocinadores",
        paragraphs: [
          "Sigue este proceso estructurado de contacto en frío para atraer a tus primeros patrocinadores comerciales:",
        ],
        list: [
          {
            title: "1. Haz una Lista de 20 Marcas Activas",
            description: "Identifica empresas que ya patrocinan podcasts o canales de YouTube en tu misma temática.",
          },
          {
            title: "2. Localiza al Responsable en LinkedIn",
            description: "Busca cargos como «Head of Brand Partnerships», «Media Buyer» o «Marketing Manager».",
          },
          {
            title: "3. Envía una Propuesta Breve y Concreta",
            description: "Menciona una campaña suya que hayas visto, comparte los datos de tu público y propón un paquete de prueba de 2 episodios.",
          },
          {
            title: "4. Haz un Único Seguimiento con Aporte de Valor",
            description: "Si no responden tras 5 días laborables, escribe un breve recordatorio citando una reseña reciente de un oyente sobre su sector.",
          },
        ],
      },
      {
        heading: "Tarifas Fijas frente a Negociación por CPM",
        paragraphs: [
          "Para programas de menos de 10.000 descargas por episodio, negociar paquetes a precio cerrado (por ejemplo, 400 € por 4 episodios) suele ser mucho más ventajoso que las estrictas fórmulas por CPM. Al anunciante le aporta previsibilidad y a ti te garantiza ingresos estables.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cuándo empezar a buscar patrocinadores para tu podcast?",
        answer:
          "Puedes empezar en cuanto hayas publicado al menos 10 episodios constantes y demuestres una comunidad atenta. La afinidad del público y el nivel de interacción suelen importar más a las marcas de nicho que los grandes números brutos de descargas.",
      },
      {
        question: "¿Cuál es la diferencia entre publicidad CPM y patrocinio de afiliados?",
        answer:
          "La publicidad CPM paga una tarifa fija por cada 1.000 descargas sin importar las ventas. El patrocinio por afiliación abona una comisión variable únicamente cuando un oyente realiza una compra a través de tu enlace o cupón.",
      },
      {
        question: "¿Cómo preparar un dosier de prensa que atraiga a las marcas?",
        answer:
          "Condénsalo en una sola página. Incluye logotipo del programa, biografía del presentador, perfil del oyente ideal, promedio de descargas a 30 días, formatos disponibles y datos de contacto. Evita inflar cifras con datos acumulados históricos.",
      },
      {
        question: "¿Es mejor Patreon o Apple Podcasts Subscriptions para cobrar a oyentes?",
        answer:
          "Ambos tienen ventajas. Apple Subscriptions permite suscribirse con un toque dentro de la app (Apple retiene un 15-30%). Patreon te da acceso directo a los correos electrónicos de los miembros y funciona en cualquier reproductor.",
      },
    ],
  },
  "podcast-topic-ideas": {
    metaTitle: "100 Ideas para Temas y Episodios de Podcast | Pod Studio",
    readMinutes: 9,
    sections: [
      {
        heading: "Cómo Validar un Tema antes de Grabarlo",
        paragraphs: [
          "Antes de dedicar horas a preparar la escaleta y grabar, pasa la idea por este filtro de 3 preguntas:",
          "1. ¿Este tema resuelve una duda urgente o dolor real que mis oyentes tienen ahora mismo?",
          "2. ¿Tengo una perspectiva contracorriente, una experiencia propia o un invitado experto que aporte valor real más allá de lo obvio?",
          "3. ¿Puedo resumir la idea en un titular provocador de menos de 60 caracteres que detenga el scroll en las aplicaciones?",
        ],
      },
      {
        heading: "Cómo Planificar un Calendario Editorial a 90 Días",
        paragraphs: [
          "Para evitar el agotamiento, organiza tus temas en temporadas de 12 semanas. Alterna entre monólogos formativos, entrevistas tácticas y entregas dedicadas a responder dudas de la audiencia para mantener un ritmo equilibrado de producción.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cómo saber si una idea da para un episodio completo?",
        answer:
          "Un tema es sólido si puedes desglosar al menos tres puntos principales, contar un caso real o anécdota y aportar una lección aplicable. Si solo contiene un consejo rápido, úsalo como sección de 5 minutos en lugar de una entrega entera.",
      },
      {
        question: "¿Cómo generar ideas frescas de podcast cada semana?",
        answer:
          "Revisa las secciones de comentarios en vídeos populares de YouTube de tu sector, explora hilos de foros y Reddit sobre dudas recurrentes y pide a tus oyentes que te envíen preguntas por redes o mensajes de voz.",
      },
      {
        question: "¿Los episodios deben ceñirse siempre a una única temática?",
        answer:
          "Durante tus primeros 50 episodios, mantén un enfoque riguroso para que los nuevos oyentes identifiquen claramente tu propuesta. Una vez consolidada la confianza con el público, podrás explorar temas adyacentes con naturalidad.",
      },
      {
        question: "¿Qué hace que una sección fija de podcast sea memorable?",
        answer:
          "Una buena sección tiene un nombre sonoro y breve, una sintonía reconocible, un límite de tiempo estricto (3 a 5 minutos) y una estructura predecible que los oyentes habituales esperan con entusiasmo cada semana.",
      },
    ],
  },
  "how-to-start-a-podcast": {
    metaTitle: "Cómo Empezar un Podcast en 2026: Paso a Paso | Pod Studio",
    readMinutes: 12,
    sections: [
      {
        heading: "Configuración del Alojamiento y la Distribución del Podcast",
        paragraphs: [
          "Al contratar un servicio de alojamiento como Buzzsprout, Libsyn o Podbean, la plataforma genera automáticamente la URL de tu feed RSS. Solo necesitas enviar ese enlace una única vez a Apple Podcasts Connect y Spotify for Podcasters.",
          "Cada vez que subas una nueva entrega a tu hosting, los directorios se actualizarán de forma automática en cuestión de horas sin que tengas que intervenir manualmente.",
        ],
      },
      {
        heading: "Plan de Promoción para los Primeros 30 Días",
        paragraphs: [
          "El día del estreno es solo el punto de partida. Durante el primer mes, enfócate en convertir a los oyentes iniciales en suscriptores activos:",
        ],
        list: [
          {
            title: "Campaña de Lanzamiento Inicial",
            description: "Envía un mensaje directo a colegas y amigos pidiéndoles que escuchen, se suscriban y dejen una valoración sincera en Apple Podcasts.",
          },
          {
            title: "Kit de Difusión para Invitados",
            description: "Facilita a cada entrevistado clips verticales, imágenes con citas y textos listos para compartir la mañana en que se publique su entrega.",
          },
          {
            title: "Promoción Cruzada en Otros Podcasts",
            description: "Participa como invitado en otros 2 o 3 programas de tu sector para darte a conocer directamente ante oyentes habituales de podcasts.",
          },
        ],
      },
      {
        heading: "Errores Comunes que Debes Evitar",
        paragraphs: [
          "Evita los fallos que provocan el abandono del 70% de los nuevos programas: obsesionarse semanas con el micrófono descuidando la acústica de la habitación, publicar de manera irregular, anteponer números de episodio en los títulos o abandonar antes de alcanzar el episodio 25.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cuánto dinero cuesta empezar un podcast en 2026?",
        answer:
          "Puedes empezar con un sonido impecable por menos de 150 €. Un buen micrófono dinámico USB (como el Audio-Technica ATR2100x) cuesta unos 79 €, los auriculares unos 40 €, el software de edición (Audacity) es gratuito y el alojamiento ronda los 12 € al mes.",
      },
      {
        question: "¿Se puede empezar un podcast solo con el teléfono móvil?",
        answer:
          "Sí, aplicaciones como Spotify for Podcasters permiten grabar desde el móvil. Sin embargo, para retener oyentes a largo plazo, utilizar un micrófono USB conectado al ordenador en una sala silenciosa aporta un salto de calidad decisivo.",
      },
      {
        question: "¿Con cuántos episodios es recomendable estrenar el podcast?",
        answer:
          "Lo ideal es lanzar el tráiler y 3 episodios completos el primer día. Cuando un oyente disfruta de tu primera entrega, tener dos más disponibles de inmediato fomenta la escucha continuada e impulsa la suscripción al canal.",
      },
      {
        question: "¿Cuánto tarda Apple Podcasts en aprobar un programa?",
        answer:
          "La revisión suele tardar entre 24 horas y 5 días laborables. Envía tu feed al menos una o dos semanas antes de la fecha prevista para tu estreno público para prevenir retrasos.",
      },
      {
        question: "¿Cuál es el mayor error de los podcasters principiantes?",
        answer:
          "La falta de regularidad. Saltarse semanas de publicación rompe el hábito de escucha del público y hace que las plataformas resten visibilidad al programa. Mantener una periodicidad predecible supera a la perfección en cada entrega.",
      },
    ],
  },
};
