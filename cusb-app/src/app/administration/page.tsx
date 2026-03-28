"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useState } from "react";
import { Users, BookOpen, DollarSign, BarChart2, Award } from "lucide-react";

const tabs = [
  { id: "executive", label: "Executive Council", icon: <Users size={16} /> },
  { id: "academic", label: "Academic Council", icon: <BookOpen size={16} /> },
  { id: "finance", label: "Finance Committee", icon: <DollarSign size={16} /> },
  { id: "planning", label: "Planning Board", icon: <BarChart2 size={16} /> },
  { id: "iqac", label: "IQAC", icon: <Award size={16} /> },
];

const members: Record<string, { name: string; designation: string; category: string }[]> = {
  executive: [
    { name: "Smt. Droupadi Murmu", designation: "Hon'ble Chancellor & Visitor (President of India)", category: "Ex-Officio" },
    { name: "Prof. C.P. Tiwari", designation: "Vice Chancellor, CUSB", category: "Ex-Officio" },
    { name: "Prof. K.N. Singh", designation: "Registrar, CUSB", category: "Secretary" },
    { name: "Prof. Meera Kumari", designation: "Dean, School of Language, Literature & Culture", category: "Academic Member" },
    { name: "Prof. Amit Kumar Verma", designation: "Dean, School of Earth & Biological Sciences", category: "Academic Member" },
    { name: "Shri Ram Prasad Sharma", designation: "Joint Secretary, Ministry of Education, GoI", category: "Govt. Nominee" },
    { name: "Prof. Ashok Kumar Jha", designation: "UGC Nominee", category: "UGC Nominee" },
    { name: "Dr. Surya Prakash", designation: "Eminent Educationist", category: "Visitor's Nominee" },
  ],
  academic: [
    { name: "Prof. C.P. Tiwari", designation: "Vice Chancellor (Chairman)", category: "Ex-Officio" },
    { name: "Prof. K.N. Singh", designation: "Registrar", category: "Secretary" },
    { name: "Prof. Meera Kumari", designation: "Head, Dept. of Hindi", category: "Head of Department" },
    { name: "Prof. Sunita Devi", designation: "Head, School of Education", category: "Head of Department" },
    { name: "Prof. Chandrika Yadav", designation: "Head, Dept. of Environmental Sciences", category: "Head of Department" },
    { name: "Dr. Priya Ranjan Singh", designation: "Head, Dept. of Economics", category: "Head of Department" },
    { name: "Dr. Rajesh Kumar Gupta", designation: "Head, School of Commerce", category: "Head of Department" },
    { name: "Prof. Ashok Mishra", designation: "External Academic Expert", category: "Expert Member" },
  ],
  finance: [
    { name: "Prof. C.P. Tiwari", designation: "Vice Chancellor (Chairman)", category: "Ex-Officio" },
    { name: "Shri Suresh Kumar", designation: "Finance Officer, CUSB", category: "Secretary" },
    { name: "Shri Ram Prasad Sharma", designation: "Ministry of Education Representative", category: "Govt. Nominee" },
    { name: "Shri Anil Gupta", designation: "Ministry of Finance Representative", category: "Govt. Nominee" },
    { name: "Prof. K.N. Singh", designation: "Registrar", category: "Member" },
    { name: "CA Pradeep Verma", designation: "Financial Expert", category: "Expert Member" },
  ],
  planning: [
    { name: "Prof. C.P. Tiwari", designation: "Vice Chancellor (Chairman)", category: "Ex-Officio" },
    { name: "Prof. K.N. Singh", designation: "Registrar (Secretary)", category: "Secretary" },
    { name: "Prof. Amit Kumar Verma", designation: "Dean, Academic Affairs", category: "Member" },
    { name: "Shri Ram Prasad Sharma", designation: "Govt. of India Representative", category: "Govt. Nominee" },
    { name: "Dr. P.K. Jha", designation: "Infrastructure Expert", category: "Expert Member" },
    { name: "Prof. Sunita Devi", designation: "Faculty Representative", category: "Member" },
  ],
  iqac: [
    { name: "Prof. C.P. Tiwari", designation: "Vice Chancellor (Chairperson)", category: "Ex-Officio" },
    { name: "Prof. Meera Kumari", designation: "IQAC Director", category: "Director" },
    { name: "Prof. Chandrika Yadav", designation: "Senior Faculty Member", category: "Member" },
    { name: "Dr. Arun Shankar", designation: "Faculty Member", category: "Member" },
    { name: "Shri Suresh Kumar", designation: "Administrative Officer", category: "Administrative Member" },
    { name: "Dr. Poonam Singh", designation: "Alumni Representative", category: "Stakeholder" },
    { name: "Shri Manish Agarwal", designation: "Industry Expert", category: "External Expert" },
    { name: "Ms. Anjali Gupta", designation: "Student Representative", category: "Stakeholder" },
  ],
};

export default function AdministrationPage() {
  const [activeTab, setActiveTab] = useState("executive");
  const currentMembers = members[activeTab];

  return (
    <>
      <section className="pt-32 pb-20 relative" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container-site relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Governance</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-4">Administration</h1>
            <p className="text-base font-body max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              CUSB is governed by statutory bodies constituted under the Central Universities Act, 2009.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site">
          {/* Tab bar */}
          <div className="flex flex-wrap gap-2 mb-10" role="tablist">
            {tabs.map((tab) => (
              <button key={tab.id} id={`admin-tab-${tab.id}`} role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-body font-medium transition-all cursor-pointer"
                style={activeTab === tab.id
                  ? { background: "rgb(var(--color-primary))", color: "white" }
                  : { background: "rgb(var(--color-card))", color: "rgb(var(--color-on-surface-muted))", border: "1px solid rgb(var(--color-border))" }}>
                {tab.icon}{tab.label}
              </button>
            ))}
          </div>

          <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <SectionHeading label="Members" title={tabs.find(t => t.id === activeTab)?.label ?? ""} />
            <div className="overflow-hidden rounded-2xl border shadow-card" style={{ borderColor: "rgb(var(--color-border))" }}>
              <table className="w-full text-sm font-body">
                <thead>
                  <tr style={{ background: "rgb(var(--color-primary))", color: "white" }}>
                    {["#", "Name", "Designation", "Category"].map(h => (
                      <th key={h} className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentMembers.map((m, i) => (
                    <motion.tr key={m.name}
                      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="border-b transition-standard hover:bg-surface-2"
                      style={{ borderColor: "rgb(var(--color-border))", background: i % 2 === 0 ? "rgb(var(--color-card))" : "rgb(var(--color-surface))" }}>
                      <td className="px-5 py-3.5 text-muted">{i + 1}</td>
                      <td className="px-5 py-3.5 font-medium text-on-surface">{m.name}</td>
                      <td className="px-5 py-3.5 text-muted">{m.designation}</td>
                      <td className="px-5 py-3.5">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={{ background: "rgba(var(--color-primary), 0.08)", color: "rgb(var(--color-primary))" }}>
                          {m.category}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {activeTab === "iqac" && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 card-base p-6">
              <h3 className="font-display font-bold text-lg text-on-surface mb-3">About IQAC</h3>
              <p className="text-sm font-body text-muted leading-relaxed">
                The Internal Quality Assurance Cell (IQAC) was established by CUSB in accordance with the NAAC guidelines to develop a system for the conscious, consistent, and catalytic improvement in the performance of institutions. The IQAC works towards quality enhancement by channelizing efforts and measures of the university towards academic excellence.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
