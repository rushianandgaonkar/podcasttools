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
      titleStart: "The Production Toolkit for",
      titleHighlight: "Serious Podcasters",
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
  },

  es: {
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
  },

  ja: {
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
  },

  fr: {
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
  },

  de: {
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
  },

  pt: {
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
  },

  ko: {
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
  },

  it: {
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
  },
};
