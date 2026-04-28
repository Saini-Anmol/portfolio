"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Spotlight from "./Spotlight";
import { config } from "@/data/config";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x space-y-16 md:space-y-24">
        <SectionHeading
          eyebrow="02 / Experience"
          title="Where I've worked"
          description="Roles where I've shipped real systems and learned from talented teams."
          watermark="02"
        />

        <motion.div
          variants={stagger(0, 0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          <span
            aria-hidden
            className="absolute left-[23px] top-3 bottom-3 w-px bg-gradient-to-b from-brand via-border to-transparent"
          />

          <ul className="space-y-7 md:space-y-9">
            {config.experience.map((item, idx) => (
              <motion.li
                key={`${item.org}-${idx}`}
                variants={fadeUp}
                className="relative pl-16 md:pl-24"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-card shadow-inner-highlight"
                >
                  <span className="absolute inset-0 rounded-xl bg-brand-gradient-soft" />
                  <Briefcase
                    size={17}
                    strokeWidth={1.8}
                    className="relative text-brand-bright"
                  />
                </span>

                <Spotlight as="article" className="card-pad">
                  <div className="relative z-[1]">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="text-h2 font-bold text-fg leading-tight">
                          {item.role}
                        </h3>
                        <p className="mt-2 text-[16px] text-brand-bright font-semibold">
                          {item.org}
                        </p>
                      </div>
                      <div className="text-left sm:text-right shrink-0 space-y-1.5">
                        <div className="font-mono text-[12px] text-fg-subtle uppercase tracking-[0.18em]">
                          {item.period}
                        </div>
                        {item.location && (
                          <p className="flex sm:justify-end items-center gap-1.5 text-[12.5px] text-fg-subtle">
                            <MapPin size={12} /> {item.location}
                          </p>
                        )}
                      </div>
                    </div>

                    <ul className="mt-7 space-y-3.5">
                      {item.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-[15.5px] md:text-[16.5px] text-fg-muted leading-[1.7]"
                        >
                          <span className="bullet" />
                          <span className="text-pretty">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {item.tech && item.tech.length > 0 && (
                      <div className="mt-7 flex flex-wrap gap-1.5">
                        {item.tech.map((t) => (
                          <span key={t} className="chip-brand">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Spotlight>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
