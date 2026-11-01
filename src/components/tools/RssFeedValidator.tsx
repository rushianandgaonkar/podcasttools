"use client";

import React, { useState } from "react";
import { Rss, CheckCircle2, AlertTriangle, XCircle, RotateCcw, FileCode, ExternalLink } from "lucide-react";

interface ValidationItem {
  tag: string;
  label: string;
  status: "pass" | "warn" | "fail";
  message: string;
}

export function RssFeedValidator() {
  const [feedXml, setFeedXml] = useState<string>("");
  const [results, setResults] = useState<{
    showTitle?: string;
    description?: string;
    episodeCount: number;
    items: ValidationItem[];
    episodes: Array<{ title: string; date: string; audioUrl: string }>;
  } | null>(null);

  const sampleValidFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Deep Signal Podcast</title>
    <link>https://deepsignal.example</link>
    <description>Weekly deep dives into artificial intelligence, startups, and creative technology.</description>
    <language>en-us</language>
    <itunes:author>Sarah Chen</itunes:author>
    <itunes:image href="https://deepsignal.example/cover-3000.jpg" />
    <itunes:category text="Technology">
      <itunes:category text="Tech News" />
    </itunes:category>
    <itunes:explicit>clean</itunes:explicit>
    <item>
      <title>Episode 1: The Frontier of Local AI Models</title>
      <description>We explore how on-device AI is reshaping software development in 2026.</description>
      <pubDate>Sun, 25 Oct 2026 14:00:00 GMT</pubDate>
      <enclosure url="https://deepsignal.example/ep1.mp3" length="45210000" type="audio/mpeg" />
      <itunes:duration>42:15</itunes:duration>
      <itunes:explicit>clean</itunes:explicit>
    </item>
  </channel>
</rss>`;

  const handleValidate = () => {
    if (!feedXml.trim()) return;

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(feedXml, "application/xml");

      const parserError = doc.querySelector("parsererror");
      if (parserError) {
        setResults({
          episodeCount: 0,
          items: [
            {
              tag: "XML Syntax",
              label: "XML Parsing Error",
              status: "fail",
              message: "Invalid XML formatting. Please ensure all tags are closed properly.",
            },
          ],
          episodes: [],
        });
        return;
      }

      const channel = doc.querySelector("channel");
      if (!channel) {
        setResults({
          episodeCount: 0,
          items: [
            {
              tag: "channel",
              label: "Missing Channel Element",
              status: "fail",
              message: "Podcast RSS feeds must contain a parent <channel> tag inside <rss>.",
            },
          ],
          episodes: [],
        });
        return;
      }

      const checkList: ValidationItem[] = [];

      // 1. Title
      const titleEl = channel.querySelector("title");
      const titleText = titleEl?.textContent?.trim() || "";
      if (titleText) {
        checkList.push({
          tag: "<title>",
          label: "Show Title",
          status: "pass",
          message: `Found: "${titleText}"`,
        });
      } else {
        checkList.push({
          tag: "<title>",
          label: "Show Title",
          status: "fail",
          message: "Missing mandatory <title> tag.",
        });
      }

      // 2. Description
      const descEl = channel.querySelector("description");
      const descText = descEl?.textContent?.trim() || "";
      if (descText) {
        checkList.push({
          tag: "<description>",
          label: "Show Description",
          status: "pass",
          message: `Length: ${descText.length} characters.`,
        });
      } else {
        checkList.push({
          tag: "<description>",
          label: "Show Description",
          status: "fail",
          message: "Missing mandatory <description> tag.",
        });
      }

      // 3. iTunes Image
      const imageEl = channel.getElementsByTagName("itunes:image")[0];
      const imageHref = imageEl?.getAttribute("href") || "";
      if (imageHref) {
        const isHttps = imageHref.startsWith("https://");
        checkList.push({
          tag: "<itunes:image>",
          label: "Podcast Artwork",
          status: isHttps ? "pass" : "warn",
          message: isHttps
            ? `Artwork URL configured via HTTPS: ${imageHref.slice(0, 40)}...`
            : "Artwork URL should use secure HTTPS to avoid rejection by Apple Podcasts.",
        });
      } else {
        checkList.push({
          tag: "<itunes:image>",
          label: "Podcast Artwork",
          status: "fail",
          message: "Missing <itunes:image href='...'>. Apple Podcasts will reject this feed.",
        });
      }

      // 4. Category
      const catEl = channel.getElementsByTagName("itunes:category")[0];
      const catText = catEl?.getAttribute("text") || "";
      if (catText) {
        checkList.push({
          tag: "<itunes:category>",
          label: "iTunes Category",
          status: "pass",
          message: `Primary category: "${catText}"`,
        });
      } else {
        checkList.push({
          tag: "<itunes:category>",
          label: "iTunes Category",
          status: "fail",
          message: "Missing <itunes:category text='...'>.",
        });
      }

      // 5. Explicit tag
      const explicitEl = channel.getElementsByTagName("itunes:explicit")[0];
      const explicitText = explicitEl?.textContent?.toLowerCase().trim();
      if (explicitText === "clean" || explicitText === "yes" || explicitText === "no") {
        checkList.push({
          tag: "<itunes:explicit>",
          label: "Parental Advisory / Explicit Tag",
          status: "pass",
          message: `Setting: "${explicitText}"`,
        });
      } else {
        checkList.push({
          tag: "<itunes:explicit>",
          label: "Parental Advisory / Explicit Tag",
          status: "warn",
          message: "Missing explicit rating tag. Recommended values: 'clean' or 'yes'.",
        });
      }

      // 6. Language tag
      const langEl = channel.querySelector("language");
      if (langEl?.textContent?.trim()) {
        checkList.push({
          tag: "<language>",
          label: "Language Tag",
          status: "pass",
          message: `Language: ${langEl.textContent.trim()}`,
        });
      } else {
        checkList.push({
          tag: "<language>",
          label: "Language Tag",
          status: "warn",
          message: "Missing <language> (e.g. 'en-us').",
        });
      }

      // Episode Items
      const items = channel.querySelectorAll("item");
      const epList: Array<{ title: string; date: string; audioUrl: string }> = [];

      items.forEach((item) => {
        const epTitle = item.querySelector("title")?.textContent || "Untitled Episode";
        const pubDate = item.querySelector("pubDate")?.textContent || "N/A";
        const enclosure = item.querySelector("enclosure");
        const audioUrl = enclosure?.getAttribute("url") || "";

        epList.push({
          title: epTitle,
          date: pubDate,
          audioUrl,
        });
      });

      if (items.length > 0) {
        checkList.push({
          tag: "<item> Enclosures",
          label: "Audio Episodes",
          status: "pass",
          message: `Found ${items.length} episode(s) with audio enclosure links.`,
        });
      } else {
        checkList.push({
          tag: "<item> Enclosures",
          label: "Audio Episodes",
          status: "warn",
          message: "No <item> elements found. You can submit a feed with a trailer episode to Apple.",
        });
      }

      setResults({
        showTitle: titleText,
        description: descText,
        episodeCount: items.length,
        items: checkList,
        episodes: epList,
      });
    } catch (err: any) {
      setResults({
        episodeCount: 0,
        items: [
          {
            tag: "Error",
            label: "Validation Exception",
            status: "fail",
            message: err?.message || "Failed to parse feed.",
          },
        ],
        episodes: [],
      });
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Input Section */}
      <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-studio-border/60">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <Rss className="w-4 h-4 text-orange-400" />
            Paste Podcast RSS XML
          </h2>
          <button
            onClick={() => {
              setFeedXml(sampleValidFeed);
            }}
            className="text-xs text-orange-400 hover:text-orange-300 font-medium inline-flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Load Sample Valid Feed
          </button>
        </div>

        <div className="space-y-1.5">
          <textarea
            rows={8}
            value={feedXml}
            onChange={(e) => setFeedXml(e.target.value)}
            placeholder="Paste your podcast RSS feed XML here (starts with <?xml version='1.0' ...> <rss>)..."
            className="w-full px-4 py-3 rounded-xl bg-studio-darkest border border-studio-border text-neutral-900 dark:text-white font-mono text-xs focus:outline-none focus:border-orange-500/70"
          />
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-[11px] text-neutral-500">
            Validated 100% in your browser using standard DOMParser.
          </span>
          <button
            onClick={handleValidate}
            className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md shadow-orange-500/20 transition-all cursor-pointer"
          >
            Run RSS Audit
          </button>
        </div>
      </div>

      {/* Audit Report */}
      {results && (
        <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-studio-border/60">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-slate-400 block">
                Validation Result
              </span>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                {results.showTitle || "Podcast RSS Feed Audit"}
              </h3>
            </div>
            <div className="text-xs text-neutral-600 dark:text-slate-400">
              <span className="font-semibold text-neutral-900 dark:text-white">{results.episodeCount}</span> episode(s) detected
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-2.5">
            {results.items.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-studio-darkest border border-studio-border/80 flex items-start justify-between gap-3"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-neutral-900 dark:text-white">{item.label}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-studio-card text-neutral-600 dark:text-slate-400 border border-studio-border">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-slate-400">{item.message}</p>
                </div>

                <div className="flex-shrink-0">
                  {item.status === "pass" && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Pass
                    </span>
                  )}
                  {item.status === "warn" && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                      <AlertTriangle className="w-3.5 h-3.5" /> Warning
                    </span>
                  )}
                  {item.status === "fail" && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-600 dark:text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                      <XCircle className="w-3.5 h-3.5" /> Error
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Episode List Preview */}
          {results.episodes.length > 0 && (
            <div className="space-y-3 pt-3 border-t border-studio-border/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                Recent Episodes in Feed
              </h4>
              <div className="space-y-2">
                {results.episodes.slice(0, 5).map((ep, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-studio-darkest/70 border border-studio-border/60 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <span className="font-semibold text-neutral-900 dark:text-slate-200 line-clamp-1">{ep.title}</span>
                    <span className="text-[11px] text-neutral-500 font-mono whitespace-nowrap">
                      {ep.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

