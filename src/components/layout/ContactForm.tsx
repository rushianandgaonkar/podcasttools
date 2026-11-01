"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Send, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Podcast Creator Toolkit Inquiry");
  const [message, setMessage] = useState("");

  const mailtoLink = `mailto:${siteConfig.creator.contactEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    `From: ${name} (${email})\n\nMessage:\n${message}`
  )}`;

  return (
    <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
      <h2 className="text-base font-bold text-white flex items-center gap-2">
        <MessageSquare className="w-4 h-4 text-orange-400" />
        Compose Message (Opens in your email client)
      </h2>

      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-300">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex"
              className="w-full px-3 py-2 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-300">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@example.com"
              className="w-full px-3 py-2 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-300">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-300">Message</label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your thoughts, suggestions, or questions..."
            className="w-full px-3 py-2 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70 resize-y"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            Honest communication: Opens your native email client to send securely.
          </div>

          <a
            href={mailtoLink}
            className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs inline-flex items-center gap-2 shadow-md shadow-orange-500/20 transition-all self-end sm:self-auto"
          >
            <Send className="w-3.5 h-3.5" /> Send via Email
          </a>
        </div>
      </div>
    </div>
  );
}
