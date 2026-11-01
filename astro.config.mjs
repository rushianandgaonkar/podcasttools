import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://podstudiotools.com",
  trailingSlash: "never",
  build: {
    format: "directory",
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "ja", "fr", "de", "pt", "ko", "it"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          es: "es",
          ja: "ja",
          fr: "fr",
          de: "de",
          pt: "pt",
          ko: "ko",
          it: "it",
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
