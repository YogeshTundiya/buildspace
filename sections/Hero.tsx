"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, animate } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const CountUpNumber = ({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.25, 1, 0.5, 1],
        onUpdate: (latest) => setDisplayValue(Math.floor(latest))
      });
      return () => controls.stop();
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return <span>{displayValue}{suffix}</span>;
};

// Premium architecture/interior image
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2940&auto=format&fit=crop";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen bg-[#050505] text-white font-sans overflow-hidden"
    >
      {/* THE TRANSITION: Horizontal Expanding Rectangular Mask */}
      {/* Starts as a thin horizontal slit in the middle (50% from top and bottom) */}
      <motion.div 
        initial={{ clipPath: "inset(50% 15% 50% 15%)" }} 
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}   
        transition={{ duration: 1.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] as const }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          y: backgroundY,
          backgroundImage: `url("${HERO_IMAGE_URL}")`,
          height: "120%", 
          top: "-10%" 
        }}
      >
        {/* Dark gradient overlay to ensure Navbar and text are always perfectly visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/30 to-[#050505]/90" />
      </motion.div>

      {/* Main Hero Content Area - Beautiful layout structure */}
      <motion.main 
        style={{ y: textY }}
        className="relative z-10 w-full h-screen max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col justify-between pt-32 pb-12 pointer-events-none"
      >
        {/* Top Content: Main Title Split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full mt-10 md:mt-20 pointer-events-auto overflow-hidden pb-4">
          
          {/* Left Title - SLIDING IN FROM LEFT (Original Animation) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.76, 0, 0.24, 1] as const }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] font-light tracking-tighter uppercase">
              Build Space <br />
              <span className="font-serif italic text-white/70 text-5xl md:text-7xl lg:text-[8rem]">Living</span>
            </h1>
          </motion.div>

          {/* Right Title - SLIDING IN FROM RIGHT (Original Animation) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1.4, ease: [0.76, 0, 0.24, 1] as const }}
            className="mt-6 md:mt-0 text-left md:text-right"
          >
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] leading-none font-medium tracking-tight uppercase">
              Experiences
            </h2>
          </motion.div>

        </div>

        {/* Bottom Content: Description, Button, and Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-end w-full gap-10 pointer-events-auto">
          
          {/* Left Info & Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
            className="flex flex-col gap-8 max-w-md"
          >
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium opacity-80">
              We build high-performance spaces and manage facilities that empower people, elevate businesses, and transform communities.
            </p>

            <a 
              href="#" 
              data-cursor-hover
              data-cursor-text="EXPLORE"
              className="group flex items-center gap-6 text-[11px] font-bold tracking-[0.3em] uppercase w-max text-white/90 hover:text-white transition-all"
            >
              <span className="relative py-2">
                Explore Our Work
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 group-hover:bg-white transition-all duration-300" />
              </span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-all duration-500 bg-black/20 backdrop-blur-sm">
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </motion.div>

          {/* Right Stats Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
            className="hidden lg:flex bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden text-white shadow-2xl"
          >
            <div className="flex flex-col justify-center px-8 py-6 border-r border-white/10">
              <span className="text-3xl font-light mb-1 tracking-tighter">
                <CountUpNumber value={250} suffix="+" delay={2.5} />
              </span>
              <span className="text-[9px] tracking-[0.3em] text-gray-400 uppercase font-bold leading-tight">Projects</span>
            </div>

            <div className="flex flex-col justify-center px-8 py-6 border-r border-white/10">
              <span className="text-3xl font-light mb-1 tracking-tighter">
                <CountUpNumber value={20} suffix="M+" delay={2.7} />
              </span>
              <span className="text-[9px] tracking-[0.3em] text-gray-400 uppercase font-bold leading-tight">Sq Ft</span>
            </div>

            <button 
              data-cursor-hover
              data-cursor-text="PLAY"
              className="flex items-center justify-center px-8 py-6 hover:bg-white/10 transition-all group gap-4"
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                <Play size={14} className="ml-1 text-white group-hover:text-black transition-colors" />
              </div>
              <span className="text-[9px] tracking-[0.3em] text-gray-300 group-hover:text-white transition-colors font-bold uppercase">Reel</span>
            </button>
          </motion.div>

        </div>
      </motion.main>
    </div>
  );
};

export default Hero;