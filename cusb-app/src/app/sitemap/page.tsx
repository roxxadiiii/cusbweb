import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const sitemap = [
  {
    section: "Home",
    href: "/",
    links: [],
  },
  {
    section: "About",
    href: "/about",
    links: [
      { label: "History & Background", href: "/about" },
      { label: "Vision & Mission", href: "/about" },
      { label: "Key Officials", href: "/about" },
      { label: "Campus", href: "/about" },
      { label: "RTI", href: "#" },
      { label: "Annual Reports", href: "#" },
    ],
  },
  {
    section: "Academics",
    href: "/academics",
    links: [
      { label: "Schools & Departments", href: "/academics" },
      { label: "Programmes Offered", href: "/academics" },
      { label: "CBCS Regulations", href: "#" },
      { label: "Academic Calendar", href: "#" },
      { label: "Examination", href: "#" },
      { label: "Digital Library", href: "#" },
    ],
  },
  {
    section: "Admissions",
    href: "/admissions",
    links: [
      { label: "CUET-UG Admissions", href: "/admissions" },
      { label: "CUET-PG Admissions", href: "/admissions" },
      { label: "Ph.D. Admissions", href: "/admissions" },
      { label: "Eligibility Criteria", href: "/admissions" },
      { label: "Fee Structure", href: "#" },
      { label: "Scholarships", href: "#" },
    ],
  },
  {
    section: "Administration",
    href: "#",
    links: [
      { label: "Executive Council", href: "#" },
      { label: "Academic Council", href: "#" },
      { label: "Finance Committee", href: "#" },
      { label: "Planning Board", href: "#" },
      { label: "IQAC", href: "#" },
    ],
  },
  {
    section: "Research",
    href: "#",
    links: [
      { label: "Research Projects", href: "#" },
      { label: "Publications", href: "#" },
      { label: "Research Centres", href: "#" },
      { label: "Consultancy", href: "#" },
      { label: "IPR Cell", href: "#" },
    ],
  },
  {
    section: "Student Life",
    href: "#",
    links: [
      { label: "Clubs & Associations", href: "#" },
      { label: "Hostel & Mess", href: "#" },
      { label: "Sports & Fitness", href: "#" },
      { label: "Student Welfare", href: "#" },
      { label: "Anti-Ragging Cell", href: "#" },
      { label: "Alumni", href: "#" },
    ],
  },
  {
    section: "Faculty",
    href: "/faculty",
    links: [
      { label: "Faculty Directory", href: "/faculty" },
      { label: "Staff Directory", href: "#" },
    ],
  },
  {
    section: "News & Events",
    href: "/news",
    links: [
      { label: "Latest News", href: "/news" },
      { label: "Events", href: "/news" },
      { label: "Tenders", href: "/news" },
      { label: "Recruitment Notices", href: "/news" },
      { label: "Academic Notices", href: "#" },
    ],
  },
  {
    section: "Important Links",
    href: "#",
    links: [
      { label: "SWAYAM", href: "https://swayam.gov.in" },
      { label: "SWAYAM Prabha", href: "#" },
      { label: "National Digital Library", href: "https://ndl.iitkgp.ac.in" },
      { label: "AISHE", href: "https://aishe.gov.in" },
      { label: "MyGov", href: "https://www.mygov.in" },
      { label: "India.gov.in", href: "https://india.gov.in" },
      { label: "NTA / CUET", href: "https://cuet.nta.nic.in" },
      { label: "UGC", href: "https://www.ugc.gov.in" },
    ],
  },
  {
    section: "Contact",
    href: "/contact",
    links: [
      { label: "Contact Information", href: "/contact" },
      { label: "Map & Directions", href: "/contact" },
      { label: "Key Offices", href: "/contact" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container-site relative z-10">
          <p className="text-xs font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Navigation</p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-4">Site Map</h1>
          <p className="text-base font-body leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            A complete overview of all pages and sections on the CUSB website.
          </p>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sitemap.map((section) => (
              <div key={section.section} className="card-base p-5">
                {/* Section Header */}
                <Link
                  href={section.href}
                  className="flex items-center gap-1 font-display font-bold text-base mb-3 transition-standard hover:text-primary"
                  style={{ color: "rgb(var(--color-primary))" }}
                >
                  {section.section}
                  <ChevronRight size={14} />
                </Link>

                {section.links.length > 0 && (
                  <ul className="space-y-2 pl-1 border-l-2" style={{ borderColor: "rgb(var(--color-border))" }}>
                    {section.links.map((link) => (
                      <li key={link.label} className="pl-3">
                        <Link
                          href={link.href}
                          className="text-sm font-body text-muted transition-standard hover:text-on-surface flex items-center gap-1 group"
                        >
                          <span className="w-1 h-1 rounded-full flex-shrink-0 bg-current opacity-40 group-hover:opacity-100" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
