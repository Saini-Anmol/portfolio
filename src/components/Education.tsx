"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Spotlight from "./Spotlight";
import { config } from "@/data/config";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

type Item = {
  icon: React.ReactNode;
  title: string;
  org: string;
  meta?: string;
  detail?: string;
};

function Column({ items, eyebrow }: { items: Item[]; eyebrow: string }) {
  return (
    <div>
      <h3 className="eyebrow mb-7">{eyebrow}</h3>
      <motion.div
        variants={stagger(0, 0.09)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="space-y-5"
      >
        {items.map((item, idx) => (
          <motion.div key={item.title + idx} variants={fadeUp}>
            <Spotlight as="div" className="card-pad">
              <div className="relative z-[1] flex items-start gap-5 group/edu">
                <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand-bright shadow-inner-highlight transition-transform duration-300 ease-out-expo group-hover/edu:scale-110">
                  <span className="absolute inset-0 rounded-xl bg-brand-gradient-soft" />
                  <span className="relative">{item.icon}</span>
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[17px] md:text-[18px] font-bold text-fg leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[15px] text-brand-bright font-semibold">
                    {item.org}
                  </p>
                  {item.meta && (
                    <p className="mt-3 font-mono text-[11.5px] uppercase tracking-[0.18em] text-fg-subtle">
                      {item.meta}
                    </p>
                  )}
                  {item.detail && (
                    <p className="mt-2.5 text-[14.5px] text-fg-muted leading-relaxed text-pretty">
                      {item.detail}
                    </p>
                  )}
                </div>
              </div>
            </Spotlight>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Education() {
  const educationItems: Item[] = config.education.map((e) => ({
    icon: <GraduationCap size={20} strokeWidth={1.8} />,
    title: e.degree,
    org: e.institution,
    meta: [e.period, e.location].filter(Boolean).join("  ·  "),
    detail: e.score,
  }));

  const roleItems: Item[] = config.roles.map((r) => ({
    icon: <Users size={20} strokeWidth={1.8} />,
    title: r.title,
    org: r.org,
    detail: r.detail,
  }));

  return (
    <section id="education" className="section">
      <div className="container-x space-y-16 md:space-y-24">
        <SectionHeading
          eyebrow="06 / Education"
          title="Education & roles"
          description="Where I've studied, and the leadership roles I've taken on outside the classroom."
          watermark="06"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14">
          <Column items={educationItems} eyebrow="schooling" />
          <Column items={roleItems} eyebrow="leadership & activities" />
        </div>
      </div>
    </section>
  );
}
