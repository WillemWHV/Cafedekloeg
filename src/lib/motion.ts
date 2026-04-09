import type { Transition, Variants } from "motion/react";

// Easing
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Springs
export const SPRING_GENTLE: Transition = { type: "spring", stiffness: 100, damping: 20 };
export const SPRING_SNAPPY: Transition = { type: "spring", stiffness: 300, damping: 25 };

// Durations
export const DURATION_NORMAL = 0.7;
export const DURATION_FAST = 0.4;

// Variants
export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION_NORMAL, ease: EASE_OUT_EXPO } },
};

export const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION_NORMAL, ease: EASE_OUT_EXPO } },
};

export const FADE_LEFT: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION_NORMAL, ease: EASE_OUT_EXPO } },
};

export const FADE_RIGHT: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION_NORMAL, ease: EASE_OUT_EXPO } },
};

export const STAGGER_CONTAINER: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const STAGGER_SLOW: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
