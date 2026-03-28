"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, CheckCircle2, Clock, FileText, GraduationCap } from "lucide-react";
import Link from "next/link";

const programmes = [
  { name: "B.Sc. / B.A. (Hons.)", duration: "3 Years", eligibility: "10+2 or equivalent", mode: "CUET-UG" },
  { name: "M.A. / M.Sc. / M.Com.", duration: "2 Years", eligibility: "Bachelor's degree (50%+)", mode: "CUET-PG" },
  { name: "MBA", duration: "2 Years", eligibility: "Bachelor's degree (50%+)", mode: "CUET-PG" },
  { name: "MCA", duration: "2 Years", eligibility: "B.Sc. (Mathematics) / BCA", mode: "CUET-PG" },
  { name: "M.Ed.", duration: "2 Years", eligibility: "B.Ed. (50%+)", mode: "CUET-PG" },
  { name: "M.F.A. / M.P.A.", duration: "2 Years", eligibility: "Bachelor's in relevant field", mode: "CUET-PG" },
  { name: "Ph.D.", duration: "3–5 Years", eligibility: "Master's degree (55%+)", mode: "Entrance / NET" },
];

const steps = [
  { step: "01", title: "Check CUET Results", desc: "Register and appear for CUET-UG or CUET-PG conducted by NTA." },
  { step: "02", title: "Apply to CUSB", desc: "Fill the CUSB online application form using your CUET score." },
  { step: "03", title: "Merit List & Counselling", desc: "Check the merit list on the CUSB portal and attend online/offline counselling." },
  { step: "04", title: "Document Verification", desc: "Submit original documents for verification as per the schedule." },
  { step: "05", title: "Fee Payment & Enrollment", desc: "Pay the programme fee online and complete your enrollment." },
];

const importantLinks = [
  { label: "NTA CUET Portal", href: "https://cuet.nta.nic.in", external: true },
  { label: "CUSB Admission Portal", href: "#", external: false },
  { label: "Fee Structure", href: "#", external: false },
  { label: "Prospectus / Bulletin", href: "#", external: false },
  { label: "Scholarship Info", href: "#", external: false },
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container-site relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Admissions 2026</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-4">Join CUSB</h1>
            <p className="text-base font-body max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Admissions at CUSB are primarily through the Common University Entrance Test (CUET) conducted by NTA. Explore programmes and start your application today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alert Banner */}
      <div className="py-3" style={{ background: "rgb(var(--color-secondary))" }}>
        <div className="container-site flex flex-col sm:flex-row sm:items-center gap-2 justify-between">
          <p className="text-sm font-body font-semibold" style={{ color: "#0f1117" }}>
            📢 CUET-PG 2026 Admission Bulletin is now available. Registration closes April 30, 2026.
          </p>
          <a href="https://cuet.nta.nic.in" target="_blank" rel="noopener noreferrer"
            className="text-xs font-body font-bold flex items-center gap-1 flex-shrink-0 hover:underline" style={{ color: "#0f1117" }}>
            Apply at NTA <ArrowRight size={12} />
          </a>
        </div>
      </div>

      {/* Programmes Table */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <SectionHeading label="Programmes" title="Available Programmes" subtitle="All programmes offered at CUSB with eligibility criteria and admission mode." />
          <div className="overflow-x-auto rounded-2xl border border-surface shadow-card">
            <table className="w-full text-sm font-body min-w-[600px]">
              <thead>
                <tr style={{ background: "rgb(var(--color-primary))", color: "white" }}>
                  {["Programme", "Duration", "Eligibility", "Admission Mode"].map((h) => (
                    <th key={h} className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {programmes.map((p, i) => (
                  <motion.tr
                    key={p.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b transition-standard hover:bg-surface-2"
                    style={{ borderColor: "rgb(var(--color-border))", background: i % 2 === 0 ? "rgb(var(--color-card))" : "rgb(var(--color-surface))" }}
                  >
                    <td className="px-5 py-3.5 font-medium text-on-surface">{p.name}</td>
                    <td className="px-5 py-3.5 text-muted">{p.duration}</td>
                    <td className="px-5 py-3.5 text-muted">{p.eligibility}</td>
                    <td className="px-5 py-3.5">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ background: "rgba(var(--color-primary), 0.08)", color: "rgb(var(--color-primary))" }}>
                        {p.mode}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-surface-2">
        <div className="container-site">
          <SectionHeading label="How to Apply" title="Admission Process" align="center"
            subtitle="Follow these steps to complete your application to CUSB." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-base p-5 text-center relative"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-white mx-auto mb-3"
                  style={{ background: "rgb(var(--color-primary))" }}>{s.step}</div>
                <h3 className="font-display font-bold text-sm text-on-surface mb-2">{s.title}</h3>
                <p className="text-xs font-body text-muted leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Links + Highlights */}
      <section className="section-padding bg-surface">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading label="Resources" title="Important Links" />
            <div className="space-y-3">
              {importantLinks.map((link) => (
                <a key={link.label} href={link.href} target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="card-base flex items-center justify-between p-4 group hover:border-primary cursor-pointer"
                  style={{ borderColor: "rgb(var(--color-border))" }}
                  id={`admissions-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                  <div className="flex items-center gap-3">
                    <FileText size={16} style={{ color: "rgb(var(--color-primary))" }} />
                    <span className="text-sm font-body font-medium text-on-surface">{link.label}</span>
                  </div>
                  <ArrowRight size={14} className="text-muted group-hover:translate-x-1 transition-standard" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading label="Why CUSB?" title="Why Choose CUSB?" />
            <div className="space-y-4">
              {[
                { icon: <GraduationCap size={18} />, title: "UGC Category I", desc: "Recognized as a premier Category I institution by the University Grants Commission." },
                { icon: <CheckCircle2 size={18} />, title: "CBCS System", desc: "Flexible Choice Based Credit System allowing interdisciplinary learning." },
                { icon: <Clock size={18} />, title: "Research Focus", desc: "Active research culture with DBT, DST, ICSSR funded projects and Ph.D. programmes." },
                { icon: <FileText size={18} />, title: "Scholarships", desc: "Multiple government scholarships, fellowships and assistantships available for deserving students." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 card-base p-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(var(--color-primary), 0.08)", color: "rgb(var(--color-primary))" }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-on-surface mb-0.5">{item.title}</h4>
                    <p className="text-xs font-body text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
