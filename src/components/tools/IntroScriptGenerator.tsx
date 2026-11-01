"use client";

import React, { useState, useMemo } from "react";
import { Headphones, Copy, Check, Download, Clock, Mic, Sparkles } from "lucide-react";

export function IntroScriptGenerator() {
  const [topic, setTopic] = useState("Why 90% of Startups Run Out of Cash in Year Two");
  const [guest, setGuest] = useState("Marcus Sterling (Serial Tech Founder)");
  const [format, setFormat] = useState<"interview" | "solo" | "narrative">("interview");
  const [tone, setTone] = useState<"punchy" | "deep" | "casual">("punchy");
  const [copied, setCopied] = useState(false);

  const script = useMemo(() => {
    const t = topic.trim() || "today's topic";
    const g = guest.trim();

    if (format === "interview") {
      if (tone === "punchy") {
        return `[UPBEAT THEME MUSIC - FADES UNDER AT 0:03]

HOST:
"What if the standard advice everyone gives about ${t} is actually the fastest way to hit a wall?

Today on the show, we are joined by ${g || "one of the top minds in the space"}. We are pulling back the curtain on the metrics that actually matter, the near-fatal mistakes made along the way, and the exact playbook you can execute starting this week.

If you enjoy conversations that cut through the fluff, hit that follow button on Spotify or Apple Podcasts right now.

Let's dive in with ${g || "our guest"}."

[THEME MUSIC SWELLS THEN DIPS INTO INTERVIEW]`;
      } else if (tone === "deep") {
        return `[SUBTLE AMBIENT PAD MUSIC - FADES UNDER]

HOST:
"There are moments in your career where a single decision changes everything. Today, we're exploring ${t}—not from the theoretical perspective, but from the messy, unfiltered reality of someone who lived it.

Our guest today is ${g || "an industry pioneer"}. We explore the turning points, the hard-won philosophy, and the unspoken rules of modern success.

Pour a cup of coffee, settle in, and let's get into the episode."

[MUSIC FADES OUT]`;
      } else {
        return `[CASUAL INTRO MUSIC]

HOST:
"Hey everyone, welcome back to the show! Today is an episode I've been wanting to record for months because we are tackling ${t}.

And joining us today is none other than ${g || "our fantastic guest"}! We got into some wild stories, practical tools, and a few things that might surprise you.

Before we start, do us a quick favor—drop a quick rating or review if you've been finding value in the podcast.

Alright, here is my conversation with ${g || "our guest"}!"`;
      }
    } else if (format === "solo") {
      return `[ENERGETIC THEME MUSIC - FADES UNDER AT 0:04]

HOST:
"Welcome back to another solo episode. Today, we need to have an honest conversation about ${t}.

Over the last few months, I've noticed a dangerous pattern among creators and builders. Everyone is focusing on the surface-level vanity metrics, while completely ignoring the core foundation that actually moves the needle.

In the next 20 minutes, I'm breaking down the 3-part framework I use to solve this. Grab a notebook, turn off distractions, and let's jump straight into it."

[MUSIC STING]`;
    } else {
      return `[SUSPENSEFUL ATMOSPHERIC TONE]

HOST:
"In the early hours of a Tuesday morning, everything seemed normal. Until the numbers came in...

This is the story of ${t}. It's a tale of ambition, unforeseen bottlenecks, and the critical lessons that followed.

Over the next 30 minutes, you'll hear how one pivotal decision changed the entire trajectory.

I'm your host, and this is today's deep dive."

[AUDIO TRANSITION SFX]`;
    }
  }, [topic, guest, format, tone]);

  // Word count and speaking time estimate (140 wpm)
  const wordCount = script.trim().split(/\s+/).length;
  const estimatedSeconds = Math.round((wordCount / 140) * 60);

  const handleCopy = () => {
    navigator.clipboard.writeText(script);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-6">
      {/* Configuration Grid */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Episode Topic / Promise
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Guest Name & Title <span className="text-slate-500 font-normal">(If applicable)</span>
            </label>
            <input
              type="text"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>

        {/* Format & Tone Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-studio-border/60">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-400">Show Format:</label>
            <div className="flex gap-2">
              {[
                { id: "interview", label: "Guest Interview" },
                { id: "solo", label: "Solo Monologue" },
                { id: "narrative", label: "Story / Narrative" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFormat(item.id as any)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    format === item.id
                      ? "bg-orange-500 text-white shadow-sm"
                      : "bg-studio-darkest text-slate-400 hover:text-white border border-studio-border"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-400">Delivery Tone:</label>
            <div className="flex gap-2">
              {[
                { id: "punchy", label: "High-Energy" },
                { id: "deep", label: "Deep & Reflective" },
                { id: "casual", label: "Conversational" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTone(item.id as any)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    tone === item.id
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-studio-darkest text-slate-400 hover:text-white border border-studio-border"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Script Reader View */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-studio-border/60">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Teleprompter & Script View
            </span>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
              <Clock className="w-3 h-3" /> ~{estimatedSeconds}s audio runtime ({wordCount} words)
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-md shadow-orange-500/20 transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied Script!" : "Copy Script"}
          </button>
        </div>

        <div className="p-6 rounded-xl bg-studio-darkest border border-studio-border text-sm sm:text-base font-sans text-slate-100 leading-loose whitespace-pre-wrap">
          {script}
        </div>
      </div>
    </div>
  );
}

