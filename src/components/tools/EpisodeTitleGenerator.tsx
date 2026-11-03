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

  const [topic, setTopic] = useState("AI Productivity Tools");
  const [guest, setGuest] = useState("");
  const [tone, setTone] = useState<string>("all");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const formulas = useMemo(() => {
    const t = topic.trim() || "Your Topic";
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
            Titles ({filteredTitles.length})
          </span>
          <span className="text-[11px] text-neutral-500">
            Apple &amp; Spotify Best Practice: &lt; 65 chars
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
                <p className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-[#0070f3] dark:group-hover:text-[#0070f3] transition-colors">
                  {item.title}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleCopySingle(item.title, index)}
                className="self-end sm:self-center flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-studio-dark hover:bg-orange-500 hover:text-white border border-studio-border text-neutral-700 dark:text-neutral-300 text-xs font-semibold transition-all flex-shrink-0 cursor-pointer"
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
