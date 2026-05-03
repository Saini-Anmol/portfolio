"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export type AccentName =
  | "indigo"
  | "cyan"
  | "emerald"
  | "amber"
  | "pink"
  | "violet"
  | "rose"
  | "sky"
  | "teal"
  | "orange"
  | "fuchsia"
  | "lime";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  watermark?: string;
  align?: "left" | "center";
  accent?: AccentName;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  watermark,
  align = "left",
  accent,
}: Props) {
  const alignClasses =
    align === "center"
      ? "text-center mx-auto items-center"
      : "text-left items-start";

  return (
    <div className="relative" data-accent={accent}>
      {watermark && (
        <motion.span
          aria-hidden
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="section-watermark"
        >
          {watermark}
        </motion.span>
      )}

      <motion.header
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className={`relative flex flex-col max-w-2xl ${alignClasses}`}
      >
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="display-md mt-5 sm:mt-6 text-fg text-balance">{title}</h2>

        {/* Animated gradient underline */}
        <motion.span
          aria-hidden
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className={`mt-4 sm:mt-5 block h-[2px] w-20 sm:w-24 rounded-full ${
            align === "center" ? "" : "origin-left"
          }`}
          style={{
            background: `linear-gradient(90deg, rgb(var(--accent-rgb)), rgb(var(--accent-rgb) / 0.2))`,
            transformOrigin: align === "center" ? "center" : "left",
            boxShadow: "0 0 12px 0 rgb(var(--accent-rgb) / 0.5)",
          }}
        />

        {description && (
          <p className="lead mt-5 sm:mt-6 text-balance">{description}</p>
        )}
      </motion.header>
    </div>
  );
}
