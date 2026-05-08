"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projectsData = [
  {
    title: "SUMMIT OFFICE TOWER",
    category: "COMMERCIAL OFFICE",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "NORTHPOINT DISTRIBUTION CENTER",
    category: "INDUSTRIAL",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "WELLNESS HEALTH CENTER",
    category: "HEALTHCARE",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "HORIZON CORPORATE CAMPUS",
    category: "COMMERCIAL OFFICE",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0b0c0f] text-white py-24 px-8 md:px-16 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Area */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          
          {/* Left Side: Title */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <span className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mb-4">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-5xl leading-[1.15] tracking-tight">
              <span className="font-normal text-white">Built to inspire.</span>
              <br />
              <span className="font-light text-[#888888]">Designed to last.</span>
            </h2>
          </motion.div>

          {/* Right Side: View All Link */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="#" 
              data-cursor-hover
              data-cursor-text="ALL PROJECTS"
              className="flex items-center gap-3 group pb-2 mb-1 border-none outline-none text-gray-300 hover:text-white transition-colors"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                View All Projects
              </span>
              <ArrowRight size={15} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
              data-cursor-hover
              data-cursor-text="VIEW"
              className="relative group w-full aspect-[4/5] bg-[#111] overflow-hidden cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col pointer-events-none z-10">
                <h3 className="text-white text-xs font-bold tracking-[0.15em] uppercase mb-4 transform group-hover:-translate-y-2 transition-all duration-500">
                  {project.title}
                </h3>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-4 overflow-hidden">
                  <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                    {project.category}
                  </p>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <ArrowRight 
                      size={14} 
                      className="text-white transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500" 
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <p className="text-[#666] text-[10px] font-bold tracking-[0.2em] mb-12 uppercase">
            Trusted By Leading Organizations
          </p>
          
          <div className="w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-white/10 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
              <div className="flex justify-center items-center py-6 lg:py-0 px-4">
                <span className="text-2xl font-bold tracking-tighter text-white">CBRE</span>
              </div>
              <div className="flex justify-center items-center py-6 lg:py-0 px-4">
                <span className="text-xl flex items-center gap-2 text-white">
                  <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center text-[8px]">|||</span> JLL
                </span>
              </div>
              <div className="flex justify-center items-center py-6 lg:py-0 px-4">
                <span className="text-2xl font-serif leading-tight text-center text-white">
                  Duke<br/><span className="text-[10px] tracking-widest uppercase font-sans">Realty</span>
                </span>
              </div>
              <div className="flex justify-center items-center py-6 lg:py-0 px-4">
                <span className="text-3xl font-serif italic font-bold text-white">P&G</span>
              </div>
              <div className="flex justify-center items-center py-6 lg:py-0 px-4">
                <span className="text-2xl font-serif text-white">Hines</span>
              </div>
              <div className="flex justify-center items-center py-6 lg:py-0 px-4">
                <span className="text-xl font-medium tracking-tight text-white">Medtronic</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;