import type { SupportedLocale } from "./languages";
import type { GuideDefinition } from "../config/site";
import { getGuideExtra, type GuideFaq } from "./guideExtras";
import { newGuidesByLocale } from "./newGuides";
import { catchyTitlesGuideEn } from "./newGuides/catchyTitles.en";
import { catchyTitlesGuideByLocale } from "./newGuides/catchyTitles.locales";

export interface LocalizedGuideArticle {
  title: string;
  description: string;
  readTime: string;
  category: string;
  publishedAt: string;
  sections: {
    heading: string;
    paragraphs: string[];
    formula?: string;
    cards?: Array<{
      title: string;
      value?: string;
      description: string;
      highlight?: boolean;
    }>;
    list?: Array<{
      title: string;
      description: string;
    }>;
  }[];
  /** Optional short SEO <title> (merged from guideExtras). */
  metaTitle?: string;
  /** Optional FAQ block (merged from guideExtras). */
  faqs?: GuideFaq[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    toolSlug: string;
  };
}

export const guidesData: Record<SupportedLocale, Record<string, LocalizedGuideArticle>> = {
  en: {
    ...newGuidesByLocale.en,
    ...catchyTitlesGuideEn,
    "podcast-sponsorship-cpm-guide-2026": {
      title: "Podcast Ad Rates & CPM Benchmarks (2026)",
      description: "Everything you need to know about podcast ad rates, industry CPM benchmarks, pre-roll, mid-roll, and host-read sponsorships.",
      readTime: "6 min read",
      publishedAt: "2026-10-15",
      category: "Monetization",
      sections: [
        {
          heading: "Understanding Podcast Ad Rates & CPM Pricing",
          paragraphs: [
            "In the podcast advertising industry, podcast ad rates and sponsorship inventory are priced using the CPM metric (Cost Per Mille, Latin for thousand downloads). A CPM represents the fee a sponsor pays for every 1,000 verified downloads an episode achieves over its initial 30 to 45-day release window.",
          ],
          formula: "Total Ad Cost = (Estimated 30-Day Downloads / 1,000) × CPM Rate",
        },
        {
          heading: "Podcast Ad Rates & 2026 Industry CPM Benchmarks",
          paragraphs: [
            "According to AdvertiseCast 2026 benchmarks and IAB/PwC industry research, actual podcast ad rates vary depending on show niche, listener buying power, and ad placement. Host-read mid-rolls consistently command the highest premium due to proven engagement and listener trust.",
          ],
          cards: [
            {
              title: "Pre-Roll (15-30s)",
              value: "$15 – $18 CPM",
              description: "First 5 minutes of episode before core conversation starts (AdvertiseCast 2026)",
            },
            {
              title: "Mid-Roll (60s Host-Read)",
              value: "$25 – $35 CPM",
              description: "Center of episode, highest retention and listener action (AdvertiseCast 2026)",
              highlight: true,
            },
            {
              title: "Post-Roll (15s)",
              value: "$10 – $14 CPM",
              description: "Outro audio segment after episode conclusion (AdvertiseCast 2026)",
            },
          ],
        },
      ],
      cta: {
        title: "Calculate Your Show's Revenue",
        description: "Input your downloads, frequency, and ad slots into our free calculator.",
        buttonText: "Open Sponsorship Calculator",
        toolSlug: "monetization-calculator",
      },
    },
    "apple-spotify-cover-art-specs-guide": {
      title: "Apple Podcasts & Spotify Cover Art Specs: The Definitive Checklist",
      description: "Master dimensions, color profile, safe zones, text hierarchy, and why 3000x3000px square art is required.",
      readTime: "6 min read",
      publishedAt: "2026-10-18",
      category: "Design",
      sections: [
        {
          heading: "Podcast cover art size requirements",
          paragraphs: [
            "Both Apple Podcasts and Spotify have strict technical requirements for podcast cover art. Submitting artwork that violates these specifications will cause your show to be rejected or fail directory indexing.",
          ],
          list: [
            {
              title: "Square 1:1 Aspect Ratio",
              description: "Width and height must be strictly identical.",
            },
            {
              title: "Resolution Range",
              description: "Minimum 1400 x 1400 px, Maximum 3000 x 3000 px. We strongly recommend publishing at 3000 x 3000 px for Retina display clarity.",
            },
            {
              title: "File Format & Color Space",
              description: "JPEG or PNG in sRGB color space at 72 DPI. Max 512KB recommended for fast CDN loading.",
            },
          ],
        },
      ],
      cta: {
        title: "Test Your Artwork Specs Locally",
        description: "Preview your artwork on dark/light mockups and verify resolution instantly.",
        buttonText: "Launch Cover Art Previewer",
        toolSlug: "cover-art-preview",
      },
    },
    "how-to-write-clickable-episode-titles": {
      title: "How to Write Podcast Episode Titles That Actually Get Clicks",
      description: "The 12 psychological title formulas top 1% podcasts use to stand out in Apple Podcasts and Spotify feeds.",
      readTime: "8 min read",
      publishedAt: "2026-10-22",
      category: "Marketing",
      sections: [
        {
          heading: "Why Episode Titles Dictate 70% of Play Decisions",
          paragraphs: [
            "Most podcast creators spend 10 hours recording and editing an episode, and then spend 10 seconds typing a title like “Episode 42 with John Doe”. On Apple Podcasts and Spotify, listeners scroll past dozens of shows in seconds. Your title is your billboard.",
          ],
        },
        {
          heading: "The 3 Core Title Archetypes",
          paragraphs: [
            "Top-charting podcasts avoid generic summaries in favor of proven psychological archetypes that provoke immediate curiosity:",
          ],
          list: [
            {
              title: "1. The Curiosity Gap",
              description: "“The Uncomfortable Truth About [Topic] Nobody Admits” — teases insider knowledge without being cheap clickbait.",
            },
            {
              title: "2. The Contrarian Challenge",
              description: "“Why [Common Practice] Is Actually Ruining Your [Goal]” — challenges conventional wisdom and commands attention.",
            },
            {
              title: "3. The Specific Case Study",
              description: "“From Zero to $50k MRR in 12 Months: The Exact Cold Email Playbook” — promises concrete, actionable ROI.",
            },
          ],
        },
      ],
      cta: {
        title: "Generate 15+ Formula-Backed Titles",
        description: "Enter your episode topic and guest name into our title generator for instant ideas.",
        buttonText: "Generate Titles Now",
        toolSlug: "episode-title-generator",
      },
    },
  },

  es: {
    ...newGuidesByLocale.es,
    ...catchyTitlesGuideByLocale.es,
    "podcast-sponsorship-cpm-guide-2026": {
      title: "Tarifas de Publicidad y CPM de Podcast (2026)",
      description: "Todo sobre tarifas de publicidad, puntos de referencia CPM del sector (AdvertiseCast), anuncios pre-roll, mid-roll e inserción dinámica.",
      readTime: "Lectura de 6 min",
      publishedAt: "2026-10-15",
      category: "Monetización",
      sections: [
        {
          heading: "Cómo se Calculan las Tarifas de Publicidad y CPM",
          paragraphs: [
            "En la industria publicitaria de podcasts, las tarifas de publicidad y los espacios de patrocinio se cotizan mediante la métrica CPM (Coste Por Mil descargas). El CPM representa la tarifa que paga un patrocinador por cada 1.000 descargas verificadas que logra un episodio durante su ventana inicial de lanzamiento de 30 a 45 días.",
          ],
          formula: "Coste Total del Anuncio = (Descargas Estimadas a 30 Días / 1.000) × Tarifa CPM",
        },
        {
          heading: "Tarifas de Publicidad y Benchmarks CPM de la Industria (2026)",
          paragraphs: [
            "Según los puntos de referencia de AdvertiseCast 2026 y estudios de IAB/PwC, las tarifas publicitarias reales varían según el nicho del programa, el poder adquisitivo de los oyentes y la ubicación del anuncio. Los anuncios mid-roll leídos por el presentador mantienen las tarifas más altas gracias a su elevada tasa de conversión.",
          ],
          cards: [
            {
              title: "Pre-Roll (15-30s)",
              value: "$15 – $18 CPM",
              description: "Primeros 5 minutos del episodio antes del núcleo de la conversación (AdvertiseCast 2026)",
            },
            {
              title: "Mid-Roll (60s Leído por Anfitrión)",
              value: "$25 – $35 CPM",
              description: "Centro del episodio con la mayor retención y acción del oyente (AdvertiseCast 2026)",
              highlight: true,
            },
            {
              title: "Post-Roll (15s)",
              value: "$10 – $14 CPM",
              description: "Segmento de cierre al concluir el episodio (AdvertiseCast 2026)",
            },
          ],
        },
      ],
      cta: {
        title: "Calcula los Ingresos de tu Podcast",
        description: "Introduce tus descargas, frecuencia y espacios publicitarios en nuestra calculadora gratuita.",
        buttonText: "Abrir Calculadora de Patrocinio",
        toolSlug: "monetization-calculator",
      },
    },
    "apple-spotify-cover-art-specs-guide": {
      title: "Especificaciones de Portada para Apple Podcasts y Spotify: Lista Definitiva",
      description: "Domina dimensiones, perfiles de color, zonas seguras, jerarquía visual y por qué se requiere una imagen cuadrada de 3000x3000px.",
      readTime: "Lectura de 6 min",
      publishedAt: "2026-10-18",
      category: "Diseño",
      sections: [
        {
          heading: "Requisitos de tamaño para la portada del podcast",
          paragraphs: [
            "Tanto Apple Podcasts como Spotify imponen requisitos técnicos estrictos para las portadas de podcasts. Enviar una imagen que no cumpla estas especificaciones provocará el rechazo del programa o fallos de indexación en los directorios.",
          ],
          list: [
            {
              title: "Relación de Aspecto Cuadrada 1:1",
              description: "El ancho y el alto deben ser estrictamente idénticos.",
            },
            {
              title: "Rango de Resolución",
              description: "Mínimo 1400 x 1400 px, máximo 3000 x 3000 px. Recomendamos enfáticamente publicar a 3000 x 3000 px para máxima nitidez en pantallas Retina.",
            },
            {
              title: "Formato de Archivo y Espacio de Color",
              description: "JPEG o PNG en espacio de color sRGB a 72 DPI. Se recomienda un peso menor a 512KB para una carga rápida en CDN.",
            },
          ],
        },
      ],
      cta: {
        title: "Prueba tu Portada en el Navegador",
        description: "Visualiza tu diseño en maquetas claras y oscuras y comprueba la resolución al instante.",
        buttonText: "Abrir Previsualizador de Portadas",
        toolSlug: "cover-art-preview",
      },
    },
    "how-to-write-clickable-episode-titles": {
      title: "Cómo Escribir Títulos de Episodios de Podcast que Realmente Consigan Clics",
      description: "Las 12 fórmulas psicológicas de títulos que utilizan los podcasts más exitosos para destacar en Apple Podcasts y Spotify.",
      readTime: "Lectura de 8 min",
      publishedAt: "2026-10-22",
      category: "Marketing",
      sections: [
        {
          heading: "Por Qué los Títulos Deciden el 70% de las Reproducciones",
          paragraphs: [
            "La mayoría de los creadores pasan 10 horas grabando y editando un episodio, y luego apenas dedican 10 segundos a poner un título genérico como “Episodio 42 con Juan Pérez”. En Apple Podcasts y Spotify, los oyentes pasan de largo en segundos. Tu título es tu cartel publicitario.",
          ],
        },
        {
          heading: "Los 3 Arquetipos Esenciales de Títulos",
          paragraphs: [
            "Los podcasts en los primeros puestos evitan resúmenes aburridos y apuestan por arquetipos psicológicos que despiertan curiosidad instantánea:",
          ],
          list: [
            {
              title: "1. La Brecha de Curiosidad",
              description: "“La verdad incómoda sobre [Tema] que nadie admite” — promete información confidencial sin caer en engaños baratos.",
            },
            {
              title: "2. El Desafío Contracorriente",
              description: "“Por qué [Práctica Común] está arruinando tu [Objetivo]” — cuestiona el sentido común y atrae la atención de inmediato.",
            },
            {
              title: "3. El Caso de Estudio Concreto",
              description: "“De cero a $50k mensuales en 12 meses: El método exacto paso a paso” — promete un retorno de inversión tangible y aplicable.",
            },
          ],
        },
      ],
      cta: {
        title: "Genera más de 15 Títulos con Fórmulas Probadas",
        description: "Introduce el tema de tu episodio y el nombre del invitado para obtener sugerencias instantáneas.",
        buttonText: "Generar Títulos Ahora",
        toolSlug: "episode-title-generator",
      },
    },
  },

  ja: {
    ...newGuidesByLocale.ja,
    ...catchyTitlesGuideByLocale.ja,
    "podcast-sponsorship-cpm-guide-2026": {
      title: "ポッドキャスト広告料金＆CPM相場（2026年最新ベンチマーク）",
      description: "AdvertiseCast 2026やIAB/PwC調査に基づくポッドキャスト広告料金、業界最新CPM相場、プレロール・ミッドロール広告を完全解説。",
      readTime: "6分で読める",
      publishedAt: "2026-10-15",
      category: "収益化",
      sections: [
        {
          heading: "ポッドキャスト広告料金とCPMの仕組み",
          paragraphs: [
            "ポッドキャスト広告業界では、広告枠の価格設定に「CPM」（インプレッション単価、ラテン語で1,000回再生あたりのコスト）が用いられます。CPMは、エピソード公開後30〜45日間の検証済みダウンロード数1,000回に対してスポンサーが支払う金額を表します。",
          ],
          formula: "総広告費用 = (推定30日間ダウンロード数 / 1,000) × CPM料率",
        },
        {
          heading: "ポッドキャスト広告料金と2026年 業界CPMベンチマーク基準",
          paragraphs: [
            "AdvertiseCast 2026やIAB/PwCの業界調査によると、実際の広告単価は、番組のジャンル、リスナー層の購買力、挿入位置によって異なります。パーソナリティが自らの言葉で紹介するホストリード形式のミッドロール枠は、圧倒的な信頼性とエンゲージメントにより最高水準のCPMを維持しています。",
          ],
          cards: [
            {
              title: "プレロール（15〜30秒）",
              value: "$15 – $18 CPM",
              description: "番組本編が本格的に始まる前の冒頭5分以内に挿入される広告 (AdvertiseCast 2026)",
            },
            {
              title: "ミッドロール（60秒・ホストリード）",
              value: "$25 – $35 CPM",
              description: "番組中盤の最も離脱率が低くリスナーの関心が高い時間帯に挿入 (AdvertiseCast 2026)",
              highlight: true,
            },
            {
              title: "ポストロール（15秒）",
              value: "$10 – $14 CPM",
              description: "番組エンディング後のアウトロ部分に挿入される枠 (AdvertiseCast 2026)",
            },
          ],
        },
      ],
      cta: {
        title: "番組の推定収益をシミュレーション",
        description: "ダウンロード数、月間配信頻度、広告枠を入力して無料試算ツールを実行。",
        buttonText: "CPM収益計算機を開く",
        toolSlug: "monetization-calculator",
      },
    },
    "apple-spotify-cover-art-specs-guide": {
      title: "Apple Podcasts & Spotify カバーアート仕様完全チェックリスト",
      description: "解像度、カラープロファイル、セーフゾーン、3000x3000pxの正方形画像が必須とされる理由を徹底解説。",
      readTime: "6分で読める",
      publishedAt: "2026-10-18",
      category: "デザイン",
      sections: [
        {
          heading: "ポッドキャストカバーアートのサイズ要件",
          paragraphs: [
            "Apple PodcastsおよびSpotifyは、ポッドキャストのアートワークに対して厳格な技術仕様を設けています。基準を満たさない画像は、配信審査でのリジェクトや検索結果でのインデックス不良の原因となります。",
          ],
          list: [
            {
              title: "1:1 正方形アスペクト比",
              description: "画像の幅と高さは完全に同一である必要があります。",
            },
            {
              title: "推奨解像度レンジ",
              description: "最小1400×1400px、最大3000×3000px。Retinaディスプレイでの鮮明さを保つため、3000×3000pxでの作成を強く推奨します。",
            },
            {
              title: "ファイル形式とカラープロファイル",
              description: "72 DPIのsRGBカラー空間によるJPEGまたはPNG形式。高速なCDN配信のため、512KB以下が推奨されます。",
            },
          ],
        },
      ],
      cta: {
        title: "ブラウザ上でアートワークを検証",
        description: "ダークモードやライトモードのスマホ画面で解像度と視認性を即座にチェック。",
        buttonText: "カバーアート確認ツールを開く",
        toolSlug: "cover-art-preview",
      },
    },
    "how-to-write-clickable-episode-titles": {
      title: "クリックされるポッドキャストタイトルの書き方（リスナー獲得の鉄則）",
      description: "上位1%の人気ポッドキャストが実践している、Apple PodcastsやSpotifyで選ばれる12の心理学的タイトル公式。",
      readTime: "8分で読める",
      publishedAt: "2026-10-22",
      category: "マーケティング",
      sections: [
        {
          heading: "なぜエピソードタイトルが再生判断の70%を決定づけるのか",
          paragraphs: [
            "多くのポッドキャスターは収録や編集に何時間もかける一方で、タイトル決めには「第42回：ゲスト〇〇さん対談」といった退屈な文字入力に10秒しか費やしません。リスナーは数秒で一覧をスクロールするため、タイトルこそが看板となります。",
          ],
        },
        {
          heading: "成果実証済みの3大タイトルアーキタイプ",
          paragraphs: [
            "ランキング上位の番組は単なる内容説明を避け、人間の知的好奇心を刺激する定評ある心理フレームワークを採用しています。",
          ],
          list: [
            {
              title: "1. キュリオシティ・ギャップ（知的好奇心の刺激）",
              description: "「誰も認めたがらない【テーマ】の不都合な真実」 — 安易な釣りタイトルにならず、業界のリアルな知見を提示します。",
            },
            {
              title: "2. 常識へのアンチテーゼ（逆説の提示）",
              description: "「なぜ【一般的な手法】が実はあなたの【目標】を台無しにしているのか」 — 固定観念を覆し注意を引きつけます。",
            },
            {
              title: "3. 具体的なケーススタディ（数字の提示）",
              description: "「0から1年で月収500万円を達成した具体的な施策」 — 具体的で即実践可能なノウハウを約束します。",
            },
          ],
        },
      ],
      cta: {
        title: "心理法則に基づいたタイトルを15件以上自動生成",
        description: "テーマとゲスト名を入力するだけで、高クリック率のタイトル候補を瞬時に提案。",
        buttonText: "タイトル生成ツールを開く",
        toolSlug: "episode-title-generator",
      },
    },
  },

  fr: {
    ...newGuidesByLocale.fr,
    ...catchyTitlesGuideByLocale.fr,
    "podcast-sponsorship-cpm-guide-2026": {
      title: "Tarifs Publicitaires et Guide CPM de Podcast (Benchmarks 2026)",
      description: "Tout savoir sur les tarifs publicitaires de podcast, les benchmarks CPM 2026 (AdvertiseCast), pré-roll, mid-roll et sponsoring lu par l'hôte.",
      readTime: "6 min de lecture",
      publishedAt: "2026-10-15",
      category: "Monétisation",
      sections: [
        {
          heading: "Comprendre les Tarifs Publicitaires et le CPM des Podcasts",
          paragraphs: [
            "Dans la publicité pour podcast, les tarifs publicitaires et l'espace sont vendus selon la métrique CPM (Coût Pour Mille écoutes). Le CPM correspond au montant versé par un annonceur pour 1 000 écoutes vérifiées sur les 30 à 45 premiers jours suivant la publication de l'épisode.",
          ],
          formula: "Coût Total Publicitaire = (Écoutes Estimées à 30 Jours / 1 000) × Tarif CPM",
        },
        {
          heading: "Tarifs Publicitaires et Repères CPM du Secteur en 2026",
          paragraphs: [
            "Selon les benchmarks AdvertiseCast 2026 et l'étude IAB/PwC, les tarifs publicitaires réels fluctuent selon la thématique de l'émission, le pouvoir d'achat des auditeurs et l'emplacement de l'annonce. Les mid-rolls lus directement par l'hôte bénéficient des tarifs les plus élevés en raison d'un fort taux d'engagement.",
          ],
          cards: [
            {
              title: "Pré-Roll (15-30s)",
              value: "15 $ – 18 $ CPM",
              description: "Diffusé dans les 5 premières minutes avant le cœur de la conversation (AdvertiseCast 2026)",
            },
            {
              title: "Mid-Roll (60s Lu par l'Hôte)",
              value: "25 $ – 35 $ CPM",
              description: "Diffusé au milieu de l'épisode, bénéficiant de la rétention maximale (AdvertiseCast 2026)",
              highlight: true,
            },
            {
              title: "Post-Roll (15s)",
              value: "10 $ – 14 $ CPM",
              description: "Segment diffusé lors de la conclusion de l'épisode (AdvertiseCast 2026)",
            },
          ],
        },
      ],
      cta: {
        title: "Calculez les Revenus de Votre Émission",
        description: "Renseignez vos téléchargements, fréquence et créneaux publicitaires dans notre calculateur gratuit.",
        buttonText: "Ouvrir le Calculateur CPM",
        toolSlug: "monetization-calculator",
      },
    },
    "apple-spotify-cover-art-specs-guide": {
      title: "Spécifications de Pochette Apple Podcasts & Spotify : La Liste Définitive",
      description: "Dimensions, profil colorimétrique, zones de sécurité, hiérarchie visuelle et exigences pour une image carrée de 3000x3000px.",
      readTime: "6 min de lecture",
      publishedAt: "2026-10-18",
      category: "Design",
      sections: [
        {
          heading: "Exigences de taille pour la pochette de podcast",
          paragraphs: [
            "Apple Podcasts et Spotify appliquent des critères techniques stricts pour les pochettes de podcasts. Une image non conforme risque d'entraîner le rejet de votre émission ou des dysfonctionnements d'indexation.",
          ],
          list: [
            {
              title: "Format Carré Ratio 1:1",
              description: "La largeur et la hauteur doivent être rigoureusement identiques.",
            },
            {
              title: "Résolution Requise",
              description: "Minimum 1400 x 1400 px, maximum 3000 x 3000 px. Nous recommandons vivement une résolution de 3000 x 3000 px pour une netteté parfaite sur écrans Retina.",
            },
            {
              title: "Format de Fichier et Espace Colorimétrique",
              description: "JPEG ou PNG en espace sRGB à 72 DPI. Un poids inférieur à 512 Ko est conseillé pour un chargement rapide.",
            },
          ],
        },
      ],
      cta: {
        title: "Testez Votre Pochette en Local",
        description: "Prévisualisez votre création sur des maquettes d'écrans clairs et sombres et validez sa résolution.",
        buttonText: "Lancer le Prévisualiseur de Pochette",
        toolSlug: "cover-art-preview",
      },
    },
    "how-to-write-clickable-episode-titles": {
      title: "Comment Rédiger des Titres d'Épisodes qui Déclenchent l'Écoute",
      description: "Les 12 formules psychologiques employées par les meilleurs podcasts pour s'imposer sur Apple Podcasts et Spotify.",
      readTime: "8 min de lecture",
      publishedAt: "2026-10-22",
      category: "Marketing",
      sections: [
        {
          heading: "Pourquoi le Titre Conditionne 70 % des Décisions d'Écoute",
          paragraphs: [
            "La plupart des créateurs passent 10 heures à enregistrer et monter un épisode, puis seulement 10 secondes à rédiger un titre insipide du style « Épisode 42 avec Thomas ». Sur Apple Podcasts et Spotify, les auditeurs font défiler les flux à toute vitesse : votre titre est votre devanture.",
          ],
        },
        {
          heading: "Les 3 Archétypes Fondamentaux de Titres",
          paragraphs: [
            "Les podcasts en tête des classements privilégient des structures psychologiques reconnues qui attisent immédiatement l'intérêt :",
          ],
          list: [
            {
              title: "1. La Brèche de Curiosité",
              description: "« La vérité qui dérange sur [Sujet] dont personne ne parle » — promet un savoir exclusif sans racolage.",
            },
            {
              title: "2. Le Défi à Contre-Courant",
              description: "« Pourquoi [Pratique Courante] sabote en réalité votre [Objectif] » — remet en cause une idée reçue et attire l'attention.",
            },
            {
              title: "3. L'Étude de Cas Chiffrée",
              description: "« De 0 à 50 000 € par mois en 12 mois : La méthode pas à pas » — promet un retour sur investissement tangible et pragmatique.",
            },
          ],
        },
      ],
      cta: {
        title: "Générez Plus de 15 Titres à Fort Impact",
        description: "Saisissez votre sujet et le nom de votre invité pour obtenir instantanément des idées percutantes.",
        buttonText: "Générer des Titres",
        toolSlug: "episode-title-generator",
      },
    },
  },

  de: {
    ...newGuidesByLocale.de,
    ...catchyTitlesGuideByLocale.de,
    "podcast-sponsorship-cpm-guide-2026": {
      title: "Podcast-Werbepreise & TKP-Benchmarks (2026)",
      description: "Alles über Podcast-Werbepreise, Industrie-TKP-Benchmarks 2026 (AdvertiseCast), Pre-Roll-, Mid-Roll- und Host-Read-Sponsorings.",
      readTime: "6 Min. Lesezeit",
      publishedAt: "2026-10-15",
      category: "Monetarisierung",
      sections: [
        {
          heading: "Verständnis der Podcast-Werbepreise und TKP-Modelle",
          paragraphs: [
            "In der Podcast-Werbung werden Werbepreise und Werbeplätze nach dem TKP (Tausender-Kontakt-Preis, im Englischen CPM) berechnet. Der TKP gibt den Betrag an, den ein Werbekunde pro 1.000 verifizierten Downloads einer Episode innerhalb der ersten 30 bis 45 Tage bezahlt.",
          ],
          formula: "Gesamte Werbekosten = (Geschätzte 30-Tage-Downloads / 1.000) × TKP-Satz",
        },
        {
          heading: "Podcast-Werbepreise und Branchenübliche TKP-Benchmarks 2026",
          paragraphs: [
            "Laut den Benchmarks von AdvertiseCast 2026 und der IAB/PwC-Studie variieren die tatsächlichen Podcast-Werbepreise je nach Nische, Kaufkraft der Hörer und Platzierung. Vom Host persönlich eingesprochene Mid-Rolls erzielen aufgrund des Vertrauens der Community die höchsten TKP-Werte.",
          ],
          cards: [
            {
              title: "Pre-Roll (15-30s)",
              value: "15 € – 18 € TKP",
              description: "In den ersten 5 Minuten der Episode vor dem Hauptteil platziert (AdvertiseCast 2026)",
            },
            {
              title: "Mid-Roll (60s Host-Read)",
              value: "25 € – 35 € TKP",
              description: "In der Mitte der Episode mit maximaler Hörerbindung platziert (AdvertiseCast 2026)",
              highlight: true,
            },
            {
              title: "Post-Roll (15s)",
              value: "10 € – 14 € TKP",
              description: "Im Abspann nach dem Hauptgespräch platziert (AdvertiseCast 2026)",
            },
          ],
        },
      ],
      cta: {
        title: "Berechne den Umsatz deiner Show",
        description: "Gib deine Downloadzahlen, Veröffentlichungsfrequenz und Werbeplätze in unseren kostenlosen Rechner ein.",
        buttonText: "TKP-Rechner öffnen",
        toolSlug: "monetization-calculator",
      },
    },
    "apple-spotify-cover-art-specs-guide": {
      title: "Apple Podcasts & Spotify Cover-Vorgaben: Die ultimative Checkliste",
      description: "Abmessungen, Farbräume, Sicherheitszonen, Text-Hierarchien und warum quadratische 3000x3000px Pflicht sind.",
      readTime: "6 Min. Lesezeit",
      publishedAt: "2026-10-18",
      category: "Design",
      sections: [
        {
          heading: "Größenanforderungen für Podcast-Cover-Bilder",
          paragraphs: [
            "Sowohl Apple Podcasts als auch Spotify stellen strenge technische Anforderungen an das Podcast-Cover. Eine fehlerhafte Datei führt zur Ablehnung des Podcasts oder zu Darstellungsfehlern in den Verzeichnissen.",
          ],
          list: [
            {
              title: "Quadratisches 1:1 Seitenverhältnis",
              description: "Breite und Höhe müssen exakt übereinstimmen.",
            },
            {
              title: "Erlaubte Auflösung",
              description: "Mindestens 1400 x 1400 px, maximal 3000 x 3000 px. Wir empfehlen dringend 3000 x 3000 px für gestochen scharfe Darstellung auf Retina-Bildschirmen.",
            },
            {
              title: "Dateiformat & Farbraum",
              description: "JPEG oder PNG im sRGB-Farbraum bei 72 DPI. Eine Dateigröße unter 512 KB wird für schnelles Laden empfohlen.",
            },
          ],
        },
      ],
      cta: {
        title: "Teste dein Cover direkt im Browser",
        description: "Überprüfe dein Artwork in Smartphone-Mockups und prüfe die Lesbarkeit sofort.",
        buttonText: "Cover-Vorschau starten",
        toolSlug: "cover-art-preview",
      },
    },
    "how-to-write-clickable-episode-titles": {
      title: "Wie man Podcast-Folgentitel schreibt, die wirklich geklickt werden",
      description: "Die 12 psychologischen Erfolgsformeln für Episodentitel, mit denen Top-Podcasts in Spotify und Apple Feeds herausstechen.",
      readTime: "8 Min. Lesezeit",
      publishedAt: "2026-10-22",
      category: "Marketing",
      sections: [
        {
          heading: "Warum der Folgentitel über 70 % der Play-Entscheidungen bestimmt",
          paragraphs: [
            "Die meisten Creator verbringen 10 Stunden mit Aufnahme und Schnitt, aber nur 10 Sekunden mit einem langweiligen Titel wie „Folge 42 mit Max Mustermann“. In Streaming-Apps scrollen Hörer in Sekundenschnelle an Shows vorbei. Dein Titel ist deine Plakatwand.",
          ],
        },
        {
          heading: "Die 3 wichtigsten Titel-Archetypen",
          paragraphs: [
            "Erfolgreiche Podcasts meiden generische Beschreibungen und setzen auf bewährte psychologische Trigger:",
          ],
          list: [
            {
              title: "1. Die Neugierlücke (Curiosity Gap)",
              description: "„Die unbequeme Wahrheit über [Thema], die niemand ausspricht“ — verspricht Insider-Einblicke ohne billigen Clickbait.",
            },
            {
              title: "2. Die Provokante These (Contrarian)",
              description: "„Warum [Gängige Praxis] in Wahrheit deinen [Ziel] ruiniert“ — hinterfragt Denkmuster und erzwingt Aufmerksamkeit.",
            },
            {
              title: "3. Die Konkrete Fallstudie (Case Study)",
              description: "„Von 0 auf 50.000 € Monatsumsatz in 12 Monaten: Die genaue Strategie“ — verspricht umsetzbare, konkrete Ergebnisse.",
            },
          ],
        },
      ],
      cta: {
        title: "Generiere über 15 Titel mit Erfolgsformeln",
        description: "Gib Thema und Gast ein, um sofort vorschlagsstarke Titelideen zu erhalten.",
        buttonText: "Titel jetzt generieren",
        toolSlug: "episode-title-generator",
      },
    },
  },

  pt: {
    ...newGuidesByLocale.pt,
    ...catchyTitlesGuideByLocale.pt,
    "podcast-sponsorship-cpm-guide-2026": {
      title: "Preços de Anúncios e Guia de CPM de Podcast (Benchmarks 2026)",
      description: "Tudo o que você precisa saber sobre preços de anúncios de podcast, métricas CPM 2026 (AdvertiseCast), pré-roll, mid-roll e patrocínios lidos pelo anfitrião.",
      readTime: "Leitura de 6 min",
      publishedAt: "2026-10-15",
      category: "Monetização",
      sections: [
        {
          heading: "Como Funcionam os Preços de Anúncios e a Precificação por CPM",
          paragraphs: [
            "No mercado de publicidade em podcast, os preços de anúncios e os espaços comerciais são negociados pela métrica de CPM (Custo Por Mil downloads). O CPM representa o valor pago pelo anunciante a cada 1.000 downloads comprovados do episódio em sua janela de lançamento de 30 a 45 dias.",
          ],
          formula: "Custo Total do Anúncio = (Downloads Estimados em 30 Dias / 1.000) × Taxa de CPM",
        },
        {
          heading: "Preços de Anúncios e Benchmarks de CPM do Mercado em 2026",
          paragraphs: [
            "Segundo benchmarks da AdvertiseCast 2026 e estudos da IAB/PwC, os valores reais de publicidade variam conforme o nicho do programa, o poder de compra da audiência e o formato do anúncio. Anúncios mid-roll lidos pelo próprio apresentador garantem as maiores remunerações por causa da alta retenção.",
          ],
          cards: [
            {
              title: "Pre-Roll (15-30s)",
              value: "$15 – $18 CPM",
              description: "Exibido nos primeiros 5 minutos antes do início do tema principal",
            },
            {
              title: "Mid-Roll (60s Lido pelo Apresentador)",
              value: "$25 – $35 CPM",
              description: "Posicionado no meio do episódio, onde a atenção do ouvinte é máxima",
              highlight: true,
            },
            {
              title: "Post-Roll (15s)",
              value: "$10 – $14 CPM",
              description: "Exibido no encerramento após o final do conteúdo",
            },
          ],
        },
      ],
      cta: {
        title: "Calcule a Receita do Seu Podcast",
        description: "Insira seus downloads, periodicidade e espaços comerciais na calculadora gratuita.",
        buttonText: "Abrir Calculadora de Patrocínio",
        toolSlug: "monetization-calculator",
      },
    },
    "apple-spotify-cover-art-specs-guide": {
      title: "Especificações de Capa para Apple Podcasts e Spotify: Checklist Definitivo",
      description: "Dimensões exatas, espaço de cor, áreas de segurança, hierarquia de texto e o motivo da exigência do formato 3000x3000px.",
      readTime: "Leitura de 6 min",
      publishedAt: "2026-10-18",
      category: "Design",
      sections: [
        {
          heading: "Requisitos de tamanho da capa de podcast",
          paragraphs: [
            "A Apple Podcasts e o Spotify aplicam critérios técnicos rigorosos para aprovação de capas. Enviar um arquivo fora do padrão pode levar à recusa do podcast ou problemas de exibição nos diretórios de busca.",
          ],
          list: [
            {
              title: "Proporção Quadrada 1:1",
              description: "Largura e altura precisam ser rigorosamente idênticas.",
            },
            {
              title: "Dimensões Permitidas",
              description: "Mínimo de 1400 x 1400 px e máximo de 3000 x 3000 px. Recomendamos fortemente a resolução de 3000 x 3000 px para nitidez impecável em telas Retina.",
            },
            {
              title: "Formato e Perfil de Cor",
              description: "JPEG ou PNG no espaço de cores sRGB com 72 DPI. Arquivos abaixo de 512 KB são ideais para carregamento rápido em redes CDN.",
            },
          ],
        },
      ],
      cta: {
        title: "Teste Sua Capa no Navegador",
        description: "Visualize sua arte em simulações realistas e valide a nitidez em poucos segundos.",
        buttonText: "Visualizar Capa Agora",
        toolSlug: "cover-art-preview",
      },
    },
    "how-to-write-clickable-episode-titles": {
      title: "Como Escrever Títulos de Episódios de Podcast que Atraem Cliques",
      description: "As 12 fórmulas psicológicas de títulos que os podcasts mais populares utilizam para se destacar no Spotify e Apple Podcasts.",
      readTime: "Leitura de 8 min",
      publishedAt: "2026-10-22",
      category: "Marketing",
      sections: [
        {
          heading: "Por Que o Título Define 70% da Decisão de Play do Ouvinte",
          paragraphs: [
            "A maioria dos criadores dedica 10 horas à gravação e edição de um episódio, mas gasta menos de 10 segundos escolhendo um título sem graça como “Episódio 42 com João da Silva”. Nos aplicativos de streaming, os ouvintes passam por dezenas de opções em instantes: seu título é sua vitrine.",
          ],
        },
        {
          heading: "Os 3 Principais Modelos de Títulos",
          paragraphs: [
            "Os podcasts de maior audiência fogem de descrições burocráticas e apostam em modelos que despertam curiosidade imediata:",
          ],
          list: [
            {
              title: "1. A Lacuna de Curiosidade",
              description: "“A verdade incômoda sobre [Tema] que ninguém assume” — promete revelações exclusivas sem apelar para sensacionalismo barato.",
            },
            {
              title: "2. A Provocação Incomum",
              description: "“Por que [Prática Comum] está na verdade arruinando o seu [Objetivo]” — questiona o senso comum e força a atenção do ouvinte.",
            },
            {
              title: "3. O Estudo de Caso Prático",
              description: "“Do zero aos R$ 50 mil mensais em 12 meses: O método exato” — entrega valor tangível e aplicabilidade imediata.",
            },
          ],
        },
      ],
      cta: {
        title: "Gere Mais de 15 Títulos Baseados em Fórmulas",
        description: "Insira o tema do seu episódio e o convidado para receber sugestões instantâneas de títulos atraentes.",
        buttonText: "Gerar Títulos Agora",
        toolSlug: "episode-title-generator",
      },
    },
  },

  ko: {
    ...newGuidesByLocale.ko,
    ...catchyTitlesGuideByLocale.ko,
    "podcast-sponsorship-cpm-guide-2026": {
      title: "팟캐스트 광고 단가 및 2026 CPM 기준 가이드",
      description: "AdvertiseCast 2026 및 IAB/PwC 연구 기준 팟캐스트 광고 단가, CPM 업계 벤치마크, 프리롤, 미드롤, 호스트 리드 광고 완벽 정리.",
      readTime: "6분 소요",
      publishedAt: "2026-10-15",
      category: "수익화",
      sections: [
        {
          heading: "팟캐스트 광고 단가 및 CPM 요율 이해하기",
          paragraphs: [
            "팟캐스트 광고 업계에서는 광고 단가와 인벤토리 가격을 책정할 때 'CPM'(1,000회 청취당 비용, Cost Per Mille) 기준을 사용합니다. CPM은 에피소드 공개 후 최초 30~45일간 기록된 검증된 다운로드 수 1,000회당 광고주가 지불하는 금액을 의미합니다.",
          ],
          formula: "총 광고 비용 = (예상 30일 다운로드 수 / 1,000) × CPM 단가",
        },
        {
          heading: "팟캐스트 광고 단가 및 2026년 업계 표준 CPM 벤치마크",
          paragraphs: [
            "AdvertiseCast 2026 벤치마크와 IAB/PwC 연구에 따르면, 실제 광고 단가는 방송 카테고리, 청취자의 구매력, 광고 삽입 위치에 따라 차이가 납니다. 진행자가 직접 육성으로 읽어주는 호스트 리드 미드롤 광고는 높은 청취율과 신뢰도 덕분에 가장 높은 단가를 형성합니다.",
          ],
          cards: [
            {
              title: "프리롤 (15~30초)",
              value: "$15 – $18 CPM",
              description: "본격적인 본방송 시작 전 오프닝 5분 이내에 배치되는 광고 (AdvertiseCast 2026)",
            },
            {
              title: "미드롤 (60초 진행자 낭독)",
              value: "$25 – $35 CPM",
              description: "청취 집중도와 잔존율이 가장 높은 방송 중반부에 배치 (AdvertiseCast 2026)",
              highlight: true,
            },
            {
              title: "포스트롤 (15초)",
              value: "$10 – $14 CPM",
              description: "에피소드 종료 후 클로징 멘트 뒤에 배치되는 광고 (AdvertiseCast 2026)",
            },
          ],
        },
      ],
      cta: {
        title: "내 팟캐스트 예상 광고 수익 계산하기",
        description: "다운로드 수, 월간 발행 횟수, 광고 슬롯을 입력해 무료로 수익을 시뮬레이션해 보세요.",
        buttonText: "스폰서십 계산기 열기",
        toolSlug: "monetization-calculator",
      },
    },
    "apple-spotify-cover-art-specs-guide": {
      title: "Apple Podcasts & Spotify 커버 아트 규격: 완벽 체크리스트",
      description: "이미지 해상도, 색상 프로필, 안전 영역, 텍스트 배치 및 3000x3000px 정사각형 규격이 필수인 이유.",
      readTime: "6분 소요",
      publishedAt: "2026-10-18",
      category: "디자인",
      sections: [
        {
          heading: "팟캐스트 커버 아트 규격 및 사이즈 요구사항",
          paragraphs: [
            "Apple Podcasts와 Spotify는 팟캐스트 커버 아트에 대해 엄격한 기술 요건을 적용합니다. 규격을 위반한 이미지를 제출할 경우 등록이 거절되거나 검색 디렉토리 노출에 문제가 생길 수 있습니다.",
          ],
          list: [
            {
              title: "1:1 정사각형 비율",
              description: "가로와 세로의 픽셀 길이가 정확히 동일해야 합니다.",
            },
            {
              title: "해상도 규격",
              description: "최소 1400 x 1400 px에서 최대 3000 x 3000 px까지 허용됩니다. 고해상도 Retina 디스플레이에서의 선명함을 위해 3000 x 3000 px 제작을 강력히 권장합니다.",
            },
            {
              title: "파일 포맷 및 색상 프로필",
              description: "72 DPI의 sRGB 색상 공간을 사용하는 JPEG 또는 PNG 형식이어야 합니다. 빠른 로딩을 위해 512KB 이하 용량을 추천합니다.",
            },
          ],
        },
      ],
      cta: {
        title: "브라우저에서 커버 아트 규격 테스트",
        description: "스마트폰 잠금화면과 다크/라이트 모드에서 아트워크 해상도를 실시간으로 확인하세요.",
        buttonText: "커버 아트 미리보기 열기",
        toolSlug: "cover-art-preview",
      },
    },
    "how-to-write-clickable-episode-titles": {
      title: "클릭을 부르는 팟캐스트 에피소드 제목 작성법",
      description: "상위 1% 인기 팟캐스트가 Spotify와 Apple Podcasts에서 청취자를 끌어모으는 12가지 심리학 제목 공식.",
      readTime: "8분 소요",
      publishedAt: "2026-10-22",
      category: "마케팅",
      sections: [
        {
          heading: "에피소드 제목이 청취 결정의 70%를 좌우하는 이유",
          paragraphs: [
            "대부분의 크리에이터는 녹음과 편집에 10시간을 쏟아붓고도 '김철수 대표와 함께한 42화' 같은 평범한 제목을 짓는 데 10초만 씁니다. 피드를 빠르게 스크롤하는 청취자의 눈길을 사로잡으려면 제목이 곧 광고판이 되어야 합니다.",
          ],
        },
        {
          heading: "성과가 입증된 3대 에피소드 제목 공식",
          paragraphs: [
            "차트 상위권 팟캐스트는 진부한 요약 대신 청취자의 지적 호기심을 자극하는 검증된 심리 공식을 활용합니다.",
          ],
          list: [
            {
              title: "1. 지적 호기심의 공백 (The Curiosity Gap)",
              description: "“아무도 솔직하게 말해주지 않는 [주제]의 불편한 진실” — 저렴한 낚시성 문구가 아닌 깊이 있는 인사이트를 예고합니다.",
            },
            {
              title: "2. 통념에 대한 반박 (The Contrarian Challenge)",
              description: "“모두가 따르는 [일반적 방법]이 사실 당신의 [목표]를 망치는 이유” — 고정관념에 도전해 즉각적인 주의를 끕니다.",
            },
            {
              title: "3. 구체적 수치의 사례 연구 (The Specific Case Study)",
              description: "“12개월 만에 무자본으로 월매출 5천만 원 달성한 핵심 전략” — 확실하고 즉시 적용 가능한 결과물을 약속합니다.",
            },
          ],
        },
      ],
      cta: {
        title: "심리 공식 기반의 매력적인 제목 15개 생성하기",
        description: "방송 주제와 게스트 이름을 입력하면 클릭률 높은 제목을 즉시 추천해 드립니다.",
        buttonText: "지금 제목 생성하기",
        toolSlug: "episode-title-generator",
      },
    },
  },

  it: {
    ...newGuidesByLocale.it,
    ...catchyTitlesGuideByLocale.it,
    "podcast-sponsorship-cpm-guide-2026": {
      title: "Tariffe Pubblicitarie e Benchmark CPM per Podcast (2026)",
      description: "Tutto quello che devi sapere sulle tariffe pubblicitarie per podcast, benchmark CPM 2026 (AdvertiseCast), pre-roll, mid-roll e sponsorizzazioni host-read.",
      readTime: "6 min di lettura",
      publishedAt: "2026-10-15",
      category: "Monetizzazione",
      sections: [
        {
          heading: "Comprendere le Tariffe Pubblicitarie e il CPM nei Podcast",
          paragraphs: [
            "Nel mercato pubblicitario dei podcast, le tariffe pubblicitarie e gli spazi commerciali sono venduti in base alla metrica CPM (Costo Per Mille ascolti). Il CPM rappresenta l'importo pagato dallo sponsor per ogni 1.000 ascolti certificati che un episodio ottiene nei primi 30-45 giorni di uscita.",
          ],
          formula: "Costo Totale Inserzione = (Ascolti Stimati a 30 Giorni / 1.000) × Tariffa CPM",
        },
        {
          heading: "Tariffe Pubblicitarie e Benchmark CPM del Settore nel 2026",
          paragraphs: [
            "Secondo i benchmark di AdvertiseCast 2026 e le analisi IAB/PwC, le tariffe pubblicitarie effettive variano in base al settore dello show, al potere d'acquisto degli ascoltatori e alla collocazione dell'annuncio. I mid-roll letti direttamente dall'host spuntano i compensi più alti per via della massima attenzione del pubblico.",
          ],
          cards: [
            {
              title: "Pre-Roll (15-30s)",
              value: "15 € – 18 € CPM",
              description: "Nei primi 5 minuti della puntata, prima che inizi il contenuto centrale",
            },
            {
              title: "Mid-Roll (60s Letto dall'Host)",
              value: "25 € – 35 € CPM",
              description: "Al centro dell'episodio, con la massima fidelizzazione e tasso di ascolto",
              highlight: true,
            },
            {
              title: "Post-Roll (15s)",
              value: "10 € – 14 € CPM",
              description: "Segmento audio di chiusura al termine dell'episodio",
            },
          ],
        },
      ],
      cta: {
        title: "Calcola le Entrate del Tuo Podcast",
        description: "Inserisci download, frequenza e slot pubblicitari nel nostro calcolatore gratuito.",
        buttonText: "Apri Calcolatore Sponsorizzazioni",
        toolSlug: "monetization-calculator",
      },
    },
    "apple-spotify-cover-art-specs-guide": {
      title: "Specifiche Copertina Apple Podcasts e Spotify: La Guida Definitiva",
      description: "Dimensioni, profili colore, zone di sicurezza, leggibilità dei testi e perché è obbligatorio il formato quadrato 3000x3000px.",
      readTime: "6 min di lettura",
      publishedAt: "2026-10-18",
      category: "Design",
      sections: [
        {
          heading: "Requisiti di dimensione per la copertina del podcast",
          paragraphs: [
            "Sia Apple Podcasts che Spotify applicano standard tecnici rigorosi per le copertine dei podcast. Inviare un file non conforme comporta il rifiuto della trasmissione o anomalie nell'indicizzazione.",
          ],
          list: [
            {
              title: "Proporzioni Quadrate 1:1",
              description: "Larghezza e altezza devono coincidere al singolo pixel.",
            },
            {
              title: "Intervallo di Risoluzione",
              description: "Minimo 1400 x 1400 px, massimo 3000 x 3000 px. Raccomandiamo caldamente 3000 x 3000 px per una resa cristallina sui display Retina.",
            },
            {
              title: "Formato File e Spazio Colore",
              description: "JPEG o PNG in spazio colore sRGB a 72 DPI. È consigliabile mantenere il peso sotto i 512 KB per un caricamento veloce su CDN.",
            },
          ],
        },
      ],
      cta: {
        title: "Verifica la Copertina Direttamente Online",
        description: "Visualizza l'artwork su simulazioni per smartphone e controlla la nitidezza in un istante.",
        buttonText: "Apri Anteprima Copertina",
        toolSlug: "cover-art-preview",
      },
    },
    "how-to-write-clickable-episode-titles": {
      title: "Come Scrivere Titoli di Episodi che Attirano Davvero Clic",
      description: "Le 12 formule psicologiche utilizzate dai podcast di vertice per emergere nelle classifiche di Apple Podcasts e Spotify.",
      readTime: "8 min di lettura",
      publishedAt: "2026-10-22",
      category: "Marketing",
      sections: [
        {
          heading: "Perché il Titolo Condiziona il 70% delle Decisioni di Ascolto",
          paragraphs: [
            "Molti podcaster impiegano 10 ore a registrare e montare un episodio, per poi dedicare solo 10 secondi a digitare un titolo anonimo come “Episodio 42 con Mario Rossi”. Sulle app di streaming gli ascoltatori scorrono decine di copertine al secondo: il tuo titolo è la tua vetrina.",
          ],
        },
        {
          heading: "I 3 Archetipi Efficaci di Titoli",
          paragraphs: [
            "I podcast più ascoltati evitano titoli banali e scelgono formule psicologiche che accendono l'interesse all'istante:",
          ],
          list: [
            {
              title: "1. Il Divario di Curiosità (Curiosity Gap)",
              description: "“La scomoda verità su [Argomento] che nessuno vuole ammettere” — promette una rivelazione autentica senza scadere nel clickbait.",
            },
            {
              title: "2. La Sfida Controcorrente (Contrarian)",
              description: "“Perché [Pratica Comune] sta in realtà distruggendo il tuo [Obiettivo]” — sfida le convinzioni tradizionali e attira l'attenzione.",
            },
            {
              title: "3. Il Caso Studio Dettagliato (Case Study)",
              description: "“Da zero a 50.000 € al mese in 12 mesi: Il metodo passo dopo passo” — garantisce un valore tangibile ed estremamente concreto.",
            },
          ],
        },
      ],
      cta: {
        title: "Genera Oltre 15 Titoli Efficaci",
        description: "Inserisci argomento e ospite nel nostro generatore per ricevere subito idee vincenti.",
        buttonText: "Genera Titoli Ora",
        toolSlug: "episode-title-generator",
      },
    },
  },
};

function getBaseGuide(guide: GuideDefinition, lang: SupportedLocale): LocalizedGuideArticle {
  const loc = guidesData[lang]?.[guide.slug];
  if (!loc) {
    const en = guidesData.en?.[guide.slug];
    return {
      title: en?.title || guide.title,
      description: en?.description || guide.description,
      readTime: en?.readTime || guide.readTime,
      category: en?.category || guide.category,
      publishedAt: en?.publishedAt || guide.publishedAt,
      sections: en?.sections || [],
      cta: en?.cta || {
        title: "Explore Podcast Tools",
        description: "Try our free client-side podcast tools.",
        buttonText: "Explore Tools",
        toolSlug: "monetization-calculator",
      },
    };
  }
  return loc;
}

/**
 * Returns the localized guide merged with its long-form extras
 * (additional sections, FAQs, realistic read time and corrected copy).
 */
export function getLocalizedGuide(guide: GuideDefinition, lang: SupportedLocale): LocalizedGuideArticle {
  const base = getBaseGuide(guide, lang);
  const extra = getGuideExtra(guide.slug, lang);
  if (!extra) return base;

  const sections = base.sections.map((section, i) =>
    i === 0 && extra.firstHeading ? { ...section, heading: extra.firstHeading } : section,
  );

  return {
    ...base,
    metaTitle: extra.metaTitle,
    description: extra.description ?? base.description,
    readTime: base.readTime.replace(/\d+/, String(extra.readMinutes)),
    sections: [...sections, ...extra.sections],
    faqs: extra.faqs,
  };
}
