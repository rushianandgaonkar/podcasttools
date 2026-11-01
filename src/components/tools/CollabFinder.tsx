"use client";

import React, { useState, useMemo } from "react";
import { Users, Copy, Check, Download, Mail, Sparkles } from "lucide-react";

export function CollabFinder() {
  const [targetShow, setTargetShow] = useState("The Indie Hacker Podcast");
  const [targetHost, setTargetHost] = useState("Courtland");
  const [myShow, setMyShow] = useState("Bootstrapped Signals");
  const [myExpertise, setMyExpertise] = useState(
    "How we scaled an AI developer tool to $30k MRR with zero marketing spend using GitHub SEO"
  );
  const [collabType, setCollabType] = useState<"pitch_self" | "invite_guest" | "feed_drop">("pitch_self");
  const [copied, setCopied] = useState(false);

  const pitch = useMemo(() => {
    const host = targetHost.trim() || "there";
    const show = targetShow.trim() || "your show";
    const mine = myShow.trim() || "my podcast";
    const exp = myExpertise.trim();

    if (collabType === "pitch_self") {
      return {
        subject: `Guest Idea for ${show}: ${exp.slice(0, 45)}...`,
        body: `Hi ${host},

Big fan of ${show}—really loved your recent episode on building sustainable software businesses.

I'm reaching out because I think your listeners would get massive tactical value from a breakdown of: ${exp}.

A few specific, counter-intuitive lessons I can share with zero fluff:
• Why conventional wisdom in this space failed us for 9 months
• The 3 exact levers that moved conversion rates by 40%
• What I would do differently if starting over from scratch today

No promotional pitch or product selling—just a raw, transparent deep dive into the numbers and lessons.

If this sounds like a fit for an upcoming slot, let me know and I'll send over a 2-minute audio teaser and outline.

Thanks for all the great episodes!

Best,
Host of ${mine}`,
      };
    } else if (collabType === "invite_guest") {
      return {
        subject: `Interview Invitation for ${host} on ${mine}`,
        body: `Hi ${host},

I host ${mine}, a podcast dedicated to deep, tactical conversations for creators and founders.

I've been following your work on ${show} and would love to invite you for a 35-minute conversation on our show.

Specifically, I'd love to unpack:
1. Your approach to ${exp}
2. The operational frameworks that most people overlook
3. Your predictions for where the industry is heading in 2026

We handle all audio editing and preparation, and we provide clean video clips and audiograms for your team to use however you like.

Would you be open to a recording session next month? Happy to work around your calendar.

Warm regards,
Host of ${mine}`,
      };
    } else {
      return {
        subject: `Audience Swap / Cross-Promo Proposal: ${mine} & ${show}`,
        body: `Hi ${host},

Hope you're having a great week! I host ${mine}, and our shows share a massive overlap in audience interest around ${exp}.

I wanted to propose a simple, high-value cross-promotion between our feeds:
• A mutual 30-second host-read shoutout exchange, OR
• A curated holiday feed drop where we share each other's best evergreen episode.

It's a completely free way for both of us to introduce our shows to thousands of engaged, high-retention listeners who already love audio in this genre.

Let me know if you're open to exploring this—happy to share our listener demographics and download analytics!

Cheers,
Host of ${mine}`,
      };
    }
  }, [targetShow, targetHost, myShow, myExpertise, collabType]);

  const fullEmail = `Subject: ${pitch.subject}\n\n${pitch.body}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-6">
      {/* Configuration Grid */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        {/* Collab Type */}
        <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-studio-border/60">
          <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mr-2">Outreach Goal:</span>
          {[
            { id: "pitch_self", label: "Pitch Myself as Guest" },
            { id: "invite_guest", label: "Invite Guest to My Show" },
            { id: "feed_drop", label: "Promo / Feed Swap" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCollabType(item.id as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                collabType === item.id
                  ? "bg-orange-500 text-white shadow-sm"
                  : "bg-studio-darkest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Target Podcast Show
            </label>
            <input
              type="text"
              value={targetShow}
              onChange={(e) => setTargetShow(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Target Host Name
            </label>
            <input
              type="text"
              value={targetHost}
              onChange={(e) => setTargetHost(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Your Podcast Name
            </label>
            <input
              type="text"
              value={myShow}
              onChange={(e) => setMyShow(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Specific Angle / Value Proposition
            </label>
            <input
              type="text"
              value={myExpertise}
              onChange={(e) => setMyExpertise(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>
      </div>

      {/* Generated Pitch Email Box */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-studio-border/60 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Personalized Outreach Pitch
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied Pitch!" : "Copy Pitch Email"}
            </button>
          </div>

          <div className="space-y-3 font-sans text-xs text-neutral-900 dark:text-neutral-100">
            <div className="p-3 rounded-lg bg-studio-darkest border border-studio-border">
              <span className="text-neutral-600 dark:text-neutral-400 font-semibold">Subject: </span>
              <span className="text-neutral-900 dark:text-white font-medium">{pitch.subject}</span>
            </div>

            <pre className="p-4 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-neutral-100 leading-relaxed whitespace-pre-wrap max-h-[380px] overflow-y-auto font-sans select-text">
              {pitch.body}
            </pre>
          </div>
        </div>

        <div className="text-[11px] text-neutral-500 pt-2 border-t border-studio-border/60">
          Tip: Always customize the first sentence to mention a specific quote or idea from their recent episode to prove you are an actual listener.
        </div>
      </div>
    </div>
  );
}

