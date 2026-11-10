import type { LocalizedGuideArticle } from "../guidesData";
import type { SupportedLocale } from "../languages";

// Guides added from DataForSEO keyword research (2026-11-09):
//  - "podcast script" / "podcast script example(s)" ~1,000 searches, KD 1-3
//  - "podcast rss feed" ~1,600 searches, KD 28
export const SCRIPT_SLUG = "podcast-script-examples-template";
export const RSS_SLUG = "what-is-a-podcast-rss-feed";

const link = (href: string, text: string) =>
  `<a href="${href}" class="text-[#a9583e] underline font-medium">${text}</a>`;

/* ------------------------------------------------------------------ EN */
const scriptEn: LocalizedGuideArticle = {
  title: "Podcast Script Examples & Free Template (Solo, Interview, Intro)",
  metaTitle: "Podcast Script Examples & Free Template | Pod Studio",
  description:
    "See podcast script examples for solo and interview episodes, plus a free podcast script template with timing cues. Copy, adapt and record with confidence.",
  readTime: "7 min read",
  publishedAt: "2026-11-09",
  category: "Content",
  sections: [
    {
      heading: "What Is a Podcast Script?",
      paragraphs: [
        "A podcast script is the written plan for an episode: what you say, in what order, and for roughly how long. It can be a word-for-word script or a loose outline with bullet points. Most shows use a hybrid: the intro, ad reads and outro are scripted, and the middle is bullets.",
        `If you want a timed skeleton instead of starting from a blank page, our ${link("/tools/episode-outline-builder", "Podcast Script Template & Episode Outline Builder")} produces one in seconds.`,
      ],
    },
    {
      heading: "Podcast Script Template (Solo Episode)",
      paragraphs: ["Copy this structure and fill in the brackets. Times assume a 20-minute episode."],
      list: [
        { title: "0:00 Cold open (20 sec)", description: "“[Surprising fact or promise of the episode].” Then your intro music." },
        { title: "0:20 Intro (40 sec)", description: "“Welcome to [Show Name]. I'm [Name], and today we're covering [topic] so you can [result].”" },
        { title: "1:00 Main point 1 (5 min)", description: "State the point, give one story or example, then a one-line takeaway." },
        { title: "6:00 Sponsor read (60 sec)", description: "“This episode is brought to you by [Sponsor]…” Keep the read in your own voice." },
        { title: "7:00 Main points 2 and 3 (10 min)", description: "Repeat the point, example, takeaway pattern. Signpost each one: “Second…”, “Finally…”." },
        { title: "17:00 Recap (1 min)", description: "Summarize in three sentences what the listener now knows." },
        { title: "18:00 Call to action and outro (1 min)", description: "One ask only: subscribe, review or visit [link]. Then thank the listener and play outro music." },
      ],
    },
    {
      heading: "Podcast Script Example (Interview Episode)",
      paragraphs: [
        "Interviews work best when you script the frame and leave the conversation open. Here is a short example you can adapt.",
      ],
      list: [
        { title: "Intro", description: "“Today's guest is [Name], [one-line credential]. We talk about [topic 1], [topic 2] and the mistake [Name] wishes they had avoided.”" },
        { title: "Opening question", description: "“Before we dive in, how did you get started in [field]?”" },
        { title: "Middle questions", description: "Three to five questions that move from story, to lesson, to advice. Write only the first words of each follow-up." },
        { title: "Closing question", description: "“What is one thing a beginner should do this week?”" },
        { title: "Outro", description: "“Where can people find you?” Then thank the guest and give your call to action." },
      ],
    },
    {
      heading: "Tips for Writing a Script You Can Actually Read Aloud",
      paragraphs: [
        "Write the way you talk. Short sentences, contractions, and one idea per line sound natural. Read each page aloud once and mark any line where you stumble; rewrite it. Keep a timer next to the script, because an average speaking pace is around 150 words per minute, which means a 20-minute solo episode is roughly 3,000 words if fully scripted.",
        `Need questions for a guest? Try the ${link("/tools/guest-question-generator", "Podcast Interview Questions Generator")}. Need a hook for the first 20 seconds? See our ${link("/guides/how-to-write-clickable-episode-titles", "episode title guide")} for headline formulas that also work as cold opens.`,
      ],
    },
  ],
  faqs: [
    {
      question: "Should I script my whole podcast or use an outline?",
      answer:
        "Script the opening, sponsor reads and closing, and use bullet points for the middle. That keeps the important lines tight while the conversation still sounds natural.",
    },
    {
      question: "How long should a podcast script be?",
      answer:
        "A fully scripted episode is about 150 words per minute of audio, so roughly 3,000 words for 20 minutes. An outline is usually one to two pages.",
    },
    {
      question: "Is there a free podcast script template?",
      answer:
        "Yes. Use the template above, or generate a timed version for your format with the free Episode Outline Builder.",
    },
  ],
  cta: {
    title: "Build Your Podcast Script in Seconds",
    description: "Generate a timed script template for solo, interview or panel episodes.",
    buttonText: "Open Episode Outline Builder",
    toolSlug: "episode-outline-builder",
  },
};

const rssEn: LocalizedGuideArticle = {
  title: "What Is a Podcast RSS Feed? How to Find, Create and Validate It",
  metaTitle: "What Is a Podcast RSS Feed? Find & Validate It | Pod Studio",
  description:
    "A podcast RSS feed is the file that delivers your show to Apple Podcasts and Spotify. Learn how to find yours, what it must contain and how to validate it.",
  readTime: "7 min read",
  publishedAt: "2026-11-09",
  category: "Production",
  sections: [
    {
      heading: "What Is a Podcast RSS Feed?",
      paragraphs: [
        "A podcast RSS feed is a public web address that lists your show details and every episode in a standard XML format. Apple Podcasts, Spotify and other apps read this feed to find new episodes. Your audio files do not live in the feed itself; the feed points to them.",
        "Your podcast host creates and updates the feed for you. When you publish an episode, the host adds it to the feed and the apps pick it up.",
      ],
    },
    {
      heading: "How to Find Your Podcast RSS Feed URL",
      paragraphs: ["The link is usually in your host's dashboard."],
      list: [
        { title: "Check your host", description: "Look for “RSS feed”, “Distribution” or “Settings” in your hosting dashboard and copy the URL." },
        { title: "Look it up in Apple Podcasts", description: "Open your show on the web, then use the “Copy RSS feed” option if the host allows it." },
        { title: "Use it to submit", description: "Paste the same URL into Apple Podcasts Connect, Spotify for Creators and other directories." },
      ],
    },
    {
      heading: "What a Valid Feed Must Contain",
      paragraphs: [
        "Directories reject feeds that are missing required fields. Make sure yours includes the following.",
      ],
      list: [
        { title: "Show title, description and language", description: "Clear, accurate and matching your artwork and brand." },
        { title: "Cover art 1400 to 3000 px, square", description: `JPEG or PNG, and RGB color. Check yours with the ${link("/tools/cover-art-preview", "Cover Art Size Checker")}.` },
        { title: "Category and explicit flag", description: "One Apple category and a yes or no for explicit content." },
        { title: "Episode enclosures", description: "Each episode needs a working audio URL, file type and length." },
        { title: "Unique GUID per episode", description: "Never change a GUID after publishing, or apps may show a duplicate episode." },
      ],
    },
    {
      heading: "How to Validate Your Podcast RSS Feed",
      paragraphs: [
        `Before you submit, run the feed through a validator to catch errors such as missing tags, broken enclosures or wrong date formats. Use the free ${link("/tools/rss-feed-validator", "Podcast RSS Feed Validator")} and fix any errors it reports in your host. Then submit the feed to each directory.`,
        `New to the whole process? Start with ${link("/guides/how-to-start-a-podcast", "How to Start a Podcast")}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "Do I need to create the RSS feed myself?",
      answer:
        "No. Podcast hosting platforms generate and update it automatically. You only need to copy the URL and submit it once to each directory.",
    },
    {
      question: "Can I change my podcast RSS feed URL?",
      answer:
        "You can, but you must set up a redirect from the old feed to the new one, or you risk losing listeners and directory listings.",
    },
    {
      question: "Why is my episode not showing up in Apple Podcasts?",
      answer:
        "Most often the feed has an error, a broken audio link or a changed GUID. Validate the feed and check that the new episode is visible in it.",
    },
  ],
  cta: {
    title: "Check Your RSS Feed for Errors",
    description: "Paste your feed URL and see what directories may reject.",
    buttonText: "Open RSS Feed Validator",
    toolSlug: "rss-feed-validator",
  },
};

/* ------------------------------------------------------------------ ES */
const scriptEs: LocalizedGuideArticle = {
  title: "Ejemplos de Guion de Podcast y Plantilla Gratis (Solo, Entrevista, Intro)",
  metaTitle: "Ejemplos de Guion de Podcast y Plantilla Gratis | Pod Studio",
  description:
    "Mira ejemplos de guion de podcast para episodios en solitario y entrevistas, más una plantilla gratuita con tiempos. Copia, adapta y graba con seguridad.",
  readTime: "Lectura de 7 min",
  publishedAt: "2026-11-09",
  category: "Contenido",
  sections: [
    {
      heading: "¿Qué es un guion de podcast?",
      paragraphs: [
        "Un guion de podcast es el plan escrito de un episodio: qué dices, en qué orden y durante cuánto tiempo. Puede ser palabra por palabra o un esquema con viñetas. La mayoría de los programas usa un formato mixto: intro, anuncios y cierre escritos, y el centro en viñetas.",
        `Si prefieres partir de un esqueleto con tiempos, nuestro ${link("/es/tools/episode-outline-builder", "Creador de Guiones y Escaletas de Podcast")} lo genera en segundos.`,
      ],
    },
    {
      heading: "Plantilla de guion de podcast (episodio en solitario)",
      paragraphs: ["Copia esta estructura y rellena los corchetes. Los tiempos son para un episodio de 20 minutos."],
      list: [
        { title: "0:00 Gancho inicial (20 s)", description: "“[Dato sorprendente o promesa del episodio].” Después, la música de entrada." },
        { title: "0:20 Introducción (40 s)", description: "“Bienvenido a [Programa]. Soy [Nombre] y hoy hablamos de [tema] para que puedas [resultado].”" },
        { title: "1:00 Punto 1 (5 min)", description: "Presenta la idea, cuenta una historia o ejemplo y cierra con una conclusión de una frase." },
        { title: "6:00 Patrocinador (60 s)", description: "“Este episodio está patrocinado por [Marca]…” Léelo con tus propias palabras." },
        { title: "7:00 Puntos 2 y 3 (10 min)", description: "Repite idea, ejemplo y conclusión. Señaliza cada bloque: “Segundo…”, “Por último…”." },
        { title: "17:00 Resumen (1 min)", description: "Resume en tres frases lo que el oyente ya sabe." },
        { title: "18:00 Llamada a la acción y cierre (1 min)", description: "Una sola petición: suscribirse, valorar o visitar [enlace]. Agradece y pon la música final." },
      ],
    },
    {
      heading: "Ejemplo de guion de podcast (episodio de entrevista)",
      paragraphs: ["En las entrevistas conviene escribir el marco y dejar libre la conversación. Aquí tienes un ejemplo adaptable."],
      list: [
        { title: "Introducción", description: "“Hoy nos acompaña [Nombre], [credencial en una línea]. Hablamos de [tema 1], [tema 2] y del error que le gustaría haber evitado.”" },
        { title: "Pregunta de apertura", description: "“Antes de empezar, ¿cómo diste tus primeros pasos en [sector]?”" },
        { title: "Preguntas centrales", description: "De tres a cinco preguntas que pasen de la historia a la lección y al consejo. Escribe solo el comienzo de cada pregunta de seguimiento." },
        { title: "Pregunta final", description: "“¿Qué debería hacer un principiante esta semana?”" },
        { title: "Cierre", description: "“¿Dónde te puede encontrar la gente?” Agradece al invitado y lanza tu llamada a la acción." },
      ],
    },
    {
      heading: "Consejos para escribir un guion que se pueda leer en voz alta",
      paragraphs: [
        "Escribe como hablas: frases cortas, contracciones y una idea por línea. Lee cada página en voz alta y reescribe donde tropieces. El ritmo medio es de unas 150 palabras por minuto, así que un episodio de 20 minutos totalmente escrito ronda las 3.000 palabras.",
        `¿Necesitas preguntas para tu invitado? Prueba el ${link("/es/tools/guest-question-generator", "Generador de Preguntas para Entrevistas de Podcast")}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "¿Debo escribir todo el guion o usar un esquema?",
      answer: "Escribe la apertura, los anuncios y el cierre, y usa viñetas para el centro. Así controlas lo importante y mantienes un tono natural.",
    },
    {
      question: "¿Cuánto debe durar un guion de podcast?",
      answer: "Un episodio totalmente guionizado son unas 150 palabras por minuto, es decir, unas 3.000 palabras para 20 minutos. Un esquema suele ocupar una o dos páginas.",
    },
    {
      question: "¿Hay una plantilla de guion de podcast gratuita?",
      answer: "Sí. Usa la plantilla de arriba o genera una versión con tiempos con el Creador de Escaletas gratuito.",
    },
  ],
  cta: {
    title: "Crea tu guion de podcast en segundos",
    description: "Genera una plantilla con tiempos para episodios en solitario, entrevistas o mesas redondas.",
    buttonText: "Abrir el Creador de Escaletas",
    toolSlug: "episode-outline-builder",
  },
};

const rssEs: LocalizedGuideArticle = {
  title: "¿Qué Es un Feed RSS de Podcast? Cómo Encontrarlo y Validarlo",
  metaTitle: "¿Qué Es un Feed RSS de Podcast? Encuéntralo y Valídalo | Pod Studio",
  description:
    "El feed RSS de un podcast es el archivo que lleva tu programa a Apple Podcasts y Spotify. Aprende a encontrar el tuyo, qué debe incluir y cómo validarlo.",
  readTime: "Lectura de 7 min",
  publishedAt: "2026-11-09",
  category: "Producción",
  sections: [
    {
      heading: "¿Qué es un feed RSS de podcast?",
      paragraphs: [
        "Un feed RSS de podcast es una dirección web pública que lista los datos del programa y todos los episodios en formato XML estándar. Apple Podcasts, Spotify y otras apps leen este feed para detectar episodios nuevos. Los archivos de audio no están dentro del feed: el feed apunta a ellos.",
        "Tu servicio de alojamiento crea y actualiza el feed por ti. Cuando publicas un episodio, se añade al feed y las apps lo recogen.",
      ],
    },
    {
      heading: "Cómo encontrar la URL del feed RSS de tu podcast",
      paragraphs: ["El enlace suele estar en el panel de tu proveedor de alojamiento."],
      list: [
        { title: "Revisa tu proveedor", description: "Busca “Feed RSS”, “Distribución” o “Ajustes” en el panel y copia la URL." },
        { title: "Consúltalo en Apple Podcasts", description: "Abre tu programa en la web y usa “Copiar feed RSS” si tu proveedor lo permite." },
        { title: "Úsalo para enviarlo", description: "Pega la misma URL en Apple Podcasts Connect, Spotify for Creators y otros directorios." },
      ],
    },
    {
      heading: "Qué debe contener un feed válido",
      paragraphs: ["Los directorios rechazan feeds a los que les faltan campos obligatorios. Comprueba que el tuyo incluya lo siguiente."],
      list: [
        { title: "Título, descripción e idioma", description: "Claros, precisos y coherentes con tu portada y tu marca." },
        { title: "Portada cuadrada de 1400 a 3000 px", description: `JPEG o PNG en RGB. Compruébala con el ${link("/es/tools/cover-art-preview", "Verificador de Tamaño de Portada")}.` },
        { title: "Categoría y marca de contenido explícito", description: "Una categoría de Apple y un sí o no para contenido explícito." },
        { title: "Enclosures de cada episodio", description: "Cada episodio necesita una URL de audio válida, tipo de archivo y duración." },
        { title: "GUID único por episodio", description: "No cambies nunca un GUID tras publicar o las apps pueden mostrar un episodio duplicado." },
      ],
    },
    {
      heading: "Cómo validar el feed RSS de tu podcast",
      paragraphs: [
        `Antes de enviarlo, pasa el feed por un validador para detectar etiquetas ausentes, audios rotos o fechas con formato incorrecto. Usa el ${link("/es/tools/rss-feed-validator", "Validador de Feed RSS de Podcast")} gratuito y corrige en tu proveedor los errores que indique.`,
        `¿Empiezas de cero? Lee ${link("/es/guides/how-to-start-a-podcast", "Cómo empezar un podcast")}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "¿Tengo que crear el feed RSS yo mismo?",
      answer: "No. Las plataformas de alojamiento lo generan y actualizan automáticamente. Solo debes copiar la URL y enviarla una vez a cada directorio.",
    },
    {
      question: "¿Puedo cambiar la URL del feed RSS de mi podcast?",
      answer: "Sí, pero debes configurar una redirección desde el feed antiguo al nuevo; si no, puedes perder oyentes y presencia en directorios.",
    },
    {
      question: "¿Por qué mi episodio no aparece en Apple Podcasts?",
      answer: "Lo más habitual es un error en el feed, un enlace de audio roto o un GUID cambiado. Valida el feed y comprueba que el episodio nuevo aparece en él.",
    },
  ],
  cta: {
    title: "Revisa errores en tu feed RSS",
    description: "Pega la URL de tu feed y descubre qué podrían rechazar los directorios.",
    buttonText: "Abrir el Validador de Feed RSS",
    toolSlug: "rss-feed-validator",
  },
};

/* ------------------------------------------------------------------ FR */
const scriptFr: LocalizedGuideArticle = {
  title: "Exemples de Script de Podcast et Modèle Gratuit (Solo, Interview, Intro)",
  metaTitle: "Exemples de Script de Podcast et Modèle Gratuit | Pod Studio",
  description:
    "Découvrez des exemples de script de podcast pour épisodes solo et interviews, avec un modèle gratuit et des repères de durée. Copiez, adaptez et enregistrez.",
  readTime: "7 min de lecture",
  publishedAt: "2026-11-09",
  category: "Contenu",
  sections: [
    {
      heading: "Qu'est-ce qu'un script de podcast ?",
      paragraphs: [
        "Un script de podcast est le plan écrit d'un épisode : ce que vous dites, dans quel ordre et pendant combien de temps. Il peut être rédigé mot à mot ou prendre la forme d'un plan à puces. La plupart des émissions combinent les deux : intro, publicités et conclusion écrites, partie centrale en puces.",
        `Pour partir d'une trame chronométrée, notre ${link("/fr/tools/episode-outline-builder", "Générateur de Trame d'Épisode")} en produit une en quelques secondes.`,
      ],
    },
    {
      heading: "Modèle de script de podcast (épisode solo)",
      paragraphs: ["Copiez cette structure et complétez les crochets. Les durées valent pour un épisode de 20 minutes."],
      list: [
        { title: "0:00 Accroche (20 s)", description: "« [Fait surprenant ou promesse de l'épisode]. » Puis votre musique d'intro." },
        { title: "0:20 Introduction (40 s)", description: "« Bienvenue dans [Émission]. Je suis [Nom] et aujourd'hui, on parle de [sujet] pour que vous puissiez [résultat]. »" },
        { title: "1:00 Point 1 (5 min)", description: "Énoncez l'idée, racontez une anecdote ou un exemple, puis concluez en une phrase." },
        { title: "6:00 Message sponsor (60 s)", description: "« Cet épisode est proposé par [Marque]… » Lisez-le avec vos propres mots." },
        { title: "7:00 Points 2 et 3 (10 min)", description: "Reprenez le schéma idée, exemple, conclusion. Annoncez chaque partie : « Deuxièmement… », « Enfin… »." },
        { title: "17:00 Récapitulatif (1 min)", description: "Résumez en trois phrases ce que l'auditeur sait désormais." },
        { title: "18:00 Appel à l'action et conclusion (1 min)", description: "Une seule demande : s'abonner, noter ou visiter [lien]. Remerciez puis lancez la musique de fin." },
      ],
    },
    {
      heading: "Exemple de script de podcast (épisode interview)",
      paragraphs: ["En interview, écrivez le cadre et laissez la conversation libre. Voici un exemple à adapter."],
      list: [
        { title: "Introduction", description: "« Aujourd'hui, j'accueille [Nom], [titre en une ligne]. Nous parlons de [sujet 1], [sujet 2] et de l'erreur qu'il ou elle aurait aimé éviter. »" },
        { title: "Question d'ouverture", description: "« Avant de commencer, comment vous êtes-vous lancé dans [domaine] ? »" },
        { title: "Questions centrales", description: "Trois à cinq questions qui passent de l'histoire à la leçon puis au conseil. N'écrivez que le début de chaque relance." },
        { title: "Question finale", description: "« Quelle est la chose à faire cette semaine pour un débutant ? »" },
        { title: "Conclusion", description: "« Où peut-on vous retrouver ? » Remerciez l'invité et donnez votre appel à l'action." },
      ],
    },
    {
      heading: "Conseils pour un script facile à lire à voix haute",
      paragraphs: [
        "Écrivez comme vous parlez : phrases courtes, contractions, une idée par ligne. Lisez chaque page à voix haute et réécrivez les passages où vous butez. Le débit moyen est d'environ 150 mots par minute, soit près de 3 000 mots pour 20 minutes entièrement écrites.",
        `Besoin de questions pour un invité ? Essayez le ${link("/fr/tools/guest-question-generator", "Générateur de Questions d'Interview")}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "Dois-je écrire tout le script ou utiliser un plan ?",
      answer: "Rédigez l'ouverture, les messages sponsors et la conclusion, et utilisez des puces pour le centre. Vous gardez le contrôle tout en restant naturel.",
    },
    {
      question: "Quelle longueur pour un script de podcast ?",
      answer: "Un épisode entièrement écrit représente environ 150 mots par minute, soit près de 3 000 mots pour 20 minutes. Un plan tient généralement sur une à deux pages.",
    },
    {
      question: "Existe-t-il un modèle de script de podcast gratuit ?",
      answer: "Oui. Utilisez le modèle ci-dessus ou générez une version chronométrée avec le Générateur de Trame d'Épisode gratuit.",
    },
  ],
  cta: {
    title: "Créez votre script de podcast en quelques secondes",
    description: "Générez un modèle chronométré pour épisodes solo, interviews ou tables rondes.",
    buttonText: "Ouvrir le Générateur de Trame",
    toolSlug: "episode-outline-builder",
  },
};

const rssFr: LocalizedGuideArticle = {
  title: "Qu'est-ce qu'un Flux RSS de Podcast ? Le Trouver et le Valider",
  metaTitle: "Qu'est-ce qu'un Flux RSS de Podcast ? Trouver et Valider | Pod Studio",
  description:
    "Le flux RSS d'un podcast est le fichier qui diffuse votre émission sur Apple Podcasts et Spotify. Apprenez à trouver le vôtre, son contenu requis et à le valider.",
  readTime: "7 min de lecture",
  publishedAt: "2026-11-09",
  category: "Production",
  sections: [
    {
      heading: "Qu'est-ce qu'un flux RSS de podcast ?",
      paragraphs: [
        "Un flux RSS de podcast est une adresse web publique qui liste les informations de l'émission et tous les épisodes dans un format XML standard. Apple Podcasts, Spotify et les autres applications lisent ce flux pour détecter les nouveaux épisodes. Les fichiers audio ne sont pas dans le flux : il pointe vers eux.",
        "Votre hébergeur crée et met à jour le flux pour vous. Quand vous publiez un épisode, il l'ajoute au flux et les applications le récupèrent.",
      ],
    },
    {
      heading: "Comment trouver l'URL de votre flux RSS",
      paragraphs: ["Le lien se trouve généralement dans le tableau de bord de votre hébergeur."],
      list: [
        { title: "Consultez votre hébergeur", description: "Cherchez « Flux RSS », « Distribution » ou « Paramètres » et copiez l'URL." },
        { title: "Vérifiez dans Apple Podcasts", description: "Ouvrez votre émission sur le web et utilisez « Copier le flux RSS » si votre hébergeur l'autorise." },
        { title: "Utilisez-le pour soumettre", description: "Collez la même URL dans Apple Podcasts Connect, Spotify for Creators et les autres annuaires." },
      ],
    },
    {
      heading: "Ce que doit contenir un flux valide",
      paragraphs: ["Les annuaires rejettent les flux auxquels il manque des champs obligatoires. Vérifiez que le vôtre contient les éléments suivants."],
      list: [
        { title: "Titre, description et langue", description: "Clairs, exacts et cohérents avec votre visuel et votre marque." },
        { title: "Visuel carré de 1400 à 3000 px", description: `JPEG ou PNG en RVB. Vérifiez-le avec le ${link("/fr/tools/cover-art-preview", "Vérificateur de Taille de Pochette")}.` },
        { title: "Catégorie et indicateur de contenu explicite", description: "Une catégorie Apple et un oui ou non pour le contenu explicite." },
        { title: "Enclosures d'épisode", description: "Chaque épisode doit avoir une URL audio valide, un type de fichier et une durée." },
        { title: "GUID unique par épisode", description: "Ne modifiez jamais un GUID après publication, sinon les applications peuvent afficher un doublon." },
      ],
    },
    {
      heading: "Comment valider votre flux RSS de podcast",
      paragraphs: [
        `Avant de le soumettre, passez le flux dans un validateur pour repérer balises manquantes, audios cassés ou dates mal formatées. Utilisez le ${link("/fr/tools/rss-feed-validator", "Validateur de Flux RSS Podcast")} gratuit et corrigez les erreurs chez votre hébergeur.`,
        `Vous débutez ? Lisez ${link("/fr/guides/how-to-start-a-podcast", "Comment lancer un podcast")}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "Dois-je créer le flux RSS moi-même ?",
      answer: "Non. Les plateformes d'hébergement le génèrent et le mettent à jour automatiquement. Il suffit de copier l'URL et de la soumettre une fois à chaque annuaire.",
    },
    {
      question: "Puis-je changer l'URL de mon flux RSS ?",
      answer: "Oui, mais configurez une redirection de l'ancien flux vers le nouveau, sinon vous risquez de perdre des auditeurs et vos fiches d'annuaire.",
    },
    {
      question: "Pourquoi mon épisode n'apparaît-il pas dans Apple Podcasts ?",
      answer: "Le plus souvent, le flux contient une erreur, un lien audio cassé ou un GUID modifié. Validez le flux et vérifiez que le nouvel épisode y figure.",
    },
  ],
  cta: {
    title: "Vérifiez les erreurs de votre flux RSS",
    description: "Collez l'URL de votre flux et voyez ce que les annuaires pourraient rejeter.",
    buttonText: "Ouvrir le Validateur de Flux RSS",
    toolSlug: "rss-feed-validator",
  },
};

/* ------------------------------------------------------------------ DE */
const scriptDe: LocalizedGuideArticle = {
  title: "Podcast-Skript Beispiele & Kostenlose Vorlage (Solo, Interview, Intro)",
  metaTitle: "Podcast-Skript Beispiele & Gratis-Vorlage | Pod Studio",
  description:
    "Podcast-Skript Beispiele für Solo- und Interview-Folgen plus eine kostenlose Podcast-Skript-Vorlage mit Zeitangaben. Kopieren, anpassen und aufnehmen.",
  readTime: "7 Min. Lesezeit",
  publishedAt: "2026-11-09",
  category: "Inhalte",
  sections: [
    {
      heading: "Was ist ein Podcast-Skript?",
      paragraphs: [
        "Ein Podcast-Skript ist der schriftliche Plan einer Folge: was Sie sagen, in welcher Reihenfolge und wie lange. Es kann wortwörtlich ausgeschrieben sein oder nur aus Stichpunkten bestehen. Die meisten Shows nutzen eine Mischform: Intro, Werbung und Abmoderation sind geschrieben, der Mittelteil besteht aus Stichpunkten.",
        `Wenn Sie ein Grundgerüst mit Zeiten möchten, erstellt der ${link("/de/tools/episode-outline-builder", "Podcast-Episoden-Gliederungsplaner")} eines in Sekunden.`,
      ],
    },
    {
      heading: "Podcast-Skript-Vorlage (Solo-Folge)",
      paragraphs: ["Kopieren Sie diese Struktur und füllen Sie die Klammern aus. Die Zeiten gelten für eine 20-minütige Folge."],
      list: [
        { title: "0:00 Teaser (20 Sek.)", description: "„[Überraschende Tatsache oder Versprechen der Folge].“ Danach die Intro-Musik." },
        { title: "0:20 Begrüßung (40 Sek.)", description: "„Willkommen bei [Show]. Ich bin [Name], und heute geht es um [Thema], damit Sie [Ergebnis] erreichen.“" },
        { title: "1:00 Hauptpunkt 1 (5 Min.)", description: "Punkt nennen, ein Beispiel oder eine Geschichte erzählen, dann ein Fazit in einem Satz." },
        { title: "6:00 Sponsoring (60 Sek.)", description: "„Diese Folge wird präsentiert von [Marke]…“ Sprechen Sie den Text in Ihren eigenen Worten." },
        { title: "7:00 Hauptpunkte 2 und 3 (10 Min.)", description: "Gleiches Muster aus Punkt, Beispiel und Fazit. Kündigen Sie jeden Teil an: „Zweitens…“, „Zum Schluss…“." },
        { title: "17:00 Zusammenfassung (1 Min.)", description: "Fassen Sie in drei Sätzen zusammen, was die Hörer jetzt wissen." },
        { title: "18:00 Handlungsaufforderung und Outro (1 Min.)", description: "Nur eine Bitte: abonnieren, bewerten oder [Link] besuchen. Dann bedanken und Outro-Musik einspielen." },
      ],
    },
    {
      heading: "Podcast-Skript Beispiel (Interview-Folge)",
      paragraphs: ["Bei Interviews schreiben Sie den Rahmen und lassen das Gespräch offen. Hier ein Beispiel zum Anpassen."],
      list: [
        { title: "Anmoderation", description: "„Heute zu Gast: [Name], [Kurzvorstellung]. Wir sprechen über [Thema 1], [Thema 2] und den Fehler, den [Name] gern vermieden hätte.“" },
        { title: "Einstiegsfrage", description: "„Bevor wir starten: Wie sind Sie zu [Bereich] gekommen?“" },
        { title: "Mittlere Fragen", description: "Drei bis fünf Fragen, die von Geschichte über Erkenntnis zu Rat führen. Notieren Sie nur den Anfang jeder Nachfrage." },
        { title: "Abschlussfrage", description: "„Was sollte ein Anfänger diese Woche tun?“" },
        { title: "Abmoderation", description: "„Wo finden die Hörer Sie?“ Dann Gast verabschieden und Ihre Handlungsaufforderung nennen." },
      ],
    },
    {
      heading: "Tipps für ein Skript, das sich gut vorlesen lässt",
      paragraphs: [
        "Schreiben Sie, wie Sie sprechen: kurze Sätze, ein Gedanke pro Zeile. Lesen Sie jede Seite einmal laut und schreiben Sie Stellen um, an denen Sie stolpern. Das durchschnittliche Sprechtempo liegt bei etwa 150 Wörtern pro Minute, eine vollständig ausgeschriebene 20-Minuten-Folge hat also rund 3.000 Wörter.",
        `Fragen für Gäste? Probieren Sie den ${link("/de/tools/guest-question-generator", "Podcast-Interviewfragen-Generator")}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "Soll ich mein ganzes Skript ausschreiben oder eine Gliederung nutzen?",
      answer: "Schreiben Sie Einstieg, Werbung und Schluss aus und nutzen Sie für den Mittelteil Stichpunkte. So bleibt das Wichtige präzise und das Gespräch natürlich.",
    },
    {
      question: "Wie lang sollte ein Podcast-Skript sein?",
      answer: "Eine komplett ausgeschriebene Folge hat etwa 150 Wörter pro Minute, also rund 3.000 Wörter für 20 Minuten. Eine Gliederung umfasst meist ein bis zwei Seiten.",
    },
    {
      question: "Gibt es eine kostenlose Podcast-Skript-Vorlage?",
      answer: "Ja. Nutzen Sie die Vorlage oben oder erstellen Sie mit dem kostenlosen Gliederungsplaner eine Version mit Zeitangaben.",
    },
  ],
  cta: {
    title: "Erstellen Sie Ihr Podcast-Skript in Sekunden",
    description: "Generieren Sie eine Vorlage mit Zeiten für Solo-, Interview- oder Panel-Folgen.",
    buttonText: "Gliederungsplaner öffnen",
    toolSlug: "episode-outline-builder",
  },
};

const rssDe: LocalizedGuideArticle = {
  title: "Was ist ein Podcast-RSS-Feed? So finden und prüfen Sie ihn",
  metaTitle: "Was ist ein Podcast-RSS-Feed? Finden & Prüfen | Pod Studio",
  description:
    "Der Podcast-RSS-Feed ist die Datei, die Ihre Show zu Apple Podcasts und Spotify bringt. So finden Sie Ihren Feed, was er enthalten muss und wie Sie ihn validieren.",
  readTime: "7 Min. Lesezeit",
  publishedAt: "2026-11-09",
  category: "Produktion",
  sections: [
    {
      heading: "Was ist ein Podcast-RSS-Feed?",
      paragraphs: [
        "Ein Podcast-RSS-Feed ist eine öffentliche Webadresse, die Showdaten und alle Folgen in einem standardisierten XML-Format auflistet. Apple Podcasts, Spotify und andere Apps lesen diesen Feed, um neue Folgen zu finden. Die Audiodateien liegen nicht im Feed selbst; der Feed verweist auf sie.",
        "Ihr Podcast-Hoster erstellt und aktualisiert den Feed automatisch. Veröffentlichen Sie eine Folge, wird sie dem Feed hinzugefügt und die Apps übernehmen sie.",
      ],
    },
    {
      heading: "So finden Sie die URL Ihres Podcast-RSS-Feeds",
      paragraphs: ["Den Link finden Sie meist im Dashboard Ihres Hosters."],
      list: [
        { title: "Hoster prüfen", description: "Suchen Sie nach „RSS-Feed“, „Distribution“ oder „Einstellungen“ und kopieren Sie die URL." },
        { title: "In Apple Podcasts nachsehen", description: "Öffnen Sie Ihre Show im Web und nutzen Sie „RSS-Feed kopieren“, sofern Ihr Hoster das erlaubt." },
        { title: "Zum Einreichen nutzen", description: "Fügen Sie dieselbe URL in Apple Podcasts Connect, Spotify for Creators und anderen Verzeichnissen ein." },
      ],
    },
    {
      heading: "Was ein gültiger Feed enthalten muss",
      paragraphs: ["Verzeichnisse lehnen Feeds mit fehlenden Pflichtfeldern ab. Prüfen Sie, ob Ihrer Folgendes enthält."],
      list: [
        { title: "Titel, Beschreibung und Sprache", description: "Klar, korrekt und passend zu Cover und Marke." },
        { title: "Quadratisches Cover, 1400 bis 3000 px", description: `JPEG oder PNG im RGB-Farbraum. Prüfen Sie es mit dem ${link("/de/tools/cover-art-preview", "Cover-Art-Größenprüfer")}.` },
        { title: "Kategorie und Explicit-Kennzeichnung", description: "Eine Apple-Kategorie und ein Ja oder Nein für explizite Inhalte." },
        { title: "Enclosure pro Folge", description: "Jede Folge braucht eine funktionierende Audio-URL, Dateityp und Länge." },
        { title: "Eindeutige GUID pro Folge", description: "Ändern Sie eine GUID nie nach der Veröffentlichung, sonst zeigen Apps ggf. ein Duplikat." },
      ],
    },
    {
      heading: "So validieren Sie Ihren Podcast-RSS-Feed",
      paragraphs: [
        `Prüfen Sie den Feed vor dem Einreichen mit einem Validator auf fehlende Tags, defekte Enclosures oder falsche Datumsformate. Nutzen Sie den kostenlosen ${link("/de/tools/rss-feed-validator", "Podcast-RSS-Feed-Validator")} und beheben Sie gemeldete Fehler bei Ihrem Hoster.`,
        `Ganz neu? Starten Sie mit ${link("/de/guides/how-to-start-a-podcast", "Podcast starten")}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "Muss ich den RSS-Feed selbst erstellen?",
      answer: "Nein. Podcast-Hoster erzeugen und aktualisieren ihn automatisch. Sie kopieren nur die URL und reichen sie einmal bei jedem Verzeichnis ein.",
    },
    {
      question: "Kann ich die URL meines Podcast-RSS-Feeds ändern?",
      answer: "Ja, aber richten Sie eine Weiterleitung vom alten zum neuen Feed ein, sonst verlieren Sie womöglich Hörer und Verzeichniseinträge.",
    },
    {
      question: "Warum erscheint meine Folge nicht in Apple Podcasts?",
      answer: "Meist liegt ein Fehler im Feed, ein defekter Audiolink oder eine geänderte GUID vor. Validieren Sie den Feed und prüfen Sie, ob die neue Folge darin steht.",
    },
  ],
  cta: {
    title: "RSS-Feed auf Fehler prüfen",
    description: "Fügen Sie Ihre Feed-URL ein und sehen Sie, was Verzeichnisse ablehnen könnten.",
    buttonText: "RSS-Feed-Validator öffnen",
    toolSlug: "rss-feed-validator",
  },
};

/* ------------------------------------------------------------------ PT */
const scriptPt: LocalizedGuideArticle = {
  title: "Exemplos de Roteiro de Podcast e Modelo Grátis (Solo, Entrevista, Intro)",
  metaTitle: "Exemplos de Roteiro de Podcast e Modelo Grátis | Pod Studio",
  description:
    "Veja exemplos de roteiro de podcast para episódios solo e entrevistas, com um modelo gratuito e marcações de tempo. Copie, adapte e grave com segurança.",
  readTime: "Leitura de 7 min",
  publishedAt: "2026-11-09",
  category: "Conteúdo",
  sections: [
    {
      heading: "O que é um roteiro de podcast?",
      paragraphs: [
        "Um roteiro de podcast é o plano escrito de um episódio: o que você diz, em que ordem e por quanto tempo. Pode ser palavra por palavra ou apenas tópicos. A maioria dos programas mistura os dois: abertura, anúncios e encerramento escritos, e o miolo em tópicos.",
        `Se prefere partir de uma estrutura com tempos, o nosso ${link("/pt/tools/episode-outline-builder", "Gerador de Roteiro de Podcast")} cria uma em segundos.`,
      ],
    },
    {
      heading: "Modelo de roteiro de podcast (episódio solo)",
      paragraphs: ["Copie esta estrutura e preencha os colchetes. Os tempos valem para um episódio de 20 minutos."],
      list: [
        { title: "0:00 Gancho inicial (20 s)", description: "“[Fato surpreendente ou promessa do episódio].” Depois, a vinheta de abertura." },
        { title: "0:20 Introdução (40 s)", description: "“Bem-vindo ao [Programa]. Eu sou [Nome] e hoje falamos de [tema] para você conseguir [resultado].”" },
        { title: "1:00 Ponto 1 (5 min)", description: "Apresente a ideia, conte uma história ou exemplo e feche com uma conclusão de uma frase." },
        { title: "6:00 Patrocinador (60 s)", description: "“Este episódio é oferecido por [Marca]…” Leia com as suas próprias palavras." },
        { title: "7:00 Pontos 2 e 3 (10 min)", description: "Repita ideia, exemplo e conclusão. Sinalize cada bloco: “Segundo…”, “Por fim…”." },
        { title: "17:00 Resumo (1 min)", description: "Resuma em três frases o que o ouvinte aprendeu." },
        { title: "18:00 Chamada para ação e encerramento (1 min)", description: "Um único pedido: assinar, avaliar ou visitar [link]. Agradeça e toque a vinheta final." },
      ],
    },
    {
      heading: "Exemplo de roteiro de podcast (episódio de entrevista)",
      paragraphs: ["Em entrevistas, escreva a moldura e deixe a conversa livre. Eis um exemplo adaptável."],
      list: [
        { title: "Abertura", description: "“Hoje recebo [Nome], [credencial em uma linha]. Vamos falar de [tema 1], [tema 2] e do erro que [Nome] gostaria de ter evitado.”" },
        { title: "Pergunta inicial", description: "“Antes de começarmos, como você entrou em [área]?”" },
        { title: "Perguntas centrais", description: "De três a cinco perguntas que vão da história à lição e ao conselho. Escreva só o início de cada pergunta de aprofundamento." },
        { title: "Pergunta final", description: "“O que um iniciante deveria fazer esta semana?”" },
        { title: "Encerramento", description: "“Onde as pessoas encontram você?” Agradeça ao convidado e faça a chamada para ação." },
      ],
    },
    {
      heading: "Dicas para escrever um roteiro fácil de ler em voz alta",
      paragraphs: [
        "Escreva como você fala: frases curtas e uma ideia por linha. Leia cada página em voz alta e reescreva onde tropeçar. O ritmo médio é de cerca de 150 palavras por minuto; um episódio de 20 minutos totalmente escrito tem por volta de 3.000 palavras.",
        `Precisa de perguntas para o convidado? Experimente o ${link("/pt/tools/guest-question-generator", "Gerador de Perguntas para Entrevistas de Podcast")}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "Devo escrever o roteiro inteiro ou usar tópicos?",
      answer: "Escreva a abertura, os anúncios e o encerramento, e use tópicos no miolo. Assim você controla o essencial sem perder a naturalidade.",
    },
    {
      question: "Qual o tamanho ideal de um roteiro de podcast?",
      answer: "Um episódio totalmente roteirizado tem cerca de 150 palavras por minuto, ou seja, uns 3.000 palavras para 20 minutos. Uma estrutura em tópicos costuma ter uma ou duas páginas.",
    },
    {
      question: "Existe um modelo de roteiro de podcast gratuito?",
      answer: "Sim. Use o modelo acima ou gere uma versão com tempos no Gerador de Roteiro gratuito.",
    },
  ],
  cta: {
    title: "Crie seu roteiro de podcast em segundos",
    description: "Gere um modelo com tempos para episódios solo, entrevistas ou mesas-redondas.",
    buttonText: "Abrir o Gerador de Roteiro",
    toolSlug: "episode-outline-builder",
  },
};

const rssPt: LocalizedGuideArticle = {
  title: "O que é um Feed RSS de Podcast? Como Encontrar e Validar",
  metaTitle: "O que é um Feed RSS de Podcast? Encontre e Valide | Pod Studio",
  description:
    "O feed RSS de um podcast é o arquivo que leva seu programa ao Apple Podcasts e Spotify. Aprenda a encontrar o seu, o que ele deve conter e como validá-lo.",
  readTime: "Leitura de 7 min",
  publishedAt: "2026-11-09",
  category: "Produção",
  sections: [
    {
      heading: "O que é um feed RSS de podcast?",
      paragraphs: [
        "Um feed RSS de podcast é um endereço web público que lista os dados do programa e todos os episódios em formato XML padrão. Apple Podcasts, Spotify e outros apps leem esse feed para encontrar episódios novos. Os arquivos de áudio não ficam no feed: o feed aponta para eles.",
        "Sua hospedagem cria e atualiza o feed para você. Ao publicar um episódio, ele entra no feed e os apps o recebem.",
      ],
    },
    {
      heading: "Como encontrar a URL do feed RSS do seu podcast",
      paragraphs: ["O link costuma estar no painel da sua hospedagem."],
      list: [
        { title: "Veja na hospedagem", description: "Procure “Feed RSS”, “Distribuição” ou “Configurações” e copie a URL." },
        { title: "Consulte no Apple Podcasts", description: "Abra seu programa na web e use “Copiar feed RSS” se a hospedagem permitir." },
        { title: "Use para enviar", description: "Cole a mesma URL no Apple Podcasts Connect, Spotify for Creators e outros diretórios." },
      ],
    },
    {
      heading: "O que um feed válido precisa conter",
      paragraphs: ["Os diretórios rejeitam feeds sem campos obrigatórios. Confirme se o seu inclui o seguinte."],
      list: [
        { title: "Título, descrição e idioma", description: "Claros, corretos e coerentes com a capa e a marca." },
        { title: "Capa quadrada de 1400 a 3000 px", description: `JPEG ou PNG em RGB. Confira com o ${link("/pt/tools/cover-art-preview", "Verificador de Tamanho de Capa")}.` },
        { title: "Categoria e marcação de conteúdo explícito", description: "Uma categoria da Apple e sim ou não para conteúdo explícito." },
        { title: "Enclosure de cada episódio", description: "Cada episódio precisa de uma URL de áudio válida, tipo de arquivo e duração." },
        { title: "GUID único por episódio", description: "Nunca altere um GUID depois de publicar, ou os apps podem mostrar episódio duplicado." },
      ],
    },
    {
      heading: "Como validar o feed RSS do seu podcast",
      paragraphs: [
        `Antes de enviar, passe o feed por um validador para achar tags ausentes, áudios quebrados ou datas em formato errado. Use o ${link("/pt/tools/rss-feed-validator", "Validador de Feed RSS de Podcast")} gratuito e corrija os erros na sua hospedagem.`,
        `Está começando? Leia ${link("/pt/guides/how-to-start-a-podcast", "Como começar um podcast")}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "Preciso criar o feed RSS por conta própria?",
      answer: "Não. As plataformas de hospedagem geram e atualizam o feed automaticamente. Basta copiar a URL e enviá-la uma vez a cada diretório.",
    },
    {
      question: "Posso mudar a URL do feed RSS do meu podcast?",
      answer: "Pode, mas configure um redirecionamento do feed antigo para o novo, ou corre o risco de perder ouvintes e listagens.",
    },
    {
      question: "Por que meu episódio não aparece no Apple Podcasts?",
      answer: "Em geral há um erro no feed, um link de áudio quebrado ou um GUID alterado. Valide o feed e confirme se o novo episódio aparece nele.",
    },
  ],
  cta: {
    title: "Verifique erros no seu feed RSS",
    description: "Cole a URL do feed e veja o que os diretórios podem rejeitar.",
    buttonText: "Abrir o Validador de Feed RSS",
    toolSlug: "rss-feed-validator",
  },
};

/* ------------------------------------------------------------------ IT */
const scriptIt: LocalizedGuideArticle = {
  title: "Esempi di Copione per Podcast e Modello Gratuito (Solo, Intervista, Intro)",
  metaTitle: "Esempi di Copione per Podcast e Modello Gratis | Pod Studio",
  description:
    "Scopri esempi di copione per podcast per episodi in solitaria e interviste, con un modello gratuito e indicazioni di tempo. Copia, adatta e registra.",
  readTime: "7 min di lettura",
  publishedAt: "2026-11-09",
  category: "Contenuti",
  sections: [
    {
      heading: "Che cos'è un copione per podcast?",
      paragraphs: [
        "Un copione per podcast è il piano scritto di un episodio: cosa dici, in quale ordine e per quanto tempo. Può essere parola per parola oppure una scaletta a punti. La maggior parte dei programmi usa un formato misto: intro, pubblicità e chiusura scritte, parte centrale a punti.",
        `Se vuoi partire da una traccia con i tempi, il nostro ${link("/it/tools/episode-outline-builder", "Generatore di Scalette per Episodi")} ne crea una in pochi secondi.`,
      ],
    },
    {
      heading: "Modello di copione per podcast (episodio in solitaria)",
      paragraphs: ["Copia questa struttura e compila le parentesi. I tempi valgono per un episodio da 20 minuti."],
      list: [
        { title: "0:00 Apertura a effetto (20 s)", description: "«[Dato sorprendente o promessa dell'episodio].» Poi la sigla d'apertura." },
        { title: "0:20 Introduzione (40 s)", description: "«Benvenuti a [Programma]. Sono [Nome] e oggi parliamo di [argomento] per aiutarti a [risultato].»" },
        { title: "1:00 Punto 1 (5 min)", description: "Enuncia l'idea, racconta una storia o un esempio e chiudi con una conclusione in una frase." },
        { title: "6:00 Sponsor (60 s)", description: "«Questo episodio è offerto da [Marchio]…» Leggilo con parole tue." },
        { title: "7:00 Punti 2 e 3 (10 min)", description: "Ripeti idea, esempio e conclusione. Segnala ogni blocco: «Secondo…», «Infine…»." },
        { title: "17:00 Riepilogo (1 min)", description: "Riassumi in tre frasi ciò che l'ascoltatore ha imparato." },
        { title: "18:00 Invito all'azione e chiusura (1 min)", description: "Una sola richiesta: iscriversi, recensire o visitare [link]. Ringrazia e lancia la musica finale." },
      ],
    },
    {
      heading: "Esempio di copione per podcast (episodio con intervista)",
      paragraphs: ["Nelle interviste scrivi la cornice e lascia libera la conversazione. Ecco un esempio da adattare."],
      list: [
        { title: "Introduzione", description: "«Oggi con noi c'è [Nome], [titolo in una riga]. Parliamo di [tema 1], [tema 2] e dell'errore che [Nome] vorrebbe aver evitato.»" },
        { title: "Domanda d'apertura", description: "«Prima di iniziare, come hai mosso i primi passi in [settore]?»" },
        { title: "Domande centrali", description: "Da tre a cinque domande che vanno dalla storia alla lezione fino al consiglio. Scrivi solo l'inizio di ogni domanda di approfondimento." },
        { title: "Domanda finale", description: "«Cosa dovrebbe fare un principiante questa settimana?»" },
        { title: "Chiusura", description: "«Dove ti possono trovare gli ascoltatori?» Ringrazia l'ospite e fai il tuo invito all'azione." },
      ],
    },
    {
      heading: "Consigli per un copione facile da leggere ad alta voce",
      paragraphs: [
        "Scrivi come parli: frasi brevi e un'idea per riga. Leggi ogni pagina ad alta voce e riscrivi dove inciampi. Il ritmo medio è di circa 150 parole al minuto, quindi un episodio da 20 minuti interamente scritto conta circa 3.000 parole.",
        `Ti servono domande per l'ospite? Prova il ${link("/it/tools/guest-question-generator", "Generatore di Domande per Interviste Podcast")}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "Devo scrivere tutto il copione o usare una scaletta?",
      answer: "Scrivi apertura, spazi pubblicitari e chiusura, e usa punti elenco per la parte centrale. Così controlli l'essenziale mantenendo un tono naturale.",
    },
    {
      question: "Quanto deve essere lungo un copione per podcast?",
      answer: "Un episodio interamente scritto conta circa 150 parole al minuto, cioè circa 3.000 parole per 20 minuti. Una scaletta di solito occupa una o due pagine.",
    },
    {
      question: "Esiste un modello di copione per podcast gratuito?",
      answer: "Sì. Usa il modello qui sopra oppure genera una versione con i tempi con il Generatore di Scalette gratuito.",
    },
  ],
  cta: {
    title: "Crea il copione del tuo podcast in pochi secondi",
    description: "Genera un modello con i tempi per episodi in solitaria, interviste o tavole rotonde.",
    buttonText: "Apri il Generatore di Scalette",
    toolSlug: "episode-outline-builder",
  },
};

const rssIt: LocalizedGuideArticle = {
  title: "Cos'è un Feed RSS per Podcast? Come Trovarlo e Validarlo",
  metaTitle: "Cos'è un Feed RSS per Podcast? Trovalo e Validalo | Pod Studio",
  description:
    "Il feed RSS di un podcast è il file che porta il tuo programma su Apple Podcasts e Spotify. Scopri come trovarlo, cosa deve contenere e come validarlo.",
  readTime: "7 min di lettura",
  publishedAt: "2026-11-09",
  category: "Produzione",
  sections: [
    {
      heading: "Cos'è un feed RSS per podcast?",
      paragraphs: [
        "Un feed RSS per podcast è un indirizzo web pubblico che elenca i dati del programma e tutti gli episodi in formato XML standard. Apple Podcasts, Spotify e altre app leggono questo feed per trovare i nuovi episodi. I file audio non sono nel feed: il feed punta a loro.",
        "Il tuo servizio di hosting crea e aggiorna il feed per te. Quando pubblichi un episodio, viene aggiunto al feed e le app lo ricevono.",
      ],
    },
    {
      heading: "Come trovare l'URL del feed RSS del tuo podcast",
      paragraphs: ["Il link si trova di solito nella dashboard del tuo servizio di hosting."],
      list: [
        { title: "Controlla il tuo hosting", description: "Cerca «Feed RSS», «Distribuzione» o «Impostazioni» e copia l'URL." },
        { title: "Cercalo su Apple Podcasts", description: "Apri il programma sul web e usa «Copia feed RSS» se l'hosting lo consente." },
        { title: "Usalo per l'invio", description: "Incolla lo stesso URL in Apple Podcasts Connect, Spotify for Creators e altre directory." },
      ],
    },
    {
      heading: "Cosa deve contenere un feed valido",
      paragraphs: ["Le directory rifiutano i feed con campi obbligatori mancanti. Verifica che il tuo includa quanto segue."],
      list: [
        { title: "Titolo, descrizione e lingua", description: "Chiari, accurati e coerenti con copertina e brand." },
        { title: "Copertina quadrata da 1400 a 3000 px", description: `JPEG o PNG in RGB. Controllala con il ${link("/it/tools/cover-art-preview", "Verificatore Dimensioni Copertina")}.` },
        { title: "Categoria e flag di contenuto esplicito", description: "Una categoria Apple e un sì o no per i contenuti espliciti." },
        { title: "Enclosure per ogni episodio", description: "Ogni episodio richiede un URL audio funzionante, tipo di file e durata." },
        { title: "GUID univoco per episodio", description: "Non cambiare mai un GUID dopo la pubblicazione, o le app potrebbero mostrare un duplicato." },
      ],
    },
    {
      heading: "Come validare il feed RSS del tuo podcast",
      paragraphs: [
        `Prima dell'invio, passa il feed in un validatore per individuare tag mancanti, audio non raggiungibili o date nel formato sbagliato. Usa il ${link("/it/tools/rss-feed-validator", "Validatore di Feed RSS per Podcast")} gratuito e correggi gli errori presso il tuo hosting.`,
        `Parti da zero? Leggi ${link("/it/guides/how-to-start-a-podcast", "Come avviare un podcast")}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "Devo creare io il feed RSS?",
      answer: "No. Le piattaforme di hosting lo generano e lo aggiornano automaticamente. Ti basta copiare l'URL e inviarlo una volta a ogni directory.",
    },
    {
      question: "Posso cambiare l'URL del feed RSS del mio podcast?",
      answer: "Sì, ma imposta un reindirizzamento dal vecchio feed al nuovo, altrimenti rischi di perdere ascoltatori e presenza nelle directory.",
    },
    {
      question: "Perché il mio episodio non compare su Apple Podcasts?",
      answer: "Di solito il feed ha un errore, un link audio non funzionante o un GUID modificato. Valida il feed e verifica che il nuovo episodio sia presente.",
    },
  ],
  cta: {
    title: "Controlla gli errori del tuo feed RSS",
    description: "Incolla l'URL del feed e scopri cosa potrebbero rifiutare le directory.",
    buttonText: "Apri il Validatore di Feed RSS",
    toolSlug: "rss-feed-validator",
  },
};

/* ------------------------------------------------------------------ JA */
const scriptJa: LocalizedGuideArticle = {
  title: "ポッドキャスト台本の例と無料テンプレート（ソロ・ゲスト回・イントロ）",
  metaTitle: "ポッドキャスト台本の例と無料テンプレート | Pod Studio",
  description:
    "ソロ回とゲスト回のポッドキャスト台本の例と、時間配分付きの無料テンプレートを紹介。コピーして自分の番組に合わせ、自信を持って収録しましょう。",
  readTime: "7分で読める",
  publishedAt: "2026-11-09",
  category: "コンテンツ",
  sections: [
    {
      heading: "ポッドキャスト台本とは？",
      paragraphs: [
        "ポッドキャスト台本とは、エピソードで「何を・どの順番で・どのくらいの時間」話すかをまとめた計画書です。一言一句書き起こす形でも、箇条書きの構成案でも構いません。多くの番組は、イントロ・広告・エンディングだけを台本にし、中盤は箇条書きにする併用型です。",
        `時間配分つきの骨組みから始めたい場合は、${link("/ja/tools/episode-outline-builder", "エピソード構成案ビルダー")}で数秒で作成できます。`,
      ],
    },
    {
      heading: "ポッドキャスト台本テンプレート（ソロ回）",
      paragraphs: ["この構成をコピーして［ ］を埋めてください。時間は20分のエピソードを想定しています。"],
      list: [
        { title: "0:00 つかみ（20秒）", description: "「［意外な事実やエピソードの約束］。」その後、オープニング音楽。" },
        { title: "0:20 あいさつ（40秒）", description: "「［番組名］へようこそ。［名前］です。今日は［テーマ］について、［得られる成果］をお届けします。」" },
        { title: "1:00 ポイント1（5分）", description: "主張を述べ、例や体験談を1つ入れ、1文でまとめます。" },
        { title: "6:00 スポンサー紹介（60秒）", description: "「この番組は［ブランド］の提供でお送りします…」自分の言葉で読みましょう。" },
        { title: "7:00 ポイント2・3（10分）", description: "主張・例・まとめの型を繰り返します。「2つ目は…」「最後に…」と区切りを伝えましょう。" },
        { title: "17:00 振り返り（1分）", description: "リスナーが学んだことを3文で要約します。" },
        { title: "18:00 行動の呼びかけとエンディング（1分）", description: "お願いは1つだけ：登録、レビュー、または［リンク］への訪問。感謝を伝えてエンディング音楽へ。" },
      ],
    },
    {
      heading: "ポッドキャスト台本の例（ゲスト回）",
      paragraphs: ["ゲスト回では、枠組みだけを書き、会話は自由に任せるのがコツです。アレンジできる例を紹介します。"],
      list: [
        { title: "ゲスト紹介", description: "「今日のゲストは［名前］さん、［一行の肩書］です。［テーマ1］、［テーマ2］、そして避けたかった失敗についてうかがいます。」" },
        { title: "最初の質問", description: "「始める前に、［分野］に関わるきっかけを教えてください。」" },
        { title: "中盤の質問", description: "体験談→学び→アドバイスと流れる3〜5問。深掘りは書き出しだけメモします。" },
        { title: "最後の質問", description: "「初心者が今週やるべきことを1つ挙げるなら？」" },
        { title: "エンディング", description: "「どこで情報を見られますか？」ゲストに感謝し、行動の呼びかけを伝えます。" },
      ],
    },
    {
      heading: "声に出して読みやすい台本を書くコツ",
      paragraphs: [
        "話し言葉で書き、短い文で1行1アイデアにします。各ページを一度声に出して読み、つかえた箇所は書き直しましょう。平均的な話速は1分あたり約150語（日本語では約300〜350文字）で、20分を完全に書き起こす場合は大まかに6,000〜7,000文字になります。",
        `ゲストへの質問に迷ったら、${link("/ja/tools/guest-question-generator", "ポッドキャストインタビュー質問ジェネレーター")}をお試しください。`,
      ],
    },
  ],
  faqs: [
    {
      question: "台本は全部書くべきですか、それとも構成案だけでよいですか？",
      answer: "オープニング・広告・エンディングは書き、中盤は箇条書きにするのがおすすめです。重要な部分を整えつつ、自然な会話を保てます。",
    },
    {
      question: "ポッドキャスト台本はどのくらいの長さが適切ですか？",
      answer: "完全に書き起こす場合、1分あたり約150語、20分で約3,000語（日本語では6,000〜7,000文字）が目安です。構成案なら通常1〜2ページです。",
    },
    {
      question: "無料のポッドキャスト台本テンプレートはありますか？",
      answer: "あります。上のテンプレートを使うか、無料のエピソード構成案ビルダーで時間配分つきの版を作成できます。",
    },
  ],
  cta: {
    title: "数秒でポッドキャスト台本を作成",
    description: "ソロ回、ゲスト回、座談会向けの時間配分つきテンプレートを生成します。",
    buttonText: "構成案ビルダーを開く",
    toolSlug: "episode-outline-builder",
  },
};

const rssJa: LocalizedGuideArticle = {
  title: "ポッドキャストのRSSフィードとは？ 確認方法と検証のしかた",
  metaTitle: "ポッドキャストのRSSフィードとは？ 確認と検証 | Pod Studio",
  description:
    "ポッドキャストRSSフィードは、番組をApple PodcastsやSpotifyに届けるファイルです。自分のフィードの探し方、必須項目、検証方法を解説します。",
  readTime: "7分で読める",
  publishedAt: "2026-11-09",
  category: "制作",
  sections: [
    {
      heading: "ポッドキャストのRSSフィードとは？",
      paragraphs: [
        "ポッドキャストのRSSフィードは、番組情報とすべてのエピソードを標準的なXML形式で一覧にした公開URLです。Apple PodcastsやSpotifyなどのアプリはこのフィードを読み取り、新しいエピソードを見つけます。音声ファイル自体はフィード内にはなく、フィードがその場所を指し示します。",
        "フィードはホスティングサービスが自動で作成・更新します。エピソードを公開すると、フィードに追加され、各アプリに反映されます。",
      ],
    },
    {
      heading: "RSSフィードのURLを確認する方法",
      paragraphs: ["URLは通常、ホスティングサービスの管理画面にあります。"],
      list: [
        { title: "ホスティング管理画面を確認", description: "「RSSフィード」「配信」「設定」などの項目からURLをコピーします。" },
        { title: "Apple Podcastsで確認", description: "Web上で番組を開き、ホスティング側が許可していれば「RSSフィードをコピー」を使います。" },
        { title: "申請に使う", description: "同じURLをApple Podcasts Connect、Spotify for Creatorsなどのディレクトリに貼り付けます。" },
      ],
    },
    {
      heading: "有効なフィードに必要な要素",
      paragraphs: ["必須項目が欠けたフィードは、ディレクトリに却下されます。次の内容が含まれているか確認しましょう。"],
      list: [
        { title: "番組名・説明・言語", description: "分かりやすく正確で、アートワークやブランドと一致していること。" },
        { title: "1400〜3000pxの正方形カバー", description: `JPEGまたはPNG、RGBカラー。${link("/ja/tools/cover-art-preview", "カバーアートサイズチェッカー")}で確認できます。` },
        { title: "カテゴリと露骨な表現の有無", description: "Appleのカテゴリを1つと、露骨な内容の有無（はい／いいえ）。" },
        { title: "各エピソードのenclosure", description: "各エピソードに有効な音声URL、ファイル形式、長さが必要です。" },
        { title: "エピソードごとの一意のGUID", description: "公開後にGUIDを変更しないでください。重複エピソードとして表示される場合があります。" },
      ],
    },
    {
      heading: "RSSフィードを検証する方法",
      paragraphs: [
        `申請前にバリデーターで、タグの欠落、音声リンク切れ、日付形式の誤りなどを確認します。無料の${link("/ja/tools/rss-feed-validator", "ポッドキャストRSSフィード検証ツール")}を使い、報告されたエラーはホスティング側で修正してください。`,
        `これから始める方は${link("/ja/guides/how-to-start-a-podcast", "ポッドキャストの始め方")}をご覧ください。`,
      ],
    },
  ],
  faqs: [
    {
      question: "RSSフィードは自分で作る必要がありますか？",
      answer: "いいえ。ホスティングサービスが自動で生成・更新します。URLをコピーして、各ディレクトリに一度申請するだけです。",
    },
    {
      question: "RSSフィードのURLは変更できますか？",
      answer: "可能ですが、旧フィードから新フィードへのリダイレクト設定が必要です。しないとリスナーやディレクトリ掲載を失うおそれがあります。",
    },
    {
      question: "エピソードがApple Podcastsに表示されないのはなぜですか？",
      answer: "多くはフィードのエラー、音声リンク切れ、GUIDの変更が原因です。フィードを検証し、新しいエピソードが含まれているか確認してください。",
    },
  ],
  cta: {
    title: "RSSフィードのエラーを確認",
    description: "フィードURLを貼り付けて、ディレクトリに却下される可能性のある点を確認します。",
    buttonText: "RSSフィード検証ツールを開く",
    toolSlug: "rss-feed-validator",
  },
};

/* ------------------------------------------------------------------ KO */
const scriptKo: LocalizedGuideArticle = {
  title: "팟캐스트 대본 예시와 무료 템플릿 (혼자 진행, 인터뷰, 인트로)",
  metaTitle: "팟캐스트 대본 예시와 무료 템플릿 | Pod Studio",
  description:
    "혼자 진행하는 에피소드와 인터뷰 에피소드의 팟캐스트 대본 예시, 시간 배분이 포함된 무료 템플릿을 소개합니다. 복사해서 바로 녹음해 보세요.",
  readTime: "7분 소요",
  publishedAt: "2026-11-09",
  category: "콘텐츠",
  sections: [
    {
      heading: "팟캐스트 대본이란?",
      paragraphs: [
        "팟캐스트 대본은 에피소드에서 무엇을, 어떤 순서로, 얼마나 오래 말할지 정리한 계획서입니다. 한 문장씩 그대로 적을 수도 있고 글머리표 개요로 정리할 수도 있습니다. 대부분의 프로그램은 인트로·광고·엔딩만 대본으로 쓰고, 중간은 글머리표로 두는 혼합형을 사용합니다.",
        `시간 배분이 포함된 뼈대에서 시작하고 싶다면 ${link("/ko/tools/episode-outline-builder", "에피소드 구성안 작성기")}로 몇 초 만에 만들 수 있습니다.`,
      ],
    },
    {
      heading: "팟캐스트 대본 템플릿 (혼자 진행하는 에피소드)",
      paragraphs: ["이 구조를 복사해 대괄호를 채우세요. 시간은 20분 에피소드 기준입니다."],
      list: [
        { title: "0:00 오프닝 한마디 (20초)", description: "“[놀라운 사실 또는 에피소드의 약속].” 이어서 인트로 음악." },
        { title: "0:20 인사 (40초)", description: "“[프로그램명]에 오신 것을 환영합니다. [이름]입니다. 오늘은 [주제]를 다루며 [결과]를 얻도록 도와드릴게요.”" },
        { title: "1:00 핵심 1 (5분)", description: "요점을 말하고, 사례나 이야기를 하나 들고, 한 줄로 정리합니다." },
        { title: "6:00 스폰서 소개 (60초)", description: "“이번 에피소드는 [브랜드]의 후원으로…” 본인의 말투로 읽으세요." },
        { title: "7:00 핵심 2·3 (10분)", description: "요점, 사례, 정리의 패턴을 반복합니다. “두 번째로…”, “마지막으로…”처럼 구분을 알려 주세요." },
        { title: "17:00 요약 (1분)", description: "청취자가 알게 된 내용을 세 문장으로 요약합니다." },
        { title: "18:00 행동 유도와 엔딩 (1분)", description: "부탁은 하나만: 구독, 리뷰 또는 [링크] 방문. 감사 인사 후 엔딩 음악." },
      ],
    },
    {
      heading: "팟캐스트 대본 예시 (인터뷰 에피소드)",
      paragraphs: ["인터뷰는 틀만 대본으로 쓰고 대화는 자유롭게 두는 편이 좋습니다. 응용할 수 있는 예시입니다."],
      list: [
        { title: "게스트 소개", description: "“오늘의 게스트는 [이름] 님, [한 줄 경력]입니다. [주제 1], [주제 2], 그리고 피하고 싶었던 실수에 대해 이야기합니다.”" },
        { title: "첫 질문", description: "“본격적으로 시작하기 전에, [분야]는 어떻게 시작하셨나요?”" },
        { title: "중간 질문", description: "경험담에서 교훈, 조언으로 이어지는 3~5개의 질문. 꼬리 질문은 첫머리만 적어 두세요." },
        { title: "마지막 질문", description: "“초보자가 이번 주에 해야 할 일 하나를 꼽는다면요?”" },
        { title: "엔딩", description: "“어디서 만나볼 수 있나요?” 게스트에게 감사하고 행동 유도를 전합니다." },
      ],
    },
    {
      heading: "소리 내어 읽기 쉬운 대본을 쓰는 요령",
      paragraphs: [
        "말하듯이 쓰세요. 짧은 문장, 한 줄에 하나의 생각이 좋습니다. 각 페이지를 한 번 소리 내어 읽고 걸리는 부분은 다시 쓰세요. 평균 말하기 속도는 분당 약 150단어(한국어로는 약 300~350자)이며, 20분 분량을 전부 쓰면 대략 6,000~7,000자입니다.",
        `게스트 질문이 필요하다면 ${link("/ko/tools/guest-question-generator", "팟캐스트 인터뷰 질문 생성기")}를 사용해 보세요.`,
      ],
    },
  ],
  faqs: [
    {
      question: "대본을 전부 써야 하나요, 아니면 개요만 써도 되나요?",
      answer: "오프닝, 광고, 엔딩은 대본으로 쓰고 중간은 글머리표로 정리하길 권합니다. 중요한 부분은 매끄럽게, 대화는 자연스럽게 유지할 수 있습니다.",
    },
    {
      question: "팟캐스트 대본은 얼마나 길어야 하나요?",
      answer: "전부 쓴다면 분당 약 150단어, 20분 기준 약 3,000단어(한국어 6,000~7,000자)입니다. 개요는 보통 한두 페이지입니다.",
    },
    {
      question: "무료 팟캐스트 대본 템플릿이 있나요?",
      answer: "네. 위 템플릿을 쓰거나 무료 에피소드 구성안 작성기로 시간 배분이 포함된 버전을 만들 수 있습니다.",
    },
  ],
  cta: {
    title: "몇 초 만에 팟캐스트 대본 만들기",
    description: "혼자 진행, 인터뷰, 패널 에피소드용 시간 배분 템플릿을 생성합니다.",
    buttonText: "구성안 작성기 열기",
    toolSlug: "episode-outline-builder",
  },
};

const rssKo: LocalizedGuideArticle = {
  title: "팟캐스트 RSS 피드란? 찾는 방법과 검증 방법",
  metaTitle: "팟캐스트 RSS 피드란? 찾기와 검증 | Pod Studio",
  description:
    "팟캐스트 RSS 피드는 프로그램을 Apple Podcasts와 Spotify에 전달하는 파일입니다. 내 피드를 찾는 방법, 필수 항목, 검증 방법을 알아보세요.",
  readTime: "7분 소요",
  publishedAt: "2026-11-09",
  category: "제작",
  sections: [
    {
      heading: "팟캐스트 RSS 피드란?",
      paragraphs: [
        "팟캐스트 RSS 피드는 프로그램 정보와 모든 에피소드를 표준 XML 형식으로 나열한 공개 웹 주소입니다. Apple Podcasts, Spotify 등의 앱이 이 피드를 읽어 새 에피소드를 찾습니다. 오디오 파일은 피드 안에 있지 않고, 피드가 파일 위치를 가리킵니다.",
        "피드는 팟캐스트 호스팅 서비스가 자동으로 만들고 갱신합니다. 에피소드를 발행하면 피드에 추가되고 앱이 이를 가져갑니다.",
      ],
    },
    {
      heading: "팟캐스트 RSS 피드 URL 찾는 방법",
      paragraphs: ["링크는 보통 호스팅 서비스의 대시보드에 있습니다."],
      list: [
        { title: "호스팅 서비스 확인", description: "“RSS 피드”, “배포”, “설정” 메뉴에서 URL을 복사합니다." },
        { title: "Apple Podcasts에서 확인", description: "웹에서 프로그램을 열고, 호스팅이 허용하면 “RSS 피드 복사”를 사용합니다." },
        { title: "제출에 사용", description: "같은 URL을 Apple Podcasts Connect, Spotify for Creators 등 디렉터리에 붙여 넣습니다." },
      ],
    },
    {
      heading: "유효한 피드에 필요한 항목",
      paragraphs: ["필수 항목이 빠진 피드는 디렉터리에서 거절됩니다. 아래 항목이 포함되어 있는지 확인하세요."],
      list: [
        { title: "제목, 설명, 언어", description: "명확하고 정확하며 커버 이미지·브랜드와 일치해야 합니다." },
        { title: "1400~3000px 정사각형 커버", description: `JPEG 또는 PNG, RGB 색상. ${link("/ko/tools/cover-art-preview", "커버 아트 미리보기 검사기")}로 확인하세요.` },
        { title: "카테고리와 선정성 표시", description: "Apple 카테고리 하나와 선정적 콘텐츠 여부(예/아니요)." },
        { title: "에피소드별 enclosure", description: "각 에피소드에 작동하는 오디오 URL, 파일 형식, 길이가 필요합니다." },
        { title: "에피소드별 고유 GUID", description: "발행 후 GUID를 바꾸지 마세요. 앱에서 중복 에피소드로 보일 수 있습니다." },
      ],
    },
    {
      heading: "팟캐스트 RSS 피드 검증 방법",
      paragraphs: [
        `제출 전에 검증기로 누락된 태그, 끊긴 오디오 링크, 잘못된 날짜 형식을 확인하세요. 무료 ${link("/ko/tools/rss-feed-validator", "팟캐스트 RSS 피드 검증기")}를 사용하고, 보고된 오류는 호스팅 서비스에서 수정하세요.`,
        `처음 시작한다면 ${link("/ko/guides/how-to-start-a-podcast", "팟캐스트 시작 방법")}부터 읽어 보세요.`,
      ],
    },
  ],
  faqs: [
    {
      question: "RSS 피드를 직접 만들어야 하나요?",
      answer: "아니요. 호스팅 서비스가 자동으로 생성하고 갱신합니다. URL을 복사해 각 디렉터리에 한 번만 제출하면 됩니다.",
    },
    {
      question: "팟캐스트 RSS 피드 URL을 바꿀 수 있나요?",
      answer: "가능하지만 이전 피드에서 새 피드로 리디렉션을 설정해야 합니다. 그렇지 않으면 청취자와 디렉터리 등록을 잃을 수 있습니다.",
    },
    {
      question: "내 에피소드가 Apple Podcasts에 나타나지 않는 이유는?",
      answer: "대부분 피드 오류, 끊긴 오디오 링크, 변경된 GUID가 원인입니다. 피드를 검증하고 새 에피소드가 포함되어 있는지 확인하세요.",
    },
  ],
  cta: {
    title: "RSS 피드 오류 확인하기",
    description: "피드 URL을 붙여 넣고 디렉터리가 거절할 수 있는 항목을 확인하세요.",
    buttonText: "RSS 피드 검증기 열기",
    toolSlug: "rss-feed-validator",
  },
};

export const seoGuidesByLocale: Record<SupportedLocale, Record<string, LocalizedGuideArticle>> = {
  en: { [SCRIPT_SLUG]: scriptEn, [RSS_SLUG]: rssEn },
  es: { [SCRIPT_SLUG]: scriptEs, [RSS_SLUG]: rssEs },
  fr: { [SCRIPT_SLUG]: scriptFr, [RSS_SLUG]: rssFr },
  de: { [SCRIPT_SLUG]: scriptDe, [RSS_SLUG]: rssDe },
  pt: { [SCRIPT_SLUG]: scriptPt, [RSS_SLUG]: rssPt },
  it: { [SCRIPT_SLUG]: scriptIt, [RSS_SLUG]: rssIt },
  ja: { [SCRIPT_SLUG]: scriptJa, [RSS_SLUG]: rssJa },
  ko: { [SCRIPT_SLUG]: scriptKo, [RSS_SLUG]: rssKo },
};
