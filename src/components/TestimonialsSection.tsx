"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The cleanest energy I've ever experienced. I completely replaced my morning coffee ritual and haven't looked back.",
    author: "Elena R.",
    label: "Verified Buyer"
  },
  {
    quote: "You can taste the quality immediately. It has a rich, deep umami flavor with absolutely zero bitterness.",
    author: "James T.",
    label: "Barista"
  },
  {
    quote: "Finally, a matcha that lives up to the hype. The vibrant green color alone tells you everything you need to know.",
    author: "Sarah K.",
    label: "Wellness Coach"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#050505] py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white/90"
          >
            THE <span className="text-[#A4C639]">VERDICT</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group hover:bg-white/[0.04] transition-colors duration-500 flex flex-col justify-between h-full"
            >
              {/* Subtle Quote Mark Graphic */}
              <div className="absolute -top-4 -left-2 text-[120px] font-serif text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-[#A4C639]/10 transition-colors duration-500">
                "
              </div>
              
              <p className="text-xl text-white/80 font-light leading-relaxed mb-10 relative z-10">
                "{t.quote}"
              </p>
              
              <div className="flex flex-col relative z-10">
                <span className="text-white/90 font-bold tracking-tight">{t.author}</span>
                <span className="text-xs text-[#A4C639] uppercase tracking-widest font-mono mt-1">{t.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
