"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const insightsData = [
  {
    category: "INSIGHTS",
    title: "The Future of Sustainable Commercial Buildings",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" 
  },
  {
    category: "NEWS",
    title: "Build Space Breaks Ground on New Industrial Facility",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop" 
  },
  {
    category: "INSIGHTS",
    title: "5 Ways Smart Facility Management Drives Business Performance",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
  }
];

const InsightsAndCTA = () => {
  return (
    <section id="insights" className="relative bg-[#f5f5f5] text-[#222] pt-24 pb-12 px-8 md:px-16 lg:px-24 font-sans overflow-hidden">
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3BaseFilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/feFilter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Top Section: Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Left Column: Heading & Link */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-1 flex flex-col justify-between"
          >
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-6 uppercase">
                Insights
              </p>
              <h2 className="text-4xl md:text-[2.5rem] leading-[1.15] tracking-tight mb-8">
                <span className="font-light text-gray-800">Ideas and expertise</span><br />
                <span className="font-light text-gray-800">that build value.</span>
              </h2>
            </div>
            
            <a 
              href="#" 
              data-cursor-hover
              data-cursor-text="INSIGHTS"
              className="flex items-center gap-4 group w-max mt-auto border-none outline-none"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-800 border-b border-gray-300 pb-1 group-hover:border-gray-800 transition-colors">
                View All Insights
              </span>
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-gray-800 transition-colors">
                <ArrowRight size={14} className="text-gray-500 group-hover:text-gray-800 transition-colors" />
              </div>
            </a>
          </motion.div>

          {/* Right Columns: Article Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {insightsData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
                data-cursor-hover
                data-cursor-text="READ"
                className="flex flex-col group cursor-pointer"
              >
                <div className="w-full aspect-[16/10] overflow-hidden mb-6 bg-gray-200">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                
                <p className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">
                  {item.category}
                </p>
                <h3 className="text-sm md:text-base font-medium text-gray-800 leading-snug mb-6 pr-4 group-hover:text-black transition-colors">
                  {item.title}
                </h3>
                
                <div className="mt-auto flex items-center gap-3">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-black transition-colors">
                    Read More
                  </span>
                  <ArrowRight size={14} className="text-gray-300 transform group-hover:translate-x-1 group-hover:text-black transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section: CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="relative w-full text-white p-10 md:p-14 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 rounded-sm group"
          style={{
            backgroundColor: '#121316',
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255, 255, 255, 0.03) 1px, rgba(255, 255, 255, 0.03) 2px, transparent 2px, transparent 20px),
              repeating-linear-gradient(-45deg, transparent, transparent 1px, rgba(255, 255, 255, 0.03) 1px, rgba(255, 255, 255, 0.03) 2px, transparent 2px, transparent 20px)
            `
          }}
        >
          {/* Subtle noise */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3BaseFilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/feFilter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
          
          <div className="relative z-10 flex items-center gap-6 md:gap-10 w-full lg:w-auto">
            <motion.div 
              initial={{ rotate: -20, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full border border-white/20 group-hover:border-white/50 transition-colors"
            >
              <div className="w-6 h-6 border-[1.5px] border-white/70 flex flex-col justify-end">
                <div className="h-1/2 border-t-[1.5px] border-white/70 w-full"></div>
              </div>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Ready to build<br /><span className="italic text-white/60">what's next?</span>
            </h2>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 w-full lg:w-auto justify-end">
            <p className="text-white/50 text-xs font-light max-w-[200px]">
              Let's create spaces that drive your business forward.
            </p>
            
            <button 
              data-cursor-hover
              data-cursor-text="CONTACT"
              className="flex-shrink-0 flex items-center gap-4 border border-white/30 px-8 py-5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all group/btn"
            >
              Let's Connect
              <ArrowRight size={14} className="font-light transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default InsightsAndCTA;
