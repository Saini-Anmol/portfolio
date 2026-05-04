"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Send,
  FileText,
  Github,
  Linkedin,
  Mail,
  Code2,
  ExternalLink,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";

const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
  twitter: ExternalLink,
  mail: Mail,
  phone: Phone,
  external: ExternalLink,
} as const;
import { config } from "@/data/config";
import { easeOutExpo } from "@/lib/motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section relative overflow-hidden"
      data-accent="indigo"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 h-80 w-[36rem] rounded-full bg-accent-cyan/14 blur-[140px]" />
        <div className="absolute -top-32 right-1/4 h-80 w-[36rem] rounded-full bg-brand/18 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-60 w-[30rem] rounded-full bg-accent-pink/12 blur-[120px]" />
      </div>

      <div className="container-x space-y-12 sm:space-y-16 md:space-y-24">
        <SectionHeading
          eyebrow="07 / Contact"
          title="Let's build something"
          description="Open to interesting collaborations, talks, and tech conversations. Email is the fastest way to reach me."
          align="center"
          watermark="07"
          accent="indigo"
        />

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="mx-auto max-w-3xl"
        >
          <div className="card-glass relative overflow-hidden p-7 sm:p-10 md:p-16 text-center">
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-50" />
            {/* Animated gradient ring */}
            <div className="pointer-events-none absolute -inset-px rounded-xl opacity-60">
              <div
                className="absolute inset-0 rounded-xl animate-spin-slow [animation-duration:18s]"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, rgb(var(--brand) / 0.55) 25%, transparent 50%, rgb(236 72 153 / 0.45) 75%, transparent 100%)",
                }}
              />
            </div>

            <div className="relative">
              <p className="font-mono text-[11.5px] sm:text-[12px] uppercase tracking-[0.24em] text-fg-subtle">
                drop me a line
              </p>
              <a
                href={`mailto:${config.personal.email}`}
                className="mt-5 sm:mt-6 inline-block text-[20px] sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight gradient-text break-all leading-tight"
              >
                {config.personal.email}
              </a>

              <div className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[14px] sm:text-[15px] text-fg-muted">
                <span className="inline-flex items-center gap-2.5">
                  <Phone size={14} className="text-brand-light" />
                  {config.personal.phone}
                </span>
                <span className="hidden sm:inline-block h-3.5 w-px bg-border" />
                <span className="inline-flex items-center gap-2.5">
                  <MapPin size={14} className="text-brand-light" />
                  {config.personal.location}
                </span>
              </div>

              <div className="mt-9 sm:mt-12 flex flex-wrap items-center justify-center gap-3">
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

              {/* Social links — labeled & prominent */}
              <div className="mt-12 sm:mt-14">
                <p className="font-mono text-[11px] sm:text-[11.5px] uppercase tracking-[0.22em] text-fg-subtle mb-5">
                  also find me on
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                  {config.social.map((s) => {
                    const Icon = SOCIAL_ICONS[s.icon] ?? ExternalLink;
                    const isExternal = s.href.startsWith("http");
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="group/sl inline-flex items-center gap-2 rounded-pill border border-border bg-bg-card px-3.5 sm:px-4 py-2 text-[13px] font-medium text-fg-muted transition-all duration-300 ease-out-expo hover:border-brand/40 hover:text-fg hover:-translate-y-0.5 hover:shadow-soft hover:bg-brand/5"
                      >
                        <Icon
                          size={15}
                          strokeWidth={1.7}
                          className="text-brand-light transition-transform duration-300 group-hover/sl:scale-110"
                        />
                        <span>{s.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
