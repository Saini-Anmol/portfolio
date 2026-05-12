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
        {/* Outer rotating gradient halo — controlled blue→cyan */}
        <div className="pointer-events-none absolute -inset-3 sm:-inset-4 rounded-[28px] opacity-65">
          <div
            className="absolute inset-0 rounded-[28px] animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, #2563eb, #0ea5e9, #06b6d4, #14b8a6, #2563eb)",
              filter: "blur(28px)",
            }}
          />
        </div>

        {/* Card */}
        <div className="relative card-glass p-7 md:p-9 overflow-hidden">
          {/* Animated conic ring at the very edge */}
          <div className="pointer-events-none absolute -inset-px rounded-xl opacity-50">
            <div
              className="absolute inset-0 rounded-xl animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, rgb(var(--brand) / 0.5) 25%, transparent 50%, #06b6d4 75%, transparent 100%)",
                animationDuration: "16s",
              }}
            />
          </div>

          <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-blue/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent-cyan/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent-emerald/70" />
              </div>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fg-subtle">
                profile
              </span>
            </div>

            {/* Profile photo with animated multi-color rings */}
            <div className="mt-7 flex flex-col items-center">
              <div className="relative">
                {/* Outermost rotating gradient ring — blue→cyan→teal */}
                <span
                  aria-hidden
                  className="absolute -inset-2 rounded-full animate-spin-slow"
                  style={{
                    background:
                      "conic-gradient(from 90deg, #2563eb 0%, #0ea5e9 30%, #06b6d4 55%, #14b8a6 80%, #2563eb 100%)",
                    animationDuration: "9s",
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
                <div className="relative h-44 w-44 sm:h-52 sm:w-52 overflow-hidden rounded-full border-[3px] border-bg-card shadow-[0_10px_40px_-6px_rgba(37,99,235,0.5)]">
                  {config.personal.profileImage ? (
                    <Image
                      src={config.personal.profileImage}
                      alt={config.personal.name}
                      fill
                      sizes="208px"
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center bg-bg-raised">
                      <span className="text-5xl font-bold text-fg-subtle">
                        {config.personal.firstName[0]}
                      </span>
                    </div>
                  )}
                </div>
                {/* Online dot */}
                <span className="absolute right-2 bottom-2 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-bg-card bg-accent-emerald shadow-[0_0_12px_rgba(16,185,129,0.7)]">
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
                          ? "2 132 199"   /* Projects — sky */
                          : i === 1
                          ? "8 145 178"   /* Tech Stack — cyan */
                          : "202 138 4",  /* Awards — amber (gold) */
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
