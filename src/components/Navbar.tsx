"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [threshold, setThreshold] = useState(3000);

  useEffect(() => {
    setThreshold(window.innerHeight * 3.5);
  }, []);

  const y = useTransform(scrollY, [threshold - 100, threshold], ["-100%", "0%"]);
  const opacity = useTransform(scrollY, [threshold - 100, threshold], [0, 1]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Use "start" for origin, "center" for others
      const block = id === "origin" ? "start" : "center";
      element.scrollIntoView({ behavior: "smooth", block });
    }
  };

  if (!isMounted) return null;

  return (
    <>
      <motion.nav
        style={{ y, opacity }}
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5"
      >
        <div
          className="text-xl font-black tracking-tighter text-white/90 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          MATCHA <span className="text-[#A4C639]">EXP.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest text-white/60">
          <motion.a
            href="#origin"
            onClick={(e) => handleScroll(e, "origin")}
            whileHover={{ scale: 1.1, color: "#ffffff" }}
            className="cursor-pointer"
          >
            THE ORIGIN
          </motion.a>
          <motion.a
            href="#ritual"
            onClick={(e) => handleScroll(e, "ritual")}
            whileHover={{ scale: 1.1, color: "#ffffff" }}
            className="cursor-pointer"
          >
            THE RITUAL
          </motion.a>
          <motion.a
            href="#kit"
            onClick={(e) => handleScroll(e, "kit")}
            whileHover={{ scale: 1.1, color: "#ffffff" }}
            className="cursor-pointer"
          >
            THE KIT
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/90 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-12"
          >
            <motion.a
              href="#origin"
              onClick={(e) => handleScroll(e, "origin")}
              className="text-3xl font-black tracking-tighter text-white/90 hover:text-[#A4C639] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              THE ORIGIN
            </motion.a>
            <motion.a
              href="#ritual"
              onClick={(e) => handleScroll(e, "ritual")}
              className="text-3xl font-black tracking-tighter text-white/90 hover:text-[#A4C639] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              THE RITUAL
            </motion.a>
            <motion.a
              href="#kit"
              onClick={(e) => handleScroll(e, "kit")}
              className="text-3xl font-black tracking-tighter text-white/90 hover:text-[#A4C639] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              THE KIT
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
