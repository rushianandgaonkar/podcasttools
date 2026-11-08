"use client";

import React, { useState, useMemo } from "react";
import { Sparkles, Copy, Check, Download, Filter } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";
import { getToolUi } from "@/i18n/toolUiTranslations";

interface TitleResult {
  title: string;
  category: "Curiosity" | "How-To" | "Interview" | "Contrarian" | "Listicle";
  charCount: number;
  rating: "Optimal" | "Good" | "Too Long";
}

interface EpisodeTitleGeneratorProps {
  lang?: SupportedLocale;
}

export function EpisodeTitleGenerator({ lang = defaultLocale }: EpisodeTitleGeneratorProps) {
  const ui = getToolUi(lang).titleGenerator;

  const defaultTopicMap: Record<SupportedLocale, string> = {
    en: "AI Productivity Tools",
    es: "Herramientas de IA",
    ja: "AI生産性ツール",
    fr: "Outils de Productivité IA",
    de: "KI-Produktivitätstools",
    pt: "Ferramentas de IA",
    ko: "AI 생산성 도구",
    it: "Strumenti di Produttività IA",
  };

  const fallbackTopicMap: Record<SupportedLocale, string> = {
    en: "Your Topic",
    es: "Tu Tema",
    ja: "テーマ",
    fr: "Votre Sujet",
    de: "Dein Thema",
    pt: "Seu Tema",
    ko: "에피소드 주제",
    it: "Il Tuo Tema",
  };

  const [topic, setTopic] = useState(() => defaultTopicMap[lang] || "AI Productivity Tools");
  const [guest, setGuest] = useState("");
  const [tone, setTone] = useState<string>("all");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const formulas = useMemo(() => {
    const t = topic.trim() || fallbackTopicMap[lang] || "Your Topic";
    const g = guest.trim();

    // Multilingual templates
    let list: Array<{ title: string; category: TitleResult["category"] }> = [];

    if (lang === "es") {
      list = [
        { title: `La verdad incómoda sobre ${t} en 2026`, category: "Curiosity" },
        { title: `Por qué la mayoría fracasará en ${t} este año`, category: "Curiosity" },
        { title: `Lo que realmente pasa cuando apuestas todo a ${t}`, category: "Curiosity" },
        { title: `El lado oscuro de ${t} del que nadie habla`, category: "Curiosity" },
        { title: `¿Ha muerto ${t}? La cruda realidad explicada`, category: "Curiosity" },
        { title: `Cómo dominar ${t} en 30 días (Paso a paso)`, category: "How-To" },
        { title: `El método exacto para escalar tus resultados en ${t}`, category: "How-To" },
        { title: `La rutina diaria de 15 minutos para dominar ${t}`, category: "How-To" },
        { title: `Por qué todo lo que te dijeron sobre ${t} es falso`, category: "Contrarian" },
        { title: `Deja de hacer ${t} de la forma difícil (Haz esto)`, category: "Contrarian" },
        { title: `Opinión impopular: Por qué ${t} está sobrevalorado`, category: "Contrarian" },
        { title: `7 costosos errores que cometen los creadores en ${t}`, category: "Listicle" },
        { title: `5 reglas innegociables para triunfar en ${t}`, category: "Listicle" },
        { title: `3 duras verdades sobre ${t} que debí saber antes`, category: "Listicle" },
        ...(g
          ? [
              { title: `${g}: El método exacto para conquistar ${t}`, category: "Interview" as const },
              { title: `Conversando con ${g}: Lecciones reales sobre ${t}`, category: "Interview" as const },
              { title: `${g} explica por qué la mayoría falla en ${t}`, category: "Interview" as const },
            ]
          : [
              { title: `Análisis de expertos: Cómo los líderes abordan ${t}`, category: "Interview" as const },
            ]),
      ];
    } else if (lang === "ja") {
      list = [
        { title: `誰も言わない2026年の【${t}】の不都合な真実`, category: "Curiosity" },
        { title: `今年【${t}】で挫折する人の決定的な共通点`, category: "Curiosity" },
        { title: `【${t}】に全力を注いだ結果起こる驚きの変化`, category: "Curiosity" },
        { title: `業界関係者しか知らない【${t}】の裏側`, category: "Curiosity" },
        { title: `30日で【${t}】を完全攻略する実践ロードマップ`, category: "How-To" },
        { title: `ゼロから結果を10倍にする【${t}】の仕組み化`, category: "How-To" },
        { title: `毎日15分で差がつく【${t}】の最強ルーティン`, category: "How-To" },
        { title: `【${t}】に関する世間の常識が間違いである理由`, category: "Contrarian" },
        { title: `無駄な【${t}】をやめて今すぐやるべきこと`, category: "Contrarian" },
        { title: `【${t}】で初心者がやりがちな7つの致命的ミス`, category: "Listicle" },
        { title: `【${t}】で勝つための5つの絶対ルール`, category: "Listicle" },
        ...(g
          ? [
              { title: `${g}氏直伝：【${t}】を最速でマスターする秘訣`, category: "Interview" as const },
              { title: `${g}氏が語る【${t}】で成果を出す思考法`, category: "Interview" as const },
            ]
          : [
              { title: `トップランナーが明かす【${t}】の本質と実践`, category: "Interview" as const },
            ]),
      ];
    } else if (lang === "fr") {
      list = [
        { title: `La vérité inconfortable sur ${t} en 2026`, category: "Curiosity" },
        { title: `Pourquoi la plupart échoueront sur ${t} cette année`, category: "Curiosity" },
        { title: `Ce qui arrive vraiment quand on mise tout sur ${t}`, category: "Curiosity" },
        { title: `La face cachée de ${t} dont personne ne parle`, category: "Curiosity" },
        { title: `Est-ce la fin de ${t} ? La brutale réalité`, category: "Curiosity" },
        { title: `Comment maîtriser ${t} en 30 jours (Sans s'épuiser)`, category: "How-To" },
        { title: `Le guide étape par étape pour dominer ${t}`, category: "How-To" },
        { title: `La routine quotidienne de 15 min pour maîtriser ${t}`, category: "How-To" },
        { title: `Pourquoi tout ce qu'on vous a dit sur ${t} est faux`, category: "Contrarian" },
        { title: `Arrêtez d'aborder ${t} de la mauvaise façon (Faites ceci)`, category: "Contrarian" },
        { title: `Avis impopulaire : pourquoi ${t} est surcoté`, category: "Contrarian" },
        { title: `7 erreurs coûteuses que font les créateurs avec ${t}`, category: "Listicle" },
        { title: `5 règles inégociables pour réussir avec ${t}`, category: "Listicle" },
        { title: `3 vérités difficiles sur ${t} que j'aurais aimé savoir`, category: "Listicle" },
        ...(g
          ? [
              { title: `${g} : La méthode exacte pour conquérir ${t}`, category: "Interview" as const },
              { title: `Dans les coulisses avec ${g} : Leçons réelles sur ${t}`, category: "Interview" as const },
              { title: `${g} explique pourquoi la plupart échouent sur ${t}`, category: "Interview" as const },
            ]
          : [
              { title: `Analyse d'experts : Comment les leaders abordent ${t}`, category: "Interview" as const },
            ]),
      ];
    } else if (lang === "de") {
      list = [
        { title: `Die unbequeme Wahrheit über ${t} im Jahr 2026`, category: "Curiosity" },
        { title: `Warum die meisten dieses Jahr an ${t} scheitern`, category: "Curiosity" },
        { title: `Was wirklich passiert, wenn du voll auf ${t} setzt`, category: "Curiosity" },
        { title: `Die dunkle Seite von ${t}, über die niemand spricht`, category: "Curiosity" },
        { title: `Ist ${t} am Ende? Die schonungslose Realität`, category: "Curiosity" },
        { title: `Wie du ${t} in 30 Tagen meisterst (Ohne Burnout)`, category: "How-To" },
        { title: `Die Schritt-für-Schritt-Anleitung für moderne ${t}`, category: "How-To" },
        { title: `Die 15-Minuten-Tagesroutine zur Beherrschung von ${t}`, category: "How-To" },
        { title: `Warum alles, was man dir über ${t} erzählt hat, falsch ist`, category: "Contrarian" },
        { title: `Mach ${t} nicht mehr auf die harte Tour (Mach das)`, category: "Contrarian" },
        { title: `Unpopuläre Meinung: Warum ${t} überbewertet ist`, category: "Contrarian" },
        { title: `7 teure Fehler, die Creator bei ${t} machen`, category: "Listicle" },
        { title: `5 unverhandelbare Regeln für den Erfolg bei ${t}`, category: "Listicle" },
        { title: `3 harte Wahrheiten über ${t}, die ich früher wissen wollte`, category: "Listicle" },
        ...(g
          ? [
              { title: `${g}: Die exakte Formel für den Erfolg bei ${t}`, category: "Interview" as const },
              { title: `Im Gespräch mit ${g}: Wahre Lektionen über ${t}`, category: "Interview" as const },
              { title: `${g} erklärt, warum fast alle bei ${t} scheitern`, category: "Interview" as const },
            ]
          : [
              { title: `Experten-Analyse: Wie Top-Leader ${t} meistern`, category: "Interview" as const },
            ]),
      ];
    } else if (lang === "pt") {
      list = [
        { title: `A verdade desconfortável sobre ${t} em 2026`, category: "Curiosity" },
        { title: `Por que a maioria vai falhar em ${t} este ano`, category: "Curiosity" },
        { title: `O que realmente acontece quando você aposta tudo em ${t}`, category: "Curiosity" },
        { title: `O lado oculto de ${t} que ninguém quer revelar`, category: "Curiosity" },
        { title: `${t} morreu? A dura realidade revelada`, category: "Curiosity" },
        { title: `Como dominar ${t} em 30 dias (Sem se esgotar)`, category: "How-To" },
        { title: `O método passo a passo para dominar ${t}`, category: "How-To" },
        { title: `A rotina diária de 15 minutos para dominar ${t}`, category: "How-To" },
        { title: `Por que tudo o que te ensinaram sobre ${t} está errado`, category: "Contrarian" },
        { title: `Pare de fazer ${t} do jeito difícil (Faça isso)`, category: "Contrarian" },
        { title: `Opinião impopular: Por que ${t} é superestimado`, category: "Contrarian" },
        { title: `7 erros caros que criadores cometem em ${t}`, category: "Listicle" },
        { title: `5 regras inegociáveis para vencer em ${t}`, category: "Listicle" },
        { title: `3 verdades brutais sobre ${t} que eu deveria saber antes`, category: "Listicle" },
        ...(g
          ? [
              { title: `${g}: O método exato para dominar ${t}`, category: "Interview" as const },
              { title: `Conversando com ${g}: Lições reais sobre ${t}`, category: "Interview" as const },
              { title: `${g} explica por que a maioria falha em ${t}`, category: "Interview" as const },
            ]
          : [
              { title: `Análise com especialistas: Como grandes líderes aplicam ${t}`, category: "Interview" as const },
            ]),
      ];
    } else if (lang === "ko") {
      list = [
        { title: `2026년 아무도 말해주지 않는 【${t}】의 불편한 진실`, category: "Curiosity" },
        { title: `올해 대부분의 사람들이 【${t}】에서 실패하는 이유`, category: "Curiosity" },
        { title: `【${t}】에 모든 것을 걸었을 때 실제로 일어나는 일`, category: "Curiosity" },
        { title: `아무도 이야기하지 않는 【${t}】의 어두운 이면`, category: "Curiosity" },
        { title: `【${t}】은(는) 정말 끝났을까? 냉혹한 현실 분석`, category: "Curiosity" },
        { title: `번아웃 없이 30일 만에 【${t}】 마스터하는 실전 비법`, category: "How-To" },
        { title: `현대적인 【${t}】을(를) 위한 단계별 플레이북`, category: "How-To" },
        { title: `하루 15분 루틴으로 【${t}】 완벽 정복하기`, category: "How-To" },
        { title: `당신이 【${t}】에 대해 알고 있던 상식이 틀린 이유`, category: "Contrarian" },
        { title: `어렵게 【${t}】 하지 마세요 (지금 바로 바꿀 한 가지)`, category: "Contrarian" },
        { title: `언포퓰러 오피니언: 【${t}】이(가) 과대평가된 진짜 이유`, category: "Contrarian" },
        { title: `크리에이터들이 【${t}】에서 저지르는 가장 값비싼 실수 7가지`, category: "Listicle" },
        { title: `【${t}】에서 압도적으로 성공하기 위한 5가지 절대 법칙`, category: "Listicle" },
        { title: `더 일찍 알았더라면 좋았을 【${t}】에 대한 3가지 진실`, category: "Listicle" },
        ...(g
          ? [
              { title: `${g}의 직강: 【${t}】을(를) 정복하는 실전 가이드`, category: "Interview" as const },
              { title: `${g}에게 직접 들은 【${t}】의 핵심 노하우`, category: "Interview" as const },
              { title: `${g}이(가) 밝히는 【${t}】 실패 원인과 극복법`, category: "Interview" as const },
            ]
          : [
              { title: `업계 전문가 심층 분석: 리더들이 【${t}】에 접근하는 방식`, category: "Interview" as const },
            ]),
      ];
    } else if (lang === "it") {
      list = [
        { title: `La verità scomoda su ${t} nel 2026`, category: "Curiosity" },
        { title: `Perché la maggior parte fallirà in ${t} quest'anno`, category: "Curiosity" },
        { title: `Cosa succede davvero quando punti tutto su ${t}`, category: "Curiosity" },
        { title: `Il lato oscuro di ${t} di cui nessuno parla mai`, category: "Curiosity" },
        { title: `${t} è morto? La brutale realtà spiegata`, category: "Curiosity" },
        { title: `Come padroneggiare ${t} in 30 giorni (Senza bruciarsi)`, category: "How-To" },
        { title: `La guida passo-passo per dominare ${t}`, category: "How-To" },
        { title: `La routine quotidiana di 15 minuti per dominare ${t}`, category: "How-To" },
        { title: `Perché tutto quello che ti hanno detto su ${t} è falso`, category: "Contrarian" },
        { title: `Smetti di affrontare ${t} nel modo difficile (Fai questo)`, category: "Contrarian" },
        { title: `Opinione impopolare: Perché ${t} è sopravvalutato`, category: "Contrarian" },
        { title: `7 costosi errori che i creator commettono in ${t}`, category: "Listicle" },
        { title: `5 regole non negoziabili per avere successo in ${t}`, category: "Listicle" },
        { title: `3 dure verità su ${t} che avrei voluto conoscere prima`, category: "Listicle" },
        ...(g
          ? [
              { title: `${g}: Il metodo esatto per padroneggiare ${t}`, category: "Interview" as const },
              { title: `A tu per tu con ${g}: Lezioni vere su ${t}`, category: "Interview" as const },
              { title: `${g} spiega perché quasi tutti falliscono in ${t}`, category: "Interview" as const },
            ]
          : [
              { title: `Analisi degli esperti: Come i top leader affrontano ${t}`, category: "Interview" as const },
            ]),
      ];
    } else {
      list = [
        { title: `The Uncomfortable Truth About ${t} in 2026`, category: "Curiosity" },
        { title: `Why Most People Will Fail at ${t} This Year`, category: "Curiosity" },
        { title: `What Really Happens When You Double Down on ${t}`, category: "Curiosity" },
        { title: `The Hidden Dark Side of ${t} Nobody Talks About`, category: "Curiosity" },
        { title: `Is ${t} Dead? The Brutal Reality`, category: "Curiosity" },
        { title: `How to Master ${t} in 30 Days (Without Burning Out)`, category: "How-To" },
        { title: `The Step-by-Step Playbook for Modern ${t}`, category: "How-To" },
        { title: `The 15-Minute Daily Routine to Dominate ${t}`, category: "How-To" },
        { title: `Why Everything You Were Told About ${t} Is Dead Wrong`, category: "Contrarian" },
        { title: `Stop Doing ${t} the Hard Way (Do This Instead)`, category: "Contrarian" },
        { title: `Unpopular Opinion: Why ${t} is Overhyped`, category: "Contrarian" },
        { title: `7 Expensive Mistakes Creators Make in ${t}`, category: "Listicle" },
        { title: `5 Non-Negotiable Rules for Winning at ${t}`, category: "Listicle" },
        { title: `3 Harsh Truths About ${t} I Wish I Knew Sooner`, category: "Listicle" },
        ...(g
          ? [
              { title: `${g}: The Exact Blueprint to Conquer ${t}`, category: "Interview" as const },
              { title: `Inside the Mind of ${g}: Real Lessons from ${t}`, category: "Interview" as const },
              { title: `${g} on Why Most Advice Around ${t} Fails`, category: "Interview" as const },
            ]
          : [
              { title: `Expert Breakdown: How Industry Leaders Approach ${t}`, category: "Interview" as const },
            ]),
      ];
    }

    return list.map((item): TitleResult => {
      const len = item.title.length;
      let rating: TitleResult["rating"] = "Optimal";
      if (len > 70) rating = "Too Long";
      else if (len < 35) rating = "Good";

      return {
        ...item,
        charCount: len,
        rating,
      };
    });
  }, [topic, guest, lang]);

  const filteredTitles = useMemo(() => {
    if (tone === "all") return formulas;
    return formulas.filter((f) => f.category.toLowerCase() === tone.toLowerCase());
  }, [formulas, tone]);

  const handleCopySingle = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAll = () => {
    const allText = filteredTitles.map((t) => t.title).join("\n");
    navigator.clipboard.writeText(allText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleExportTxt = () => {
    const allText = `PODCAST EPISODE TITLES - POD STUDIO\nTopic: ${topic}\nGuest: ${guest || "N/A"}\n\n` +
      filteredTitles.map((t, i) => `${i + 1}. [${t.category}] ${t.title} (${t.charCount} chars)`).join("\n");
    
    const blob = new Blob([allText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `podcast-titles-${topic.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const categoryLabels: Record<string, string> = {
    all: ui.allFormulas,
    Curiosity: ui.curiosity,
    "How-To": ui.howTo,
    Contrarian: ui.contrarian,
    Listicle: ui.listicle,
    Interview: ui.interview,
  };

  return (
    <div className="w-full space-y-6">
      {/* Control Panel */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Topic Input */}
          <div className="space-y-1.5">
            <label htmlFor="topic-input" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.topicLabel} <span className="text-orange-500">*</span>
            </label>
            <input
              id="topic-input"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder={ui.topicPlaceholder}
              className="w-full px-4 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/50"
            />
          </div>

          {/* Guest Name Input */}
          <div className="space-y-1.5">
            <label htmlFor="guest-input" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {ui.guestLabel}
            </label>
            <input
              id="guest-input"
              type="text"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
              placeholder={ui.guestPlaceholder}
              className="w-full px-4 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/50"
            />
          </div>
        </div>

        {/* Category / Angle Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-studio-border/60">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-neutral-600 dark:text-neutral-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> {ui.filterLabel}:
            </span>
            {(["all", "Curiosity", "How-To", "Contrarian", "Listicle", "Interview"] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setTone(cat)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  tone === cat
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                    : "bg-studio-elevated text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
                }`}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>

          {/* Batch Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-studio-elevated hover:bg-studio-border border border-studio-border text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white text-xs font-medium transition-colors cursor-pointer"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedAll ? ui.copied : ui.copyAll}
            </button>
            <button
              type="button"
              onClick={handleExportTxt}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-studio-elevated hover:bg-studio-border border border-studio-border text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white text-xs font-medium transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              {ui.exportTxt}
            </button>
          </div>
        </div>
      </div>

      {/* Generated Titles List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            {ui.titlesLabel} ({filteredTitles.length})
          </span>
          <span className="text-[11px] text-neutral-500">
            {ui.titleLengthNote}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {filteredTitles.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-studio-card border border-studio-border/80 hover:border-orange-500/50 hover:bg-studio-elevated/70 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-studio-dark border border-studio-border text-neutral-700 dark:text-neutral-300">
                    {categoryLabels[item.category] || item.category}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      item.rating === "Optimal"
                        ? "text-emerald-500 dark:text-emerald-400 bg-emerald-500/10"
                        : item.rating === "Good"
                        ? "text-blue-500 dark:text-blue-400 bg-blue-500/10"
                        : "text-amber-500 dark:text-amber-400 bg-amber-500/10"
                    }`}
                  >
                    {item.charCount} chars • {item.rating === "Optimal" ? ui.optimal : item.rating === "Good" ? ui.good : ui.tooLong}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-[#a9583e] dark:group-hover:text-[#a9583e] transition-colors">
                  {item.title}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleCopySingle(item.title, index)}
                className="self-end sm:self-center flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 hover:!bg-orange-500 hover:!text-white hover:!border-orange-500 text-xs font-semibold transition-all flex-shrink-0 cursor-pointer shadow-2xs"
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{ui.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{ui.copy}</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
