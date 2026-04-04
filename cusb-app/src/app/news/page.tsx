"use client";

import { motion } from "framer-motion";
import { NewsCard } from "@/components/Cards";
import { useState } from "react";

const tabs = ["News", "Events", "Tenders", "Recruitment"] as const;
type Tab = typeof tabs[number];

const allNews: Record<Tab, { tag: string; date: string; title: string; excerpt: string }[]> = {
  "News": [
    { tag: "News", date: "Mar 26, 2026", title: "CUSB Signs MoU with IIT Patna for Joint Research", excerpt: "A collaborative research agreement was signed between CUSB and IIT Patna to promote interdisciplinary research in environmental sciences and AI." },
    { tag: "News", date: "Mar 20, 2026", title: "Department of Economics Hosts National Seminar on Inclusive Growth", excerpt: "Scholars from 30 universities participated in a two-day national seminar on 'Inclusive Growth and Sustainable Development' at CUSB." },
    { tag: "News", date: "Mar 14, 2026", title: "CUSB Students Win National Debate Championship", excerpt: "A team from the Department of Political Science won the all-India inter-university English debate championship held in New Delhi." },
    { tag: "News", date: "Mar 5, 2026", title: "New Research Centre for Environmental Studies Inaugurated", excerpt: "The Vice Chancellor inaugurated the new Centre for Advanced Environmental Research with state-of-the-art laboratory facilities." },
    { tag: "News", date: "Feb 27, 2026", title: "17th Foundation Day Celebrated with Cultural Extravaganza", excerpt: "CUSB celebrated its 17th Foundation Day with awards, cultural programmes and an address by the Vice Chancellor on the university's growth." },
    { tag: "News", date: "Feb 20, 2026", title: "CUSB Ranked Among Top 150 Central Universities in India", excerpt: "CUSB has been featured in the latest NIRF rankings, reaffirming its commitment to academic excellence and research output." },
  ],
  "Events": [
    { tag: "Event", date: "Apr 5, 2026", title: "Annual Technical Fest — TECHNOVA 2026", excerpt: "Join us for TECHNOVA, the annual tech and innovation festival featuring hackathons, robotics competitions, and guest lectures." },
    { tag: "Event", date: "Apr 12, 2026", title: "International Yoga Day Preparations — Volunteer Registration Open", excerpt: "CUSB students and staff are invited to participate in the International Yoga Day grand event scheduled for June 21, 2026." },
    { tag: "Event", date: "Apr 18, 2026", title: "Ph.D. Open Day — Meet Our Research Supervisors", excerpt: "Prospective Ph.D. scholars are invited to attend the annual Ph.D. Open Day and interact with faculty supervisors across departments." },
    { tag: "Event", date: "Apr 25, 2026", title: "Alumni Meet 2026 — Reconnect with CUSB", excerpt: "The annual alumni meet offers former students a chance to reconnect with faculty, celebrate achievements and mentor current students." },
    { tag: "Event", date: "May 3, 2026", title: "National Conference on Sustainable Agriculture & Ecology", excerpt: "The School of Earth Sciences is organising a two-day national conference on sustainable farming practices and ecological conservation." },
    { tag: "Event", date: "May 10, 2026", title: "Career Fair & Campus Placement Drive — Spring 2026", excerpt: "Over 40 leading companies are expected to participate in CUSB's spring placement drive across management, sciences and tech fields." },
  ],
  "Tenders": [
    { tag: "Tender", date: "Mar 28, 2026", title: "Tender: Construction of Girls Hostel Block-2", excerpt: "Sealed bids invited from eligible contractors. Last date: April 20, 2026. EMD: ₹5,00,000." },
    { tag: "Tender", date: "Mar 25, 2026", title: "Quotation: Annual Maintenance of Computers & Printers", excerpt: "Quotations invited for AMC of 450 computers and 80 printers across CUSB campus. Submission deadline: April 10, 2026." },
    { tag: "Tender", date: "Mar 18, 2026", title: "Tender: Supply of Chemical Reagents — Science Labs", excerpt: "Empanelled vendors invited to quote for supply of chemical reagents for the School of Earth Sciences for FY 2026–27." },
    { tag: "Tender", date: "Mar 10, 2026", title: "Tender: Landscaping & Horticulture Services", excerpt: "CUSB invites tenders for landscaping and maintenance of its 300-acre campus green spaces for a period of 2 years." },
    { tag: "Tender", date: "Mar 5, 2026", title: "Tender: Renovation of Administrative Block — Phase II", excerpt: "Eligible civil works contractors invited to bid for Phase II renovation of the CUSB Administrative Block, Panchanpur." },
    { tag: "Tender", date: "Feb 28, 2026", title: "Tender: Provision of Internet Leased Line — 10 Gbps", excerpt: "Tenders invited from licensed ISPs for providing a 10 Gbps internet leased line connection to CUSB campus." },
  ],
  "Recruitment": [
    { tag: "Job", date: "Mar 27, 2026", title: "Assistant Professor — Physics, Chemistry, Maths", excerpt: "Applications invited for permanent Assistant Professor positions. Qualification: Ph.D. + NET/SLET. Last date: April 30, 2026." },
    { tag: "Job", date: "Mar 22, 2026", title: "Deputy Registrar (Administration) — 1 Post", excerpt: "Eligible candidates with 15 years of experience in university administration invited to apply. Last date: April 25, 2026." },
    { tag: "Job", date: "Mar 18, 2026", title: "Technical Assistant — Computer Centre", excerpt: "Walk-in interview for Technical Assistant position at CUSB Computer Centre on April 5, 2026." },
    { tag: "Job", date: "Mar 12, 2026", title: "Research Associates — DST Project on Climate Data", excerpt: "DST funded project seeks two Research Associates (M.Sc. / M.Tech.) with experience in GIS and remote sensing." },
    { tag: "Job", date: "Mar 8, 2026", title: "Guest Faculty — Department of English", excerpt: "Applications invited for guest faculty positions in the Department of English for even semester 2025–26." },
    { tag: "Job", date: "Feb 25, 2026", title: "Multi-Tasking Staff (MTS) — Group C Recruitment", excerpt: "CUSB invites online applications for Group C MTS posts. Age: 18–27 years. Apply via the CUSB recruitment portal." },
  ],
};

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("News");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container-site relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Stay Informed</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-4">News & Events</h1>
            <p className="text-base font-body max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Latest updates from the Central University of South Bihar — news, events, tenders, and recruitment notices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab}
                id={`news-tab-${tab.toLowerCase()}`}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-200 cursor-pointer"
                style={
                  activeTab === tab
                    ? { background: "rgb(var(--color-primary))", color: "white" }
                    : { background: "rgb(var(--color-card))", color: "rgb(var(--color-on-surface-muted))", border: "1px solid rgb(var(--color-border))" }
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {allNews[activeTab].map((item, i) => (
              <NewsCard key={i} {...item} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
