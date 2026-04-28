"use client";

import { motion } from "framer-motion";
import { Award, ArrowUpRight, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Spotlight from "./Spotlight";
import { config } from "@/data/config";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container-x space-y-16 md:space-y-24">
        <SectionHeading
          eyebrow="05 / Achievements"
          title="Recognitions"
          description="Wins, finals, and milestones that shaped my journey so far."
          watermark="05"
        />

        <motion.div
          variants={stagger(0, 0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {config.achievements.map((a, idx) => {
            const Icon = idx === 0 ? Trophy : Award;
            const Wrapper: any = a.href ? "a" : "div";
            const linkProps = a.href
              ? { href: a.href, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <motion.div key={a.title} variants={fadeUp}>
                <Spotlight as="div" className="card-pad">
                  <Wrapper
                    {...linkProps}
                    className={`group/ach relative z-[1] flex items-start gap-5 ${
                      a.href ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand-bright shadow-inner-highlight transition-transform duration-300 ease-out-expo group-hover/ach:scale-110 group-hover/ach:rotate-[-6deg]">
                      <span className="absolute inset-0 rounded-xl bg-brand-gradient-soft" />
                      <Icon size={20} strokeWidth={1.7} className="relative" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-[17px] md:text-[18px] font-bold text-fg leading-snug transition-colors group-hover/ach:text-brand-bright">
                          {a.title}
                        </h3>
                        {a.href && (
                          <ArrowUpRight
                            size={17}
                            className="shrink-0 text-fg-subtle transition-all duration-300 ease-out-expo group-hover/ach:text-brand-bright group-hover/ach:rotate-45"
                          />
                        )}
                      </div>
                      <p className="mt-2 text-[15px] text-fg-muted leading-relaxed text-pretty">
                        {a.detail}
                      </p>
                      {a.date && (
                        <p className="mt-3.5 font-mono text-[11.5px] uppercase tracking-[0.18em] text-fg-subtle">
                          {a.date}
                        </p>
                      )}
                    </div>
                  </Wrapper>
                </Spotlight>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
