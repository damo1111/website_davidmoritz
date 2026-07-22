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
        // Bold & modern light system
        bg: "#FFFFFF",
        ink: "#0B0B0B",
        paper: "#F3F3EE", // soft off-white surface
        surface: "#F3F3EE",
        line: "#E4E4DE", // hairline borders on light
        muted: "#6B6B73",
        accent: "#3B2BFF", // electric indigo
        "accent-ink": "#FFFFFF",
        lime: "#D6FF3E", // secondary pop
        coral: "#FF5C35", // tertiary pop
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Space Mono", "monospace"],
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
