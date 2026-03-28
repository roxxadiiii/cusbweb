"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, FlaskConical, Globe, BookOpen, Briefcase, Newspaper, Leaf, Calculator, Palette } from "lucide-react";
import Link from "next/link";

const schools = [
  {
    short: "SEBES",
    name: "School of Earth, Biological & Environmental Sciences",
    icon: <Leaf size={24} />,
    colour: "#22c55e",
    programmes: [
      { level: "M.Sc.", name: "Environmental Sciences" },
      { level: "M.Sc.", name: "Geology" },
      { level: "Ph.D.", name: "Earth Sciences" },
    ],
  },
  {
    short: "SSSP",
    name: "School of Social Sciences & Policy",
    icon: <Globe size={24} />,
    colour: "#3b82f6",
    programmes: [
      { level: "M.A.", name: "Economics" },
      { level: "M.A.", name: "Political Science" },
      { level: "M.A.", name: "Sociology" },
      { level: "Ph.D.", name: "Policy Studies" },
    ],
  },
  {
    short: "SOE",
    name: "School of Education",
    icon: <BookOpen size={24} />,
    colour: "#f59e0b",
    programmes: [
      { level: "M.Ed.", name: "Education" },
      { level: "Ph.D.", name: "Education" },
    ],
  },
  {
    short: "SCMS",
    name: "School of Commerce & Management Studies",
    icon: <Briefcase size={24} />,
    colour: "#8b5cf6",
    programmes: [
      { level: "MBA", name: "Business Administration" },
      { level: "M.Com.", name: "Commerce" },
      { level: "Ph.D.", name: "Management" },
    ],
  },
  {
    short: "SLLC",
    name: "School of Language, Literature & Culture",
    icon: <Newspaper size={24} />,
    colour: "#ec4899",
    programmes: [
      { level: "M.A.", name: "Hindi" },
      { level: "M.A.", name: "English" },
      { level: "Ph.D.", name: "Linguistics" },
    ],
  },
  {
    short: "SMS",
    name: "School of Mathematical Sciences",
    icon: <Calculator size={24} />,
    colour: "#14b8a6",
    programmes: [
      { level: "M.Sc.", name: "Mathematics" },
      { level: "M.Sc.", name: "Statistics" },
      { level: "Ph.D.", name: "Mathematical Sciences" },
    ],
  },
  {
    short: "SCS",
    name: "School of Computer Sciences & IT",
    icon: <FlaskConical size={24} />,
    colour: "#f97316",
    programmes: [
      { level: "MCA", name: "Computer Applications" },
      { level: "M.Sc.", name: "IT" },
      { level: "Ph.D.", name: "Computer Science" },
    ],
  },
  {
    short: "SFA",
    name: "School of Fine Arts & Performing Arts",
    icon: <Palette size={24} />,
    colour: "#a855f7",
    programmes: [
      { level: "M.F.A.", name: "Fine Arts" },
      { level: "M.P.A.", name: "Performing Arts" },
    ],
  },
];

export default function AcademicsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container-site relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Academics</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-4">Schools & Programmes</h1>
            <p className="text-base font-body max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Explore multidisciplinary schools offering UG, PG and doctoral programmes through a Choice Based Credit System (CBCS).
            </p>
          </motion.div>
        </div>
      </section>

      {/* CBCS Banner */}
      <section className="py-8 bg-surface-2 border-b border-surface">
        <div className="container-site flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <p className="text-sm font-body text-muted">
            All programmes follow the <strong className="text-on-surface">Choice Based Credit System (CBCS)</strong> with internal and external evaluation.
          </p>
          <Link href="/admissions" id="academics-apply-link"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body font-semibold text-white flex-shrink-0 transition-all hover:opacity-90"
            style={{ background: "rgb(var(--color-primary))" }}>
            Apply via CUET <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <SectionHeading label="Schools" title="Academic Schools" subtitle="Each school houses multiple departments and research centres across disciplines." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {schools.map((school, i) => (
              <motion.div
                key={school.short}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card-base p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-standard group-hover:scale-110"
                    style={{ background: `${school.colour}18`, color: school.colour }}>
                    {school.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-body font-bold uppercase tracking-widest" style={{ color: school.colour }}>{school.short}</span>
                    <h3 className="font-display font-semibold text-sm sm:text-base text-on-surface leading-snug mt-0.5 mb-3">{school.name}</h3>
                    <div className="space-y-1.5">
                      {school.programmes.map((p) => (
                        <div key={p.name} className="flex items-center gap-2">
                          <span className="text-xs font-body font-semibold px-2 py-0.5 rounded-md flex-shrink-0"
                            style={{ background: `${school.colour}15`, color: school.colour }}>{p.level}</span>
                          <span className="text-xs font-body text-muted">{p.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="container-site text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">Find Your Programme</h2>
          <p className="text-base font-body mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Admissions are through CUET (Common University Entrance Test) conducted by NTA for most programmes.
          </p>
          <Link href="/admissions" id="academics-cta-apply"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-semibold text-sm transition-all hover:scale-105"
            style={{ background: "rgb(var(--color-secondary))", color: "#0f1117" }}>
            Admission Info <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
