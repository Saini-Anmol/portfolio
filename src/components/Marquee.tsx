"use client";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  speed?: number; // seconds for one full loop (lower = faster)
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
};

/**
 * Infinite horizontal scroller. Duplicates children so the loop is seamless.
 * Edges are masked with a fade for a polished look.
 */
export default function Marquee({
  children,
  speed = 30,
  reverse = false,
  pauseOnHover = true,
  className = "",
}: Props) {
  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className={`flex w-max ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        <div className="flex shrink-0 items-center gap-3 pr-3">{children}</div>
        <div className="flex shrink-0 items-center gap-3 pr-3" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
