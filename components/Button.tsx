"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center h-14 px-7 rounded-full font-medium text-base transition-colors cursor-pointer";

  const variants = {
    primary: "bg-white text-primary-black hover:bg-gray-100",
    secondary: "bg-transparent border border-white/15 hover:bg-white/5",
    ghost: "bg-transparent hover:bg-white/5",
  };

  const motionProps = {
    whileHover: { scale: 1.04, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}