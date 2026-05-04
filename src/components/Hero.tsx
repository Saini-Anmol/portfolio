"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { config } from "@/data/config";
import SocialIcon from "./SocialIcon";
import Magnetic from "./Magnetic";
import ProfileCard from "./ProfileCard";
import { easeOutExpo, stagger, fadeUp } from "@/lib/motion";

/** Splits a string into per-letter spans with stagger reveal. */
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
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 md:pt-32 md:pb-24"
    >
      {/* Layered ambient backdrops */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-[24rem] w-[24rem] sm:h-[32rem] sm:w-[32rem] -translate-x-1/2 rounded-full bg-brand/30 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-0 h-[20rem] w-[20rem] sm:h-[28rem] sm:w-[28rem] rounded-full bg-accent-pink/12 blur-[120px] animate-float [animation-delay:-6s]" />
        <div className="absolute top-1/2 right-1/4 h-[16rem] w-[16rem] sm:h-[20rem] sm:w-[20rem] rounded-full bg-accent-cyan/12 blur-[100px] animate-float [animation-delay:-3s]" />
      </div>
      <div className="absolute inset-0 -z-10 grid-pattern mask-radial opacity-40" />

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
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-20 items-center"
        >
          {/* RIGHT (visible first on mobile via order) — Profile */}
          <div className="order-1 lg:order-2 lg:col-span-5 max-w-[22rem] sm:max-w-md mx-auto lg:max-w-none">
            <ProfileCard />
          </div>

          {/* LEFT — Text */}
          <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left">
            <motion.div variants={fadeUp} className="inline-flex">
              <span className="inline-flex items-center gap-2.5 rounded-pill border border-border bg-bg-card/80 backdrop-blur-md px-3.5 py-1.5 text-[12px] sm:text-[12.5px] font-medium text-fg-muted shadow-inner-highlight">
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-emerald">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent-emerald animate-ping opacity-60" />
                </span>
                Currently
                <span className="text-fg font-semibold">
                  {config.personal.title}
                </span>
                <span className="text-fg-faint">·</span>
                <span className="text-accent-emerald font-semibold">
                  {config.personal.company}
                </span>
              </span>
            </motion.div>

            <h1 className="mt-7 sm:mt-8 display-lg leading-[0.96] text-balance">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block font-mono text-[13px] sm:text-[15px] md:text-[17px] font-medium text-fg-muted mb-4 sm:mb-5 tracking-normal"
              >
                <span className="text-brand">$</span> hi, I&apos;m
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
                className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-lg sm:text-2xl md:text-3xl font-medium"
              >
                <Sparkles
                  size={18}
                  className="sm:hidden text-brand-light glow-brand"
                  strokeWidth={2}
                />
                <Sparkles
                  size={22}
                  className="hidden sm:inline text-brand-light glow-brand"
                  strokeWidth={2}
                />
                <span className="text-fg-muted">I&apos;m a</span>
                <span className="relative inline-flex h-8 sm:h-10 md:h-12 overflow-hidden">
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
              className="mt-6 sm:mt-8 max-w-xl mx-auto lg:mx-0 text-[15px] sm:text-[17px] md:text-[19px] text-fg-muted leading-[1.6] text-pretty"
            >
              {config.hero.bio}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <Magnetic strength={0.3}>
                <a
                  href={config.hero.cta.primary.href}
                  className="btn-primary btn-lg group/cta"
                >
                  {config.hero.cta.primary.label}
                  <ArrowDown
                    size={16}
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
                    size={16}
                    className="transition-transform duration-300 ease-out-expo group-hover/dl:-translate-y-0.5"
                  />
                  {config.hero.cta.secondary.label}
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-3"
            >
              <div className="flex items-center gap-2.5">
                {config.social.map((s) => (
                  <SocialIcon key={s.label} link={s} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:inline-flex flex-col items-center gap-2 text-fg-subtle transition-colors hover:text-fg"
      >
        <span className="font-mono text-[10.5px] uppercase tracking-[0.32em]">
          scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-7 w-px bg-gradient-to-b from-brand-light to-transparent"
        />
      </motion.a>
    </section>
  );
}
