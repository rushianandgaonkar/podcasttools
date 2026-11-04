import type { SupportedLocale } from "../languages";
import type { FAQItem, ToolFaqsRecord } from "./types";
import { enFaqs } from "./en";
import { esFaqs } from "./es";
import { jaFaqs } from "./ja";
import { frFaqs } from "./fr";
import { deFaqs } from "./de";
import { ptFaqs } from "./pt";
import { koFaqs } from "./ko";
import { itFaqs } from "./it";

export * from "./types";

export const toolFaqsByLocale: Record<SupportedLocale, ToolFaqsRecord> = {
  en: enFaqs,
  es: esFaqs,
  ja: jaFaqs,
  fr: frFaqs,
  de: deFaqs,
  pt: ptFaqs,
  ko: koFaqs,
  it: itFaqs,
};

export const EXPECTED_TOOL_SLUGS = [
  "episode-title-generator",
  "show-notes-generator",
  "podcast-name-generator",
  "episode-outline-builder",
  "guest-question-generator",
  "monetization-calculator",
  "cover-art-preview",
  "rss-feed-validator",
  "episode-timestamp-generator",
  "intro-script-generator",
  "audience-growth-estimator",
  "description-generator",
  "category-finder",
  "hook-generator",
  "transcript-formatter",
  "trailer-script-builder",
  "review-response-generator",
  "collab-finder",
] as const;

/**
 * Retrieves the 5 intent-aligned FAQs for a specific tool and locale.
 * Rejects missing or invalid slugs with an explicit error.
 */
export function getLocalizedToolFaqs(slug: string, lang: SupportedLocale = "en"): FAQItem[] {
  const localeFaqs = toolFaqsByLocale[lang] || toolFaqsByLocale.en;
  const items = localeFaqs[slug] || toolFaqsByLocale.en[slug];

  if (!items || items.length === 0) {
    throw new Error(`[getLocalizedToolFaqs] Missing FAQs for tool slug "${slug}" in locale "${lang}"`);
  }

  return items;
}

