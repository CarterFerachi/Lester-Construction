"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V";

const projects = [
  {
    label: "Home Remodel",
    before: `${CDN}/hf_20260623_011252_f11000ca-d7bb-48bf-a59a-10a5620311d5.png`,
    after: `${CDN}/hf_20260623_003109_0e9eb931-851e-4e97-83fd-7fc5e115a4e9.png`,
    location: "Prairieville, LA",
  },
  {
    label: "Concrete Driveway",
    before: `${CDN}/hf_20260623_011253_d0c31f97-7829-40b1-9adf-35038c07e4c0.png`,
    after: `${CDN}/hf_20260623_003105_fafd90c3-234f-496e-9733-9a25acafaf47.png`,
    location: "Baton Rouge, LA",
  },
  {
    label: "Custom Fencing",
    before: `${CDN}/hf_20260623_011254_fb349817-1684-4e7f-ad89-4613d781610b.png`,
    after: `${CDN}/hf_20260623_003107_c539bab0-af57-452d-a037-84e4c1d6f95f.png`,
    location: "Zachary, LA",
  },
];

function Slider({ before, after }: { before: string; after: string }) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(2, Math.min(98, x)));
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging) return;
    updatePosition(e.clientX);
  }, [dragging, updatePosition]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full select-none cursor-col-resize overflow-hidden"
      onMouseMove={onMouseMove}
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchMove={onTouchMove}
    >
      {/* After Image (full) */}
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before Image (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 / (position / 100)}%` }} />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-20"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center z-30">
          <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 glass px-3 py-1.5 z-10">
        <span className="text-white/70 text-xs tracking-widest uppercase">Before</span>
      </div>
      <div className="absolute top-4 right-4 glass px-3 py-1.5 z-10">
        <span className="text-gold text-xs tracking-widest uppercase">After</span>
      </div>
    </div>
  );
}

export default function BeforeAfterSlider() {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section id="transformation" ref={sectionRef} className="relative py-32 lg:py-48 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-gold text-xs tracking-[0.5em] uppercase">Interactive</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-none">
              SEE THE{" "}
              <span className="text-gradient-gold">TRANSFORMATION</span>
            </h2>
            <p className="text-white/40 text-lg mt-4 max-w-xl">
              Drag the slider to reveal the dramatic difference Lester Construction makes on every project.
            </p>
          </div>

          {/* Project Tabs */}
          <div className="flex gap-2">
            {projects.map((p, i) => (
              <button
                key={p.label}
                onClick={() => setActiveProject(i)}
                className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                  activeProject === i
                    ? "bg-gold text-black font-semibold"
                    : "border border-white/10 text-white/40 hover:border-gold/40 hover:text-white/70"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-[50vh] lg:h-[70vh] min-h-[400px] max-h-[700px]">
            {projects.map((project, i) => (
              <div
                key={project.label}
                className={`absolute inset-0 transition-opacity duration-500 ${activeProject === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <Slider before={project.before} after={project.after} />
              </div>
            ))}
          </div>

          {/* Project info bar */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex items-center gap-3">
              <span className="text-gold/60 text-xs tracking-widest uppercase">{projects[activeProject].label}</span>
              <span className="w-px h-4 bg-white/10" />
              <span className="text-white/30 text-xs tracking-wider">{projects[activeProject].location}</span>
            </div>
            <span className="text-white/20 text-xs">Drag to compare</span>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/40 text-sm tracking-wider mb-6">
            Ready to see your own transformation?
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative overflow-hidden px-10 py-4 bg-gold text-black text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300"
          >
            Get My Free Estimate
          </button>
        </motion.div>
      </div>
    </section>
  );
}
