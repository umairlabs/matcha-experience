"use client";

import { motion } from "framer-motion";

export default function ProductShowcase() {
  return (
    <section id="kit" className="w-full bg-[#050505] py-32 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Product Image */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] md:h-[700px] rounded-[40px] overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[#A4C639]/5 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
          <img 
            src="/matcha_kit.png" 
            alt="Ceremonial Matcha Kit" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505]/60 z-20" />
        </motion.div>

        {/* Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-[#A4C639]/30 bg-[#A4C639]/5 text-[#A4C639] font-mono text-xs uppercase tracking-widest mb-8">
            The Essential Kit
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white/90 mb-6 leading-tight">
            EVERYTHING YOU NEED. <br/>
            <span className="text-white/40">NOTHING YOU DON'T.</span>
          </h2>
          <p className="text-lg text-white/60 font-light leading-relaxed mb-10 max-w-lg">
            Our signature Ceremonial Kit includes a 30g tin of First Harvest Uji Matcha, a master-crafted 100-prong bamboo Chasen, and a custom matte black Chawan. Designed for the perfect daily ritual.
          </p>

          <ul className="space-y-6 mb-12">
            {[
              "30g Ceremonial Grade Uji Matcha",
              "100-Prong Golden Bamboo Whisk",
              "Matte Black Artisan Ceramic Bowl",
              "Bamboo Matcha Scoop (Chashaku)"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-white/80 font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-[#A4C639]" />
                {item}
              </li>
            ))}
          </ul>

          {/* Price and Cart button removed as per user request */}
        </motion.div>

      </div>
    </section>
  );
}
