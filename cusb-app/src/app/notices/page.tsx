"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Calendar, ChevronRight, Bookmark, ArrowRight, Info, X, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

/* ─── Notices Data ────────────────────────────────── */
const notices = [
  {
    category: "Examination",
    title: "End Semester Examination Schedule — Spring 2026",
    date: "Mar 28, 2026",
    priority: "High",
    description: "The complete timetable for UG and PG end-semester examinations has been published. Exams commence from May 5. Students are advised to download the hall tickets 7 days prior to their first exam from the portal.",
  },
  {
    category: "Admission",
    title: "CUET-UG 2026 Registration Deadline Extended",
    date: "Mar 25, 2026",
    priority: "Normal",
    description: "NTA has extended the registration deadline for CUET-UG 2026. Applicants can now apply until April 10. The correction window will open on April 12.",
  },
  {
    category: "Holiday",
    title: "Holiday Notice: Eid-ul-Fitr Celebration",
    date: "Mar 22, 2026",
    priority: "Normal",
    description: "The university will remain closed on the occasion of Eid-ul-Fitr. Dates subject to moon sighting. Essential services will continue as per schedule.",
  },
  {
    category: "Scholarship",
    title: "National Scholarship Portal (NSP) Renewal 2025-26",
    date: "Mar 20, 2026",
    priority: "Important",
    description: "Last date for biometric authentication and online renewal of NSP scholarships is April 15. Please ensure your Aadhar is linked to your bank account.",
  },
  {
    category: "Seminar",
    title: "International Seminar on Sustainable Green Chemistry",
    date: "Mar 18, 2026",
    priority: "Normal",
    description: "Department of Chemistry is organizing a 2-day seminar on green catalyst technologies. Register by March 30. Eminent speakers from across the globe will participate.",
  },
  {
    category: "Hostel",
    title: "Notice for Vacating Hostels during Summer Break",
    date: "Mar 15, 2026",
    priority: "Important",
    description: "All hostel residents (except research scholars) are required to vacate their rooms by June 1; guidelines inside regarding luggage storage.",
  },
];

const categories = ["All Notices", "Examination", "Admission", "Holiday", "Scholarship", "Seminar", "Hostel"];

export default function NoticesPage() {
  const [filter, setFilter] = useState("All Notices");
  const [selectedNotice, setSelectedNotice] = useState<typeof notices[0] | null>(null);

  const filteredNotices = filter === "All Notices" 
    ? notices 
    : notices.filter(n => n.category === filter);

  return (
    <main className="min-h-screen pt-24 pb-20 bg-surface">
      <div className="container-site">
        {/* Header */}
        <div className="mb-16">
          <SectionHeading 
            label="Latest Updates"
            title="Academic Notices"
            subtitle="Official announcements, circulars, and notifications from the Central University of South Bihar."
          />
        </div>

        {/* Categories Bar (Tags) */}
        <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all border cursor-pointer ${
                filter === cat 
                  ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20" 
                  : "bg-surface-2 text-on-surface-muted hover:bg-secondary/10 hover:text-secondary border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notices List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredNotices.length > 0 ? (
                filteredNotices.map((notice, idx) => (
                  <motion.div
                    key={notice.title}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.05 }}
                    className="card-base p-6 group cursor-pointer hover:border-secondary/30 transition-all flex gap-6"
                    onClick={() => setSelectedNotice(notice)}
                  >
                    <div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-surface-2 border border-border flex-shrink-0 group-hover:bg-secondary/5 transition-colors">
                      <span className="text-xs font-body font-bold text-on-surface-muted uppercase">{notice.date.split(' ')[0]}</span>
                      <span className="text-xl font-display font-bold text-on-surface">{notice.date.split(' ')[1].replace(',', '')}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-body font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-secondary/10 text-secondary">
                          {notice.category}
                        </span>
                        {notice.priority !== "Normal" && (
                          <span className={`text-[10px] font-body font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                            notice.priority === "High" ? "bg-red-500/10 text-red-500" : "bg-amber-500/10 text-amber-500"
                          }`}>
                            {notice.priority}
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-bold text-lg text-on-surface group-hover:text-secondary transition-colors mb-2">
                        {notice.title}
                      </h3>
                      <p className="text-sm font-body text-on-surface-muted line-clamp-2 leading-relaxed">
                        {notice.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs font-body text-on-surface-muted opacity-50 flex items-center gap-1">
                          <Calendar size={12} /> Posted on {notice.date}
                        </span>
                        <div className="text-sm font-body font-semibold text-secondary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Read Full Notice <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="py-20 text-center">
                  <p className="font-display text-lg text-on-surface-muted">No notices found in this category.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Archive */}
            <div className="card-base p-6 bg-secondary/[0.03]">
              <div className="flex items-center gap-3 mb-4">
                <Bookmark size={20} className="text-secondary" />
                <h2 className="font-display font-bold text-lg text-on-surface">Notice Archive</h2>
              </div>
              <ul className="space-y-3">
                {["Academic Year 2024-25", "Academic Year 2023-24", "Circulars from Registrar", "Press Releases"].map((arch) => (
                  <li key={arch}>
                    <button 
                      onClick={() => alert(`Accessing Archive: ${arch}`)}
                      className="text-sm font-body text-on-surface-muted hover:text-secondary flex items-center gap-2 transition-colors cursor-pointer w-full text-left"
                    >
                      <ChevronRight size={14} /> {arch}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Helpline */}
            <div className="card-base p-6 border-amber-500/20 bg-amber-500/[0.02]">
              <div className="flex items-center gap-3 mb-4">
                <Info size={20} className="text-amber-500" />
                <h2 className="font-display font-bold text-lg text-on-surface">Need Help?</h2>
              </div>
              <p className="text-xs font-body text-on-surface-muted leading-relaxed mb-4">
                For queries related to latest examinations or admissions, contact the CUSB Helpdesk.
              </p>
              <div className="text-xs font-body font-bold text-on-surface">
                Email: registrar@cusb.ac.in
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal (Read Full Notice) */}
      <AnimatePresence>
        {selectedNotice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedNotice(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-card w-full max-w-2xl rounded-3xl p-8 relative shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedNotice(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface-2 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-body font-bold uppercase tracking-widest">
                  {selectedNotice.category}
                </span>
                <span className="text-xs font-body text-on-surface-muted italic">
                  Posted on {selectedNotice.date}
                </span>
              </div>

              <h2 className="font-display font-bold text-3xl text-on-surface mb-6 leading-tight">
                {selectedNotice.title}
              </h2>

              <div className="prose prose-sm dark:prose-invert max-w-none mb-10">
                <p className="text-base font-body text-on-surface-muted leading-relaxed">
                  {selectedNotice.description}
                </p>
                <p className="text-base font-body text-on-surface-muted leading-relaxed mt-4">
                  Further details and supporting documents can be obtained from the respective department office or the Administrative Block.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => window.open("#", "_blank")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-white font-body font-semibold text-sm hover:scale-105 transition-all shadow-lg"
                >
                  <ExternalLink size={16} /> View Official PDF
                </button>
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="px-6 py-3 rounded-full border border-border text-on-surface font-body font-semibold text-sm hover:bg-surface-2 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

