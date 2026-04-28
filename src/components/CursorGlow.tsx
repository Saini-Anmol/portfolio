"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Soft glow halo that follows the cursor — subtle full-page accent.
 * Hidden on touch devices (no fine pointer).
 */
export default function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);

  const sx = useSpring(x, { stiffness: 80, damping: 25, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 80, damping: 25, mass: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onLeave = () => {
      x.set(-500);
      y.set(-500);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(closest-side, rgb(var(--brand) / 0.10), transparent 70%)",
      }}
      className="pointer-events-none fixed -left-[300px] -top-[300px] -z-30 h-[600px] w-[600px] rounded-full hidden md:block"
    />
  );
}
