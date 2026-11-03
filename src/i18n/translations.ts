import type { SupportedLocale } from "./languages";

export interface UITranslations {
  nav: {
    allTools: string;
    ideation: string;
    content: string;
    technical: string;
    growth: string;
    guides: string;
    searchPlaceholder: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    clientSideNotice: string;
    trustPills: {
      privacy: string;
      formulas: string;
      free: string;
    };
  };
  categories: {
    all: string;
    ideation: string;
    ideationDesc: string;
    content: string;
    contentDesc: string;
    technical: string;
    technicalDesc: string;
    growth: string;
    growthDesc: string;
  };
  toolsSection: {
    title: string;
    subtitle: string;
    launchTool: string;
    freeBadge: string;
    popularBadge: string;
    newBadge: string;
    technicalBadge: string;
  };
  toolDetail: {
    backToTools: string;
    tableOfContents: string;
    howToUse: string;
    specifications: string;
    faqs: string;
    relatedTools: string;
    tryTool: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    privacyBadge: string;
    linksTitle: string;
    categoriesTitle: string;
    legalTitle: string;
  };
  searchModal: {
    btnText: string;
    prompt: string;
    noResults: string;
    shortcutHint: string;
    toolsIndexed: string;
  };
  contactForm: {
    heading: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    zeroLogNotice: string;
    sendButton: string;
    directEmailTitle: string;
    directEmailDesc: string;
    responseNotice: string;
    subtitle: string;
  };
  aboutPage: {
    badge: string;
    whyTitle: string;
    cta: string;
  };
  legalPages: {
    lastUpdated: string;
    privacyBadge: string;
    termsBadge: string;
    exploreAllTools: string;
    privacy: {
      s1Title: string;
      s1P1: string;
      s1P2: string;
      s2Title: string;
      s2P1Title: string;
      s2P1Text: string;
      s2P2Title: string;
      s2P2Text: string;
      s3Title: string;
      s3Text: string;
      s4Title: string;
      s4Text: string;
      s5Title: string;
      s5Text: string;
    };
    terms: {
      s1Title: string;
      s1Text: string;
      s2Title: string;
      s2Text: string;
      s3Title: string;
      s3Text: string;
      s4Title: string;
      s4Text: string;
      s5Title: string;
      s5Text: string;
    };
  };
  toolSteps: {
    clientMemoryBadge: string;
    specVerifiedBadge: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    homeBreadcrumb: string;
  };
  commonToolUi: {
    copy: string;
    copied: string;
    copyAll: string;
    exportTxt: string;
    download: string;
    clear: string;
    generate: string;
    calculate: string;
    reset: string;
  };
}

export const translations: Record<SupportedLocale, UITranslations> = {
  en: {
    nav: {
      allTools: "All 18 Tools",
      ideation: "Ideation",
      content: "Content",
      technical: "Technical",
      growth: "Growth & CPM",
      guides: "Guides",
      searchPlaceholder: "Search 18 free podcast tools... (⌘K)",
      about: "About",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms",
    },
    hero: {
      badge: "100% Free · Client-Side Execution · Zero Logins",
      titleStart: "Everything you need to create, polish &",
      titleHighlight: "monetize your podcast",
      description:
        "18 deterministic, zero-server tools built for podcast hosts, producers, and audio engineers. High-converting titles, bulletproof RSS feeds, precise timestamps, and accurate CPM monetization.",
      primaryCta: "Explore All 18 Tools",
      secondaryCta: "Calculate Ad Revenue",
      clientSideNotice: "Runs 100% locally in your browser memory. Audio & files never leave your device.",
      trustPills: {
        privacy: "Zero Cloud Uploads",
        formulas: "IAB v2 CPM Formulas",
        free: "Always Free & Open",
      },
    },
    categories: {
      all: "All Tools",
      ideation: "Ideation & Branding",
      ideationDesc: "Brainstorm viral episode titles, hooks, interview questions, and show names.",
      content: "Content & Scripting",
      contentDesc: "Build run-of-show outlines, generate markdown show notes, and polish scripts.",
      technical: "Audio & Technical",
      technicalDesc: "Validate RSS feeds, check cover art specs for Apple/Spotify, and format timestamps.",
      growth: "Growth & Monetization",
      growthDesc: "Calculate CPM sponsorship earnings, estimate download growth, and reply to reviews.",
    },
    toolsSection: {
      title: "Complete Studio Suite",
      subtitle: "Click any tool below to launch the interactive workspace. Zero accounts or signups required.",
      launchTool: "Open Tool",
      freeBadge: "Free",
      popularBadge: "Popular",
      newBadge: "New",
      technicalBadge: "Standards",
    },
    toolDetail: {
      backToTools: "Back to All Tools",
      tableOfContents: "On this page",
      howToUse: "How to Use This Tool",
      specifications: "Technical Specifications & Industry Benchmarks",
      faqs: "Frequently Asked Questions",
      relatedTools: "Related Production Tools",
      tryTool: "Launch Tool Workspace",
    },
    footer: {
      tagline: "Free, client-side production suite for podcast creators worldwide.",
      copyright: "All rights reserved. Free for commercial and non-commercial creators.",
      privacyBadge: "100% Client-Side Privacy Guaranteed",
      linksTitle: "Production Tools",
      categoriesTitle: "Tool Categories",
      legalTitle: "Standards & Privacy",
    },
    searchModal: {
      btnText: "Search tools...",
      prompt: "Type to search all 18 tools, categories, and podcast calculators...",
      noResults: "No tools found matching",
      shortcutHint: "Press / or ⌘K anywhere",
      toolsIndexed: "18 tools indexed",
    },
    contactForm: {
      heading: "Compose Direct In-Browser Message",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. Alex",
      emailLabel: "Your Email",
      emailPlaceholder: "alex@example.com",
      subjectLabel: "Subject",
      messageLabel: "Message",
      messagePlaceholder: "Share your feedback, feature suggestion, or question...",
      zeroLogNotice: "Zero database logging. Opens directly in your mail client.",
      sendButton: "Send Message",
      directEmailTitle: "Direct Email",
      directEmailDesc: "For general support, formula feedback, or questions:",
      responseNotice: "Response: within 24-48 business hours.",
      subtitle: "Have a tool suggestion, feedback on our formulas, or want to report a platform spec update? We would love to hear from you.",
    },
    aboutPage: {
      badge: "ABOUT POD STUDIO",
      whyTitle: "Why Pod Studio",
      cta: "Explore All 18 Tools",
    },
    legalPages: {
      lastUpdated: "Last updated: November 1, 2026 • Effective Date: November 1, 2026",
      privacyBadge: "PRIVACY-FIRST ARCHITECTURE",
      termsBadge: "TERMS OF USE",
      exploreAllTools: "Explore All 18 Tools",
      privacy: {
        s1Title: "1. The Client-Side Model",
        s1P1: "Pod Studio (\"we\", \"us\", or \"our\") provides free online utilities for podcast creators at podstudiotools.com.",
        s1P2: "Our core architecture is built on a simple promise: your creative ideas and audio assets belong to you. Unlike cloud-based AI tools that upload and store your text, outlines, and audio transcripts on remote databases for training or profiling, Pod Studio executes calculations and formatting 100% locally inside your web browser memory.",
        s2Title: "2. In-Memory Browser Execution",
        s2P1Title: "Cover Art Preview & Image Testing",
        s2P1Text: "When you drop or select a podcast cover art image in the Cover Art Preview tool, the file is loaded into your browser's volatile memory via the HTML5 FileReader API. The image data is never uploaded, stored, or transmitted over any network connection. When you close or refresh the page, the image memory is purged automatically.",
        s2P2Title: "Episode Titles, Show Notes, Scripts & Hooks",
        s2P2Text: "All text generation and string formatting formulas execute deterministically on your client device using client-side JavaScript. No episode topics, guest names, or proprietary notes are logged, recorded, or sent to server endpoints.",
        s3Title: "3. Third-Party Tracking & Analytics",
        s3Text: "We do not use aggressive third-party trackers, cross-site profiling scripts, or advertising pixels. Your interactions with our calculators remain private.",
        s4Title: "4. Local Storage Disclosure",
        s4Text: "We do not use tracking cookies. The only data written to your browser's localStorage is your visual theme preference under the key 'theme' ('light' or 'dark'), allowing your interface choice to persist across visits without identifying you or transmitting data to any server.",
        s5Title: "5. Contact & Questions",
        s5Text: "If you have questions regarding our privacy architecture, email us at support@podstudiotools.com or visit our Contact page.",
      },
      terms: {
        s1Title: "1. Agreement to Terms",
        s1Text: "By accessing or using podstudiotools.com ('Pod Studio'), you agree to be bound by these Terms of Service.",
        s2Title: "2. Free, Client-Side Utility Nature",
        s2Text: "Pod Studio is engineered as a free, client-side toolkit for independent podcast creators and sound designers. We do not require accounts, logins, or payment to access our 18 utilities.",
        s3Title: "3. Content Ownership",
        s3Text: "Any episode titles, show notes, scripts, hooks, or timestamps generated using Pod Studio belong 100% to you. We assert zero copyright or commercial claims over your generated works.",
        s4Title: "4. Calculators & Advisory Estimates",
        s4Text: "Calculators on Pod Studio provide mathematical models based on industry benchmark averages (e.g. standard CPM ad rates). These figures are informational estimates and do not constitute financial guarantees.",
        s5Title: "5. Inquiries",
        s5Text: "Questions? Contact us at support@podstudiotools.com or visit our Contact page.",
      },
    },
    toolSteps: {
      clientMemoryBadge: "100% Client-Side Memory",
      specVerifiedBadge: "2026 Industry Spec Verified",
      step1Title: "01. Configure",
      step1Desc: "Enter your podcast episode details, upload reference artwork, or supply RSS feed links.",
      step2Title: "02. Process Locally",
      step2Desc: "All algorithms run in browser memory using deterministic logic and verified formulas.",
      step3Title: "03. Export & Publish",
      step3Desc: "One-click copy markdown or download verified files directly to your production workflow.",
      homeBreadcrumb: "Home",
    },
    commonToolUi: {
      copy: "Copy",
      copied: "Copied!",
      copyAll: "Copy All",
      exportTxt: "Export TXT",
      download: "Download",
      clear: "Clear",
      generate: "Generate",
      calculate: "Calculate",
      reset: "Reset",
    },
  },  es: {
    nav: {
      allTools: "Las 18 Herramientas",
      ideation: "Ideación",
      content: "Contenido",
      technical: "Técnico",
      growth: "Crecimiento y CPM",
      guides: "Guías",
      searchPlaceholder: "Buscar herramientas de podcast... (⌘K)",
      about: "Acerca de",
      contact: "Contacto",
      privacy: "Privacidad",
      terms: "Términos",
    },
    hero: {
      badge: "100% Gratis · Ejecución en Navegador · Sin Registros",
      titleStart: "El Kit de Producción para",
      titleHighlight: "Creadores de Podcasts",
      description:
        "18 herramientas deterministas sin servidor para presentadores, productores e ingenieros de audio. Títulos con alto CTR, feeds RSS impecables, marcas de tiempo precisas y cálculo de monetización CPM.",
      primaryCta: "Ver Las 18 Herramientas",
      secondaryCta: "Calcular Ingresos Publicitarios",
      clientSideNotice: "Se ejecuta 100% localmente en la memoria del navegador. Tus audios y datos nunca salen de tu dispositivo.",
      trustPills: {
        privacy: "Cero Cargas a la Nube",
        formulas: "Fórmulas CPM Estándar IAB",
        free: "Siempre Gratis y Abierto",
      },
    },
    categories: {
      all: "Todas las Herramientas",
      ideation: "Ideación y Marca",
      ideationDesc: "Genera títulos virales, ganchos de apertura, preguntas para entrevistas y nombres.",
      content: "Contenido y Guiones",
      contentDesc: "Crea escaletas, notas del episodio en markdown y guiones de introducción.",
      technical: "Audio y Técnico",
      technicalDesc: "Valida feeds RSS, verifica especificaciones de carátulas para Apple/Spotify y formatea timestamps.",
      growth: "Crecimiento y Monetización",
      growthDesc: "Calcula patrocinios CPM, proyecta descargas y redacta respuestas a reseñas.",
    },
    toolsSection: {
      title: "Suite de Producción Completa",
      subtitle: "Haz clic en cualquier herramienta para iniciar el espacio de trabajo. Sin registros ni cuentas.",
      launchTool: "Abrir Herramienta",
      freeBadge: "Gratis",
      popularBadge: "Popular",
      newBadge: "Nuevo",
      technicalBadge: "Estándar",
    },
    toolDetail: {
      backToTools: "Volver a Todas las Herramientas",
      tableOfContents: "En esta página",
      howToUse: "Cómo Usar Esta Herramienta",
      specifications: "Especificaciones Técnicas y Estándares",
      faqs: "Preguntas Frecuentes",
      relatedTools: "Herramientas Relacionadas",
      tryTool: "Abrir Espacio de Trabajo",
    },
    footer: {
      tagline: "Suite de producción gratuita y local para creadores de podcasts de todo el mundo.",
      copyright: "Todos los derechos reservados. Gratis para uso comercial y personal.",
      privacyBadge: "Privacidad 100% en el Navegador",
      linksTitle: "Herramientas",
      categoriesTitle: "Categorías",
      legalTitle: "Estándares y Privacidad",
    },
    searchModal: {
      btnText: "Buscar herramientas...",
      prompt: "Escribe para buscar las 18 herramientas, categorías y calculadoras...",
      noResults: "No se encontraron herramientas para",
      shortcutHint: "Presiona / o ⌘K en cualquier lugar",
      toolsIndexed: "18 herramientas indexadas",
    },
    contactForm: {
      heading: "Redactar Mensaje Directo en el Navegador",
      nameLabel: "Tu Nombre",
      namePlaceholder: "ej. Alejandro",
      emailLabel: "Tu Correo Electrónico",
      emailPlaceholder: "alejandro@ejemplo.com",
      subjectLabel: "Asunto",
      messageLabel: "Mensaje",
      messagePlaceholder: "Comparte tus comentarios, sugerencias de funciones o preguntas...",
      zeroLogNotice: "Sin registro en bases de datos. Se abre directamente en tu cliente de correo.",
      sendButton: "Enviar Mensaje",
      directEmailTitle: "Correo Directo",
      directEmailDesc: "Para soporte general, comentarios sobre fórmulas o preguntas:",
      responseNotice: "Respuesta: en un plazo de 24 a 48 horas hábiles.",
      subtitle: "¿Tienes una sugerencia de herramienta, comentarios sobre nuestras fórmulas o deseas reportar una actualización de especificaciones? Nos encantaría saber de ti.",
    },
    aboutPage: {
      badge: "ACERCA DE POD STUDIO",
      whyTitle: "Por Qué Pod Studio",
      cta: "Explorar las 18 Herramientas",
    },
    legalPages: {
      lastUpdated: "Última actualización: 1 de noviembre de 2026 • Fecha de vigencia: 1 de noviembre de 2026",
      privacyBadge: "ARQUITECTURA DE PRIVACIDAD PRIMERO",
      termsBadge: "TÉRMINOS DE USO",
      exploreAllTools: "Explorar las 18 Herramientas",
      privacy: {
        s1Title: "1. El Modelo del Lado del Cliente",
        s1P1: "Pod Studio («nosotros» o «nuestro») ofrece utilidades en línea gratuitas para creadores de pódcast en podstudiotools.com.",
        s1P2: "Nuestra arquitectura central se basa en una promesa simple: tus ideas creativas y recursos de audio te pertenecen a ti. A diferencia de las herramientas de IA en la nube que suben y almacenan tu texto en bases de datos remotas, Pod Studio ejecuta cálculos y formateo 100% localmente dentro de la memoria de tu navegador.",
        s2Title: "2. Ejecución en Memoria del Navegador",
        s2P1Title: "Vista Previa de Portadas y Pruebas de Imagen",
        s2P1Text: "Cuando arrastras o seleccionas una imagen de portada, el archivo se carga en la memoria volátil de tu navegador mediante la API FileReader HTML5. Los datos nunca se suben ni transmiten a ninguna red. Al cerrar la página, la memoria se purga automáticamente.",
        s2P2Title: "Títulos de Episodios, Notas, Guiones y Ganchos",
        s2P2Text: "Todas las fórmulas de generación y formateo se ejecutan de forma determinista en tu dispositivo mediante JavaScript del lado del cliente. Ningún tema o nota se registra en servidores.",
        s3Title: "3. Rastreo y Análisis de Terceros",
        s3Text: "No utilizamos rastreadores invasivos de terceros, scripts entre sitios ni píxeles de publicidad. Tus interacciones son totalmente privadas.",
        s4Title: "4. Divulgación de Almacenamiento Local (localStorage)",
        s4Text: "No usamos cookies de seguimiento. El único dato guardado en el localStorage de tu navegador es tu preferencia de tema ('light' o 'dark') bajo la clave 'theme', lo que permite recordar tu elección sin identificarte.",
        s5Title: "5. Contacto y Consultas",
        s5Text: "Si tienes preguntas sobre nuestra arquitectura de privacidad, escríbenos a support@podstudiotools.com o visita nuestra página de Contacto.",
      },
      terms: {
        s1Title: "1. Aceptación de los Términos",
        s1Text: "Al acceder o utilizar podstudiotools.com («Pod Studio»), aceptas estar sujeto a estos Términos de Servicio.",
        s2Title: "2. Naturaleza de Utilidad Gratuita y Local",
        s2Text: "Pod Studio está diseñado como un conjunto de herramientas gratuitas del lado del cliente para creadores de pódcast independientes. No requerimos cuentas, inicios de sesión ni pagos.",
        s3Title: "3. Propiedad del Contenido",
        s3Text: "Cualquier título, nota, guión o marca de tiempo generada te pertenece al 100%. No reclamamos ningún derecho de autor ni reclamo comercial sobre tus obras.",
        s4Title: "4. Calculadoras y Estimaciones Informativas",
        s4Text: "Las calculadoras en Pod Studio proporcionan modelos matemáticos basados en promedios de referencia de la industria (p. ej., tarifas CPM estándar). Son estimaciones informativas y no constituyen garantías financieras.",
        s5Title: "5. Consultas",
        s5Text: "¿Preguntas? Contáctanos en support@podstudiotools.com o visita nuestra página de Contacto.",
      },
    },
    toolSteps: {
      clientMemoryBadge: "Memoria 100% del Lado del Cliente",
      specVerifiedBadge: "Especificaciones 2026 Verificadas",
      step1Title: "01. Configurar",
      step1Desc: "Ingresa los detalles de tu episodio, sube ilustraciones de referencia o añade enlaces de fuentes RSS.",
      step2Title: "02. Procesar Localmente",
      step2Desc: "Todos los algoritmos se ejecutan en la memoria del navegador usando lógica determinista y fórmulas verificadas.",
      step3Title: "03. Exportar y Publicar",
      step3Desc: "Copia en markdown con un solo clic o descarga archivos verificados directamente a tu flujo de producción.",
      homeBreadcrumb: "Inicio",
    },
    commonToolUi: {
      copy: "Copiar",
      copied: "¡Copiado!",
      copyAll: "Copiar Todo",
      exportTxt: "Exportar TXT",
      download: "Descargar",
      clear: "Limpiar",
      generate: "Generar",
      calculate: "Calcular",
      reset: "Restablecer",
    },
  },  ja: {
    nav: {
      allTools: "全18種類のツール",
      ideation: "企画・アイデア",
      content: "構成・原稿",
      technical: "技術・規格",
      growth: "成長・CPM収益",
      guides: "ガイド",
      searchPlaceholder: "ツールを検索... (⌘K)",
      about: "当サイトについて",
      contact: "お問い合わせ",
      privacy: "プライバシー",
      terms: "利用規約",
    },
    hero: {
      badge: "完全無料 · ブラウザ完結 · ログイン不要",
      titleStart: "本格派ポッドキャスターのための",
      titleHighlight: "制作スタジオキット",
      description:
        "ポッドキャストのパーソナリティ、プロデューサー、音声エンジニア向けに設計された18の決定論的ブラウザツール。クリック率を高めるタイトル、規格準拠RSS、正確なタイムスタンプ、CPM収益シミュレーション。",
      primaryCta: "18種類のツールを見る",
      secondaryCta: "広告収益を計算する",
      clientSideNotice: "ブラウザのローカルメモリで100%動作。音声やファイルがサーバーに送信されることは一切ありません。",
      trustPills: {
        privacy: "クラウド保存なし",
        formulas: "IAB標準CPM算出",
        free: "ずっと無料＆制限なし",
      },
    },
    categories: {
      all: "すべてのツール",
      ideation: "企画・ブランディング",
      ideationDesc: "バイラルなエピソードタイトル、フック、インタビュー質問、番組名を考案。",
      content: "コンテンツ・原稿",
      contentDesc: "タイムライン進行表、Markdownショーノート、イントロ台本を自動作成。",
      technical: "オーディオ・技術規格",
      technicalDesc: "RSSフィード検証、Apple/Spotify向けカバーアート規格チェック、タイムスタンプ整形。",
      growth: "成長・マネタイズ",
      growthDesc: "CPMスポンサー収益計算、リスナー増加予測、レビュー返信文作成。",
    },
    toolsSection: {
      title: "スタジオ制作ツール一覧",
      subtitle: "アカウント登録なしですぐにワークスペースをご利用いただけます。",
      launchTool: "ツールを開く",
      freeBadge: "無料",
      popularBadge: "人気",
      newBadge: "新着",
      technicalBadge: "規格準拠",
    },
    toolDetail: {
      backToTools: "ツール一覧に戻る",
      tableOfContents: "目次",
      howToUse: "使い方の手順",
      specifications: "技術仕様と業界ベンチマーク",
      faqs: "よくある質問",
      relatedTools: "関連ツール",
      tryTool: "ツールを使用する",
    },
    footer: {
      tagline: "世界中のポッドキャスト制作者のための完全無料・ブラウザ完結型ツールスイート。",
      copyright: "All rights reserved. 商用・非商用問わず自由にご利用いただけます。",
      privacyBadge: "100% ブラウザ内プライバシー保護",
      linksTitle: "制作ツール",
      categoriesTitle: "カテゴリ一覧",
      legalTitle: "規格とプライバシー",
    },
    searchModal: {
      btnText: "ツールを検索...",
      prompt: "18種類のツール、カテゴリー、計算ツールを検索...",
      noResults: "一致するツールが見つかりません:",
      shortcutHint: "任意の場所で / または ⌘K を入力",
      toolsIndexed: "18個のツールを収録",
    },
    contactForm: {
      heading: "ブラウザ内直接メッセージ作成",
      nameLabel: "お名前",
      namePlaceholder: "例: 山田 太郎",
      emailLabel: "メールアドレス",
      emailPlaceholder: "taro@example.jp",
      subjectLabel: "件名",
      messageLabel: "メッセージ",
      messagePlaceholder: "フィードバック、新機能のリクエスト、ご質問などをご記入ください...",
      zeroLogNotice: "データベースへの保存は一切ありません。お使いのメールソフトが直接開きます。",
      sendButton: "メッセージを送信",
      directEmailTitle: "直接メール連絡",
      directEmailDesc: "一般的なサポート、計算式のフィードバック、ご質問:",
      responseNotice: "返信目安: 24〜48営業時間以内。",
      subtitle: "ツールの改善要望、計算式へのフィードバック、仕様変更など、お気軽にお問い合わせください。",
    },
    aboutPage: {
      badge: "POD STUDIOについて",
      whyTitle: "Pod Studioの理念",
      cta: "全18種類のツールを見る",
    },
    legalPages: {
      lastUpdated: "最終更新日: 2026年11月1日 • 発効日: 2026年11月1日",
      privacyBadge: "プライバシー最優先設計",
      termsBadge: "利用規約",
      exploreAllTools: "全18種類のツールを見る",
      privacy: {
        s1Title: "1. クライアントサイド動作モデル",
        s1P1: "Pod Studio（以下「当サイト」）は、ポッドキャスト制作者向けに無料のオンラインツールをpodstudiotools.comにて提供しています。",
        s1P2: "私たちの設計理念は明確です。あなたの創作アイデアや音声データはすべてあなた自身のものです。テキストや音声を外部サーバーに送信・蓄積する一般的なクラウドAIと異なり、Pod Studioはすべての計算・整形処理をブラウザのメモリ内（ローカル）で100%完結させます。",
        s2Title: "2. ブラウザメモリ内処理の詳細",
        s2P1Title: "カバーアートプレビュー・画像検証",
        s2P1Text: "カバーアート画像をドラッグ＆ドロップすると、HTML5 FileReader APIを介してブラウザの一時メモリ内にのみ展開されます。画像が外部サーバーへ送信・保存されることは一切ありません。タブを閉じるとメモリは即座に破棄されます。",
        s2P2Title: "エピソードタイトル・ショーノート・台本・フック",
        s2P2Text: "すべてのテキスト生成・フォーマット処理はクライアントサイドJavaScriptによって確定的に実行されます。入力されたタイトルやゲスト名がサーバーログに記録されることはありません。",
        s3Title: "3. 第三者トラッキング・外部解析について",
        s3Text: "侵入的なトラッキングタグ、クロスサイトプロファイリング、広告ピクセルは一切使用していません。計算ツール上の操作は完全に保護されます。",
        s4Title: "4. ローカルストレージ（localStorage）の使用",
        s4Text: "トラッキングCookieは使用しません。ブラウザのlocalStorageに保存される唯一のデータは、ライト/ダークモード設定（キー名: 'theme'）のみであり、個人を特定したりサーバーに送信されたりすることはありません。",
        s5Title: "5. お問い合わせ",
        s5Text: "プライバシー設計に関するご質問は、support@podstudiotools.comまたはお問い合わせページよりご連絡ください。",
      },
      terms: {
        s1Title: "1. 規約への同意",
        s1Text: "podstudiotools.com（Pod Studio）へのアクセスおよび利用により、本利用規約に同意したものとみなされます。",
        s2Title: "2. 無料・ローカルツールの性質",
        s2Text: "Pod Studioは独立系ポッドキャスター向けの無料クライアントサイドツールキットです。会員登録、ログイン、料金の支払いは一切不要です。",
        s3Title: "3. 生成物の著作権",
        s3Text: "Pod Studioを使用して生成されたタイトル、ショーノート、台本、タイムスタンプなどの著作権は100%ユーザーに帰属します。当サイトが商用利用権や著作権を主張することはありません。",
        s4Title: "4. 計算結果および推定値に関する免責",
        s4Text: "当サイトの計算ツールは業界平均値（例: 標準CPM広告単価など）に基づいた目安を提供するものです。将来の収益を保証するものではありません。",
        s5Title: "5. お問い合わせ",
        s5Text: "ご不明な点はsupport@podstudiotools.comまたはお問い合わせページからご連絡ください。",
      },
    },
    toolSteps: {
      clientMemoryBadge: "100% クライアントサイド処理",
      specVerifiedBadge: "2026年最新配信規格検証済み",
      step1Title: "01. 設定と入力",
      step1Desc: "エピソードの概要を入力するか、カバー画像をドロップ、またはRSSフィードURLを指定します。",
      step2Title: "02. ローカル処理",
      step2Desc: "すべてのロジックは確定的なアルゴリズムによりブラウザのメモリ内だけで実行されます。",
      step3Title: "03. 書き出しと公開",
      step3Desc: "ワンクリックでMarkdownをコピー、または検証済みファイルを制作環境にすぐ保存できます。",
      homeBreadcrumb: "ホーム",
    },
    commonToolUi: {
      copy: "コピー",
      copied: "コピー完了!",
      copyAll: "すべてコピー",
      exportTxt: "TXT出力",
      download: "ダウンロード",
      clear: "クリア",
      generate: "生成する",
      calculate: "計算する",
      reset: "リセット",
    },
  },  fr: {
    nav: {
      allTools: "Les 18 Outils",
      ideation: "Idéation",
      content: "Contenu",
      technical: "Technique",
      growth: "Croissance & CPM",
      guides: "Guides",
      searchPlaceholder: "Rechercher un outil podcast... (⌘K)",
      about: "À propos",
      contact: "Contact",
      privacy: "Confidentialité",
      terms: "Conditions",
    },
    hero: {
      badge: "100% Gratuit · Exécution Locale · Sans Inscription",
      titleStart: "La Boîte à Outils de Production pour",
      titleHighlight: "Podcasteurs Exigeants",
      description:
        "18 outils déterministes sans serveur conçus pour les animateurs, producteurs et ingénieurs du son. Titres percutants, flux RSS conformes, horodatages précis et calcul de monétisation CPM.",
      primaryCta: "Découvrir les 18 Outils",
      secondaryCta: "Calculer les Revenus Publicitaires",
      clientSideNotice: "Fonctionne à 100% localement dans votre navigateur. Vos données et fichiers ne quittent jamais votre appareil.",
      trustPills: {
        privacy: "Aucun Envoi sur le Cloud",
        formulas: "Formules CPM Standard IAB",
        free: "Toujours Gratuit & Libre",
      },
    },
    categories: {
      all: "Tous les Outils",
      ideation: "Idéation & Marque",
      ideationDesc: "Titres d'épisodes captivants, accroches percutantes, questions d'interviews et noms d'émission.",
      content: "Contenu & Écriture",
      contentDesc: "Plans détaillés d'émissions, notes d'épisodes en markdown et scripts d'introduction.",
      technical: "Audio & Technique",
      technicalDesc: "Validation de flux RSS, contrôle des pochettes Apple/Spotify et formatage des timecodes.",
      growth: "Croissance & Monétisation",
      growthDesc: "Calcul des revenus de sponsoring CPM, estimation d'audience et réponses aux avis.",
    },
    toolsSection: {
      title: "Suite de Production Complète",
      subtitle: "Cliquez sur un outil pour ouvrir l'espace de travail interactif. Aucun compte requis.",
      launchTool: "Ouvrir l'outil",
      freeBadge: "Gratuit",
      popularBadge: "Populaire",
      newBadge: "Nouveau",
      technicalBadge: "Standard",
    },
    toolDetail: {
      backToTools: "Retour aux outils",
      tableOfContents: "Sur cette page",
      howToUse: "Comment utiliser cet outil",
      specifications: "Spécifications techniques & normes",
      faqs: "Questions fréquentes",
      relatedTools: "Outils associés",
      tryTool: "Lancer l'espace de travail",
    },
    footer: {
      tagline: "Suite de production gratuite et locale pour créateurs de podcasts du monde entier.",
      copyright: "Tous droits réservés. Gratuit pour créateurs indépendants et professionnels.",
      privacyBadge: "Confidentialité 100% Locale Garantie",
      linksTitle: "Outils de Production",
      categoriesTitle: "Catégories",
      legalTitle: "Normes & Légal",
    },
    searchModal: {
      btnText: "Rechercher des outils...",
      prompt: "Tapez pour rechercher parmi les 18 outils, catégories et calculateurs...",
      noResults: "Aucun outil trouvé pour",
      shortcutHint: "Appuyez sur / ou ⌘K n'importe où",
      toolsIndexed: "18 outils indexés",
    },
    contactForm: {
      heading: "Rédiger un Message Direct dans le Navigateur",
      nameLabel: "Votre Nom",
      namePlaceholder: "ex. Thomas",
      emailLabel: "Votre E-mail",
      emailPlaceholder: "thomas@exemple.fr",
      subjectLabel: "Objet",
      messageLabel: "Message",
      messagePlaceholder: "Partagez vos retours, suggestions ou questions...",
      zeroLogNotice: "Aucun enregistrement en base de données. S'ouvre directement dans votre messagerie.",
      sendButton: "Envoyer le Message",
      directEmailTitle: "E-mail Direct",
      directEmailDesc: "Pour l'assistance générale, les retours sur les formules ou les questions :",
      responseNotice: "Réponse sous 24 à 48 heures ouvrables.",
      subtitle: "Vous avez une suggestion d'outil, des retours sur nos formules ou un changement de spécifications à signaler ? Écrivez-nous.",
    },
    aboutPage: {
      badge: "À PROPOS DE POD STUDIO",
      whyTitle: "Pourquoi Pod Studio",
      cta: "Explorer les 18 Outils",
    },
    legalPages: {
      lastUpdated: "Dernière mise à jour : 1er novembre 2026 • Date d'effet : 1er novembre 2026",
      privacyBadge: "ARCHITECTURE RESPECTUEUSE DE LA VIE PRIVÉE",
      termsBadge: "CONDITIONS D'UTILISATION",
      exploreAllTools: "Explorer les 18 Outils",
      privacy: {
        s1Title: "1. Le Modèle Côté Client",
        s1P1: "Pod Studio (« nous » ou « notre ») fournit des utilitaires en ligne gratuits pour les créateurs de podcasts sur podstudiotools.com.",
        s1P2: "Notre architecture repose sur une promesse claire : vos idées créatives et vos fichiers audio vous appartiennent. Contrairement aux outils IA dans le cloud qui stockent vos textes sur des serveurs distants, Pod Studio exécute tous les calculs 100 % localement dans la mémoire de votre navigateur.",
        s2Title: "2. Exécution en Mémoire Navigateur",
        s2P1Title: "Aperçu de la Pochette et Test d'Image",
        s2P1Text: "Lorsque vous déposez ou sélectionnez une image de pochette, elle est chargée dans la mémoire volatile du navigateur via l'API FileReader HTML5. Les données d'image ne sont jamais téléversées ni transmises. En fermant la page, la mémoire est vidée instantanément.",
        s2P2Title: "Titres d'Épisodes, Notes, Scripts et Accroches",
        s2P2Text: "Toutes les formules s'exécutent de façon déterministe sur votre appareil en JavaScript client. Aucun sujet d'épisode ni note n'est envoyé à un serveur.",
        s3Title: "3. Suivi et Outils d'Analyse Tiers",
        s3Text: "Nous n'utilisons aucun traceur intrusif, script de profilage ou pixel publicitaire. Vos interactions restent strictement confidentielles.",
        s4Title: "4. Divulgation du Stockage Local (localStorage)",
        s4Text: "Nous n'utilisons pas de cookies de suivi. La seule donnée écrite dans le localStorage de votre navigateur est votre préférence de thème ('light' ou 'dark') sous la clé 'theme'.",
        s5Title: "5. Contact et Questions",
        s5Text: "Pour toute question concernant notre architecture de confidentialité, contactez-nous à support@podstudiotools.com ou consultez notre page Contact.",
      },
      terms: {
        s1Title: "1. Acceptation des Conditions",
        s1Text: "En accédant ou en utilisant podstudiotools.com (« Pod Studio »), vous acceptez d'être lié par ces Conditions d'Utilisation.",
        s2Title: "2. Nature d'Utilitaire Gratuit et Local",
        s2Text: "Pod Studio est conçu comme une boîte à outils gratuite côté client pour les créateurs indépendants. Aucun compte, connexion ou paiement n'est requis.",
        s3Title: "3. Propriété du Contenu",
        s3Text: "Tous les titres, notes, scripts ou horodatages générés vous appartiennent à 100 %. Nous ne revendiquons aucun droit d'auteur sur vos créations.",
        s4Title: "4. Calculateurs et Estimations Indicatives",
        s4Text: "Les calculateurs fournissent des modèles mathématiques basés sur les moyennes de référence du secteur (ex. tarifs CPM standard). Ces données sont indicatives et ne constituent pas des garanties financières.",
        s5Title: "5. Contact",
        s5Text: "Des questions ? Écrivez-nous à support@podstudiotools.com ou visitez notre page Contact.",
      },
    },
    toolSteps: {
      clientMemoryBadge: "Mémoire 100 % Côté Client",
      specVerifiedBadge: "Spécifications 2026 Vérifiées",
      step1Title: "01. Configurer",
      step1Desc: "Renseignez les détails de votre épisode, chargez une pochette de référence ou fournissez un flux RSS.",
      step2Title: "02. Traitement Local",
      step2Desc: "Tous les algorithmes tournent dans la mémoire du navigateur via une logique déterministe et vérifiée.",
      step3Title: "03. Exporter & Publier",
      step3Desc: "Copiez en markdown en un clic ou téléchargez les fichiers directement dans votre flux de production.",
      homeBreadcrumb: "Accueil",
    },
    commonToolUi: {
      copy: "Copier",
      copied: "Copié !",
      copyAll: "Tout Copier",
      exportTxt: "Exporter TXT",
      download: "Télécharger",
      clear: "Effacer",
      generate: "Générer",
      calculate: "Calculer",
      reset: "Réinitialiser",
    },
  },  de: {
    nav: {
      allTools: "Alle 18 Tools",
      ideation: "Ideenfindung",
      content: "Inhalt & Skripte",
      technical: "Technik & Audio",
      growth: "Wachstum & CPM",
      guides: "Anleitungen",
      searchPlaceholder: "Podcast-Tools durchsuchen... (⌘K)",
      about: "Über uns",
      contact: "Kontakt",
      privacy: "Datenschutz",
      terms: "AGB",
    },
    hero: {
      badge: "100% Kostenlos · Lokale Ausführung · Ohne Anmeldung",
      titleStart: "Das Produktions-Toolkit für",
      titleHighlight: "Ambitionierte Podcaster",
      description:
        "18 deterministische Client-Side-Tools für Podcast-Hosts, Produzenten und Audio-Engineers. Klickstarke Episodentitel, fehlerfreie RSS-Feeds, exakte Timestamps und präzise CPM-Einnahmenberechnung.",
      primaryCta: "Alle 18 Tools ansehen",
      secondaryCta: "Werbeeinnahmen berechnen",
      clientSideNotice: "Läuft zu 100% lokal im Browserspeicher. Ihre Dateien und Audiodaten verlassen niemals Ihr Gerät.",
      trustPills: {
        privacy: "Keine Cloud-Uploads",
        formulas: "IAB v2 CPM Formeln",
        free: "Dauerhaft Kostenlos & Offen",
      },
    },
    categories: {
      all: "Alle Tools",
      ideation: "Ideen & Branding",
      ideationDesc: "Fesselnde Episodentitel, Hooks, Interviewfragen und Podcast-Namen entwerfen.",
      content: "Inhalt & Ablaufpläne",
      contentDesc: "Ablaufpläne erstellen, Markdown-Show-Notes generieren und Skripte optimieren.",
      technical: "Audio & Standards",
      technicalDesc: "RSS-Feeds prüfen, Cover-Art-Vorgaben für Apple/Spotify validieren und Timestamps formatieren.",
      growth: "Wachstum & Monetarisierung",
      growthDesc: "CPM-Sponsoring berechnen, Hörer-Wachstum prognostizieren und Rezensionen beantworten.",
    },
    toolsSection: {
      title: "Komplette Studio-Suite",
      subtitle: "Klicken Sie auf ein Tool, um direkt im Browser loszulegen. Keine Registrierung notwendig.",
      launchTool: "Tool öffnen",
      freeBadge: "Kostenlos",
      popularBadge: "Beliebt",
      newBadge: "Neu",
      technicalBadge: "Standards",
    },
    toolDetail: {
      backToTools: "Zurück zur Übersicht",
      tableOfContents: "Inhaltsübersicht",
      howToUse: "Anleitung Schritt für Schritt",
      specifications: "Technische Spezifikationen & Benchmarks",
      faqs: "Häufig gestellte Fragen",
      relatedTools: "Verwandte Studio-Tools",
      tryTool: "Tool-Arbeitsbereich öffnen",
    },
    footer: {
      tagline: "Kostenlose, lokale Produktions-Suite für Podcaster weltweit.",
      copyright: "Alle Rechte vorbehalten. Frei für kommerzielle und private Nutzung.",
      privacyBadge: "100% Datenschutz im Browser",
      linksTitle: "Studio-Tools",
      categoriesTitle: "Kategorien",
      legalTitle: "Standards & Datenschutz",
    },
    searchModal: {
      btnText: "Tools durchsuchen...",
      prompt: "Tippen Sie, um alle 18 Tools, Kategorien und Rechner zu durchsuchen...",
      noResults: "Keine Tools gefunden für",
      shortcutHint: "Drücken Sie überall / oder ⌘K",
      toolsIndexed: "18 Tools indexiert",
    },
    contactForm: {
      heading: "Direktnachricht im Browser verfassen",
      nameLabel: "Ihr Name",
      namePlaceholder: "z.B. Markus",
      emailLabel: "Ihre E-Mail",
      emailPlaceholder: "markus@beispiel.de",
      subjectLabel: "Betreff",
      messageLabel: "Nachricht",
      messagePlaceholder: "Teilen Sie Ihr Feedback, Funktionsvorschläge oder Fragen...",
      zeroLogNotice: "Keine Datenbankspeicherung. Öffnet sich direkt in Ihrem E-Mail-Programm.",
      sendButton: "Nachricht Senden",
      directEmailTitle: "Direkte E-Mail",
      directEmailDesc: "Für Support, Feedback zu Formeln oder Fragen:",
      responseNotice: "Antwortzeit: innerhalb von 24–48 Geschäftsstunden.",
      subtitle: "Haben Sie einen Tool-Vorschlag, Feedback zu unseren Berechnungen oder möchten Sie eine Spezifikation melden? Wir freuen uns auf Ihre Nachricht.",
    },
    aboutPage: {
      badge: "ÜBER POD STUDIO",
      whyTitle: "Warum Pod Studio",
      cta: "Alle 18 Tools Entdecken",
    },
    legalPages: {
      lastUpdated: "Zuletzt aktualisiert: 1. November 2026 • Gültig ab: 1. November 2026",
      privacyBadge: "DATENSCHUTZ-FIRST ARCHITEKTUR",
      termsBadge: "NUTZUNGSBEDINGUNGEN",
      exploreAllTools: "Alle 18 Tools Entdecken",
      privacy: {
        s1Title: "1. Das Client-Side Modell",
        s1P1: "Pod Studio («wir» oder «unser») stellt kostenlose Online-Tools für Podcast-Ersteller auf podstudiotools.com bereit.",
        s1P2: "Unsere Kernarchitektur basiert auf einem einfachen Versprechen: Ihre kreativen Ideen gehören Ihnen. Im Gegensatz zu Cloud-KI-Tools verarbeitet Pod Studio alle Daten zu 100 % lokal im Speicher Ihres Webbrowsers.",
        s2Title: "2. Ausführung im Browser-Arbeitsspeicher",
        s2P1Title: "Cover-Art-Vorschau und Bildprüfung",
        s2P1Text: "Beim Laden einer Cover-Grafik wird die Datei über die HTML5-FileReader-API im flüchtigen Browser-Speicher gehalten. Bilddaten werden niemals hochgeladen oder über ein Netzwerk übertragen. Beim Schließen des Tabs wird der Speicher sofort geleert.",
        s2P2Title: "Episodentitel, Shownotes, Skripte und Hooks",
        s2P2Text: "Alle Textgenerierungsformeln laufen deterministisch auf Ihrem Endgerät über JavaScript. Keine Daten werden an externe Server übermittelt.",
        s3Title: "3. Tracking und Drittanbieter-Analysen",
        s3Text: "Wir verwenden keine aggressiven Tracking-Dienste, seitenübergreifenden Profile oder Werbe-Pixel. Ihre Berechnungen bleiben vertraulich.",
        s4Title: "4. Offenlegung lokaler Speicher (localStorage)",
        s4Text: "Wir setzen keine Tracking-Cookies ein. Der einzige im localStorage gespeicherte Wert ist Ihre Theme-Einstellung ('light' oder 'dark') unter dem Schlüssel 'theme'.",
        s5Title: "5. Kontakt und Datenschutzfragen",
        s5Text: "Bei Fragen zu unserer Datenschutzarchitektur schreiben Sie an support@podstudiotools.com oder besuchen Sie unsere Kontaktseite.",
      },
      terms: {
        s1Title: "1. Zustimmung zu den Bedingungen",
        s1Text: "Mit dem Zugriff auf podstudiotools.com («Pod Studio») erklären Sie sich mit diesen Nutzungsbedingungen einverstanden.",
        s2Title: "2. Kostenloses, lokales Toolset",
        s2Text: "Pod Studio ist ein kostenloses Client-Side-Toolkit für unabhängige Podcaster. Es ist keine Registrierung oder Zahlung erforderlich.",
        s3Title: "3. Urheberrecht an generierten Inhalten",
        s3Text: "Alle mit Pod Studio erstellten Titel, Shownotes oder Skripte gehören zu 100 % Ihnen. Wir beanspruchen keinerlei Rechte an Ihren Werken.",
        s4Title: "4. Rechner und Richtwerte",
        s4Text: "Die Rechner basieren auf Branchen-Durchschnittswerten (z. B. Standard-CPM-Sätze). Sie dienen zur Orientierung und stellen keine finanziellen Garantien dar.",
        s5Title: "5. Kontakt",
        s5Text: "Fragen? Schreiben Sie uns an support@podstudiotools.com oder nutzen Sie unsere Kontaktseite.",
      },
    },
    toolSteps: {
      clientMemoryBadge: "100 % Lokaler Browser-Speicher",
      specVerifiedBadge: "2026 Branchen-Spezifikationen Geprüft",
      step1Title: "01. Konfigurieren",
      step1Desc: "Geben Sie Episodendetails ein, laden Sie Cover-Artworks hoch oder fügen Sie RSS-Feed-Links ein.",
      step2Title: "02. Lokal Verarbeiten",
      step2Desc: "Alle Algorithmen laufen im Browserspeicher mit deterministischer Logik und geprüften Formeln.",
      step3Title: "03. Exportieren & Veröffentlichen",
      step3Desc: "Mit einem Klick Markdown kopieren oder geprüfte Dateien direkt in Ihren Workflow übernehmen.",
      homeBreadcrumb: "Startseite",
    },
    commonToolUi: {
      copy: "Kopieren",
      copied: "Kopiert!",
      copyAll: "Alles Kopieren",
      exportTxt: "Als TXT Exportieren",
      download: "Herunterladen",
      clear: "Löschen",
      generate: "Generieren",
      calculate: "Berechnen",
      reset: "Zurücksetzen",
    },
  },  pt: {
    nav: {
      allTools: "Todas as 18 Ferramentas",
      ideation: "Ideação",
      content: "Conteúdo",
      technical: "Técnico",
      growth: "Crescimento e CPM",
      guides: "Guias",
      searchPlaceholder: "Buscar ferramentas de podcast... (⌘K)",
      about: "Sobre",
      contact: "Contato",
      privacy: "Privacidade",
      terms: "Termos",
    },
    hero: {
      badge: "100% Grátis · Execução no Navegador · Sem Cadastro",
      titleStart: "O Kit de Produção para",
      titleHighlight: "Criadores de Podcasts",
      description:
        "18 ferramentas determinísticas sem servidor para podcasters, produtores e engenheiros de áudio. Títulos de alto clique, feeds RSS perfeitos, marcações de tempo precisas e cálculo de monetização CPM.",
      primaryCta: "Explorar as 18 Ferramentas",
      secondaryCta: "Calcular Ganhos de Anúncios",
      clientSideNotice: "Executa 100% localmente na memória do seu navegador. Seus arquivos de áudio nunca saem do seu computador.",
      trustPills: {
        privacy: "Zero Uploads em Nuvem",
        formulas: "Fórmulas CPM Padrão IAB",
        free: "Sempre Grátis e Aberto",
      },
    },
    categories: {
      all: "Todas as Ferramentas",
      ideation: "Ideação e Marca",
      ideationDesc: "Crie títulos virais, ganchos de abertura, perguntas para entrevistas e nomes marcantes.",
      content: "Conteúdo e Roteiros",
      contentDesc: "Estruture pautas de episódios, gere notas em markdown e roteiros de introdução.",
      technical: "Áudio e Técnico",
      technicalDesc: "Valide feeds RSS, confira as dimensões de capas para Apple/Spotify e formate timestamps.",
      growth: "Crescimento e Monetização",
      growthDesc: "Calcule patrocínios CPM, estime crescimento de downloads e responda a avaliações.",
    },
    toolsSection: {
      title: "Suite de Produção Completa",
      subtitle: "Clique em qualquer ferramenta para iniciar. Sem necessidade de conta ou login.",
      launchTool: "Abrir Ferramenta",
      freeBadge: "Grátis",
      popularBadge: "Popular",
      newBadge: "Novo",
      technicalBadge: "Padrão",
    },
    toolDetail: {
      backToTools: "Voltar a Todas as Ferramentas",
      tableOfContents: "Nesta página",
      howToUse: "Como Usar Esta Ferramenta",
      specifications: "Especificações Técnicas e Parâmetros",
      faqs: "Perguntas Frequentes",
      relatedTools: "Ferramentas Relacionadas",
      tryTool: "Abrir Espaço de Trabalho",
    },
    footer: {
      tagline: "Suite de produção gratuita e local para podcasters de todo o mundo.",
      copyright: "Todos os direitos reservados. Gratuito para uso pessoal e comercial.",
      privacyBadge: "Privacidade 100% no Navegador",
      linksTitle: "Ferramentas",
      categoriesTitle: "Categorias",
      legalTitle: "Padrões e Privacidade",
    },
    searchModal: {
      btnText: "Pesquisar ferramentas...",
      prompt: "Digite para buscar nas 18 ferramentas, categorias e calculadoras...",
      noResults: "Nenhuma ferramenta encontrada para",
      shortcutHint: "Pressione / ou ⌘K em qualquer lugar",
      toolsIndexed: "18 ferramentas indexadas",
    },
    contactForm: {
      heading: "Escrever Mensagem Direta no Navegador",
      nameLabel: "Seu Nome",
      namePlaceholder: "ex.: Lucas",
      emailLabel: "Seu E-mail",
      emailPlaceholder: "lucas@exemplo.com.br",
      subjectLabel: "Assunto",
      messageLabel: "Mensagem",
      messagePlaceholder: "Compartilhe suas sugestões, comentários sobre fórmulas ou dúvidas...",
      zeroLogNotice: "Sem gravação em banco de dados. Abre diretamente no seu aplicativo de e-mail.",
      sendButton: "Enviar Mensagem",
      directEmailTitle: "E-mail Direto",
      directEmailDesc: "Para suporte geral, sugestões ou dúvidas:",
      responseNotice: "Resposta: em até 24 a 48 horas úteis.",
      subtitle: "Tem uma sugestão de ferramenta, comentários sobre fórmulas ou quer relatar atualização de especificações? Escreva para nós.",
    },
    aboutPage: {
      badge: "SOBRE O POD STUDIO",
      whyTitle: "Por Que o Pod Studio",
      cta: "Explorar Todas as 18 Ferramentas",
    },
    legalPages: {
      lastUpdated: "Última atualização: 1 de novembro de 2026 • Data de vigência: 1 de novembro de 2026",
      privacyBadge: "ARQUITETURA COM PRIVACIDADE EM PRIMEIRO LUGAR",
      termsBadge: "TERMOS DE USO",
      exploreAllTools: "Explorar Todas as 18 Ferramentas",
      privacy: {
        s1Title: "1. O Modelo do Lado do Cliente",
        s1P1: "O Pod Studio («nós» ou «nosso») fornece utilitários online gratuitos para criadores de podcast em podstudiotools.com.",
        s1P2: "Nossa arquitetura é construída sobre uma promessa fundamental: suas ideias pertencem a você. O Pod Studio executa todos os cálculos e formatações 100% localmente na memória do seu navegador.",
        s2Title: "2. Execução em Memória do Navegador",
        s2P1Title: "Prévia de Capa e Teste de Imagem",
        s2P1Text: "Ao carregar uma capa, o arquivo é processado na memória volátil do navegador via API FileReader do HTML5. Nenhuma imagem é transmitida para servidores. Ao fechar a aba, a memória é liberada.",
        s2P2Title: "Títulos de Episódio, Notas do Show, Roteiros e Ganchos",
        s2P2Text: "Todas as fórmulas são executadas de forma determinística no seu dispositivo via JavaScript client-side. Nenhum dado é registrado em servidores remotos.",
        s3Title: "3. Rastreadores e Análises de Terceiros",
        s3Text: "Não usamos rastreadores invasivos, ferramentas de perfil entre sites ou pixels de anúncios. Suas simulações permanecem privadas.",
        s4Title: "4. Declaração de Armazenamento Local (localStorage)",
        s4Text: "Não utilizamos cookies de rastreamento. O único dado salvo no localStorage do seu navegador é sua preferência de tema ('light' ou 'dark') sob a chave 'theme'.",
        s5Title: "5. Contato e Privacidade",
        s5Text: "Para dúvidas sobre privacidade, envie um e-mail para support@podstudiotools.com ou acesse nossa página de Contato.",
      },
      terms: {
        s1Title: "1. Aceitação dos Termos",
        s1Text: "Ao acessar ou usar podstudiotools.com («Pod Studio»), você concorda com estes Termos de Serviço.",
        s2Title: "2. Natureza Gratuita e Local das Ferramentas",
        s2Text: "O Pod Studio foi desenvolvido como um conjunto gratuito de utilitários locais para podcasters independentes. Não exigimos cadastro ou pagamento.",
        s3Title: "3. Propriedade do Conteúdo",
        s3Text: "Quaisquer títulos, notas ou roteiros gerados pertencem 100% a você. Não reivindicamos direitos autorais sobre suas criações.",
        s4Title: "4. Calculadoras e Estimativas",
        s4Text: "As calculadoras oferecem modelos matemáticos baseados em médias de mercado (ex.: taxas de CPM). São estimativas informativas e não garantias financeiras.",
        s5Title: "5. Dúvidas",
        s5Text: "Dúvidas? Entre em contato pelo e-mail support@podstudiotools.com ou visite nossa página de Contato.",
      },
    },
    toolSteps: {
      clientMemoryBadge: "Memória 100% do Lado do Cliente",
      specVerifiedBadge: "Especificações de 2026 Verificadas",
      step1Title: "01. Configurar",
      step1Desc: "Insira os detalhes do episódio, carregue a capa de teste ou informe o link do feed RSS.",
      step2Title: "02. Processamento Local",
      step2Desc: "Todos os algoritmos rodam na memória do navegador usando lógica determinística e fórmulas verificadas.",
      step3Title: "03. Exportar e Publicar",
      step3Desc: "Copie em markdown com um clique ou baixe os arquivos prontos para a sua rotina de publicação.",
      homeBreadcrumb: "Início",
    },
    commonToolUi: {
      copy: "Copiar",
      copied: "Copiado!",
      copyAll: "Copiar Tudo",
      exportTxt: "Exportar TXT",
      download: "Baixar",
      clear: "Limpar",
      generate: "Gerar",
      calculate: "Calcular",
      reset: "Redefinir",
    },
  },  ko: {
    nav: {
      allTools: "전체 18개 도구",
      ideation: "아이디어",
      content: "콘텐츠·대본",
      technical: "기술·규격",
      growth: "성장·CPM 수익",
      guides: "가이드",
      searchPlaceholder: "팟캐스트 도구 검색... (⌘K)",
      about: "소개",
      contact: "문의",
      privacy: "개인정보처리방침",
      terms: "이용약관",
    },
    hero: {
      badge: "100% 무료 · 브라우저 로컬 실행 · 로그인 불필요",
      titleStart: "프로페셔널 크리에이터를 위한",
      titleHighlight: "팟캐스트 제작 툴킷",
      description:
        "팟캐스트 진행자, 프로듀서, 음향 엔지니어를 위해 정밀 설계된 18개 클라이언트 사이드 도구. 높은 클릭률의 에피소드 제목, 표준 준수 RSS 피드, 정밀 타임스탬프, IAB 기준 CPM 광고 수익 계산기.",
      primaryCta: "18개 도구 전체 보기",
      secondaryCta: "광고 수익 계산하기",
      clientSideNotice: "브라우저 로컬 메모리에서 100% 안전하게 실행됩니다. 오디오와 텍스트 데이터가 외부 서버로 전송되지 않습니다.",
      trustPills: {
        privacy: "클라우드 업로드 없음",
        formulas: "IAB v2 CPM 표준 공식",
        free: "평생 무료 & 무제한",
      },
    },
    categories: {
      all: "모든 도구",
      ideation: "기획 및 브랜딩",
      ideationDesc: "주목도 높은 에피소드 제목, 후크, 게스트 인터뷰 질문, 팟캐스트 프로그램 이름 생성.",
      content: "콘텐츠 및 대본",
      contentDesc: "큐시트 아웃라인 작성, Markdown 쇼노트 생성, 오프닝 인트로 스크립트 작성.",
      technical: "오디오 및 기술 규격",
      technicalDesc: "RSS 피드 검증, Apple/Spotify 규격 커버 아트 검사, 타임스탬프 포맷팅.",
      growth: "성장 및 수익화",
      growthDesc: "CPM 스폰서 수익 시뮬레이션, 청취자 다운로드 성장률 예측, 리뷰 피드백 작성.",
    },
    toolsSection: {
      title: "올인원 스튜디오 툴킷",
      subtitle: "원하는 도구를 클릭하여 브라우저에서 바로 사용하세요. 회원가입이 필요 없습니다.",
      launchTool: "도구 열기",
      freeBadge: "무료",
      popularBadge: "인기",
      newBadge: "신규",
      technicalBadge: "표준 규격",
    },
    toolDetail: {
      backToTools: "전체 도구 목록으로 돌아가기",
      tableOfContents: "목차",
      howToUse: "사용 방법 가이드",
      specifications: "기술 규격 및 업계 벤치마크",
      faqs: "자주 묻는 질문",
      relatedTools: "관련 제작 도구",
      tryTool: "도구 실행하기",
    },
    footer: {
      tagline: "전 세계 팟캐스트 크리에이터를 위한 100% 무료 로컬 프로덕션 스튜디오.",
      copyright: "All rights reserved. 상업적 및 비상업적 용도로 자유롭게 사용 가능합니다.",
      privacyBadge: "100% 로컬 브라우저 개인정보 보호",
      linksTitle: "제작 도구",
      categoriesTitle: "카테고리",
      legalTitle: "표준 및 이용정책",
    },
    searchModal: {
      btnText: "도구 검색...",
      prompt: "18가지 팟캐스트 제작 도구, 카테고리, 계산기 검색...",
      noResults: "일치하는 도구가 없습니다:",
      shortcutHint: "어디서나 / 또는 ⌘K 누르기",
      toolsIndexed: "18개 도구 등록됨",
    },
    contactForm: {
      heading: "브라우저 내 직접 메시지 작성",
      nameLabel: "이름",
      namePlaceholder: "예: 홍길동",
      emailLabel: "이메일",
      emailPlaceholder: "contact@example.kr",
      subjectLabel: "제목",
      messageLabel: "메시지",
      messagePlaceholder: "피드백, 새로운 기능 제안, 문의사항을 적어주세요...",
      zeroLogNotice: "데이터베이스에 저장되지 않습니다. 이메일 클라이언트가 직접 실행됩니다.",
      sendButton: "메시지 전송",
      directEmailTitle: "직접 이메일 문의",
      directEmailDesc: "일반 지원, 수식 관련 피드백 또는 문의:",
      responseNotice: "답변 시간: 영업일 기준 24~48시간 이내.",
      subtitle: "도구 제안, 수익 계산 수식에 대한 피드백 또는 플랫폼 규격 업데이트 제보가 있으신가요? 언제든 연락해 주세요.",
    },
    aboutPage: {
      badge: "POD STUDIO 소개",
      whyTitle: "Pod Studio 설립 목적",
      cta: "18가지 전체 도구 살펴보기",
    },
    legalPages: {
      lastUpdated: "최종 수정일: 2026년 11월 1일 • 발효일: 2026년 11월 1일",
      privacyBadge: "프라이버시 최우선 아키텍처",
      termsBadge: "이용 약관",
      exploreAllTools: "18가지 전체 도구 살펴보기",
      privacy: {
        s1Title: "1. 클라이언트 사이드 작동 원칙",
        s1P1: "Pod Studio(이하 '당사')는 podstudiotools.com에서 팟캐스트 제작자를 위한 무료 온라인 유틸리티를 제공합니다.",
        s1P2: "우리의 핵심 약속은 간단합니다. 창작자의 아이디어와 오디오 자산은 온전히 창작자의 것입니다. Pod Studio는 모든 계산과 포맷 변환을 웹 브라우저 메모리 내에서 100% 로컬로 처리합니다.",
        s2Title: "2. 브라우저 메모리 내 실행 세부사항",
        s2P1Title: "커버 아트 미리보기 및 규격 검사",
        s2P1Text: "커버 아트 이미지를 선택하거나 드래그하면 HTML5 FileReader API를 통해 브라우저 휘발성 메모리에만 로드됩니다. 이미지는 원격 서버로 전송되거나 저장되지 않으며, 페이지를 닫으면 즉시 삭제됩니다.",
        s2P2Title: "에피소드 제목, 쇼노트, 대본 및 훅 생성기",
        s2P2Text: "모든 텍스트 생성과 문자열 포맷팅은 사용자의 기기에서 자바스크립트로 실행됩니다. 에피소드 주제나 게스트 이름은 서버 로그에 남지 않습니다.",
        s3Title: "3. 서드파티 추적 및 분석 도구",
        s3Text: "사용자 추적 스크립트, 크로스사이트 프로파일링, 광고 트래커를 사용하지 않습니다. 사용자의 작업 내용은 안전하게 보호됩니다.",
        s4Title: "4. 로컬 스토리지(localStorage) 사용 고지",
        s4Text: "추적용 쿠키는 사용하지 않습니다. 브라우저의 localStorage에 저장되는 유일한 정보는 다크/라이트 테마 설정값('theme' 키)뿐입니다.",
        s5Title: "5. 문의처",
        s5Text: "프라이버시 아키텍처에 관한 질문은 support@podstudiotools.com 또는 문의 페이지를 통해 보내주세요.",
      },
      terms: {
        s1Title: "1. 이용 약관 동의",
        s1Text: "podstudiotools.com(Pod Studio)에 접속하거나 서비스를 이용함으로써 귀하는 본 이용 약관에 동의하게 됩니다.",
        s2Title: "2. 무료 클라이언트 사이드 도구의 성격",
        s2Text: "Pod Studio는 독립 팟캐스트 크리에이터를 위한 무료 클라이언트 도구 모음입니다. 계정 생성, 로그인, 결제가 필요하지 않습니다.",
        s3Title: "3. 생성된 콘텐츠의 소유권",
        s3Text: "Pod Studio를 통해 생성된 모든 제목, 쇼노트, 대본, 타임스탬프는 100% 제작자에게 귀속됩니다. 당사는 어떠한 상업적 권리도 주장하지 않습니다.",
        s4Title: "4. 계산기 및 통계 추정치에 관한 면책",
        s4Text: "제공되는 계산기는 업계 표준 평균치를 기반으로 한 수학적 모델입니다. 이는 참고용 추정치이며 재정적 보증을 구성하지 않습니다.",
        s5Title: "5. 문의",
        s5Text: "질문이 있으시면 support@podstudiotools.com 또는 문의 페이지를 통해 문의해 주세요.",
      },
    },
    toolSteps: {
      clientMemoryBadge: "100% 클라이언트 로컬 메모리",
      specVerifiedBadge: "2026년 오디오 배포 규격 검증됨",
      step1Title: "01. 설정 및 입력",
      step1Desc: "에피소드 정보 입력, 커버 아트 드래그 또는 RSS 피드 링크를 입력합니다.",
      step2Title: "02. 로컬 처리",
      step2Desc: "모든 알고리즘은 검증된 공식과 결정론적 로직으로 브라우저 메모리 안에서 실행됩니다.",
      step3Title: "03. 내보내기 및 배포",
      step3Desc: "클릭 한 번으로 마크다운을 복사하거나 검증된 파일을 제작 파이프라인으로 다운로드하세요.",
      homeBreadcrumb: "홈",
    },
    commonToolUi: {
      copy: "복사",
      copied: "복사 완료!",
      copyAll: "전체 복사",
      exportTxt: "TXT 내보내기",
      download: "다운로드",
      clear: "초기화",
      generate: "생성하기",
      calculate: "계산하기",
      reset: "재설정",
    },
  },  it: {
    nav: {
      allTools: "Tutti i 18 Strumenti",
      ideation: "Ideazione",
      content: "Contenuto",
      technical: "Tecnico",
      growth: "Crescita & CPM",
      guides: "Guide",
      searchPlaceholder: "Cerca strumenti per podcast... (⌘K)",
      about: "Chi siamo",
      contact: "Contatti",
      privacy: "Privacy",
      terms: "Termini",
    },
    hero: {
      badge: "100% Gratuito · Esecuzione Locale · Nessun Accesso",
      titleStart: "Il Toolkit di Produzione per",
      titleHighlight: "Podcaster Professionisti",
      description:
        "18 strumenti deterministici client-side per conduttori, produttori e tecnici audio. Titoli ad alto click-through, feed RSS a prova di errore, timestamp precisi e calcolo della monetizzazione CPM.",
      primaryCta: "Esplora i 18 Strumenti",
      secondaryCta: "Calcola Ricavi Pubblicitari",
      clientSideNotice: "Funziona al 100% nella memoria del tuo browser. Audio e file non lasciano mai il tuo dispositivo.",
      trustPills: {
        privacy: "Nessun Invio in Cloud",
        formulas: "Formule CPM Standard IAB",
        free: "Sempre Gratuito e Aperto",
      },
    },
    categories: {
      all: "Tutti gli Strumenti",
      ideation: "Ideazione & Brand",
      ideationDesc: "Genera titoli virali per episodi, ganci di apertura, domande per interviste e nomi per lo show.",
      content: "Contenuto & Sceneggiatura",
      contentDesc: "Crea scalette per puntate, genera note d'episodio in markdown e script per intro.",
      technical: "Audio & Specifiche Tecniche",
      technicalDesc: "Valida feed RSS, verifica i requisiti di copertina per Apple/Spotify e formatta i timestamp.",
      growth: "Crescita & Monetizzazione",
      growthDesc: "Calcola i ricavi sponsor CPM, stima la crescita dei download e rispondi alle recensioni.",
    },
    toolsSection: {
      title: "Suite di Produzione Completa",
      subtitle: "Clicca su uno strumento per aprire l'area di lavoro. Nessuna registrazione richiesta.",
      launchTool: "Apri Strumento",
      freeBadge: "Gratuito",
      popularBadge: "Popolare",
      newBadge: "Nuovo",
      technicalBadge: "Standard",
    },
    toolDetail: {
      backToTools: "Torna a Tutti gli Strumenti",
      tableOfContents: "In questa pagina",
      howToUse: "Come Usare Questo Strumento",
      specifications: "Specifiche Tecniche & Parametri",
      faqs: "Domande Frequenti",
      relatedTools: "Strumenti Correlati",
      tryTool: "Apri Area di Lavoro",
    },
    footer: {
      tagline: "Suite di produzione gratuita e locale per creatori di podcast in tutto il mondo.",
      copyright: "Tutti i diritti riservati. Gratuito per creatori amatoriali e commerciali.",
      privacyBadge: "Privacy 100% Locale Garantita",
      linksTitle: "Strumenti di Produzione",
      categoriesTitle: "Categorie",
      legalTitle: "Standard e Privacy",
    },
    searchModal: {
      btnText: "Cerca strumenti...",
      prompt: "Digita per cercare tra i 18 strumenti, categorie e calcolatori...",
      noResults: "Nessuno strumento trovato per",
      shortcutHint: "Premi / o ⌘K ovunque",
      toolsIndexed: "18 strumenti indicizzati",
    },
    contactForm: {
      heading: "Componi Messaggio Diretto nel Browser",
      nameLabel: "Il Tuo Nome",
      namePlaceholder: "es. Marco",
      emailLabel: "La Tua Email",
      emailPlaceholder: "marco@esempio.it",
      subjectLabel: "Oggetto",
      messageLabel: "Messaggio",
      messagePlaceholder: "Condividi feedback, suggerimenti per strumenti o domande...",
      zeroLogNotice: "Nessun salvataggio in database. Si apre direttamente nel tuo programma di posta.",
      sendButton: "Invia Messaggio",
      directEmailTitle: "Email Diretta",
      directEmailDesc: "Per supporto generale, feedback sulle formule o domande:",
      responseNotice: "Risposta entro 24-48 ore lavorative.",
      subtitle: "Hai un suggerimento per un nuovo strumento, osservazioni sulle formule CPM o aggiornamenti sulle specifiche? Scrivici.",
    },
    aboutPage: {
      badge: "INFORMAZIONI SU POD STUDIO",
      whyTitle: "Perché Pod Studio",
      cta: "Esplora Tutti i 18 Strumenti",
    },
    legalPages: {
      lastUpdated: "Ultimo aggiornamento: 1 novembre 2026 • Data di efficacia: 1 novembre 2026",
      privacyBadge: "ARCHITETTURA ORIENTATA ALLA PRIVACY",
      termsBadge: "TERMINI DI SERVIZIO",
      exploreAllTools: "Esplora Tutti i 18 Strumenti",
      privacy: {
        s1Title: "1. Il Modello Client-Side",
        s1P1: "Pod Studio («noi» o «nostro») fornisce utility online gratuite per creatori di podcast su podstudiotools.com.",
        s1P2: "La nostra architettura si fonda su una promessa chiara: le tue idee creative e i tuoi file audio appartengono a te. A differenza dei servizi cloud che caricano trascrizioni su server remoti, Pod Studio esegue tutti i calcoli al 100% in locale nella memoria del tuo browser.",
        s2Title: "2. Esecuzione nella Memoria del Browser",
        s2P1Title: "Anteprima Copertina e Verifica Immagini",
        s2P1Text: "Quando carichi un'immagine di copertina, il file viene letto nella memoria temporanea del browser tramite l'API FileReader HTML5. Nessun dato viene trasmesso in rete. Chiudendo la scheda, la memoria viene azzerata.",
        s2P2Title: "Titoli di Episodi, Note, Scalette e Hook",
        s2P2Text: "Tutte le formule vengono eseguite in modo deterministico sul tuo dispositivo tramite JavaScript lato client. Nessun dato viene inviato a server.",
        s3Title: "3. Tracciamento e Cookie di Terze Parti",
        s3Text: "Non utilizziamo tracker invasivi, profilazione cross-site o pixel pubblicitari. Le tue sessioni restano strettamente riservate.",
        s4Title: "4. Informativa sull'Archiviazione Locale (localStorage)",
        s4Text: "Non usiamo cookie di tracciamento. L'unico valore salvato nel localStorage del browser è la preferenza di tema ('light' o 'dark') alla chiave 'theme'.",
        s5Title: "5. Domande e Contatti",
        s5Text: "Per richieste relative alla privacy, scrivi a support@podstudiotools.com o visita la nostra pagina Contatti.",
      },
      terms: {
        s1Title: "1. Accettazione dei Termini",
        s1Text: "Accedendo o utilizzando podstudiotools.com («Pod Studio»), accetti di essere vincolato da questi Termini di Servizio.",
        s2Title: "2. Natura di Utility Gratuita e Locale",
        s2Text: "Pod Studio è un toolkit gratuito lato client per podcaster indipendenti. Non sono richiesti account o pagamenti.",
        s3Title: "3. Proprietà dei Contenuti Generati",
        s3Text: "Tutti i titoli, le note dell'episodio o i timestamp generati ti appartengono al 100%. Non rivendichiamo alcun diritto d'autore sulle tue opere.",
        s4Title: "4. Calcolatori e Stime Indicative",
        s4Text: "I calcolatori forniscono modelli matematici basati su valori medi di settore (es. CPM standard). Tali valori sono stime indicative e non garanzie finanziarie.",
        s5Title: "5. Richieste",
        s5Text: "Domande? Scrivici a support@podstudiotools.com o consulta la nostra pagina Contatti.",
      },
    },
    toolSteps: {
      clientMemoryBadge: "Memoria 100% Lato Client",
      specVerifiedBadge: "Specifiche 2026 Verificate",
      step1Title: "01. Configura",
      step1Desc: "Inserisci i dati dell'episodio, carica l'immagine di copertina o inserisci l'URL del feed RSS.",
      step2Title: "02. Elaborazione Locale",
      step2Desc: "Tutti gli algoritmi vengono eseguiti nella memoria del browser con logica deterministica e formule verificate.",
      step3Title: "03. Esporta e Pubblica",
      step3Desc: "Copia in markdown con un solo clic o scarica i file verificati direttamente nel tuo flusso di produzione.",
      homeBreadcrumb: "Home",
    },
    commonToolUi: {
      copy: "Copia",
      copied: "Copiato!",
      copyAll: "Copia Tutto",
      exportTxt: "Esporta TXT",
      download: "Scarica",
      clear: "Cancella",
      generate: "Genera",
      calculate: "Calcola",
      reset: "Reimposta",
    },
  },
};
