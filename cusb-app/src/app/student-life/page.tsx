"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useState } from "react";
import { Music, Home, Trophy, Heart, ShieldAlert, Users } from "lucide-react";

const sections = [
  { id: "clubs", label: "Clubs & Associations", icon: <Music size={16} /> },
  { id: "hostel", label: "Hostel & Mess", icon: <Home size={16} /> },
  { id: "sports", label: "Sports & Fitness", icon: <Trophy size={16} /> },
  { id: "welfare", label: "Student Welfare", icon: <Heart size={16} /> },
  { id: "antiragging", label: "Anti-Ragging", icon: <ShieldAlert size={16} /> },
  { id: "alumni", label: "Alumni", icon: <Users size={16} /> },
];

const content: Record<string, { title: string; body: string; items: string[] }> = {
  clubs: {
    title: "Clubs & Associations",
    body: "CUSB has a vibrant student community with various clubs and associations that cater to diverse interests in arts, culture, technology, literature, and social service.",
    items: ["Cultural Club — organises festivals, dance & drama events", "Literary Club — debates, elocution, creative writing workshops", "Science Club — science exhibitions, project presentations", "NSS Unit — social service, blood donation, cleanliness drives", "Photography Club — campus photo walks, exhibitions", "Eco Club — environmental awareness and plantation drives", "Film & Media Society — short films, documentary screenings", "Music Society — classical, folk and contemporary performances"],
  },
  hostel: {
    title: "Hostel & Mess",
    body: "CUSB provides on-campus accommodation for boys and girls with modern amenities, security, and a hygienic mess facility serving nutritious meals.",
    items: ["Boys Hostel — Gargi Sadan (capacity: 300+ students)", "Girls Hostel — Maitreyi Sadan (capacity: 200+ students)", "24×7 security and CCTV surveillance", "Wi-Fi enabled hostel premises", "Separate mess facilities with varied menu", "Common room with TV and recreational facilities", "Laundry and indoor games facility", "Warden and caretaker support round the clock"],
  },
  sports: {
    title: "Sports & Fitness",
    body: "CUSB promotes a healthy lifestyle through competitive sports, physical fitness activities, and inter-university sports participation.",
    items: ["Cricket ground and practice nets", "Football & volleyball courts", "Badminton and table tennis halls", "Athletics track for running events", "Yoga and meditation centre", "Gymnasium with modern equipment", "Annual Sports Meet held every December", "Participation in AIU-organised inter-university tournaments"],
  },
  welfare: {
    title: "Student Welfare",
    body: "The Office of the Dean of Students oversees student welfare, counselling, grievance redressal, and support services.",
    items: ["Student counselling and mental health support", "Grievance Redressal Committee", "SC/ST/OBC/PwD student support cell", "Financial assistance for economically weaker students", "Career guidance and placement assistance", "Medical facility and first aid on campus", "Student identity cards and library access", "Emergency contact helpline: +91-631-2229 518"],
  },
  antiragging: {
    title: "Anti-Ragging Cell",
    body: "CUSB has a strict zero-tolerance policy against ragging. All students must submit the anti-ragging undertaking on the UGC portal upon admission.",
    items: ["Anti-Ragging Committee constituted as per UGC norms", "24×7 anti-ragging helpline available", "CCTV monitoring across campus and hostels", "Mandatory undertaking for all students & parents", "Strict disciplinary action against perpetrators", "Anonymous complaint submission through UGC portal", "Regular awareness workshops during orientation", "UGC Anti-Ragging Helpline: 1800-180-5522"],
  },
  alumni: {
    title: "Alumni Association",
    body: "The CUSB Alumni Association connects former students with the university, fostering mentorship, networking, and contributions to the institution's growth.",
    items: ["CUSB Alumni Association (CUSBAA) registered body", "Annual Alumni Meet held every February", "Alumni lecture series and guest sessions", "Mentorship programme for current students", "Alumni contribution to campus development", "LinkedIn group with 2,000+ members", "Regional chapters across major Indian cities", "Alumni scholarship fund for meritorious students"],
  },
};

export default function StudentLifePage() {
  const [active, setActive] = useState("clubs");
  const current = content[active];

  return (
    <>
      <section className="pt-32 pb-20 relative" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container-site relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Campus Experience</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-4">Student Life</h1>
            <p className="text-base font-body max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Life at CUSB goes beyond academics — discover clubs, hostels, sports, and a thriving community at our 300-acre Panchanpur campus.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site">
          {/* Tab nav */}
          <div className="flex flex-wrap gap-2 mb-10" role="tablist">
            {sections.map((s) => (
              <button key={s.id} id={`sl-tab-${s.id}`} role="tab"
                aria-selected={active === s.id} onClick={() => setActive(s.id)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-body font-medium transition-all cursor-pointer"
                style={active === s.id
                  ? { background: "rgb(var(--color-primary))", color: "white" }
                  : { background: "rgb(var(--color-card))", color: "rgb(var(--color-on-surface-muted))", border: "1px solid rgb(var(--color-border))" }}>
                {s.icon}{s.label}
              </button>
            ))}
          </div>

          <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-1">
                <SectionHeading label="Student Life" title={current.title} />
                <p className="text-sm font-body text-muted leading-relaxed">{current.body}</p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.items.map((item, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="card-base p-4 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: "rgb(var(--color-secondary))" }} />
                    <span className="text-sm font-body text-on-surface leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
