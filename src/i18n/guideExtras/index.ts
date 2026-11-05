import type { SupportedLocale } from "../languages";
import type { GuideExtra, GuideExtrasRecord } from "./types";
import { enGuideExtras } from "./en";
import { esGuideExtras } from "./es";
import { jaGuideExtras } from "./ja";
import { frGuideExtras } from "./fr";
import { deGuideExtras } from "./de";
import { ptGuideExtras } from "./pt";
import { koGuideExtras } from "./ko";
import { itGuideExtras } from "./it";

export * from "./types";

export const guideExtrasByLocale: Record<SupportedLocale, GuideExtrasRecord> = {
  en: enGuideExtras,
  es: esGuideExtras,
  ja: jaGuideExtras,
  fr: frGuideExtras,
  de: deGuideExtras,
  pt: ptGuideExtras,
  ko: koGuideExtras,
  it: itGuideExtras,
};

export function getGuideExtra(slug: string, lang: SupportedLocale): GuideExtra | undefined {
  return guideExtrasByLocale[lang]?.[slug] ?? guideExtrasByLocale.en[slug];
}
