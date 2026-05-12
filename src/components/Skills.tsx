"use client";

import { motion } from "framer-motion";
import SectionHeading, { type AccentName } from "./SectionHeading";
import Spotlight from "./Spotlight";
import Marquee from "./Marquee";
import { config } from "@/data/config";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

// Cohesive cool palette per category (one warm note avoided — reserved for Awards)
const CATEGORY_ACCENTS: AccentName[] = [
  "sky",      // Programming
  "emerald",  // Backend & Web
  "teal",     // Databases
  "blue",     // Data Science & AI
  "violet",   // NLP & LLMs
  "cyan",     // Deployment
  "teal",     // Fundamentals
];

// Bento column-spans on the lg 6-col grid (each row sums to 6)
const CATEGORY_SPANS = [
  "lg:col-span-2", // Programming
  "lg:col-span-2", // Backend & Web
  "lg:col-span-2", // Databases
  "lg:col-span-3", // Data Science & AI  ← wider (hero category)
  "lg:col-span-3", // NLP & LLMs         ← wider
  "lg:col-span-4", // Deployment         ← widest
  "lg:col-span-2", // Fundamentals
];

const MARQUEE_ACCENTS: AccentName[] = ["blue", "sky", "cyan", "teal", "violet"];

export default function Skills() {
  const allSkills = Array.from(new Set(config.skills.flatMap((g) => g.items)));

  return (
    <section id="skills" className="section" data-accent="cyan">
      <div className="container-x space-y-12 sm:space-y-16 md:space-y-24">
        <SectionHeading
          eyebrow="04 / Skills"
          title="Tools I work with"
          description="A snapshot of the languages, frameworks, and libraries I use day-to-day."
          watermark="04"
          accent="cyan"
        />

        {/* Marquee strip of every tech */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="-mx-[var(--container-pad)] md:mx-0"
        >
          <div className="relative overflow-hidden rounded-none border-y bg-bg-card py-5 shadow-card md:rounded-2xl md:border md:py-6 border-border">
            <Marquee speed={45}>
              {allSkills.map((s, i) => (
                <span
                  key={s}
                  data-accent={MARQUEE_ACCENTS[i % MARQUEE_ACCENTS.length]}
                  className="inline-flex items-center whitespace-nowrap rounded-pill border bg-bg-raised px-4 py-2 text-[13.5px] font-medium text-fg transition-all duration-300 hover:-translate-y-0.5"
                  style={{ borderColor: "rgb(var(--accent-rgb) / 0.30)" }}
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
              ))}
            </Marquee>
          </div>
        </motion.div>

        {/* Bento grid of categories — mixed-width cells */}
        <motion.div
          variants={stagger(0, 0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
        >
          {config.skills.map((group, idx) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              data-accent={CATEGORY_ACCENTS[idx % CATEGORY_ACCENTS.length]}
              className={CATEGORY_SPANS[idx] ?? "lg:col-span-2"}
            >
              <Spotlight as="div" className="h-full rounded-[18px] p-6 md:p-7">
                {/* Top accent strip */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgb(var(--accent-rgb) / 0.6), transparent)",
                  }}
                />
                <div className="relative z-[1] flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <h3 className="eyebrow">{group.category}</h3>
                    <span
                      className="font-mono text-[10.5px] font-semibold"
                      style={{ color: "rgb(var(--accent-rgb) / 0.55)" }}
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
