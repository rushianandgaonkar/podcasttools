"use client";

import React, { useMemo, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

interface Chapter {
  id: string;
  time: string;
  title: string;
}

/** "1:02:03" | "02:45" → seconds (NaN if malformed) */
export function toSeconds(time: string): number {
  const parts = time.trim().split(":").map((p) => Number(p));
  if (parts.some((n) => Number.isNaN(n)) || parts.length < 2 || parts.length > 3) return NaN;
  return parts.reduce((acc, n) => acc * 60 + n, 0);
}

const fmt = (sec: number) => {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor(sec % 60);
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
};

/**
 * Proportional chapter timeline + YouTube chapter-rule checks
 * (first chapter at 00:00, at least 3 chapters, each ≥ 10 s, ascending order).
 */
const TEXT: Record<SupportedLocale, { title: string; ok: string; bad: string; hover: string; checks: [string, string, string, string]; aria: (n: number, t: string) => string }> = {
  en: { title: "Chapter Timeline Preview", ok: "YouTube chapters will activate", bad: "YouTube may ignore these chapters", hover: "Hover a segment to inspect", checks: ["First chapter starts at 00:00", "At least 3 chapters", "Every chapter is 10 seconds or longer", "Valid timestamps in ascending order"], aria: (n, t) => `${n} chapters across ${t}` },
  es: { title: "Vista previa de la línea de capítulos", ok: "Los capítulos de YouTube se activarán", bad: "YouTube podría ignorar estos capítulos", hover: "Pasa el cursor sobre un segmento para verlo", checks: ["El primer capítulo empieza en 00:00", "Al menos 3 capítulos", "Cada capítulo dura 10 segundos o más", "Marcas de tiempo válidas en orden ascendente"], aria: (n, t) => `${n} capítulos en ${t}` },
  fr: { title: "Aperçu de la chronologie des chapitres", ok: "Les chapitres YouTube seront activés", bad: "YouTube pourrait ignorer ces chapitres", hover: "Survolez un segment pour l'inspecter", checks: ["Le premier chapitre commence à 00:00", "Au moins 3 chapitres", "Chaque chapitre dure 10 secondes ou plus", "Horodatages valides en ordre croissant"], aria: (n, t) => `${n} chapitres sur ${t}` },
  de: { title: "Vorschau der Kapitel-Zeitleiste", ok: "YouTube-Kapitel werden aktiviert", bad: "YouTube ignoriert diese Kapitel möglicherweise", hover: "Segment mit der Maus berühren, um Details zu sehen", checks: ["Erstes Kapitel beginnt bei 00:00", "Mindestens 3 Kapitel", "Jedes Kapitel ist mindestens 10 Sekunden lang", "Gültige Zeitmarken in aufsteigender Reihenfolge"], aria: (n, t) => `${n} Kapitel über ${t}` },
  it: { title: "Anteprima della timeline dei capitoli", ok: "I capitoli di YouTube si attiveranno", bad: "YouTube potrebbe ignorare questi capitoli", hover: "Passa sopra un segmento per ispezionarlo", checks: ["Il primo capitolo inizia a 00:00", "Almeno 3 capitoli", "Ogni capitolo dura 10 secondi o più", "Timestamp validi in ordine crescente"], aria: (n, t) => `${n} capitoli su ${t}` },
  pt: { title: "Prévia da linha do tempo de capítulos", ok: "Os capítulos do YouTube serão ativados", bad: "O YouTube pode ignorar estes capítulos", hover: "Passe o mouse sobre um segmento para inspecionar", checks: ["O primeiro capítulo começa em 00:00", "Pelo menos 3 capítulos", "Cada capítulo tem 10 segundos ou mais", "Marcadores de tempo válidos em ordem crescente"], aria: (n, t) => `${n} capítulos em ${t}` },
  ja: { title: "チャプタータイムラインのプレビュー", ok: "YouTubeのチャプターが有効になります", bad: "YouTubeがこれらのチャプターを無視する可能性があります", hover: "セグメントにカーソルを合わせると詳細が表示されます", checks: ["最初のチャプターが00:00から始まっている", "チャプターが3つ以上ある", "各チャプターが10秒以上ある", "有効なタイムスタンプが昇順になっている"], aria: (n, t) => `${t}の間に${n}個のチャプター` },
  ko: { title: "챕터 타임라인 미리보기", ok: "YouTube 챕터가 활성화됩니다", bad: "YouTube가 이 챕터를 무시할 수 있습니다", hover: "세그먼트에 마우스를 올리면 자세히 볼 수 있습니다", checks: ["첫 챕터가 00:00에서 시작함", "챕터가 3개 이상임", "모든 챕터가 10초 이상임", "유효한 타임스탬프가 오름차순임"], aria: (n, t) => `${t} 동안 ${n}개 챕터` },
};

export function ChapterTimeline({ chapters, lang = defaultLocale }: { chapters: Chapter[]; lang?: SupportedLocale }) {
  const ui = TEXT[lang] || TEXT.en;
  const [hover, setHover] = useState<string | null>(null);

  const { segments, checks, total } = useMemo(() => {
    const parsed = chapters.map((c) => ({ ...c, start: toSeconds(c.time) }));
    const valid = parsed.filter((c) => !Number.isNaN(c.start));
    const sorted = [...valid].sort((a, b) => a.start - b.start);
    const lastStart = sorted.length ? sorted[sorted.length - 1].start : 0;
    // We don't know the episode length: assume the final chapter runs ~10% of the timeline (min 60 s)
    const total = Math.max(lastStart + Math.max(60, lastStart * 0.1), 60);

    const segments = sorted.map((c, i) => {
      const end = i < sorted.length - 1 ? sorted[i + 1].start : total;
      return { ...c, end, duration: end - c.start };
    });

    const ascending = valid.length === parsed.length && parsed.every((c, i) => i === 0 || c.start > parsed[i - 1].start);
    const checks = [
      { ok: parsed.length > 0 && parsed[0].start === 0, label: ui.checks[0] },
      { ok: parsed.length >= 3, label: ui.checks[1] },
      { ok: segments.slice(0, -1).every((s) => s.duration >= 10), label: ui.checks[2] },
      { ok: ascending, label: ui.checks[3] },
    ];
    return { segments, checks, total };
  }, [chapters, ui]);

  const allOk = checks.every((c) => c.ok);
  const active = segments.find((s) => s.id === hover);

  return (
    <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-studio-border/60">
        <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
          {ui.title}
        </span>
        <span
          className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border ${
            allOk
              ? "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
              : "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20"
          }`}
        >
          {allOk ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
          {allOk ? ui.ok : ui.bad}
        </span>
      </div>

      {/* Player-style scrubber with chapter gaps */}
      <div>
        <div className="flex w-full h-3 gap-[2px]" role="img" aria-label={ui.aria(segments.length, fmt(total))}>
          {segments.map((s, i) => (
            <button
              type="button"
              key={s.id}
              onPointerEnter={() => setHover(s.id)}
              onPointerLeave={() => setHover(null)}
              onFocus={() => setHover(s.id)}
              onBlur={() => setHover(null)}
              className="h-full first:rounded-l-[4px] last:rounded-r-[4px] transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              style={{
                flexGrow: Math.max(s.duration, 1),
                flexBasis: 0,
                backgroundColor: i % 2 === 0 ? "#ea580c" : "#f59e0b",
                opacity: hover && hover !== s.id ? 0.35 : 1,
              }}
              aria-label={`${s.time} ${s.title}`}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1.5 text-[10px] font-mono text-neutral-500">
          <span>00:00</span>
          <span className="text-neutral-700 dark:text-neutral-300 truncate px-2">
            {active ? `${active.time} · ${active.title} (${fmt(active.duration)})` : ui.hover}
          </span>
          <span>≈{fmt(total)}</span>
        </div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[11px]">
        {checks.map((c) => (
          <li key={c.label} className="flex items-center gap-1.5">
            {c.ok ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
            )}
            <span className={c.ok ? "text-neutral-700 dark:text-neutral-300" : "text-neutral-900 dark:text-white font-medium"}>
              {c.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
