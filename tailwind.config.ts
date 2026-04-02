import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#F2E8D5",
          "cream-mid": "#EAD9BC",
          oak: "#2A1E12",
          "oak-mid": "#4A3320",
          "oak-light": "#7A5C40",
          bordeaux: "#6B1A2A",
          "bordeaux-mid": "#8B2535",
          terracotta: "#A8401E",
          "terracotta-light": "#C55B38",
          "terracotta-glow": "#D97148",
          gold: "#C4902E",
          "gold-bright": "#E8B84B",
          "gold-muted": "#9B6E20",
          copper: "#B5622A",
          chalk: "#F8F3E8",
          parchment: "#C9B48A",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Crimson Text", "Georgia", "serif"],
        sans: ["Cinzel", "Georgia", "serif"],
        bebas: ["Bebas Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        "warm-lg": "0 8px 40px rgba(106,26,42,0.22), 0 4px 16px rgba(42,30,18,0.15)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fadeIn 0.7s ease both",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
