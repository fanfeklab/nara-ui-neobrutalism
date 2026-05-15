import { motion } from "motion/react";
import React from "react";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.15 } }}
      transition={{
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1], // Snappy Neo-Brutalism feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
