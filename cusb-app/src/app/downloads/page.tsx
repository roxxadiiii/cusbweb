"use client";

import { motion } from "framer-motion";
import { Download, FileText, User, Users, GraduationCap, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

/* ─── Downloads Data ──────────────────────────────── */
const downloadCategories = [
  {
    title: "Student Forms",
    icon: <GraduationCap size={20} className="text-secondary" />,
    items: [
      { name: "Scholarship Application Form", size: "124 KB", type: "PDF" },
      { name: "Hostel Allotment Request", size: "98 KB", type: "PDF" },
      { name: "Duplicate ID Card Issuance", size: "85 KB", type: "PDF" },
      { name: "Migration Certificate Application", size: "112 KB", type: "PDF" },
      { name: "Examination Change Request", size: "145 KB", type: "DOCX" },
    ],
  },
  {
    title: "Faculty & Staff",
    icon: <Users size={20} className="text-secondary" />,
    items: [
      { name: "Leave Application (Teaching)", size: "75 KB", type: "PDF" },
      { name: "Research Project Proposal Template", size: "210 KB", type: "DOCX" },
      { name: "LTC Intimation/Claim Form", size: "132 KB", type: "PDF" },
      { name: "Annual Property Return Form", size: "94 KB", type: "PDF" },
      { name: "TA/DA Reimbursement Bill", size: "156 KB", type: "PDF" },
    ],
  },
  {
    title: "Administration",
    icon: <Briefcase size={20} className="text-secondary" />,
    items: [
      { name: "Vendor Registration Form", size: "245 KB", type: "PDF" },
      { name: "Asset Requisition Form", size: "82 KB", type: "PDF" },
      { name: "Vehicle Gate Pass Request", size: "64 KB", type: "PDF" },
      { name: "Security Clearane Form", size: "118 KB", type: "PDF" },
    ],
  },
];

export default function DownloadsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-surface">
      <div className="container-site">
        {/* Header */}
        <div className="mb-16">
          <SectionHeading 
            label="Resources"
            title="Download Forms"
            subtitle="Access and download all essential university forms, certificates, and application templates."
          />
        </div>

        {/* Categories Grid */}
        <div className="space-y-16">
          {downloadCategories.map((category, catIdx) => (
            <div key={category.title}>
              <div className="flex items-center gap-3 mb-8 border-b pb-4 border-gray-100 dark:border-white/5">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h2 className="font-display font-bold text-2xl text-on-surface">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIdx * 0.05 }}
                    className="card-base group flex items-center justify-between p-5 hover:border-secondary/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center text-on-surface-muted group-hover:text-secondary group-hover:bg-secondary/5 transition-colors">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-sm text-on-surface leading-tight mb-1">{item.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-body bg-gray-100 dark:bg-white/5 px-1.5 py-0.5 rounded uppercase tracking-wider font-bold text-on-surface-muted opacity-70">
                            {item.type}
                          </span>
                          <span className="text-[10px] font-body text-on-surface-muted opacity-50 uppercase tracking-widest">{item.size}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-on-surface-muted group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all">
                      <Download size={16} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
