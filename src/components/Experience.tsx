"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Spotlight from "./Spotlight";
import { config } from "@/data/config";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="section" data-accent="emerald">
      <div className="container-x space-y-12 sm:space-y-16 md:space-y-24">
        <SectionHeading
          eyebrow="02 / Experience"
          title="Where I work"
          description="Roles where I've shipped real systems and learned from talented teams."
          watermark="02"
          accent="emerald"
        />

        <motion.div
          variants={stagger(0, 0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          {/* Timeline rail */}
          <span
            aria-hidden
            className="absolute left-[19px] sm:left-[23px] top-3 bottom-3 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgb(var(--accent-rgb)) 0%, rgb(var(--border)) 60%, transparent 100%)",
            }}
          />

          <ul className="space-y-6 sm:space-y-8">
            {config.experience.map((item, idx) => (
              <motion.li
                key={`${item.org}-${idx}`}
                variants={fadeUp}
                className="relative pl-12 sm:pl-16 md:pl-24"
                data-accent={item.current ? "emerald" : "indigo"}
              >
                <span
                  aria-hidden
                  className="icon-orb absolute left-0 top-3 h-10 w-10 sm:h-12 sm:w-12"
                >
                  <Briefcase size={15} strokeWidth={1.8} className="relative" />
                  {item.current && (
                    <span className="absolute -right-1 -top-1 inline-flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-accent-emerald animate-ping opacity-70" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-emerald border-2 border-bg" />
                    </span>
                  )}
                </span>

                <Spotlight as="article" className="card-pad">
                  <div className="relative z-[1]">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-[18px] sm:text-h2 font-bold text-fg leading-tight">
                            {item.role}
                          </h3>
                          {item.current && (
                            <span className="inline-flex items-center gap-1 rounded-full border border-accent-emerald/40 bg-accent-emerald/10 px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-accent-emerald">
                              <span className="h-1 w-1 rounded-full bg-accent-emerald" />
                              Current
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-[15px] sm:text-[16px] text-accent font-semibold">
                          {item.org}
                        </p>
                      </div>
                      <div className="text-left sm:text-right shrink-0 space-y-1">
                        <div className="font-mono text-[11px] sm:text-[12px] text-fg-subtle uppercase tracking-[0.16em] sm:tracking-[0.18em]">
                          {item.period}
                        </div>
                        {item.location && (
                          <p className="flex sm:justify-end items-center gap-1.5 text-[11.5px] sm:text-[12.5px] text-fg-subtle">
                            <MapPin size={11} /> {item.location}
                          </p>
                        )}
                      </div>
                    </div>

                    <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
                      {item.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-[14px] sm:text-[15.5px] md:text-[16.5px] text-fg-muted leading-[1.65]"
                        >
                          <span className="bullet" />
                          <span className="text-pretty">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {item.tech && item.tech.length > 0 && (
                      <div className="mt-5 sm:mt-6 flex flex-wrap gap-1.5">
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
