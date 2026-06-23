"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    type: "Home Remodeling",
    location: "Baton Rouge",
    scope: "Complete exterior renovation with new siding, windows, and landscaping",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260623_003109_0e9eb931-851e-4e97-83fd-7fc5e115a4e9.png",
    tag: "Remodel",
  },
  {
    id: 2,
    type: "Concrete Driveway",
    location: "Zachary, LA",
    scope: "3,200 sq ft stamped concrete driveway with custom border design",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260623_003105_fafd90c3-234f-496e-9733-9a25acafaf47.png",
    tag: "Concrete",
  },
  {
    id: 3,
    type: "Privacy Fencing",
    location: "Central, LA",
    scope: "280 linear ft of cedar privacy fencing with decorative post caps",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260623_003107_c539bab0-af57-452d-a037-84e4c1d6f95f.png",
    tag: "Fencing",
  },
  {
    id: 4,
    type: "Site Preparation",
    location: "Prairieville, LA",
    scope: "Land clearing and grading for 2-acre residential development",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260623_003108_4f126b8d-744f-430c-b31c-01d7150329a9.png",
    tag: "Dirt Work",
  },
  {
    id: 5,
    type: "Complete Transformation",
    location: "Denham Springs, LA",
    scope: "Full property overhaul: remodel, concrete, fencing, and land work",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260623_003100_3277adb4-c4a5-425d-96cf-0798e1b3be01.png",
    tag: "Full Project",
  },
  {
    id: 6,
    type: "Concrete Patio",
    location: "Baton Rouge",
    scope: "Custom patio with integrated fire pit surround and outdoor kitchen slab",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3FVcuBaoBTkgMgDv4hAHDXGVk6V/hf_20260623_004058_c9edfa0a-418a-480b-992f-48f1e7816c4c.png",
    tag: "Concrete",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 lg:py-48 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs tracking-[0.5em] uppercase">Our Portfolio</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-none">
            PROJECT{" "}
            <span className="text-gradient-gold">SHOWCASE</span>
          </h2>
        </motion.div>

        {/* Projects Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer bg-[#0F0F0F] ${
                i === 0 || i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              } ${i === 4 ? "lg:col-span-2" : ""}`}
              style={{ aspectRatio: i === 4 ? "2/1" : "4/3" }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <motion.img
                src={project.image}
                alt={project.type}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{
                  scale: hovered === project.id ? 1.08 : 1,
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 left-4 glass px-3 py-1">
                <span className="text-gold text-[10px] tracking-[0.4em] uppercase">{project.tag}</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div
                  animate={{ y: hovered === project.id ? 0 : 10, opacity: hovered === project.id ? 1 : 0.6 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-2">{project.location}</p>
                  <h3 className="text-white font-bold text-xl uppercase tracking-wide mb-2">{project.type}</h3>
                  <motion.p
                    animate={{ opacity: hovered === project.id ? 1 : 0, height: hovered === project.id ? "auto" : 0 }}
                    className="text-white/50 text-sm leading-relaxed overflow-hidden"
                  >
                    {project.scope}
                  </motion.p>
                </motion.div>

                {/* Gold line */}
                <motion.div
                  className="h-px bg-gold mt-4 origin-left"
                  animate={{ scaleX: hovered === project.id ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex items-center justify-center gap-8"
        >
          <div className="h-px bg-white/10 flex-1" />
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-3 text-white/40 text-sm tracking-widest uppercase hover:text-gold transition-colors duration-300"
          >
            Start Your Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <div className="h-px bg-white/10 flex-1" />
        </motion.div>
      </div>
    </section>
  );
}
