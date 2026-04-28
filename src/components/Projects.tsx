"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Spotlight from "./Spotlight";
import { config } from "@/data/config";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x space-y-16 md:space-y-24">
        <SectionHeading
          eyebrow="03 / Projects"
          title="Selected work"
          description="A mix of applied AI, NLP, and full-stack systems I've shipped — from research prototypes to deployable products."
          watermark="03"
        />

        <motion.div
          variants={stagger(0, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {config.projects.map((p) => {
            const primaryLink = p.links?.[0];
            return (
              <motion.div key={p.title} variants={fadeUp} className="h-full">
                <Spotlight
                  as="article"
                  tilt
                  tiltIntensity={4}
                  className="card-pad group/card flex flex-col h-full"
                >
                  {/* Decorative corner gradient */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-px -right-px h-32 w-32 rounded-bl-[80px] opacity-60"
                    style={{
                      background:
                        "radial-gradient(circle at top right, rgba(99,102,241,0.18), transparent 70%)",
                    }}
                  />

                  <div className="relative z-[1] flex flex-col h-full">
                    <header className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        {p.highlight && (
                          <span className="chip-brand mb-4">
                            <Sparkles size={11} className="mr-1.5" strokeWidth={2} />
                            {p.highlight}
                          </span>
                        )}
                        <h3 className="text-h2 font-bold text-fg leading-tight transition-colors duration-300 group-hover/card:text-brand-bright">
                          {p.title}
                        </h3>
                        <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.18em] text-fg-subtle">
                          {p.period}
                        </p>
                      </div>
                      {primaryLink && (
                        <a
                          href={primaryLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={primaryLink.label}
                          className="icon-btn shrink-0 group-hover/card:border-brand/40 group-hover/card:bg-brand/10 group-hover/card:text-brand-bright"
                        >
                          <ArrowUpRight
                            size={17}
                            strokeWidth={2}
                            className="transition-transform duration-300 ease-out-expo group-hover/card:rotate-45"
                          />
                        </a>
                      )}
                    </header>

                    <p className="mt-6 text-[16px] md:text-[17px] text-fg leading-[1.65] text-pretty">
                      {p.summary}
                    </p>

                    <ul className="mt-5 space-y-3 flex-1">
                      {p.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-[14.5px] text-fg-muted leading-[1.7] text-pretty"
                        >
                          <span className="bullet" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-1.5 pt-6 border-t border-border-subtle">
                      {p.tech.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Spotlight>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
