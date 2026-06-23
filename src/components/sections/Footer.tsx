"use client";

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
    <footer className="relative bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      {/* CTA strip */}
      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/30 text-xs tracking-[0.4em] uppercase mb-1">Ready to get started?</p>
            <p className="text-white text-lg font-semibold">Call or text us — we respond fast.</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+12255550100"
              className="text-gold font-bold text-xl tracking-wide hover:text-gold-light transition-colors"
            >
              (225) 555-0100
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-6 py-3 bg-gold text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#E8C76A] transition-colors"
            >
              Free Estimate
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-gold flex items-center justify-center flex-shrink-0">
                <span className="text-black font-black text-base">L</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg tracking-[0.2em] uppercase">Lester Construction</span>
                <span className="text-gold text-[9px] tracking-[0.45em] uppercase font-light mt-0.5">Baton Rouge, Louisiana</span>
              </div>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-sm mb-8">
              Baton Rouge&apos;s premier home remodeling and construction company. We transform properties across South Louisiana with craftsmanship that lasts.
            </p>
            <div className="flex gap-3">
              {["f", "ig"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 border border-white/10 hover:border-gold/50 flex items-center justify-center text-white/30 hover:text-gold transition-all duration-300 text-xs font-medium"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/25 text-[10px] tracking-[0.4em] uppercase mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-white/45 text-sm hover:text-gold transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas + Contact */}
          <div>
            <h4 className="text-white/25 text-[10px] tracking-[0.4em] uppercase mb-5">We Serve</h4>
            <ul className="space-y-2.5 mb-8">
              {areas.map((area) => (
                <li key={area} className="text-white/45 text-sm">{area}</li>
              ))}
            </ul>
            <h4 className="text-white/25 text-[10px] tracking-[0.4em] uppercase mb-4">Contact</h4>
            <a href="tel:+12255550100" className="text-white/55 text-sm hover:text-gold transition-colors block mb-2">(225) 555-0100</a>
            <a href="mailto:info@lesterconstruction.com" className="text-white/55 text-sm hover:text-gold transition-colors block">info@lesterconstruction.com</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/15 text-xs tracking-wider">
            © {new Date().getFullYear()} Lester Construction LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Services", href: "#services" },
              { label: "Work", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-white/15 text-xs tracking-[0.2em] uppercase hover:text-white/40 transition-colors"
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
