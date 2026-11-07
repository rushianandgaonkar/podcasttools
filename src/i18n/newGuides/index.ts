import type { SupportedLocale } from "../languages";
import type { LocalizedGuideArticle } from "../guidesData";
import { enNewGuides } from "./en";
import { esNewGuides } from "./es";
import { frNewGuides } from "./fr";
import { deNewGuides } from "./de";
import { ptNewGuides } from "./pt";
import { itNewGuides } from "./it";
import { jaNewGuides } from "./ja";
import { koNewGuides } from "./ko";

export const newGuidesByLocale: Record<SupportedLocale, Record<string, LocalizedGuideArticle>> = {
  en: enNewGuides,
  es: esNewGuides,
  fr: frNewGuides,
  de: deNewGuides,
  pt: ptNewGuides,
  it: itNewGuides,
  ja: jaNewGuides,
  ko: koNewGuides,
};

