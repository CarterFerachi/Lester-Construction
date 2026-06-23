"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    id: "remodeling",
    number: "01",
    title: "Home Remodeling",
    description: "Complete interior and exterior transformations. We reimagine every detail of your home — from kitchens and bathrooms to full exterior renovations that add lasting value.",
    features: ["Kitchen & Bath Remodels", "Exterior Renovations", "Room Additions", "Full Home Makeovers"],
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260623_003109_0e9eb931-851e-4e97-83fd-7fc5e115a4e9.png",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M6 38L24 6L42 38H6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 38V26H34V38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 38V32H28V38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "concrete",
    number: "02",
    title: "Concrete Work",
    description: "Precision-poured concrete that combines strength with beauty. Driveways, patios, sidewalks, and foundations — every pour is crafted to last decades.",
    features: ["Premium Driveways", "Custom Patios", "Sidewalks & Walkways", "Foundations & Slabs"],
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260623_003105_fafd90c3-234f-496e-9733-9a25acafaf47.png",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="4" y="30" width="40" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 30V16M16 30V20M24 30V14M32 30V20M40 30V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 16H44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "fencing",
    number: "03",
    title: "Custom Fencing",
    description: "Every property deserves boundaries as beautiful as what's inside. We craft privacy, security, and curb appeal with premium fencing tailored to your vision.",
    features: ["Privacy Fences", "Wood & Cedar Fencing", "Decorative Fencing", "Custom Installations"],
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260623_003107_c539bab0-af57-452d-a037-84e4c1d6f95f.png",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M4 38V18M44 38V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 18L8 10L12 18M36 18L40 10L44 18" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M4 26H44M4 32H44M4 38H44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 38V18M20 38V18M28 38V18M32 38V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "dirtwork",
    number: "04",
    title: "Dirt Work & Site Prep",
    description: "The foundation of every great project starts below the surface. Expert land clearing, grading, and site preparation that sets the stage for flawless construction.",
    features: ["Land Clearing", "Site Grading", "Drainage Solutions", "Excavation & Fill"],
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260623_003108_4f126b8d-744f-430c-b31c-01d7150329a9.png",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M4 36H44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 36V28L14 20L22 28L28 22L36 28V36" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="36" cy="22" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M40 22H44V30H40" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section id="services" ref={sectionRef} className="relative py-32 lg:py-48 bg-[#080808] overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-28"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs tracking-[0.5em] uppercase">What We Build</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-none max-w-3xl">
            OUR{" "}
            <span className="text-gradient-gold">SERVICES</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative group bg-[#080808] p-10 lg:p-14 overflow-hidden cursor-pointer"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Hover Background Image */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  activeService === service.id ? "opacity-15" : "opacity-0"
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gold accent on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Left gold border */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-px bg-gold origin-top"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 + 0.4 }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-gold/40 text-5xl font-bold leading-none" style={{ fontFamily: "var(--font-inter)" }}>
                    {service.number}
                  </span>
                  <div className="text-gold/60 group-hover:text-gold transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md group-hover:text-white/70 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2 mb-10">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/40 text-xs tracking-wider uppercase group-hover:text-white/60 transition-colors duration-300">
                      <span className="w-4 h-px bg-gold/60" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA arrow */}
                <div className="flex items-center gap-3 text-gold/60 group-hover:text-gold transition-all duration-300">
                  <span className="text-xs tracking-widest uppercase font-medium">Learn More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/40 text-sm tracking-wider mb-6">
            Not sure what you need? We&apos;ll guide you through the entire process.
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-3 text-gold text-sm tracking-widest uppercase font-medium border-b border-gold/40 pb-1 hover:border-gold transition-colors"
          >
            Start With a Free Consultation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
