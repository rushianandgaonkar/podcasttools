"use client";

import React, { useState } from "react";
import { Clock, Plus, Trash2, Copy, Check, Download, RotateCcw } from "lucide-react";
import { ChapterTimeline } from "./visuals/ChapterTimeline";

interface ChapterRow {
  id: string;
  time: string; // e.g. "00:00"
  title: string;
}

export function EpisodeTimestampGenerator() {
  const [chapters, setChapters] = useState<ChapterRow[]>([
    { id: "1", time: "00:00", title: "Introduction & Episode Teaser" },
    { id: "2", time: "02:45", title: "Guest Background & Origin Story" },
    { id: "3", time: "11:20", title: "The 3 Biggest Mistakes Beginners Make" },
    { id: "4", time: "24:15", title: "Step-by-Step Execution Framework" },
    { id: "5", time: "38:50", title: "Audience Q&A & Rapid Fire" },
    { id: "6", time: "44:10", title: "Outro & Key Takeaways" },
  ]);

  const [rawPaste, setRawPaste] = useState("");
  const [copied, setCopied] = useState(false);

  const handleAddChapter = () => {
    setChapters([
      ...chapters,
      {
        id: Date.now().toString(),
        time: "00:00",
        title: "New Chapter Title",
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
          title: match[2]?.trim() || `Chapter ${idx + 1}`,
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
              Chapter Markers ({chapters.length})
            </h2>
            <button
              onClick={handleAddChapter}
              className="text-xs px-2.5 py-1 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold inline-flex items-center gap-1 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" /> Add Timestamp
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
                  placeholder="Segment title..."
                  className="flex-1 px-3 py-1.5 rounded-lg bg-transparent text-xs text-neutral-900 dark:text-white focus:outline-none"
                />
                <button
                  onClick={() => handleRemoveChapter(ch.id)}
                  className="p-1.5 text-neutral-400 hover:text-red-500 rounded transition-colors"
                  title="Remove"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Quick Raw Paste Converter */}
          <div className="pt-3 border-t border-studio-border/60 space-y-2">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              Or Paste Raw Text to Auto-Convert:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={rawPaste}
                onChange={(e) => setRawPaste(e.target.value)}
                placeholder="e.g. 0:00 Intro, 5:30 Breakthrough, 15:00 Wrap up"
                className="flex-1 px-3 py-1.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none"
              />
              <button
                onClick={handleParseRaw}
                className="px-3 py-1.5 rounded-xl bg-studio-elevated hover:bg-studio-border text-neutral-700 dark:text-neutral-300 text-xs font-medium border border-studio-border cursor-pointer"
              >
                Auto-Parse
              </button>
            </div>
          </div>
        </div>

        {/* Right: Copyable Outputs */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-studio-border/60 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                YouTube & Spotify Formatted Output
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied!" : "Copy Timestamps"}
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-studio-darkest border border-studio-border text-xs font-mono text-neutral-900 dark:text-neutral-100 leading-relaxed overflow-x-auto min-h-[260px] whitespace-pre-wrap select-text">
              {youtubeOutput}
            </pre>
          </div>

          <div className="text-[11px] text-neutral-600 dark:text-neutral-400 pt-2 border-t border-studio-border/60">
            Paste directly into YouTube video description or your podcast hosting show notes to trigger automatic clickable chapter markers.
          </div>
        </div>
      </div>

      {/* Visual timeline + YouTube chapter rules */}
      <ChapterTimeline chapters={chapters} />
    </div>
  );
}

