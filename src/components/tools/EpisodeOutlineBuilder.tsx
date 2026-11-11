"use client";

import React, { useState } from "react";
import { ListOrdered, Plus, Trash2, Copy, Check, Download, Clock, Sparkles, FileText, ExternalLink } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

interface Segment {
  id: string;
  title: string;
  durationMin: number;
  notes: string;
}

const DURATIONS = [2, 3, 12, 2, 18, 8];

type OutlineText = {
  titleLabel: string; durLabel: string; mins: string; budget: (t: number, g: number) => string; perfect: string;
  over: (n: number) => string; left: (n: number) => string; segs: (n: number) => string; add: string; copy: string; copied: string;
  exportMd: string; pdfTitle: string; gdocsTitle: string; gdocs: string; durationShort: string; minShort: string; removeTitle: string; notesPh: string;
  mdHead: (t: string) => string; mdTarget: (g: number, b: number) => string; mdSeg: (i: number, t: string, start: string, m: number) => string; mdNotes: string;
  d: { title: string; segs: [string, string][]; }; newSeg: [string, string];
};

const TEXT: Record<SupportedLocale, OutlineText> = {
  en: { titleLabel: "Episode Title / Working Name", durLabel: "Target Duration (Minutes)", mins: "mins", budget: (t, g) => `Time Budget: ${t} of ${g} mins planned`, perfect: "Perfect Match", over: (n) => `+${n}m over budget`, left: (n) => `${n}m remaining`,
    segs: (n) => `Episode Run of Show Segments (${n})`, add: "Add Segment", copy: "Copy Markdown", copied: "Copied!", exportMd: "Export MD", pdfTitle: "Download Podcast Script Template PDF", gdocsTitle: "Open Template in Google Docs", gdocs: "Google Docs",
    durationShort: "Duration:", minShort: "min", removeTitle: "Remove segment", notesPh: "Key bullet points, quotes, questions, or sponsor copy...",
    mdHead: (t) => `# RUN OF SHOW: ${t}`, mdTarget: (g, b) => `Target Duration: ${g} mins | Budgeted: ${b} mins\n`, mdSeg: (i, t, s, m) => `### Segment ${i}: ${t} (${s} - ${m} mins)`, mdNotes: "*Notes & Talking Points:*",
    d: { title: "How to Build a High-Trust Creator Brand", segs: [
      ["Cold Open & High-Stakes Teaser", "Quote the most controversial takeaway from the middle of the conversation."],
      ["Show Intro & Sponsor Roll", "Welcome listeners, state the promise of the episode, 30s sponsor shoutout."],
      ["Act 1: The Problem with Traditional Positioning", "Break down why generic branding fails and present 2 real examples."],
      ["Mid-Roll Ad Break & Review CTA", "Host-read sponsor message + prompt listeners to follow on Spotify/Apple."],
      ["Act 2: The 3-Pillar Positioning Framework", "Deep dive into Pillar 1 (Authority), Pillar 2 (Vulnerability), Pillar 3 (Consistency)."],
      ["Outro, Homework & Next Week Preview", "Summarize 1 immediate action item, thank the guest, play outro music."],
    ] }, newSeg: ["New Discussion Segment", "Key talking points and questions..."] },
  es: { titleLabel: "Título del episodio / nombre provisional", durLabel: "Duración objetivo (minutos)", mins: "min", budget: (t, g) => `Presupuesto de tiempo: ${t} de ${g} min planificados`, perfect: "Coincidencia exacta", over: (n) => `+${n} min sobre el presupuesto`, left: (n) => `${n} min restantes`,
    segs: (n) => `Segmentos del guion del episodio (${n})`, add: "Añadir segmento", copy: "Copiar Markdown", copied: "¡Copiado!", exportMd: "Exportar MD", pdfTitle: "Descargar plantilla de guion de pódcast en PDF", gdocsTitle: "Abrir plantilla en Google Docs", gdocs: "Google Docs",
    durationShort: "Duración:", minShort: "min", removeTitle: "Eliminar segmento", notesPh: "Puntos clave, citas, preguntas o texto del patrocinador...",
    mdHead: (t) => `# ESCALETA: ${t}`, mdTarget: (g, b) => `Duración objetivo: ${g} min | Presupuestado: ${b} min\n`, mdSeg: (i, t, s, m) => `### Segmento ${i}: ${t} (${s} - ${m} min)`, mdNotes: "*Notas y puntos de conversación:*",
    d: { title: "Cómo construir una marca de creador de alta confianza", segs: [
      ["Arranque en frío y avance de alto impacto", "Cita la conclusión más polémica de la mitad de la conversación."],
      ["Intro del programa y patrocinadores", "Da la bienvenida, expón la promesa del episodio y haz una mención de 30 s al patrocinador."],
      ["Acto 1: el problema del posicionamiento tradicional", "Explica por qué fracasa la marca genérica y presenta 2 ejemplos reales."],
      ["Pausa publicitaria y llamada a reseñar", "Mensaje del patrocinador leído por el anfitrión + invitación a seguir en Spotify/Apple."],
      ["Acto 2: el marco de posicionamiento de 3 pilares", "Análisis del pilar 1 (autoridad), pilar 2 (vulnerabilidad) y pilar 3 (constancia)."],
      ["Cierre, tarea y avance de la próxima semana", "Resume 1 acción inmediata, agradece al invitado y pon la música de cierre."],
    ] }, newSeg: ["Nuevo segmento de conversación", "Puntos clave y preguntas..."] },
  fr: { titleLabel: "Titre de l'épisode / nom provisoire", durLabel: "Durée cible (minutes)", mins: "min", budget: (t, g) => `Budget temps : ${t} min planifiées sur ${g}`, perfect: "Parfait", over: (n) => `+${n} min au-dessus du budget`, left: (n) => `${n} min restantes`,
    segs: (n) => `Segments du conducteur de l'épisode (${n})`, add: "Ajouter un segment", copy: "Copier le Markdown", copied: "Copié !", exportMd: "Exporter en MD", pdfTitle: "Télécharger le modèle de script de podcast (PDF)", gdocsTitle: "Ouvrir le modèle dans Google Docs", gdocs: "Google Docs",
    durationShort: "Durée :", minShort: "min", removeTitle: "Supprimer le segment", notesPh: "Points clés, citations, questions ou texte du sponsor...",
    mdHead: (t) => `# CONDUCTEUR : ${t}`, mdTarget: (g, b) => `Durée cible : ${g} min | Prévu : ${b} min\n`, mdSeg: (i, t, s, m) => `### Segment ${i} : ${t} (${s} - ${m} min)`, mdNotes: "*Notes et points de discussion :*",
    d: { title: "Comment construire une marque de créateur de confiance", segs: [
      ["Ouverture à froid et teaser à fort enjeu", "Citez l'enseignement le plus polémique du milieu de la conversation."],
      ["Intro de l'émission et sponsors", "Accueillez les auditeurs, énoncez la promesse de l'épisode, mention de 30 s du sponsor."],
      ["Acte 1 : le problème du positionnement traditionnel", "Expliquez pourquoi la marque générique échoue et présentez 2 exemples réels."],
      ["Pause pub et appel à laisser un avis", "Message du sponsor lu par l'animateur + invitation à s'abonner sur Spotify/Apple."],
      ["Acte 2 : le cadre de positionnement en 3 piliers", "Analyse du pilier 1 (autorité), du pilier 2 (vulnérabilité) et du pilier 3 (constance)."],
      ["Conclusion, devoirs et aperçu de la semaine prochaine", "Résumez 1 action immédiate, remerciez l'invité, lancez la musique de fin."],
    ] }, newSeg: ["Nouveau segment de discussion", "Points clés et questions..."] },
  de: { titleLabel: "Episodentitel / Arbeitstitel", durLabel: "Ziellänge (Minuten)", mins: "Min.", budget: (t, g) => `Zeitbudget: ${t} von ${g} Min. geplant`, perfect: "Passt genau", over: (n) => `+${n} Min. über dem Budget`, left: (n) => `${n} Min. übrig`,
    segs: (n) => `Segmente des Folgenablaufs (${n})`, add: "Segment hinzufügen", copy: "Markdown kopieren", copied: "Kopiert!", exportMd: "MD exportieren", pdfTitle: "Podcast-Skriptvorlage als PDF herunterladen", gdocsTitle: "Vorlage in Google Docs öffnen", gdocs: "Google Docs",
    durationShort: "Dauer:", minShort: "Min.", removeTitle: "Segment entfernen", notesPh: "Stichpunkte, Zitate, Fragen oder Sponsorentext...",
    mdHead: (t) => `# ABLAUFPLAN: ${t}`, mdTarget: (g, b) => `Ziellänge: ${g} Min. | Eingeplant: ${b} Min.\n`, mdSeg: (i, t, s, m) => `### Segment ${i}: ${t} (${s} - ${m} Min.)`, mdNotes: "*Notizen & Gesprächspunkte:*",
    d: { title: "So baust du eine Creator-Marke mit hohem Vertrauen auf", segs: [
      ["Cold Open & Teaser mit hohem Einsatz", "Zitiere die kontroverseste Erkenntnis aus der Mitte des Gesprächs."],
      ["Show-Intro & Sponsoren", "Hörer begrüßen, Versprechen der Folge nennen, 30 Sek. Sponsor-Shoutout."],
      ["Akt 1: Das Problem mit klassischem Positioning", "Erkläre, warum generisches Branding scheitert, und zeige 2 echte Beispiele."],
      ["Mid-Roll-Werbung & Bewertungsaufruf", "Vom Host gelesene Sponsorennachricht + Aufruf, bei Spotify/Apple zu folgen."],
      ["Akt 2: Das 3-Säulen-Positioning-Framework", "Deep Dive in Säule 1 (Autorität), Säule 2 (Verletzlichkeit), Säule 3 (Beständigkeit)."],
      ["Outro, Hausaufgabe & Vorschau auf nächste Woche", "1 sofortige Handlungsempfehlung zusammenfassen, Gast danken, Outro-Musik abspielen."],
    ] }, newSeg: ["Neues Gesprächssegment", "Kernpunkte und Fragen..."] },
  it: { titleLabel: "Titolo dell'episodio / nome provvisorio", durLabel: "Durata obiettivo (minuti)", mins: "min", budget: (t, g) => `Budget di tempo: ${t} su ${g} min pianificati`, perfect: "Perfetto", over: (n) => `+${n} min oltre il budget`, left: (n) => `${n} min rimanenti`,
    segs: (n) => `Segmenti della scaletta dell'episodio (${n})`, add: "Aggiungi segmento", copy: "Copia Markdown", copied: "Copiato!", exportMd: "Esporta MD", pdfTitle: "Scarica il modello di script per podcast in PDF", gdocsTitle: "Apri il modello in Google Docs", gdocs: "Google Docs",
    durationShort: "Durata:", minShort: "min", removeTitle: "Rimuovi segmento", notesPh: "Punti chiave, citazioni, domande o testo dello sponsor...",
    mdHead: (t) => `# SCALETTA: ${t}`, mdTarget: (g, b) => `Durata obiettivo: ${g} min | Pianificati: ${b} min\n`, mdSeg: (i, t, s, m) => `### Segmento ${i}: ${t} (${s} - ${m} min)`, mdNotes: "*Note e spunti di discussione:*",
    d: { title: "Come costruire un brand da creator ad alta fiducia", segs: [
      ["Apertura a freddo e anteprima ad alto impatto", "Cita lo spunto più controverso emerso a metà conversazione."],
      ["Intro del programma e sponsor", "Dai il benvenuto, enuncia la promessa dell'episodio, menzione di 30 s allo sponsor."],
      ["Atto 1: il problema del posizionamento tradizionale", "Spiega perché il branding generico fallisce e presenta 2 esempi reali."],
      ["Pausa pubblicitaria e invito alla recensione", "Messaggio dello sponsor letto dal conduttore + invito a seguire su Spotify/Apple."],
      ["Atto 2: il framework di posizionamento a 3 pilastri", "Approfondimento su pilastro 1 (autorevolezza), pilastro 2 (vulnerabilità), pilastro 3 (coerenza)."],
      ["Chiusura, compiti e anteprima della prossima settimana", "Riassumi 1 azione immediata, ringrazia l'ospite, parte la musica finale."],
    ] }, newSeg: ["Nuovo segmento di discussione", "Punti chiave e domande..."] },
  pt: { titleLabel: "Título do episódio / nome provisório", durLabel: "Duração-alvo (minutos)", mins: "min", budget: (t, g) => `Orçamento de tempo: ${t} de ${g} min planejados`, perfect: "Combinação perfeita", over: (n) => `+${n} min acima do orçamento`, left: (n) => `${n} min restantes`,
    segs: (n) => `Segmentos do roteiro do episódio (${n})`, add: "Adicionar segmento", copy: "Copiar Markdown", copied: "Copiado!", exportMd: "Exportar MD", pdfTitle: "Baixar modelo de roteiro de podcast em PDF", gdocsTitle: "Abrir modelo no Google Docs", gdocs: "Google Docs",
    durationShort: "Duração:", minShort: "min", removeTitle: "Remover segmento", notesPh: "Pontos principais, citações, perguntas ou texto do patrocinador...",
    mdHead: (t) => `# ESPELHO DO EPISÓDIO: ${t}`, mdTarget: (g, b) => `Duração-alvo: ${g} min | Orçado: ${b} min\n`, mdSeg: (i, t, s, m) => `### Segmento ${i}: ${t} (${s} - ${m} min)`, mdNotes: "*Notas e pontos de conversa:*",
    d: { title: "Como construir uma marca de criador de alta confiança", segs: [
      ["Abertura direta e teaser de alto impacto", "Cite o aprendizado mais polêmico do meio da conversa."],
      ["Introdução do programa e patrocinadores", "Dê as boas-vindas, apresente a promessa do episódio, menção de 30 s ao patrocinador."],
      ["Ato 1: o problema do posicionamento tradicional", "Explique por que a marca genérica falha e apresente 2 exemplos reais."],
      ["Intervalo comercial e pedido de avaliação", "Mensagem do patrocinador lida pelo apresentador + convite para seguir no Spotify/Apple."],
      ["Ato 2: o framework de posicionamento de 3 pilares", "Mergulho no pilar 1 (autoridade), pilar 2 (vulnerabilidade) e pilar 3 (consistência)."],
      ["Encerramento, lição de casa e prévia da próxima semana", "Resuma 1 ação imediata, agradeça ao convidado e toque a música de encerramento."],
    ] }, newSeg: ["Novo segmento de conversa", "Pontos principais e perguntas..."] },
  ja: { titleLabel: "エピソードタイトル／仮タイトル", durLabel: "目標時間（分）", mins: "分", budget: (t, g) => `時間配分：${g}分のうち${t}分を計画済み`, perfect: "ぴったり", over: (n) => `予定を${n}分超過`, left: (n) => `残り${n}分`,
    segs: (n) => `エピソード進行表のセグメント（${n}）`, add: "セグメントを追加", copy: "Markdownをコピー", copied: "コピーしました！", exportMd: "MDを書き出す", pdfTitle: "ポッドキャスト台本テンプレートPDFをダウンロード", gdocsTitle: "Googleドキュメントでテンプレートを開く", gdocs: "Googleドキュメント",
    durationShort: "所要時間：", minShort: "分", removeTitle: "セグメントを削除", notesPh: "要点、引用、質問、スポンサー原稿など…",
    mdHead: (t) => `# 進行表：${t}`, mdTarget: (g, b) => `目標時間：${g}分 | 配分合計：${b}分\n`, mdSeg: (i, t, s, m) => `### セグメント${i}：${t}（${s} - ${m}分）`, mdNotes: "*メモ・トークポイント：*",
    d: { title: "信頼されるクリエイターブランドの築き方", segs: [
      ["コールドオープンと引きの強い予告", "会話の中盤で出た最も物議を醸す学びを引用する。"],
      ["番組イントロとスポンサー紹介", "リスナーに挨拶し、エピソードの約束を伝え、30秒のスポンサー紹介を行う。"],
      ["第1幕：従来のポジショニングの問題点", "汎用的なブランディングが失敗する理由を解説し、実例を2つ紹介する。"],
      ["ミッドロール広告とレビューのお願い", "ホストが読むスポンサーメッセージ＋Spotify／Appleでのフォローを促す。"],
      ["第2幕：3本柱のポジショニングフレームワーク", "柱1（権威）、柱2（弱さの開示）、柱3（一貫性）を深掘りする。"],
      ["アウトロ、宿題、来週の予告", "すぐ実行できる行動を1つにまとめ、ゲストに感謝し、アウトロ曲を流す。"],
    ] }, newSeg: ["新しいトークセグメント", "要点と質問…"] },
  ko: { titleLabel: "에피소드 제목 / 가제", durLabel: "목표 길이 (분)", mins: "분", budget: (t, g) => `시간 예산: 목표 ${g}분 중 ${t}분 계획됨`, perfect: "딱 맞음", over: (n) => `예산 ${n}분 초과`, left: (n) => `${n}분 남음`,
    segs: (n) => `에피소드 진행표 구간 (${n})`, add: "구간 추가", copy: "마크다운 복사", copied: "복사됨!", exportMd: "MD 내보내기", pdfTitle: "팟캐스트 대본 템플릿 PDF 다운로드", gdocsTitle: "Google Docs에서 템플릿 열기", gdocs: "Google Docs",
    durationShort: "길이:", minShort: "분", removeTitle: "구간 삭제", notesPh: "핵심 요점, 인용, 질문 또는 스폰서 멘트...",
    mdHead: (t) => `# 진행표: ${t}`, mdTarget: (g, b) => `목표 길이: ${g}분 | 배정: ${b}분\n`, mdSeg: (i, t, s, m) => `### 구간 ${i}: ${t} (${s} - ${m}분)`, mdNotes: "*메모 및 토킹 포인트:*",
    d: { title: "신뢰받는 크리에이터 브랜드를 만드는 법", segs: [
      ["콜드 오픈 및 임팩트 있는 예고", "대화 중반에 나온 가장 논쟁적인 요점을 인용한다."],
      ["프로그램 인트로 및 스폰서 소개", "청취자를 환영하고 에피소드의 약속을 알리며 30초 스폰서 멘트를 한다."],
      ["1막: 전통적인 포지셔닝의 문제", "범용 브랜딩이 실패하는 이유를 설명하고 실제 사례 2개를 소개한다."],
      ["미드롤 광고 및 리뷰 요청", "진행자가 읽는 스폰서 메시지 + Spotify/Apple 팔로우 안내."],
      ["2막: 3대 기둥 포지셔닝 프레임워크", "기둥 1(권위), 기둥 2(취약성), 기둥 3(일관성)을 깊이 다룬다."],
      ["아웃트로, 과제 및 다음 주 예고", "즉시 실행할 행동 1가지를 요약하고 게스트에게 감사한 뒤 아웃트로 음악을 튼다."],
    ] }, newSeg: ["새 토론 구간", "핵심 포인트와 질문..."] },
};

export function EpisodeOutlineBuilder({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const ui = TEXT[lang] || TEXT.en;
  const [episodeTitle, setEpisodeTitle] = useState(ui.d.title);
  const [targetDuration, setTargetDuration] = useState<number>(45);
  const [copied, setCopied] = useState(false);

  const [segments, setSegments] = useState<Segment[]>(
    ui.d.segs.map(([title, notes], i) => ({ id: String(i + 1), title, durationMin: DURATIONS[i], notes }))
  );

  const totalBudgeted = segments.reduce((acc, s) => acc + (Number(s.durationMin) || 0), 0);

  const handleAddSegment = () => {
    setSegments([
      ...segments,
      {
        id: Date.now().toString(),
        title: ui.newSeg[0],
        durationMin: 5,
        notes: ui.newSeg[1],
      },
    ]);
  };

  const handleRemoveSegment = (id: string) => {
    if (segments.length <= 1) return;
    setSegments(segments.filter((s) => s.id !== id));
  };

  const handleUpdateSegment = (id: string, field: keyof Segment, val: any) => {
    setSegments(
      segments.map((s) => (s.id === id ? { ...s, [field]: val } : s))
    );
  };

  const generateMarkdown = () => {
    let accumulatedMin = 0;
    const lines = [
      ui.mdHead(episodeTitle),
      ui.mdTarget(targetDuration, totalBudgeted),
      `---`,
    ];

    segments.forEach((s, idx) => {
      const startMin = accumulatedMin;
      accumulatedMin += Number(s.durationMin) || 0;
      const startFormatted = `${Math.floor(startMin).toString().padStart(2, "0")}:00`;
      lines.push(
        ui.mdSeg(idx + 1, s.title, startFormatted, Number(s.durationMin) || 0),
        `${ui.mdNotes} ${s.notes}\n`
      );
    });

    return lines.join("\n");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const text = generateMarkdown();
    const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    // non-Latin titles slug to "-", so fall back to a fixed name
    const slug = episodeTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "episode";
    link.download = `run-of-show-${slug}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-6">
      {/* Top Header Card */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-2 space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.titleLabel}
            </label>
            <input
              type="text"
              value={episodeTitle}
              onChange={(e) => setEpisodeTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.durLabel}
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={5}
                max={180}
                value={targetDuration}
                onChange={(e) => setTargetDuration(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-orange-500/70 text-center font-mono font-bold"
              />
              <span className="text-xs text-neutral-500">{ui.mins}</span>
            </div>
          </div>
        </div>

        {/* Time Budget Status Bar */}
        <div className="p-4 rounded-xl bg-studio-darkest border border-studio-border space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-orange-500 dark:text-orange-400" />
              {ui.budget(totalBudgeted, targetDuration)}
            </span>
            <span
              className={
                totalBudgeted === targetDuration
                  ? "text-emerald-400"
                  : totalBudgeted > targetDuration
                  ? "text-amber-400"
                  : "text-blue-400"
              }
            >
              {totalBudgeted === targetDuration
                ? ui.perfect
                : totalBudgeted > targetDuration
                ? ui.over(totalBudgeted - targetDuration)
                : ui.left(targetDuration - totalBudgeted)}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-studio-card h-2 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${
                totalBudgeted > targetDuration ? "bg-amber-400" : "bg-orange-500"
              }`}
              style={{ width: `${Math.min((totalBudgeted / targetDuration) * 100, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Segments List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {ui.segs(segments.length)}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleAddSegment}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <Plus className="w-3.5 h-3.5" /> {ui.add}
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-studio-card hover:bg-studio-elevated text-slate-300 hover:text-white border border-studio-border text-xs font-semibold transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? ui.copied : ui.copy}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-studio-card hover:bg-studio-elevated text-slate-300 hover:text-white border border-studio-border text-xs font-semibold transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> {ui.exportMd}
            </button>
            <a
              href="/downloads/podcast-script-template.pdf"
              download="podcast-script-template.pdf"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-studio-card hover:bg-studio-elevated text-slate-300 hover:text-white border border-studio-border text-xs font-semibold transition-colors cursor-pointer"
              title={ui.pdfTitle}
            >
              <FileText className="w-3.5 h-3.5 text-orange-400" /> PDF
            </a>
            <a
              href="https://docs.google.com/document/create"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-studio-card hover:bg-studio-elevated text-slate-300 hover:text-white border border-studio-border text-xs font-semibold transition-colors cursor-pointer"
              title={ui.gdocsTitle}
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" /> {ui.gdocs}
            </a>
          </div>
        </div>

        <div className="space-y-3">
          {segments.map((seg, idx) => (
            <div
              key={seg.id}
              className="p-5 rounded-2xl bg-studio-card border border-studio-border hover:border-studio-border-hover transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1">
                  <span className="w-6 h-6 rounded-md bg-studio-darkest text-slate-400 flex items-center justify-center text-xs font-mono font-bold border border-studio-border flex-shrink-0">
                    {idx + 1}
                  </span>
                  <input
                    type="text"
                    value={seg.title}
                    onChange={(e) => handleUpdateSegment(seg.id, "title", e.target.value)}
                    className="w-full bg-transparent text-sm font-bold text-neutral-900 dark:text-white border-b border-transparent hover:border-studio-border focus:border-orange-500/70 focus:outline-none px-1 py-0.5"
                  />
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <div className="flex items-center gap-1 text-xs text-neutral-500">
                    <span>{ui.durationShort}</span>
                    <input
                      type="number"
                      min={1}
                      max={120}
                      value={seg.durationMin}
                      onChange={(e) => handleUpdateSegment(seg.id, "durationMin", Number(e.target.value))}
                      className="w-14 px-2 py-1 bg-studio-darkest border border-studio-border rounded text-neutral-900 dark:text-white font-mono text-xs text-center focus:outline-none"
                    />
                    <span>{ui.minShort}</span>
                  </div>

                  <button
                    onClick={() => handleRemoveSegment(seg.id)}
                    className="p-1 rounded text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
                    title={ui.removeTitle}
                    aria-label={ui.removeTitle}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div>
                <textarea
                  rows={2}
                  value={seg.notes}
                  onChange={(e) => handleUpdateSegment(seg.id, "notes", e.target.value)}
                  placeholder={ui.notesPh}
                  className="w-full px-3 py-2 rounded-xl bg-studio-darkest border border-studio-border text-xs text-neutral-900 dark:text-slate-300 placeholder-neutral-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-500/70 resize-y"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

