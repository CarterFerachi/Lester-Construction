"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed", description: "Across Baton Rouge & South Louisiana" },
  { value: 15, suffix: "+", label: "Years of Experience", description: "Serving Louisiana homeowners" },
  { value: 98, suffix: "%", label: "Customer Satisfaction", description: "Verified client reviews" },
  { value: 100, suffix: "%", label: "On-Time Completion", description: "We do what we say we'll do" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayed(value);
        clearInterval(timer);
      } else {
        setDisplayed(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayed}{suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0a0a0a] to-[#080808]" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(ellipse at center, rgba(201,168,76,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

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
            <span className="text-gold text-xs tracking-[0.5em] uppercase">By the Numbers</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white">
            WHY HOMEOWNERS CHOOSE{" "}
            <span className="text-gradient-gold">LESTER</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative group bg-[#080808] p-8 lg:p-12 text-center overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number */}
              <div className="text-5xl lg:text-7xl font-bold text-gradient-gold mb-3 leading-none" style={{ fontFamily: "var(--font-inter)" }}>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div className="text-white font-semibold text-sm tracking-wider uppercase mb-2">{stat.label}</div>

              {/* Description */}
              <div className="text-white/30 text-xs tracking-wide">{stat.description}</div>

              {/* Bottom accent */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: i * 0.2 + 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
