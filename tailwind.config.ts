import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0c",
          surface: "#0f0f12",
          card: "#16161a",
          raised: "#1c1c22",
          inset: "#08080a",
        },
        border: {
          DEFAULT: "#222229",
          subtle: "#1a1a20",
          strong: "#33333d",
          hover: "#454555",
        },
        fg: {
          DEFAULT: "#fafafa",
          muted: "#b8b8c2",
          subtle: "#7d7d88",
          faint: "#4a4a55",
        },
        brand: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          bright: "#a5b4fc",
          deep: "#4f46e5",
          on: "#ffffff",
        },
        accent: {
          pink: "#ec4899",
          cyan: "#06b6d4",
          emerald: "#10b981",
          amber: "#f59e0b",
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
        // Subtle inner highlight + soft outer for cards
        card: [
          "inset 0 1px 0 0 rgba(255,255,255,0.04)",
          "0 1px 3px 0 rgba(0,0,0,0.4)",
        ].join(", "),
        "card-hover": [
          "inset 0 1px 0 0 rgba(255,255,255,0.06)",
          "0 0 0 1px rgba(99,102,241,0.25)",
          "0 24px 48px -12px rgba(99,102,241,0.18)",
          "0 8px 24px -8px rgba(0,0,0,0.4)",
        ].join(", "),
        "brand-glow": "0 0 0 1px rgba(99,102,241,0.4), 0 8px 32px -8px rgba(99,102,241,0.55)",
        "brand-glow-lg": "0 0 0 1px rgba(99,102,241,0.5), 0 16px 48px -8px rgba(99,102,241,0.7)",
        "inner-highlight": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(236,72,153,0.08))",
        "shine":
          "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)",
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
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
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
        "marquee": "marquee 30s linear infinite",
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
