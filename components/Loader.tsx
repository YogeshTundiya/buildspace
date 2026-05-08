"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    // Shorter timer since we don't need to wait for scrolling letters
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
      // Simple fade out, the layoutId handles the image breakout
      exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative w-full h-full flex items-center justify-center max-w-[1400px] mx-auto px-6">
        
        {/* Split Large Typography matching the video */}
        <div className="absolute z-30 pointer-events-none w-full flex justify-between items-center text-white px-8 md:px-24">
           <motion.h1 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="text-5xl md:text-[8rem] lg:text-[10rem] font-sans tracking-tight"
           >
             BUILD
           </motion.h1>
           <motion.h1 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="text-5xl md:text-[8rem] lg:text-[10rem] font-sans tracking-tight mt-24 md:mt-40"
           >
             SPACE
           </motion.h1>
        </div>

        {/* The Expanding Image Container */}
        <motion.div
          layoutId="hero-background"
          className="relative z-20 w-[260px] h-[340px] md:w-[320px] md:h-[420px] overflow-hidden rounded-sm"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop" 
            alt="Loading preview"
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-12 text-[9px] md:text-[10px] tracking-[0.5em] text-white/30 uppercase text-center z-30"
      >
        Precise Engineering . Commercial Excellence
      </motion.div>
    </motion.div>
  );
};

export default Loader;