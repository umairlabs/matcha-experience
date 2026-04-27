"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "SIFT",
    desc: "Sift 2g (approx. 1/2 tsp) of matcha into your bowl to ensure a smooth, clump-free consistency."
  },
  {
    number: "02",
    title: "POUR",
    desc: "Add 2oz of hot water (175°F/80°C). Boiling water will burn the leaves and create bitterness."
  },
  {
    number: "03",
    title: "WHISK",
    desc: "Using your bamboo chasen, whisk vigorously in a 'W' motion until a thick, creamy froth forms."
  }
];

export default function RitualSection() {
  return (
    <section id="ritual" className="w-full bg-[#030303] py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white/90"
          >
            THE <span className="text-white/40">RITUAL</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl text-white/60 font-light max-w-2xl mx-auto"
          >
            Master the art of the perfect preparation in three simple steps.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#A4C639]/30 to-transparent" />
          
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="flex flex-col items-center text-center relative z-10 group"
            >
              <div className="w-20 h-20 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center text-[#A4C639] font-mono text-2xl font-black tracking-tighter mb-8 group-hover:bg-[#A4C639]/10 group-hover:border-[#A4C639]/50 transition-all duration-500">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-white/90 mb-4 tracking-tight">{step.title}</h3>
              <p className="text-white/50 font-light leading-relaxed max-w-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
