"use client";

import React, { useState, useMemo } from "react";
import { HelpCircle, Copy, Check, Download, Sparkles, Filter, Bookmark } from "lucide-react";

interface QuestionItem {
  question: string;
  category: "Icebreaker" | "Tactical" | "Failure & Pivot" | "Hot Take" | "Closing";
  context: string;
}

export function GuestQuestionGenerator() {
  const [guestName, setGuestName] = useState("Alex Hormozi");
  const [profession, setProfession] = useState("Entrepreneur & Investor");
  const [topic, setTopic] = useState("Bootstrapping to $100M");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const questions = useMemo(() => {
    const g = guestName.trim() || "you";
    const p = profession.trim() || "your industry";
    const t = topic.trim() || "your work";

    const list: QuestionItem[] = [
      // Icebreaker
      {
        question: `When you look back at your first year in ${t}, what is one belief you held that you now find completely ridiculous?`,
        category: "Icebreaker",
        context: "Reveals personal growth and breaks the guest out of rehearsed PR talking points.",
      },
      {
        question: `What was the very first dollar you ever earned from ${t}, and how did that moment feel?`,
        category: "Icebreaker",
        context: "Taps into origin nostalgia and emotional connection.",
      },
      {
        question: `What is one question you wish interviewers asked you that nobody ever does?`,
        category: "Icebreaker",
        context: "Gives the guest permission to discuss their favorite passion project.",
      },

      // Tactical
      {
        question: `If you had to recreate your success in ${t} starting today with $1,000 and zero network, what are the first 3 things you would do?`,
        category: "Tactical",
        context: "Forces actionable, non-fluffy frameworks listeners can execute immediately.",
      },
      {
        question: `What does your actual day-to-day workflow look like when you're executing deep work in ${t}?`,
        category: "Tactical",
        context: "Peeks behind the curtain into calendar discipline and operational habits.",
      },
      {
        question: `What is a tool, software, or framework in ${t} that feels like an unfair advantage for your team?`,
        category: "Tactical",
        context: "Listeners love specific tool recommendations and proprietary setups.",
      },

      // Failure & Pivot
      {
        question: `Take us to the darkest moment you experienced while building in ${t}—the moment you genuinely contemplated walking away.`,
        category: "Failure & Pivot",
        context: "Explores vulnerability and resilience under pressure.",
      },
      {
        question: `What is the most expensive mistake you've made in ${t}, and what did the tuition cost you?`,
        category: "Failure & Pivot",
        context: "Extracts hard-won lessons so listeners don't repeat the same error.",
      },
      {
        question: `Who in ${p} did you once admire that you now see through a very different lens?`,
        category: "Failure & Pivot",
        context: "Generates high curiosity and honest evaluations of industry dogma.",
      },

      // Hot Takes
      {
        question: `What is an industry consensus in ${t} that everyone agrees with, but you are 100% convinced is dead wrong?`,
        category: "Hot Take",
        context: "Creates viral audio clips and strong contrarian debate.",
      },
      {
        question: `If you could ban one buzzword or phrase from ${p}, what would it be?`,
        category: "Hot Take",
        context: "Lighthearted but reveals authentic frustration with industry clichés.",
      },
      {
        question: `Where will ${t} be in 5 years, and who is going to be wiped out by that shift?`,
        category: "Hot Take",
        context: "Positions the guest as a visionary predicting macro trends.",
      },

      // Closing
      {
        question: `If this was the final interview you ever gave on ${t}, what is the one lesson you want etched into the listener's memory?`,
        category: "Closing",
        context: "Produces a powerful, inspirational summary soundbite for the outro.",
      },
      {
        question: `What is the best advice you've ever received that you initially ignored?`,
        category: "Closing",
        context: "Reflective, memorable final takeaway.",
      },
    ];

    return list;
  }, [guestName, profession, topic]);

  const filteredQuestions = useMemo(() => {
    if (selectedCategory === "all") return questions;
    return questions.filter((q) => q.category.toLowerCase() === selectedCategory.toLowerCase());
  }, [questions, selectedCategory]);

  const handleCopySingle = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const generateFullCheatSheet = () => {
    return (
      `PODCAST INTERVIEW PREP SHEET - POD STUDIO\n` +
      `Guest: ${guestName} (${profession})\n` +
      `Episode Topic: ${topic}\n\n` +
      `==============================\n` +
      filteredQuestions
        .map((q, i) => `${i + 1}. [${q.category.toUpperCase()}]\nQ: ${q.question}\nIntent: ${q.context}\n`)
        .join("\n")
    );
  };

  const handleCopyAll = () => {
    navigator.clipboard.writeText(generateFullCheatSheet());
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleDownload = () => {
    const text = generateFullCheatSheet();
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `interview-questions-${guestName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-6">
      {/* Inputs */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Guest Name
            </label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Profession / Role
            </label>
            <input
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Core Episode Topic
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-studio-border/60">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-neutral-600 dark:text-neutral-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Interview Arc:
            </span>
            {(["all", "Icebreaker", "Tactical", "Failure & Pivot", "Hot Take", "Closing"] as const).map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                      : "bg-studio-elevated text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
                  }`}
                >
                  {cat === "all" ? "All Questions" : cat}
                </button>
              )
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-studio-elevated hover:bg-studio-border text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-studio-border text-xs font-semibold transition-colors cursor-pointer"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedAll ? "Copied Prep Sheet!" : "Copy Prep Sheet"}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-studio-elevated hover:bg-studio-border text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-studio-border text-xs font-semibold transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Export TXT
            </button>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        {filteredQuestions.map((q, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-studio-card border border-studio-border hover:border-orange-500/40 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-4 group"
          >
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-studio-dark border border-studio-border text-orange-500 dark:text-orange-400">
                  {q.category}
                </span>
                <span className="text-[11px] text-neutral-500">Why it works: {q.context}</span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white leading-relaxed group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                &ldquo;{q.question}&rdquo;
              </p>
            </div>

            <button
              onClick={() => handleCopySingle(q.question, idx)}
              className="self-end sm:self-start flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-studio-dark hover:bg-orange-500 hover:text-white border border-studio-border text-neutral-700 dark:text-neutral-300 text-xs font-semibold transition-all flex-shrink-0 cursor-pointer"
            >
              {copiedIndex === idx ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

