"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Spotlight from "./Spotlight";
import Marquee from "./Marquee";
import { config } from "@/data/config";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function Skills() {
  // Flatten all skills for the marquee strip
  const allSkills = Array.from(
    new Set(config.skills.flatMap((g) => g.items))
  );

  return (
    <section id="skills" className="section">
      <div className="container-x space-y-16 md:space-y-24">
        <SectionHeading
          eyebrow="04 / Skills"
          title="Tools I work with"
          description="A snapshot of the languages, frameworks, and libraries I use day-to-day."
          watermark="04"
        />

        {/* Animated marquee of every tech */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="-mx-[var(--container-pad)] md:mx-0"
        >
          <div className="relative rounded-none md:rounded-2xl border-y md:border border-border-subtle bg-bg-card/40 backdrop-blur-sm py-5 md:py-6 overflow-hidden">
            <Marquee speed={45}>
              {allSkills.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-pill border border-border bg-bg-surface/60 px-4 py-2 text-[13.5px] font-medium text-fg whitespace-nowrap transition-colors hover:border-brand/40 hover:text-brand-bright"
                >
                  {s}
                </span>
              ))}
            </Marquee>
          </div>
        </motion.div>

        {/* Categorized cards */}
        <motion.div
          variants={stagger(0, 0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {config.skills.map((group, idx) => (
            <motion.div key={group.category} variants={fadeUp}>
              <Spotlight as="div" className="card-pad h-full">
                <div className="relative z-[1]">
                  <div className="flex items-center justify-between">
                    <h3 className="eyebrow">{group.category}</h3>
                    <span className="font-mono text-[10.5px] text-fg-faint">
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
