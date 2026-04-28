"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { config } from "@/data/config";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x space-y-16 md:space-y-24">
        <SectionHeading
          eyebrow="01 / About"
          title={config.about.heading}
          watermark="01"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            variants={stagger(0, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-7 space-y-7"
          >
            {config.about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className={`text-pretty leading-[1.75] ${
                  i === 0
                    ? "text-fg text-[19px] md:text-[22px] font-light"
                    : "text-fg-muted text-[16.5px] md:text-[18px]"
                }`}
              >
                {p}
              </motion.p>
            ))}
          </motion.div>

          {config.theme.showQuickFacts && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="card-glass card-pad lg:sticky lg:top-28 relative overflow-hidden">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-brand/15 blur-3xl"
                />
                <div className="relative">
                  <p className="eyebrow">quick facts</p>
                  <ul className="mt-7 space-y-0">
                    {config.about.quickFacts.map((f, i) => (
                      <motion.li
                        key={f.label}
                        initial={{ opacity: 0, x: 8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportOnce}
                        transition={{
                          delay: 0.2 + i * 0.08,
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`flex items-start justify-between gap-4 py-4 ${
                          i !== config.about.quickFacts.length - 1
                            ? "border-b border-border-subtle"
                            : ""
                        }`}
                      >
                        <span className="text-[12px] font-mono uppercase tracking-[0.16em] text-fg-subtle">
                          {f.label}
                        </span>
                        <span className="text-[15px] text-fg text-right font-medium">
                          {f.value}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
