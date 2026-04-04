"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, Download, ExternalLink, ChevronRight, Hash, Database, Filter } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

/* ─── A-Z Data ────────────────────────────────────── */
const allResources = [
  // New Forms provided by user
  { label: "Admission Cancellation Form", href: "/forms/app_cancel_admission.6pdf.pdf", category: "Forms", type: "PDF" },
  { label: "Application for Issuing Various Certificate", href: "/forms/application_for_issuing_various_certificate.pdf", category: "Forms", type: "PDF" },
  { label: "Application for University Certificate", href: "/forms/app_issuance_university_certi.pdf", category: "Forms", type: "PDF" },
  { label: "Backlog Forms (CBCS Programmes)", href: "/forms/backlog_forms_for_CBCS_programmes.pdf", category: "Forms", type: "PDF" },
  { label: "Bonafide Certificate & Fee Structure", href: "/forms/bonafide_cert_fee_stru.pdf", category: "Forms", type: "PDF" },
  { label: "Degree Certificate in Absentia", href: "/forms/form_degree_cert_absentia.pdf", category: "Forms", type: "PDF" },
  { label: "Hostel Deposit Refund Form", href: "/forms/refund_of_hostel_deposit.8pdf.pdf", category: "Forms", type: "PDF" },
  { label: "ID Application Form (Student)", href: "/forms/id_application_form_stud.3pdf.pdf", category: "Forms", type: "PDF" },
  { label: "ID Card Notification", href: "/forms/notification_id_card.2pdf.pdf", category: "Forms", type: "PDF" },
  { label: "Master Dissertation Thesis Format", href: "/forms/Master_Dissertation_Thesis_Format.pdf", category: "Forms", type: "PDF" },
  { label: "Minor Project Report Format", href: "/forms/Minor_project_report.pdf", category: "Forms", type: "PDF" },
  { label: "No Dues Certificate", href: "/forms/nodues_certificate.7pdf.pdf", category: "Forms", type: "PDF" },
  { label: "Refund Amount Request Code", href: "/forms/application_refund_amount_under_cc.pdf", category: "Forms", type: "PDF" },
  { label: "Requisition of Vehicle Format", href: "/forms/Requisition format of vehicle.pdf", category: "Forms", type: "PDF" },
  { label: "Security Deposit Refund Form", href: "/forms/form_refund_security_deposit_cc.9pdf.pdf", category: "Forms", type: "PDF" },

  // A
  { label: "Academic Council", href: "/administration", category: "Admin", type: "Link" },
  { label: "Academic Calendar", href: "/notices", category: "Academics", type: "Link" },
  { label: "Academic Notices", href: "/notices", category: "News", type: "Link" },
  { label: "Academic Programmes", href: "/academics", category: "Academics", type: "Link" },
  { label: "Admission Portal (UG/PG)", href: "/admissions", category: "Admissions", type: "Link" },
  { label: "Admissions Helpline", href: "/contact", category: "Admissions", type: "Link" },
  { label: "Agriculture Department", href: "/administration", category: "Academics", type: "Link" },
  { label: "AISHE Portal", href: "https://aishe.gov.in", category: "Important", type: "Link" },
  { label: "Alumni Association", href: "/about", category: "Student Life", type: "Link" },
  { label: "Annual Reports & Accounts", href: "/about", category: "Admin", type: "Link" },
  { label: "Anti-Ragging Cell", href: "/about", category: "Student Life", type: "Link" },
  { label: "Anti-Sexual Harassment Cell (ICC)", href: "/about", category: "Admin", type: "Link" },
  { label: "Aryabhatta Bhawan (Academic Block)", href: "/administration", category: "Infrastructure", type: "Link" },

  // B
  { label: "Bank & ATM (Campus)", href: "/contact", category: "Infrastructure", type: "Link" },
  { label: "Bioinformatics Department", href: "/administration", category: "Academics", type: "Link" },
  { label: "Biotechnology Department", href: "/administration", category: "Academics", type: "Link" },
  { label: "Board of Studies", href: "/administration", category: "Admin", type: "Link" },

  // C
  { label: "Canteen & Cafeteria", href: "/about", category: "Infrastructure", type: "Link" },
  { label: "Central Library", href: "https://ndl.iitkgp.ac.in", category: "Library", type: "Link" },
  { label: "CBCS Regulations", href: "/academics", category: "Academics", type: "Link" },
  { label: "Chancellor Office", href: "/administration", category: "Admin", type: "Link" },
  { label: "Chanakya Bhawan (Academic Block)", href: "/administration", category: "Infrastructure", type: "Link" },
  { label: "Chemistry Department", href: "/administration", category: "Academics", type: "Link" },
  { label: "Commerce & Business Studies", href: "/administration", category: "Academics", type: "Link" },
  { label: "Computer Science Department", href: "/administration", category: "Academics", type: "Link" },
  { label: "Controller of Examinations", href: "/notices", category: "Admin", type: "Link" },
  { label: "CUET UG Admissions", href: "/admissions", category: "Admissions", type: "Link" },
  { label: "CUET PG Admissions", href: "/admissions", category: "Admissions", type: "Link" },

  // D
  { label: "Deans of Schools", href: "/administration", category: "Admin", type: "Link" },
  { label: "Departments Directory", href: "/administration", category: "Academics", type: "Link" },
  { label: "Development Studies", href: "/administration", category: "Academics", type: "Link" },
  { label: "Digital Locker (NAD)", href: "https://nad.gov.in", category: "Important", type: "Link" },
  { label: "Download Forms Central", href: "/downloads", category: "Forms", type: "Link" },

  // E
  { label: "Earth & Biological Sciences", href: "/administration", category: "Academics", type: "Link" },
  { label: "Economic Studies & Policy", href: "/administration", category: "Academics", type: "Link" },
  { label: "Education Department", href: "/administration", category: "Academics", type: "Link" },
  { label: "Eligibility Criteria (CUET)", href: "/admissions", category: "Admissions", type: "Link" },
  { label: "English Department", href: "/administration", category: "Academics", type: "Link" },
  { label: "Environmental Science", href: "/administration", category: "Academics", type: "Link" },
  { label: "Equal Opportunity Cell", href: "/about", category: "Student Life", type: "Link" },
  { label: "Executive Council", href: "/administration", category: "Admin", type: "Link" },

  // F
  { label: "Faculty Directory", href: "/faculty", category: "Faculty", type: "Link" },
  { label: "Fee Structure", href: "/admissions", category: "Admissions", type: "Link" },
  { label: "Finance Committee", href: "/administration", category: "Admin", type: "Link" },
  { label: "Finance Officer", href: "/administration", category: "Admin", type: "Link" },

  // G
  { label: "Gallery & Campus Photos", href: "/gallery", category: "About", type: "Link" },
  { label: "Geography Department", href: "/administration", category: "Academics", type: "Link" },
  { label: "Geology Department", href: "/administration", category: "Academics", type: "Link" },
  { label: "Guest House Booking", href: "/contact", category: "Infrastructure", type: "Link" },

  // H
  { label: "Health Centre (University)", href: "/about", category: "Infrastructure", type: "Link" },
  { label: "Heads of Department (HODs)", href: "/administration", category: "Admin", type: "Link" },
  { label: "Hindi Department", href: "/administration", category: "Academics", type: "Link" },
  { label: "History & Background", href: "/about", category: "About", type: "Link" },
  { label: "Holiday List 2026", href: "/notices", category: "News", type: "Link" },
  { label: "Hostel & Mess Services", href: "/about", category: "Student Life", type: "Link" },

  // I
  { label: "India.gov.in Portal", href: "https://india.gov.in", category: "Important", type: "Link" },
  { label: "Information Literacy", href: "https://ndl.iitkgp.ac.in", category: "Library", type: "Link" },
  { label: "Internal Quality Assurance Cell", href: "/administration", category: "Admin", type: "Link" },
  { label: "IPR Cell", href: "/research", category: "Research", type: "Link" },

  // L
  { label: "Language & Literature School", href: "/administration", category: "Academics", type: "Link" },
  { label: "Latest News", href: "/news", category: "News", type: "Link" },
  { label: "Law & Governance School", href: "/administration", category: "Academics", type: "Link" },
  { label: "Library & Information Science", href: "/administration", category: "Academics", type: "Link" },
  { label: "Life Science Department", href: "/administration", category: "Academics", type: "Link" },

  // M
  { label: "Main Building (Admin)", href: "/administration", category: "Infrastructure", type: "Link" },
  { label: "Management School", href: "/administration", category: "Academics", type: "Link" },
  { label: "Mass Communication & Media", href: "/administration", category: "Academics", type: "Link" },
  { label: "Map & Directions", href: "/contact", category: "About", type: "Link" },
  { label: "Mathematics Department", href: "/administration", category: "Academics", type: "Link" },
  { label: "Mission & Vision", href: "/about", category: "About", type: "Link" },
  { label: "MyGov.in Portal", href: "https://www.mygov.in", category: "Important", type: "Link" },

  // N
  { label: "NAAC Accreditations", href: "/about", category: "Admin", type: "Link" },
  { label: "National Digital Library", href: "https://ndl.iitkgp.ac.in", category: "Important", type: "Link" },
  { label: "National Scholarship Portal", href: "https://scholarships.gov.in", category: "Important", type: "Link" },
  { label: "NIRF Rankings", href: "/about", category: "Admin", type: "Link" },
  { label: "NSS & NCC Units", href: "/about", category: "Student Life", type: "Link" },

  // P
  { label: "Pharmacy Department", href: "/administration", category: "Academics", type: "Link" },
  { label: "PhD Admission Notifications", href: "/notices", category: "Admissions", type: "Link" },
  { label: "Physics Department", href: "/administration", category: "Academics", type: "Link" },
  { label: "Placement Cell", href: "/about", category: "Student Life", type: "Link" },
  { label: "Planning Board", href: "/administration", category: "Admin", type: "Link" },
  { label: "Political Studies", href: "/administration", category: "Academics", type: "Link" },
  { label: "Press Releases", href: "/news", category: "News", type: "Link" },
  { label: "Proctor Office", href: "/administration", category: "Admin", type: "Link" },
  { label: "Psychological Sciences", href: "/administration", category: "Academics", type: "Link" },
  { label: "Public Grievance Portal", href: "https://pgportal.gov.in", category: "Important", type: "Link" },

  // R
  { label: "Recruitment (Faculty/Staff)", href: "/news", category: "News", type: "Link" },
  { label: "Registrar Office", href: "/administration", category: "Admin", type: "Link" },
  { label: "Regulations (Academic)", href: "/academics", category: "Academics", type: "Link" },
  { label: "Research Council", href: "/research", category: "Research", type: "Link" },
  { label: "Research Projects", href: "/research", category: "Research", type: "Link" },
  { label: "Reservation Policy", href: "/admissions", category: "Admissions", type: "Link" },
  { label: "RTI Information", href: "/about", category: "Admin", type: "Link" },

  // S
  { label: "SAMARTH Portal", href: "https://samarth.edu.in", category: "Important", type: "Link" },
  { label: "Scholarships", href: "/admissions", category: "Admissions", type: "Link" },
  { label: "Sitemap", href: "/sitemap", category: "Admin", type: "Link" },
  { label: "Social Sciences & Policy", href: "/administration", category: "Academics", type: "Link" },
  { label: "Sociological Studies", href: "/administration", category: "Academics", type: "Link" },
  { label: "Sports & Fitness", href: "/about", category: "Student Life", type: "Link" },
  { label: "Statistics Department", href: "/administration", category: "Academics", type: "Link" },
  { label: "Student Welfare Office", href: "/about", category: "Student Life", type: "Link" },
  { label: "SWAYAM Portal", href: "https://swayam.gov.in", category: "Important", type: "Link" },

  // T
  { label: "Teacher Education", href: "/administration", category: "Academics", type: "Link" },
  { label: "Tenders", href: "/news", category: "News", type: "Link" },
  { label: "Transport Services", href: "/about", category: "Infrastructure", type: "Link" },

  // U
  { label: "UGC Official Site", href: "https://www.ugc.gov.in", category: "Important", type: "Link" },
  { label: "Upcoming Events", href: "/news", category: "News", type: "Link" },

  // V
  { label: "Vice-Chancellor Office", href: "/administration", category: "Admin", type: "Link" },
  { label: "Vision & Goals", href: "/about", category: "About", type: "Link" },

  // W
  { label: "Women Cell", href: "/about", category: "Admin", type: "Link" },
];

const categories = ["All Resources", "Forms", "Academics", "Admin", "Research", "Admissions", "Student Life", "News", "Important"];
const alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function AtoZIndexPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Resources");

  const filteredResources = useMemo(() => {
    return allResources.filter(res => {
      const matchesSearch = res.label.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All Resources" || res.category === activeCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => a.label.localeCompare(b.label));
  }, [searchTerm, activeCategory]);

  const groupedResources = useMemo(() => {
    const groups: { [key: string]: typeof allResources } = {};
    filteredResources.forEach(res => {
      const firstLetter = res.label[0].toUpperCase();
      const letter = /[A-Z]/.test(firstLetter) ? firstLetter : "#";
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(res);
    });
    return groups;
  }, [filteredResources]);

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-surface">
      <div className="container-site">
        {/* Header */}
        <div className="mb-12">
          <SectionHeading 
            label="A–Z Repository"
            title="Resource Archive"
            subtitle="Explore our comprehensive directory of services, academic pages, official forms, and administrative links."
          />
        </div>

        {/* Search & Statistics */}
        <div className="flex flex-col lg:flex-row items-center gap-6 mb-12">
          <div className="relative flex-1 w-full">
            <input 
              type="text" 
              placeholder="Search resource name, form title, or keyword..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-surface-2 border border-border rounded-2xl text-base font-body focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 shadow-inner"
            />
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          </div>
          <div className="flex items-center gap-4 bg-surface-2 px-6 py-4 rounded-2xl border border-border whitespace-nowrap">
            <Database size={20} className="text-secondary" />
            <span className="text-sm font-body font-bold text-on-surface">
              {filteredResources.length} Resources Indexed
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-border">
          <div className="flex items-center gap-2 mr-4 text-xs font-body font-bold text-muted uppercase tracking-widest">
            <Filter size={14} /> Filter:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-body font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                activeCategory === cat 
                  ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20 scale-105" 
                  : "bg-surface-2 text-on-surface-muted hover:bg-secondary/10 hover:text-secondary border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* A-Z Jump Bar */}
        <div className="sticky top-20 z-40 bg-surface/90 backdrop-blur-md py-4 mb-12 border-b border-border">
          <div className="flex flex-wrap justify-between gap-1 max-w-4xl mx-auto">
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => scrollToLetter(letter)}
                disabled={!groupedResources[letter]}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-display font-bold transition-all ${
                  groupedResources[letter] 
                    ? "text-secondary hover:bg-secondary hover:text-white cursor-pointer" 
                    : "text-muted/30 cursor-not-allowed"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Data List */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {Object.keys(groupedResources).sort().map((letter) => (
              <motion.div 
                key={letter} 
                id={`letter-${letter}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white text-xl font-display font-bold shadow-lg shadow-secondary/20">
                    {letter}
                  </div>
                  <div className="h-[1px] flex-1 bg-border" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-2">
                  {groupedResources[letter].map((res, i) => (
                    <motion.div 
                      key={res.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.02 }}
                    >
                      <Link 
                        href={res.href}
                        target={res.href.startsWith("http") || res.href.endsWith(".pdf") ? "_blank" : "_self"}
                        className="group flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-secondary/10 hover:bg-secondary/[0.03] transition-all"
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            res.type === "PDF" ? "bg-red-500/10 text-red-500" : "bg-primary/10 text-primary"
                          }`}>
                            {res.type === "PDF" ? <Download size={14} /> : <ExternalLink size={14} />}
                          </div>
                          <div>
                            <span className="text-sm font-body text-on-surface group-hover:text-secondary transition-colors font-medium truncate block">
                              {res.label}
                            </span>
                            <span className="text-[10px] font-body uppercase tracking-wider text-muted opacity-60">
                              {res.category}
                            </span>
                          </div>
                        </div>
                        <ChevronRight size={14} className="text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {Object.keys(groupedResources).length === 0 && (
            <div className="py-40 text-center">
              <div className="w-20 h-20 rounded-full bg-surface-2 flex items-center justify-center mx-auto mb-6 text-muted">
                <Search size={32} />
              </div>
              <h2 className="font-display font-bold text-2xl text-on-surface mb-2">No Resources Found</h2>
              <p className="text-on-surface-muted font-body mb-8">
                Your search for &quot;{searchTerm}&quot; did not match any indexed materials.
              </p>
              <button 
                onClick={() => { setSearchTerm(""); setActiveCategory("All Resources"); }}
                className="px-8 py-3 rounded-full bg-secondary text-white font-body font-bold hover:scale-105 transition-all shadow-lg"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
