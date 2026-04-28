"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, MapPin, Sparkles } from "lucide-react";
import { config } from "@/data/config";
import SocialIcon from "./SocialIcon";
import Magnetic from "./Magnetic";
import CountUp from "./CountUp";
import { easeOutExpo, stagger, fadeUp } from "@/lib/motion";

/** Splits a string into per-letter spans with stagger animation. */
function LetterReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const letters = Array.from(text);
  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: easeOutExpo,
            delay: delay + i * 0.04,
          }}
          className="inline-block"
          style={{ whiteSpace: ch === " " ? "pre" : "normal" }}
          aria-hidden
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

/** Parses a stat string like "8.42", "10+", "1" into number + suffix. */
function parseStat(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { num: 0, suffix: value, decimals: 0 };
  const numStr = match[1];
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { num: parseFloat(numStr), suffix: match[2], decimals };
}

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const titles = config.hero.rotatingTitles;

  useEffect(() => {
    if (!config.theme.showRotatingTitle || titles.length <= 1) return;
    const t = setInterval(() => setTitleIdx((i) => (i + 1) % titles.length), 2600);
    return () => clearInterval(t);
  }, [titles.length]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-28"
    >
      {/* Layered ambient backdrops */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand/30 blur-[140px] animate-float" />
        <div className="absolute bottom-1/4 right-0 h-[28rem] w-[28rem] rounded-full bg-accent-pink/12 blur-[140px] animate-float [animation-delay:-6s]" />
        <div className="absolute top-1/2 right-1/4 h-[20rem] w-[20rem] rounded-full bg-accent-cyan/12 blur-[110px] animate-float [animation-delay:-3s]" />
      </div>
      <div className="absolute inset-0 -z-10 grid-pattern mask-radial opacity-50" />

      {/* Decorative outlined name in the very far background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.6 }}
        className="pointer-events-none absolute -bottom-10 -right-10 hidden lg:block select-none"
      >
        <span className="font-extrabold text-stroke text-watermark leading-none">
          {config.personal.lastName}
        </span>
      </motion.div>

      <div className="container-x relative">
        <motion.div
          variants={stagger(0.15, 0.12)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center"
        >
          {/* LEFT */}
          <div className="lg:col-span-7">
            {config.personal.available && (
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-3 rounded-pill border border-border bg-bg-card/70 backdrop-blur-md px-4 py-2 text-[13px] font-medium text-fg-muted shadow-inner-highlight">
                  <span className="status-dot" />
                  Available for opportunities
                  <span className="text-fg-faint">·</span>
                  <span className="text-fg-subtle">Open to roles</span>
                </span>
              </motion.div>
            )}

            <h1 className="mt-9 display-lg leading-[0.96] text-balance">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block font-mono text-[15px] md:text-[17px] font-medium text-fg-muted mb-5 tracking-normal"
              >
                <span className="text-brand-bright">$</span> hi, I'm
              </motion.span>
              <span className="block text-fg overflow-hidden">
                <LetterReveal text={config.personal.firstName} delay={0.3} />
                <br className="hidden sm:block" />
                <span className="gradient-text">
                  <LetterReveal
                    text={` ${config.personal.lastName}.`}
                    delay={0.3 + config.personal.firstName.length * 0.04}
                  />
                </span>
              </span>
            </h1>

            {config.theme.showRotatingTitle && (
              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-wrap items-center gap-3 text-2xl md:text-3xl font-medium"
              >
                <Sparkles size={22} className="text-brand-light glow-brand" strokeWidth={2} />
                <span className="text-fg-muted">I'm a</span>
                <span className="relative inline-flex h-10 md:h-12 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={titleIdx}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.45, ease: easeOutExpo }}
                      className="block whitespace-nowrap font-bold gradient-text-static"
                    >
                      {titles[titleIdx]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.div>
            )}

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-[18px] md:text-[20px] text-fg-muted leading-[1.65] text-pretty"
            >
              {config.hero.bio}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Magnetic strength={0.3}>
                <a href={config.hero.cta.primary.href} className="btn-primary btn-lg group/cta">
                  {config.hero.cta.primary.label}
                  <ArrowDown
                    size={17}
                    className="transition-transform duration-300 ease-out-expo group-hover/cta:translate-y-0.5"
                  />
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a
                  href={config.hero.cta.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary btn-lg group/dl"
                >
                  <Download
                    size={17}
                    className="transition-transform duration-300 ease-out-expo group-hover/dl:-translate-y-0.5"
                  />
                  {config.hero.cta.secondary.label}
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <div className="flex items-center gap-2.5">
                {config.social.map((s) => (
                  <SocialIcon key={s.label} link={s} />
                ))}
              </div>
              <span className="h-5 w-px bg-border" />
              <div className="flex items-center gap-2 text-[14px] text-fg-subtle">
                <MapPin size={15} className="text-brand-light" />
                {config.personal.location}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — stats card */}
          {config.theme.showStats && (
            <motion.aside
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.45 }}
              className="lg:col-span-5"
            >
              <div className="card-glass card-pad relative overflow-hidden">
                {/* Animated gradient ring */}
                <div className="pointer-events-none absolute -inset-px rounded-xl opacity-60">
                  <div
                    className="absolute inset-0 rounded-xl animate-spin-slow"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0%, rgb(var(--brand) / 0.55) 25%, transparent 50%, rgb(236 72 153 / 0.45) 75%, transparent 100%)",
                    }}
                  />
                </div>

                <div className="relative">
                  {/* Window controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-accent-pink/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-accent-amber/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-accent-emerald/70" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-fg-subtle">
                      profile.json
                    </span>
                  </div>

                  <div className="mt-8">
                    <p className="eyebrow">at a glance</p>
                    <div className="mt-7 grid grid-cols-3 gap-3">
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
                            className="rounded-lg border border-border-subtle bg-bg-raised p-3.5 text-center transition-all duration-300 hover:border-brand/40 hover:-translate-y-0.5"
                          >
                            <div className="text-3xl md:text-4xl font-extrabold tracking-tight gradient-text-static">
                              <CountUp to={num} decimals={decimals} suffix={suffix} />
                            </div>
                            <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-fg-subtle">
                              {s.label}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="hr-grad my-8" />

                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between gap-3 text-[14px]">
                      <span className="text-fg-subtle font-mono text-[12px]">role</span>
                      <span className="text-fg-muted text-right font-medium">
                        {config.personal.title}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-3 text-[14px]">
                      <span className="text-fg-subtle font-mono text-[12px]">email</span>
                      <a
                        href={`mailto:${config.personal.email}`}
                        className="link-underline text-fg-muted text-right truncate"
                      >
                        {config.personal.email}
                      </a>
                    </div>
                    <div className="flex items-baseline justify-between gap-3 text-[14px]">
                      <span className="text-fg-subtle font-mono text-[12px]">status</span>
                      <span className="inline-flex items-center gap-1.5 text-accent-emerald text-right font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald" />
                        online
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
          )}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:inline-flex flex-col items-center gap-2 text-fg-subtle transition-colors hover:text-fg"
      >
        <span className="font-mono text-[10.5px] uppercase tracking-[0.32em]">scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-gradient-to-b from-brand-light to-transparent"
        />
      </motion.a>
    </section>
  );
}
