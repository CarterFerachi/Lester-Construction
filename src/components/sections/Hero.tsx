"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" ref={sectionRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <img
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260623_012547_86f2b51f-7d65-4056-b489-33cebee6646a.jpeg"
          alt="Luxury Louisiana home"
          className="w-full h-full object-cover"
          onLoad={() => setLoaded(true)}
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
      </motion.div>

      {/* Particle effect overlay */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px rounded-full"
            style={{
              background: "rgba(201, 168, 76, 0.6)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gold horizontal lines */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent w-full"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{ opacity }}
      >
        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="h-px w-12 bg-gold" />
          <span className="text-gold text-xs tracking-[0.5em] uppercase font-medium">
            Baton Rouge, Louisiana
          </span>
          <span className="h-px w-12 bg-gold" />
        </motion.div>

        {/* Main Headline */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: loaded ? 0 : 120, opacity: loaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tight leading-none text-white uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            TRANSFORMING
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: loaded ? 0 : 120, opacity: loaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tight leading-none text-gradient-gold uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            HOMES ACROSS
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: loaded ? 0 : 120, opacity: loaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tight leading-none text-white uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            BATON ROUGE
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide"
        >
          Expert Remodeling, Concrete, Fencing, and Dirt Work Built to Last.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="group relative overflow-hidden px-10 py-4 bg-gold text-black text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300 min-w-[220px]"
          >
            <span className="relative z-10">Get Free Estimate</span>
            <motion.span
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"
            />
          </button>
          <button
            onClick={() => scrollTo("#projects")}
            className="group flex items-center gap-3 px-10 py-4 border border-white/30 text-white text-sm font-light tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300 min-w-[220px] justify-center"
          >
            View Our Work
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>

        {/* Phone CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <span className="text-white/25 text-xs tracking-widest uppercase">Or call us now</span>
          <a
            href="tel:+12255550100"
            className="text-gold/80 hover:text-gold text-sm font-medium tracking-wider transition-colors border-b border-gold/20 hover:border-gold/60 pb-0.5"
          >
            (225) 555-0100
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <span className="text-white/40 text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 z-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2 }}
          className="w-16 h-16 border-t border-l border-gold/40"
        />
      </div>
      <div className="absolute top-24 right-8 z-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2.1 }}
          className="w-16 h-16 border-t border-r border-gold/40"
        />
      </div>
    </section>
  );
}
