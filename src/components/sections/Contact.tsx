"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projectTypes = [
  "Home Remodeling",
  "Concrete Work (Driveway/Patio/Sidewalk)",
  "Custom Fencing",
  "Dirt Work / Site Preparation",
  "Multiple Services",
  "Other",
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full bg-transparent border-b border-white/20 focus:border-gold py-4 px-0 text-white placeholder-white/30 text-sm tracking-wider outline-none transition-colors duration-300 focus:outline-none";

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 lg:py-48 bg-[#0a0a0a] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="absolute inset-0 blueprint-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-gold text-xs tracking-[0.5em] uppercase">Get Started</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-none mb-8">
              READY TO{" "}
              <span className="text-gradient-gold">TRANSFORM</span>
              <br />
              YOUR PROPERTY?
            </h2>

            <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-md">
              Join hundreds of Baton Rouge homeowners who&apos;ve trusted Lester Construction to bring their vision to life. Your free estimate is just a message away.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/30 text-xs tracking-widest uppercase mb-1">Call or Text</div>
                  <a href="tel:+12255550100" className="text-white text-lg font-medium hover:text-gold transition-colors">(225) 555-0100</a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/30 text-xs tracking-widest uppercase mb-1">Email</div>
                  <a href="mailto:info@lesterconstruction.com" className="text-white text-lg font-medium hover:text-gold transition-colors">info@lesterconstruction.com</a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/30 text-xs tracking-widest uppercase mb-1">Location</div>
                  <span className="text-white text-lg font-medium">Baton Rouge, Louisiana</span>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-16 pt-10 border-t border-white/5">
              <p className="text-white/20 text-xs tracking-widest uppercase mb-6">What to expect</p>
              <div className="space-y-3">
                {[
                  "Response within 24 hours",
                  "Free on-site consultation",
                  "Detailed written estimate",
                  "No pressure. No gimmicks.",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/50 text-sm">
                    <span className="w-4 h-px bg-gold" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass border border-gold/20 p-16 text-center"
              >
                <div className="w-16 h-16 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">Request Received</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  We&apos;ll be in touch within 24 hours to schedule your free consultation. Welcome to the Lester Construction family.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass border border-white/10 p-10 lg:p-12 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="text-white/30 text-[10px] tracking-[0.4em] uppercase block mb-2">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-white/30 text-[10px] tracking-[0.4em] uppercase block mb-2">Phone *</label>
                    <input
                      required
                      type="tel"
                      placeholder="(225) 555-0100"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/30 text-[10px] tracking-[0.4em] uppercase block mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-white/30 text-[10px] tracking-[0.4em] uppercase block mb-2">Project Type *</label>
                  <select
                    required
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled className="bg-[#161616]">Select a service...</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#161616]">{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-white/30 text-[10px] tracking-[0.4em] uppercase block mb-2">Tell Us About Your Project</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project, timeline, and any specific details..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full relative overflow-hidden py-5 bg-gold text-black text-sm font-bold tracking-[0.3em] uppercase hover:bg-gold-light transition-all duration-300 group"
                >
                  <span className="relative z-10">GET MY FREE ESTIMATE</span>
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"
                  />
                </button>

                <p className="text-white/20 text-[10px] tracking-wider text-center">
                  100% free. No obligations. No spam. Just great work.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
