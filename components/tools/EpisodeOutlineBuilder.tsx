"use client";

import React, { useState } from "react";
import { ListOrdered, Plus, Trash2, Copy, Check, Download, Clock, Sparkles } from "lucide-react";

interface Segment {
  id: string;
  title: string;
  durationMin: number;
  notes: string;
}

export function EpisodeOutlineBuilder() {
  const [episodeTitle, setEpisodeTitle] = useState("How to Build a High-Trust Creator Brand");
  const [targetDuration, setTargetDuration] = useState<number>(45);
  const [copied, setCopied] = useState(false);

  const [segments, setSegments] = useState<Segment[]>([
    {
      id: "1",
      title: "Cold Open & High-Stakes Teaser",
      durationMin: 2,
      notes: "Quote the most controversial takeaway from the middle of the conversation.",
    },
    {
      id: "2",
      title: "Show Intro & Sponsor Roll",
      durationMin: 3,
      notes: "Welcome listeners, state the promise of the episode, 30s sponsor shoutout.",
    },
    {
      id: "3",
      title: "Act 1: The Problem with Traditional Positioning",
      durationMin: 12,
      notes: "Break down why generic branding fails and present 2 real examples.",
    },
    {
      id: "4",
      title: "Mid-Roll Ad Break & Review CTA",
      durationMin: 2,
      notes: "Host-read sponsor message + prompt listeners to follow on Spotify/Apple.",
    },
    {
      id: "5",
      title: "Act 2: The 3-Pillar Positioning Framework",
      durationMin: 18,
      notes: "Deep dive into Pillar 1 (Authority), Pillar 2 (Vulnerability), Pillar 3 (Consistency).",
    },
    {
      id: "6",
      title: "Outro, Homework & Next Week Preview",
      durationMin: 8,
      notes: "Summarize 1 immediate action item, thank the guest, play outro music.",
    },
  ]);

  const totalBudgeted = segments.reduce((acc, s) => acc + (Number(s.durationMin) || 0), 0);

  const handleAddSegment = () => {
    setSegments([
      ...segments,
      {
        id: Date.now().toString(),
        title: "New Discussion Segment",
        durationMin: 5,
        notes: "Key talking points and questions...",
      },
    ]);
  };

  const handleRemoveSegment = (id: string) => {
    if (segments.length <= 1) return;
    setSegments(segments.filter((s) => s.id !== id));
  };

  const handleUpdateSegment = (id: string, field: keyof Segment, val: any) => {
    setSegments(
      segments.map((s) => (s.id === id ? { ...s, [field]: val } : s))
    );
  };

  const generateMarkdown = () => {
    let accumulatedMin = 0;
    const lines = [
      `# RUN OF SHOW: ${episodeTitle}`,
      `Target Duration: ${targetDuration} mins | Budgeted: ${totalBudgeted} mins\n`,
      `---`,
    ];

    segments.forEach((s, idx) => {
      const startMin = accumulatedMin;
      accumulatedMin += Number(s.durationMin) || 0;
      const startFormatted = `${Math.floor(startMin).toString().padStart(2, "0")}:00`;
      lines.push(
        `### Segment ${idx + 1}: ${s.title} (${startFormatted} - ${s.durationMin} mins)`,
        `*Notes & Talking Points:* ${s.notes}\n`
      );
    });

    return lines.join("\n");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const text = generateMarkdown();
    const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `run-of-show-${episodeTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-6">
      {/* Top Header Card */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-2 space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Episode Title / Working Name
            </label>
            <input
              type="text"
              value={episodeTitle}
              onChange={(e) => setEpisodeTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-white text-sm focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Target Duration (Minutes)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={5}
                max={180}
                value={targetDuration}
                onChange={(e) => setTargetDuration(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-white text-sm focus:outline-none focus:border-orange-500/70 text-center font-mono font-bold"
              />
              <span className="text-xs text-slate-400">mins</span>
            </div>
          </div>
        </div>

        {/* Time Budget Status Bar */}
        <div className="p-4 rounded-xl bg-studio-darkest border border-studio-border space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-300 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-orange-400" />
              Time Budget: {totalBudgeted} of {targetDuration} mins planned
            </span>
            <span
              className={
                totalBudgeted === targetDuration
                  ? "text-emerald-400"
                  : totalBudgeted > targetDuration
                  ? "text-amber-400"
                  : "text-blue-400"
              }
            >
              {totalBudgeted === targetDuration
                ? "Perfect Match"
                : totalBudgeted > targetDuration
                ? `+${totalBudgeted - targetDuration}m over budget`
                : `${targetDuration - totalBudgeted}m remaining`}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-studio-card h-2 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${
                totalBudgeted > targetDuration ? "bg-amber-400" : "bg-orange-500"
              }`}
              style={{ width: `${Math.min((totalBudgeted / targetDuration) * 100, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Segments List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Episode Run of Show Segments ({segments.length})
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleAddSegment}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <Plus className="w-3.5 h-3.5" /> Add Segment
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-studio-card hover:bg-studio-elevated text-slate-300 hover:text-white border border-studio-border text-xs font-semibold transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied!" : "Copy Markdown"}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-studio-card hover:bg-studio-elevated text-slate-300 hover:text-white border border-studio-border text-xs font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Export MD
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {segments.map((seg, idx) => (
            <div
              key={seg.id}
              className="p-5 rounded-2xl bg-studio-card border border-studio-border hover:border-studio-border-hover transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1">
                  <span className="w-6 h-6 rounded-md bg-studio-darkest text-slate-400 flex items-center justify-center text-xs font-mono font-bold border border-studio-border flex-shrink-0">
                    {idx + 1}
                  </span>
                  <input
                    type="text"
                    value={seg.title}
                    onChange={(e) => handleUpdateSegment(seg.id, "title", e.target.value)}
                    className="w-full bg-transparent text-sm font-bold text-white border-b border-transparent hover:border-studio-border focus:border-orange-500/70 focus:outline-none px-1 py-0.5"
                  />
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <span>Duration:</span>
                    <input
                      type="number"
                      min={1}
                      max={120}
                      value={seg.durationMin}
                      onChange={(e) => handleUpdateSegment(seg.id, "durationMin", Number(e.target.value))}
                      className="w-14 px-2 py-1 bg-studio-darkest border border-studio-border rounded text-white font-mono text-xs text-center focus:outline-none"
                    />
                    <span>min</span>
                  </div>

                  <button
                    onClick={() => handleRemoveSegment(seg.id)}
                    className="p-1 rounded text-slate-500 hover:text-red-400 transition-colors"
                    title="Remove segment"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div>
                <textarea
                  rows={2}
                  value={seg.notes}
                  onChange={(e) => handleUpdateSegment(seg.id, "notes", e.target.value)}
                  placeholder="Key bullet points, quotes, questions, or sponsor copy..."
                  className="w-full px-3 py-2 rounded-xl bg-studio-darkest border border-studio-border text-xs text-slate-300 placeholder-slate-500 focus:outline-none focus:border-orange-500/70 resize-y"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
