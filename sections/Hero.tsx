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

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: custom, ease: [0.76, 0, 0.24, 1] as const }
    })
  };

  const titleVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, delay: custom, ease: [0.76, 0, 0.24, 1] as const }
    })
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen bg-black text-white font-sans overflow-hidden"
    >
      {/* THE FIX: The layoutId wrapper handles the expansion morph. 
        The parallax logic goes ON the image inside it to prevent lag. 
      */}
      <motion.div 
        layoutId="hero-background"
        className="absolute inset-0 z-0 overflow-hidden bg-black"
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] as const }}
      >
        <motion.img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
          alt="Hero Background"
          className="absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
          style={{ y: backgroundY }} 
        />
        {/* Overlay fades in AFTER expansion so it doesn't darken the loading screen */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="absolute inset-0"
          style={{
             backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)'
          }}
        />
      </motion.div>

      {/* Main Hero Content (Your original layout) */}
      <motion.main 
        style={{ y: textY }}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col justify-center h-screen px-12 lg:px-24 max-w-5xl"
      >
        <motion.p 
          variants={revealVariants}
          custom={0.8}
          className="text-[10px] tracking-[0.4em] text-gray-400 mb-8 uppercase font-bold"
        >
          Commercial Construction<br />
          & Facility Management
        </motion.p>

        <div className="overflow-hidden mb-10 pt-2">
          <motion.h1 
            variants={titleVariants}
            custom={0.9}
            className="text-6xl md:text-[5.5rem] leading-[1.05] font-light tracking-tight"
          >
            SPACES<br />
            THAT DRIVE<br />
            POSSIBILITY
          </motion.h1>
        </div>

        <motion.p 
          variants={revealVariants}
          custom={1.1}
          className="text-gray-300 max-w-md text-sm md:text-base leading-relaxed mb-14 font-medium opacity-80"
        >
          We build high-performance spaces and manage facilities that empower people, elevate businesses, and transform communities.
        </motion.p>

        <motion.a 
          variants={revealVariants}
          custom={1.2}
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

      {/* Bottom Right Stats Box */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={revealVariants}
        custom={1.3}
        className="absolute bottom-12 right-12 z-20 hidden lg:flex bg-black/60 backdrop-blur-2xl border border-white/10 rounded-sm overflow-hidden text-white shadow-2xl"
      >
        <div className="flex flex-col justify-center px-10 py-8 border-r border-white/5">
          <span className="text-4xl font-light mb-2 tracking-tighter">
            <CountUpNumber value={250} suffix="+" delay={1.8} />
          </span>
          <span className="text-[9px] tracking-[0.3em] text-gray-400 uppercase font-bold leading-tight">Projects<br/>Delivered</span>
        </div>

        <div className="flex flex-col justify-center px-10 py-8 border-r border-white/5">
          <span className="text-4xl font-light mb-2 tracking-tighter">
            <CountUpNumber value={20} suffix="M+" delay={2.0} />
          </span>
          <span className="text-[9px] tracking-[0.3em] text-gray-400 uppercase font-bold leading-tight">Sq Ft<br/>Built</span>
        </div>

        <div className="flex flex-col justify-center px-10 py-8 border-r border-white/5">
          <span className="text-4xl font-light mb-2 tracking-tighter">
            <CountUpNumber value={98} suffix="%" delay={2.2} />
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