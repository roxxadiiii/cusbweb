import { SectionHeading } from "@/components/SectionHeading";
import { ExternalLink, ArrowRight } from "lucide-react";

const scholarships = [
  {
    category: "Government of India Scholarships",
    colour: "#3b82f6",
    schemes: [
      { name: "National Scholarship Portal (NSP) — Central Sector", eligibility: "Class 12 pass, family income < ₹8 lakh/year", amount: "₹10,000–12,000 / year", apply: "https://scholarships.gov.in" },
      { name: "Post Matric Scholarship for SC Students", eligibility: "SC category, pursuing PG/Ph.D.", amount: "Full tuition + maintenance", apply: "https://scholarships.gov.in" },
      { name: "Post Matric Scholarship for ST Students", eligibility: "ST category, pursuing PG/Ph.D.", amount: "Full tuition + maintenance", apply: "https://scholarships.gov.in" },
      { name: "OBC Post Matric Scholarship", eligibility: "OBC Non-Creamy Layer, pursuing PG", amount: "₹3,000–5,700 + fees", apply: "https://scholarships.gov.in" },
    ],
  },
  {
    category: "UGC Fellowships & Scholarships",
    colour: "#8b5cf6",
    schemes: [
      { name: "UGC-JRF / SRF (NET Qualified)", eligibility: "NET qualified candidates enrolled in Ph.D.", amount: "₹37,000–42,000 / month", apply: "https://ugcnet.nta.ac.in" },
      { name: "UGC Non-NET Fellowship", eligibility: "Ph.D. scholars without NET/GATE", amount: "₹8,000 / month", apply: "https://www.ugc.gov.in" },
      { name: "Maulana Azad National Fellowship (MANF)", eligibility: "Minority community students (Ph.D.)", amount: "₹37,000 / month + contingency", apply: "https://maef.nic.in" },
      { name: "Rajiv Gandhi National Fellowship (RGNF)", eligibility: "SC/ST students pursuing Ph.D.", amount: "₹37,000 / month + contingency", apply: "https://socialjustice.nic.in" },
    ],
  },
  {
    category: "CUSB Internal Assistance",
    colour: "#22c55e",
    schemes: [
      { name: "CUSB Merit Scholarship", eligibility: "Top 5% students in each programme based on SGPA", amount: "₹5,000 / semester", apply: "/contact" },
      { name: "CUSB Need-Based Financial Assistance", eligibility: "Economically weaker students (verified)", amount: "Up to ₹10,000 / year", apply: "/contact" },
      { name: "Sports Excellence Award", eligibility: "National-level sports representation", amount: "₹3,000 + certificate", apply: "/student-life" },
    ],
  },
];

export default function ScholarshipsPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container-site relative z-10">
          <p className="text-xs font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Financial Support</p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-4">Scholarships & Fellowships</h1>
          <p className="text-base font-body max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            CUSB students and scholars can avail a range of scholarships, fellowships, and financial assistance from the Government of India, UGC, and the university itself.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site space-y-14">
          {scholarships.map((cat) => (
            <div key={cat.category}>
              <SectionHeading label="Scholarships" title={cat.category} />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {cat.schemes.map((scheme) => (
                  <div key={scheme.name} className="card-base p-5 flex flex-col gap-3">
                    <h3 className="font-display font-bold text-sm text-on-surface leading-snug">{scheme.name}</h3>
                    <div className="space-y-1.5 text-xs font-body text-muted">
                      <p><span className="font-semibold text-on-surface">Eligibility:</span> {scheme.eligibility}</p>
                      <p><span className="font-semibold text-on-surface">Amount:</span>{" "}
                        <span className="font-bold" style={{ color: cat.colour }}>{scheme.amount}</span>
                      </p>
                    </div>
                    <a href={scheme.apply} target={scheme.apply.startsWith("http") ? "_blank" : undefined}
                      rel={scheme.apply.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 text-xs font-body font-semibold mt-auto transition-standard hover:gap-2"
                      style={{ color: cat.colour }}>
                      {scheme.apply.startsWith("http") ? "Apply / Know More" : "Apply at CUSB"}{" "}
                      {scheme.apply.startsWith("http") ? <ExternalLink size={11} /> : <ArrowRight size={11} />}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="card-base p-6 text-sm font-body text-muted leading-relaxed">
            <strong className="text-on-surface block mb-2">Important Notes:</strong>
            <ul className="space-y-1 list-disc list-inside">
              <li>Students must apply for scholarships through the <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">National Scholarship Portal (NSP)</a> within the prescribed timeline.</li>
              <li>Fresh application is required every academic year for most government scholarships.</li>
              <li>Income certificates and caste certificates must be from competent authorities.</li>
              <li>For CUSB internal scholarships, contact the Dean of Students office.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
