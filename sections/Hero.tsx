"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, animate } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const CountUpNumber = ({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Start the animation after the specified delay
    // This ensures it synchronizes perfectly with the section's reveal animation
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

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom, ease: "easeOut" }
    })
  };

  const titleVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: custom, ease: [0.76, 0, 0.24, 1] }
    })
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen bg-black text-white font-sans overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          y: backgroundY,
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop")',
          height: "120%", 
          top: "-10%" 
        }}
      />

      {/* Main Hero Content with Parallax Text */}
      <motion.main 
        style={{ y: textY }}
        className="relative z-10 flex flex-col justify-center h-screen px-12 lg:px-24 max-w-5xl"
      >
        <motion.p 
          variants={revealVariants}
          custom={0.1}
          className="text-[10px] tracking-[0.4em] text-gray-400 mb-8 uppercase font-bold"
        >
          Commercial Construction<br />
          & Facility Management
        </motion.p>

        <div className="overflow-hidden mb-10">
          <motion.h1 
            variants={titleVariants}
            custom={0.2}
            className="text-6xl md:text-[5.5rem] leading-[1.05] font-light tracking-tight"
          >
            SPACES<br />
            THAT DRIVE<br />
            POSSIBILITY
          </motion.h1>
        </div>

        <motion.p 
          variants={revealVariants}
          custom={0.4}
          className="text-gray-300 max-w-md text-sm md:text-base leading-relaxed mb-14 font-medium opacity-80"
        >
          We build high-performance spaces and manage facilities that empower people, elevate businesses, and transform communities.
        </motion.p>

        <motion.a 
          variants={revealVariants}
          custom={0.5}
          href="#" 
          data-cursor-hover
          data-cursor-text="EXPLORE"
          className="group flex items-center gap-6 text-[11px] font-bold tracking-[0.3em] uppercase w-max text-white/90 hover:text-white transition-all"
        >
          <span className="relative py-2">
            Explore Our Work
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 group-hover:bg-accent transition-all duration-300" />
          </span>
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-all duration-500">
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.a>
      </motion.main>

      {/* Repositioned Scroll Indicator */}
      <motion.div 
        variants={revealVariants}
        custom={0.8}
        className="absolute bottom-12 left-10 z-20 flex flex-col items-center gap-8"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 80, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)]"
            />
          </div>
          <span className="text-[9px] tracking-[0.5em] uppercase text-gray-500 [writing-mode:vertical-lr] font-bold">Scroll</span>
        </div>
      </motion.div>

      {/* Bottom Right Stats Box Animation */}
      <motion.div 
        variants={revealVariants}
        custom={0.3}
        className="absolute bottom-12 right-12 z-20 hidden lg:flex bg-black/60 backdrop-blur-2xl border border-white/10 rounded-sm overflow-hidden text-white shadow-2xl"
      >
        <div className="flex flex-col justify-center px-10 py-8 border-r border-white/5">
          <span className="text-4xl font-light mb-2 tracking-tighter">
            <CountUpNumber value={250} suffix="+" delay={1} />
          </span>
          <span className="text-[9px] tracking-[0.3em] text-gray-400 uppercase font-bold leading-tight">Projects<br/>Delivered</span>
        </div>

        <div className="flex flex-col justify-center px-10 py-8 border-r border-white/5">
          <span className="text-4xl font-light mb-2 tracking-tighter">
            <CountUpNumber value={20} suffix="M+" delay={1.2} />
          </span>
          <span className="text-[9px] tracking-[0.3em] text-gray-400 uppercase font-bold leading-tight">Sq Ft<br/>Built</span>
        </div>

        <div className="flex flex-col justify-center px-10 py-8 border-r border-white/5">
          <span className="text-4xl font-light mb-2 tracking-tighter">
            <CountUpNumber value={98} suffix="%" delay={1.4} />
          </span>
          <span className="text-[9px] tracking-[0.3em] text-gray-400 uppercase font-bold leading-tight">Client<br/>Satisfaction</span>
        </div>

        <button 
          data-cursor-hover
          data-cursor-text="PLAY"
          className="flex flex-col items-center justify-center px-10 py-8 hover:bg-white/[0.03] transition-all group border-l border-white/5"
        >
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4 group-hover:bg-white group-hover:border-white transition-all duration-500">
            <Play size={16} className="ml-1 text-white group-hover:text-black transition-colors" />
          </div>
          <span className="text-[9px] tracking-[0.3em] text-gray-400 group-hover:text-white transition-colors font-bold uppercase">Play Reel</span>
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;