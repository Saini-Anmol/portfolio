"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Send, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SocialIcon from "./SocialIcon";
import Magnetic from "./Magnetic";
import { config } from "@/data/config";
import { easeOutExpo } from "@/lib/motion";

export default function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-brand/18 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 h-60 w-[30rem] rounded-full bg-accent-pink/10 blur-[120px]" />
      </div>

      <div className="container-x space-y-16 md:space-y-24">
        <SectionHeading
          eyebrow="07 / Contact"
          title="Let's build something"
          description="I'm currently open to internships, full-time roles, and interesting collaborations. The fastest way to reach me is email."
          align="center"
          watermark="07"
        />

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="mx-auto max-w-3xl"
        >
          <div className="card-glass relative overflow-hidden p-10 md:p-16 text-center">
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-50" />
            {/* Animated gradient ring */}
            <div className="pointer-events-none absolute -inset-px rounded-xl opacity-40">
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, rgba(99,102,241,0.5) 25%, transparent 50%, rgba(236,72,153,0.4) 75%, transparent 100%)",
                  animation: "gradient-pan 14s linear infinite",
                }}
              />
            </div>

            <div className="relative">
              <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-fg-subtle">
                drop me a line
              </p>
              <a
                href={`mailto:${config.personal.email}`}
                className="mt-6 inline-block display-md gradient-text break-all"
              >
                {config.personal.email}
              </a>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[15px] text-fg-muted">
                <span className="inline-flex items-center gap-2.5">
                  <Phone size={15} className="text-brand-light" />
                  {config.personal.phone}
                </span>
                <span className="hidden sm:inline-block h-3.5 w-px bg-border" />
                <span className="inline-flex items-center gap-2.5">
                  <MapPin size={15} className="text-brand-light" />
                  {config.personal.location}
                </span>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                <Magnetic strength={0.3}>
                  <a
                    href={`mailto:${config.personal.email}`}
                    className="btn-primary btn-lg group/cta"
                  >
                    <Send
                      size={16}
                      className="transition-transform duration-300 ease-out-expo group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                    />
                    Send a message
                  </a>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <a
                    href={config.personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary btn-lg"
                  >
                    <FileText size={16} />
                    View resume
                  </a>
                </Magnetic>
              </div>

              <div className="mt-14 flex items-center justify-center gap-3">
                {config.social.map((s) => (
                  <SocialIcon key={s.label} link={s} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
