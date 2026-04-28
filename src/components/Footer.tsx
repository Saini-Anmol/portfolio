"use client";

import { ArrowUp, Heart } from "lucide-react";
import { config } from "@/data/config";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border-subtle">
      <div className="container-x py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <p className="font-mono text-[12.5px] text-fg-muted">
              © {year}{" "}
              <span className="text-fg font-medium">{config.personal.name}</span>
              <span className="mx-2 text-fg-faint">·</span>
              <span className="text-fg-subtle">All rights reserved</span>
            </p>
            <p className="font-mono text-[11px] text-fg-subtle inline-flex items-center gap-1.5">
              Designed & built with
              <Heart size={11} className="text-accent-pink fill-accent-pink" />
              using Next.js + Tailwind
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {config.social.map((s) => (
                <SocialIcon key={s.label} link={s} size={15} />
              ))}
            </div>
            <span className="h-6 w-px bg-border" />
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-bg-card/60 backdrop-blur-sm px-3.5 py-2 text-[12px] font-medium text-fg-muted transition-all duration-300 hover:border-brand/40 hover:text-brand-bright hover:-translate-y-0.5"
            >
              <ArrowUp size={12} strokeWidth={2.2} />
              Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
