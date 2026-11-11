"use client";

import React, { useState } from "react";
import { Clock, Plus, Trash2, Copy, Check, Download, RotateCcw } from "lucide-react";
import { ChapterTimeline } from "./visuals/ChapterTimeline";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

interface ChapterRow {
  id: string;
  time: string; // e.g. "00:00"
  title: string;
}

const TIMES = ["00:00", "02:45", "11:20", "24:15", "38:50", "44:10"];

const TEXT: Record<SupportedLocale, {
  markers: (n: number) => string; add: string; remove: string; segPh: string; paste: string; pastePh: string; parse: string;
  out: string; copy: string; copied: string; foot: string; newChapter: string; chapterN: (n: number) => string; d: string[];
}> = {
  en: { markers: (n) => `Chapter Markers (${n})`, add: "Add Timestamp", remove: "Remove", segPh: "Segment title...", paste: "Or Paste Raw Text to Auto-Convert:", pastePh: "e.g. 0:00 Intro, 5:30 Breakthrough, 15:00 Wrap up", parse: "Auto-Parse", out: "YouTube & Spotify Formatted Output", copy: "Copy Timestamps", copied: "Copied!", foot: "Paste directly into YouTube video description or your podcast hosting show notes to trigger automatic clickable chapter markers.", newChapter: "New Chapter Title", chapterN: (n) => `Chapter ${n}`,
    d: ["Introduction & Episode Teaser", "Guest Background & Origin Story", "The 3 Biggest Mistakes Beginners Make", "Step-by-Step Execution Framework", "Audience Q&A & Rapid Fire", "Outro & Key Takeaways"] },
  es: { markers: (n) => `Marcadores de capítulo (${n})`, add: "Añadir marca de tiempo", remove: "Eliminar", segPh: "Título del segmento...", paste: "O pega texto sin formato para convertirlo automáticamente:", pastePh: "p. ej. 0:00 Intro, 5:30 Avance, 15:00 Cierre", parse: "Analizar", out: "Salida con formato para YouTube y Spotify", copy: "Copiar marcas de tiempo", copied: "¡Copiado!", foot: "Pégalo directamente en la descripción del vídeo de YouTube o en las notas del episodio de tu alojamiento de pódcast para activar capítulos clicables automáticos.", newChapter: "Título del nuevo capítulo", chapterN: (n) => `Capítulo ${n}`,
    d: ["Introducción y avance del episodio", "Trayectoria del invitado y su historia de origen", "Los 3 mayores errores de los principiantes", "Marco de ejecución paso a paso", "Preguntas del público y ronda rápida", "Cierre y conclusiones clave"] },
  fr: { markers: (n) => `Repères de chapitres (${n})`, add: "Ajouter un horodatage", remove: "Supprimer", segPh: "Titre du segment...", paste: "Ou collez du texte brut pour le convertir automatiquement :", pastePh: "ex. 0:00 Intro, 5:30 Déclic, 15:00 Conclusion", parse: "Analyser", out: "Sortie formatée pour YouTube et Spotify", copy: "Copier les horodatages", copied: "Copié !", foot: "Collez directement dans la description de votre vidéo YouTube ou dans les notes d'épisode de votre hébergeur de podcast pour activer des chapitres cliquables automatiques.", newChapter: "Titre du nouveau chapitre", chapterN: (n) => `Chapitre ${n}`,
    d: ["Introduction et teaser de l'épisode", "Parcours de l'invité et histoire d'origine", "Les 3 plus grosses erreurs des débutants", "Méthode d'exécution pas à pas", "Questions du public et questions rapides", "Conclusion et points clés"] },
  de: { markers: (n) => `Kapitelmarken (${n})`, add: "Zeitmarke hinzufügen", remove: "Entfernen", segPh: "Titel des Abschnitts...", paste: "Oder Rohtext einfügen und automatisch umwandeln:", pastePh: "z. B. 0:00 Intro, 5:30 Durchbruch, 15:00 Abschluss", parse: "Automatisch einlesen", out: "Formatierte Ausgabe für YouTube & Spotify", copy: "Zeitmarken kopieren", copied: "Kopiert!", foot: "Direkt in die YouTube-Videobeschreibung oder die Show Notes deines Podcast-Hosters einfügen, um automatisch anklickbare Kapitelmarken zu aktivieren.", newChapter: "Titel des neuen Kapitels", chapterN: (n) => `Kapitel ${n}`,
    d: ["Einführung & Folgen-Teaser", "Hintergrund des Gasts & Entstehungsgeschichte", "Die 3 größten Anfängerfehler", "Schritt-für-Schritt-Umsetzungsframework", "Publikumsfragen & Schnellfragerunde", "Abschluss & wichtigste Erkenntnisse"] },
  it: { markers: (n) => `Marcatori dei capitoli (${n})`, add: "Aggiungi timestamp", remove: "Rimuovi", segPh: "Titolo del segmento...", paste: "Oppure incolla testo grezzo da convertire automaticamente:", pastePh: "es. 0:00 Intro, 5:30 Svolta, 15:00 Chiusura", parse: "Analizza", out: "Output formattato per YouTube e Spotify", copy: "Copia timestamp", copied: "Copiato!", foot: "Incolla direttamente nella descrizione del video YouTube o nelle show notes del tuo hosting podcast per attivare capitoli cliccabili automatici.", newChapter: "Titolo del nuovo capitolo", chapterN: (n) => `Capitolo ${n}`,
    d: ["Introduzione e anteprima dell'episodio", "Background dell'ospite e storia delle origini", "I 3 errori più comuni dei principianti", "Metodo di esecuzione passo dopo passo", "Domande del pubblico e domande veloci", "Chiusura e punti chiave"] },
  pt: { markers: (n) => `Marcadores de capítulo (${n})`, add: "Adicionar marcador", remove: "Remover", segPh: "Título do segmento...", paste: "Ou cole texto bruto para converter automaticamente:", pastePh: "ex.: 0:00 Intro, 5:30 Virada, 15:00 Encerramento", parse: "Analisar", out: "Saída formatada para YouTube e Spotify", copy: "Copiar marcadores", copied: "Copiado!", foot: "Cole diretamente na descrição do vídeo do YouTube ou nas notas do episódio da sua hospedagem de podcast para ativar capítulos clicáveis automáticos.", newChapter: "Título do novo capítulo", chapterN: (n) => `Capítulo ${n}`,
    d: ["Introdução e teaser do episódio", "Histórico do convidado e história de origem", "Os 3 maiores erros dos iniciantes", "Framework de execução passo a passo", "Perguntas da audiência e rodada rápida", "Encerramento e principais aprendizados"] },
  ja: { markers: (n) => `チャプターマーカー（${n}）`, add: "タイムスタンプを追加", remove: "削除", segPh: "セグメントのタイトル…", paste: "または生テキストを貼り付けて自動変換：", pastePh: "例：0:00 イントロ, 5:30 転機, 15:00 まとめ", parse: "自動解析", out: "YouTube／Spotify向けの整形済み出力", copy: "タイムスタンプをコピー", copied: "コピーしました！", foot: "YouTubeの動画説明欄やポッドキャストホスティングのショーノートにそのまま貼り付けると、クリックできるチャプターが自動で有効になります。", newChapter: "新しいチャプターのタイトル", chapterN: (n) => `チャプター${n}`,
    d: ["イントロとエピソードの予告", "ゲストの経歴と原点の物語", "初心者が犯しがちな3大ミス", "ステップごとの実行フレームワーク", "リスナーからの質問と早押しコーナー", "アウトロと重要なポイント"] },
  ko: { markers: (n) => `챕터 마커 (${n})`, add: "타임스탬프 추가", remove: "삭제", segPh: "구간 제목...", paste: "또는 원본 텍스트를 붙여넣어 자동 변환:", pastePh: "예: 0:00 인트로, 5:30 전환점, 15:00 마무리", parse: "자동 분석", out: "YouTube 및 Spotify용 서식 출력", copy: "타임스탬프 복사", copied: "복사됨!", foot: "YouTube 영상 설명이나 팟캐스트 호스팅의 쇼노트에 그대로 붙여넣으면 클릭 가능한 챕터가 자동으로 활성화됩니다.", newChapter: "새 챕터 제목", chapterN: (n) => `챕터 ${n}`,
    d: ["인트로 및 에피소드 예고", "게스트 배경과 시작 이야기", "초보자가 가장 많이 하는 실수 3가지", "단계별 실행 프레임워크", "청중 질문 및 속사포 질문", "아웃트로 및 핵심 요약"] },
};

export function EpisodeTimestampGenerator({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const ui = TEXT[lang] || TEXT.en;
  const [chapters, setChapters] = useState<ChapterRow[]>(
    TIMES.map((time, i) => ({ id: String(i + 1), time, title: ui.d[i] }))
  );

  const [rawPaste, setRawPaste] = useState("");
  const [copied, setCopied] = useState(false);

  const handleAddChapter = () => {
    setChapters([
      ...chapters,
      {
        id: Date.now().toString(),
        time: "00:00",
        title: ui.newChapter,
      },
    ]);
  };

  const handleRemoveChapter = (id: string) => {
    if (chapters.length <= 1) return;
    setChapters(chapters.filter((c) => c.id !== id));
  };

  const handleUpdate = (id: string, field: "time" | "title", val: string) => {
    setChapters(chapters.map((c) => (c.id === id ? { ...c, [field]: val } : c)));
  };

  // Convert to formatted string
  const formattedOutput = chapters
    .map((c) => `${c.time.trim()} - ${c.title.trim()}`)
    .join("\n");

  const youtubeOutput = chapters
    .map((c) => `${c.time.trim()} ${c.title.trim()}`)
    .join("\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleParseRaw = () => {
    if (!rawPaste.trim()) return;

    const lines = rawPaste.split("\n");
    const parsed: ChapterRow[] = [];

    lines.forEach((line, idx) => {
      const match = line.match(/(\d{1,2}:\d{2}(?::\d{2})?)\s*(?:-|–|—)?\s*(.*)/);
      if (match) {
        parsed.push({
          id: idx.toString(),
          time: match[1],
          title: match[2]?.trim() || ui.chapterN(idx + 1),
        });
      }
    });

    if (parsed.length > 0) {
      setChapters(parsed);
      setRawPaste("");
    }
  };

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Interactive Table */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-studio-border/60">
            <h2 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400" />
              {ui.markers(chapters.length)}
            </h2>
            <button
              onClick={handleAddChapter}
              className="text-xs px-2.5 py-1 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold inline-flex items-center gap-1 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" /> {ui.add}
            </button>
          </div>

          {/* Chapter Rows */}
          <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
            {chapters.map((ch, idx) => (
              <div
                key={ch.id}
                className="flex items-center gap-2 p-2 rounded-xl bg-studio-darkest border border-studio-border"
              >
                <input
                  type="text"
                  value={ch.time}
                  onChange={(e) => handleUpdate(ch.id, "time", e.target.value)}
                  placeholder="00:00"
                  className="w-16 px-2 py-1.5 rounded-lg bg-studio-card border border-studio-border text-center font-mono text-xs font-bold text-orange-400 focus:outline-none"
                />
                <input
                  type="text"
                  value={ch.title}
                  onChange={(e) => handleUpdate(ch.id, "title", e.target.value)}
                  placeholder={ui.segPh}
                  className="flex-1 px-3 py-1.5 rounded-lg bg-transparent text-xs text-neutral-900 dark:text-white focus:outline-none"
                />
                <button
                  onClick={() => handleRemoveChapter(ch.id)}
                  className="p-1.5 text-neutral-400 hover:text-red-500 rounded transition-colors"
                  title={ui.remove}
                  aria-label={ui.remove}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Quick Raw Paste Converter */}
          <div className="pt-3 border-t border-studio-border/60 space-y-2">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              {ui.paste}
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={rawPaste}
                onChange={(e) => setRawPaste(e.target.value)}
                placeholder={ui.pastePh}
                className="flex-1 px-3 py-1.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none"
              />
              <button
                onClick={handleParseRaw}
                className="px-3 py-1.5 rounded-xl bg-studio-elevated hover:bg-studio-border text-neutral-700 dark:text-neutral-300 text-xs font-medium border border-studio-border cursor-pointer"
              >
                {ui.parse}
              </button>
            </div>
          </div>
        </div>

        {/* Right: Copyable Outputs */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-studio-border/60 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                {ui.out}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? ui.copied : ui.copy}
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-studio-darkest border border-studio-border text-xs font-mono text-neutral-900 dark:text-neutral-100 leading-relaxed overflow-x-auto min-h-[260px] whitespace-pre-wrap select-text">
              {youtubeOutput}
            </pre>
          </div>

          <div className="text-[11px] text-neutral-600 dark:text-neutral-400 pt-2 border-t border-studio-border/60">
            {ui.foot}
          </div>
        </div>
      </div>

      {/* Visual timeline + YouTube chapter rules */}
      <ChapterTimeline chapters={chapters} lang={lang} />
    </div>
  );
}

