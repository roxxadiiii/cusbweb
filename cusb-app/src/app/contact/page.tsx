"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const contactDetails = [
  { icon: <MapPin size={20} />, label: "Address", value: "NH-120, Gaya Panchanpur Road, Post Fatehpur, Gaya – 824236 (Bihar) India" },
  { icon: <Phone size={20} />, label: "Reception", value: "+91-631-2229 530" },
  { icon: <Phone size={20} />, label: "Information", value: "+91-631-2229 507" },
  { icon: <Mail size={20} />, label: "General", value: "registrar@cub.ac.in" },
  { icon: <Mail size={20} />, label: "Admissions", value: "admission@cusb.ac.in" },
  { icon: <Mail size={20} />, label: "Webmaster", value: "webmaster@cusb.ac.in" },
  { icon: <Clock size={20} />, label: "Office Hours", value: "Mon – Fri: 9:00 AM – 5:30 PM" },
];

const offices = [
  { name: "Vice Chancellor's Office", email: "vc@cusb.ac.in", phone: "+91-631-2229 510" },
  { name: "Registrar's Office", email: "registrar@cub.ac.in", phone: "+91-631-2229 512" },
  { name: "Finance Officer", email: "fo@cusb.ac.in", phone: "+91-631-2229 514" },
  { name: "Dean of Academics", email: "dean.academics@cusb.ac.in", phone: "+91-631-2229 516" },
  { name: "Dean of Students", email: "dean.students@cusb.ac.in", phone: "+91-631-2229 518" },
  { name: "Examination Section", email: "exam@cusb.ac.in", phone: "+91-631-2229 520" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative" style={{ background: "rgb(var(--color-primary))" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container-site relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Get in Touch</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-4">Contact Us</h1>
            <p className="text-base font-body max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              We are happy to hear from you. Reach out to us via the form, email, or visit the campus at Panchanpur, Gaya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding bg-surface">
        <div className="container-site grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Details */}
          <div className="space-y-5">
            <SectionHeading label="Reach Us" title="Contact Details" />
            {contactDetails.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(var(--color-primary), 0.08)", color: "rgb(var(--color-primary))" }}>
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-body font-semibold uppercase tracking-wider text-muted">{c.label}</p>
                  <p className="text-sm font-body text-on-surface mt-0.5">{c.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <SectionHeading label="Message Us" title="Send a Message" />
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-body font-semibold text-muted uppercase tracking-wider mb-1.5" htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm font-body rounded-xl border outline-none transition-standard"
                    style={{ background: "rgb(var(--color-card))", borderColor: "rgb(var(--color-border))", color: "rgb(var(--color-on-surface))" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-body font-semibold text-muted uppercase tracking-wider mb-1.5" htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm font-body rounded-xl border outline-none transition-standard"
                    style={{ background: "rgb(var(--color-card))", borderColor: "rgb(var(--color-border))", color: "rgb(var(--color-on-surface))" }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-body font-semibold text-muted uppercase tracking-wider mb-1.5" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="What is this regarding?"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 text-sm font-body rounded-xl border outline-none transition-standard"
                  style={{ background: "rgb(var(--color-card))", borderColor: "rgb(var(--color-border))", color: "rgb(var(--color-on-surface))" }}
                />
              </div>
              <div>
                <label className="block text-xs font-body font-semibold text-muted uppercase tracking-wider mb-1.5" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Write your message here…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm font-body rounded-xl border outline-none transition-standard resize-none"
                  style={{ background: "rgb(var(--color-card))", borderColor: "rgb(var(--color-border))", color: "rgb(var(--color-on-surface))" }}
                />
              </div>
              <button
                id="contact-submit"
                type="submit"
                className="px-8 py-3.5 rounded-full font-body font-semibold text-sm text-white transition-all duration-300 hover:opacity-90 hover:scale-105 cursor-pointer"
                style={{ background: "rgb(var(--color-primary))" }}
              >
                {sent ? "✓ Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-surface-2">
        <div className="container-site pb-16">
          <SectionHeading label="Campus Location" title="Find Us on the Map" />
          <div className="rounded-2xl overflow-hidden border border-surface shadow-card h-80">
            <iframe
              title="CUSB Campus Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.839!2d84.9707!3d24.7551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ1JzE4LjQiTiA4NMKwNTgnMTQuNiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Office Directory */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <SectionHeading label="Offices" title="Key Offices" subtitle="Contact specific university offices directly." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offices.map((office, i) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-base p-5"
              >
                <h3 className="font-display font-bold text-sm text-on-surface mb-3">{office.name}</h3>
                <div className="space-y-1.5">
                  <a href={`tel:${office.phone}`} className="flex items-center gap-2 text-xs font-body text-muted hover:text-primary transition-standard">
                    <Phone size={11} style={{ color: "rgb(var(--color-primary))" }} /> {office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-xs font-body text-muted hover:text-primary transition-standard">
                    <Mail size={11} style={{ color: "rgb(var(--color-primary))" }} /> {office.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
