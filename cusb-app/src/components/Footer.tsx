import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

// Inline brand icons (lucide-react dropped social icons in v0.460+)
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IconTwitter = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);
const IconYoutube = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);
const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const footerSections = [
  {
    title: "Academics",
    links: [
      { label: "Departments", href: "/academics" },
      { label: "Academic Programmes", href: "/academics" },
      { label: "Academic Calendar", href: "/notices" },
      { label: "Examination", href: "/notices" },
      { label: "Downloads", href: "/downloads" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "How to Apply", href: "/admissions" },
      { label: "CUET Admissions", href: "/admissions" },
      { label: "Fee Structure", href: "/admissions" },
      { label: "Scholarships", href: "/admissions" },
      { label: "Ph.D. Admissions", href: "/admissions" },
    ],
  },
  {
    title: "Student Life",
    links: [
      { label: "Clubs & Associations", href: "/about" },
      { label: "Hostel & Mess", href: "/about" },
      { label: "Sports & Activities", href: "/about" },
      { label: "Student Welfare", href: "/about" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Institute",
    links: [
      { label: "About CUSB", href: "/about" },
      { label: "Administration", href: "/administration" },
      { label: "Faculty Directory", href: "/faculty" },
      { label: "News & Events", href: "/news" },
      { label: "A–Z Index", href: "/atoz" },
    ],
  },
];

const socialLinks = [
  { icon: <IconFacebook />, href: "#", label: "Facebook" },
  { icon: <IconTwitter />, href: "#", label: "Twitter / X" },
  { icon: <IconYoutube />, href: "#", label: "YouTube" },
  { icon: <IconInstagram />, href: "#", label: "Instagram" },
  { icon: <IconLinkedin />, href: "#", label: "LinkedIn" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "A–Z Index", href: "/atoz" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "RTI", href: "/about" },
  { label: "Public Self Disclosure", href: "#" },
];

export function Footer() {
  return (
    <footer id="footer" style={{ backgroundColor: "rgb(var(--color-footer-bg))" }}>
      {/* Main Footer */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-6" id="footer-logo">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image src="/cusb-logo.png" alt="CUSB Logo" fill className="object-contain" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-white text-sm">Central University</div>
                <div className="text-xs font-body" style={{ color: "rgba(255,255,255,0.5)" }}>
                  of South Bihar
                </div>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-6 font-body" style={{ color: "rgba(255,255,255,0.55)" }}>
              Established under the Central Universities Act, 2009 (Section 25 of 2009) as a UGC Category I University.
            </p>

            {/* Contact */}
            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "rgb(var(--color-secondary))" }} />
                <span className="text-xs font-body" style={{ color: "rgba(255,255,255,0.5)" }}>
                  SH-7, Gaya Panchanpur Road, Village – Karhara, Post. Fatehpur, Gaya – 824236 (Bihar)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} style={{ color: "rgb(var(--color-secondary))" }} />
                <span className="text-xs font-body" style={{ color: "rgba(255,255,255,0.5)" }}>+91-631-2229 530</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} style={{ color: "rgb(var(--color-secondary))" }} />
                <a href="mailto:admission@cusb.ac.in" className="text-xs font-body hover:text-white transition-standard" style={{ color: "rgba(255,255,255,0.5)" }}>
                  admission@cusb.ac.in
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-standard hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  id={`social-${label.toLowerCase().replace(/\s|\//g, "-")}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3
                  className="font-body font-semibold text-xs uppercase tracking-widest mb-4"
                  style={{ color: "rgb(var(--color-secondary))" }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm font-body transition-standard hover:text-white"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-body" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Central University of South Bihar, Gaya. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-body transition-standard hover:text-white"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
