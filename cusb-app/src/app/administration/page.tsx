"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { User, Mail, GraduationCap, Building2, MapPin, Search } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

/* ─── Administration Data ─────────────────────────── */
const deans = [
  { school: "School of Earth, Biological and Environmental Sciences", dean: "Prof. Rizwanul Haque", email: "dean.sebes@cusb.ac.in" },
  { school: "School of Mathematics, Statistics and Computer Science", dean: "Prof. Jay Prakash Singh", email: "dean.smscs@cusb.ac.in" },
  { school: "School of Physical and Chemical Sciences", dean: "Prof. Amiya Priyam", email: "dean.spcs@cusb.ac.in" },
  { school: "School of Social Sciences & Policy", dean: "Prof. Pranav Kumar", email: "dean.sssp@cusb.ac.in" },
  { school: "School of Human Science", dean: "Dr. Manglesh Kumar Manglam", email: "dean.shs@cusb.ac.in" },
  { school: "School of Language and Literature", dean: "Prof. Vipin Kumar Singh", email: "dean.sll@cusb.ac.in" },
  { school: "School of Media, arts and Aesthetics", dean: "Prof. K. Shiva Shankar", email: "dean.sll@cusb.ac.in" },
  { school: "School of Law and Governance", dean: "Prof. Ashok Kumar", email: "dean.slg@cusb.ac.in" },
  { school: "Schools of Education", dean: "Prof. Ravi Kant", email: "dean.soe@cusb.ac.in" },
  { school: "School of Management", dean: "Prof. Subramanian Shanmugam", email: "dean.som@cusb.ac.in" },
  { school: "School of Health Science", dean: "Prof. Subrat Kumar Bhattamisra", email: "dean.sohs@cusb.ac.in" },
  { school: "School of Agriculture and Development", dean: "Prof. Ram Ashish Yadav", email: "dean.sad@cusb.ac.in" },
];

const buildingData = [
  {
    building: "Aryabhatta Bhawan",
    schools: [
      {
        name: "School of Mathematics, Statistics and Computer Science",
        departments: [
          { name: "Department of Computer Science", head: "Prof. Prabhat Ranjan", email: "hod.csc@cusb.ac.in" },
          { name: "Department of Mathematics", head: "Prof. Jay Prakash Singh", email: "hod.mth@cusb.ac.in" },
          { name: "Department of Statistics", head: "Prof. Sunit Kumar", email: "hod.sts@cusb.ac.in" },
        ]
      },
      {
        name: "School of Earth, Biological and Environmental Sciences",
        departments: [
          { name: "Department of Bioinformatics", head: "Prof. R. S. Rathore", email: "hod.bis@cusb.ac.in" },
          { name: "Department of Biotechnology", head: "Prof. Rakesh Kumar", email: "hod.btn@cusb.ac.in" },
          { name: "Department of Life Science", head: "Prof. Ram Pratap Singh", email: "hod.lsc@cusb.ac.in" },
          { name: "Department of Environmental Science", head: "Prof. Rajesh Kumar Ranjan", email: "hod.esc@cusb.ac.in" },
          { name: "Department of Geology", head: "Prof. Prafull Kumar Singh", email: "hod.geology@cusb.ac.in" },
          { name: "Department of Geography", head: "Prof. Kiran Kumari", email: "hod.geography@cusb.ac.in" },
        ]
      },
      {
        name: "School of Physical and Chemical Sciences",
        departments: [
          { name: "Department of Physics", head: "Prof. Budhendra Kumar Singh", email: "hod.phy@cusb.ac.in" },
          { name: "Department of Chemistry", head: "Prof. Amiya Priyam", email: "hod.che@cusb.ac.in" },
        ]
      },
      {
        name: "School of Health Sciences",
        departments: [
          { name: "Department of Pharmacy", head: "Prof. Vivek Dave", email: "hod.pharmacy@cusb.ac.in" },
        ]
      }
    ]
  },
  {
    building: "Chanakya Bhawan",
    schools: [
      {
        name: "School of Social Sciences and Policy",
        departments: [
          { name: "Department of Development Studies", head: "Prof. Krishnan Chalil", email: "hod.dvs@cusb.ac.in" },
          { name: "Department of Economic Studies and Policies", head: "Prof. Krishnan Chalil", email: "hod.eco@cusb.ac.in" },
          { name: "Department of Political Studies", head: "Prof. Praveen Kumar", email: "hod.pcs@cusb.ac.in" },
          { name: "Department of Sociological Studies", head: "Prof. M Vijay Kumar Sharma", email: "hod.soc@cusb.ac.in" },
          { name: "Historical Studies and Archaeology", head: "Prof. Anand Singh", email: "hod.his@cusb.ac.in" },
        ]
      },
      {
        name: "School of Human Science",
        departments: [
          { name: "Department of Psychological Sciences", head: "Prof. Dharmendra Kumar Singh", email: "hod.psy@cusb.ac.in" },
        ]
      },
      {
        name: "School of Language and literature",
        departments: [
          { name: "Department of Hindi", head: "Prof. Suresh Chandra", email: "hod.hin@cusb.ac.in" },
          { name: "Department of English", head: "Prof. Vipin Kumar Singh", email: "hod.eng@cusb.ac.in" },
        ]
      },
      {
        name: "School of Media, arts and Aesthetics",
        departments: [
          { name: "Department of Mass Communication and Media", head: "Prof. K. Shiva Shankar", email: "hod.cms@cusb.ac.in" },
        ]
      },
      {
        name: "School of Law and Governance",
        departments: [
          { name: "Department of Law and Governance", head: "Prof. Ashok Kumar", email: "hod.dlg@cusb.ac.in" },
        ]
      },
      {
        name: "School of Management",
        departments: [
          { name: "Department of Commerce and Business Studies", head: "Prof. Subramanian Shanmugam", email: "hod.cbs@cusb.ac.in" },
        ]
      },
      {
        name: "School of Education",
        departments: [
          { name: "Department of Teacher Education", head: "Prof. Ravi Kant", email: "hod.dte@cusb.ac.in" },
          { name: "Department of Physical Education", head: "Prof. Usha Tiwari", email: "hod.phed@cusb.ac.in" },
        ]
      },
      {
        name: "School of Agriculture and Development",
        departments: [
          { name: "Department of Agriculture", head: "Prof. Avanish Prakash Singh", email: "hod.doa@cusb.ac.in" },
        ]
      },
      {
        name: "School of Library and Information Science",
        departments: [
          { name: "Department of Library and Information Science", head: "Dr. Pramod Kumar singh (In-charge)", email: "hod.doa@cusb.ac.in" },
        ]
      }
    ]
  }
];

export default function AdministrationPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBuildings = buildingData.map(building => ({
    ...building,
    schools: building.schools.map(school => ({
      ...school,
      departments: school.departments.filter(dept => 
        dept.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        dept.head.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(school => school.departments.length > 0)
  })).filter(building => building.schools.length > 0);

  return (
    <main className="min-h-screen pt-24 pb-20 bg-surface">
      <div className="container-site">
        {/* Header */}
        <div className="mb-16">
          <SectionHeading 
            label="University Leadership"
            title="Administration & Governance"
            subtitle="The leadership team dedicated to academic excellence, innovative research, and student-focused administration."
          />
        </div>

        {/* Top Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-base p-8 flex flex-col items-center text-center group border-secondary/20 shadow-xl shadow-secondary/5"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-105 transition-all outline outline-offset-4 outline-secondary/10">
              <Image 
                src="/admin/chancellor.png" 
                alt="Chancellor Dr. C.P. Thakur"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display font-medium text-xs uppercase tracking-[0.2em] text-secondary mb-2">Chancellor</h3>
            <h2 className="font-display font-bold text-3xl text-on-surface mb-2">Dr. C.P. Thakur</h2>
            <div className="h-0.5 w-12 bg-secondary opacity-30 rounded-full mb-6"></div>
            <p className="text-sm font-body text-on-surface-muted leading-relaxed max-w-sm">
              Hon&apos;ble Chancellor of Central University of South Bihar.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-base p-8 flex flex-col items-center text-center group border-secondary/20 shadow-xl shadow-secondary/5"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-105 transition-all outline outline-offset-4 outline-secondary/10">
              <Image 
                src="/admin/vc.png" 
                alt="Vice-Chancellor Prof. Kameshwar Nath Singh"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display font-medium text-xs uppercase tracking-[0.2em] text-secondary mb-2">Vice-Chancellor</h3>
            <h2 className="font-display font-bold text-3xl text-on-surface mb-2">Prof. Kameshwar Nath Singh</h2>
            <div className="h-0.5 w-12 bg-secondary opacity-30 rounded-full mb-6"></div>
            <p className="text-sm font-body text-on-surface-muted leading-relaxed max-w-sm">
              Hon&apos;ble Vice-Chancellor guiding the institutional vision and academic roadmap.
            </p>
          </motion.div>
        </div>

        {/* Deans Section */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10 pb-4 border-b border-border">
            <GraduationCap size={24} className="text-secondary" />
            <h2 className="font-display font-bold text-3xl text-on-surface">Deans of Schools</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deans.map((dean, i) => (
              <motion.div 
                key={dean.school}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-base p-6 hover:shadow-lg transition-all border-l-4 border-l-secondary/20"
              >
                <h3 className="font-display font-bold text-sm text-on-surface leading-snug mb-4 h-10 line-clamp-2">{dean.school}</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-on-surface">
                    <User size={14} className="text-secondary opacity-70" />
                    <span className="text-sm font-body font-semibold">{dean.dean}</span>
                  </div>
                  <a href={`mailto:${dean.email}`} className="flex items-center gap-2 text-on-surface-muted hover:text-secondary transition-colors group">
                    <Mail size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="text-xs font-body">{dean.email}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Heads of Department Section */}
        <div id="hod-section">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center justify-between mb-10 pb-4 border-b border-border">
            <div className="flex items-center gap-3">
              <Building2 size={24} className="text-secondary" />
              <h2 className="font-display font-bold text-3xl text-on-surface">Heads of Department</h2>
            </div>
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Search departments or heads..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-surface-2 border border-border rounded-full text-sm font-body focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all"
              />
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-secondary cursor-pointer"
                >
                  <Search size={14} className="rotate-45" /> {/* Close-like icon */}
                </button>
              )}
            </div>
          </div>

          <div className="space-y-16">
            <AnimatePresence mode="popLayout">
              {filteredBuildings.length > 0 ? (
                filteredBuildings.map((building) => (
                  <motion.div 
                    key={building.building}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center gap-2 mb-8 bg-surface-2 px-4 py-2 rounded-lg border border-border inline-flex">
                      <MapPin size={16} className="text-secondary" />
                      <span className="font-display font-bold text-sm tracking-widest uppercase">{building.building}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {building.schools.map((school) => (
                        <div key={school.name} className="space-y-4">
                          <h3 className="font-display font-bold text-xs uppercase tracking-widest text-secondary opacity-80 border-b border-secondary/10 pb-2">
                            {school.name}
                          </h3>
                          <div className="space-y-4">
                            {school.departments.map((dept) => (
                              <div key={dept.name} className="flex flex-col gap-1 p-2 rounded-lg hover:bg-surface-2 transition-colors">
                                <h4 className="text-sm font-display font-bold text-on-surface">{dept.name}</h4>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                                  <div className="flex items-center gap-1.5 text-xs text-on-surface-muted">
                                    <User size={12} className="opacity-60" />
                                    <span className="font-body">{dept.head}</span>
                                  </div>
                                  <a href={`mailto:${dept.email}`} className="flex items-center gap-1.5 text-[11px] text-secondary hover:underline font-body">
                                    <Mail size={11} />
                                    <span>{dept.email}</span>
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="py-20 text-center">
                  <p className="font-display text-lg text-on-surface-muted">No departments or heads found matching your search.</p>
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="mt-4 text-secondary font-body font-semibold hover:underline"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}

