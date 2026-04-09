"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { EASE_OUT_EXPO, DURATION_NORMAL } from "@/lib/motion";

interface MotionRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}

const offsets = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: -30 },
  right: { x: 30 },
};

export default function MotionReveal({
  children,
  direction = "up",
  delay = 0,
  duration = DURATION_NORMAL,
  once = true,
  amount = 0.15,
  className,
}: MotionRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = offsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
