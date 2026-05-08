"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Projects from "@/sections/Projects";
import FeatureDashboard from "@/components/FeatureDashboard";
import InsightsAndCTA from "@/sections/InsightsAndCTA";
import Footer from "@/sections/Footer";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      // Scrolls to top so the reveal is always perfect
      window.scrollTo(0, 0); 
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <div className="w-full min-h-screen bg-[#0b0c10]">
      <CustomCursor />
      {/* The Loader Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* The Main Website Reveal Animation */}
      <motion.main
        variants={{
          hidden: { scale: 0.95, opacity: 0, y: 20 },
          visible: { 
            scale: 1, 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 1.2,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.4,
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
        className="w-full h-full"
      >
        <SmoothScrollProvider>
          <Navbar />
          <div className="flex-1">
            <Hero />
            <Services />
            <Projects />
            <FeatureDashboard />
            <InsightsAndCTA />
          </div>
          <Footer />
        </SmoothScrollProvider>
      </motion.main>
    </div>
  );
}