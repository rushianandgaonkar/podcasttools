import type { LocalizedGuideArticle } from "../guidesData";

export interface GuideFaq {
  question: string;
  answer: string;
}

/**
 * Additional long-form content merged into each guide by getLocalizedGuide().
 * Expands thin guides (~200 words) into complete articles and corrects
 * claims the original copy could not back up (e.g. "12 formulas", "70%").
 */
export interface GuideExtra {
  /** Short SEO <title> (≤ ~60 chars incl. "| Pod Studio"); the H1 keeps the full headline. */
  metaTitle?: string;
  /** Replaces the guide description (meta description + intro) when set. */
  description?: string;
  /** Replaces the heading of the first original section when set. */
  firstHeading?: string;
  /** Realistic read time in minutes; the number is substituted into the localized label. */
  readMinutes: number;
  /** Sections appended after the original content. */
  sections: LocalizedGuideArticle["sections"];
  /** FAQ block rendered at the end of the guide (and emitted as FAQPage schema). */
  faqs: GuideFaq[];
}

export type GuideExtrasRecord = Record<string, GuideExtra>;
