"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";

const FRAME_COUNT = 218;

// Floating particles component - canvas-based for smooth cursor interaction
function FloatingParticles({ scrollProgress }: { scrollProgress: any }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Array<{
    x: number; y: number;
    vx: number; vy: number;
    baseX: number; baseY: number;
    size: number; opacity: number; color: string;
  }>>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // Initialize particles
    particlesRef.current = Array.from({ length: 60 }, (_, i) => {
      const x = Math.random() * W;
      const y = Math.random() * H;
      return {
        x, y,
        baseX: x, baseY: y,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: i % 3 === 0 ? 2.5 : i % 3 === 1 ? 1.5 : 0.8,
        opacity: i % 4 === 0 ? 0.35 : i % 4 === 1 ? 0.25 : 0.15,
        color: i % 3 === 1 ? "#8FB332" : "#A4C639",
      };
    });

    const INTERACTION_RADIUS = 100;
    const MAX_PUSH = 35;

    const animate = () => {
      ctx.clearRect(0, 0, W, H);

      for (const p of particlesRef.current) {
        // Natural drift - slowly wander
        p.baseX += p.vx;
        p.baseY += p.vy;

        // Bounce off edges
        if (p.baseX < 0 || p.baseX > W) p.vx *= -1;
        if (p.baseY < 0 || p.baseY > H) p.vy *= -1;

        // Cursor repulsion
        const dx = p.baseX - mouseRef.current.x;
        const dy = p.baseY - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = p.baseX;
        let targetY = p.baseY;

        if (dist < INTERACTION_RADIUS && dist > 0) {
          const strength = (1 - dist / INTERACTION_RADIUS);
          const angle = Math.atan2(dy, dx);
          targetX = p.baseX + Math.cos(angle) * MAX_PUSH * strength;
          targetY = p.baseY + Math.sin(angle) * MAX_PUSH * strength;
        }

        // Smooth lerp towards target
        p.x += (targetX - p.x) * 0.08;
        p.y += (targetY - p.y) * 0.08;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

function MatchaContent({ images }: { images: HTMLImageElement[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Suppress Framer Motion's false-positive "non-static position" warning.
  // The container IS relative — FM checks computed style before the
  // stylesheet is guaranteed to have applied.
  useEffect(() => {
    const original = console.warn;
    console.warn = (...args: unknown[]) => {
      if (typeof args[0] === "string" && args[0].includes("non-static position")) return;
      original(...args);
    };
    return () => { console.warn = original; };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform progress to frame index
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      // Force immediate redraw
      render();
    };

    const render = () => {
      const currentFrame = Math.round(frameIndex.get());
      const img = images[currentFrame];

      if (img && img.complete) {
        const parent = canvas.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, rect.width, rect.height);
        
        const imgRatio = img.width / img.height;
        const canvasRatio = rect.width / rect.height;
        
        let drawWidth = rect.width;
        let drawHeight = drawWidth / imgRatio;

        if (drawHeight < rect.height) {
            drawHeight = rect.height;
            drawWidth = drawHeight * imgRatio;
        }

        const x = (rect.width - drawWidth) / 2;
        const y = (rect.height - drawHeight) / 2;

        ctx.fillStyle = "#050505";
        ctx.fillRect(0, 0, rect.width, rect.height);
        ctx.drawImage(img, x, y, drawWidth, drawHeight);
      }
    };

    const observer = new ResizeObserver(() => {
      updateCanvasSize();
    });

    const parent = canvas.parentElement;
    if (parent) {
      observer.observe(parent);
    }

    const unsubscribe = frameIndex.on("change", render);
    
    updateCanvasSize();

    return () => {
      unsubscribe();
      observer.disconnect();
    };
  }, [frameIndex, images]);

  // Scrollytelling Beats Opacities
  const opacityA = useTransform(smoothProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const opacityB = useTransform(smoothProgress, [0.2, 0.25, 0.4, 0.45], [0, 1, 1, 0]);
  const opacityC = useTransform(smoothProgress, [0.45, 0.5, 0.65, 0.7], [0, 1, 1, 0]);
  const opacityD = useTransform(smoothProgress, [0.7, 0.75, 1], [0, 1, 1]);

  // Gradient overlays that change with scroll
  const gradientOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.1, 0.3, 0.5, 0.8]);
  const gradientHue = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [120, 100, 80, 60, 40]);
  
  // Use useMotionTemplate for string interpolation
  const opacityScaled = useTransform(gradientOpacity, (opacity) => opacity * 0.1);
  const opacityLeft = useTransform(gradientOpacity, (opacity) => opacity * 0.15);
  const opacityRight = useTransform(gradientOpacity, (opacity) => opacity * 0.1);
  
  const mainGradient = useMotionTemplate`radial-gradient(ellipse at center, hsla(${gradientHue}, 60%, 50%, ${opacityScaled}) 0%, transparent 70%)`;
  const cornerGradientLeft = useMotionTemplate`radial-gradient(circle at top left, rgba(164, 198, 57, ${opacityLeft}) 0%, transparent 50%)`;
  const cornerGradientRight = useMotionTemplate`radial-gradient(circle at bottom right, rgba(164, 198, 57, ${opacityRight}) 0%, transparent 50%)`;

  return (
    <div ref={containerRef} className="relative w-full bg-[#050505]" style={{ height: "400vh", position: "relative" }}>
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-[#050505]">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block pointer-events-none" />

        {/* Gradient Overlays */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: mainGradient,
          }}
        />
        
        {/* Corner gradient accents */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
          style={{
            background: cornerGradientLeft,
          }}
        />
        
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
          style={{
            background: cornerGradientRight,
          }}
        />

        {/* Floating Particles */}
        <FloatingParticles scrollProgress={smoothProgress} />

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center m-0 px-6">
          
          {/* Beat A */}
          <motion.div style={{ opacity: opacityA }} className="absolute flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <h2 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter text-white/90 mb-4 text-shadow-glow">
                PURE CEREMONIAL
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light max-w-2xl">
                The art of the perfect pour begins with stillness.
              </p>
            </motion.div>
          </motion.div>

          {/* Beat B */}
          <motion.div style={{ opacity: opacityB }} className="absolute flex flex-col items-center">
            <h2 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter text-white/90 mb-4 text-shadow-glow">
              THE COLLISION
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light max-w-2xl">
              Rich espresso meets vibrant stone-ground matcha.
            </p>
          </motion.div>

          {/* Beat C */}
          <motion.div style={{ opacity: opacityC }} className="absolute flex flex-col items-center">
            <h2 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter text-white/90 mb-4 text-shadow-glow">
              KINETIC CHILL
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light max-w-2xl">
              Crystalline ice, suspended in a moment of explosive energy.
            </p>
          </motion.div>

          {/* Beat D */}
          <motion.div style={{ opacity: opacityD }} className="absolute flex flex-col items-center">
            <h2 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter text-white/90 mb-4 text-shadow-glow">
              CRAFTED ENERGY
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light max-w-2xl">
              Experience the rush in every drop.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function MatchaExperience() {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const indexStr = i.toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${indexStr}.jpg`;
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  if (imagesLoaded < FRAME_COUNT) {
    const progress = Math.round((imagesLoaded / FRAME_COUNT) * 100);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#050505] text-white">
        <div className="relative flex items-center justify-center w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke="#1a1a1a"
              strokeWidth="4"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke="#A4C639"
              strokeWidth="4"
              strokeDasharray="282.7"
              strokeDashoffset={282.7 - (282.7 * progress) / 100}
              className="transition-all duration-300 ease-out"
            />
          </svg>
          <span className="absolute text-xl font-light tracking-widest text-[#A4C639]">{progress}%</span>
        </div>
        <p className="mt-8 text-sm uppercase tracking-[0.3em] text-white/50">Brewing Experience</p>
      </div>
    );
  }

  return (
    <>
      <MatchaContent images={images} />
    </>
  );
}
