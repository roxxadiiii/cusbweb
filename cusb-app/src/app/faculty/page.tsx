"use client";
import { motion } from "framer-motion";
import { Search, Mail, BookOpen } from "lucide-react";
import { useState } from "react";

const departments = ["All", "SEBES", "SSSP", "SOE", "SCMS", "SLLC", "SMS", "SCS", "SFA"];

const faculty = [
  { name: "Prof. Amit Kumar Verma", dept: "SEBES", designation: "Professor & Head", specialization: "Environmental Microbiology", email: "akv@cusb.ac.in", publications: 42 },
  { name: "Dr. Priya Ranjan Singh", dept: "SSSP", designation: "Associate Professor", specialization: "Development Economics", email: "prs@cusb.ac.in", publications: 28 },
  { name: "Prof. Sunita Devi", dept: "SOE", designation: "Professor", specialization: "Curriculum Development", email: "sd@cusb.ac.in", publications: 35 },
  { name: "Dr. Rajesh Kumar Gupta", dept: "SCMS", designation: "Assistant Professor", specialization: "Financial Management", email: "rkg@cusb.ac.in", publications: 19 },
  { name: "Prof. Meera Kumari", dept: "SLLC", designation: "Professor & Head", specialization: "Hindi Literature", email: "mk@cusb.ac.in", publications: 51 },
  { name: "Dr. Arun Shankar", dept: "SMS", designation: "Associate Professor", specialization: "Number Theory", email: "as@cusb.ac.in", publications: 23 },
  { name: "Dr. Vinay Prakash", dept: "SCS", designation: "Assistant Professor", specialization: "Machine Learning", email: "vp@cusb.ac.in", publications: 16 },
  { name: "Prof. Chandrika Yadav", dept: "SEBES", designation: "Professor", specialization: "Plant Ecology", email: "cy@cusb.ac.in", publications: 38 },
  { name: "Dr. Neeraj Tiwari", dept: "SSSP", designation: "Assistant Professor", specialization: "Public Policy", email: "nt@cusb.ac.in", publications: 12 },
  { name: "Prof. Deepa Mishra", dept: "SOE", designation: "Associate Professor", specialization: "Educational Psychology", email: "dm@cusb.ac.in", publications: 27 },
  { name: "Dr. Sanjay Pal", dept: "SCMS", designation: "Associate Professor", specialization: "Marketing Management", email: "sp@cusb.ac.in", publications: 21 },
  { name: "Dr. Ritu Singh", dept: "SCS", designation: "Associate Professor", specialization: "Data Science & AI", email: "rs@cusb.ac.in", publications: 18 },
];

const colours: Record<string, string> = {
  SEBES: "#22c55e", SSSP: "#3b82f6", SOE: "#f59e0b",
  SCMS: "#8b5cf6", SLLC: "#ec4899", SMS: "#14b8a6",
  SCS: "#f97316", SFA: "#a855f7",
};

export default function FacultyPage() {
  const [search, setSearch] = useState("");
  const [activeDept, setActiveDept] = useState("All");

  const filtered = faculty.filter((f) => {
    const matchesDept = activeDept === "All" || f.dept === activeDept;
    const matchesSearch =
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.specialization.toLowerCase().includes(search.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container-site relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>People</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-4">Faculty Directory</h1>
            <p className="text-base font-body max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Meet our world-class faculty — researchers, educators, and innovators driving excellence across disciplines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-surface-2 border-b border-surface sticky top-16 z-30">
        <div className="container-site flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              id="faculty-search"
              type="text"
              placeholder="Search by name or specialization…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm font-body rounded-xl border outline-none focus:ring-2 bg-card text-on-surface transition-standard"
              style={{
                borderColor: "rgb(var(--color-border))",
                background: "rgb(var(--color-card))",
              }}
            />
          </div>
          {/* Dept tabs */}
          <div className="flex flex-wrap gap-1.5">
            {departments.map((d) => (
              <button
                key={d}
                id={`faculty-filter-${d.toLowerCase()}`}
                onClick={() => setActiveDept(d)}
                className="px-3 py-1.5 rounded-full text-xs font-body font-medium transition-all cursor-pointer"
                style={
                  activeDept === d
                    ? { background: "rgb(var(--color-primary))", color: "white" }
                    : { background: "rgb(var(--color-card))", color: "rgb(var(--color-on-surface-muted))", border: "1px solid rgb(var(--color-border))" }
                }
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted font-body">No faculty found.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((person, i) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="card-base p-5 flex flex-col gap-3 group"
                >
                  {/* Avatar */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0"
                      style={{ background: colours[person.dept] || "rgb(var(--color-primary))" }}
                    >
                      {person.name.split(" ").slice(-1)[0][0]}
                    </div>
                    <div>
                      <span
                        className="text-xs font-body font-bold uppercase tracking-wider"
                        style={{ color: colours[person.dept] }}
                      >{person.dept}</span>
                      <h3 className="font-display font-semibold text-sm text-on-surface leading-snug">{person.name}</h3>
                    </div>
                  </div>

                  <p className="text-xs font-body text-muted">{person.designation}</p>

                  <div className="flex items-start gap-1.5">
                    <BookOpen size={12} className="mt-0.5 flex-shrink-0 text-muted" />
                    <span className="text-xs font-body text-muted italic">{person.specialization}</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t" style={{ borderColor: "rgb(var(--color-border))" }}>
                    <a
                      href={`mailto:${person.email}`}
                      className="inline-flex items-center gap-1 text-xs font-body transition-standard hover:text-primary"
                      style={{ color: "rgb(var(--color-primary))" }}
                    >
                      <Mail size={11} /> {person.email}
                    </a>
                    <span className="text-xs font-body text-muted">{person.publications} pubs</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          <p className="text-xs text-muted font-body mt-8 text-center">
            Showing {filtered.length} of {faculty.length} faculty members. Full directory available on request.
          </p>
        </div>
      </section>
    </>
  );
}
