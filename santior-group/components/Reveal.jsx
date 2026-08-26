"use client";

import { motion } from "framer-motion";

/**
 * Fades + lifts children into place once they scroll into view.
 * Wraps a single block-level element; pass `as` to change the tag.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  duration = 0.6,
  className = "",
  once = true,
  amount = 0.2,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container: give each direct motion child a `variants={item}` prop's parent this. */
export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
