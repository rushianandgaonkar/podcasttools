/**
 * Unique, per-tool landing-page copy. Replaces the generic three-step block
 * that was identical on every tool page (thin/duplicate content), and gives
 * each tool its own search-focused <title> and meta description.
 */
export interface ToolContent {
  /** Full <title>; keep at or under ~60 characters including "| Pod Studio". */
  metaTitle: string;
  /** Meta description; ~140–160 characters (CJK: ~70–90). */
  metaDescription: string;
  /** Two short paragraphs: what the tool does and who it is for. */
  overview: string[];
  /** Four tool-specific steps. */
  steps: Array<{ title: string; text: string }>;
  /** Three practical tips. */
  tips: string[];
}

export type ToolContentRecord = Record<string, ToolContent>;
