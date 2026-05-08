"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
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
      window.scrollTo(0, 0); 
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <div className="w-full min-h-screen bg-[#0b0c10]">
      <CustomCursor />
      
      {/* LayoutGroup allows layoutId to animate smoothly between unmounting components */}
      <LayoutGroup>
        <AnimatePresence mode="wait">
          {isLoading && (
            <Loader key="loader" onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {!isLoading && (
          <motion.main
            // Removed scale/translate to fix the layoutId lag
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
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
        )}
      </LayoutGroup>
    </div>
  );
}