"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function NewsletterSection() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="w-full bg-[#050505] py-32 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 rounded-full bg-[#A4C639]/10 mx-auto flex items-center justify-center mb-8 border border-[#A4C639]/20">
            <span className="text-[#A4C639] text-2xl font-serif">✉</span>
          </div>
          
          <AnimatePresence mode="wait">
            {!subscribed ? (
              <motion.div
                key="form-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white/90 mb-6">
                  JOIN THE INNER CIRCLE
                </h2>
                <p className="text-lg text-white/50 font-light mb-12 max-w-xl mx-auto">
                  Deepen your connection with the ancient art of tea. Join our collective for exclusive insights into the harvest cycle, traditional brewing mastery, and the path to stillness.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/[0.03] border border-white/10 rounded-full px-8 py-4 text-white focus:outline-none focus:border-[#A4C639]/50 transition-colors"
                    required
                  />
                  <motion.button 
                    type="submit"
                    initial="initial"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    className="relative px-8 py-4 bg-[#A4C639] text-[#050505] font-bold tracking-widest uppercase rounded-full overflow-hidden transition-colors duration-300 group"
                  >
                    {/* Sweep background */}
                    <motion.div
                      variants={{
                        initial: { x: "-100%" },
                        hover: { x: "0%" }
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 bg-white"
                    />
                    
                    {/* Button text */}
                    <span className="relative z-10 transition-colors duration-300">
                      Subscribe
                    </span>
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-content"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="py-10"
              >
                <div className="text-[#A4C639] text-6xl mb-6">✓</div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white/90 mb-4 uppercase">
                  Welcome to the collective
                </h2>
                <p className="text-xl text-white/60 font-light max-w-md mx-auto">
                  You are now part of the inner circle. The first transmission will arrive shortly.
                </p>
                <motion.div 
                  className="mt-10 w-24 h-1 bg-[#A4C639]/30 mx-auto rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ delay: 0.5, duration: 1.5 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
