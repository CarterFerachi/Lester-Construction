"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Marcus & Diane H.",
    location: "Baton Rouge, LA",
    project: "Home Remodel + Driveway",
    rating: 5,
    quote: "Lester Construction completely transformed our home. The team was professional, punctual, and the quality of work is unlike anything we've seen from other contractors in the area. Our neighbors keep asking who did the work.",
  },
  {
    name: "Jerome W.",
    location: "Zachary, LA",
    project: "Privacy Fencing",
    rating: 5,
    quote: "From the first call to the final walkthrough, Lester Construction made everything easy. The fence they built is absolutely beautiful and the craftsmanship speaks for itself. Worth every penny.",
  },
  {
    name: "Ashley & Trey M.",
    location: "Prairieville, LA",
    project: "Concrete Driveway & Patio",
    rating: 5,
    quote: "We got multiple quotes and Lester Construction wasn't the cheapest — but they were the best. The attention to detail in the concrete work blew us away. It looks like a luxury home now.",
  },
  {
    name: "Robert K.",
    location: "Denham Springs, LA",
    project: "Full Site Preparation",
    rating: 5,
    quote: "Had 2 acres that needed clearing and grading before we could build. Lester had it done ahead of schedule and the site was perfectly prepared. Honest, hardworking people. Will use again.",
  },
  {
    name: "Camille B.",
    location: "Central, LA",
    project: "Home Remodel",
    rating: 5,
    quote: "I never thought a contractor could actually exceed expectations until I hired Lester Construction. Every detail was perfect. My home looks completely different — in the absolute best way.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-gold" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-48 bg-[#080808] overflow-hidden">
      {/* 3D perspective background */}
      <div className="absolute inset-0 overflow-hidden">
        {testimonials.map((_, i) => (
          <motion.div
            key={i}
            className="absolute glass border border-gold/10 rounded-sm"
            style={{
              width: `${200 + i * 40}px`,
              height: `${120 + i * 20}px`,
              left: `${(i * 20 + 5)}%`,
              top: `${(i * 15 + 10)}%`,
              opacity: 0.15,
              transform: `perspective(1000px) rotateX(${i * 5 - 10}deg) rotateY(${i * 3 - 6}deg)`,
            }}
            animate={{
              y: [0, -10, 0],
              rotateZ: [0, 1, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs tracking-[0.5em] uppercase">Client Stories</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-none">
            WHAT OUR{" "}
            <span className="text-gradient-gold">CLIENTS SAY</span>
          </h2>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass border border-gold/20 p-10 lg:p-16 relative">
            {/* Quote mark */}
            <div className="absolute top-8 left-10 text-gold/20 text-[120px] font-serif leading-none select-none pointer-events-none">&ldquo;</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <StarRating count={testimonials[active].rating} />

                <blockquote className="text-white text-xl lg:text-2xl font-light leading-relaxed mt-6 mb-8 relative z-10">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold text-sm tracking-wider">{testimonials[active].name}</div>
                    <div className="text-white/40 text-xs tracking-wide mt-1">{testimonials[active].location} · {testimonials[active].project}</div>
                  </div>

                  <div className="hidden sm:flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`transition-all duration-300 ${i === active ? "w-8 h-1 bg-gold" : "w-2 h-1 bg-white/20 hover:bg-white/40"}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Corner accents */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/30" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold/30" />
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/10 hover:border-gold/40 flex items-center justify-center text-white/40 hover:text-gold transition-all duration-300 group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-white/10 hover:border-gold/40 flex items-center justify-center text-white/40 hover:text-gold transition-all duration-300 group"
            >
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
