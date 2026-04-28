"use client";

import { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Site-wide colorful ambient background.
 * Five gradient orbs in distinct hues, parallax with scroll, slow drifting.
 */
export default function AmbientBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 2000], [0, -240]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -420]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -160]);
  const y4 = useTransform(scrollY, [0, 2000], [0, -300]);
  const y5 = useTransform(scrollY, [0, 2000], [0, -200]);

  const stars = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => ({
        left: ((i * 37.7) % 100).toFixed(2),
        top: ((i * 53.3) % 100).toFixed(2),
        delay: (i * 0.27) % 4,
        size: 1 + ((i * 7) % 3),
      })),
    []
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-40 overflow-hidden"
    >
      {/* Top aurora beam */}
      <div className="absolute inset-x-0 top-0 h-[2px] overflow-hidden">
        <div
          className="absolute inset-y-0 w-[160%] -left-1/3 animate-aurora-pan"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #06b6d4 20%, #6366f1 40%, #ec4899 60%, #f59e0b 80%, transparent 100%)",
            filter: "blur(0.5px)",
          }}
        />
      </div>

      {/* Aurora glow under the beam */}
      <div
        className="absolute inset-x-0 top-0 h-40 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(99,102,241,0.20), transparent 70%)",
        }}
      />

      {/* 5 colorful floating orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[10%] -left-[10%] h-[34rem] w-[34rem] rounded-full blur-[130px] animate-float-slow"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.35), transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-[35%] -right-[8%] h-[30rem] w-[30rem] rounded-full blur-[130px] animate-float-slow [animation-delay:-7s]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.22), transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute top-[60%] left-[35%] h-[24rem] w-[24rem] rounded-full blur-[110px] animate-float-slow [animation-delay:-3s]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.22), transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y4 }}
        className="absolute top-[78%] -left-[5%] h-[26rem] w-[26rem] rounded-full blur-[120px] animate-float-slow [animation-delay:-11s]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.18), transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y5 }}
        className="absolute top-[20%] right-[35%] h-[22rem] w-[22rem] rounded-full blur-[110px] animate-float-slow [animation-delay:-14s]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245, 158, 11, 0.16), transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y1 }}
        className="absolute top-[45%] left-[55%] h-[20rem] w-[20rem] rounded-full blur-[100px] animate-float-slow [animation-delay:-9s]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.20), transparent 70%)",
          }}
        />
      </motion.div>

      {/* Twinkling stars — only visible in dark theme */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              boxShadow: "0 0 6px rgba(255,255,255,0.6)",
            }}
          />
        ))}
      </div>

      {/* Grid with radial mask */}
      <div className="absolute inset-0 grid-pattern mask-radial opacity-50" />
    </div>
  );
}
