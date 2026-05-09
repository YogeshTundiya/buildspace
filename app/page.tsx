"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Projects from "@/sections/Projects";
import FeatureDashboard from "@/components/FeatureDashboard";
import InsightsAndCTA from "@/sections/InsightsAndCTA";
import Footer from "@/sections/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  useEffect(() => {
    // Scrolls to top so the reveal is always perfectly framed
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#050505]">
      <CustomCursor />

      {/* Main Website Wrapper */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full h-full"
      >
        <SmoothScrollProvider>
          {/* Ensure Navbar fades in slightly after the main transition starts */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 1 }}>
             <Navbar />
          </motion.div>
          
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