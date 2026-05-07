import React from "react";
import { motion } from "motion/react";

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Card({
  children,
  className = "",
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl bg-white/80 border border-[#0066FF]/10 overflow-hidden shadow-[0_4px_20px_rgba(0,102,255,0.03)]
      ${hover ? "transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_10px_30px_rgba(0,102,255,0.08)] hover:border-[#0066FF]/30" : ""}
      ${className}`}
    >
      {/* Subtle top glare effect like Longevity */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />
      {children}
    </div>
  );
}

export function Button({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#0066FF] to-[#00E5FF] px-8 py-4 font-bold text-white shadow-[0_8px_20px_rgba(0,102,255,0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_25px_rgba(0,229,255,0.35)] ${className}`}
    >
      {children}
      <div className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10 pointer-events-none" />
    </button>
  );
}

export function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <FadeIn className="text-center mb-16 mx-auto max-w-[750px]">
      <h2 className="text-4xl md:text-[52px] font-bold text-[#0A102E] mb-6 leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#4A5578] leading-relaxed font-light">{subtitle}</p>
      )}
    </FadeIn>
  );
}

export function SectionDivider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#0066FF]/15 to-transparent my-16 md:my-24" />
  );
}
