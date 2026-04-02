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
          cream:              "#F2E8D5",
          "cream-mid":        "#EAD9BC",
          "cream-dark":       "#DEC9A3",
          oak:                "#2A1E12",
          "oak-mid":          "#4A3320",
          "oak-light":        "#7A5C40",
          bordeaux:           "#6B1A2A",
          "bordeaux-mid":     "#8B2535",
          "bordeaux-light":   "#B03045",
          terracotta:         "#A8401E",
          "terracotta-light": "#C55B38",
          "terracotta-glow":  "#D97148",
          gold:               "#C4902E",
          "gold-bright":      "#E8B84B",
          "gold-muted":       "#9B6E20",
          copper:             "#B5622A",
          "copper-light":     "#D4834D",
          chalk:              "#F8F3E8",
          parchment:          "#C9B48A",
          success:            "#3B6B2A",
          error:              "#8B1A1A",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'Lora'", "Georgia", "serif"],
        sans:    ["'DM Sans'", "Helvetica Neue", "sans-serif"],
      },
      backgroundImage: {
        "grain-sm":    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
        "grain-dark":  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
        "warmth":      "linear-gradient(135deg, #6B1A2A 0%, #A8401E 60%, #C4902E 100%)",
        "gold-shimmer":"linear-gradient(90deg, transparent 0%, #C4902E22 40%, #C4902E44 50%, #C4902E22 60%, transparent 100%)",
        "vignette":    "radial-gradient(ellipse at center, transparent 40%, rgba(20,12,6,0.75) 100%)",
      },
      boxShadow: {
        "warm-sm":   "0 2px 8px rgba(106,26,42,0.12), 0 1px 3px rgba(42,30,18,0.08)",
        "warm-md":   "0 4px 20px rgba(106,26,42,0.18), 0 2px 8px rgba(42,30,18,0.12)",
        "warm-lg":   "0 8px 40px rgba(106,26,42,0.22), 0 4px 16px rgba(42,30,18,0.15)",
        "gold-glow": "0 0 0 1px rgba(196,144,46,0.3), 0 4px 24px rgba(196,144,46,0.15)",
        "stamp":     "2px 2px 0 rgba(42,30,18,0.4)",
      },
      animation: {
        "fade-up":    "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in":    "fadeIn 0.7s ease both",
        "slide-left": "slideLeft 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "shimmer":    "shimmer 3s ease-in-out infinite",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%":   { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%":      { opacity: "1" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%":      { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
