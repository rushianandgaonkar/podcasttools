"use client";

import React, { useState } from "react";
import { MessageSquare, Send, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";
import { useTranslations } from "@/i18n/utils";

interface ContactFormProps {
  lang?: SupportedLocale;
}

export function ContactForm({ lang = defaultLocale }: ContactFormProps) {
  const t = useTranslations(lang);
  const f = t.contactForm;

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
    <div className="p-5 sm:p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] space-y-4">
      <h2 className="text-sm font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
        <MessageSquare className="w-4 h-4 text-[#0070f3]" />
        {f.heading}
      </h2>

      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-400">{f.nameLabel}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={f.namePlaceholder}
              className="w-full px-3 py-1.5 rounded-md bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-400">{f.emailLabel}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={f.emailPlaceholder}
              className="w-full px-3 py-1.5 rounded-md bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-400">{f.subjectLabel}</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-3 py-1.5 rounded-md bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-400">{f.messageLabel}</label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={f.messagePlaceholder}
            className="w-full px-3 py-2 rounded-md bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors resize-y"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-[11px] text-neutral-500 flex items-center gap-1.5 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
            {f.zeroLogNotice}
          </div>

          <a
            href={mailtoLink}
            className="px-4 py-2 rounded-md bg-[#171717] dark:bg-white text-white dark:text-black font-medium text-xs inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity"
          >
            <Send className="w-3 h-3" /> {f.sendButton}
          </a>
        </div>
      </div>
    </div>
  );
}
