"use client";

import React, { useState } from "react";
import { FileText, Copy, Check, Download, RotateCcw, Sparkles } from "lucide-react";

export function ShowNotesGenerator() {
  const [title, setTitle] = useState("Ep. 42: How to Scale a Bootstrapped SaaS to $50k MRR");
  const [guest, setGuest] = useState("Alex Rivera (Founder of GrowthPulse)");
  const [summary, setSummary] = useState(
    "In this episode, we sit down with Alex Rivera to break down the exact playbooks, cold email frameworks, and pricing experiments that took GrowthPulse from zero to $50,000 in monthly recurring revenue without taking outside capital."
  );
  const [timestamps, setTimestamps] = useState(
    "00:00 - Introduction & Alex's backstory\n04:30 - The first 10 paying customers\n12:15 - Pricing mistakes to avoid in year one\n24:40 - How to build a referral engine\n38:20 - Rapid fire questions & wrap up"
  );
  const [keyTakeaways, setKeyTakeaways] = useState(
    "1. Never launch with a lifetime deal unless you have a clear expansion model.\n2. Cold email works when you personalize the first line and offer immediate value.\n3. Retention is 5x more profitable than acquisition."
  );
  const [resources, setResources] = useState(
    "- GrowthPulse: https://growthpulse.example\n- Alex's Twitter/X: @alexrivera\n- Book Recommendation: The Mom Test by Rob Fitzpatrick"
  );
  const [outputTab, setOutputTab] = useState<"markdown" | "html" | "plain">("markdown");
  const [copied, setCopied] = useState(false);

  // Markdown generator
  const markdownOutput = `# ${title}

${summary}

---

### Featured Guest
**${guest}**

---

### ⏱️ Key Timestamps & Chapters
${timestamps}

---

### 💡 Key Takeaways & Lessons
${keyTakeaways}

---

### 🔗 Resources & Mentions
${resources}

---

**Enjoying the show?**
Leave a 5-star review on Apple Podcasts and Spotify to help other creators discover the podcast!
`;

  // HTML generator
  const htmlOutput = `<h2>${title}</h2>
<p>${summary}</p>
<hr />
<h3>Featured Guest</h3>
<p><strong>${guest}</strong></p>
<hr />
<h3>⏱️ Key Timestamps & Chapters</h3>
<pre>${timestamps}</pre>
<hr />
<h3>💡 Key Takeaways & Lessons</h3>
<p>${keyTakeaways.replace(/\n/g, "<br />")}</p>
<hr />
<h3>🔗 Resources & Mentions</h3>
<p>${resources.replace(/\n/g, "<br />")}</p>
<hr />
<p><em>Enjoying the show? Leave a 5-star review on Apple Podcasts and Spotify!</em></p>`;

  // Plain Text generator
  const plainTextOutput = `${title}

${summary}

GUEST:
${guest}

TIMESTAMPS:
${timestamps}

KEY TAKEAWAYS:
${keyTakeaways}

RESOURCES MENTIONED:
${resources}

Subscribe and leave a review on Apple Podcasts and Spotify!`;

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
    setTitle("Ep. 78: The Psychology of High-Retention Storytelling");
    setGuest("Elena Vance (Award-winning Audio Producer)");
    setSummary("Elena reveals the secret audio narrative structures that keep listeners hooked across 45-minute episodes.");
    setTimestamps("00:00 - The 30-second cold open rule\n05:20 - Character arcs in nonfiction audio\n18:45 - Sound design tips on a budget\n35:10 - Elena's final advice");
    setKeyTakeaways("1. Cut your intro by 50%.\n2. Introduce tension before resolving backstory.\n3. Ambient audio creates an emotional theatre in the mind.");
    setResources("- Elena's Audio Course: https://example.com\n- Free Sound Archive: freesound.org");
  };

  return (
    <div className="w-full space-y-6">
      {/* Input Form & Preview Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Input Fields */}
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-studio-border/60">
            <h2 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-orange-400" />
              Episode Details
            </h2>
            <button
              onClick={handleLoadSample}
              className="text-xs text-orange-400 hover:text-orange-300 font-medium inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Load Sample
            </button>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">Episode Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">Featured Guest(s)</label>
            <input
              type="text"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">Episode Summary / Hook</label>
            <textarea
              rows={3}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70 resize-y"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">Timestamps & Chapters</label>
            <textarea
              rows={4}
              value={timestamps}
              onChange={(e) => setTimestamps(e.target.value)}
              placeholder="00:00 - Intro&#10;05:30 - Topic discussion"
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-white font-mono text-xs focus:outline-none focus:border-orange-500/70 resize-y"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">Key Takeaways & Lessons</label>
            <textarea
              rows={3}
              value={keyTakeaways}
              onChange={(e) => setKeyTakeaways(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70 resize-y"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">Links & Resources Mentioned</label>
            <textarea
              rows={3}
              value={resources}
              onChange={(e) => setResources(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-studio-darkest border border-studio-border text-white text-xs focus:outline-none focus:border-orange-500/70 resize-y"
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
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium uppercase tracking-wider transition-all ${
                      outputTab === tab
                        ? "bg-orange-500 text-white shadow-sm"
                        : "bg-studio-elevated text-slate-400 hover:text-white border border-studio-border"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-md shadow-orange-500/20 transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy Show Notes"}
                </button>
                <button
                  onClick={handleDownload}
                  className="p-1.5 rounded-lg bg-studio-elevated hover:bg-studio-border text-slate-300 hover:text-white border border-studio-border transition-colors"
                  title="Download File"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Output Code Area */}
            <div className="relative rounded-xl bg-studio-darkest border border-studio-border p-4 font-mono text-xs text-slate-200 overflow-x-auto max-h-[520px] overflow-y-auto leading-relaxed whitespace-pre-wrap">
              {activeOutput}
            </div>
          </div>

          <div className="text-[11px] text-slate-400 pt-3 border-t border-studio-border/60">
            Paste directly into Buzzsprout, Libsyn, Spotify for Podcasters, Podbean, or your website.
          </div>
        </div>
      </div>
    </div>
  );
}
