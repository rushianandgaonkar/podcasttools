"use client";

import React, { useState, useMemo } from "react";
import { AlignLeft, Copy, Check, Sparkles, Smartphone } from "lucide-react";

export function DescriptionGenerator() {
  const [mode, setMode] = useState<"episode" | "show">("episode");
  const [title, setTitle] = useState("Scaling Without Burnout");
  const [audience, setAudience] = useState("Bootstrapped founders and solo creators");
  const [keyPoints, setKeyPoints] = useState(
    "How to delegate low-leverage tasks, avoid calendar fatigue, and protect mental energy during growth phases."
  );
  const [links, setLinks] = useState("Website: https://example.com\nTwitter: @podcasthost");
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => {
    if (mode === "episode") {
      return `Why do so many high-performing builders hit an invisible wall right when business picks up? In this episode, we break down actionable systems for ${audience.toLowerCase()} to master ${title.toLowerCase()}.

Key topics covered in this episode:
• ${keyPoints.replace(/\n/g, "\n• ")}

Whether you are in the trenches of your first venture or scaling an existing team, this conversation gives you practical mental models you can implement immediately.

🔗 Connect & Resources:
${links}

⭐ If you found value in this episode, please leave a quick rating on Apple Podcasts or Spotify—it directly supports the show!`;
    } else {
      return `Welcome to ${title}—the definitive podcast built for ${audience.toLowerCase()}.

Every week, we bring you unfiltered conversations, tactical breakdowns, and deep dives into ${keyPoints.toLowerCase()}

No fluff, no recycled clichés. Just actionable insights and proven playbooks to help you level up your craft.

Subscribe now on Apple Podcasts, Spotify, or wherever you listen to audio so you never miss an episode.

🌐 Explore more resources:
${links}`;
    }
  }, [mode, title, audience, keyPoints, links]);

  // Mobile cut-off check (first 140 chars)
  const mobileHook = output.slice(0, 140);

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-6">
      {/* Controls */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        {/* Mode Switcher */}
        <div className="flex items-center gap-2 pb-3 border-b border-studio-border/60">
          <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mr-2">Generate:</span>
          <button
            onClick={() => setMode("episode")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === "episode"
                ? "bg-orange-500 text-white shadow-sm"
                : "bg-studio-darkest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
            }`}
          >
            Episode Description
          </button>
          <button
            onClick={() => setMode("show")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === "show"
                ? "bg-orange-500 text-white shadow-sm"
                : "bg-studio-darkest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
            }`}
          >
            Overall Show / Channel Bio
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {mode === "episode" ? "Episode Title" : "Podcast Name"}
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Target Audience
            </label>
            <input
              type="text"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            Key Topics & Takeaways
          </label>
          <textarea
            rows={2}
            value={keyPoints}
            onChange={(e) => setKeyPoints(e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70 resize-y"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            Host Links / CTA
          </label>
          <input
            type="text"
            value={links}
            onChange={(e) => setLinks(e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
          />
        </div>
      </div>

      {/* Output & Mobile Preview Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Full Output */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-studio-border/60 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                SEO-Optimized Description ({output.length} chars)
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied!" : "Copy Description"}
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-studio-darkest border border-studio-border text-xs text-neutral-900 dark:text-neutral-100 font-sans leading-relaxed whitespace-pre-wrap max-h-[380px] overflow-y-auto select-text">
              {output}
            </pre>
          </div>
        </div>

        {/* Mobile Cut-Off Inspector */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-studio-border/60">
            <Smartphone className="w-4 h-4 text-orange-500 dark:text-orange-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
              Mobile &ldquo;See More&rdquo; Cutoff
            </h3>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            Apple Podcasts truncates descriptions after the first ~140 characters. Ensure your high-stakes hook fits here:
          </p>
          <div className="p-3.5 rounded-xl bg-studio-darkest border border-studio-border text-xs text-neutral-900 dark:text-neutral-100 leading-relaxed font-sans">
            <span className="text-orange-600 dark:text-orange-300 font-semibold">{mobileHook}</span>
            <span className="text-neutral-500"> ...more</span>
          </div>
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium block">
            ✓ Primary keyword and listener hook appear before the cut-off.
          </span>
        </div>
      </div>
    </div>
  );
}

