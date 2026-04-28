"use client";

import { useRef, type MouseEvent, type ReactNode, type ElementType } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  as?: ElementType;
  className?: string;
  tilt?: boolean;
  tiltIntensity?: number; // degrees
  children: ReactNode;
};

/**
 * Mouse-tracked spotlight container.
 * - Sets CSS vars --mx / --my consumed by .spotlight class for the radial glow.
 * - Optional 3D tilt that follows the cursor.
 */
export default function Spotlight({
  as: Tag = "div",
  className = "",
  tilt = false,
  tiltIntensity = 6,
  children,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [0, 1], [tiltIntensity, -tiltIntensity]), {
    stiffness: 220,
    damping: 22,
    mass: 0.4,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-tiltIntensity, tiltIntensity]), {
    stiffness: 220,
    damping: 22,
    mass: 0.4,
  });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${xPct * 100}%`);
    el.style.setProperty("--my", `${yPct * 100}%`);
    if (tilt) {
      mx.set(xPct);
      my.set(yPct);
    }
  };

  const handleLeave = () => {
    if (tilt) {
      mx.set(0.5);
      my.set(0.5);
    }
  };

  if (!tilt) {
    return (
      <Tag
        ref={ref as never}
        onMouseMove={handleMove}
        className={`spotlight ${className}`}
      >
        {children}
      </Tag>
    );
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="will-change-transform"
    >
      <Tag
        ref={ref as never}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`spotlight ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
