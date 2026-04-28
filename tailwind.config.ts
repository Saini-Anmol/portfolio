import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "rgb(var(--bg) / <alpha-value>)",
          surface: "rgb(var(--bg-surface) / <alpha-value>)",
          card: "rgb(var(--bg-card) / <alpha-value>)",
          raised: "rgb(var(--bg-raised) / <alpha-value>)",
          inset: "rgb(var(--bg-inset) / <alpha-value>)",
        },
        border: {
          DEFAULT: "rgb(var(--border) / <alpha-value>)",
          subtle: "rgb(var(--border-subtle) / <alpha-value>)",
          strong: "rgb(var(--border-strong) / <alpha-value>)",
          hover: "rgb(var(--border-hover) / <alpha-value>)",
        },
        fg: {
          DEFAULT: "rgb(var(--fg) / <alpha-value>)",
          muted: "rgb(var(--fg-muted) / <alpha-value>)",
          subtle: "rgb(var(--fg-subtle) / <alpha-value>)",
          faint: "rgb(var(--fg-faint) / <alpha-value>)",
        },
        brand: {
          DEFAULT: "rgb(var(--brand) / <alpha-value>)",
          light: "rgb(var(--brand-light) / <alpha-value>)",
          bright: "rgb(var(--brand-bright) / <alpha-value>)",
          deep: "rgb(var(--brand-deep) / <alpha-value>)",
          on: "rgb(var(--brand-on) / <alpha-value>)",
        },
        accent: {
          pink: "#ec4899",
          cyan: "#06b6d4",
          emerald: "#10b981",
          amber: "#f59e0b",
          violet: "#8b5cf6",
          rose: "#f43f5e",
          sky: "#0ea5e9",
          teal: "#14b8a6",
          orange: "#f97316",
          lime: "#84cc16",
          fuchsia: "#d946ef",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.75rem, 10vw, 8rem)", { lineHeight: "0.92", letterSpacing: "-0.05em" }],
        "display-lg": ["clamp(3rem, 7.5vw, 6rem)", { lineHeight: "0.96", letterSpacing: "-0.045em" }],
        "display-md": ["clamp(2.5rem, 5.2vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "h1": ["clamp(2.25rem, 4.4vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "h2": ["clamp(1.625rem, 2.8vw, 2.25rem)", { lineHeight: "1.18", letterSpacing: "-0.022em" }],
        "h3": ["clamp(1.125rem, 1.6vw, 1.375rem)", { lineHeight: "1.3", letterSpacing: "-0.012em" }],
        "lead": ["clamp(1.0625rem, 1.5vw, 1.25rem)", { lineHeight: "1.65", letterSpacing: "-0.005em" }],
        "body": ["clamp(0.9375rem, 1.05vw, 1.0625rem)", { lineHeight: "1.7" }],
        "watermark": ["clamp(7rem, 18vw, 18rem)", { lineHeight: "0.85", letterSpacing: "-0.06em" }],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        md: "10px",
        lg: "14px",
        xl: "18px",
        "2xl": "24px",
        pill: "999px",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        "brand-glow": "var(--shadow-brand-glow)",
        "brand-glow-lg": "var(--shadow-brand-glow-lg)",
        "inner-highlight": "var(--shadow-inner-highlight)",
        "soft": "var(--shadow-soft)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #06b6d4 0%, #6366f1 35%, #8b5cf6 65%, #ec4899 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(6,182,212,0.10), rgba(99,102,241,0.10) 50%, rgba(236,72,153,0.08))",
        "rainbow":
          "linear-gradient(110deg, #06b6d4 0%, #6366f1 25%, #8b5cf6 50%, #ec4899 75%, #f59e0b 100%)",
        "shine":
          "linear-gradient(110deg, transparent 30%, rgb(var(--fg) / 0.08) 50%, transparent 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(20px, -20px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "aurora-pan": {
          "0%, 100%": { transform: "translateX(-25%)", opacity: "0.4" },
          "50%": { transform: "translateX(25%)", opacity: "0.7" },
        },
        "twinkle": {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.8" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "scale-in": "scale-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slide-down": "slide-down 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "shimmer": "shimmer 2.4s linear infinite",
        "gradient-pan": "gradient-pan 8s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "float": "float 12s ease-in-out infinite",
        "float-slow": "float-slow 22s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "aurora-pan": "aurora-pan 16s ease-in-out infinite",
        "twinkle": "twinkle 4s ease-in-out infinite",
        "spin-slow": "spin-slow 28s linear infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "spring": "cubic-bezier(0.5, 1.6, 0.4, 1)",
      },
      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
        "450": "450ms",
      },
    },
  },
  plugins: [],
};

export default config;
