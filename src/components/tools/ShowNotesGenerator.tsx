"use client";

import React, { useState } from "react";
import { FileText, Copy, Check, Download, RotateCcw } from "lucide-react";
import { defaultLocale, type SupportedLocale } from "@/i18n/languages";
import { showNotesUi } from "@/i18n/showNotesUi";

export function ShowNotesGenerator({ lang = defaultLocale }: { lang?: SupportedLocale }) {
  const ui = showNotesUi[lang] || showNotesUi.en;
  const s = ui.sample;
  const [title, setTitle] = useState(s.title);
  const [guest, setGuest] = useState(s.guest);
  const [summary, setSummary] = useState(s.summary);
  const [timestamps, setTimestamps] = useState(s.timestamps);
  const [keyTakeaways, setKeyTakeaways] = useState(s.takeaways);
  const [resources, setResources] = useState(s.resources);
  const [outputTab, setOutputTab] = useState<"markdown" | "html" | "plain">("markdown");
  const [copied, setCopied] = useState(false);

  // Markdown generator
  const markdownOutput = `# ${title}

${summary}

---

### ${ui.outGuest}
**${guest}**

---

### ⏱️ ${ui.outChapters}
${timestamps}

---

### 💡 ${ui.outTakeaways}
${keyTakeaways}

---

### 🔗 ${ui.outResources}
${resources}

---

${ui.outCta}
`;

  // HTML generator
  const htmlOutput = `<h2>${title}</h2>
<p>${summary}</p>
<hr />
<h3>${ui.outGuest}</h3>
<p><strong>${guest}</strong></p>
<hr />
<h3>⏱️ ${ui.outChapters}</h3>
<pre>${timestamps}</pre>
<hr />
<h3>💡 ${ui.outTakeaways}</h3>
<p>${keyTakeaways.replace(/\n/g, "<br />")}</p>
<hr />
<h3>🔗 ${ui.outResources}</h3>
<p>${resources.replace(/\n/g, "<br />")}</p>
<hr />
<p><em>${ui.outCtaShort}</em></p>`;

  // Plain Text generator
  const plainTextOutput = `${title}

${summary}

${ui.outPlainGuest}:
${guest}

${ui.outPlainChapters}:
${timestamps}

${ui.outPlainTakeaways}:
${keyTakeaways}

${ui.outPlainResources}:
${resources}

${ui.outPlainCta}`;

  const activeOutput =
    outputTab === "markdown"
      ? markdownOutput
      : outputTab === "html"
      ? htmlOutput
      : plainTextOutput;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const ext = outputTab === "markdown" ? "md" : outputTab === "html" ? "html" : "txt";
    const blob = new Blob([activeOutput], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `show-notes.${ext}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleLoadSample = () => {
    const x = ui.sample2;
    setTitle(x.title);
    setGuest(x.guest);
    setSummary(x.summary);
    setTimestamps(x.timestamps);
    setKeyTakeaways(x.takeaways);
    setResources(x.resources);
  };

  return (
    <div className="w-full space-y-6">
      {/* Input Form & Preview Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Input Fields */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-studio-border/60">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-orange-500 dark:text-orange-400" />
              {ui.details}
            </h2>
            <button
              onClick={handleLoadSample}
              className="text-xs text-orange-600 dark:text-orange-400 hover:text-orange-500 font-medium inline-flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> {ui.loadSample}
            </button>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">{ui.titleLabel}</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">{ui.guestLabel}</label>
            <input
              type="text"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">{ui.summaryLabel}</label>
            <textarea
              rows={3}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70 resize-y"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">{ui.timestampsLabel}</label>
            <textarea
              rows={4}
              value={timestamps}
              onChange={(e) => setTimestamps(e.target.value)}
              placeholder={ui.timestampsPlaceholder}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white font-mono text-xs focus:outline-none focus:border-orange-500/70 resize-y"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">{ui.takeawaysLabel}</label>
            <textarea
              rows={3}
              value={keyTakeaways}
              onChange={(e) => setKeyTakeaways(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70 resize-y"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">{ui.resourcesLabel}</label>
            <textarea
              rows={3}
              value={resources}
              onChange={(e) => setResources(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-orange-500/70 resize-y"
            />
          </div>
        </div>

        {/* Right: Formatted Output */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border flex flex-col justify-between space-y-4">
          <div>
            {/* Output Format Switcher */}
            <div className="flex items-center justify-between pb-3 border-b border-studio-border/60 mb-4">
              <div className="flex items-center gap-1.5">
                {(["markdown", "html", "plain"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setOutputTab(tab)}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium uppercase tracking-wider transition-all cursor-pointer ${
                      outputTab === tab
                        ? "bg-orange-500 text-white shadow-sm"
                        : "bg-studio-elevated text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-studio-border"
                    }`}
                  >
                    {tab === "plain" ? ui.plain : tab}
                  </button>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? ui.copied : ui.copy}
                </button>
                <button
                  onClick={handleDownload}
                  className="p-1.5 rounded-lg bg-studio-elevated hover:bg-studio-border text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-studio-border transition-colors cursor-pointer"
                  title={ui.download}
                  aria-label={ui.download}
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Output Code Area */}
            <div className="relative rounded-xl bg-studio-darkest border border-studio-border p-4 font-mono text-xs text-neutral-900 dark:text-slate-200 overflow-x-auto max-h-[520px] overflow-y-auto leading-relaxed whitespace-pre-wrap select-text">
              {activeOutput}
            </div>
          </div>

          <div className="text-[11px] text-neutral-500 pt-3 border-t border-studio-border/60">
            {ui.footer}
          </div>
        </div>
      </div>
    </div>
  );
}

