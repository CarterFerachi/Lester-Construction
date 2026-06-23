"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const values = [
  {
    title: "Uncompromising Craftsmanship",
    description: "We hold every pour, every board, every finish to the same standard: would we put this on our own home?",
    icon: "◆",
  },
  {
    title: "Reliability You Can Count On",
    description: "We show up when we say we will and finish what we start — on time and within budget.",
    icon: "◆",
  },
  {
    title: "Local Expertise",
    description: "Born and built in South Louisiana, we understand the climate, the soil, and the community.",
    icon: "◆",
  },
  {
    title: "Customer-First Always",
    description: "Your vision drives every decision. We don't just build — we listen, plan, and deliver.",
    icon: "◆",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 lg:py-48 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[700px] overflow-hidden">
              <motion.img
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260623_003100_3277adb4-c4a5-425d-96cf-0798e1b3be01.png"
                alt="Lester Construction team"
                className="w-full h-full object-cover"
                style={{ y: imageY }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />

              {/* Decorative frame */}
              <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-gold/60" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-gold/60" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 glass border border-gold/20 p-8 max-w-[220px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-5xl font-bold text-gradient-gold leading-none mb-2">15+</div>
              <div className="text-white/60 text-xs tracking-widest uppercase">Years Building<br />Baton Rouge</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-gold" />
                <span className="text-gold text-xs tracking-[0.5em] uppercase">Our Story</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-none mb-6">
                BUILT ON{" "}
                <span className="text-gradient-gold">QUALITY.</span>
                <br />
                DRIVEN BY{" "}
                <span className="text-white/60">RESULTS.</span>
              </h2>

              <p className="text-white/50 text-lg leading-relaxed mb-6">
                Lester Construction was founded with a simple conviction: the people of Baton Rouge deserve contractors who treat their homes with the same care they would their own.
              </p>
              <p className="text-white/50 text-lg leading-relaxed mb-12">
                From day one, we&apos;ve built our reputation on showing up, delivering what we promised, and never cutting corners — even when no one would notice. Our clients notice. And they come back.
              </p>
            </motion.div>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-xs group-hover:bg-gold/20 transition-colors">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-1">{value.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
