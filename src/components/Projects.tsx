"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import SectionHeading, { type AccentName } from "./SectionHeading";
import Spotlight from "./Spotlight";
import { config } from "@/data/config";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

// Cool, controlled per-card accents — blue / cyan / teal family
const PROJECT_ACCENTS: AccentName[] = ["sky", "cyan", "teal"];

export default function Projects() {
  return (
    <section id="projects" className="section" data-accent="blue">
      <div className="container-x space-y-12 sm:space-y-16 md:space-y-24">
        <SectionHeading
          eyebrow="03 / Projects"
          title="Selected work"
          description="A mix of applied AI, NLP, and full-stack systems — research prototypes shipped as products."
          watermark="03"
          accent="blue"
        />

        {/* Bento grid: featured card is full-width on top, others form a tidy pair below */}
        <motion.div
          variants={stagger(0, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {config.projects.map((p, idx) => {
            const primaryLink = p.links?.[0];
            const accent = PROJECT_ACCENTS[idx % PROJECT_ACCENTS.length];
            const featured = idx === 0;

            const LinkBtn = primaryLink ? (
              <a
                href={primaryLink.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={primaryLink.label}
                className="icon-btn shrink-0"
              >
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-300 ease-out-expo group-hover/card:rotate-45"
                />
              </a>
            ) : null;

            const TechRow = (
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            );

            const Bullets = (
              <ul className="space-y-2 sm:space-y-2.5">
                {p.bullets.map((b, i) => (
                  <li
                    key={i}
                    className={`flex gap-2.5 text-fg-muted leading-[1.65] text-pretty ${
                      featured ? "text-[14.5px] sm:text-[15.5px]" : "text-[13.5px] sm:text-[14.5px]"
                    }`}
                  >
                    <span className="bullet" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            );

            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                data-accent={accent}
                className={featured ? "md:col-span-2" : ""}
              >
                <Spotlight
                  as="article"
                  tilt={!featured}
                  tiltIntensity={4}
                  className={`group/card flex h-full flex-col ${
                    featured ? "rounded-[20px] p-7 md:p-10" : "rounded-[18px] p-6 md:p-7"
                  }`}
                >
                  {/* Decorative corner glow */}
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-px -top-px rounded-bl-[80px] opacity-80 ${
                      featured ? "h-44 w-44" : "h-28 w-28"
                    }`}
                    style={{
                      background:
                        "radial-gradient(circle at top right, rgb(var(--accent-rgb) / 0.26), transparent 70%)",
                    }}
                  />

                  {featured ? (
                    /* ── Featured layout: 2-column ── */
                    <div className="relative z-[1] grid grid-cols-1 gap-7 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
                      {/* Left: identity */}
                      <div className="flex flex-col">
                        {p.highlight && (
                          <span className="chip-brand mb-4 self-start">
                            <Sparkles size={11} className="mr-1.5" strokeWidth={2} />
                            {p.highlight}
                          </span>
                        )}
                        <h3 className="text-3xl font-bold leading-[1.05] text-fg transition-colors duration-300 group-hover/card:text-accent sm:text-4xl md:text-[2.75rem]">
                          {p.title}
                        </h3>
                        <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.18em] text-fg-subtle">
                          {p.period}
                        </p>
                        <p className="mt-5 text-[16px] leading-[1.6] text-fg text-pretty sm:text-[17px]">
                          {p.summary}
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                          {LinkBtn}
                          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">
                            featured project
                          </span>
                        </div>
                      </div>
                      {/* Right: details */}
                      <div className="flex flex-col justify-between gap-6 md:border-l md:border-border-subtle md:pl-12">
                        {Bullets}
                        <div className="border-t border-border-subtle pt-5">{TechRow}</div>
                      </div>
                    </div>
                  ) : (
                    /* ── Standard layout: single column ── */
                    <div className="relative z-[1] flex h-full flex-col">
                      <header className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-[19px] font-bold leading-tight text-fg transition-colors duration-300 group-hover/card:text-accent sm:text-h2">
                            {p.title}
                          </h3>
                          <p className="mt-2 sm:mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle sm:text-[12px] sm:tracking-[0.18em]">
                            {p.period}
                          </p>
                        </div>
                        {LinkBtn}
                      </header>

                      <p className="mt-4 text-[15px] leading-[1.6] text-fg text-pretty sm:mt-5 sm:text-[16px] md:text-[17px]">
                        {p.summary}
                      </p>

                      <div className="mt-4 flex-1">{Bullets}</div>

                      <div className="mt-5 border-t border-border-subtle pt-5 sm:mt-6 sm:pt-6">
                        {TechRow}
                      </div>
                    </div>
                  )}
                </Spotlight>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
