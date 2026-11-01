export interface LanguageInfo {
  code: string;
  name: string;
  nativeName: string;
  flag?: string;
}

export const languages: Record<string, LanguageInfo> = {
  en: { code: "en", name: "English", nativeName: "English" },
  es: { code: "es", name: "Spanish", nativeName: "Español" },
  ja: { code: "ja", name: "Japanese", nativeName: "日本語" },
  fr: { code: "fr", name: "French", nativeName: "Français" },
  de: { code: "de", name: "German", nativeName: "Deutsch" },
  pt: { code: "pt", name: "Portuguese", nativeName: "Português" },
  ko: { code: "ko", name: "Korean", nativeName: "한국어" },
  it: { code: "it", name: "Italian", nativeName: "Italiano" },
} as const;

export type SupportedLocale = keyof typeof languages;
export const defaultLocale: SupportedLocale = "en";
export const allLocales: SupportedLocale[] = ["en", "es", "ja", "fr", "de", "pt", "ko", "it"];
export const nonDefaultLocales: SupportedLocale[] = ["es", "ja", "fr", "de", "pt", "ko", "it"];

