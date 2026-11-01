/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0A0A16",
        foreground: "#F8FAFC",
        studio: {
          darkest: "#06060D",
          dark: "#0A0A16",
          card: "#121226",
          elevated: "#181834",
          border: "#25244C",
          "border-hover": "#3D3A7A",
          muted: "#94A3B8",
          subtle: "#64748B",
          accent: "#F97316", // Warm Studio Mic Glow / Orange
          "accent-hover": "#EA580C",
          amber: "#F59E0B",
          indigo: "#6366F1", // Electric Indigo
          purple: "#8B5CF6",
          cyan: "#06B6D4",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "studio-glow": "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 65%)",
        "mic-glow": "radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.12) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};
