"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const areas = [
  "Baton Rouge", "Zachary", "Central", "Prairieville",
  "Denham Springs", "Gonzales", "Walker", "Baker",
  "Port Allen", "Addis", "Sorrento", "Plaquemine",
];

export default function BatonRouge() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260623_003100_3277adb4-c4a5-425d-96cf-0798e1b3be01.png"
          alt="Baton Rouge Louisiana"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-[#080808]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
      </motion.div>

      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid z-1" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs tracking-[0.5em] uppercase">Service Area</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-none mb-6">
            PROUDLY SERVING{" "}
            <span className="text-gradient-gold">BATON ROUGE</span>
            <br />
            AND SOUTH LOUISIANA
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            We&apos;re not just contractors who work in Baton Rouge — we&apos;re a part of this community. These are our neighbors, our friends, our family.
          </p>
        </motion.div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-20"
        >
          {areas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 + 0.3 }}
              className="glass border border-white/10 hover:border-gold/40 px-5 py-2 text-white/60 text-xs tracking-widest uppercase transition-all duration-300 hover:text-gold cursor-default"
            >
              {area}
            </motion.div>
          ))}
        </motion.div>

        {/* Promise card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gold/10"
        >
          {[
            { icon: "📍", title: "Locally Rooted", desc: "Based right here in Baton Rouge — we know these neighborhoods inside and out." },
            { icon: "🤝", title: "Community First", desc: "We build relationships, not just structures. Our reputation is everything." },
            { icon: "⚡", title: "Fast Response", desc: "No waiting weeks for a callback. We respond fast and get started quickly." },
          ].map((item, i) => (
            <div key={item.title} className="bg-[#080808]/80 p-10 text-center">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-3">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
