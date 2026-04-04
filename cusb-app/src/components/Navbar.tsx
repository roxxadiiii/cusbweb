"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Research", href: "/research" },
  { label: "Gallery", href: "/gallery" },
  { label: "Campus", href: "/contact" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
];

const quickLinks = [
  { label: "A–Z Index", href: "/atoz" },
  { label: "Student Portal", href: "#" },
  { label: "Staff Portal", href: "#" },
  { label: "Downloads", href: "/downloads" },
  { label: "Notices", href: "/notices" },
  { label: "Administration", href: "/administration" },
  { label: "Site Map", href: "/sitemap" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // When not scrolled, we're over the dark-indigo hero → use white text
  // When scrolled, we're over content → use card bg + normal text
  const isTransparent = !scrolled && !menuOpen;

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
          isTransparent
            ? "border-transparent bg-black/10"
            : "border-b shadow-sm"
        }`}
        style={{
          backgroundColor: isTransparent ? undefined : "rgb(var(--color-card) / 0.8)",
          borderBottomColor: isTransparent ? "transparent" : "rgb(var(--color-border))",
        }}
      >
        <div className="container-site flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" id="nav-logo">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/cusb-logo.png"
                alt="CUSB Logo"
                fill
                className="object-contain drop-shadow-sm"
                priority
              />
            </div>
            <div className="leading-tight hidden sm:block">
              <div
                className="font-display font-bold text-sm transition-colors duration-300"
                style={{ color: isTransparent ? "white" : "rgb(var(--color-on-surface))" }}
              >
                Central University
              </div>
              <div
                className="text-xs font-body transition-colors duration-300"
                style={{ color: isTransparent ? "rgba(255,255,255,0.65)" : "rgb(var(--color-on-surface-muted))" }}
              >
                of South Bihar
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-body font-medium transition-all duration-300 hover:opacity-100"
                style={{
                  color: isTransparent ? "rgba(255,255,255,0.8)" : "rgb(var(--color-on-surface-muted))",
                }}
                id={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              id="menu-toggle"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/10"
              style={{
                color: isTransparent ? "white" : "rgb(var(--color-on-surface))",
              }}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[99]"
              style={{ background: "rgba(0,0,0,0.5)" }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu panel — slides in from left */}
            <motion.div
              id="fullscreen-menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
              className="fixed inset-y-0 left-0 z-[100] flex flex-col w-full sm:max-w-md"
              style={{ background: "rgba(8,10,24,0.98)" }}
            >
              {/* Top Row */}
              <div className="flex items-center justify-between px-6 h-16 flex-shrink-0 border-b"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
                  <div className="relative w-9 h-9 flex-shrink-0">
                    <Image src="/cusb-logo.png" alt="CUSB Logo" fill className="object-contain" />
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
                  className="flex items-center gap-2 cursor-pointer transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  <span className="text-xs font-body hidden sm:block">Close</span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                    <X size={15} />
                  </div>
                </button>
              </div>

              {/* Nav Items */}
              <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1"
                aria-label="Full screen navigation">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1, duration: 0.35 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between py-4 border-b transition-all duration-200"
                      style={{ borderColor: "rgba(255,255,255,0.07)" }}
                      id={`fullmenu-${item.label.toLowerCase()}`}
                    >
                      <span className="font-display font-semibold text-3xl sm:text-4xl text-white/75 group-hover:text-white transition-colors duration-200">
                        {item.label}
                      </span>
                      <ChevronRight
                        size={22}
                        className="text-white/20 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200"
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex-shrink-0 border-t px-6 py-4"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-body uppercase tracking-widest mb-3"
                  style={{ color: "rgba(255,255,255,0.3)" }}>Quick Links</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm font-body transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                      id={`quicklink-${link.label.toLowerCase().replace(/[\s–]/g, "-")}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
