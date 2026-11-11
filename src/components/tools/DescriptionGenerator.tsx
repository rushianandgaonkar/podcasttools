"use client";

import React, { useState, useMemo } from "react";
import { AlignLeft, Copy, Check, Sparkles, Smartphone } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

type V = { title: string; audience: string; points: string; bullets: string; links: string };
type DescText = {
  gen: string; ep: string; show: string; epTitle: string; showName: string; aud: string; topics: string; linksLabel: string;
  seo: (n: number) => string; copy: string; copied: string; mobile: string; mobileNote: string; more: string; ok: string;
  d: { title: string; audience: string; points: string; links: string };
  episode: (v: V) => string; showBio: (v: V) => string;
};

// shortcut: lowercasing mid-sentence is wrong for German nouns and meaningless for CJK, so those skip it
const lcFor = (lang: SupportedLocale) => (s: string) => (lang === "de" || lang === "ja" || lang === "ko" ? s : s.toLowerCase());

const TEXT: Record<SupportedLocale, DescText> = {
  en: {
    gen: "Generate:", ep: "Episode Description", show: "Overall Show / Channel Bio", epTitle: "Episode Title", showName: "Podcast Name",
    aud: "Target Audience", topics: "Key Topics & Takeaways", linksLabel: "Host Links / CTA",
    seo: (n) => `SEO-Optimized Description (${n} chars)`, copy: "Copy Description", copied: "Copied!",
    mobile: "Mobile “See More” Cutoff", mobileNote: "Apple Podcasts truncates descriptions after the first ~140 characters. Ensure your high-stakes hook fits here:",
    more: " ...more", ok: "✓ Primary keyword and listener hook appear before the cut-off.",
    d: { title: "Scaling Without Burnout", audience: "Bootstrapped founders and solo creators", points: "How to delegate low-leverage tasks, avoid calendar fatigue, and protect mental energy during growth phases.", links: "Website: https://example.com\nTwitter: @podcasthost" },
    episode: ({ title, audience, bullets, links }) => `Why do so many high-performing builders hit an invisible wall right when business picks up? In this episode, we break down actionable systems for ${audience} to master ${title}.

Key topics covered in this episode:
• ${bullets}

Whether you are in the trenches of your first venture or scaling an existing team, this conversation gives you practical mental models you can implement immediately.

🔗 Connect & Resources:
${links}

⭐ If you found value in this episode, please leave a quick rating on Apple Podcasts or Spotify—it directly supports the show!`,
    showBio: ({ title, audience, points, links }) => `Welcome to ${title}—the definitive podcast built for ${audience}.

Every week, we bring you unfiltered conversations, tactical breakdowns, and deep dives into ${points}

No fluff, no recycled clichés. Just actionable insights and proven playbooks to help you level up your craft.

Subscribe now on Apple Podcasts, Spotify, or wherever you listen to audio so you never miss an episode.

🌐 Explore more resources:
${links}`,
  },
  es: {
    gen: "Generar:", ep: "Descripción del episodio", show: "Biografía del programa / canal", epTitle: "Título del episodio", showName: "Nombre del pódcast",
    aud: "Público objetivo", topics: "Temas clave y conclusiones", linksLabel: "Enlaces del anfitrión / CTA",
    seo: (n) => `Descripción optimizada para SEO (${n} caracteres)`, copy: "Copiar descripción", copied: "¡Copiado!",
    mobile: "Corte de “Ver más” en móvil", mobileNote: "Apple Podcasts recorta las descripciones tras los primeros ~140 caracteres. Asegúrate de que tu gancho principal quepa aquí:",
    more: " ...más", ok: "✓ La palabra clave principal y el gancho para el oyente aparecen antes del corte.",
    d: { title: "Escalar sin quemarse", audience: "Fundadores autofinanciados y creadores independientes", points: "Cómo delegar tareas de poco impacto, evitar la fatiga del calendario y proteger la energía mental durante las fases de crecimiento.", links: "Sitio web: https://example.com\nTwitter: @podcasthost" },
    episode: ({ title, audience, bullets, links }) => `¿Por qué tantos constructores de alto rendimiento chocan con un muro invisible justo cuando el negocio despega? En este episodio desglosamos sistemas prácticos para que ${audience} dominen ${title}.

Temas clave de este episodio:
• ${bullets}

Ya estés en las trincheras de tu primer proyecto o escalando un equipo existente, esta conversación te da modelos mentales prácticos que puedes aplicar de inmediato.

🔗 Conecta y recursos:
${links}

⭐ Si este episodio te aportó valor, deja una valoración rápida en Apple Podcasts o Spotify: ¡apoya directamente al programa!`,
    showBio: ({ title, audience, points, links }) => `Te damos la bienvenida a ${title}, el pódcast definitivo creado para ${audience}.

Cada semana te traemos conversaciones sin filtros, análisis tácticos y exploraciones a fondo sobre ${points}

Sin relleno ni clichés reciclados. Solo ideas aplicables y estrategias probadas para llevar tu oficio al siguiente nivel.

Suscríbete ahora en Apple Podcasts, Spotify o donde escuches audio para no perderte ningún episodio.

🌐 Explora más recursos:
${links}`,
  },
  fr: {
    gen: "Générer :", ep: "Description d'épisode", show: "Présentation de l'émission / de la chaîne", epTitle: "Titre de l'épisode", showName: "Nom du podcast",
    aud: "Public cible", topics: "Sujets clés et enseignements", linksLabel: "Liens de l'animateur / appel à l'action",
    seo: (n) => `Description optimisée SEO (${n} caractères)`, copy: "Copier la description", copied: "Copié !",
    mobile: "Coupure « Voir plus » sur mobile", mobileNote: "Apple Podcasts tronque les descriptions après environ 140 caractères. Assurez-vous que votre accroche principale tient ici :",
    more: " ...plus", ok: "✓ Le mot-clé principal et l'accroche pour l'auditeur apparaissent avant la coupure.",
    d: { title: "Grandir sans s'épuiser", audience: "Fondateurs autofinancés et créateurs indépendants", points: "Comment déléguer les tâches à faible valeur, éviter la fatigue d'agenda et préserver son énergie mentale pendant les phases de croissance.", links: "Site web : https://example.com\nTwitter : @podcasthost" },
    episode: ({ title, audience, bullets, links }) => `Pourquoi tant de bâtisseurs performants se heurtent-ils à un mur invisible au moment même où l'activité décolle ? Dans cet épisode, nous détaillons des systèmes concrets pour que ${audience} maîtrisent ${title}.

Sujets abordés dans cet épisode :
• ${bullets}

Que vous soyez dans la tranchée de votre première aventure ou en train de faire grandir une équipe, cette conversation vous donne des modèles mentaux pratiques, applicables immédiatement.

🔗 Restons en contact et ressources :
${links}

⭐ Si cet épisode vous a été utile, laissez une note rapide sur Apple Podcasts ou Spotify : cela soutient directement l'émission !`,
    showBio: ({ title, audience, points, links }) => `Bienvenue dans ${title}, le podcast de référence pensé pour ${audience}.

Chaque semaine, nous vous proposons des conversations sans filtre, des analyses tactiques et des plongées approfondies sur ${points}

Pas de blabla, pas de clichés recyclés. Seulement des conseils applicables et des méthodes éprouvées pour faire progresser votre savoir-faire.

Abonnez-vous dès maintenant sur Apple Podcasts, Spotify ou votre plateforme d'écoute pour ne manquer aucun épisode.

🌐 Découvrez d'autres ressources :
${links}`,
  },
  de: {
    gen: "Erstellen:", ep: "Episodenbeschreibung", show: "Show- / Kanalbeschreibung", epTitle: "Episodentitel", showName: "Podcast-Name",
    aud: "Zielgruppe", topics: "Kernthemen & Erkenntnisse", linksLabel: "Host-Links / Call-to-Action",
    seo: (n) => `SEO-optimierte Beschreibung (${n} Zeichen)`, copy: "Beschreibung kopieren", copied: "Kopiert!",
    mobile: "Mobiler „Mehr anzeigen“-Abbruch", mobileNote: "Apple Podcasts kürzt Beschreibungen nach etwa 140 Zeichen. Achte darauf, dass dein wichtigster Hook hier hineinpasst:",
    more: " ...mehr", ok: "✓ Haupt-Keyword und Hörer-Hook erscheinen vor dem Abbruch.",
    d: { title: "Wachsen ohne Burnout", audience: "Bootstrapping-Gründer und Solo-Creator", points: "Wie du unwichtige Aufgaben delegierst, Terminmüdigkeit vermeidest und in Wachstumsphasen deine mentale Energie schützt.", links: "Website: https://example.com\nTwitter: @podcasthost" },
    episode: ({ title, audience, bullets, links }) => `Warum laufen so viele leistungsstarke Macher genau dann gegen eine unsichtbare Wand, wenn das Geschäft anzieht? In dieser Folge zeigen wir umsetzbare Systeme, mit denen ${audience} „${title}“ meistern.

Kernthemen dieser Folge:
• ${bullets}

Ob du mitten in deinem ersten Projekt steckst oder ein bestehendes Team skalierst – dieses Gespräch liefert dir praktische Denkmodelle, die du sofort umsetzen kannst.

🔗 Kontakt & Ressourcen:
${links}

⭐ Wenn dir diese Folge etwas gebracht hat, hinterlasse kurz eine Bewertung bei Apple Podcasts oder Spotify – das unterstützt die Show direkt!`,
    showBio: ({ title, audience, points, links }) => `Willkommen bei ${title} – dem Podcast, der für ${audience} gemacht ist.

Jede Woche gibt es ungefilterte Gespräche, taktische Analysen und Deep Dives zu: ${points}

Kein Geschwafel, keine aufgewärmten Floskeln. Nur umsetzbare Erkenntnisse und erprobte Playbooks, die dein Handwerk voranbringen.

Abonniere jetzt bei Apple Podcasts, Spotify oder wo auch immer du Audio hörst, damit du keine Folge verpasst.

🌐 Weitere Ressourcen:
${links}`,
  },
  it: {
    gen: "Genera:", ep: "Descrizione dell'episodio", show: "Bio del programma / canale", epTitle: "Titolo dell'episodio", showName: "Nome del podcast",
    aud: "Pubblico di riferimento", topics: "Temi chiave e spunti", linksLabel: "Link del conduttore / CTA",
    seo: (n) => `Descrizione ottimizzata per la SEO (${n} caratteri)`, copy: "Copia descrizione", copied: "Copiato!",
    mobile: "Taglio “Altro” su mobile", mobileNote: "Apple Podcasts tronca le descrizioni dopo circa 140 caratteri. Assicurati che il tuo gancio principale rientri qui:",
    more: " ...altro", ok: "✓ La parola chiave principale e il gancio per l'ascoltatore compaiono prima del taglio.",
    d: { title: "Crescere senza bruciarsi", audience: "Fondatori autofinanziati e creator indipendenti", points: "Come delegare le attività a basso valore, evitare l'affaticamento da agenda e proteggere l'energia mentale durante le fasi di crescita.", links: "Sito web: https://example.com\nTwitter: @podcasthost" },
    episode: ({ title, audience, bullets, links }) => `Perché tanti professionisti ad alte prestazioni si scontrano con un muro invisibile proprio quando il business decolla? In questo episodio analizziamo sistemi concreti perché ${audience} padroneggino ${title}.

Temi chiave di questo episodio:
• ${bullets}

Che tu sia nel pieno della tua prima impresa o stia facendo crescere un team esistente, questa conversazione ti offre modelli mentali pratici da applicare subito.

🔗 Contatti e risorse:
${links}

⭐ Se questo episodio ti è stato utile, lascia una rapida valutazione su Apple Podcasts o Spotify: sostiene direttamente il programma!`,
    showBio: ({ title, audience, points, links }) => `Benvenuti in ${title}, il podcast definitivo pensato per ${audience}.

Ogni settimana ti portiamo conversazioni senza filtri, analisi tattiche e approfondimenti su ${points}

Niente fronzoli né luoghi comuni riciclati. Solo spunti concreti e strategie collaudate per far crescere il tuo mestiere.

Iscriviti ora su Apple Podcasts, Spotify o dove ascolti audio per non perdere nemmeno un episodio.

🌐 Scopri altre risorse:
${links}`,
  },
  pt: {
    gen: "Gerar:", ep: "Descrição do episódio", show: "Bio geral do programa / canal", epTitle: "Título do episódio", showName: "Nome do podcast",
    aud: "Público-alvo", topics: "Principais temas e aprendizados", linksLabel: "Links do apresentador / CTA",
    seo: (n) => `Descrição otimizada para SEO (${n} caracteres)`, copy: "Copiar descrição", copied: "Copiado!",
    mobile: "Corte do “Ver mais” no celular", mobileNote: "O Apple Podcasts corta as descrições após cerca de 140 caracteres. Garanta que o seu gancho principal caiba aqui:",
    more: " ...mais", ok: "✓ A palavra-chave principal e o gancho para o ouvinte aparecem antes do corte.",
    d: { title: "Crescer sem esgotamento", audience: "Fundadores bootstrapped e criadores independentes", points: "Como delegar tarefas de baixo impacto, evitar a fadiga de agenda e proteger a energia mental nas fases de crescimento.", links: "Site: https://example.com\nTwitter: @podcasthost" },
    episode: ({ title, audience, bullets, links }) => `Por que tantos construtores de alto desempenho esbarram em uma parede invisível justamente quando o negócio decola? Neste episódio, detalhamos sistemas práticos para que ${audience} dominem ${title}.

Principais temas deste episódio:
• ${bullets}

Esteja você no meio do seu primeiro empreendimento ou escalando uma equipe, esta conversa traz modelos mentais práticos que você pode aplicar imediatamente.

🔗 Conecte-se e recursos:
${links}

⭐ Se este episódio foi útil, deixe uma avaliação rápida no Apple Podcasts ou no Spotify — isso apoia diretamente o programa!`,
    showBio: ({ title, audience, points, links }) => `Bem-vindo ao ${title}, o podcast definitivo feito para ${audience}.

Toda semana, trazemos conversas sem filtro, análises táticas e mergulhos profundos em ${points}

Sem enrolação, sem clichês reciclados. Apenas insights aplicáveis e estratégias comprovadas para elevar o seu ofício.

Inscreva-se agora no Apple Podcasts, no Spotify ou onde você ouve áudio para não perder nenhum episódio.

🌐 Explore mais recursos:
${links}`,
  },
  ja: {
    gen: "作成対象：", ep: "エピソード説明文", show: "番組／チャンネル全体の紹介文", epTitle: "エピソードタイトル", showName: "ポッドキャスト名",
    aud: "ターゲット層", topics: "主なトピックと学び", linksLabel: "ホストのリンク／行動喚起",
    seo: (n) => `SEO最適化された説明文（${n}文字）`, copy: "説明文をコピー", copied: "コピーしました！",
    mobile: "モバイルの「もっと見る」切り取り位置", mobileNote: "Apple Podcastsでは説明文が最初の約140文字で省略されます。最も重要なフックがここに収まるようにしましょう：",
    more: " ...もっと見る", ok: "✓ メインキーワードとリスナー向けのフックが切り取り位置より前に表示されています。",
    d: { title: "燃え尽きずに事業を伸ばす", audience: "自己資金で事業を営む創業者とソロクリエイター", points: "成長期に、効果の低いタスクを任せ、スケジュール疲れを避け、精神的なエネルギーを守る方法。", links: "ウェブサイト：https://example.com\nTwitter：@podcasthost" },
    episode: ({ title, audience, bullets, links }) => `成果を出し続けてきた人ほど、事業が軌道に乗った途端に見えない壁にぶつかるのはなぜでしょうか？このエピソードでは、${audience}が「${title}」を身につけるための実践的な仕組みを解説します。

このエピソードの主なトピック：
• ${bullets}

初めての挑戦の真っ只中でも、既存チームを拡大している最中でも、すぐに使える実践的な考え方が得られます。

🔗 つながる・リソース：
${links}

⭐ このエピソードが役に立ったら、Apple PodcastsやSpotifyで簡単な評価をお願いします。番組の大きな支えになります！`,
    showBio: ({ title, audience, points, links }) => `${title}へようこそ。${audience}のために作られた決定版のポッドキャストです。

毎週、本音のトーク、実践的な解説、そして次のテーマの深掘りをお届けします：${points}

無駄話も使い回しの決まり文句もありません。あなたの腕を磨くための、すぐに使える知見と実証済みの手法だけをお届けします。

エピソードを聞き逃さないよう、Apple PodcastsやSpotifyなど普段お使いのアプリで今すぐ登録してください。

🌐 その他のリソース：
${links}`,
  },
  ko: {
    gen: "생성:", ep: "에피소드 설명", show: "프로그램 / 채널 전체 소개", epTitle: "에피소드 제목", showName: "팟캐스트 이름",
    aud: "타깃 청중", topics: "핵심 주제 및 요점", linksLabel: "진행자 링크 / CTA",
    seo: (n) => `SEO 최적화 설명 (${n}자)`, copy: "설명 복사", copied: "복사됨!",
    mobile: "모바일 “더 보기” 잘림 위치", mobileNote: "Apple Podcasts는 설명을 처음 약 140자 이후에서 잘라 냅니다. 가장 중요한 훅이 이 안에 들어오는지 확인하세요:",
    more: " ...더 보기", ok: "✓ 핵심 키워드와 청취자 훅이 잘림 위치 이전에 나타납니다.",
    d: { title: "번아웃 없이 성장하기", audience: "자기 자본으로 창업한 창업가와 1인 크리에이터", points: "성장기에 효율이 낮은 업무를 위임하고, 일정 피로를 피하며, 정신적 에너지를 지키는 방법.", links: "웹사이트: https://example.com\n트위터: @podcasthost" },
    episode: ({ title, audience, bullets, links }) => `왜 많은 고성과 창업가들이 사업이 막 오르려는 순간 보이지 않는 벽에 부딪힐까요? 이번 에피소드에서는 ${audience}이(가) '${title}'을(를) 해내기 위한 실행 가능한 시스템을 분석합니다.

이번 에피소드의 핵심 주제:
• ${bullets}

첫 사업의 한가운데에 있든 기존 팀을 키우고 있든, 이 대화에서 바로 적용할 수 있는 실용적인 사고 모델을 얻을 수 있습니다.

🔗 연결 및 자료:
${links}

⭐ 이번 에피소드가 도움이 되셨다면 Apple Podcasts나 Spotify에 간단한 평점을 남겨 주세요. 프로그램에 큰 힘이 됩니다!`,
    showBio: ({ title, audience, points, links }) => `${audience}을(를) 위해 만든 결정판 팟캐스트, ${title}에 오신 것을 환영합니다.

매주 꾸밈없는 대화, 전술적 분석, 그리고 다음 주제에 대한 심층 탐구를 전해 드립니다: ${points}

군더더기도, 재탕한 상투어도 없습니다. 실력을 끌어올릴 실행 가능한 인사이트와 검증된 방법만 드립니다.

에피소드를 놓치지 않도록 지금 바로 Apple Podcasts, Spotify 등 사용 중인 앱에서 구독하세요.

🌐 더 많은 자료:
${links}`,
  },
};

export function DescriptionGenerator({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const ui = TEXT[lang] || TEXT.en;
  const lc = lcFor(lang);
  const [mode, setMode] = useState<"episode" | "show">("episode");
  const [title, setTitle] = useState(ui.d.title);
  const [audience, setAudience] = useState(ui.d.audience);
  const [keyPoints, setKeyPoints] = useState(ui.d.points);
  const [links, setLinks] = useState(ui.d.links);
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => {
    const v: V = {
      title: mode === "episode" ? lc(title) : title,
      audience: lc(audience),
      points: lc(keyPoints),
      bullets: keyPoints.replace(/\n/g, "\n• "),
      links,
    };
    return mode === "episode" ? ui.episode(v) : ui.showBio(v);
  }, [mode, title, audience, keyPoints, links, ui]);

  // Mobile cut-off check (first 140 chars)
  const mobileHook = output.slice(0, 140);

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-6">
      {/* Controls */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        {/* Mode Switcher */}
        <div className="flex items-center gap-2 pb-3 border-b border-studio-border/60">
          <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mr-2">{ui.gen}</span>
          <button
            onClick={() => setMode("episode")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === "episode"
                ? "bg-orange-500 text-white shadow-sm"
                : "bg-studio-darkest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
            }`}
          >
            {ui.ep}
          </button>
          <button
            onClick={() => setMode("show")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === "show"
                ? "bg-orange-500 text-white shadow-sm"
                : "bg-studio-darkest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
            }`}
          >
            {ui.show}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {mode === "episode" ? ui.epTitle : ui.showName}
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.aud}
            </label>
            <input
              type="text"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            {ui.topics}
          </label>
          <textarea
            rows={2}
            value={keyPoints}
            onChange={(e) => setKeyPoints(e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70 resize-y"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            {ui.linksLabel}
          </label>
          <input
            type="text"
            value={links}
            onChange={(e) => setLinks(e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
          />
        </div>
      </div>

      {/* Output & Mobile Preview Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Full Output */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-studio-border/60 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                {ui.seo(output.length)}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? ui.copied : ui.copy}
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-studio-darkest border border-studio-border text-xs text-neutral-900 dark:text-neutral-100 font-sans leading-relaxed whitespace-pre-wrap max-h-[380px] overflow-y-auto select-text">
              {output}
            </pre>
          </div>
        </div>

        {/* Mobile Cut-Off Inspector */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-studio-border/60">
            <Smartphone className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
              {ui.mobile}
            </h3>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            {ui.mobileNote}
          </p>
          <div className="p-3.5 rounded-xl bg-studio-darkest border border-studio-border text-xs text-neutral-900 dark:text-neutral-100 leading-relaxed font-sans">
            <span className="text-orange-600 dark:text-orange-300 font-semibold">{mobileHook}</span>
            <span className="text-neutral-500">{ui.more}</span>
          </div>
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium block">
            {ui.ok}
          </span>
        </div>
      </div>
    </div>
  );
}

