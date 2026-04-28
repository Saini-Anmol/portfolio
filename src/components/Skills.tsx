"use client";

import { motion } from "framer-motion";
import SectionHeading, { type AccentName } from "./SectionHeading";
import Spotlight from "./Spotlight";
import Marquee from "./Marquee";
import { config } from "@/data/config";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

// Each skill category gets its own color theme — vibrant but cohesive
const CATEGORY_ACCENTS: AccentName[] = [
  "sky",      // Programming
  "emerald",  // Backend & Web
  "amber",    // Databases
  "pink",     // Data Science & AI
  "violet",   // NLP & LLMs
  "cyan",     // Deployment & Tools
  "rose",     // Fundamentals
];

export default function Skills() {
  const allSkills = Array.from(
    new Set(config.skills.flatMap((g) => g.items))
  );

  return (
    <section id="skills" className="section" data-accent="cyan">
      <div className="container-x space-y-16 md:space-y-24">
        <SectionHeading
          eyebrow="04 / Skills"
          title="Tools I work with"
          description="A snapshot of the languages, frameworks, and libraries I use day-to-day."
          watermark="04"
          accent="cyan"
        />

        {/* Animated marquee of every tech */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="-mx-[var(--container-pad)] md:mx-0"
        >
          <div className="relative rounded-none md:rounded-2xl border-y md:border border-border bg-bg-card shadow-card py-5 md:py-6 overflow-hidden">
            <Marquee speed={45}>
              {allSkills.map((s, i) => {
                const accent = CATEGORY_ACCENTS[i % CATEGORY_ACCENTS.length];
                return (
                  <span
                    key={s}
                    data-accent={accent}
                    className="inline-flex items-center rounded-pill border bg-bg-raised px-4 py-2 text-[13.5px] font-medium text-fg whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      borderColor: "rgb(var(--accent-rgb) / 0.30)",
                    }}
                  >
                    <span
                      className="mr-2 h-1.5 w-1.5 rounded-full"
                      style={{
                        background: "rgb(var(--accent-rgb))",
                        boxShadow: "0 0 6px 0 rgb(var(--accent-rgb) / 0.7)",
                      }}
                    />
                    {s}
                  </span>
                );
              })}
            </Marquee>
          </div>
        </motion.div>

        {/* Categorized cards — each gets its own accent color */}
        <motion.div
          variants={stagger(0, 0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {config.skills.map((group, idx) => {
            const accent = CATEGORY_ACCENTS[idx % CATEGORY_ACCENTS.length];
            return (
              <motion.div
                key={group.category}
                variants={fadeUp}
                data-accent={accent}
              >
                <Spotlight as="div" className="card-pad h-full">
                  {/* Top accent strip */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgb(var(--accent-rgb) / 0.6), transparent)",
                    }}
                  />
                  <div className="relative z-[1]">
                    <div className="flex items-center justify-between">
                      <h3 className="eyebrow">{group.category}</h3>
                      <span
                        className="font-mono text-[10.5px] font-semibold"
                        style={{ color: "rgb(var(--accent-rgb) / 0.5)" }}
                      >
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="chip">
                          {item}
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
