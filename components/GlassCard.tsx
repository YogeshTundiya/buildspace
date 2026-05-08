"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`glass-card rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}