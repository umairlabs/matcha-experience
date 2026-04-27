"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "FIRST HARVEST",
    description: "Plucked in early spring from shade-grown tea leaves in Uji, Japan, ensuring maximum umami and vibrant color.",
    number: "01"
  },
  {
    title: "L-THEANINE RICH",
    description: "Experience a calm, sustained energy without the caffeine crash or jitters associated with traditional coffee.",
    number: "02"
  },
  {
    title: "STONE GROUND",
    description: "Traditionally milled using granite stone to preserve the delicate nutritional profile and silky texture.",
    number: "03"
  }
];

export default function DetailsSection() {
  return (
    <section className="relative w-full bg-[#050505] text-white py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 z-10">
      
      {/* Introduction */}
      <div className="max-w-4xl mx-auto text-center mb-32">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-[#A4C639] font-mono tracking-[0.3em] uppercase text-sm mb-6"
        >
          Beyond The Splash
        </motion.p>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-white/90"
        >
          MASTERY IN EVERY CUP
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto"
        >
          We didn't just create a beverage. We engineered a ritual. 
          A perfect equilibrium of ancient tradition and modern velocity.
        </motion.p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden"
          >
            {/* Hover Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#A4C639]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="text-[#A4C639] font-mono text-5xl opacity-20 mb-6 font-black tracking-tighter">
              {feature.number}
            </div>
            <h4 className="text-2xl font-bold text-white/90 mb-4 tracking-tight">
              {feature.title}
            </h4>
            <p className="text-white/50 font-light leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Full Width Banner / CTA */}
      <div className="mt-32 relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#A4C639]/10 to-[#050505] border border-[#A4C639]/20 p-12 md:p-24 text-center max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(164,198,57,0.1)_0%,transparent_70%)] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white/90 mb-6">
            ELEVATE YOUR <br/><span className="text-[#A4C639]">MORNING.</span>
          </h2>
          <p className="text-xl text-white/60 font-light max-w-xl mx-auto">
            Join thousands of others who have traded their coffee jitters for pure, sustained focus.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
