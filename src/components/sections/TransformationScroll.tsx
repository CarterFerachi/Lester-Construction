"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V";

const stages = [
  {
    phase: "Before",
    number: "01",
    title: "The Starting Point",
    description: "Every great transformation begins with honesty about where things stand today. Cracked concrete, aging fences, unfinished land — we see the potential others miss.",
    details: ["Cracked & weathered concrete", "Deteriorating fencing", "Unfinished or eroded land", "Outdated home exterior"],
    image: `${CDN}/hf_20260623_003101_0a174798-7b34-4ad7-9462-e98585c43552.png`,
    color: "from-red-900/20",
  },
  {
    phase: "The Plan",
    number: "02",
    title: "Blueprint & Vision",
    description: "Precision planning is the difference between ordinary work and extraordinary results. We design every detail before a single tool hits the ground.",
    details: ["Custom project design", "Material selection", "Timeline planning", "Permit coordination"],
    image: `${CDN}/hf_20260623_003100_3277adb4-c4a5-425d-96cf-0798e1b3be01.png`,
    color: "from-blue-900/20",
  },
  {
    phase: "The Build",
    number: "03",
    title: "Craft in Motion",
    description: "This is where expertise meets execution. Our crews bring decades of experience and a relentless commitment to precision on every project.",
    details: ["Expert crews on-site", "Premium materials only", "Daily progress updates", "Zero-compromise quality"],
    image: `${CDN}/hf_20260623_003108_4f126b8d-744f-430c-b31c-01d7150329a9.png`,
    color: "from-yellow-900/20",
  },
  {
    phase: "The Result",
    number: "04",
    title: "Your Dream Property",
    description: "The moment everything comes together. A property transformed — not just improved. This is why homeowners choose Lester Construction.",
    details: ["Stunning finished result", "Lasting quality", "Proud homeownership", "Increased property value"],
    image: `${CDN}/hf_20260623_003109_0e9eb931-851e-4e97-83fd-7fc5e115a4e9.png`,
    color: "from-green-900/20",
  },
];

function StagePanel({ scrollYProgress, index, total }: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}) {
  const stage = stages[index];
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  const textOpacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.15, end], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [start, start + 0.12], [40, 0]);
  const imgScale = useTransform(scrollYProgress, [start, start + 0.15], [1.05, 1]);
  const barScale = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <>
      {/* Background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${stage.color} to-transparent pointer-events-none`}
        style={{ opacity }}
      />

      {/* Text panel */}
      <motion.div
        className="absolute top-0 left-0 w-full"
        style={{ opacity: textOpacity, y }}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-gold/30 text-6xl font-bold leading-none">{stage.number}</span>
          <div>
            <span className="text-gold text-xs tracking-[0.5em] uppercase block mb-1">{stage.phase}</span>
            <div className="h-px w-16 bg-gold/40" />
          </div>
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-none mb-6">
          {stage.title}
        </h2>
        <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg">
          {stage.description}
        </p>
        <ul className="space-y-3">
          {stage.details.map((detail) => (
            <li key={detail} className="flex items-center gap-4 text-white/60 text-sm tracking-wider">
              <span className="w-6 h-px bg-gold" />
              {detail}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Image panel */}
      <motion.div className="absolute inset-0" style={{ opacity }}>
        <motion.img
          src={stage.image}
          alt={stage.title}
          className="w-full h-full object-cover"
          style={{ scale: imgScale }}
        />
        <div className="absolute inset-0 border border-gold/20" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/60" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold/60" />
        <div className="absolute bottom-6 right-6 glass px-4 py-2">
          <span className="text-gold text-xs tracking-widest uppercase">{stage.phase}</span>
        </div>
      </motion.div>

      {/* Progress bar */}
      <motion.div className="w-8 h-0.5 bg-gold origin-left" style={{ scaleX: barScale }} />
    </>
  );
}

export default function TransformationScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <section ref={containerRef} className="relative" style={{ height: `${stages.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-[#080808]">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text (absolute stacked panels) */}
            <div className="relative">
              {stages.map((_, i) => (
                <TextLayer key={i} scrollYProgress={scrollYProgress} index={i} total={stages.length} />
              ))}
              {/* Invisible spacer */}
              <div className="invisible pointer-events-none">
                <div className="text-6xl font-bold mb-6 leading-none">00</div>
                <h2 className="text-6xl font-bold mb-6">Placeholder</h2>
                <p className="text-lg mb-10">Placeholder description text that sets the height of this container element.</p>
                <ul className="space-y-3">
                  {[1,2,3,4].map(n => <li key={n} className="text-sm">detail item {n}</li>)}
                </ul>
              </div>
            </div>

            {/* Right: Images */}
            <div className="relative h-[500px] lg:h-[600px]">
              {stages.map((_, i) => (
                <ImageLayer key={i} scrollYProgress={scrollYProgress} index={i} total={stages.length} />
              ))}
            </div>
          </div>

          {/* Progress indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6">
            {stages.map((stage, i) => (
              <ProgressBar key={i} scrollYProgress={scrollYProgress} index={i} total={stages.length} label={stage.phase} />
            ))}
          </div>
        </div>
      </div>

      {/* Background overlays (one per stage) */}
      {stages.map((_, i) => (
        <BgLayer key={i} scrollYProgress={scrollYProgress} index={i} total={stages.length} color={stages[i].color} />
      ))}
    </section>
  );
}

function BgLayer({ scrollYProgress, index, total, color }: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number; total: number; color: string;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  return (
    <motion.div
      className={`absolute inset-0 bg-gradient-to-br ${color} to-transparent pointer-events-none`}
      style={{ opacity, position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
    />
  );
}

function TextLayer({ scrollYProgress, index, total }: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number; total: number;
}) {
  const stage = stages[index];
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.15, end], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [start, start + 0.12], [40, 0]);

  return (
    <motion.div className="absolute top-0 left-0 w-full" style={{ opacity, y }}>
      <div className="flex items-center gap-4 mb-6">
        <span className="text-gold/30 text-6xl font-bold leading-none">{stage.number}</span>
        <div>
          <span className="text-gold text-xs tracking-[0.5em] uppercase block mb-1">{stage.phase}</span>
          <div className="h-px w-16 bg-gold/40" />
        </div>
      </div>
      <h2 className="text-4xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-none mb-6">
        {stage.title}
      </h2>
      <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg">{stage.description}</p>
      <ul className="space-y-3">
        {stage.details.map((detail) => (
          <li key={detail} className="flex items-center gap-4 text-white/60 text-sm tracking-wider">
            <span className="w-6 h-px bg-gold" />
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ImageLayer({ scrollYProgress, index, total }: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number; total: number;
}) {
  const stage = stages[index];
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, start + 0.15, end - 0.1, end], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, start + 0.15], [1.05, 1]);

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      <motion.img src={stage.image} alt={stage.title} className="w-full h-full object-cover" style={{ scale }} />
      <div className="absolute inset-0 border border-gold/20" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/60" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold/60" />
      <div className="absolute bottom-6 right-6 glass px-4 py-2">
        <span className="text-gold text-xs tracking-widest uppercase">{stage.phase}</span>
      </div>
    </motion.div>
  );
}

function ProgressBar({ scrollYProgress, index, total, label }: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number; total: number; label: string;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const scaleX = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div className="w-8 h-0.5 bg-gold origin-left" style={{ scaleX }} />
      <span className="text-white/20 text-[9px] tracking-widest uppercase">{label}</span>
    </div>
  );
}
