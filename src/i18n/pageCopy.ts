import type { SupportedLocale } from "./languages";

/**
 * Page-level copy that used to be hard-coded in English inside .astro files.
 * Every locale must provide every key (enforced by the PageCopy type), so no
 * English leaks onto /es, /ja, /fr, /de, /pt, /ko or /it pages.
 *
 * Meta titles are kept at or under ~60 characters and meta descriptions at
 * roughly 120–160 characters (CJK: ~60–90 characters) so search snippets do
 * not get truncated.
 */
export interface PageCopy {
  meta: {
    homeTitle: string;
    homeDescription: string;
    toolsTitle: string;
    toolsDescription: string;
    guidesTitle: string;
    guidesDescription: string;
    aboutTitle: string;
    aboutDescription: string;
  };
  breadcrumbs: {
    home: string;
    tools: string;
    guides: string;
  };
  home: {
    toolsEyebrow: string;
    guidesEyebrow: string;
    guidesHeading: string;
    trustToolsSub: string;
    trustPrivacySub: string;
    trustFreeSub: string;
    trustSpecSub: string;
  };
  toolsIndex: {
    eyebrow: string;
    heading: string;
    intro: string;
  };
  guidesIndex: {
    eyebrow: string;
    heading: string;
    intro: string;
    readGuide: string;
  };
  toolPage: {
    privacyBadge: string;
    /** "{tool}" is replaced with the tool name */
    overviewHeading: string;
    stepsHeading: string;
    tipsHeading: string;
    /** "{tool}" is replaced with the tool name */
    openTool: string;
  };
  guidePage: {
    publishedLabel: string;
    relatedToolsHeading: string;
    faqHeading: string;
  };
  grid: {
    carousel: string;
    grid: string;
    carouselView: string;
    gridView: string;
    filterPlaceholder: string;
    inBrowser: string;
    noResults: string;
    clearFilters: string;
    toolsCarousel: string;
    toolSingular: string;
    toolPlural: string;
  };
  footer: {
    rights: string;
    selectLanguage: string;
  };
  about: {
    badge: string;
    heading: string;
    intro: string;
    privacyTitle: string;
    privacyText: string;
    freeTitle: string;
    freeText: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    howTitle: string;
    howItems: Array<{ title: string; text: string }>;
    cta: string;
  };
}

export const pageCopy: Record<SupportedLocale, PageCopy> = {
  en: {
    meta: {
      homeTitle: "Free Podcast Tools for Creators — No Sign-Up | Pod Studio",
      homeDescription:
        "20 free podcast tools that run in your browser: episode title and show notes generators, an RSS feed validator, a cover art checker and a CPM calculator.",
      toolsTitle: "All 20 Free Podcast Tools | Pod Studio",
      toolsDescription:
        "Browse every free Pod Studio tool for podcasters: title, name and show notes generators, RSS and cover art checkers, chapter markers and revenue calculators.",
      guidesTitle: "Podcasting Guides: CPM, Cover Art & Titles | Pod Studio",
      guidesDescription:
        "Practical podcasting guides: 2026 sponsorship CPM rates, Apple Podcasts and Spotify cover art specs, and proven formulas for clickable episode titles.",
      aboutTitle: "About Pod Studio — Free, Private Podcast Tools",
      aboutDescription:
        "Pod Studio builds free podcast tools that run entirely in your browser. No accounts, no uploads, no paywalls — just fast utilities for independent creators.",
    },
    breadcrumbs: { home: "Home", tools: "Tools", guides: "Guides" },
    home: {
      toolsEyebrow: "Creator tools",
      guidesEyebrow: "Guides",
      guidesHeading: "Podcasting guides & 2026 benchmarks",
      trustToolsSub: "Ideation to monetization",
      trustPrivacySub: "Nothing leaves your browser",
      trustFreeSub: "No sign-up required",
      trustSpecSub: "Apple & Spotify specs",
    },
    toolsIndex: {
      eyebrow: "20 free tools",
      heading: "Free podcast tools for every step of your show",
      intro:
        "Plan episodes, write titles and show notes, check your RSS feed and cover art, and forecast downloads and sponsorship income. Every tool is free, works without an account and runs entirely in your browser.",
    },
    guidesIndex: {
      eyebrow: "Guides",
      heading: "Podcasting guides",
      intro:
        "Practical, number-backed articles on sponsorship rates, directory artwork specs and writing episode titles people actually click. Each guide links to the free tool that puts it into practice.",
      readGuide: "Read guide",
    },
    toolPage: {
      privacyBadge: "Runs in your browser",
      overviewHeading: "What the {tool} does",
      stepsHeading: "How to use it",
      tipsHeading: "Tips for better results",
      openTool: "Open {tool}",
    },
    guidePage: {
      publishedLabel: "Published",
      relatedToolsHeading: "Put this guide into practice",
      faqHeading: "Frequently asked questions",
    },
    grid: {
      carousel: "Carousel",
      grid: "Grid",
      carouselView: "Carousel view",
      gridView: "Grid view",
      filterPlaceholder: "Filter tools...",
      inBrowser: "Runs in your browser",
      noResults: "No tools match your search.",
      clearFilters: "Clear filters",
      toolsCarousel: "Tools carousel",
      toolSingular: "tool",
      toolPlural: "tools",
    },
    footer: {
      rights: "Free podcast tools for independent creators.",
      selectLanguage: "Select language",
    },
    about: {
      badge: "About Pod Studio",
      heading: "Free, private tools for independent podcasters",
      intro:
        "Podcasting now reaches hundreds of millions of listeners, yet most creators still juggle expensive subscriptions, ad-heavy generators and messy spreadsheets. Pod Studio puts the everyday production jobs — titles, show notes, feed checks, artwork and revenue planning — into one free toolkit that runs in your browser.",
      privacyTitle: "Your work stays on your device",
      privacyText:
        "Episode ideas, unreleased interview notes and artwork never leave your computer. The tools run locally in your browser, so nothing you type is uploaded to our servers.",
      freeTitle: "Free, with no sign-up",
      freeText:
        "Every tool is free to use without an account, credit card or email address. Open a tool, get your result, copy it and get back to recording.",
      storyTitle: "Why we built Pod Studio",
      storyP1:
        "Independent podcasters spend hours on jobs that should take minutes: naming episodes, formatting show notes, checking whether a feed will pass Apple's review, or working out what to charge a sponsor.",
      storyP2:
        "Pod Studio brings those jobs together in one place, built on published directory specs and industry benchmarks, so every result is consistent, explainable and ready to paste into your hosting platform.",
      howTitle: "How Pod Studio is different",
      howItems: [
        {
          title: "Specs, not guesswork",
          text: "Cover art, RSS and chapter tools check against the published Apple Podcasts, Spotify and RSS 2.0 requirements.",
        },
        {
          title: "Predictable output",
          text: "Generators use proven formulas and templates, so the same input gives the same result every time — easy to tweak, easy to trust.",
        },
        {
          title: "Built for 8 languages",
          text: "Every tool page, guide and FAQ is available in English, Spanish, Japanese, French, German, Portuguese, Korean and Italian.",
        },
      ],
      cta: "Explore all 20 free tools",
    },
  },

  es: {
    meta: {
      homeTitle: "Herramientas Gratis para Podcasts, Sin Registro | Pod Studio",
      homeDescription:
        "20 herramientas gratuitas para podcasts en tu navegador: generadores de títulos y notas de episodio, validador de feed RSS, revisor de portadas y calculadora CPM.",
      toolsTitle: "Las 20 Herramientas Gratis para Podcast | Pod Studio",
      toolsDescription:
        "Herramientas gratis de Pod Studio: generadores de títulos, nombres y notas de episodio, validadores de RSS y portada, capítulos y calculadoras de ingresos.",
      guidesTitle: "Guías de Podcasting: CPM, Portadas y Títulos | Pod Studio",
      guidesDescription:
        "Guías prácticas de podcasting: tarifas CPM de patrocinio 2026, especificaciones de portada para Apple Podcasts y Spotify y fórmulas de títulos que funcionan.",
      aboutTitle: "Sobre Pod Studio — Herramientas de Podcast Gratis",
      aboutDescription:
        "Pod Studio crea herramientas gratuitas para podcasts que funcionan en tu navegador. Sin cuentas, sin subidas y sin muros de pago para creadores independientes.",
    },
    breadcrumbs: { home: "Inicio", tools: "Herramientas", guides: "Guías" },
    home: {
      toolsEyebrow: "Herramientas para creadores",
      guidesEyebrow: "Guías",
      guidesHeading: "Guías de podcasting y referencias 2026",
      trustToolsSub: "De la idea a la monetización",
      trustPrivacySub: "Nada sale de tu navegador",
      trustFreeSub: "Sin registro",
      trustSpecSub: "Especificaciones de Apple y Spotify",
    },
    toolsIndex: {
      eyebrow: "20 herramientas gratis",
      heading: "Herramientas gratis para cada paso de tu podcast",
      intro:
        "Planifica episodios, escribe títulos y notas de episodio, revisa tu feed RSS y tu portada, y proyecta descargas e ingresos por patrocinio. Todas las herramientas son gratuitas, no requieren cuenta y se ejecutan por completo en tu navegador.",
    },
    guidesIndex: {
      eyebrow: "Guías",
      heading: "Guías de podcasting",
      intro:
        "Artículos prácticos y basados en datos sobre tarifas de patrocinio, especificaciones de portadas y cómo escribir títulos de episodio que la gente realmente quiere escuchar. Cada guía enlaza con la herramienta gratuita para aplicarla.",
      readGuide: "Leer guía",
    },
    toolPage: {
      privacyBadge: "Funciona en tu navegador",
      overviewHeading: "{tool}: qué hace",
      stepsHeading: "Cómo usarlo",
      tipsHeading: "Consejos para mejores resultados",
      openTool: "Abrir {tool}",
    },
    guidePage: {
      publishedLabel: "Publicado",
      relatedToolsHeading: "Pon esta guía en práctica",
      faqHeading: "Preguntas frecuentes",
    },
    grid: {
      carousel: "Carrusel",
      grid: "Cuadrícula",
      carouselView: "Vista de carrusel",
      gridView: "Vista de cuadrícula",
      filterPlaceholder: "Filtrar herramientas...",
      inBrowser: "Funciona en tu navegador",
      noResults: "Ninguna herramienta coincide con tu búsqueda.",
      clearFilters: "Borrar filtros",
      toolsCarousel: "Carrusel de herramientas",
      toolSingular: "herramienta",
      toolPlural: "herramientas",
    },
    footer: {
      rights: "Herramientas gratuitas para podcasters independientes.",
      selectLanguage: "Seleccionar idioma",
    },
    about: {
      badge: "Sobre Pod Studio",
      heading: "Herramientas gratuitas y privadas para podcasters independientes",
      intro:
        "El podcasting llega hoy a cientos de millones de oyentes, pero la mayoría de los creadores todavía combina suscripciones caras, generadores llenos de anuncios y hojas de cálculo desordenadas. Pod Studio reúne las tareas diarias de producción —títulos, notas de episodio, revisión del feed, portada y planificación de ingresos— en un kit gratuito que funciona en tu navegador.",
      privacyTitle: "Tu trabajo se queda en tu dispositivo",
      privacyText:
        "Las ideas de episodios, las notas de entrevistas inéditas y tu portada nunca salen de tu ordenador. Las herramientas se ejecutan localmente en tu navegador, así que nada de lo que escribes se sube a nuestros servidores.",
      freeTitle: "Gratis y sin registro",
      freeText:
        "Todas las herramientas son gratuitas y no piden cuenta, tarjeta ni correo electrónico. Abre una herramienta, obtén tu resultado, cópialo y vuelve a grabar.",
      storyTitle: "Por qué creamos Pod Studio",
      storyP1:
        "Los podcasters independientes dedican horas a tareas que deberían llevar minutos: titular episodios, dar formato a las notas, comprobar si un feed pasará la revisión de Apple o calcular cuánto cobrar a un patrocinador.",
      storyP2:
        "Pod Studio reúne esas tareas en un solo lugar, basado en especificaciones públicas de los directorios y en referencias del sector, para que cada resultado sea coherente, explicable y listo para pegar en tu plataforma de hosting.",
      howTitle: "En qué se diferencia Pod Studio",
      howItems: [
        {
          title: "Especificaciones, no suposiciones",
          text: "Las herramientas de portada, RSS y capítulos comprueban los requisitos publicados por Apple Podcasts, Spotify y RSS 2.0.",
        },
        {
          title: "Resultados predecibles",
          text: "Los generadores usan fórmulas y plantillas probadas: la misma entrada da siempre el mismo resultado, fácil de ajustar y de confiar.",
        },
        {
          title: "Disponible en 8 idiomas",
          text: "Cada página de herramienta, guía y FAQ está en inglés, español, japonés, francés, alemán, portugués, coreano e italiano.",
        },
      ],
      cta: "Ver las 20 herramientas gratis",
    },
  },

  ja: {
    meta: {
      homeTitle: "無料ポッドキャスト制作ツール20選｜登録不要 | Pod Studio",
      homeDescription:
        "ブラウザで使える無料ポッドキャストツール20種類。エピソードタイトル・ショーノート生成、RSSフィード検証、カバーアート確認、CPM収益計算まで登録不要。",
      toolsTitle: "無料ポッドキャストツール全20種一覧 | Pod Studio",
      toolsDescription:
        "Pod Studioの無料ポッドキャストツール一覧。タイトル・番組名・ショーノート生成、RSSとカバーアートのチェック、チャプター作成、収益シミュレーターなど。",
      guidesTitle: "ポッドキャスト運営ガイド：CPM・カバーアート・タイトル | Pod Studio",
      guidesDescription:
        "ポッドキャスト運営の実践ガイド。2026年のスポンサーCPM相場、Apple Podcasts・Spotifyのカバーアート仕様、クリックされるタイトルの作り方を解説。",
      aboutTitle: "Pod Studioについて｜無料・安全なポッドキャストツール",
      aboutDescription:
        "Pod Studioはブラウザだけで動く無料のポッドキャストツールを提供しています。アカウント登録もアップロードも不要。個人クリエイターのための高速ツールです。",
    },
    breadcrumbs: { home: "ホーム", tools: "ツール", guides: "ガイド" },
    home: {
      toolsEyebrow: "クリエイター向けツール",
      guidesEyebrow: "ガイド",
      guidesHeading: "ポッドキャスト運営ガイドと2026年の業界データ",
      trustToolsSub: "企画から収益化まで",
      trustPrivacySub: "データはブラウザの外に出ません",
      trustFreeSub: "登録不要",
      trustSpecSub: "Apple・Spotify仕様に準拠",
    },
    toolsIndex: {
      eyebrow: "無料ツール20種",
      heading: "番組づくりのすべての工程に使える無料ポッドキャストツール",
      intro:
        "エピソードの構成づくり、タイトルやショーノートの作成、RSSフィードやカバーアートのチェック、再生数とスポンサー収益の予測まで。すべて無料・登録不要で、ブラウザ内だけで動作します。",
    },
    guidesIndex: {
      eyebrow: "ガイド",
      heading: "ポッドキャスト運営ガイド",
      intro:
        "スポンサー料金の相場、配信ディレクトリのアートワーク仕様、思わずクリックされるエピソードタイトルの書き方など、データに基づいた実践的な記事です。各ガイドから、すぐに試せる無料ツールにアクセスできます。",
      readGuide: "ガイドを読む",
    },
    toolPage: {
      privacyBadge: "ブラウザ内で動作",
      overviewHeading: "{tool}でできること",
      stepsHeading: "使い方",
      tipsHeading: "より良い結果を出すコツ",
      openTool: "{tool}を開く",
    },
    guidePage: {
      publishedLabel: "公開日",
      relatedToolsHeading: "このガイドを実践する",
      faqHeading: "よくある質問",
    },
    grid: {
      carousel: "カルーセル",
      grid: "グリッド",
      carouselView: "カルーセル表示",
      gridView: "グリッド表示",
      filterPlaceholder: "ツールを絞り込む...",
      inBrowser: "ブラウザ内で動作",
      noResults: "検索に一致するツールがありません。",
      clearFilters: "フィルターをクリア",
      toolsCarousel: "ツールカルーセル",
      toolSingular: "ツール",
      toolPlural: "ツール",
    },
    footer: {
      rights: "個人ポッドキャスターのための無料ツール。",
      selectLanguage: "言語を選択",
    },
    about: {
      badge: "Pod Studioについて",
      heading: "個人ポッドキャスターのための、無料で安全な制作ツール",
      intro:
        "ポッドキャストは今や数億人のリスナーに届くメディアです。それでも多くのクリエイターは、高額なサブスクリプション、広告だらけのジェネレーター、複雑なスプレッドシートを使い分けています。Pod Studioは、タイトル・ショーノート・フィードチェック・アートワーク・収益計画といった日々の制作作業を、ブラウザで動く無料ツールキットにまとめました。",
      privacyTitle: "データはあなたの端末から出ません",
      privacyText:
        "エピソードのアイデアや未公開のインタビューメモ、アートワークがパソコンの外に送られることはありません。ツールはブラウザ内でローカルに動作するため、入力内容がサーバーにアップロードされることはありません。",
      freeTitle: "無料・登録不要",
      freeText:
        "すべてのツールは、アカウントやクレジットカード、メールアドレスなしで無料で使えます。ツールを開いて結果をコピーしたら、すぐに収録に戻れます。",
      storyTitle: "Pod Studioをつくった理由",
      storyP1:
        "個人ポッドキャスターは、本来なら数分で終わるはずの作業に何時間も費やしています。エピソード名を考える、ショーノートを整える、フィードがAppleの審査を通るか確認する、スポンサーにいくら請求するか計算する——。",
      storyP2:
        "Pod Studioはこうした作業をひとつにまとめ、配信ディレクトリの公式仕様と業界データに基づいて設計しています。だからこそ結果は一貫していて理由が明確、そのままホスティングサービスに貼り付けられます。",
      howTitle: "Pod Studioの特長",
      howItems: [
        {
          title: "推測ではなく公式仕様",
          text: "カバーアート・RSS・チャプターのツールは、Apple Podcasts、Spotify、RSS 2.0の公開要件に照らしてチェックします。",
        },
        {
          title: "安定した出力",
          text: "ジェネレーターは実績のある型とテンプレートを使うため、同じ入力なら毎回同じ結果に。調整しやすく、信頼できます。",
        },
        {
          title: "8言語に対応",
          text: "すべてのツールページ・ガイド・FAQを、英語・スペイン語・日本語・フランス語・ドイツ語・ポルトガル語・韓国語・イタリア語で提供しています。",
        },
      ],
      cta: "無料ツール20種をすべて見る",
    },
  },

  fr: {
    meta: {
      homeTitle: "Outils Podcast Gratuits, Sans Inscription | Pod Studio",
      homeDescription:
        "20 outils podcast gratuits dans votre navigateur : générateurs de titres et de notes d'épisode, validateur de flux RSS, vérificateur de pochette et calculateur CPM.",
      toolsTitle: "Les 20 Outils Podcast Gratuits | Pod Studio",
      toolsDescription:
        "Tous les outils gratuits de Pod Studio : générateurs de titres, de noms et de notes d'épisode, vérificateurs RSS et pochette, chapitres et calculateurs de revenus.",
      guidesTitle: "Guides Podcast : CPM, Pochettes et Titres | Pod Studio",
      guidesDescription:
        "Guides pratiques pour podcasteurs : tarifs CPM de sponsoring 2026, spécifications de pochette Apple Podcasts et Spotify, et formules de titres qui fonctionnent.",
      aboutTitle: "À propos de Pod Studio — Outils Podcast Gratuits",
      aboutDescription:
        "Pod Studio conçoit des outils podcast gratuits qui fonctionnent dans votre navigateur. Sans compte, sans envoi de fichiers, sans abonnement.",
    },
    breadcrumbs: { home: "Accueil", tools: "Outils", guides: "Guides" },
    home: {
      toolsEyebrow: "Outils pour créateurs",
      guidesEyebrow: "Guides",
      guidesHeading: "Guides podcast et repères 2026",
      trustToolsSub: "De l'idée à la monétisation",
      trustPrivacySub: "Rien ne quitte votre navigateur",
      trustFreeSub: "Sans inscription",
      trustSpecSub: "Normes Apple et Spotify",
    },
    toolsIndex: {
      eyebrow: "20 outils gratuits",
      heading: "Des outils podcast gratuits pour chaque étape de votre émission",
      intro:
        "Planifiez vos épisodes, rédigez titres et notes d'épisode, vérifiez votre flux RSS et votre pochette, et prévoyez vos écoutes et revenus de sponsoring. Chaque outil est gratuit, sans compte, et fonctionne entièrement dans votre navigateur.",
    },
    guidesIndex: {
      eyebrow: "Guides",
      heading: "Guides pour podcasteurs",
      intro:
        "Des articles pratiques et chiffrés sur les tarifs de sponsoring, les spécifications de pochette des annuaires et l'écriture de titres d'épisode qui donnent envie d'écouter. Chaque guide renvoie vers l'outil gratuit pour passer à l'action.",
      readGuide: "Lire le guide",
    },
    toolPage: {
      privacyBadge: "Fonctionne dans votre navigateur",
      overviewHeading: "{tool} : à quoi sert cet outil",
      stepsHeading: "Comment l'utiliser",
      tipsHeading: "Conseils pour de meilleurs résultats",
      openTool: "Ouvrir {tool}",
    },
    guidePage: {
      publishedLabel: "Publié le",
      relatedToolsHeading: "Mettez ce guide en pratique",
      faqHeading: "Questions fréquentes",
    },
    grid: {
      carousel: "Carrousel",
      grid: "Grille",
      carouselView: "Vue carrousel",
      gridView: "Vue grille",
      filterPlaceholder: "Filtrer les outils...",
      inBrowser: "Fonctionne dans votre navigateur",
      noResults: "Aucun outil ne correspond à votre recherche.",
      clearFilters: "Effacer les filtres",
      toolsCarousel: "Carrousel des outils",
      toolSingular: "outil",
      toolPlural: "outils",
    },
    footer: {
      rights: "Outils podcast gratuits pour créateurs indépendants.",
      selectLanguage: "Choisir la langue",
    },
    about: {
      badge: "À propos de Pod Studio",
      heading: "Des outils gratuits et privés pour les podcasteurs indépendants",
      intro:
        "Le podcast touche aujourd'hui des centaines de millions d'auditeurs, mais la plupart des créateurs jonglent encore entre abonnements coûteux, générateurs saturés de publicités et tableurs compliqués. Pod Studio réunit les tâches de production du quotidien — titres, notes d'épisode, vérification du flux, pochette et prévision des revenus — dans une boîte à outils gratuite qui fonctionne dans votre navigateur.",
      privacyTitle: "Votre travail reste sur votre appareil",
      privacyText:
        "Vos idées d'épisodes, vos notes d'interviews inédites et votre pochette ne quittent jamais votre ordinateur. Les outils fonctionnent localement dans votre navigateur : rien de ce que vous saisissez n'est envoyé sur nos serveurs.",
      freeTitle: "Gratuit, sans inscription",
      freeText:
        "Tous les outils sont gratuits, sans compte, carte bancaire ni adresse e-mail. Ouvrez un outil, obtenez votre résultat, copiez-le et retournez enregistrer.",
      storyTitle: "Pourquoi nous avons créé Pod Studio",
      storyP1:
        "Les podcasteurs indépendants passent des heures sur des tâches qui devraient prendre quelques minutes : titrer un épisode, mettre en forme les notes, vérifier qu'un flux passera la validation d'Apple ou calculer le tarif à proposer à un sponsor.",
      storyP2:
        "Pod Studio rassemble ces tâches au même endroit, en s'appuyant sur les spécifications publiées des annuaires et sur les repères du secteur, pour des résultats cohérents, explicables et prêts à coller dans votre plateforme d'hébergement.",
      howTitle: "Ce qui rend Pod Studio différent",
      howItems: [
        {
          title: "Des normes, pas des suppositions",
          text: "Les outils de pochette, RSS et chapitres vérifient les exigences publiées par Apple Podcasts, Spotify et RSS 2.0.",
        },
        {
          title: "Des résultats prévisibles",
          text: "Les générateurs utilisent des formules et modèles éprouvés : la même saisie donne toujours le même résultat, facile à ajuster et fiable.",
        },
        {
          title: "Disponible en 8 langues",
          text: "Chaque page d'outil, guide et FAQ existe en anglais, espagnol, japonais, français, allemand, portugais, coréen et italien.",
        },
      ],
      cta: "Découvrir les 20 outils gratuits",
    },
  },

  de: {
    meta: {
      homeTitle: "Kostenlose Podcast-Tools ohne Anmeldung | Pod Studio",
      homeDescription:
        "20 kostenlose Podcast-Tools im Browser: Generatoren für Episodentitel und Shownotes, RSS-Feed-Validator, Cover-Prüfung und CPM-Rechner – ganz ohne Anmeldung.",
      toolsTitle: "Alle 20 kostenlosen Podcast-Tools | Pod Studio",
      toolsDescription:
        "Alle kostenlosen Tools von Pod Studio: Generatoren für Titel, Namen und Shownotes, RSS- und Cover-Prüfung, Kapitelmarken sowie Rechner für Reichweite und Einnahmen.",
      guidesTitle: "Podcast-Ratgeber: CPM, Cover & Titel | Pod Studio",
      guidesDescription:
        "Praxisnahe Podcast-Ratgeber: Sponsoring-CPM-Preise 2026, Cover-Vorgaben für Apple Podcasts und Spotify sowie bewährte Formeln für klickstarke Episodentitel.",
      aboutTitle: "Über Pod Studio – kostenlose Podcast-Tools",
      aboutDescription:
        "Pod Studio entwickelt kostenlose Podcast-Tools, die komplett im Browser laufen. Keine Konten, keine Uploads, keine Paywall – für unabhängige Creator.",
    },
    breadcrumbs: { home: "Start", tools: "Tools", guides: "Ratgeber" },
    home: {
      toolsEyebrow: "Tools für Creator",
      guidesEyebrow: "Ratgeber",
      guidesHeading: "Podcast-Ratgeber & Benchmarks 2026",
      trustToolsSub: "Von der Idee bis zur Monetarisierung",
      trustPrivacySub: "Nichts verlässt Ihren Browser",
      trustFreeSub: "Keine Anmeldung nötig",
      trustSpecSub: "Apple- & Spotify-Vorgaben",
    },
    toolsIndex: {
      eyebrow: "20 kostenlose Tools",
      heading: "Kostenlose Podcast-Tools für jeden Schritt Ihrer Show",
      intro:
        "Episoden planen, Titel und Shownotes schreiben, RSS-Feed und Cover prüfen sowie Downloads und Sponsoring-Einnahmen prognostizieren. Jedes Tool ist kostenlos, braucht kein Konto und läuft vollständig in Ihrem Browser.",
    },
    guidesIndex: {
      eyebrow: "Ratgeber",
      heading: "Podcast-Ratgeber",
      intro:
        "Praxisnahe Artikel mit konkreten Zahlen zu Sponsoring-Preisen, Cover-Vorgaben der Verzeichnisse und Episodentiteln, die wirklich angeklickt werden. Jeder Ratgeber verlinkt auf das passende kostenlose Tool.",
      readGuide: "Ratgeber lesen",
    },
    toolPage: {
      privacyBadge: "Läuft in Ihrem Browser",
      overviewHeading: "{tool}: Funktionen im Überblick",
      stepsHeading: "So funktioniert's",
      tipsHeading: "Tipps für bessere Ergebnisse",
      openTool: "{tool} öffnen",
    },
    guidePage: {
      publishedLabel: "Veröffentlicht",
      relatedToolsHeading: "Ratgeber direkt umsetzen",
      faqHeading: "Häufige Fragen",
    },
    grid: {
      carousel: "Karussell",
      grid: "Raster",
      carouselView: "Karussell-Ansicht",
      gridView: "Raster-Ansicht",
      filterPlaceholder: "Tools filtern...",
      inBrowser: "Läuft im Browser",
      noResults: "Keine Tools passen zu Ihrer Suche.",
      clearFilters: "Filter zurücksetzen",
      toolsCarousel: "Tool-Karussell",
      toolSingular: "Tool",
      toolPlural: "Tools",
    },
    footer: {
      rights: "Kostenlose Podcast-Tools für unabhängige Creator.",
      selectLanguage: "Sprache wählen",
    },
    about: {
      badge: "Über Pod Studio",
      heading: "Kostenlose, private Tools für unabhängige Podcaster",
      intro:
        "Podcasts erreichen heute Hunderte Millionen Hörer – trotzdem jonglieren die meisten Creator noch mit teuren Abos, werbelastigen Generatoren und unübersichtlichen Tabellen. Pod Studio bündelt die täglichen Produktionsaufgaben – Titel, Shownotes, Feed-Prüfung, Cover und Einnahmenplanung – in einem kostenlosen Toolkit, das in Ihrem Browser läuft.",
      privacyTitle: "Ihre Arbeit bleibt auf Ihrem Gerät",
      privacyText:
        "Episodenideen, unveröffentlichte Interviewnotizen und Cover verlassen nie Ihren Computer. Die Tools laufen lokal im Browser, daher wird nichts, was Sie eingeben, auf unsere Server hochgeladen.",
      freeTitle: "Kostenlos, ohne Anmeldung",
      freeText:
        "Alle Tools sind kostenlos – ohne Konto, Kreditkarte oder E-Mail-Adresse. Tool öffnen, Ergebnis kopieren und zurück ans Mikrofon.",
      storyTitle: "Warum wir Pod Studio gebaut haben",
      storyP1:
        "Unabhängige Podcaster verbringen Stunden mit Aufgaben, die Minuten dauern sollten: Episoden benennen, Shownotes formatieren, prüfen, ob ein Feed die Apple-Prüfung besteht, oder ausrechnen, was man einem Sponsor berechnen kann.",
      storyP2:
        "Pod Studio vereint diese Aufgaben an einem Ort – auf Basis der veröffentlichten Verzeichnis-Vorgaben und Branchen-Benchmarks. So ist jedes Ergebnis konsistent, nachvollziehbar und bereit zum Einfügen bei Ihrem Hoster.",
      howTitle: "Was Pod Studio anders macht",
      howItems: [
        {
          title: "Vorgaben statt Vermutungen",
          text: "Cover-, RSS- und Kapitel-Tools prüfen gegen die veröffentlichten Anforderungen von Apple Podcasts, Spotify und RSS 2.0.",
        },
        {
          title: "Verlässliche Ergebnisse",
          text: "Die Generatoren nutzen bewährte Formeln und Vorlagen – gleiche Eingabe, gleiches Ergebnis. Leicht anzupassen, leicht zu vertrauen.",
        },
        {
          title: "In 8 Sprachen",
          text: "Jede Tool-Seite, jeder Ratgeber und jede FAQ gibt es auf Englisch, Spanisch, Japanisch, Französisch, Deutsch, Portugiesisch, Koreanisch und Italienisch.",
        },
      ],
      cta: "Alle 20 kostenlosen Tools ansehen",
    },
  },

  pt: {
    meta: {
      homeTitle: "Ferramentas Grátis para Podcast, Sem Cadastro | Pod Studio",
      homeDescription:
        "20 ferramentas grátis para podcast no navegador: geradores de títulos e notas de episódio, validador de feed RSS, verificador de capa e calculadora de CPM.",
      toolsTitle: "As 20 Ferramentas Grátis para Podcast | Pod Studio",
      toolsDescription:
        "Todas as ferramentas gratuitas do Pod Studio: geradores de títulos, nomes e notas de episódio, validadores de RSS e capa, capítulos e calculadoras de receita.",
      guidesTitle: "Guias de Podcast: CPM, Capas e Títulos | Pod Studio",
      guidesDescription:
        "Guias práticos para podcasters: valores de CPM de patrocínio em 2026, especificações de capa do Apple Podcasts e Spotify e fórmulas de títulos que funcionam.",
      aboutTitle: "Sobre o Pod Studio — Ferramentas Grátis de Podcast",
      aboutDescription:
        "O Pod Studio cria ferramentas gratuitas de podcast que rodam no seu navegador. Sem conta, sem upload e sem paywall para criadores independentes.",
    },
    breadcrumbs: { home: "Início", tools: "Ferramentas", guides: "Guias" },
    home: {
      toolsEyebrow: "Ferramentas para criadores",
      guidesEyebrow: "Guias",
      guidesHeading: "Guias de podcast e referências de 2026",
      trustToolsSub: "Da ideia à monetização",
      trustPrivacySub: "Nada sai do seu navegador",
      trustFreeSub: "Sem cadastro",
      trustSpecSub: "Padrões Apple e Spotify",
    },
    toolsIndex: {
      eyebrow: "20 ferramentas grátis",
      heading: "Ferramentas grátis para cada etapa do seu podcast",
      intro:
        "Planeje episódios, escreva títulos e notas de episódio, verifique seu feed RSS e sua capa e projete downloads e receita de patrocínio. Todas as ferramentas são gratuitas, dispensam conta e rodam inteiramente no seu navegador.",
    },
    guidesIndex: {
      eyebrow: "Guias",
      heading: "Guias de podcast",
      intro:
        "Artigos práticos e baseados em dados sobre valores de patrocínio, especificações de capa dos diretórios e como escrever títulos de episódio que as pessoas realmente clicam. Cada guia leva à ferramenta gratuita para colocar tudo em prática.",
      readGuide: "Ler guia",
    },
    toolPage: {
      privacyBadge: "Roda no seu navegador",
      overviewHeading: "{tool}: o que faz",
      stepsHeading: "Como usar",
      tipsHeading: "Dicas para melhores resultados",
      openTool: "Abrir {tool}",
    },
    guidePage: {
      publishedLabel: "Publicado em",
      relatedToolsHeading: "Coloque este guia em prática",
      faqHeading: "Perguntas frequentes",
    },
    grid: {
      carousel: "Carrossel",
      grid: "Grade",
      carouselView: "Visualização em carrossel",
      gridView: "Visualização em grade",
      filterPlaceholder: "Filtrar ferramentas...",
      inBrowser: "Roda no navegador",
      noResults: "Nenhuma ferramenta corresponde à sua busca.",
      clearFilters: "Limpar filtros",
      toolsCarousel: "Carrossel de ferramentas",
      toolSingular: "ferramenta",
      toolPlural: "ferramentas",
    },
    footer: {
      rights: "Ferramentas grátis para podcasters independentes.",
      selectLanguage: "Selecionar idioma",
    },
    about: {
      badge: "Sobre o Pod Studio",
      heading: "Ferramentas gratuitas e privadas para podcasters independentes",
      intro:
        "O podcast já alcança centenas de milhões de ouvintes, mas a maioria dos criadores ainda se divide entre assinaturas caras, geradores cheios de anúncios e planilhas confusas. O Pod Studio reúne as tarefas diárias de produção — títulos, notas de episódio, verificação do feed, capa e planejamento de receita — em um kit gratuito que roda no seu navegador.",
      privacyTitle: "Seu trabalho fica no seu dispositivo",
      privacyText:
        "Ideias de episódios, anotações de entrevistas inéditas e sua capa nunca saem do seu computador. As ferramentas rodam localmente no navegador, então nada do que você digita é enviado aos nossos servidores.",
      freeTitle: "Grátis e sem cadastro",
      freeText:
        "Todas as ferramentas são gratuitas, sem conta, cartão de crédito ou e-mail. Abra uma ferramenta, pegue seu resultado, copie e volte a gravar.",
      storyTitle: "Por que criamos o Pod Studio",
      storyP1:
        "Podcasters independentes passam horas em tarefas que deveriam levar minutos: dar nome aos episódios, formatar notas, verificar se o feed vai passar na revisão da Apple ou calcular quanto cobrar de um patrocinador.",
      storyP2:
        "O Pod Studio junta essas tarefas em um só lugar, com base nas especificações publicadas pelos diretórios e em referências do setor, para que cada resultado seja consistente, explicável e pronto para colar na sua plataforma de hospedagem.",
      howTitle: "O que torna o Pod Studio diferente",
      howItems: [
        {
          title: "Especificações, não achismos",
          text: "As ferramentas de capa, RSS e capítulos verificam os requisitos publicados pelo Apple Podcasts, Spotify e RSS 2.0.",
        },
        {
          title: "Resultados previsíveis",
          text: "Os geradores usam fórmulas e modelos testados: a mesma entrada sempre gera o mesmo resultado, fácil de ajustar e confiável.",
        },
        {
          title: "Disponível em 8 idiomas",
          text: "Cada página de ferramenta, guia e FAQ está em inglês, espanhol, japonês, francês, alemão, português, coreano e italiano.",
        },
      ],
      cta: "Ver as 20 ferramentas grátis",
    },
  },

  ko: {
    meta: {
      homeTitle: "무료 팟캐스트 제작 도구 20종 · 가입 불필요 | Pod Studio",
      homeDescription:
        "브라우저에서 바로 쓰는 무료 팟캐스트 도구 20종. 에피소드 제목·쇼노트 생성기, RSS 피드 검사기, 커버 아트 확인, CPM 수익 계산기를 가입 없이 사용하세요.",
      toolsTitle: "무료 팟캐스트 도구 20종 전체 보기 | Pod Studio",
      toolsDescription:
        "Pod Studio 무료 팟캐스트 도구 모음. 제목·채널명·쇼노트 생성기, RSS·커버 아트 검사, 챕터 마커, 다운로드·수익 계산기까지 한곳에서 사용하세요.",
      guidesTitle: "팟캐스트 가이드: CPM·커버 아트·제목 | Pod Studio",
      guidesDescription:
        "팟캐스터를 위한 실전 가이드. 2026년 스폰서 CPM 단가, Apple Podcasts·Spotify 커버 아트 규격, 클릭을 부르는 에피소드 제목 공식을 정리했습니다.",
      aboutTitle: "Pod Studio 소개 | 무료·안전한 팟캐스트 도구",
      aboutDescription:
        "Pod Studio는 브라우저에서만 동작하는 무료 팟캐스트 도구를 만듭니다. 계정, 업로드, 유료 결제 없이 독립 크리에이터를 위한 빠른 도구를 제공합니다.",
    },
    breadcrumbs: { home: "홈", tools: "도구", guides: "가이드" },
    home: {
      toolsEyebrow: "크리에이터 도구",
      guidesEyebrow: "가이드",
      guidesHeading: "팟캐스트 가이드와 2026 벤치마크",
      trustToolsSub: "기획부터 수익화까지",
      trustPrivacySub: "데이터가 브라우저 밖으로 나가지 않음",
      trustFreeSub: "회원가입 불필요",
      trustSpecSub: "Apple·Spotify 규격 준수",
    },
    toolsIndex: {
      eyebrow: "무료 도구 20종",
      heading: "팟캐스트 제작 전 과정을 위한 무료 도구",
      intro:
        "에피소드 구성, 제목과 쇼노트 작성, RSS 피드와 커버 아트 점검, 다운로드와 스폰서 수익 예측까지. 모든 도구는 무료이며 계정 없이 브라우저 안에서만 동작합니다.",
    },
    guidesIndex: {
      eyebrow: "가이드",
      heading: "팟캐스트 가이드",
      intro:
        "스폰서 단가, 플랫폼별 커버 아트 규격, 실제로 클릭되는 에피소드 제목 작성법 등 데이터 기반의 실전 글을 모았습니다. 각 가이드에서 바로 활용할 수 있는 무료 도구로 이동할 수 있습니다.",
      readGuide: "가이드 읽기",
    },
    toolPage: {
      privacyBadge: "브라우저에서 실행",
      overviewHeading: "{tool}로 할 수 있는 일",
      stepsHeading: "사용 방법",
      tipsHeading: "더 좋은 결과를 위한 팁",
      openTool: "{tool} 열기",
    },
    guidePage: {
      publishedLabel: "게시일",
      relatedToolsHeading: "이 가이드를 바로 실천하기",
      faqHeading: "자주 묻는 질문",
    },
    grid: {
      carousel: "캐러셀",
      grid: "그리드",
      carouselView: "캐러셀 보기",
      gridView: "그리드 보기",
      filterPlaceholder: "도구 검색...",
      inBrowser: "브라우저에서 실행",
      noResults: "검색과 일치하는 도구가 없습니다.",
      clearFilters: "필터 초기화",
      toolsCarousel: "도구 캐러셀",
      toolSingular: "개 도구",
      toolPlural: "개 도구",
    },
    footer: {
      rights: "독립 팟캐스터를 위한 무료 도구.",
      selectLanguage: "언어 선택",
    },
    about: {
      badge: "Pod Studio 소개",
      heading: "독립 팟캐스터를 위한 무료·프라이버시 중심 도구",
      intro:
        "팟캐스트는 이제 수억 명의 청취자에게 닿고 있지만, 대부분의 크리에이터는 여전히 비싼 구독 서비스와 광고투성이 생성기, 복잡한 스프레드시트를 오가며 작업합니다. Pod Studio는 제목, 쇼노트, 피드 점검, 커버 아트, 수익 계획 같은 일상적인 제작 작업을 브라우저에서 동작하는 무료 툴킷 하나로 모았습니다.",
      privacyTitle: "작업 내용은 내 기기에만 남습니다",
      privacyText:
        "에피소드 아이디어, 공개 전 인터뷰 메모, 커버 아트는 컴퓨터 밖으로 나가지 않습니다. 모든 도구가 브라우저에서 로컬로 실행되므로 입력한 내용이 서버로 업로드되지 않습니다.",
      freeTitle: "무료, 가입 불필요",
      freeText:
        "모든 도구는 계정, 신용카드, 이메일 없이 무료로 사용할 수 있습니다. 도구를 열고 결과를 복사한 뒤 바로 녹음으로 돌아가세요.",
      storyTitle: "Pod Studio를 만든 이유",
      storyP1:
        "독립 팟캐스터는 몇 분이면 끝나야 할 작업에 몇 시간을 쓰고 있습니다. 에피소드 제목 짓기, 쇼노트 정리, 피드가 Apple 심사를 통과할지 확인하기, 스폰서에게 얼마를 받을지 계산하기 같은 일들입니다.",
      storyP2:
        "Pod Studio는 이런 작업을 한곳에 모으고, 플랫폼의 공식 규격과 업계 벤치마크를 기반으로 설계했습니다. 그래서 모든 결과가 일관되고 근거가 분명하며, 호스팅 플랫폼에 바로 붙여 넣을 수 있습니다.",
      howTitle: "Pod Studio가 다른 점",
      howItems: [
        {
          title: "추측이 아닌 공식 규격",
          text: "커버 아트, RSS, 챕터 도구는 Apple Podcasts, Spotify, RSS 2.0의 공개 요구사항을 기준으로 점검합니다.",
        },
        {
          title: "예측 가능한 결과",
          text: "생성기는 검증된 공식과 템플릿을 사용하므로 같은 입력이면 항상 같은 결과가 나옵니다. 수정하기 쉽고 믿을 수 있습니다.",
        },
        {
          title: "8개 언어 지원",
          text: "모든 도구 페이지, 가이드, FAQ를 영어, 스페인어, 일본어, 프랑스어, 독일어, 포르투갈어, 한국어, 이탈리아어로 제공합니다.",
        },
      ],
      cta: "무료 도구 20종 모두 보기",
    },
  },

  it: {
    meta: {
      homeTitle: "Strumenti Podcast Gratis, Senza Registrazione | Pod Studio",
      homeDescription:
        "20 strumenti gratuiti per podcast nel browser: generatori di titoli e note degli episodi, validatore di feed RSS, controllo della copertina e calcolatore CPM.",
      toolsTitle: "Tutti i 20 Strumenti Gratis per Podcast | Pod Studio",
      toolsDescription:
        "Tutti gli strumenti gratuiti di Pod Studio: generatori di titoli, nomi e note degli episodi, controlli RSS e copertina, capitoli e calcolatori di ricavi.",
      guidesTitle: "Guide Podcast: CPM, Copertine e Titoli | Pod Studio",
      guidesDescription:
        "Guide pratiche per podcaster: tariffe CPM delle sponsorizzazioni 2026, specifiche delle copertine per Apple Podcasts e Spotify e formule per titoli efficaci.",
      aboutTitle: "Chi siamo — Pod Studio, Strumenti Podcast Gratis",
      aboutDescription:
        "Pod Studio crea strumenti gratuiti per podcast che funzionano nel browser. Nessun account, nessun caricamento, nessun abbonamento per i creator indipendenti.",
    },
    breadcrumbs: { home: "Home", tools: "Strumenti", guides: "Guide" },
    home: {
      toolsEyebrow: "Strumenti per creator",
      guidesEyebrow: "Guide",
      guidesHeading: "Guide al podcasting e benchmark 2026",
      trustToolsSub: "Dall'idea alla monetizzazione",
      trustPrivacySub: "Niente esce dal browser",
      trustFreeSub: "Nessuna registrazione",
      trustSpecSub: "Specifiche Apple e Spotify",
    },
    toolsIndex: {
      eyebrow: "20 strumenti gratuiti",
      heading: "Strumenti gratuiti per ogni fase del tuo podcast",
      intro:
        "Pianifica gli episodi, scrivi titoli e note, controlla feed RSS e copertina e prevedi download e ricavi dalle sponsorizzazioni. Ogni strumento è gratuito, non richiede un account e funziona interamente nel tuo browser.",
    },
    guidesIndex: {
      eyebrow: "Guide",
      heading: "Guide al podcasting",
      intro:
        "Articoli pratici e basati sui dati su tariffe di sponsorizzazione, specifiche delle copertine nelle directory e titoli di episodio che la gente clicca davvero. Ogni guida porta allo strumento gratuito per metterla in pratica.",
      readGuide: "Leggi la guida",
    },
    toolPage: {
      privacyBadge: "Funziona nel browser",
      overviewHeading: "{tool}: cosa fa",
      stepsHeading: "Come si usa",
      tipsHeading: "Consigli per risultati migliori",
      openTool: "Apri {tool}",
    },
    guidePage: {
      publishedLabel: "Pubblicato il",
      relatedToolsHeading: "Metti in pratica questa guida",
      faqHeading: "Domande frequenti",
    },
    grid: {
      carousel: "Carosello",
      grid: "Griglia",
      carouselView: "Vista a carosello",
      gridView: "Vista a griglia",
      filterPlaceholder: "Filtra strumenti...",
      inBrowser: "Funziona nel browser",
      noResults: "Nessuno strumento corrisponde alla ricerca.",
      clearFilters: "Cancella filtri",
      toolsCarousel: "Carosello strumenti",
      toolSingular: "strumento",
      toolPlural: "strumenti",
    },
    footer: {
      rights: "Strumenti gratuiti per podcaster indipendenti.",
      selectLanguage: "Seleziona lingua",
    },
    about: {
      badge: "Chi siamo",
      heading: "Strumenti gratuiti e privati per podcaster indipendenti",
      intro:
        "Il podcasting raggiunge ormai centinaia di milioni di ascoltatori, eppure la maggior parte dei creator si divide ancora tra abbonamenti costosi, generatori pieni di pubblicità e fogli di calcolo disordinati. Pod Studio riunisce le attività di produzione quotidiane — titoli, note degli episodi, controllo del feed, copertina e pianificazione dei ricavi — in un kit gratuito che funziona nel browser.",
      privacyTitle: "Il tuo lavoro resta sul tuo dispositivo",
      privacyText:
        "Idee per gli episodi, appunti di interviste inedite e copertine non lasciano mai il tuo computer. Gli strumenti funzionano in locale nel browser, quindi nulla di ciò che scrivi viene caricato sui nostri server.",
      freeTitle: "Gratis, senza registrazione",
      freeText:
        "Tutti gli strumenti sono gratuiti, senza account, carta di credito o indirizzo email. Apri uno strumento, ottieni il risultato, copialo e torna a registrare.",
      storyTitle: "Perché abbiamo creato Pod Studio",
      storyP1:
        "I podcaster indipendenti passano ore su attività che dovrebbero richiedere minuti: dare un titolo agli episodi, formattare le note, verificare che il feed superi la revisione di Apple o calcolare quanto chiedere a uno sponsor.",
      storyP2:
        "Pod Studio riunisce queste attività in un unico posto, basandosi sulle specifiche pubblicate dalle directory e sui benchmark del settore, perché ogni risultato sia coerente, spiegabile e pronto da incollare nella tua piattaforma di hosting.",
      howTitle: "Cosa rende diverso Pod Studio",
      howItems: [
        {
          title: "Specifiche, non supposizioni",
          text: "Gli strumenti per copertina, RSS e capitoli verificano i requisiti pubblicati da Apple Podcasts, Spotify e RSS 2.0.",
        },
        {
          title: "Risultati prevedibili",
          text: "I generatori usano formule e modelli collaudati: lo stesso input dà sempre lo stesso risultato, facile da modificare e affidabile.",
        },
        {
          title: "Disponibile in 8 lingue",
          text: "Ogni pagina strumento, guida e FAQ è disponibile in inglese, spagnolo, giapponese, francese, tedesco, portoghese, coreano e italiano.",
        },
      ],
      cta: "Scopri tutti i 20 strumenti gratuiti",
    },
  },
};

export function usePageCopy(lang: SupportedLocale): PageCopy {
  return pageCopy[lang] || pageCopy.en;
}

/** Replace "{tool}" placeholders in a copy template. */
export function fillTool(template: string, toolName: string): string {
  return template.replace(/\{tool\}/g, toolName);
}
