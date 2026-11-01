import { Metadata } from "next";
import { siteConfig, toolRegistry } from "@/config/site";

export function createToolMetadata(slug: string): Metadata {
  const tool = toolRegistry.find((t) => t.slug === slug);

  if (!tool) {
    return {
      title: "Tool Not Found | " + siteConfig.name,
      description: "The requested podcast tool could not be found.",
    };
  }

  const title = `${tool.title} | Free Online - ${siteConfig.name}`;
  const description = tool.description;
  const canonicalUrl = `${siteConfig.url}/tools/${tool.slug}`;

  const isAvailable = tool.status === "available";

  return {
    title,
    description,
    keywords: [tool.primaryKeyword, ...tool.secondaryKeywords],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: isAvailable
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        }
      : {
          index: false,
          follow: false,
        },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/api/og?title=${encodeURIComponent(tool.shortTitle)}`,
          width: 1200,
          height: 630,
          alt: `${tool.title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/api/og?title=${encodeURIComponent(tool.shortTitle)}`],
    },
  };
}

export function createPageMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Free Podcast Creator Tools`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
