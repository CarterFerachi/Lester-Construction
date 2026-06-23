"use client";

import { motion } from "framer-motion";

const services = [
  "Home Remodeling",
  "Concrete Work",
  "Custom Fencing",
  "Dirt Work & Site Prep",
];

const areas = [
  "Baton Rouge",
  "Zachary",
  "Central",
  "Prairieville",
  "Denham Springs",
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060606] border-t border-white/5 overflow-hidden">
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      {/* Top section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-white font-bold text-2xl tracking-[0.15em] uppercase">LESTER</div>
              <div className="text-gold text-[10px] tracking-[0.5em] uppercase font-light">CONSTRUCTION</div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8">
              Baton Rouge&apos;s premier home remodeling and construction company. Built on quality, driven by results.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 border border-white/10 hover:border-gold/40 flex items-center justify-center text-white/30 hover:text-gold transition-all duration-300 text-xs"
                >
                  {social === "Facebook" ? "f" : "ig"}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/30 text-[10px] tracking-[0.4em] uppercase mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-white/50 text-sm hover:text-gold transition-colors duration-300 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white/30 text-[10px] tracking-[0.4em] uppercase mb-6">We Serve</h4>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area} className="text-white/50 text-sm">{area}</li>
              ))}
            </ul>
            <div className="mt-8">
              <h4 className="text-white/30 text-[10px] tracking-[0.4em] uppercase mb-4">Contact</h4>
              <a href="tel:+12255550100" className="text-white/60 text-sm hover:text-gold transition-colors block mb-2">(225) 555-0100</a>
              <a href="mailto:info@lesterconstruction.com" className="text-white/60 text-sm hover:text-gold transition-colors block">info@lesterconstruction.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs tracking-wider">
            © {new Date().getFullYear()} Lester Construction. All rights reserved. Baton Rouge, Louisiana.
          </p>
          <div className="flex gap-8">
            {[
              { label: "Services", href: "#services" },
              { label: "Work", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-white/20 text-xs tracking-widest uppercase hover:text-gold/60 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
