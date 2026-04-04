"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const leadership = [
  { role: "Hon'ble Chancellor", name: "Smt. Droupadi Murmu", subtitle: "President of India", initial: "D" },
  { role: "Vice Chancellor", name: "Prof. C.P. Tiwari", subtitle: "Vice Chancellor, CUSB", initial: "C" },
  { role: "Registrar", name: "Prof. K.N. Singh", subtitle: "Registrar, CUSB", initial: "K" },
];

const milestones = [
  { year: "2009", event: "Established as Central University of Bihar under Central Universities Act" },
  { year: "2014", event: "Renamed to Central University of South Bihar (CUSB) via Amendment Act" },
  { year: "2016", event: "Permanent campus inaugurated at Panchanpur, Gaya Panchanpur Road" },
  { year: "2018", event: "NAAC accreditation process initiated; academic programmes expanded" },
  { year: "2022", event: "Achieved UGC Category I University status" },
  { year: "2026", event: "Over 4,100 students enrolled across 51+ programmes" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative"
        style={{ background: "rgb(var(--color-primary))" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container-site relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>The University</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-4">About CUSB</h1>
            <p className="text-base font-body max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Central University of South Bihar — a Federal Government university fostering academic excellence, research, and inclusive education in the heart of Bihar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-surface">
        <div className="container-site grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <SectionHeading label="History" title="Our Story" />
            <div className="space-y-4 text-sm font-body text-muted leading-relaxed">
              <p>
                <strong className="text-on-surface">Central University of South Bihar (CUSB)</strong>, Gaya, India, is one among 54 such universities of the Federal Government, which come under the purview of the Department of Higher Education under the Ministry of Education of Government of India.
              </p>
              <p>
                It was established under the <strong className="text-on-surface">Central Universities Act, 2009</strong> (Section 25 of 2009) as Central University of Bihar (CUB) and the name since changed by the Central Universities (Amendment) Act, 2014 to Central University of South Bihar (CUSB). It is an institution of higher learning in the state of Bihar.
              </p>
              <p>
                With the motto <strong className="text-on-surface">&quot;Collective Reasoning&quot;</strong>, the University has been conducting its academic and administrative activities from a permanent campus on a 300-acre plot of land at Panchanpur, situated about 15 kms away from Gaya town.
              </p>
              <p>
                The University welcomes all with a grand Entrance Plaza and further provides visual delight with a half-globe shaped Stupa and a magnificent multi-storied Administrative Block. The Schools named Aryabhatta Bhawan, Malaviya Bhawan, Vivekanand Lecture Complex, Sangharam Guest House, Boys Hostel named Gargi Sadan and Girls Hostel named Maitreyi Sadan together offer a pristine environment for academic and co-curricular activities.
              </p>
            </div>

            {/* Vision / Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {[
                { title: "Our Vision", text: "To be a centre of excellence in teaching, learning, and research, contributing to the advancement of knowledge in all its dimensions for the development of society." },
                { title: "Our Mission", text: "To provide quality education through innovative pedagogy, promote multidisciplinary research, and cultivate an inclusive environment that nurtures holistic development." },
              ].map((item) => (
                <div key={item.title} className="card-base p-6">
                  <h3 className="font-display font-bold text-base text-primary mb-2" style={{ color: "rgb(var(--color-primary))" }}>{item.title}</h3>
                  <p className="text-sm font-body text-muted leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Facts */}
            <div className="card-base p-6">
              <h3 className="font-display font-bold text-base text-on-surface mb-4">Key Facts</h3>
              <div className="space-y-3">
                {[
                  ["Established", "2009 (as CUB)"],
                  ["Renamed", "2014 (as CUSB)"],
                  ["Campus", "300 acres, Panchanpur, Gaya"],
                  ["Status", "UGC Category I"],
                  ["Affiliation", "NAAC Accredited"],
                  ["Students", "4,100+"],
                  ["Faculty", "120+"],
                  ["Programmes", "51+"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-sm font-body border-b pb-2" style={{ borderColor: "rgb(var(--color-border))" }}>
                    <span className="text-muted">{k}</span>
                    <span className="font-medium text-on-surface text-right">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="card-base p-6 space-y-3">
              <h3 className="font-display font-bold text-base text-on-surface mb-4">Contact</h3>
              <div className="flex items-start gap-2 text-sm font-body text-muted">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "rgb(var(--color-primary))" }} />
                <span>NH-120, Gaya Panchanpur Road, Post Fatehpur, Gaya – 824236 (Bihar) India</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-body text-muted">
                <Phone size={14} style={{ color: "rgb(var(--color-primary))" }} />
                <span>+91-631-2229 530 / 507</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-body text-muted">
                <Mail size={14} style={{ color: "rgb(var(--color-primary))" }} />
                <a href="mailto:registrar@cub.ac.in" className="hover:text-primary transition-standard">registrar@cub.ac.in</a>
              </div>
              <a
                href="https://www.cusb.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-body font-semibold mt-2 transition-standard"
                style={{ color: "rgb(var(--color-primary))" }}
              >
                Visit official site <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-surface-2">
        <div className="container-site">
          <SectionHeading label="Leadership" title="Key Officials" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {leadership.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-base p-6 text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-display font-bold text-2xl mx-auto mb-4"
                  style={{ background: "rgb(var(--color-primary))" }}
                >
                  {person.initial}
                </div>
                <p className="text-xs font-body uppercase tracking-widest text-muted mb-1">{person.role}</p>
                <h3 className="font-display font-bold text-base text-on-surface">{person.name}</h3>
                <p className="text-xs font-body text-muted mt-1">{person.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-surface">
        <div className="container-site max-w-3xl mx-auto">
          <SectionHeading label="Milestones" title="Our Journey" />
          <div className="relative pl-8 border-l-2" style={{ borderColor: "rgb(var(--color-primary))" }}>
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="mb-8 relative"
              >
                <div
                  className="absolute -left-[2.85rem] w-5 h-5 rounded-full border-2 border-white flex items-center justify-center"
                  style={{ background: "rgb(var(--color-primary))" }}
                />
                <p className="text-xs font-body font-bold uppercase tracking-widest mb-1" style={{ color: "rgb(var(--color-secondary))" }}>{m.year}</p>
                <p className="text-sm font-body text-muted leading-relaxed">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
