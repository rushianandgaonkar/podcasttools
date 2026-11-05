import type { SupportedLocale } from "../languages";
import type { ToolContent, ToolContentRecord } from "./types";
import { enToolContent } from "./en";
import { esToolContent } from "./es";
import { jaToolContent } from "./ja";
import { frToolContent } from "./fr";
import { deToolContent } from "./de";
import { ptToolContent } from "./pt";
import { koToolContent } from "./ko";
import { itToolContent } from "./it";

export * from "./types";

export const toolContentByLocale: Record<SupportedLocale, ToolContentRecord> = {
  en: enToolContent,
  es: esToolContent,
  ja: jaToolContent,
  fr: frToolContent,
  de: deToolContent,
  pt: ptToolContent,
  ko: koToolContent,
  it: itToolContent,
};

/** Localized landing-page copy for a tool, falling back to English. */
export function getToolContent(slug: string, lang: SupportedLocale): ToolContent | undefined {
  return toolContentByLocale[lang]?.[slug] ?? toolContentByLocale.en[slug];
}
