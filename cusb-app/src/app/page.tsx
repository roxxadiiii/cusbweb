"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Users,
  BookOpen,
  Award,
  ChevronRight,
  Download,
  Bell,
  Calendar,
  Briefcase,
  Newspaper,
  FlaskConical,
  Globe,
  Building2,
  Leaf,
} from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { NewsCard, StatCard } from "@/components/Cards";

/* ─── Data ─────────────────────────────────────────── */
const stats = [
  { value: "4,100+", label: "Students", icon: <GraduationCap size={20} style={{ color: "rgb(var(--color-secondary))" }} />, delay: 0 },
  { value: "120+", label: "Faculty", icon: <Users size={20} style={{ color: "rgb(var(--color-secondary))" }} />, delay: 0.1 },
  { value: "51+", label: "Programmes", icon: <BookOpen size={20} style={{ color: "rgb(var(--color-secondary))" }} />, delay: 0.2 },
  { value: "12,000+", label: "Alumni", icon: <Award size={20} style={{ color: "rgb(var(--color-secondary))" }} />, delay: 0.3 },
];

const newsTabs = ["Recent Events", "Tenders", "Recruitment", "Updates"] as const;
type NewsTab = typeof newsTabs[number];

const newsData: Record<NewsTab, { tag: string; date: string; title: string; excerpt: string }[]> = {
  "Recent Events": [
    { tag: "Event", date: "Mar 22, 2026", title: "AISINCA National Conference on Artificial Intelligence", excerpt: "Faculty and students represented CUSB at the national AI conference held at the main campus auditorium." },
    { tag: "Event", date: "Mar 15, 2026", title: "Foundation Day Celebration — 17th Anniversary", excerpt: "The university celebrated its 17th foundation day with cultural programmes, prizes, and an address from the Hon'ble Chancellor." },
    { tag: "Event", date: "Mar 5, 2026", title: "Inter-University Sports Meet 2026", excerpt: "CUSB athletes won 8 gold medals at the Eastern Zone Inter-University Sports Championship held in Patna." },
  ],
  "Tenders": [
    { tag: "Tender", date: "Mar 25, 2026", title: "Tender for Construction of Boys Hostel Block-3", excerpt: "Sealed bids are invited from eligible contractors for the construction of Boys Hostel Block-3 at CUSB Panchanpur Campus." },
    { tag: "Tender", date: "Mar 18, 2026", title: "Annual Maintenance Contract for CCTV Systems", excerpt: "The university invites quotations for AMC of CCTV surveillance systems across campus buildings." },
    { tag: "Tender", date: "Mar 10, 2026", title: "Supply of Laboratory Equipment — Chemistry Dept.", excerpt: "Tenders are invited for supply and installation of advanced laboratory equipment for the Department of Chemistry." },
  ],
  "Recruitment": [
    { tag: "Job", date: "Mar 23, 2026", title: "Assistant Professor Positions — Multiple Departments", excerpt: "CUSB invites applications for Assistant Professor posts in Physics, Chemistry, Mathematics, English and Social Sciences." },
    { tag: "Job", date: "Mar 17, 2026", title: "Non-Teaching Staff Recruitment 2026", excerpt: "Applications are invited for various Group-B and Group-C non-teaching positions. Last date: April 15, 2026." },
    { tag: "Job", date: "Mar 8, 2026", title: "Research Associate Positions — DBT Funded Project", excerpt: "Walk-in interview for Research Associate positions under a DBT-funded project on Environmental Genomics." },
  ],
  "Updates": [
    { tag: "Notice", date: "Mar 26, 2026", title: "CUET-PG 2026 Admission Bulletin Now Available", excerpt: "The admission bulletin for CUET-PG 2026 has been published. Refer to the NTA website for the complete schedule." },
    { tag: "Notice", date: "Mar 20, 2026", title: "Revised Academic Calendar 2025–26", excerpt: "The revised academic calendar for the current session has been approved by the Academic Council." },
    { tag: "Notice", date: "Mar 12, 2026", title: "Anti-Ragging Pledge — All Students Mandatory", excerpt: "All enrolled students are required to fill and submit the anti-ragging undertaking on the UGC portal before March 31." },
  ],
};

const departments = [
  { name: "School of Earth, Biological & Environmental Sciences", short: "SEBES", icon: <Leaf size={22} />, colour: "#22c55e", programmes: ["B.Sc.", "M.Sc.", "Ph.D."] },
  { name: "School of Social Sciences & Policy", short: "SSSP", icon: <Globe size={22} />, colour: "#3b82f6", programmes: ["M.A.", "M.Sc.", "Ph.D."] },
  { name: "School of Education", short: "SOE", icon: <BookOpen size={22} />, colour: "#f59e0b", programmes: ["M.Ed.", "Ph.D."] },
  { name: "School of Commerce & Management Studies", short: "SCMS", icon: <Briefcase size={22} />, colour: "#8b5cf6", programmes: ["MBA", "M.Com.", "Ph.D."] },
  { name: "School of Language, Literature & Culture", short: "SLLC", icon: <Newspaper size={22} />, colour: "#ec4899", programmes: ["M.A.", "Ph.D."] },
  { name: "School of Mathematical Sciences", short: "SMS", icon: <FlaskConical size={22} />, colour: "#14b8a6", programmes: ["M.Sc.", "Ph.D."] },
];

const quickLinks = [
  { label: "Download Forms", icon: <Download size={16} />, href: "#" },
  { label: "Academic Notices", icon: <Bell size={16} />, href: "#" },
  { label: "Upcoming Events", icon: <Calendar size={16} />, href: "/news" },
  { label: "Recruitment", icon: <Briefcase size={16} />, href: "/news" },
  { label: "Faculty Directory", icon: <Users size={16} />, href: "/faculty" },
  { label: "Administration", icon: <Building2 size={16} />, href: "#" },
];

/* ─── Page ─────────────────────────────────────────── */
export default function HomePage() {
  const [activeTab, setActiveTab] = useState<NewsTab>("Recent Events");

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "rgb(var(--color-primary))" }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(245,158,11,0.4) 0%, transparent 40%)`,
          }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container-site relative z-10 pt-24 pb-20 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span
              className="inline-block text-xs font-body font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(245,158,11,0.15)",
                border: "1px solid rgba(245,158,11,0.3)",
                color: "rgb(var(--color-secondary))",
              }}
            >
              UGC Category I University · Est. 2009
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
          >
            Collective
            <br />
            <span style={{ color: "rgb(var(--color-secondary))" }}>Reasoning.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl font-body max-w-2xl mx-auto leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Central University of South Bihar — nurturing knowledge, research,
            and innovation on a 300-acre campus in Panchanpur, Gaya.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/academics"
              id="hero-explore-btn"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: "white", color: "rgb(var(--color-primary))" }}
            >
              Explore Programmes <ArrowRight size={16} />
            </Link>
            <Link
              href="/admissions"
              id="hero-apply-btn"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(245,158,11,0.15)",
                border: "1px solid rgba(245,158,11,0.4)",
                color: "rgb(var(--color-secondary))",
              }}
            >
              Apply via CUET <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-body uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-0.5 h-8 rounded-full"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />
        </motion.div>
      </section>

      {/* ── STATS BAR ────────────────────────────────── */}
      <section
        id="stats"
        className="py-12"
        style={{ background: "rgb(var(--color-primary-light))" }}
      >
        <div className="container-site grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* ── ABOUT SNIPPET ────────────────────────────── */}
      <section id="about-snippet" className="section-padding bg-surface">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              label="About CUSB"
              title="A Central University Built on Vision & Excellence"
              subtitle="Central University of South Bihar, Gaya, India, is one among 54 central universities of the Federal Government, established under the Central Universities Act, 2009 as a UGC Category I University."
            />
            <p className="text-muted font-body text-sm leading-relaxed mb-8">
              Located on a pristine 300-acre campus at Panchanpur, the university offers multidisciplinary programmes, world-class faculty, and a vibrant student community. Our motto <strong>&quot;Collective Reasoning&quot;</strong> reflects our commitment to collaborative inquiry and innovative pedagogy.
            </p>
            <Link
              href="/about"
              id="about-learn-more"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-semibold text-sm text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{ background: "rgb(var(--color-primary))" }}
            >
              Learn More <ArrowRight size={15} />
            </Link>
          </div>

          {/* Visual card stack */}
          <div className="relative h-80 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, rotate: -3, y: 20 }}
              whileInView={{ opacity: 1, rotate: -3, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 rounded-2xl"
              style={{ background: "rgba(var(--color-primary), 0.08)", border: "1px solid rgba(var(--color-primary), 0.12)" }}
            />
            <motion.div
              initial={{ opacity: 0, rotate: 1.5, y: 10 }}
              whileInView={{ opacity: 1, rotate: 1.5, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute inset-2 rounded-2xl"
              style={{ background: "rgba(var(--color-primary), 0.05)", border: "1px solid rgba(var(--color-primary), 0.08)" }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute inset-4 rounded-2xl p-8 flex flex-col justify-between bg-card border-surface shadow-card"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-display font-bold text-xl"
                  style={{ background: "rgb(var(--color-primary))" }}>C</div>
                <div>
                  <div className="font-display font-bold text-primary text-sm">CUSB</div>
                  <div className="text-xs text-muted">Panchanpur, Gaya</div>
                </div>
              </div>
              <div className="space-y-3">
                {["300-acre Campus", "NAAC Accredited", "UGC Category I"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgb(var(--color-secondary))" }} />
                    <span className="text-sm font-body text-muted">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-3xl font-display font-bold" style={{ color: "rgb(var(--color-primary))" }}>
                Est. 2009
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS ──────────────────────────────── */}
      <section id="latest" className="section-padding bg-surface-2">
        <div className="container-site">
          <SectionHeading label="Stay Updated" title="Latest @ CUSB" />

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8" role="tablist">
            {newsTabs.map((tab) => (
              <button
                key={tab}
                id={`tab-${tab.toLowerCase().replace(/\s/g, "-")}`}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 cursor-pointer"
                style={
                  activeTab === tab
                    ? { background: "rgb(var(--color-primary))", color: "white" }
                    : {
                        background: "rgb(var(--color-card))",
                        color: "rgb(var(--color-on-surface-muted))",
                        border: "1px solid rgb(var(--color-border))",
                      }
                }
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {newsData[activeTab].map((item, i) => (
              <NewsCard key={i} {...item} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/news"
              id="view-all-news"
              className="inline-flex items-center gap-2 text-sm font-body font-semibold transition-standard hover:gap-3"
              style={{ color: "rgb(var(--color-primary))" }}
            >
              View all updates <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── DEPARTMENTS ──────────────────────────────── */}
      <section id="departments" className="section-padding bg-surface">
        <div className="container-site">
          <div className="flex items-end justify-between mb-10">
            <SectionHeading
              label="Academic Schools"
              title="Schools & Departments"
              subtitle="Explore our multidisciplinary schools offering undergraduate, postgraduate and doctoral programmes."
            />
            <Link
              href="/academics"
              id="all-departments"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-body font-semibold text-primary transition-standard hover:gap-2 flex-shrink-0 mb-10"
              style={{ color: "rgb(var(--color-primary))" }}
            >
              All Schools <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.short}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-base p-6 group cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-standard group-hover:scale-110"
                  style={{ background: `${dept.colour}18`, color: dept.colour }}
                >
                  {dept.icon}
                </div>
                <div className="text-xs font-body font-bold uppercase tracking-widest mb-1" style={{ color: dept.colour }}>
                  {dept.short}
                </div>
                <h3 className="font-display font-semibold text-sm text-on-surface leading-snug mb-3">
                  {dept.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {dept.programmes.map((p) => (
                    <span
                      key={p}
                      className="text-xs font-body px-2 py-0.5 rounded-md"
                      style={{ background: "rgb(var(--color-surface-2))", color: "rgb(var(--color-on-surface-muted))" }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ──────────────────────────────── */}
      <section
        id="quick-links"
        className="py-12"
        style={{ background: "rgb(var(--color-surface-2))" }}
      >
        <div className="container-site">
          <h2 className="font-display font-bold text-lg text-on-surface mb-6">Quick Links</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                id={`quicklink-home-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card-base flex flex-col items-center gap-2 p-4 text-center group cursor-pointer"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-standard group-hover:scale-110"
                  style={{ background: "rgba(var(--color-primary), 0.08)", color: "rgb(var(--color-primary))" }}
                >
                  {link.icon}
                </div>
                <span className="text-xs font-body font-medium text-on-surface leading-tight">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section
        id="cta-banner"
        className="py-20"
        style={{ background: "rgb(var(--color-primary))" }}
      >
        <div className="container-site text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-body uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              CUET-Based Admissions 2026
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-base font-body max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Apply to CUSB through CUET and join thousands of students pursuing excellence across sciences, humanities, management and more.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/admissions"
                id="cta-apply-now"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{ background: "rgb(var(--color-secondary))", color: "#0f1117" }}
              >
                Apply Now <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                id="cta-learn-more"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-semibold text-sm border transition-all duration-300 hover:scale-105"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
