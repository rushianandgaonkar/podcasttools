"use client";

import React, { useState } from "react";
import { TrendingUp, Users, ArrowUpRight, BarChart2, CheckCircle2, LineChart } from "lucide-react";
import { GrowthChart } from "./visuals/GrowthChart";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";

// Libsyn / Podtrac percentile thresholds (downloads per episode, first 30 days)
const THRESHOLD_VALUES = [150, 1100, 3500, 10000, 35000];

type GrowthText = {
  m3: string; m6: string; m12: string; unit: string; totalIn: (n: string, m: number) => string; monthly: (n: string) => string;
  traj: string; trajNote: string; dyn: string; cur: string; rate: string; perMonth: (n: number) => string;
  steady: string; avg: string; viral: string; epsLabel: string; eps: (n: number) => string; stand: string;
  tiers: [string, string, string, string, string]; short: [string, string, string, string, string];
  gt: (n: string) => string; foot: string; table: string; month: (n: number) => string;
};

const TEXT: Record<SupportedLocale, GrowthText> = {
  en: { m3: "Month 3 Projected", m6: "Month 6 Projected", m12: "Month 12 Milestone", unit: "dl / ep", totalIn: (n, m) => `~${n} total downloads in M${m}`, monthly: (n) => `~${n} monthly downloads`,
    traj: "12-Month Download Trajectory", trajNote: "downloads per episode · dashed = global percentiles", dyn: "Growth Dynamics", cur: "Current Average 30-Day Downloads",
    rate: "Monthly Organic Growth Rate", perMonth: (n) => `${n}% / month`, steady: "2% (Steady)", avg: "7% (Average)", viral: "15%+ (High Viral)",
    epsLabel: "Episodes Released per Month", eps: (n) => `${n} eps`, stand: "Where You Stand Globally (Libsyn 2026 Data)",
    tiers: ["Top 50% of all shows worldwide:", "Top 20% of all shows worldwide:", "Top 10% of all shows worldwide:", "Top 5% of all shows worldwide:", "Top 1% elite tier:"],
    short: ["Top 50%", "Top 20%", "Top 10%", "Top 5%", "Top 1%"], gt: (n) => `> ${n} downloads`,
    foot: "Over 90% of podcasts stop publishing after episode 7. Consistency and listener retention are the true compounding engines of audio growth.", table: "View data table", month: (n) => `M${n}` },
  es: { m3: "Proyección del mes 3", m6: "Proyección del mes 6", m12: "Hito del mes 12", unit: "desc. / ep.", totalIn: (n, m) => `~${n} descargas totales en el M${m}`, monthly: (n) => `~${n} descargas mensuales`,
    traj: "Trayectoria de descargas a 12 meses", trajNote: "descargas por episodio · línea discontinua = percentiles globales", dyn: "Dinámica de crecimiento", cur: "Descargas medias actuales a 30 días",
    rate: "Tasa de crecimiento orgánico mensual", perMonth: (n) => `${n} % / mes`, steady: "2 % (Estable)", avg: "7 % (Promedio)", viral: "15 %+ (Muy viral)",
    epsLabel: "Episodios publicados al mes", eps: (n) => `${n} ep.`, stand: "Tu posición a nivel mundial (datos de Libsyn 2026)",
    tiers: ["Top 50 % de todos los pódcasts del mundo:", "Top 20 % de todos los pódcasts del mundo:", "Top 10 % de todos los pódcasts del mundo:", "Top 5 % de todos los pódcasts del mundo:", "Nivel élite del Top 1 %:"],
    short: ["Top 50 %", "Top 20 %", "Top 10 %", "Top 5 %", "Top 1 %"], gt: (n) => `> ${n} descargas`,
    foot: "Más del 90 % de los pódcasts dejan de publicar tras el episodio 7. La constancia y la retención de oyentes son los verdaderos motores acumulativos del crecimiento en audio.", table: "Ver tabla de datos", month: (n) => `M${n}` },
  fr: { m3: "Projection du mois 3", m6: "Projection du mois 6", m12: "Objectif du mois 12", unit: "tél. / ép.", totalIn: (n, m) => `~${n} téléchargements au total au M${m}`, monthly: (n) => `~${n} téléchargements par mois`,
    traj: "Trajectoire de téléchargements sur 12 mois", trajNote: "téléchargements par épisode · pointillés = percentiles mondiaux", dyn: "Dynamique de croissance", cur: "Moyenne actuelle de téléchargements à 30 jours",
    rate: "Taux de croissance organique mensuel", perMonth: (n) => `${n} % / mois`, steady: "2 % (Stable)", avg: "7 % (Moyen)", viral: "15 %+ (Très viral)",
    epsLabel: "Épisodes publiés par mois", eps: (n) => `${n} ép.`, stand: "Votre position dans le monde (données Libsyn 2026)",
    tiers: ["Top 50 % des émissions dans le monde :", "Top 20 % des émissions dans le monde :", "Top 10 % des émissions dans le monde :", "Top 5 % des émissions dans le monde :", "Niveau élite du Top 1 % :"],
    short: ["Top 50 %", "Top 20 %", "Top 10 %", "Top 5 %", "Top 1 %"], gt: (n) => `> ${n} téléchargements`,
    foot: "Plus de 90 % des podcasts arrêtent de publier après l'épisode 7. La régularité et la fidélisation des auditeurs sont les vrais moteurs cumulatifs de la croissance audio.", table: "Voir le tableau de données", month: (n) => `M${n}` },
  de: { m3: "Prognose Monat 3", m6: "Prognose Monat 6", m12: "Meilenstein Monat 12", unit: "Dl. / Folge", totalIn: (n, m) => `~${n} Downloads insgesamt in M${m}`, monthly: (n) => `~${n} Downloads pro Monat`,
    traj: "Download-Entwicklung über 12 Monate", trajNote: "Downloads pro Folge · gestrichelt = globale Perzentile", dyn: "Wachstumsdynamik", cur: "Aktueller Durchschnitt der Downloads (30 Tage)",
    rate: "Monatliche organische Wachstumsrate", perMonth: (n) => `${n} % / Monat`, steady: "2 % (Stetig)", avg: "7 % (Durchschnitt)", viral: "15 %+ (Stark viral)",
    epsLabel: "Veröffentlichte Folgen pro Monat", eps: (n) => `${n} Folgen`, stand: "Dein globaler Platz (Libsyn-Daten 2026)",
    tiers: ["Top 50 % aller Shows weltweit:", "Top 20 % aller Shows weltweit:", "Top 10 % aller Shows weltweit:", "Top 5 % aller Shows weltweit:", "Top-1-%-Elite:"],
    short: ["Top 50 %", "Top 20 %", "Top 10 %", "Top 5 %", "Top 1 %"], gt: (n) => `> ${n} Downloads`,
    foot: "Über 90 % aller Podcasts hören nach Folge 7 auf zu veröffentlichen. Konstanz und Hörerbindung sind die wahren Wachstumsmotoren im Audiobereich.", table: "Datentabelle anzeigen", month: (n) => `M${n}` },
  it: { m3: "Proiezione mese 3", m6: "Proiezione mese 6", m12: "Traguardo mese 12", unit: "dl / ep.", totalIn: (n, m) => `~${n} download totali nel M${m}`, monthly: (n) => `~${n} download mensili`,
    traj: "Andamento dei download su 12 mesi", trajNote: "download per episodio · tratteggio = percentili globali", dyn: "Dinamica di crescita", cur: "Download medi attuali a 30 giorni",
    rate: "Tasso di crescita organica mensile", perMonth: (n) => `${n}% / mese`, steady: "2% (Costante)", avg: "7% (Medio)", viral: "15%+ (Molto virale)",
    epsLabel: "Episodi pubblicati al mese", eps: (n) => `${n} ep.`, stand: "La tua posizione nel mondo (dati Libsyn 2026)",
    tiers: ["Top 50% di tutti i podcast nel mondo:", "Top 20% di tutti i podcast nel mondo:", "Top 10% di tutti i podcast nel mondo:", "Top 5% di tutti i podcast nel mondo:", "Livello élite Top 1%:"],
    short: ["Top 50%", "Top 20%", "Top 10%", "Top 5%", "Top 1%"], gt: (n) => `> ${n} download`,
    foot: "Oltre il 90% dei podcast smette di pubblicare dopo l'episodio 7. Costanza e fidelizzazione degli ascoltatori sono i veri motori composti della crescita audio.", table: "Mostra tabella dei dati", month: (n) => `M${n}` },
  pt: { m3: "Projeção do mês 3", m6: "Projeção do mês 6", m12: "Marco do mês 12", unit: "dl / ep.", totalIn: (n, m) => `~${n} downloads totais no M${m}`, monthly: (n) => `~${n} downloads mensais`,
    traj: "Trajetória de downloads em 12 meses", trajNote: "downloads por episódio · tracejado = percentis globais", dyn: "Dinâmica de crescimento", cur: "Média atual de downloads em 30 dias",
    rate: "Taxa de crescimento orgânico mensal", perMonth: (n) => `${n}% / mês`, steady: "2% (Estável)", avg: "7% (Média)", viral: "15%+ (Muito viral)",
    epsLabel: "Episódios publicados por mês", eps: (n) => `${n} eps.`, stand: "Onde você está no mundo (dados Libsyn 2026)",
    tiers: ["Top 50% de todos os podcasts do mundo:", "Top 20% de todos os podcasts do mundo:", "Top 10% de todos os podcasts do mundo:", "Top 5% de todos os podcasts do mundo:", "Nível elite Top 1%:"],
    short: ["Top 50%", "Top 20%", "Top 10%", "Top 5%", "Top 1%"], gt: (n) => `> ${n} downloads`,
    foot: "Mais de 90% dos podcasts param de publicar após o episódio 7. Consistência e retenção de ouvintes são os verdadeiros motores compostos do crescimento em áudio.", table: "Ver tabela de dados", month: (n) => `M${n}` },
  ja: { m3: "3か月目の予測", m6: "6か月目の予測", m12: "12か月目のマイルストーン", unit: "DL／回", totalIn: (n, m) => `${m}か月目の合計ダウンロード数は約${n}`, monthly: (n) => `月間ダウンロード数は約${n}`,
    traj: "12か月間のダウンロード推移", trajNote: "1エピソードあたりのダウンロード数 · 破線 = 世界のパーセンタイル", dyn: "成長のダイナミクス", cur: "現在の30日間平均ダウンロード数",
    rate: "月間オーガニック成長率", perMonth: (n) => `月${n}％`, steady: "2％（安定）", avg: "7％（平均）", viral: "15％以上（高い拡散）",
    epsLabel: "月あたりの配信エピソード数", eps: (n) => `${n}回`, stand: "世界での位置づけ（Libsyn 2026年データ）",
    tiers: ["世界の全番組の上位50％：", "世界の全番組の上位20％：", "世界の全番組の上位10％：", "世界の全番組の上位5％：", "上位1％のエリート層："],
    short: ["上位50％", "上位20％", "上位10％", "上位5％", "上位1％"], gt: (n) => `${n}ダウンロード超`,
    foot: "ポッドキャストの90％以上が第7回までに更新を止めます。継続性とリスナーの定着こそが、音声メディア成長の複利エンジンです。", table: "データ表を表示", month: (n) => `${n}月目` },
  ko: { m3: "3개월 차 예측", m6: "6개월 차 예측", m12: "12개월 차 마일스톤", unit: "다운로드/회", totalIn: (n, m) => `${m}개월 차 총 다운로드 약 ${n}회`, monthly: (n) => `월간 다운로드 약 ${n}회`,
    traj: "12개월 다운로드 추이", trajNote: "에피소드당 다운로드 · 점선 = 전 세계 백분위", dyn: "성장 역학", cur: "현재 30일 평균 다운로드",
    rate: "월간 자연 성장률", perMonth: (n) => `월 ${n}%`, steady: "2% (안정)", avg: "7% (평균)", viral: "15%+ (고속 확산)",
    epsLabel: "월간 발행 에피소드 수", eps: (n) => `${n}회`, stand: "전 세계에서의 내 위치 (Libsyn 2026 데이터)",
    tiers: ["전 세계 전체 프로그램 중 상위 50%:", "전 세계 전체 프로그램 중 상위 20%:", "전 세계 전체 프로그램 중 상위 10%:", "전 세계 전체 프로그램 중 상위 5%:", "상위 1% 엘리트 구간:"],
    short: ["상위 50%", "상위 20%", "상위 10%", "상위 5%", "상위 1%"], gt: (n) => `다운로드 ${n}회 초과`,
    foot: "팟캐스트의 90% 이상이 7화 이후 발행을 멈춥니다. 꾸준함과 청취자 유지가 오디오 성장의 진정한 복리 엔진입니다.", table: "데이터 표 보기", month: (n) => `${n}개월` },
};

export function AudienceGrowthEstimator({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const ui = TEXT[lang] || TEXT.en;
  const PERCENTILE_THRESHOLDS = THRESHOLD_VALUES.map((value, i) => ({ value, label: ui.short[i] }));
  const [startingDownloads, setStartingDownloads] = useState<number>(350);
  const [episodesPerMonth, setEpisodesPerMonth] = useState<number>(4);
  const [growthRate, setGrowthRate] = useState<number>(7); // 7% monthly growth

  // Calculate 12-month trajectory
  const months = Array.from({ length: 12 }, (_, i) => {
    const monthNum = i + 1;
    const perEpisode = Math.round(startingDownloads * Math.pow(1 + growthRate / 100, i));
    const totalMonthlyDownloads = perEpisode * episodesPerMonth;

    return {
      month: `Month ${monthNum}`,
      perEpisode,
      totalMonthlyDownloads,
    };
  });

  const month3 = months[2];
  const month6 = months[5];
  const month12 = months[11];

  return (
    <div className="w-full space-y-6">
      {/* 3 Milestone Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-studio-card border border-studio-border">
          <span className="text-xs font-semibold text-neutral-600 dark:text-slate-400 uppercase tracking-wider block mb-1">
            {ui.m3}
          </span>
          <div className="text-2xl font-bold text-neutral-900 dark:text-white flex items-baseline gap-1.5">
            <span>{month3.perEpisode.toLocaleString()}</span>
            <span className="text-xs text-orange-500 dark:text-orange-400 font-normal">{ui.unit}</span>
          </div>
          <span className="text-[11px] text-neutral-500 mt-1 block">
            {ui.totalIn(month3.totalMonthlyDownloads.toLocaleString(), 3)}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-studio-card border border-studio-border">
          <span className="text-xs font-semibold text-neutral-600 dark:text-slate-400 uppercase tracking-wider block mb-1">
            {ui.m6}
          </span>
          <div className="text-2xl font-bold text-neutral-900 dark:text-white flex items-baseline gap-1.5">
            <span>{month6.perEpisode.toLocaleString()}</span>
            <span className="text-xs text-indigo-500 dark:text-indigo-400 font-normal">{ui.unit}</span>
          </div>
          <span className="text-[11px] text-neutral-500 mt-1 block">
            {ui.totalIn(month6.totalMonthlyDownloads.toLocaleString(), 6)}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-br from-studio-card to-orange-500/10 border border-orange-500/30">
          <span className="text-xs font-semibold text-neutral-600 dark:text-slate-400 uppercase tracking-wider block mb-1">
            {ui.m12}
          </span>
          <div className="text-2xl font-bold text-neutral-900 dark:text-white flex items-baseline gap-1.5">
            <span className="text-orange-500 dark:text-orange-400">{month12.perEpisode.toLocaleString()}</span>
            <span className="text-xs text-orange-500 dark:text-orange-400 font-normal">{ui.unit}</span>
          </div>
          <span className="text-[11px] text-neutral-600 dark:text-slate-400 mt-1 block">
            {ui.monthly(month12.totalMonthlyDownloads.toLocaleString())}
          </span>
        </div>
      </div>

      {/* 12-Month Trajectory Chart */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border">
        <div className="flex items-center justify-between gap-3 pb-3 mb-3 border-b border-studio-border/60">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white flex items-center gap-2">
            <LineChart className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            {ui.traj}
          </h2>
          <span className="text-[11px] font-mono text-neutral-500">{ui.trajNote}</span>
        </div>
        <GrowthChart
          points={months.map((m, i) => ({ label: ui.month(i + 1), value: m.perEpisode }))}
          thresholds={PERCENTILE_THRESHOLDS}
          unit={ui.unit}
          tableLabel={ui.table}
        />
      </div>

      {/* Control Sliders & Percentile Benchmark Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sliders */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white pb-2 border-b border-studio-border/60 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            {ui.dyn}
          </h2>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                {ui.cur}
              </label>
              <span className="text-xs font-mono font-bold text-orange-600 dark:text-orange-400 bg-studio-darkest px-2 py-1 rounded border border-studio-border">
                {startingDownloads.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={50}
              max={15000}
              step={50}
              value={startingDownloads}
              onChange={(e) => setStartingDownloads(Number(e.target.value))}
              className="w-full accent-orange-500 bg-studio-darkest h-2 rounded-lg cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300">
                {ui.rate}
              </label>
              <span className="text-xs font-mono font-bold text-indigo-400 bg-studio-darkest px-2 py-1 rounded border border-studio-border">
                {ui.perMonth(growthRate)}
              </span>
            </div>
            <input
              type="range"
              min={2}
              max={25}
              step={1}
              value={growthRate}
              onChange={(e) => setGrowthRate(Number(e.target.value))}
              className="w-full accent-indigo-500 bg-studio-darkest h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>{ui.steady}</span>
              <span>{ui.avg}</span>
              <span>{ui.viral}</span>
            </div>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-studio-border/60">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">{ui.epsLabel}</label>
            <div className="grid grid-cols-4 gap-2">
              {[2, 4, 8, 12].map((n) => (
                <button
                  key={n}
                  onClick={() => setEpisodesPerMonth(n)}
                  className={`py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    episodesPerMonth === n
                      ? "bg-orange-500 text-white border-orange-500 shadow-sm"
                      : "bg-studio-darkest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border-studio-border"
                  }`}
                >
                  {ui.eps(n)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2026 Industry Download Percentiles */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white pb-2 border-b border-studio-border/60 flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            {ui.stand}
          </h2>

          <div className="space-y-2.5 text-xs">
            {THRESHOLD_VALUES.map((value, i) => (
              <div key={value} className="flex items-center justify-between p-2.5 rounded-xl bg-studio-darkest border border-studio-border">
                <span className="text-neutral-700 dark:text-slate-300">{ui.tiers[i]}</span>
                <span
                  className={`font-mono font-semibold ${
                    ["text-emerald-600 dark:text-emerald-400", "text-cyan-600 dark:text-cyan-400", "text-indigo-600 dark:text-indigo-400", "text-purple-600 dark:text-purple-400", "text-amber-600 dark:text-amber-400"][i]
                  }`}
                >
                  {ui.gt(value.toLocaleString(lang))}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-neutral-500 pt-1 leading-relaxed">
            {ui.foot}
          </p>
        </div>
      </div>
    </div>
  );
}

