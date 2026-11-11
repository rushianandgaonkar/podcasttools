"use client";

import React, { useState } from "react";
import { DollarSign, BarChart3 } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";
import { getToolUi } from "@/i18n/toolUiTranslations";
import { RevenueMixBar } from "./visuals/RevenueMixBar";

// Validated categorical order (light + dark): pre-roll, mid-roll, post-roll
const SLOT_COLORS = { pre: "#ea580c", mid: "#0891b2", post: "#6366f1" } as const;
// "Pre-Roll Ad (15-30s)" → "Pre-Roll Ad" for compact legends
const shortLabel = (label: string) => label.replace(/\s*\(.*\)\s*$/, "");

interface MonetizationCalculatorProps {
  lang?: SupportedLocale;
}

// Benchmark block + "Off" label (the rest of this tool's text lives in toolUiTranslations)
const BENCH: Record<SupportedLocale, { title: string; off: string; rows: [string, string, string, string]; note: string }> = {
  en: { title: "2026 Industry CPM Benchmarks", off: "Off", rows: ["Standard Pre-roll (15-30s):", "Host-read Mid-roll (60s):", "Niche B2B / Finance Mid-roll:", "Standard Post-roll:"], note: "Note: Most podcast sponsorship networks (Gumball, Advertisecast, Midroll) typically look for shows averaging 2,500+ to 5,000+ downloads per episode before broker matching." },
  es: { title: "Referencias de CPM del sector en 2026", off: "Desactivado", rows: ["Pre-roll estándar (15-30 s):", "Mid-roll leído por el anfitrión (60 s):", "Mid-roll de nicho B2B / finanzas:", "Post-roll estándar:"], note: "Nota: la mayoría de las redes de patrocinio de pódcast (Gumball, Advertisecast, Midroll) suelen buscar programas con una media de 2500 a 5000+ descargas por episodio antes de intermediar." },
  fr: { title: "Références CPM du secteur en 2026", off: "Désactivé", rows: ["Pré-roll standard (15-30 s) :", "Mid-roll lu par l'animateur (60 s) :", "Mid-roll de niche B2B / finance :", "Post-roll standard :"], note: "Remarque : la plupart des réseaux de sponsoring de podcasts (Gumball, Advertisecast, Midroll) recherchent généralement des émissions avec une moyenne de 2 500 à 5 000+ téléchargements par épisode avant toute mise en relation." },
  de: { title: "CPM-Richtwerte der Branche 2026", off: "Aus", rows: ["Standard-Pre-Roll (15–30 Sek.):", "Vom Host gelesener Mid-Roll (60 Sek.):", "Nischen-Mid-Roll B2B / Finanzen:", "Standard-Post-Roll:"], note: "Hinweis: Die meisten Podcast-Sponsoring-Netzwerke (Gumball, Advertisecast, Midroll) suchen in der Regel Shows mit durchschnittlich 2.500 bis 5.000+ Downloads pro Folge, bevor sie vermitteln." },
  it: { title: "Parametri CPM del settore nel 2026", off: "Disattivato", rows: ["Pre-roll standard (15-30 s):", "Mid-roll letto dal conduttore (60 s):", "Mid-roll di nicchia B2B / finanza:", "Post-roll standard:"], note: "Nota: la maggior parte delle reti di sponsorizzazione podcast (Gumball, Advertisecast, Midroll) cerca di solito programmi con una media di 2.500-5.000+ download per episodio prima di fare da intermediaria." },
  pt: { title: "Referências de CPM do setor em 2026", off: "Desativado", rows: ["Pre-roll padrão (15-30 s):", "Mid-roll lido pelo apresentador (60 s):", "Mid-roll de nicho B2B / finanças:", "Post-roll padrão:"], note: "Nota: a maioria das redes de patrocínio de podcast (Gumball, Advertisecast, Midroll) costuma buscar programas com média de 2.500 a 5.000+ downloads por episódio antes de intermediar." },
  ja: { title: "2026年の業界CPMベンチマーク", off: "オフ", rows: ["標準プレロール（15〜30秒）：", "ホスト読みのミッドロール（60秒）：", "ニッチなBtoB／金融向けミッドロール：", "標準ポストロール："], note: "注：ほとんどのポッドキャスト広告ネットワーク（Gumball、Advertisecast、Midrollなど）は、仲介を始める前に、1エピソードあたり平均2,500〜5,000回以上のダウンロードがある番組を求めるのが一般的です。" },
  ko: { title: "2026년 업계 CPM 벤치마크", off: "끔", rows: ["표준 프리롤 (15~30초):", "진행자 낭독 미드롤 (60초):", "틈새 B2B / 금융 미드롤:", "표준 포스트롤:"], note: "참고: 대부분의 팟캐스트 스폰서십 네트워크(Gumball, Advertisecast, Midroll)는 중개를 시작하기 전에 에피소드당 평균 2,500~5,000회 이상 다운로드되는 프로그램을 찾습니다." },
};

export function MonetizationCalculator({ lang = defaultLocale }: MonetizationCalculatorProps) {
  const [downloads, setDownloads] = useState<number>(5000);
  const [episodesPerMonth, setEpisodesPerMonth] = useState<number>(4);
  const [hasPreRoll, setHasPreRoll] = useState<boolean>(true);
  const [preRollCpm, setPreRollCpm] = useState<number>(18);
  const [hasMidRoll, setHasMidRoll] = useState<boolean>(true);
  const [midRollCpm, setMidRollCpm] = useState<number>(28);
  const [hasPostRoll, setHasPostRoll] = useState<boolean>(false);
  const [postRollCpm, setPostRollCpm] = useState<number>(12);
  const [fillRate, setFillRate] = useState<number>(85); // 85% sellout
  const [includePatreon, setIncludePatreon] = useState<boolean>(false);
  const [patreonBackers, setPatreonBackers] = useState<number>(100);
  const [patreonPrice, setPatreonPrice] = useState<number>(7);

  const ui = getToolUi(lang).cpmCalculator;
  const bench = BENCH[lang] || BENCH.en;

  // Calculations
  const effectiveDownloads = downloads * (fillRate / 100);

  const preRollRevPerEp = hasPreRoll ? (effectiveDownloads / 1000) * preRollCpm : 0;
  const midRollRevPerEp = hasMidRoll ? (effectiveDownloads / 1000) * midRollCpm : 0;
  const postRollRevPerEp = hasPostRoll ? (effectiveDownloads / 1000) * postRollCpm : 0;

  const totalSponsorPerEp = preRollRevPerEp + midRollRevPerEp + postRollRevPerEp;
  const monthlySponsor = totalSponsorPerEp * episodesPerMonth;
  const monthlyPatreon = includePatreon ? patreonBackers * patreonPrice : 0;
  const totalMonthly = monthlySponsor + monthlyPatreon;
  const totalAnnual = totalMonthly * 12;

  // Industry percentile tier indicator
  const getTier = (dl: number) => {
    if (dl >= 35000) return { label: ui.top1, color: "text-amber-400 bg-amber-500/10 border-amber-500/30" };
    if (dl >= 10000) return { label: ui.top5, color: "text-purple-400 bg-purple-500/10 border-purple-500/30" };
    if (dl >= 3500) return { label: ui.top10, color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30" };
    if (dl >= 1100) return { label: ui.top20, color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30" };
    if (dl >= 150) return { label: ui.top50, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" };
    return { label: ui.emerging, color: "text-slate-400 bg-slate-500/10 border-slate-500/30" };
  };

  const tier = getTier(downloads);

  return (
    <div className="w-full space-y-6">
      {/* Top Results Cards Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Monthly Projection */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-studio-card via-studio-card to-orange-500/10 border border-orange-500/30 shadow-lg">
          <span className="text-xs font-semibold text-neutral-600 dark:text-slate-400 uppercase tracking-wider block mb-1">
            {ui.monthlyGross}
          </span>
          <div className="text-3xl font-extrabold text-neutral-900 dark:text-white flex items-baseline gap-1">
            <span className="text-orange-500 dark:text-orange-400">$</span>
            {Math.round(totalMonthly).toLocaleString()}
          </div>
          <span className="text-[11px] text-neutral-600 dark:text-slate-400 mt-1 block">
            {ui.acrossEpisodes(episodesPerMonth, fillRate)}
          </span>
        </div>

        {/* Annual Projection */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-studio-card via-studio-card to-indigo-500/10 border border-indigo-500/30 shadow-lg">
          <span className="text-xs font-semibold text-neutral-600 dark:text-slate-400 uppercase tracking-wider block mb-1">
            {ui.annualGross}
          </span>
          <div className="text-3xl font-extrabold text-neutral-900 dark:text-white flex items-baseline gap-1">
            <span className="text-indigo-600 dark:text-indigo-400">$</span>
            {Math.round(totalAnnual).toLocaleString()}
          </div>
          <span className="text-[11px] text-neutral-600 dark:text-slate-400 mt-1 block">
            {ui.runRate12m}
          </span>
        </div>

        {/* Per-Episode Average */}
        <div className="p-5 rounded-2xl bg-studio-card border border-studio-border shadow-lg">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-neutral-600 dark:text-slate-400 uppercase tracking-wider">
              {ui.perEpisode}
            </span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${tier.color}`}>
              {tier.label}
            </span>
          </div>
          <div className="text-3xl font-extrabold text-neutral-900 dark:text-white flex items-baseline gap-1">
            <span className="text-emerald-600 dark:text-emerald-400">$</span>
            {Math.round(totalSponsorPerEp).toLocaleString()}
          </div>
          <span className="text-[11px] text-neutral-600 dark:text-slate-400 mt-1 block">
            {ui.grossPerRelease}
          </span>
        </div>
      </div>

      {/* Main Controls & Breakdown Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Input Controls */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white pb-2 border-b border-studio-border/60 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            {ui.parameters}
          </h2>

          {/* Downloads Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                {ui.downloadsLabel}
              </label>
              <span className="text-xs font-bold font-mono text-orange-600 dark:text-orange-400 bg-studio-darkest px-2 py-1 rounded border border-studio-border">
                {downloads.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={200}
              max={100000}
              step={200}
              value={downloads}
              onChange={(e) => setDownloads(Number(e.target.value))}
              className="w-full accent-orange-500 bg-studio-darkest h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-500">
              <span>200</span>
              <span>10k</span>
              <span>50k</span>
              <span>100k+</span>
            </div>
          </div>

          {/* Episodes / Month */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              {ui.episodesPerMonth}
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 4, 8].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setEpisodesPerMonth(num)}
                  className={`py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    episodesPerMonth === num
                      ? "bg-orange-500 text-white border-orange-500 shadow-md"
                      : "bg-studio-darkest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border-studio-border"
                  }`}
                >
                  {num} / mo
                </button>
              ))}
            </div>
          </div>

          {/* Ad Slot Options */}
          <div className="space-y-3 pt-3 border-t border-studio-border/60">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 block">
              {ui.adSlots}
            </span>

            {/* Pre-roll */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-studio-darkest border border-studio-border">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasPreRoll}
                  onChange={(e) => setHasPreRoll(e.target.checked)}
                  className="rounded accent-orange-500 w-4 h-4 cursor-pointer"
                />
                <span className="text-xs font-semibold text-neutral-900 dark:text-slate-200">{ui.preRoll}</span>
              </label>
              <div className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-slate-400">
                <span>CPM $</span>
                <input
                  type="number"
                  value={preRollCpm}
                  onChange={(e) => setPreRollCpm(Number(e.target.value))}
                  disabled={!hasPreRoll}
                  className="w-14 px-2 py-1 bg-studio-card border border-studio-border rounded text-neutral-900 dark:text-white text-center text-xs focus:outline-none"
                />
              </div>
            </div>

            {/* Mid-roll */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-studio-darkest border border-studio-border">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasMidRoll}
                  onChange={(e) => setHasMidRoll(e.target.checked)}
                  className="rounded accent-orange-500 w-4 h-4 cursor-pointer"
                />
                <span className="text-xs font-semibold text-neutral-900 dark:text-slate-200">{ui.midRoll}</span>
              </label>
              <div className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-slate-400">
                <span>CPM $</span>
                <input
                  type="number"
                  value={midRollCpm}
                  onChange={(e) => setMidRollCpm(Number(e.target.value))}
                  disabled={!hasMidRoll}
                  className="w-14 px-2 py-1 bg-studio-card border border-studio-border rounded text-neutral-900 dark:text-white text-center text-xs focus:outline-none"
                />
              </div>
            </div>

            {/* Post-roll */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-studio-darkest border border-studio-border">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasPostRoll}
                  onChange={(e) => setHasPostRoll(e.target.checked)}
                  className="rounded accent-orange-500 w-4 h-4 cursor-pointer"
                />
                <span className="text-xs font-semibold text-neutral-900 dark:text-slate-200">{ui.postRoll}</span>
              </label>
              <div className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-slate-400">
                <span>CPM $</span>
                <input
                  type="number"
                  value={postRollCpm}
                  onChange={(e) => setPostRollCpm(Number(e.target.value))}
                  disabled={!hasPostRoll}
                  className="w-14 px-2 py-1 bg-studio-card border border-studio-border rounded text-neutral-900 dark:text-white text-center text-xs focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Ad Fill Rate Slider */}
          <div className="space-y-1.5 pt-2 border-t border-studio-border/60">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                {ui.fillRate}
              </label>
              <span className="text-xs font-mono font-bold text-neutral-900 dark:text-white">{fillRate}%</span>
            </div>
            <input
              type="range"
              min={20}
              max={100}
              step={5}
              value={fillRate}
              onChange={(e) => setFillRate(Number(e.target.value))}
              className="w-full accent-orange-500 bg-studio-darkest h-2 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Right: Revenue Breakdown & Benchmarks */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white pb-2 border-b border-studio-border/60 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            {ui.breakdown}
          </h2>

          {/* Revenue Mix Visual */}
          <RevenueMixBar
            total={monthlySponsor}
            segments={[
              { id: "pre", label: shortLabel(ui.preRoll), value: preRollRevPerEp * episodesPerMonth, color: SLOT_COLORS.pre },
              { id: "mid", label: shortLabel(ui.midRoll), value: midRollRevPerEp * episodesPerMonth, color: SLOT_COLORS.mid },
              { id: "post", label: shortLabel(ui.postRoll), value: postRollRevPerEp * episodesPerMonth, color: SLOT_COLORS.post },
            ]}
          />

          {/* Breakdown Rows */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-studio-darkest border border-studio-border text-xs">
              <span className="text-neutral-700 dark:text-slate-300 inline-flex items-center gap-2">
                <span aria-hidden="true" className="w-2.5 h-2.5 rounded-[3px]" style={{ backgroundColor: SLOT_COLORS.pre }} />
                {shortLabel(ui.preRoll)} ({hasPreRoll ? `$${preRollCpm} CPM` : bench.off})</span>
              <span className="font-mono font-bold text-neutral-900 dark:text-white">
                ${Math.round(preRollRevPerEp * episodesPerMonth).toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-studio-darkest border border-studio-border text-xs">
              <span className="text-neutral-700 dark:text-slate-300 inline-flex items-center gap-2">
                <span aria-hidden="true" className="w-2.5 h-2.5 rounded-[3px]" style={{ backgroundColor: SLOT_COLORS.mid }} />
                {shortLabel(ui.midRoll)} ({hasMidRoll ? `$${midRollCpm} CPM` : bench.off})</span>
              <span className="font-mono font-bold text-neutral-900 dark:text-white">
                ${Math.round(midRollRevPerEp * episodesPerMonth).toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-studio-darkest border border-studio-border text-xs">
              <span className="text-neutral-700 dark:text-slate-300 inline-flex items-center gap-2">
                <span aria-hidden="true" className="w-2.5 h-2.5 rounded-[3px]" style={{ backgroundColor: SLOT_COLORS.post }} />
                {shortLabel(ui.postRoll)} ({hasPostRoll ? `$${postRollCpm} CPM` : bench.off})</span>
              <span className="font-mono font-bold text-neutral-900 dark:text-white">
                ${Math.round(postRollRevPerEp * episodesPerMonth).toLocaleString()}
              </span>
            </div>
          </div>

          {/* 2026 Industry CPM Benchmarks Guide */}
          <div className="p-4 rounded-xl bg-studio-darkest border border-studio-border space-y-2.5">
            <span className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider block">
              {bench.title}
            </span>
            <div className="text-xs text-neutral-600 dark:text-slate-400 space-y-1.5 leading-relaxed">
              <div className="flex justify-between">
                <span>{bench.rows[0]}</span>
                <span className="font-semibold text-neutral-900 dark:text-slate-200">$15 – $18 CPM</span>
              </div>
              <div className="flex justify-between">
                <span>{bench.rows[1]}</span>
                <span className="font-semibold text-orange-600 dark:text-orange-400">$25 – $35 CPM</span>
              </div>
              <div className="flex justify-between">
                <span>{bench.rows[2]}</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">$40 – $75 CPM</span>
              </div>
              <div className="flex justify-between">
                <span>{bench.rows[3]}</span>
                <span className="font-semibold text-neutral-900 dark:text-slate-200">$10 – $14 CPM</span>
              </div>
            </div>
            <p className="text-[11px] text-neutral-500 pt-1">
              {bench.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
