"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Hide navbar initially during the scrollytelling intro, show it after 400vh
  // We'll estimate 400vh based on window.innerHeight if available
  const [threshold, setThreshold] = useState(3000);
  
  useEffect(() => {
    setThreshold(window.innerHeight * 3.5); // show just before the splash ends
  }, []);

  const y = useTransform(scrollY, [threshold - 100, threshold], ["-100%", "0%"]);
  const opacity = useTransform(scrollY, [threshold - 100, threshold], [0, 1]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (!isMounted) return null;

  return (
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
    </motion.nav>
  );
}
