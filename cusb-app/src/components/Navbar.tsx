"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Research", href: "/research" },
  { label: "Campus", href: "/contact" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
];

const quickLinks = [
  { label: "A–Z Index", href: "/sitemap" },
  { label: "Student Portal", href: "#" },
  { label: "Staff Portal", href: "#" },
  { label: "Faculty Directory", href: "/faculty" },
  { label: "Sitemap", href: "/sitemap" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Top Bar */}
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card shadow-card border-b border-surface"
            : "bg-transparent"
        }`}
        style={{
          backgroundColor: scrolled ? "rgb(var(--color-card))" : "transparent",
          borderBottomColor: scrolled ? "rgb(var(--color-border))" : "transparent",
        }}
      >
        <div className="container-site flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" id="nav-logo">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0"
              style={{ background: "rgb(var(--color-primary))" }}
            >
              C
            </div>
            <div className="leading-tight">
              <div
                className="font-display font-bold text-sm"
                style={{ color: "rgb(var(--color-primary))" }}
              >
                Central University
              </div>
              <div className="text-xs text-muted font-body">of South Bihar</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-body font-medium transition-standard hover:text-primary"
                style={{ color: "rgb(var(--color-on-surface-muted))" }}
                id={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              id="menu-toggle"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-standard hover:bg-surface-2"
              style={{ color: "rgb(var(--color-on-surface))" }}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Overlay Menu (Harvard-style) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="fullscreen-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ background: "rgba(10, 12, 28, 0.97)" }}
          >
            {/* Header Row */}
            <div className="container-site flex items-center justify-between h-16 flex-shrink-0">
              <Link
                href="/"
                className="flex items-center gap-3"
                onClick={() => setMenuOpen(false)}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-display font-bold text-lg"
                  style={{ background: "rgb(var(--color-primary))" }}>
                  C
                </div>
                <div className="leading-tight">
                  <div className="font-display font-bold text-sm text-white">Central University</div>
                  <div className="text-xs text-gray-400 font-body">of South Bihar</div>
                </div>
              </Link>
              <button
                id="menu-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-standard cursor-pointer"
              >
                <span className="text-sm font-body hidden sm:block">Close</span>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <X size={16} />
                </div>
              </button>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 container-site flex flex-col justify-center gap-2" aria-label="Full screen navigation">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.15, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center gap-4 py-3 border-b transition-standard"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                    id={`fullmenu-${item.label.toLowerCase()}`}
                  >
                    <span
                      className="font-display font-semibold text-4xl sm:text-6xl text-white/80 group-hover:text-white transition-standard"
                    >
                      {item.label}
                    </span>
                    <ChevronRight
                      size={28}
                      className="text-white/30 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-200 mt-1"
                      style={{ color: undefined }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Quick Links Bottom Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="border-t flex-shrink-0"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              <div className="container-site py-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="text-xs text-white/40 font-body uppercase tracking-widest">Quick Links</span>
                <ChevronRight size={14} className="text-white/30 hidden sm:block" />
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-white/60 hover:text-white transition-standard font-body"
                    id={`quicklink-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
