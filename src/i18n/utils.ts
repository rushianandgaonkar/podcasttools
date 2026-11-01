import { languages, defaultLocale, nonDefaultLocales, type SupportedLocale } from "./languages";
import { translations, type UITranslations } from "./translations";
import { siteConfig } from "../config/site";

export function getLangFromUrl(url: URL | string): SupportedLocale {
  const pathname = typeof url === "string" ? url : url.pathname;
  const segments = pathname.replace(/^\/+|\/+$/g, "").split("/");
  const firstSegment = segments[0] as SupportedLocale;

  if (firstSegment && firstSegment in languages && firstSegment !== defaultLocale) {
    return firstSegment;
  }
  return defaultLocale;
}

export function useTranslations(lang: SupportedLocale = defaultLocale): UITranslations {
  return translations[lang] || translations[defaultLocale];
}

/**
 * Given a URL path (e.g. "/es/tools/episode-title-generator" or "/tools") and a target locale,
 * returns the correct localized path:
 * - defaultLocale ("en") -> "/tools/episode-title-generator"
 * - targetLocale ("es")  -> "/es/tools/episode-title-generator"
 */
export function getLocalizedPath(pathname: string, targetLocale: SupportedLocale): string {
  // Strip protocol/host if full URL was passed
  let cleanPath = pathname;
  try {
    if (cleanPath.startsWith("http://") || cleanPath.startsWith("https://")) {
      const parsed = new URL(cleanPath);
      cleanPath = parsed.pathname;
    }
  } catch (_) {}

  // Remove existing locale prefix if any
  const segments = cleanPath.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    segments.shift();
  }

  const basePath = segments.join("/");

  if (targetLocale === defaultLocale) {
    return basePath ? `/${basePath}` : "/";
  }

  return basePath ? `/${targetLocale}/${basePath}` : `/${targetLocale}`;
}

export interface HreflangItem {
  lang: string;
  href: string;
}

/**
 * Returns reciprocal hreflang alternate links for all supported languages + x-default
 */
export function getHreflangLinks(pathname: string, siteUrl: string = siteConfig.url): HreflangItem[] {
  const links: HreflangItem[] = [];

  // x-default points to defaultLocale ("en")
  links.push({
    lang: "x-default",
    href: `${siteUrl}${getLocalizedPath(pathname, defaultLocale)}`,
  });

  // Default locale (en)
  links.push({
    lang: "en",
    href: `${siteUrl}${getLocalizedPath(pathname, "en")}`,
  });

  // Non-default locales
  for (const locale of nonDefaultLocales) {
    links.push({
      lang: locale,
      href: `${siteUrl}${getLocalizedPath(pathname, locale)}`,
    });
  }

  return links;
}

