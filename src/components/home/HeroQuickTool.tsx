"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Sparkles, Copy, Check, ArrowRight } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";
import { getLocalizedPath } from "@/i18n/utils";

interface HeroQuickToolProps {
  lang?: SupportedLocale;
}

const LOCALIZED_TOPICS: Record<SupportedLocale, string[]> = {
  en: ["AI & Automation", "True Crime", "Solo Entrepreneur", "Fitness After 40", "Investing"],
  es: ["IA y Automatización", "Crímenes Reales", "Emprendimiento Solo", "Fitness +40", "Inversiones"],
  ja: ["AIと自動化", "事件とミステリー", "個人ビジネス", "40代からの健康", "資産運用"],
  fr: ["IA & Automatisation", "Faits Divers", "Entrepreneuriat", "Forme Après 40 Ans", "Investissement"],
  de: ["KI & Automation", "True Crime", "Solopreneurship", "Fitness ab 40", "Geldanlage"],
  pt: ["IA e Automação", "Crimes Reais", "Empreendedorismo", "Fitness aos 40", "Investimentos"],
  ko: ["AI 자동화", "범죄 실화", "1인 창업", "40대 피트니스", "재테크 투자"],
  it: ["IA & Automazione", "True Crime", "Imprenditoria", "Fitness over 40", "Investimenti"],
};

const LOCALIZED_FORMULAS: Record<SupportedLocale, Array<(topic: string) => string>> = {
  en: [
    (t) => `Why Most People Fail at ${t} (And How to Fix It)`,
    (t) => `The Unfiltered Truth About ${t} in 2026`,
    (t) => `How to Master ${t} Without Burning Out`,
  ],
  es: [
    (t) => `Por qué la mayoría fracasa en ${t} (Y cómo solucionarlo)`,
    (t) => `La verdad sin filtros sobre ${t} en 2026`,
    (t) => `Cómo dominar ${t} sin quemarte en el intento`,
  ],
  ja: [
    (t) => `【${t}】で大半の人が失敗する決定的な理由と対策`,
    (t) => `誰も言わない2026年の【${t}】の本当の真実`,
    (t) => `燃え尽きずに【${t}】を完全マスターする方法`,
  ],
  fr: [
    (t) => `Pourquoi la majorité échoue sur ${t} (Et comment corriger le tir)`,
    (t) => `La vérité sans filtre sur ${t} en 2026`,
    (t) => `Comment maîtriser ${t} sans s'épuiser`,
  ],
  de: [
    (t) => `Warum die meisten an ${t} scheitern (Und was dagegen hilft)`,
    (t) => `Die ungeschminkte Wahrheit über ${t} im Jahr 2026`,
    (t) => `Wie du ${t} meisterst, ohne auszubrennen`,
  ],
  pt: [
    (t) => `Por que a maioria falha em ${t} (E como resolver isso)`,
    (t) => `A verdade sem filtros sobre ${t} em 2026`,
    (t) => `Como dominar ${t} sem se esgotar`,
  ],
  ko: [
    (t) => `대부분이 【${t}】에서 실패하는 이유와 해결책`,
    (t) => `2026년 아무도 알려주지 않는 【${t}】의 진실`,
    (t) => `지치지 않고 【${t}】을(를) 마스터하는 현실적 방법`,
  ],
  it: [
    (t) => `Perché la maggior parte fallisce in ${t} (E come evitarlo)`,
    (t) => `La verità senza filtri su ${t} nel 2026`,
    (t) => `Come padroneggiare ${t} senza esaurire le energie`,
  ],
};

const LOCALIZED_UI: Record<
  SupportedLocale,
  {
    testerTitle: string;
    demoBadge: string;
    inputLabel: string;
    inputPlaceholder: string;
    quickLabel: string;
    previewHeading: string;
    copy: string;
    copied: string;
    footerPrompt: string;
    openBtn: string;
  }
> = {
  en: {
    testerTitle: "Instant Episode Title Tester",
    demoBadge: "Live demo",
    inputLabel: "Enter your episode topic or guest angle:",
    inputPlaceholder: "e.g. Scaling a SaaS to $10k MRR...",
    quickLabel: "Quick:",
    previewHeading: "High-CTR Title Previews:",
    copy: "Copy",
    copied: "Copied",
    footerPrompt: "Looking for 30+ emotional triggers?",
    openBtn: "Open Generator",
  },
  es: {
    testerTitle: "Probador Instantáneo de Títulos",
    demoBadge: "Demo en Navegador",
    inputLabel: "Introduce el tema o ángulo del episodio:",
    inputPlaceholder: "ej. Escalar un SaaS a $10k mensuales...",
    quickLabel: "Ejemplos:",
    previewHeading: "Vista Previa de Títulos con Alto CTR:",
    copy: "Copiar",
    copied: "Copiado",
    footerPrompt: "¿Buscas más de 30 fórmulas psicológicas?",
    openBtn: "Abrir Generador",
  },
  ja: {
    testerTitle: "エピソードタイトル即時テスター",
    demoBadge: "ブラウザ内デモ",
    inputLabel: "エピソードのテーマや切り口を入力：",
    inputPlaceholder: "例：月商100万円を達成するSaaS開発...",
    quickLabel: "クイック選択:",
    previewHeading: "高クリック率タイトル候補:",
    copy: "コピー",
    copied: "完了",
    footerPrompt: "30種類以上の心理公式をお探しですか？",
    openBtn: "ツールを開く",
  },
  fr: {
    testerTitle: "Testeur Instantané de Titres",
    demoBadge: "Démo en Ligne",
    inputLabel: "Saisissez le sujet ou l'angle de votre épisode :",
    inputPlaceholder: "ex. Faire décoller un SaaS à 10 k€/mois...",
    quickLabel: "Suggestions :",
    previewHeading: "Aperçu de Titres à Fort Clic :",
    copy: "Copier",
    copied: "Copié",
    footerPrompt: "Envie de découvrir 30+ déclencheurs ?",
    openBtn: "Ouvrir le Générateur",
  },
  de: {
    testerTitle: "Sofort-Titel-Tester",
    demoBadge: "Browser-Demo",
    inputLabel: "Gib dein Episodenthema oder Blickwinkel ein:",
    inputPlaceholder: "z.B. Ein SaaS auf 10k Monatsumsatz skalieren...",
    quickLabel: "Beispiele:",
    previewHeading: "Klickstarke Folgentitel:",
    copy: "Kopieren",
    copied: "Kopiert",
    footerPrompt: "Suchst du über 30 psychologische Formeln?",
    openBtn: "Generator öffnen",
  },
  pt: {
    testerTitle: "Testador Instantâneo de Títulos",
    demoBadge: "Demo no Navegador",
    inputLabel: "Digite o tema ou gancho do episódio:",
    inputPlaceholder: "ex. Faturar R$ 50 mil por mês com SaaS...",
    quickLabel: "Exemplos:",
    previewHeading: "Títulos de Alta Conversão:",
    copy: "Copiar",
    copied: "Copiado",
    footerPrompt: "Quer mais de 30 fórmulas de títulos?",
    openBtn: "Abrir Gerador",
  },
  ko: {
    testerTitle: "에피소드 제목 실시간 테스터",
    demoBadge: "브라우저 즉시 체험",
    inputLabel: "방송 주제 또는 게스트의 핵심 메시지를 입력하세요:",
    inputPlaceholder: "예: 월 1,000만 원 수익 달성 노하우...",
    quickLabel: "추천 키워드:",
    previewHeading: "클릭률 높은 추천 제목 미리보기:",
    copy: "복사",
    copied: "완료",
    footerPrompt: "30개 이상의 다양한 심리 공식이 필요하신가요?",
    openBtn: "제목 생성기 열기",
  },
  it: {
    testerTitle: "Tester Immediato di Titoli",
    demoBadge: "Demo nel Browser",
    inputLabel: "Inserisci l'argomento o l'angolatura dell'episodio:",
    inputPlaceholder: "es. Scalare una SaaS a 10k mensili...",
    quickLabel: "Esempi:",
    previewHeading: "Anteprima Titoli ad Alto Clic:",
    copy: "Copia",
    copied: "Copiato",
    footerPrompt: "Cerchi oltre 30 formule psicologiche?",
    openBtn: "Apri Generatore",
  },
};

const METER_BARS = 48;

/**
 * Deterministic "waveform" for a piece of text: the same topic always draws the
 * same shape, so the meter visibly answers each keystroke without any audio.
 */
function meterLevels(text: string, count: number = METER_BARS): number[] {
  let seed = 2166136261;
  for (let i = 0; i < text.length; i++) {
    seed = Math.imul(seed ^ text.charCodeAt(i), 16777619);
  }
  const levels: number[] = [];
  for (let i = 0; i < count; i++) {
    seed = Math.imul(seed ^ (seed >>> 13), 1274126177) + i;
    const random = ((seed >>> 0) % 1000) / 1000;
    const envelope = 0.3 + 0.7 * Math.sin((Math.PI * (i + 0.5)) / count);
    levels.push(Math.round((0.1 + random * 0.9 * envelope) * 100));
  }
  return levels;
}

export function HeroQuickTool({ lang = defaultLocale }: HeroQuickToolProps) {
  const ui = LOCALIZED_UI[lang] || LOCALIZED_UI.en;
  const topics = LOCALIZED_TOPICS[lang] || LOCALIZED_TOPICS.en;
  const formulas = LOCALIZED_FORMULAS[lang] || LOCALIZED_FORMULAS.en;

  const [topic, setTopic] = useState(topics[0] || "AI & Automation");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  // Bars start flat and rise once after hydration: the page's single load animation.
  const [live, setLive] = useState(false);
  useEffect(() => {
    const id = window.requestAnimationFrame(() => setLive(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const levels = useMemo(() => meterLevels(topic.trim() || "Podcasting"), [topic]);
  const titles = formulas.slice(0, 3).map((formula) => formula(topic.trim() || "Podcasting"));

  const handleCopy = (text: string, index: number) => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  return (
    <div className="studio-console w-full max-w-2xl mx-auto rounded-2xl bg-[#141413] text-[#faf9f5] border border-[#34312c] shadow-[0_24px_60px_-28px_rgba(20,20,19,0.55)] relative overflow-hidden">
      {/* Console header */}
      <div className="flex items-center justify-between gap-3 px-5 sm:px-6 pt-4 pb-3">
        <h2 className="text-sm font-semibold tracking-[-0.01em] flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#cc785c]" />
          {ui.testerTitle}
        </h2>
        <span className="inline-flex items-center gap-1.5 text-[11px] text-[#c2beb4] whitespace-nowrap shrink-0">
          <span className="studio-live-dot h-2 w-2 rounded-full bg-[#e5484d]" aria-hidden="true"></span>
          {ui.demoBadge}
        </span>
      </div>

      {/* Level meter: redraws for every keystroke */}
      <div
        aria-hidden="true"
        className="flex items-center gap-[3px] h-16 px-5 sm:px-6 border-y border-[#34312c] bg-[#0f0f0e]"
      >
        {levels.map((level, idx) => (
          <span
            key={idx}
            className="studio-meter-bar flex-1 rounded-full bg-[#cc785c]"
            style={{
              height: `${live ? level : 6}%`,
              opacity: 0.45 + (level / 100) * 0.55,
              transitionDelay: `${idx * 6}ms`,
            }}
          />
        ))}
      </div>

      <div className="p-5 sm:p-6">
        {/* Input Field */}
        <div className="space-y-2 mb-4">
          <label htmlFor="quick-topic" className="block text-xs font-medium text-[#c2beb4]">
            {ui.inputLabel}
          </label>
          <input
            id="quick-topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder={ui.inputPlaceholder}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#1f1e1b] border border-[#34312c] text-[#faf9f5] placeholder-[#8e8b82] text-sm focus:outline-none focus-visible:border-[#cc785c] focus-visible:ring-2 focus-visible:ring-[#cc785c]/30 transition-colors"
          />

          {/* Quick Suggestion Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] text-[#8e8b82] mr-1">{ui.quickLabel}</span>
            {topics.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTopic(item)}
                aria-pressed={topic === item}
                className={`text-[11px] px-2.5 py-1 rounded-full transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cc785c]/60 ${
                  topic === item
                    ? "bg-[#faf9f5] text-[#141413] font-medium"
                    : "bg-[#1f1e1b] text-[#c2beb4] hover:text-[#faf9f5] border border-[#34312c]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Output Titles List */}
        <div className="space-y-2 mb-4">
          <div className="text-[11px] text-[#8e8b82]">{ui.previewHeading}</div>
          {titles.map((titleText, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between gap-2 p-3 rounded-lg bg-[#1f1e1b] border border-[#34312c]"
            >
              <span className="text-xs sm:text-sm font-medium text-[#faf9f5]">{titleText}</span>
              <button
                type="button"
                onClick={() => handleCopy(titleText, idx)}
                className="flex items-center gap-1 px-2 py-1 text-[11px] rounded-md border border-[#34312c] bg-[#141413] text-[#c2beb4] hover:text-[#faf9f5] flex-shrink-0 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cc785c]/60"
                aria-label={`${ui.copy}: ${titleText}`}
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">{ui.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>{ui.copy}</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Footer Link to Full Tool */}
        <div className="pt-3 flex items-center justify-between gap-3 border-t border-[#34312c] text-xs">
          <span className="text-[#8e8b82] text-[11px]">{ui.footerPrompt}</span>
          <a
            href={getLocalizedPath("/tools/episode-title-generator", lang)}
            className="inline-flex items-center gap-1 font-medium text-xs text-[#e08e73] hover:underline whitespace-nowrap"
          >
            {ui.openBtn} <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
