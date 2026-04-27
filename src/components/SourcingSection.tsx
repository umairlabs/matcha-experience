"use client";

import { motion } from "framer-motion";

export default function SourcingSection() {
  return (
    <section id="origin" className="w-full bg-[#050505] py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#A4C639] opacity-[0.03] blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <p className="text-[#A4C639] font-mono tracking-[0.3em] uppercase text-sm mb-6">
              The Origin Story
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white/90 mb-8 leading-tight">
              SHADED FOR <br/>
              <span className="text-white/40">PERFECTION.</span>
            </h2>
            <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed max-w-lg">
              <p>
                Our journey begins in the misty hills of Uji, Japan—the birthplace of Japanese green tea. 
                For over 800 years, master farmers have cultivated the exact leaves we use today.
              </p>
              <p>
                Three weeks before harvest, the tea plants are covered in darkness. 
                This extreme shading forces the leaves to overproduce chlorophyll and L-theanine, 
                creating the vibrant, electric green color and the profound umami sweetness that defines 
                ceremonial grade quality.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-12">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white/90 tracking-tighter">800+</span>
                <span className="text-xs uppercase tracking-widest text-[#A4C639] mt-1 font-mono">Years of Heritage</span>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white/90 tracking-tighter">21</span>
                <span className="text-xs uppercase tracking-widest text-[#A4C639] mt-1 font-mono">Days Shaded</span>
              </div>
            </div>
          </motion.div>

          {/* Visual / Image Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02]"
          >
            {/* Cinematic Image Background */}
            <div className="absolute inset-0">
              <img 
                src="/uji_tea_farm.png" 
                alt="Shaded Matcha Tea Farm in Uji, Japan"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="backdrop-blur-md bg-black/40 border border-white/10 p-6 rounded-2xl">
                <p className="text-sm font-mono tracking-widest text-white/50 uppercase">Location Data</p>
                <p className="text-lg font-bold text-white/90 mt-1 tracking-tight">Uji, Kyoto Prefecture</p>
                <p className="text-xs text-[#A4C639] mt-2 tracking-widest">34.8893° N, 135.7989° E</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
