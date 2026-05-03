"use client";

import { motion } from "framer-motion";
import { Award, ArrowUpRight, Trophy, Medal, Star } from "lucide-react";
import SectionHeading, { type AccentName } from "./SectionHeading";
import Spotlight from "./Spotlight";
import { config } from "@/data/config";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

// Each achievement gets its own color + icon
const ACHIEVEMENT_THEMES: { accent: AccentName; Icon: typeof Trophy }[] = [
  { accent: "amber", Icon: Trophy },   // SIH 2024 Win — gold
  { accent: "violet", Icon: Award },   // DPBH '23 Finalist
  { accent: "emerald", Icon: Medal },  // RBI90 State Finalist
  { accent: "cyan", Icon: Star },      // IIT JEE Advanced
];

export default function Achievements() {
  return (
    <section id="achievements" className="section" data-accent="amber">
      <div className="container-x space-y-12 sm:space-y-16 md:space-y-24">
        <SectionHeading
          eyebrow="05 / Achievements"
          title="Recognitions"
          description="Wins, finals, and milestones that shaped my journey so far."
          watermark="05"
          accent="amber"
        />

        <motion.div
          variants={stagger(0, 0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {config.achievements.map((a, idx) => {
            const theme =
              ACHIEVEMENT_THEMES[idx % ACHIEVEMENT_THEMES.length];
            const Icon = theme.Icon;
            const Wrapper: any = a.href ? "a" : "div";
            const linkProps = a.href
              ? { href: a.href, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <motion.div
                key={a.title}
                variants={fadeUp}
                data-accent={theme.accent}
              >
                <Spotlight as="div" className="card-pad">
                  <Wrapper
                    {...linkProps}
                    className={`group/ach relative z-[1] flex items-start gap-5 ${
                      a.href ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <span className="icon-orb h-12 w-12 transition-transform duration-300 ease-out-expo group-hover/ach:scale-110 group-hover/ach:rotate-[-6deg]">
                      <Icon size={20} strokeWidth={1.7} className="relative" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-[17px] md:text-[18px] font-bold text-fg leading-snug transition-colors group-hover/ach:text-accent">
                          {a.title}
                        </h3>
                        {a.href && (
                          <ArrowUpRight
                            size={17}
                            className="shrink-0 text-fg-subtle transition-all duration-300 ease-out-expo group-hover/ach:text-accent group-hover/ach:rotate-45"
                          />
                        )}
                      </div>
                      <p className="mt-2 text-[15px] text-fg-muted leading-relaxed text-pretty">
                        {a.detail}
                      </p>
                      {a.date && (
                        <p className="mt-3.5 font-mono text-[11.5px] uppercase tracking-[0.18em] text-accent">
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
