"use client";

import React, { useState } from "react";
import { FileCode, Copy, Check, Download, RotateCcw, Sparkles } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

type TfText = {
  r1: string; r2: string; fillers: string; ts: string; paste: string; ph: string; out: string;
  copy: string; copied: string; download: string; words: (n: number) => string;
  fillerList: string; // regex alternatives for this language's filler words
  sample: string; s1: string; s2: string;
};

const TEXT: Record<SupportedLocale, TfText> = {
  en: {
    r1: "Replace Speaker 1 With:", r2: "Replace Speaker 2 With:", fillers: "Strip filler words (“um”, “uh”, “you know”)", ts: "Remove inline timestamps",
    paste: "Paste Raw Automated Transcript:", ph: "Paste Whisper, Otter, Descript or Zoom raw transcript text...", out: "Formatted Publication-Ready Transcript",
    copy: "Copy", copied: "Copied!", download: "Download File", words: (n) => `Word count: ${n} words`,
    fillerList: "um|uh|you know|like,\\s*basically",
    s1: "Sarah (Host)", s2: "Guest",
    sample: "SPEAKER_00: 00:01 Hey everyone, um, welcome to the show. Today we are, like, talking about AI audio tools.\nSPEAKER_01: 00:08 Thanks for having me. You know, it's really crazy how fast the technology is moving in 2026.\nSPEAKER_00: 00:15 Totally agree. So, uh, let's jump right into the first question.",
  },
  es: {
    r1: "Reemplazar Orador 1 por:", r2: "Reemplazar Orador 2 por:", fillers: "Quitar muletillas (“eh”, “este”, “o sea”)", ts: "Quitar marcas de tiempo en línea",
    paste: "Pega la transcripción automática sin procesar:", ph: "Pega el texto sin procesar de Whisper, Otter, Descript o Zoom...", out: "Transcripción formateada lista para publicar",
    copy: "Copiar", copied: "¡Copiado!", download: "Descargar archivo", words: (n) => `Recuento de palabras: ${n}`,
    fillerList: "eh|em|o sea",
    s1: "Sara (anfitriona)", s2: "Invitado",
    sample: "SPEAKER_00: 00:01 Hola a todos, eh, bienvenidos al programa. Hoy, o sea, hablamos de herramientas de audio con IA.\nSPEAKER_01: 00:08 Gracias por invitarme. Es una locura, este, lo rápido que avanza la tecnología en 2026.\nSPEAKER_00: 00:15 Totalmente de acuerdo. Bueno, eh, vamos directo a la primera pregunta.",
  },
  fr: {
    r1: "Remplacer Intervenant 1 par :", r2: "Remplacer Intervenant 2 par :", fillers: "Supprimer les mots de remplissage (« euh », « ben », « tu sais »)", ts: "Supprimer les horodatages dans le texte",
    paste: "Collez la transcription automatique brute :", ph: "Collez le texte brut de Whisper, Otter, Descript ou Zoom...", out: "Transcription formatée prête à publier",
    copy: "Copier", copied: "Copié !", download: "Télécharger le fichier", words: (n) => `Nombre de mots : ${n}`,
    fillerList: "euh|heu|tu sais",
    s1: "Sarah (animatrice)", s2: "Invité",
    sample: "SPEAKER_00: 00:01 Bonjour à tous, euh, bienvenue dans l'émission. Aujourd'hui, genre, on parle d'outils audio IA.\nSPEAKER_01: 00:08 Merci de m'avoir invité. Tu sais, c'est fou à quel point la technologie avance vite en 2026.\nSPEAKER_00: 00:15 Tout à fait. Alors, euh, passons directement à la première question.",
  },
  de: {
    r1: "Sprecher 1 ersetzen durch:", r2: "Sprecher 2 ersetzen durch:", fillers: "Füllwörter entfernen („äh“, „ähm“, „sozusagen“)", ts: "Inline-Zeitmarken entfernen",
    paste: "Rohes automatisches Transkript einfügen:", ph: "Rohtext von Whisper, Otter, Descript oder Zoom einfügen...", out: "Formatiertes, veröffentlichungsreifes Transkript",
    copy: "Kopieren", copied: "Kopiert!", download: "Datei herunterladen", words: (n) => `Wortanzahl: ${n}`,
    fillerList: "äh|ähm|öhm|sozusagen",
    s1: "Sarah (Host)", s2: "Gast",
    sample: "SPEAKER_00: 00:01 Hallo zusammen, ähm, willkommen zur Show. Heute sprechen wir, sozusagen, über KI-Audiotools.\nSPEAKER_01: 00:08 Danke für die Einladung. Es ist, äh, wirklich verrückt, wie schnell sich die Technologie 2026 entwickelt.\nSPEAKER_00: 00:15 Absolut. Also, ähm, steigen wir direkt in die erste Frage ein.",
  },
  it: {
    r1: "Sostituisci Speaker 1 con:", r2: "Sostituisci Speaker 2 con:", fillers: "Rimuovi intercalari (“ehm”, “cioè”, “tipo”)", ts: "Rimuovi i timestamp nel testo",
    paste: "Incolla la trascrizione automatica grezza:", ph: "Incolla il testo grezzo di Whisper, Otter, Descript o Zoom...", out: "Trascrizione formattata pronta per la pubblicazione",
    copy: "Copia", copied: "Copiato!", download: "Scarica file", words: (n) => `Numero di parole: ${n}`,
    fillerList: "ehm|cioè|insomma",
    s1: "Sara (conduttrice)", s2: "Ospite",
    sample: "SPEAKER_00: 00:01 Ciao a tutti, ehm, benvenuti al programma. Oggi parliamo, cioè, di strumenti audio basati sull'IA.\nSPEAKER_01: 00:08 Grazie dell'invito. È pazzesco, insomma, quanto velocemente avanzi la tecnologia nel 2026.\nSPEAKER_00: 00:15 Concordo pienamente. Quindi, ehm, passiamo subito alla prima domanda.",
  },
  pt: {
    r1: "Substituir Falante 1 por:", r2: "Substituir Falante 2 por:", fillers: "Remover vícios de linguagem (“hum”, “tipo”, “né”)", ts: "Remover marcadores de tempo no texto",
    paste: "Cole a transcrição automática bruta:", ph: "Cole o texto bruto do Whisper, Otter, Descript ou Zoom...", out: "Transcrição formatada pronta para publicação",
    copy: "Copiar", copied: "Copiado!", download: "Baixar arquivo", words: (n) => `Contagem de palavras: ${n}`,
    fillerList: "hum|ahn|né",
    s1: "Sara (apresentadora)", s2: "Convidado",
    sample: "SPEAKER_00: 00:01 Oi, pessoal, hum, bem-vindos ao programa. Hoje a gente está, tipo, falando sobre ferramentas de áudio com IA.\nSPEAKER_01: 00:08 Obrigado pelo convite. É uma loucura, né, como a tecnologia avança rápido em 2026.\nSPEAKER_00: 00:15 Concordo totalmente. Então, ahn, vamos direto à primeira pergunta.",
  },
  ja: {
    r1: "話者1の置換名：", r2: "話者2の置換名：", fillers: "フィラー語を削除（「えーと」「あのー」「まあ」）", ts: "文中のタイムスタンプを削除",
    paste: "自動文字起こしの生テキストを貼り付け：", ph: "Whisper、Otter、Descript、Zoomの生の文字起こしテキストを貼り付けてください…", out: "公開用に整形された文字起こし",
    copy: "コピー", copied: "コピーしました！", download: "ファイルをダウンロード", words: (n) => `単語数：${n}`,
    fillerList: "えーと|えっと|ええと|あのー",
    s1: "サラ（ホスト）", s2: "ゲスト",
    sample: "SPEAKER_00: 00:01 皆さん、えーと、番組へようこそ。今日は、まあ、AI音声ツールについてお話しします。\nSPEAKER_01: 00:08 お招きありがとうございます。2026年の技術の進歩の速さは、あのー、本当にすごいですよね。\nSPEAKER_00: 00:15 まったくその通りです。では、えっと、早速最初の質問に入りましょう。",
  },
  ko: {
    r1: "화자 1 대체 이름:", r2: "화자 2 대체 이름:", fillers: "추임새 제거 (“음”, “어”, “그니까”)", ts: "본문 내 타임스탬프 제거",
    paste: "자동 생성된 원본 녹취록 붙여넣기:", ph: "Whisper, Otter, Descript 또는 Zoom의 원본 녹취록 텍스트를 붙여넣으세요...", out: "게시용으로 정리된 녹취록",
    copy: "복사", copied: "복사됨!", download: "파일 다운로드", words: (n) => `단어 수: ${n}`,
    fillerList: "그니까|뭐랄까",
    s1: "사라 (진행자)", s2: "게스트",
    sample: "SPEAKER_00: 00:01 안녕하세요 여러분, 음, 방송에 오신 걸 환영합니다. 오늘은 그니까 AI 오디오 도구에 대해 이야기합니다.\nSPEAKER_01: 00:08 초대해 주셔서 감사합니다. 2026년에 기술이 어, 정말 빠르게 발전하고 있죠.\nSPEAKER_00: 00:15 전적으로 동의합니다. 자, 음, 바로 첫 번째 질문으로 넘어가 볼게요.",
  },
};

export function TranscriptFormatter({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const ui = TEXT[lang] || TEXT.en;
  const [rawText, setRawText] = useState(ui.sample);
  const [speaker1, setSpeaker1] = useState(ui.s1);
  const [speaker2, setSpeaker2] = useState(ui.s2);
  const [stripFillers, setStripFillers] = useState(true);
  const [stripTimestamps, setStripTimestamps] = useState(false);
  const [copied, setCopied] = useState(false);

  const cleanTranscript = () => {
    let text = rawText;

    // Replace speaker labels
    text = text.replace(/SPEAKER_00|Speaker 1|SPEAKER 1/gi, `${speaker1}:`);
    text = text.replace(/SPEAKER_01|Speaker 2|SPEAKER 2/gi, `${speaker2}:`);

    // Optionally strip timestamps e.g. "00:01" or "[00:12:45]"
    if (stripTimestamps) {
      text = text.replace(/\[?\d{1,2}:\d{2}(?::\d{2})?(?:\.\d{3})?\]?/g, "");
    }

    // Optionally clean filler words
    if (stripFillers) {
      // shortcut: filler lists are a short per-language set; JA/KO have no word boundaries so they match as substrings
      const cjk = lang === "ja" || lang === "ko";
      const edge = cjk ? "" : "(?<![\\p{L}\\p{N}])";
      const tail = cjk ? "[、,]?\\s*" : "(?![\\p{L}\\p{N}]),?\\s*";
      text = text.replace(new RegExp(`${edge}(?:${ui.fillerList})${tail}`, "giu"), "");
    }

    // Clean up multiple spaces and empty lines
    text = text.replace(/[ \t]+/g, " ");
    text = text.replace(/\n\s*\n/g, "\n\n");

    return text.trim();
  };

  const output = cleanTranscript();

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `cleaned-transcript.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-6">
      {/* Control Configuration Bar */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.r1}
            </label>
            <input
              type="text"
              value={speaker1}
              onChange={(e) => setSpeaker1(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.r2}
            </label>
            <input
              type="text"
              value={speaker2}
              onChange={(e) => setSpeaker2(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>

        {/* Toggles */}
        <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-studio-border/60 text-xs">
          <label className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 cursor-pointer">
            <input
              type="checkbox"
              checked={stripFillers}
              onChange={(e) => setStripFillers(e.target.checked)}
              className="rounded accent-orange-500 w-4 h-4 cursor-pointer"
            />
            <span>{ui.fillers}</span>
          </label>

          <label className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 cursor-pointer">
            <input
              type="checkbox"
              checked={stripTimestamps}
              onChange={(e) => setStripTimestamps(e.target.checked)}
              className="rounded accent-orange-500 w-4 h-4 cursor-pointer"
            />
            <span>{ui.ts}</span>
          </label>
        </div>
      </div>

      {/* Raw & Clean Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            {ui.paste}
          </label>
          <textarea
            rows={10}
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            placeholder={ui.ph}
            className="w-full px-4 py-3 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white font-mono text-xs focus:outline-none focus:border-orange-500/70 resize-y"
          />
        </div>

        {/* Output */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-studio-border/60 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                {ui.out}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? ui.copied : ui.copy}
                </button>
                <button
                  onClick={handleDownload}
                  title={ui.download}
                  aria-label={ui.download}
                  className="p-1.5 rounded-lg bg-studio-elevated hover:bg-studio-border text-neutral-700 dark:text-neutral-300 border border-studio-border cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <pre className="p-4 rounded-xl bg-studio-darkest border border-studio-border text-xs text-neutral-900 dark:text-neutral-100 font-sans leading-relaxed whitespace-pre-wrap max-h-[280px] overflow-y-auto select-text">
              {output}
            </pre>
          </div>

          <div className="text-[11px] text-neutral-500 pt-1">
            {ui.words(output.split(/\s+/).filter(Boolean).length)}
          </div>
        </div>
      </div>
    </div>
  );
}

