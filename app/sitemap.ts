import { MetadataRoute } from "next";
import { siteConfig, toolRegistry, guidesRegistry } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Base core pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2026-11-01"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date("2026-11-01"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date("2026-10-25"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-10-20"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-10-20"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-10-20"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-10-20"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // Dynamic available tool pages
  const toolPages: MetadataRoute.Sitemap = toolRegistry
    .filter((tool) => tool.status === "available")
    .map((tool) => ({
      url: `${baseUrl}/tools/${tool.slug}`,
      lastModified: new Date("2026-11-01"),
      changeFrequency: "monthly",
      priority: tool.featured ? 0.9 : 0.8,
    }));

  // Dynamic guide pages
  const guidePages: MetadataRoute.Sitemap = guidesRegistry.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...corePages, ...toolPages, ...guidePages];
}
