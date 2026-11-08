"use client";

import React, { useState } from "react";
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
    demoBadge: "Client-Side Demo",
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

export function HeroQuickTool({ lang = defaultLocale }: HeroQuickToolProps) {
  const ui = LOCALIZED_UI[lang] || LOCALIZED_UI.en;
  const topics = LOCALIZED_TOPICS[lang] || LOCALIZED_TOPICS.en;
  const formulas = LOCALIZED_FORMULAS[lang] || LOCALIZED_FORMULAS.en;

  const [topic, setTopic] = useState(topics[0] || "AI & Automation");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const titles = formulas.slice(0, 3).map((formula) => formula(topic.trim() || "Podcasting"));

  const handleCopy = (text: string, index: number) => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 p-5 sm:p-6 shadow-sm relative overflow-hidden transition-colors duration-150">
      {/* Top Eyebrow & Status */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-900">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
          <h2 className="font-mono text-xs uppercase font-medium tracking-wider text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#a9583e]" />
            {ui.testerTitle}
          </h2>
        </div>
        <span className="font-mono text-[10px] text-neutral-500 uppercase px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
          {ui.demoBadge}
        </span>
      </div>

      {/* Input Field */}
      <div className="space-y-2 mb-4">
        <label htmlFor="quick-topic" className="block text-xs font-medium text-neutral-600 dark:text-neutral-400">
          {ui.inputLabel}
        </label>
        <input
          id="quick-topic"
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder={ui.inputPlaceholder}
          className="w-full px-3.5 py-2 rounded-md bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 text-xs sm:text-sm focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
        />

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[11px] font-mono text-neutral-400 mr-1">{ui.quickLabel}</span>
          {topics.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTopic(item)}
              className={`text-[11px] px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                topic === item
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-black font-medium"
                  : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Output Titles List */}
      <div className="space-y-2 mb-4">
        <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          {ui.previewHeading}
        </div>
        {titles.map((titleText, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group"
          >
            <span className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-[#a9583e] dark:group-hover:text-[#a9583e] transition-colors">
              {titleText}
            </span>
            <button
              type="button"
              onClick={() => handleCopy(titleText, idx)}
              className="flex items-center gap-1 px-2 py-1 text-[11px] font-mono rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white ml-2 flex-shrink-0 transition-colors cursor-pointer"
              title="Copy to clipboard"
            >
              {copiedIndex === idx ? (
                <>
                  <Check className="w-3 h-3 text-emerald-500" />
                  <span className="text-emerald-500 font-semibold">{ui.copied}</span>
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
      <div className="pt-3 flex items-center justify-between border-t border-neutral-100 dark:border-neutral-900 text-xs">
        <span className="text-neutral-500 text-[11px]">{ui.footerPrompt}</span>
        <a
          href={getLocalizedPath("/tools/episode-title-generator", lang)}
          className="inline-flex items-center gap-1 font-medium text-xs text-[#a9583e] hover:underline"
        >
          {ui.openBtn} <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
