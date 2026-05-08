"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const COMPANY_NAME = "BUILD SPACE";
const DUMMY_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const ScrollingLetter = ({ letter, index }: { letter: string; index: number }) => {
  if (letter === " ") {
    return <span className="inline-block w-[0.3em]" />;
  }

  const sequence = [
    DUMMY_CHARS[(index * 2) % 26],
    DUMMY_CHARS[(index * 5 + 3) % 26],
    DUMMY_CHARS[(index * 7 + 1) % 26],
    DUMMY_CHARS[(index * 11 + 5) % 26],
    DUMMY_CHARS[(index * 13 + 7) % 26],
    DUMMY_CHARS[(index * 17 + 2) % 26],
    letter
  ];

  return (
    <span className="relative inline-flex flex-col h-[1.2em] overflow-hidden leading-none">
      <motion.span
        className="flex flex-col text-white font-medium"
        initial={{ y: "0em" }}
        animate={{ y: "-7.2em" }}
        transition={{
          duration: 2.2, // Slightly longer duration for a heavier, cinematic feel
          delay: 0.6 + index * 0.08, // Increased stagger for a more pronounced wave
          ease: [0.85, 0, 0.15, 1],
        }}
      >
        {sequence.map((char, i) => (
          <span key={i} className="h-[1.2em] block text-center">
            {char}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    // The total animation takes about ~3.5 seconds. 
    // We lift the curtain at 4.2 seconds to let the completed word breathe.
    const timer = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
      exit={{
        y: "-100%",
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      <div className="relative flex flex-col items-center z-10">

        {/* Cinematic Logo Animation wrapper (Slow Zoom Out) */}
        <motion.div
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3.5, ease: [0.25, 1, 0.5, 1] }}
          className="mb-8 overflow-hidden"
        >
          <h1 className="text-4xl md:text-7xl font-sans tracking-[0.2em] uppercase flex">
            {COMPANY_NAME.split('').map((char, index) => (
              <ScrollingLetter key={index} letter={char} index={index} />
            ))}
          </h1>
        </motion.div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">

        {/* Deep background pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0, 0.15, 0.1], scale: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full bg-white/5 blur-[120px]"
        />

        {/* Slowly drifting cinematic grid pattern */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-40px" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            height: '120%' // Extra height allows it to drift cleanly without clipping
          }}
        />
      </div>

      {/* Bottom Text - Dramatic, slow fade in */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-12 text-[9px] md:text-[10px] tracking-[0.5em] text-white/30 uppercase text-center"
      >
        Precise Engineering . Commercial Excellence
      </motion.div>
    </motion.div>
  );
};

export default Loader;