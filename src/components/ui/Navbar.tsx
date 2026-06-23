"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-dark border-b border-white/5 shadow-[0_2px_40px_rgba(0,0,0,0.6)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-[72px]">

          {/* Logo — strong brand mark */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-3 group"
          >
            {/* Gold L mark */}
            <div className="relative w-8 h-8 flex-shrink-0">
              <motion.div
                className="absolute inset-0 bg-gold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-black font-black text-sm leading-none">L</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-base tracking-[0.2em] uppercase group-hover:text-white/90 transition-colors">
                Lester
              </span>
              <span className="text-gold text-[9px] tracking-[0.5em] uppercase font-light mt-0.5">
                Construction
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-white/55 hover:text-white text-[11px] tracking-[0.25em] uppercase font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+12255550100" className="text-white/40 text-xs tracking-wider hover:text-gold transition-colors">
              (225) 555-0100
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="relative overflow-hidden px-5 py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase border border-gold/80 text-gold hover:text-black transition-colors duration-400 group"
            >
              <span className="relative z-10">Free Estimate</span>
              <span className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-[9px]" : "w-6"}`} />
            <span className={`block h-px bg-gold transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-4"}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-[5px]" : "w-6"}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#060606] flex flex-col items-center justify-center gap-8"
          >
            {/* Brand */}
            <div className="absolute top-8 left-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gold flex items-center justify-center">
                <span className="text-black font-black text-sm">L</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-base tracking-[0.2em] uppercase">Lester</span>
                <span className="text-gold text-[9px] tracking-[0.5em] uppercase font-light mt-0.5">Construction</span>
              </div>
            </div>

            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.15 }}
                onClick={() => scrollTo(link.href)}
                className="text-3xl sm:text-4xl font-light tracking-[0.15em] uppercase text-white/70 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </motion.button>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-4 flex flex-col items-center gap-4"
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="px-10 py-4 bg-gold text-black text-sm font-bold tracking-[0.25em] uppercase"
              >
                Free Estimate
              </button>
              <a href="tel:+12255550100" className="text-white/30 text-xs tracking-wider">(225) 555-0100</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
