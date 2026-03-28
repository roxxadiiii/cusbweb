import { SectionHeading } from "@/components/SectionHeading";
import { FileText, Phone, Mail, ExternalLink } from "lucide-react";

const rtiOfficers = [
  { role: "Central Public Information Officer (CPIO)", name: "Prof. K.N. Singh", designation: "Registrar, CUSB", email: "rti@cusb.ac.in", phone: "+91-631-2229 512" },
  { role: "First Appellate Authority (FAA)", name: "Prof. C.P. Tiwari", designation: "Vice Chancellor, CUSB", email: "vc@cusb.ac.in", phone: "+91-631-2229 510" },
];

const rtiDocs = [
  "RTI Application Form (Plain Language)", "Proactive Disclosures under Section 4(1)(b)",
  "CUSB RTI Policy 2023-24", "Organisation Chart & Working Hours",
  "Powers & Duties of Officers", "Budget Allocation & Expenditure",
  "Decision-Making Process", "Directory of Officers & Employees",
  "Monthly Remuneration of Officers", "Names of PIOs and AAs",
];

export default function RTIPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container-site relative z-10">
          <p className="text-xs font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Right to Information</p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-4">RTI — CUSB</h1>
          <p className="text-base font-body max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            Central University of South Bihar complies with the Right to Information Act, 2005. Citizens may seek public information through the designated officers below.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site max-w-4xl space-y-12">
          {/* Officers */}
          <div>
            <SectionHeading label="Designated Officers" title="RTI Officers" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {rtiOfficers.map((o) => (
                <div key={o.role} className="card-base p-6">
                  <p className="text-xs font-body font-bold uppercase tracking-widest mb-3" style={{ color: "rgb(var(--color-secondary))" }}>{o.role}</p>
                  <h3 className="font-display font-bold text-base text-on-surface mb-0.5">{o.name}</h3>
                  <p className="text-xs font-body text-muted mb-4">{o.designation}</p>
                  <div className="space-y-2">
                    <a href={`tel:${o.phone}`} className="flex items-center gap-2 text-sm font-body text-muted hover:text-primary transition-standard">
                      <Phone size={13} style={{ color: "rgb(var(--color-primary))" }} />{o.phone}
                    </a>
                    <a href={`mailto:${o.email}`} className="flex items-center gap-2 text-sm font-body text-muted hover:text-primary transition-standard">
                      <Mail size={13} style={{ color: "rgb(var(--color-primary))" }} />{o.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Apply */}
          <div>
            <SectionHeading label="Process" title="How to File an RTI Application" />
            <div className="space-y-4">
              {[
                { step: "01", text: "Write your application in Hindi or English clearly specifying the information sought." },
                { step: "02", text: 'Pay the application fee of ₹10/- via Demand Draft/IPO in favour of "Central University of South Bihar".' },
                { step: "03", text: "Send the application by post or e-mail to the CPIO address mentioned above." },
                { step: "04", text: "The CPIO is required to respond within 30 days of receipt of the application." },
                { step: "05", text: "If unsatisfied, you may appeal to the First Appellate Authority within 30 days of receiving (or not receiving) a reply." },
              ].map((item) => (
                <div key={item.step} className="card-base p-5 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0"
                    style={{ background: "rgb(var(--color-primary))" }}>{item.step}</div>
                  <p className="text-sm font-body text-muted leading-relaxed pt-1.5">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div>
            <SectionHeading label="Proactive Disclosure" title="Section 4 Disclosures" subtitle="Information proactively disclosed by CUSB as required under Section 4(1)(b) of the RTI Act." />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {rtiDocs.map((doc) => (
                <div key={doc} className="card-base p-4 flex items-center gap-3 group hover:border-primary cursor-pointer"
                  style={{ borderColor: "rgb(var(--color-border))" }}>
                  <FileText size={15} style={{ color: "rgb(var(--color-primary))" }} className="flex-shrink-0" />
                  <span className="text-sm font-body text-on-surface">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CIC Link */}
          <div className="card-base p-6 flex items-start gap-4">
            <ExternalLink size={20} style={{ color: "rgb(var(--color-primary))" }} className="flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display font-bold text-base text-on-surface mb-1">Central Information Commission (CIC)</h3>
              <p className="text-sm font-body text-muted mb-3">Second appeal or complaint may be filed to the CIC if the CPIO or FAA fails to respond adequately.</p>
              <a href="https://cic.gov.in" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-body font-semibold transition-standard hover:gap-2"
                style={{ color: "rgb(var(--color-primary))" }}>
                Visit CIC Website <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
