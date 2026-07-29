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
        // Midnight Champagne — refined dark luxury
        bg: "#14161F", // navy-black canvas
        ink: "#ECEAE4", // warm white ink
        paper: "#1B1E2A", // raised panel surface
        surface: "#1B1E2A",
        line: "rgba(236,234,228,0.1)", // hairline on navy
        muted: "#9B98A6",
        accent: "#D9B98A", // champagne
        "accent-ink": "#14161F",
        accent2: "#7B8CA8", // dusty periwinkle, used sparingly
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        accentSerif: ["var(--font-accent-serif)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(0.8)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-fast": "marquee 18s linear infinite",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
