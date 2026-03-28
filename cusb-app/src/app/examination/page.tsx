import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";
import { FileText, ArrowRight, Calendar } from "lucide-react";

const examSchedule = [
  { programme: "M.A. / M.Sc. / M.Com. (Sem I)", type: "Mid-Semester", dates: "Sep 1–5, 2025", mode: "Written" },
  { programme: "M.A. / M.Sc. / M.Com. (Sem I)", type: "End-Semester", dates: "Nov 10–22, 2025", mode: "Written + Practical" },
  { programme: "MBA (Sem I)", type: "Mid-Semester", dates: "Sep 1–5, 2025", mode: "Written + Viva" },
  { programme: "MBA (Sem I)", type: "End-Semester", dates: "Nov 10–22, 2025", mode: "Written + Viva" },
  { programme: "MCA (Sem I)", type: "Mid-Semester", dates: "Sep 1–5, 2025", mode: "Written + Lab" },
  { programme: "MCA (Sem I)", type: "End-Semester", dates: "Nov 10–22, 2025", mode: "Written + Lab" },
  { programme: "Ph.D. Course Work", type: "End-Term", dates: "Nov 15–20, 2025", mode: "Written" },
];

const notices = [
  { title: "End-Semester Examination Guidelines — Odd Semester 2025", date: "Oct 5, 2025" },
  { title: "Examination Fee Payment Schedule 2025-26", date: "Sep 25, 2025" },
  { title: "Result Declaration — Even Semester 2024-25", date: "Jul 15, 2025" },
  { title: "Re-Evaluation / Re-Totalling Application Form", date: "Jul 20, 2025" },
  { title: "Roll Number Slips — Odd Semester 2025", date: "Oct 28, 2025" },
  { title: "Practical Examination Schedule — Nov 2025", date: "Nov 1, 2025" },
];

export default function ExaminationPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container-site relative z-10">
          <p className="text-xs font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Academics</p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-4">Examination</h1>
          <p className="text-base font-body max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            Examination schedules, results, admit cards, and important notices from the CUSB Examination Section.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site">
          {/* Schedule Table */}
          <SectionHeading label="2025–26" title="Examination Schedule" subtitle="Tentative examination dates for the Odd Semester 2025-26. Refer to notices for exact schedules." />
          <div className="overflow-x-auto rounded-2xl border shadow-card mb-14" style={{ borderColor: "rgb(var(--color-border))" }}>
            <table className="w-full text-sm font-body min-w-[600px]">
              <thead>
                <tr style={{ background: "rgb(var(--color-primary))", color: "white" }}>
                  {["Programme", "Exam Type", "Dates", "Mode"].map(h => (
                    <th key={h} className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {examSchedule.map((row, i) => (
                  <tr key={i} className="border-b transition-standard hover:bg-surface-2"
                    style={{ borderColor: "rgb(var(--color-border))", background: i % 2 === 0 ? "rgb(var(--color-card))" : "rgb(var(--color-surface))" }}>
                    <td className="px-5 py-3.5 font-medium text-on-surface">{row.programme}</td>
                    <td className="px-5 py-3.5">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ background: "rgba(var(--color-primary), 0.08)", color: "rgb(var(--color-primary))" }}>
                        {row.type}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 font-semibold" style={{ color: "rgb(var(--color-secondary))" }}>{row.dates}</td>
                    <td className="px-5 py-3.5 text-muted">{row.mode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Notices */}
            <div>
              <SectionHeading label="Exam Notices" title="Recent Notices" />
              <div className="space-y-3">
                {notices.map((notice) => (
                  <div key={notice.title} className="card-base p-4 flex items-start gap-3 group hover:border-primary cursor-pointer"
                    style={{ borderColor: "rgb(var(--color-border))" }}>
                    <FileText size={15} className="flex-shrink-0 mt-0.5" style={{ color: "rgb(var(--color-primary))" }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-body font-medium text-on-surface leading-snug">{notice.title}</p>
                      <p className="text-xs text-muted mt-0.5 flex items-center gap-1">
                        <Calendar size={10} />{notice.date}
                      </p>
                    </div>
                    <ArrowRight size={13} className="text-muted group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* Important Info */}
            <div>
              <SectionHeading label="Rules & Info" title="Key Information" />
              <div className="space-y-4 text-sm font-body text-muted">
                {[
                  { title: "Attendance Requirement", text: "Students must have a minimum of 75% attendance in a course to be eligible to appear in the End-Semester Examination." },
                  { title: "Grading System", text: "CUSB follows a 10-point CGPA grading system under the CBCS framework. Grade points range from O (10) to F (0)." },
                  { title: "Re-Evaluation", text: "Students may apply for re-totalling or re-evaluation of answer scripts within 15 days of result declaration by paying the prescribed fee." },
                  { title: "Admit Card", text: "Admit cards must be downloaded from the student portal before the examination. No student will be permitted without an admit card." },
                ].map((item) => (
                  <div key={item.title} className="card-base p-5">
                    <h4 className="font-display font-bold text-sm text-on-surface mb-1.5">{item.title}</h4>
                    <p className="leading-relaxed">{item.text}</p>
                  </div>
                ))}
                <div className="card-base p-5 text-center">
                  <p className="text-sm font-body text-muted mb-3">For exam-related queries, contact:</p>
                  <a href="mailto:exam@cusb.ac.in" className="font-semibold transition-standard hover:underline"
                    style={{ color: "rgb(var(--color-primary))" }}>exam@cusb.ac.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
