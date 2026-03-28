"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, FlaskConical, Microscope, Globe, BookOpen, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

const researchAreas = [
  { icon: <Microscope size={24} />, colour: "#22c55e", title: "Environmental & Biological Sciences", desc: "Research on ecology, biodiversity, pollution control, and sustainable development across the Gangetic plains." },
  { icon: <Globe size={24} />, colour: "#3b82f6", title: "Social Sciences & Policy Studies", desc: "Interdisciplinary research on development economics, public policy, gender studies, and rural sociology." },
  { icon: <FlaskConical size={24} />, colour: "#f59e0b", title: "Mathematical & Computational Sciences", desc: "Pure and applied mathematics, statistical modelling, data science, and machine learning research." },
  { icon: <BookOpen size={24} />, colour: "#ec4899", title: "Language, Literature & Culture", desc: "Research in Hindi, English, and classical languages with focus on folk culture and regional dialects." },
  { icon: <Users size={24} />, colour: "#8b5cf6", title: "Education Research", desc: "Curriculum development, educational psychology, inclusive education, and pedagogy research." },
  { icon: <TrendingUp size={24} />, colour: "#f97316", title: "Commerce & Management", desc: "Research in financial markets, rural entrepreneurship, supply chain, and business management." },
];

const fundedProjects = [
  { agency: "DST", title: "Climate Data Analysis for Bihar Region", pi: "Prof. Amit Kumar Verma", amount: "₹42 Lakhs", year: "2024–2027" },
  { agency: "DBT", title: "Environmental Genomics and Microbial Diversity", pi: "Prof. Chandrika Yadav", amount: "₹35 Lakhs", year: "2023–2026" },
  { agency: "ICSSR", title: "Inclusive Growth & Rural Livelihood in Bihar", pi: "Dr. Priya Ranjan Singh", amount: "₹18 Lakhs", year: "2024–2026" },
  { agency: "UGC", title: "Digital Literacy and Education in Aspirational Districts", pi: "Prof. Sunita Devi", amount: "₹12 Lakhs", year: "2023–2025" },
];

const agencyColours: Record<string, string> = {
  DST: "#3b82f6", DBT: "#22c55e", ICSSR: "#f59e0b", UGC: "#8b5cf6",
};

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container-site relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Research & Innovation</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-4">Research at CUSB</h1>
            <p className="text-base font-body max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Fostering a culture of inquiry, innovation, and interdisciplinary research to address national and global challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-surface-2 border-b border-surface">
        <div className="container-site grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: "35+", label: "Funded Projects" },
            { value: "₹4Cr+", label: "Research Grants" },
            { value: "500+", label: "Publications" },
            { value: "120+", label: "Ph.D. Scholars" },
          ].map((stat, i) => (
            <motion.div key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center">
              <div className="font-display font-bold text-3xl mb-1" style={{ color: "rgb(var(--color-primary))" }}>{stat.value}</div>
              <div className="text-xs font-body text-muted uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <SectionHeading
            label="Focus Areas"
            title="Research Areas"
            subtitle="Our faculty and scholars pursue cutting-edge research across diverse disciplines with national and international impact."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-base p-6 group"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-standard group-hover:scale-110"
                  style={{ background: `${area.colour}18`, color: area.colour }}>
                  {area.icon}
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base text-on-surface mb-2 leading-snug">{area.title}</h3>
                <p className="text-sm font-body text-muted leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funded Projects */}
      <section className="section-padding bg-surface-2">
        <div className="container-site">
          <SectionHeading label="Funded Projects" title="Ongoing Research Projects" subtitle="Externally funded research projects by government agencies and institutions." />
          <div className="space-y-4">
            {fundedProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-base p-5 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <span
                  className="text-xs font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded-full self-start flex-shrink-0"
                  style={{ background: `${agencyColours[project.agency]}18`, color: agencyColours[project.agency] }}
                >{project.agency}</span>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-sm text-on-surface mb-0.5">{project.title}</h3>
                  <p className="text-xs font-body text-muted">PI: {project.pi}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-display font-bold text-base" style={{ color: "rgb(var(--color-primary))" }}>{project.amount}</div>
                  <div className="text-xs font-body text-muted">{project.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ph.D. CTA */}
      <section className="py-16" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="container-site text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">Pursue a Ph.D. at CUSB</h2>
            <p className="text-base font-body mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
              Join our vibrant research community. Ph.D. admissions are open through entrance test and NET/JRF qualification.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/admissions" id="research-phd-apply"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-semibold text-sm transition-all hover:scale-105"
                style={{ background: "rgb(var(--color-secondary))", color: "#0f1117" }}>
                Ph.D. Admissions <ArrowRight size={16} />
              </Link>
              <Link href="/faculty" id="research-meet-faculty"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-semibold text-sm border transition-all hover:scale-105"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}>
                Meet Faculty
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
