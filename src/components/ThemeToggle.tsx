"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const initial: Theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    setTheme(initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  // Avoid mismatch flash on first paint
  if (!theme) {
    return (
      <span
        aria-hidden
        className="inline-flex h-10 w-10 rounded-pill border border-border bg-bg-card/60 backdrop-blur-sm"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="group relative inline-flex h-10 w-10 items-center justify-center rounded-pill border border-border bg-bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-out-expo hover:border-brand/40 hover:-translate-y-0.5"
    >
      {/* Glow when hovered */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at center, rgb(var(--brand) / 0.18), transparent 60%)",
        }}
      />

      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -16, opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
          exit={{ y: 16, opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isDark ? (
            <Moon
              size={16}
              strokeWidth={1.8}
              className="text-brand-bright transition-colors group-hover:text-brand-bright"
            />
          ) : (
            <Sun
              size={16}
              strokeWidth={1.8}
              className="text-brand transition-colors group-hover:text-brand"
            />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
