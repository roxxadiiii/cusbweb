"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface NewsCardProps {
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  href?: string;
}

export function NewsCard({ tag, date, title, excerpt, href = "#" }: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-base p-5 flex flex-col gap-3 group"
    >
      <div className="flex items-center gap-2">
        <span
          className="text-xs font-body font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md"
          style={{
            color: "rgb(var(--color-primary))",
            background: "rgba(var(--color-primary), 0.08)",
          }}
        >
          {tag}
        </span>
        <span className="text-xs text-muted font-body">{date}</span>
      </div>
      <h3 className="font-display font-semibold text-base leading-snug text-on-surface line-clamp-2">
        {title}
      </h3>
      <p className="text-sm text-muted font-body leading-relaxed line-clamp-2 flex-1">{excerpt}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-xs font-body font-semibold transition-standard group-hover:gap-2"
        style={{ color: "rgb(var(--color-primary))" }}
      >
        Read more <ArrowRight size={12} />
      </Link>
    </motion.article>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  icon: ReactNode;
  delay?: number;
}

export function StatCard({ value, label, icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-2 p-6 rounded-2xl text-center"
      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-1"
        style={{ background: "rgba(var(--color-secondary), 0.15)" }}
      >
        {icon}
      </div>
      <span className="font-display font-bold text-3xl text-white">{value}</span>
      <span className="text-xs font-body uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.55)" }}>
        {label}
      </span>
    </motion.div>
  );
}
