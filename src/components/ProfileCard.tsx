"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { config } from "@/data/config";
import { easeOutExpo } from "@/lib/motion";
import CountUp from "./CountUp";

function parseStat(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { num: 0, suffix: value, decimals: 0 };
  const numStr = match[1];
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { num: parseFloat(numStr), suffix: match[2], decimals };
}

export default function ProfileCard() {
  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.45 }}
      className="lg:col-span-5"
    >
      <div className="relative">
        {/* Outer rotating gradient halo */}
        <div className="pointer-events-none absolute -inset-3 sm:-inset-4 rounded-[28px] opacity-70">
          <div
            className="absolute inset-0 rounded-[28px] animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, #06b6d4, #6366f1, #ec4899, #f59e0b, #10b981, #06b6d4)",
              filter: "blur(28px)",
            }}
          />
        </div>

        {/* Card */}
        <div className="relative card-glass card-pad overflow-hidden">
          {/* Animated conic ring at the very edge */}
          <div className="pointer-events-none absolute -inset-px rounded-xl opacity-60">
            <div
              className="absolute inset-0 rounded-xl animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, rgb(var(--brand) / 0.55) 25%, transparent 50%, #ec4899 75%, transparent 100%)",
                animationDuration: "16s",
              }}
            />
          </div>

          <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-pink/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent-amber/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent-emerald/70" />
              </div>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fg-subtle">
                profile
              </span>
            </div>

            {/* Profile photo with animated multi-color rings */}
            <div className="mt-7 flex flex-col items-center">
              <div className="relative">
                {/* Outermost rotating gradient ring */}
                <span
                  aria-hidden
                  className="absolute -inset-2 rounded-full animate-spin-slow"
                  style={{
                    background:
                      "conic-gradient(from 90deg, #06b6d4 0%, #6366f1 25%, #8b5cf6 50%, #ec4899 75%, #f59e0b 100%)",
                    animationDuration: "8s",
                  }}
                />
                {/* Inner ring (counter-rotation) */}
                <span
                  aria-hidden
                  className="absolute -inset-1 rounded-full animate-spin-slow"
                  style={{
                    background:
                      "conic-gradient(from 270deg, transparent 0%, rgb(var(--brand) / 0.6) 50%, transparent 100%)",
                    animationDuration: "5s",
                    animationDirection: "reverse",
                  }}
                />
                {/* Photo mask */}
                <div className="relative h-32 w-32 sm:h-36 sm:w-36 overflow-hidden rounded-full border-[3px] border-bg-card shadow-[0_8px_32px_-4px_rgba(99,102,241,0.5)]">
                  {config.personal.profileImage ? (
                    <Image
                      src={config.personal.profileImage}
                      alt={config.personal.name}
                      fill
                      sizes="144px"
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center bg-bg-raised">
                      <span className="text-4xl font-bold text-fg-subtle">
                        {config.personal.firstName[0]}
                      </span>
                    </div>
                  )}
                </div>
                {/* Online dot */}
                <span className="absolute right-1 bottom-1 inline-flex h-4 w-4 items-center justify-center rounded-full border-2 border-bg-card bg-accent-emerald shadow-[0_0_10px_rgba(16,185,129,0.7)]">
                  <span className="absolute inset-0 rounded-full bg-accent-emerald animate-pulse-ring" />
                </span>
              </div>

              <h3 className="mt-5 text-[19px] font-bold text-fg tracking-tight">
                {config.personal.name}
              </h3>

              {/* Current role pill */}
              <div className="mt-2 inline-flex items-center gap-2 rounded-pill border border-border bg-bg-raised px-3 py-1.5 text-[12.5px] font-medium">
                <Briefcase size={11} className="text-brand" />
                <span className="text-fg">{config.personal.title}</span>
                <span className="text-fg-subtle">@</span>
                <span className="text-accent-emerald font-semibold">
                  {config.personal.company}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-1.5 text-[11.5px] text-fg-subtle">
                <MapPin size={11} className="text-brand-light" />
                {config.personal.location}
              </div>
            </div>

            <div className="hr-grad my-7" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2.5">
              {config.hero.stats.map((s, i) => {
                const { num, suffix, decimals } = parseStat(s.value);
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.7 + i * 0.1,
                      duration: 0.5,
                      ease: easeOutExpo,
                    }}
                    className="rounded-lg border border-border-subtle bg-bg-raised p-3 text-center transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      ["--accent-rgb" as never]:
                        i === 0
                          ? "6 182 212"
                          : i === 1
                          ? "139 92 246"
                          : "245 158 11",
                    }}
                  >
                    <div
                      className="text-2xl sm:text-[26px] font-extrabold tracking-tight"
                      style={{ color: "rgb(var(--accent-rgb))" }}
                    >
                      <CountUp to={num} decimals={decimals} suffix={suffix} />
                    </div>
                    <div className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-fg-subtle">
                      {s.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
