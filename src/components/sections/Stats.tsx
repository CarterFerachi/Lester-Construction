"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 98, suffix: "%", label: "Customer Satisfaction", description: "Verified client reviews" },
  { value: 100, suffix: "%", label: "On-Time Completion", description: "We do what we say we'll do" },
  { value: 100, suffix: "%", label: "Licensed & Insured", description: "Fully covered on every job" },
  { value: 5, suffix: "★", label: "Average Rating", description: "Across all review platforms" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
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

  return <span ref={ref}>{displayed}{suffix}</span>;
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-[#080808] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0a0a0a] to-[#080808]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 100%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold text-xs tracking-[0.5em] uppercase">By the Numbers</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-none">
              Why Homeowners Trust<br />
              <span className="text-gradient-gold">Lester Construction</span>
            </h2>
          </div>
          <p className="text-white/30 text-sm max-w-xs leading-relaxed lg:text-right">
            Our record speaks for itself. Every number represents a homeowner whose life we made better.
          </p>
        </motion.div>

        {/* Stats — horizontal row with dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative group px-8 py-10 lg:py-14 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gold/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient-gold leading-none mb-3 tabular-nums">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-1">{stat.label}</div>
              <div className="text-white/25 text-xs tracking-wide">{stat.description}</div>

              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gold/50 origin-center"
                initial={{ width: 0 }}
                animate={isInView ? { width: "40%" } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 + 0.5 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Brand statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 pt-10 border-t border-white/5 text-center"
        >
          <p className="text-white/20 text-xs tracking-[0.4em] uppercase">
            Lester Construction — Baton Rouge&apos;s Standard of Excellence
          </p>
        </motion.div>
      </div>
    </section>
  );
}
