"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  children,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
      className={`mb-10 ${align === "center" ? "text-center" : ""}`}
    >
      {label && (
        <span
          className="inline-block text-xs font-body font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
          style={{
            color: "rgb(var(--color-primary))",
            background: "rgba(var(--color-primary), 0.08)",
            border: "1px solid rgba(var(--color-primary), 0.15)",
          }}
        >
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-surface leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-muted font-body max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}
