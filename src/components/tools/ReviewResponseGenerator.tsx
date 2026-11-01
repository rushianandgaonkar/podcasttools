"use client";

import React, { useState, useMemo } from "react";
import { MessageSquare, Copy, Check, Star, Heart, Sparkles } from "lucide-react";

export function ReviewResponseGenerator() {
  const [reviewer, setReviewer] = useState("AudioFanatic_99");
  const [snippet, setSnippet] = useState("Episode 32 changed how I think about hiring. Best 40 minutes of my week!");
  const [sentiment, setSentiment] = useState<"praise" | "constructive" | "critical">("praise");
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  const responses = useMemo(() => {
    const name = reviewer.trim() || "one of our listeners";
    const quote = snippet.trim();

    if (sentiment === "praise") {
      return {
        onAir: `“Before we get into today's conversation, I want to give a huge on-air shoutout to ${name}, who left a 5-star review saying: '${quote}'. ${name}, thank you so much for listening and supporting the show. If you're listening right now and enjoy these episodes, taking 30 seconds to drop a review on Apple Podcasts or Spotify means the world to our team.”`,
        social: `Huge thanks to @${name} for this incredible review on Apple Podcasts! 🙏 When you build in public, seeing that '${quote}' makes all the late-night editing sessions 100% worth it. Thank you for listening! 🎙️`,
        email: `Hi ${name},\n\nJust wanted to personally reach out and say thank you so much for leaving that generous review for the podcast ('${quote}'). Hearing that our episodes resonate with you keeps us motivated to bring on the best possible guests. Really appreciate your support!\n\nBest,\nYour Host`,
      };
    } else if (sentiment === "constructive") {
      return {
        onAir: `“I also want to acknowledge some thoughtful feedback from ${name}, who noted: '${quote}'. We take listener suggestions seriously, and you'll notice in today's episode that we've adjusted our pacing and audio balance to address exactly that. Thank you ${name} for keeping us accountable!”`,
        social: `Really appreciate this constructive feedback from @${name}: '${quote}'. You're completely right, and we've already adjusted our production workflow for upcoming episodes. Thanks for helping us improve the show!`,
        email: `Hi ${name},\n\nThank you for taking the time to share your honest feedback about the show ('${quote}'). We genuinely appreciate constructive notes from dedicated listeners, and we are already implementing changes in our next recording session.\n\nWarmly,\nYour Host`,
      };
    } else {
      return {
        onAir: `“We always want to be transparent with our community. We recently received a critical note from ${name} about '${quote}'. We hear you, and while we might not get every episode right for every listener, we are dedicated to learning and leveling up our craft every single week.”`,
        social: `Thanks for sharing your thoughts @${name}. We're sorry this episode didn't hit the mark for you, but we appreciate the honesty and will take your points into our editorial meetings for future episodes.`,
        email: `Hi ${name},\n\nThanks for your honest feedback regarding '${quote}'. I'm sorry the episode missed the mark for you. We take all feedback seriously as we work to make the podcast better. Hope you'll give future episodes another listen!\n\nSincerely,\nYour Host`,
      };
    }
  }, [reviewer, snippet, sentiment]);

  const handleCopy = (text: string, tab: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(tab);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <div className="w-full space-y-6">
      {/* Control Panel */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Reviewer Name / Handle
            </label>
            <input
              type="text"
              value={reviewer}
              onChange={(e) => setReviewer(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Review Sentiment
            </label>
            <div className="flex gap-2">
              {[
                { id: "praise", label: "5-Star Praise" },
                { id: "constructive", label: "Constructive" },
                { id: "critical", label: "Critical" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSentiment(item.id as any)}
                  className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
                    sentiment === item.id
                      ? "bg-orange-500 text-white shadow-sm"
                      : "bg-studio-darkest text-slate-400 hover:text-white border border-studio-border"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
            What Did the Reviewer Say?
          </label>
          <textarea
            rows={2}
            value={snippet}
            onChange={(e) => setSnippet(e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70 resize-y"
          />
        </div>
      </div>

      {/* Generated Response Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* On Air Shoutout */}
        <div className="p-5 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-studio-border/60 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                🎙️ On-Air Shoutout Script
              </span>
              <button
                onClick={() => handleCopy(responses.onAir, "onair")}
                className="text-xs text-orange-400 hover:text-orange-300 font-semibold"
              >
                {copiedTab === "onair" ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {responses.onAir}
            </p>
          </div>
          <span className="text-[11px] text-slate-500">Read on microphone during intro or outro</span>
        </div>

        {/* Social Media Reply */}
        <div className="p-5 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-studio-border/60 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                💬 Social Media Reply
              </span>
              <button
                onClick={() => handleCopy(responses.social, "social")}
                className="text-xs text-orange-400 hover:text-orange-300 font-semibold"
              >
                {copiedTab === "social" ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {responses.social}
            </p>
          </div>
          <span className="text-[11px] text-slate-500">For Twitter, Threads, or Instagram</span>
        </div>

        {/* Host Email/DM */}
        <div className="p-5 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-studio-border/60 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                ✉️ Host Direct Message
              </span>
              <button
                onClick={() => handleCopy(responses.email, "email")}
                className="text-xs text-orange-400 hover:text-orange-300 font-semibold"
              >
                {copiedTab === "email" ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans whitespace-pre-wrap">
              {responses.email}
            </p>
          </div>
          <span className="text-[11px] text-slate-500">Private thank-you note or email</span>
        </div>
      </div>
    </div>
  );
}

