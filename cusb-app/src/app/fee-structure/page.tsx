import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const feeStructure = [
  {
    programme: "M.A. / M.Sc. / M.Com.",
    semester: "₹4,500",
    annual: "₹9,000",
    hostel: "₹18,000 / year",
    mess: "₹2,500 / month",
  },
  {
    programme: "MBA",
    semester: "₹12,500",
    annual: "₹25,000",
    hostel: "₹18,000 / year",
    mess: "₹2,500 / month",
  },
  {
    programme: "MCA",
    semester: "₹10,000",
    annual: "₹20,000",
    hostel: "₹18,000 / year",
    mess: "₹2,500 / month",
  },
  {
    programme: "M.Ed.",
    semester: "₹6,000",
    annual: "₹12,000",
    hostel: "₹18,000 / year",
    mess: "₹2,500 / month",
  },
  {
    programme: "M.F.A. / M.P.A.",
    semester: "₹5,000",
    annual: "₹10,000",
    hostel: "₹18,000 / year",
    mess: "₹2,500 / month",
  },
  {
    programme: "Ph.D.",
    semester: "₹3,000",
    annual: "₹6,000",
    hostel: "₹18,000 / year",
    mess: "₹2,500 / month",
  },
];

const additionalFees = [
  { item: "Admission Fee (one-time)", amount: "₹500" },
  { item: "Library Deposit (refundable)", amount: "₹1,000" },
  { item: "Identity Card", amount: "₹100" },
  { item: "Student Activity Fund (per semester)", amount: "₹500" },
  { item: "Examination Fee (per semester)", amount: "₹300" },
];

export default function FeeStructurePage() {
  return (
    <>
      <section className="pt-32 pb-20 relative" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container-site relative z-10">
          <p className="text-xs font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Admissions</p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-4">Fee Structure 2025–26</h1>
          <p className="text-base font-body max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            Programme-wise fee structure for the academic session 2025–26. Fees are subject to revision by the Finance Committee.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site">
          <SectionHeading label="Tuition Fees" title="Programme Fee Structure" subtitle="All amounts are in Indian Rupees (₹). Fees are per semester unless stated otherwise." />
          <div className="overflow-x-auto rounded-2xl border shadow-card mb-12" style={{ borderColor: "rgb(var(--color-border))" }}>
            <table className="w-full text-sm font-body min-w-[640px]">
              <thead>
                <tr style={{ background: "rgb(var(--color-primary))", color: "white" }}>
                  {["Programme", "Per Semester", "Per Year", "Hostel (Annual)", "Mess"].map(h => (
                    <th key={h} className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((row, i) => (
                  <tr key={row.programme} className="border-b transition-standard hover:bg-surface-2"
                    style={{ borderColor: "rgb(var(--color-border))", background: i % 2 === 0 ? "rgb(var(--color-card))" : "rgb(var(--color-surface))" }}>
                    <td className="px-5 py-3.5 font-medium text-on-surface">{row.programme}</td>
                    <td className="px-5 py-3.5 font-semibold" style={{ color: "rgb(var(--color-primary))" }}>{row.semester}</td>
                    <td className="px-5 py-3.5 text-muted">{row.annual}</td>
                    <td className="px-5 py-3.5 text-muted">{row.hostel}</td>
                    <td className="px-5 py-3.5 text-muted">{row.mess}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <SectionHeading label="Other Charges" title="Additional Fees" />
              <div className="space-y-3">
                {additionalFees.map((f) => (
                  <div key={f.item} className="card-base p-4 flex items-center justify-between">
                    <span className="text-sm font-body text-on-surface">{f.item}</span>
                    <span className="font-display font-bold text-base" style={{ color: "rgb(var(--color-primary))" }}>{f.amount}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading label="Concessions" title="Fee Waivers & Scholarships" />
              <div className="card-base p-6 space-y-3 text-sm font-body text-muted leading-relaxed">
                <p>● <strong className="text-on-surface">SC/ST students:</strong> Full tuition fee waiver as per Government of India norms.</p>
                <p>● <strong className="text-on-surface">OBC (Non-Creamy Layer):</strong> 27% reservation in admissions; fee concessions as per state govt. rules.</p>
                <p>● <strong className="text-on-surface">PwD students:</strong> 5% reservation; additional fee concession as per UGC guidelines.</p>
                <p>● <strong className="text-on-surface">Girls/Women:</strong> Additional 5% relaxation in eligibility criteria for admissions.</p>
                <p>● <strong className="text-on-surface">Central Sector Scholarship:</strong> Eligible students may apply via the National Scholarship Portal (NSP).</p>
                <Link href="/scholarships" className="inline-flex items-center gap-1 mt-2 text-sm font-semibold transition-standard hover:gap-2"
                  style={{ color: "rgb(var(--color-primary))" }}>
                  View all scholarships <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-8 text-xs font-body text-muted text-center">
            * The above fee structure is indicative and may be revised by the Finance Committee. For the most current information, refer to the official CUSB admission bulletin.
          </p>
        </div>
      </section>
    </>
  );
}
