"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
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
    <div className="w-full py-12 sm:py-20 bg-[#0A0A16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" /> Support & Inquiries
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact the Pod Studio Team
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Have a tool suggestion, feedback on our formulas, or want to report a platform spec update? We would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Direct Email Card */}
          <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-white">Direct Email</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              For general support, partnership inquiries, or tool bug reports:
            </p>
            <a
              href={`mailto:${siteConfig.creator.contactEmail}`}
              className="text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors block break-all font-mono"
            >
              {siteConfig.creator.contactEmail}
            </a>
            <div className="pt-2 border-t border-studio-border/60 text-[11px] text-slate-500">
              Response time: typically within 24-48 business hours.
            </div>
          </div>

          {/* Contact Message Composer */}
          <div className="md:col-span-2 p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
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
        </div>
      </div>
    </div>
  );
}
