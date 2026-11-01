"use client";

import React, { useState } from "react";
import { Film, Copy, Check, Download, Clock, Sparkles } from "lucide-react";

export function TrailerScriptBuilder() {
  const [showName, setShowName] = useState("The Midnight Architect");
  const [hostName, setHostName] = useState("David Miller");
  const [bigQuestion, setBigQuestion] = useState(
    "What does it really take to build something enduring in an era of hyper-distraction?"
  );
  const [audiencePromise, setAudiencePromise] = useState(
    "Unfiltered case studies from designers, architects, and founders who chose craftsmanship over speed."
  );
  const [launchDate, setLaunchDate] = useState("Every Tuesday starting this November");
  const [copied, setCopied] = useState(false);

  const fullTrailerScript = `[INTRO: CINEMATIC, ATMOSPHERIC AUDIO SWELLS]

HOST (${hostName}):
"${bigQuestion}"

[MUSIC DROPS INTO A PERSISTENT, DRIVING BEAT]

HOST:
"I'm ${hostName}, and welcome to ${showName}.

For the past ten years, I've watched creators sacrifice their health, their vision, and their art chasing algorithm vanity metrics. But there is another way.

On this show, we sit down with the quiet innovators—the engineers, architects, and writers who build category-defining work without burning out.

[QUICK SOUNDBYTE MONTAGE SFX: 3 RAPID GUEST QUOTES]
Guest 1: 'Everyone told us we were crazy to turn down that term sheet.'
Guest 2: 'The craft takes whatever time it takes. You can't microwave excellence.'
Guest 3: 'When we focused on retention instead of acquisition, the whole business unlocked.'

[MUSIC BUILDS TO A CLIMAX]

HOST:
"You will learn:
${audiencePromise}

Whether you're in the trenches of your first venture or scaling a legacy studio, this show is your weekly sanctuary for thoughtful building.

${showName} launches ${launchDate}.

Tap that follow button right now on Apple Podcasts, Spotify, or wherever you listen so you don't miss Episode 1.

Welcome to the studio."

[OUTRO MUSIC HITS FINAL RESONANT CHORD AND FADES OUT]`;

  const wordCount = fullTrailerScript.split(/\s+/).filter(Boolean).length;
  const estimatedSeconds = Math.round((wordCount / 135) * 60);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullTrailerScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Form */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white pb-2 border-b border-studio-border/60 flex items-center gap-2">
            <Film className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            Trailer Blueprint Parameters
          </h2>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">Podcast Show Title</label>
            <input
              type="text"
              value={showName}
              onChange={(e) => setShowName(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">Host Name</label>
            <input
              type="text"
              value={hostName}
              onChange={(e) => setHostName(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              The Big Provocative Question (First 15s Hook)
            </label>
            <textarea
              rows={2}
              value={bigQuestion}
              onChange={(e) => setBigQuestion(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70 resize-y"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              The Promise to the Listener (What they will learn)
            </label>
            <textarea
              rows={2}
              value={audiencePromise}
              onChange={(e) => setAudiencePromise(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70 resize-y"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">Release Schedule</label>
            <input
              type="text"
              value={launchDate}
              onChange={(e) => setLaunchDate(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>

        {/* Right Output */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-studio-border/60 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                  Trailer Audio Script
                </span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  ~{estimatedSeconds}s audio pace
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied!" : "Copy Trailer Script"}
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-studio-darkest border border-studio-border text-xs text-neutral-900 dark:text-neutral-100 font-sans leading-relaxed whitespace-pre-wrap max-h-[420px] overflow-y-auto select-text">
              {fullTrailerScript}
            </pre>
          </div>

          <div className="text-[11px] text-neutral-500 pt-2 border-t border-studio-border/60">
            A 60 to 90-second trailer is the single highest-converting audio asset you can publish before your official Episode 1 drops.
          </div>
        </div>
      </div>
    </div>
  );
}

