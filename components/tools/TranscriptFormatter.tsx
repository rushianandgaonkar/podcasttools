"use client";

import React, { useState } from "react";
import { FileCode, Copy, Check, Download, RotateCcw, Sparkles } from "lucide-react";

export function TranscriptFormatter() {
  const [rawText, setRawText] = useState(
    `SPEAKER_00: 00:01 Hey everyone, um, welcome to the show. Today we are, like, talking about AI audio tools.\nSPEAKER_01: 00:08 Thanks for having me. You know, it's really crazy how fast the technology is moving in 2026.\nSPEAKER_00: 00:15 Totally agree. So, uh, let's jump right into the first question.`
  );
  const [speaker1, setSpeaker1] = useState("Sarah (Host)");
  const [speaker2, setSpeaker2] = useState("Guest");
  const [stripFillers, setStripFillers] = useState(true);
  const [stripTimestamps, setStripTimestamps] = useState(false);
  const [copied, setCopied] = useState(false);

  const cleanTranscript = () => {
    let text = rawText;

    // Replace speaker labels
    text = text.replace(/SPEAKER_00|Speaker 1|SPEAKER 1/gi, `${speaker1}:`);
    text = text.replace(/SPEAKER_01|Speaker 2|SPEAKER 2/gi, `${speaker2}:`);

    // Optionally strip timestamps e.g. "00:01" or "[00:12:45]"
    if (stripTimestamps) {
      text = text.replace(/\[?\d{1,2}:\d{2}(?::\d{2})?(?:\.\d{3})?\]?/g, "");
    }

    // Optionally clean filler words
    if (stripFillers) {
      text = text.replace(/\b(um|uh|you know|like,\s*basically)\b,?\s*/gi, "");
    }

    // Clean up multiple spaces and empty lines
    text = text.replace(/[ \t]+/g, " ");
    text = text.replace(/\n\s*\n/g, "\n\n");

    return text.trim();
  };

  const output = cleanTranscript();

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `cleaned-transcript.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-6">
      {/* Control Configuration Bar */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Replace Speaker 1 With:
            </label>
            <input
              type="text"
              value={speaker1}
              onChange={(e) => setSpeaker1(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Replace Speaker 2 With:
            </label>
            <input
              type="text"
              value={speaker2}
              onChange={(e) => setSpeaker2(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>

        {/* Toggles */}
        <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-studio-border/60 text-xs">
          <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={stripFillers}
              onChange={(e) => setStripFillers(e.target.checked)}
              className="rounded accent-orange-500 w-4 h-4 cursor-pointer"
            />
            <span>Strip filler words (&ldquo;um&rdquo;, &ldquo;uh&rdquo;, &ldquo;you know&rdquo;)</span>
          </label>

          <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={stripTimestamps}
              onChange={(e) => setStripTimestamps(e.target.checked)}
              className="rounded accent-orange-500 w-4 h-4 cursor-pointer"
            />
            <span>Remove inline timestamps</span>
          </label>
        </div>
      </div>

      {/* Raw & Clean Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
            Paste Raw Automated Transcript:
          </label>
          <textarea
            rows={10}
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            placeholder="Paste Whisper, Otter, Descript or Zoom raw transcript text..."
            className="w-full px-4 py-3 rounded-xl bg-studio-darkest border border-studio-border text-white font-mono text-xs focus:outline-none focus:border-orange-500/70 resize-y"
          />
        </div>

        {/* Output */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-studio-border/60 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Formatted Publication-Ready Transcript
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-md shadow-orange-500/20 transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy"}
                </button>
                <button
                  onClick={handleDownload}
                  className="p-1.5 rounded-lg bg-studio-elevated hover:bg-studio-border text-slate-300 border border-studio-border"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <pre className="p-4 rounded-xl bg-studio-darkest border border-studio-border text-xs text-slate-200 font-sans leading-relaxed whitespace-pre-wrap max-h-[280px] overflow-y-auto">
              {output}
            </pre>
          </div>

          <div className="text-[11px] text-slate-500 pt-1">
            Word count: {output.split(/\s+/).filter(Boolean).length} words
          </div>
        </div>
      </div>
    </div>
  );
}
