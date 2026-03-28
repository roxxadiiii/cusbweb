import { SectionHeading } from "@/components/SectionHeading";

const calendar = [
  {
    semester: "Odd Semester (July – November 2025)",
    events: [
      { date: "Jul 1, 2025", event: "Commencement of Odd Semester classes" },
      { date: "Jul 14–18, 2025", event: "Orientation Programme for new students" },
      { date: "Aug 15, 2025", event: "Independence Day — No Classes" },
      { date: "Sep 1–5, 2025", event: "Mid-Semester Examinations" },
      { date: "Sep 20, 2025", event: "Last date for withdrawal from courses" },
      { date: "Oct 2, 2025", event: "Gandhi Jayanti — No Classes" },
      { date: "Oct 24, 2025", event: "Last date for filling End-Semester Examination forms" },
      { date: "Nov 1, 2025", event: "Diwali / Chhath: University Holiday" },
      { date: "Nov 10–22, 2025", event: "End-Semester Examinations (Theory)" },
      { date: "Nov 24–28, 2025", event: "Practical / Viva-Voce Examinations" },
      { date: "Dec 5, 2025", event: "Declaration of Results — Odd Semester" },
    ],
  },
  {
    semester: "Even Semester (January – May 2026)",
    events: [
      { date: "Jan 5, 2026", event: "Commencement of Even Semester classes" },
      { date: "Jan 26, 2026", event: "Republic Day — No Classes" },
      { date: "Feb 27, 2026", event: "Foundation Day Celebration" },
      { date: "Mar 2–6, 2026", event: "Mid-Semester Examinations" },
      { date: "Mar 20, 2026", event: "Holi — No Classes" },
      { date: "Apr 10, 2026", event: "Last date for filling End-Semester Examination forms" },
      { date: "Apr 14, 2026", event: "Dr. B.R. Ambedkar Jayanti — No Classes" },
      { date: "Apr 25–May 8, 2026", event: "End-Semester Examinations (Theory)" },
      { date: "May 10–14, 2026", event: "Practical / Viva-Voce Examinations" },
      { date: "May 25, 2026", event: "Declaration of Results — Even Semester" },
      { date: "Jun 1–30, 2026", event: "Summer Vacation" },
    ],
  },
];

export default function AcademicCalendarPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container-site relative z-10">
          <p className="text-xs font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Academic Schedule</p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-4">Academic Calendar 2025–26</h1>
          <p className="text-base font-body max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            The official academic calendar for the session 2025–26, approved by the Academic Council of CUSB.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site max-w-4xl">
          <div className="space-y-14">
            {calendar.map((sem) => (
              <div key={sem.semester}>
                <SectionHeading label="Semester" title={sem.semester} />
                <div className="overflow-hidden rounded-2xl border shadow-card" style={{ borderColor: "rgb(var(--color-border))" }}>
                  <table className="w-full text-sm font-body">
                    <thead>
                      <tr style={{ background: "rgb(var(--color-primary))", color: "white" }}>
                        <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider w-40">Date</th>
                        <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider">Event</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sem.events.map((e, i) => (
                        <tr key={i} className="border-b transition-standard hover:bg-surface-2"
                          style={{ borderColor: "rgb(var(--color-border))", background: i % 2 === 0 ? "rgb(var(--color-card))" : "rgb(var(--color-surface))" }}>
                          <td className="px-5 py-3 font-semibold" style={{ color: "rgb(var(--color-primary))" }}>{e.date}</td>
                          <td className="px-5 py-3 text-on-surface">{e.event}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-base p-5 text-sm font-body text-muted leading-relaxed">
            <strong className="text-on-surface">Note:</strong> The above calendar is subject to revision by the Academic Council. Students are advised to check the official CUSB website for any changes. University holidays declared by the Government of India / State Government may also apply.
          </div>
        </div>
      </section>
    </>
  );
}
