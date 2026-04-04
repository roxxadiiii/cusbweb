import { SectionHeading } from "@/components/SectionHeading";
import { FileText, ExternalLink, ChevronRight } from "lucide-react";

const quarters = [
  {
    quarter: "Q1 2025–26 (Apr – Jun 2025)",
    disclosures: [
      { title: "Budget & Expenditure Statement — Q1 2025-26", type: "PDF", size: "1.2 MB" },
      { title: "Minutes of Finance Committee Meeting — May 2025", type: "PDF", size: "0.8 MB" },
      { title: "Audit Compliance Report — Q1", type: "PDF", size: "0.5 MB" },
    ],
  },
  {
    quarter: "Q2 2025–26 (Jul – Sep 2025)",
    disclosures: [
      { title: "Budget & Expenditure Statement — Q2 2025-26", type: "PDF", size: "1.4 MB" },
      { title: "Minutes of Executive Council Meeting — Aug 2025", type: "PDF", size: "1.1 MB" },
      { title: "Annual Procurement Plan 2025-26", type: "PDF", size: "0.6 MB" },
    ],
  },
  {
    quarter: "Q3 2025–26 (Oct – Dec 2025)",
    disclosures: [
      { title: "Budget & Expenditure Statement — Q3 2025-26", type: "PDF", size: "1.3 MB" },
      { title: "NIRF Data Submission 2026", type: "PDF", size: "0.9 MB" },
      { title: "Minutes of Academic Council Meeting — Nov 2025", type: "PDF", size: "1.0 MB" },
    ],
  },
  {
    quarter: "Annual Report 2024–25",
    disclosures: [
      { title: "CUSB Annual Report 2024–25 (Full)", type: "PDF", size: "8.4 MB" },
      { title: "Audited Financial Statements 2024–25", type: "PDF", size: "3.2 MB" },
      { title: "IQAC Annual Quality Assurance Report 2024–25", type: "PDF", size: "2.1 MB" },
      { title: "Annual Report 2023–24", type: "PDF", size: "7.8 MB" },
      { title: "Annual Report 2022–23", type: "PDF", size: "6.5 MB" },
    ],
  },
];

export default function AnnualReportsPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container-site relative z-10">
          <p className="text-xs font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Transparency & Governance</p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-4">Annual Reports</h1>
          <p className="text-base font-body max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            Access CUSB&apos;s annual reports, audited statements, committee minutes, and public disclosures as mandated by UGC and Government guidelines.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site max-w-4xl">
          <div className="space-y-10">
            {quarters.map((q, qi) => (
              <div key={qi}>
                <SectionHeading label="Reports" title={q.quarter} />
                <div className="space-y-3">
                  {q.disclosures.map((doc, di) => (
                    <div key={di} className="card-base p-4 flex items-center justify-between gap-4 group hover:border-primary cursor-pointer"
                      style={{ borderColor: "rgb(var(--color-border))" }}>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(var(--color-primary), 0.08)", color: "rgb(var(--color-primary))" }}>
                          <FileText size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-body font-medium text-on-surface">{doc.title}</p>
                          <p className="text-xs text-muted font-body">{doc.type} · {doc.size}</p>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-muted group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 card-base p-6 flex items-start gap-4">
            <ExternalLink size={20} style={{ color: "rgb(var(--color-primary))" }} className="flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display font-bold text-base text-on-surface mb-1">Public Self Disclosure (PSD)</h3>
              <p className="text-sm font-body text-muted mb-3">As mandated by UGC, CUSB publishes all statutory disclosures on the UGC Public Self Disclosure portal.</p>
              <a href="https://psd.ugc.ac.in" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-body font-semibold transition-standard hover:gap-2"
                style={{ color: "rgb(var(--color-primary))" }}>
                Visit UGC PSD Portal <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
