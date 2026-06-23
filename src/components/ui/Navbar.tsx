"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-dark border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollTo("#hero")} className="flex flex-col leading-none group">
            <span className="text-white font-bold text-xl tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-inter)" }}>
              LESTER
            </span>
            <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-light">
              CONSTRUCTION
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-white/70 hover:text-white text-sm tracking-widest uppercase font-light transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <button
              onClick={() => scrollTo("#contact")}
              className="relative overflow-hidden px-6 py-2.5 text-sm font-medium tracking-widest uppercase border border-gold text-gold hover:text-black transition-all duration-500 group"
            >
              <span className="relative z-10">Free Estimate</span>
              <span className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-4 h-px bg-gold transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.1 }}
                onClick={() => scrollTo(link.href)}
                className="text-4xl font-light tracking-widest uppercase text-white/80 hover:text-gold transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => scrollTo("#contact")}
              className="mt-4 px-8 py-3 border border-gold text-gold text-sm tracking-widest uppercase"
            >
              Free Estimate
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
