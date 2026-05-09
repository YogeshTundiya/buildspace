"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#121316] text-white pt-20 pb-10 px-8 md:px-16 lg:px-24 font-sans border-t border-white/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-[1400px] mx-auto"
      >
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col lg:pr-8 mb-8 lg:mb-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 border-2 border-white">
                <div className="w-1/2 h-full border-r-2 border-white flex flex-col justify-end">
                  <div className="h-1/2 border-t-2 border-white w-full"></div>
                </div>
                <div className="w-1/2 h-full"></div>
              </div>
              <div className="flex flex-col leading-none font-semibold tracking-widest text-base">
                <span>BUILD</span>
                <span>SPACE</span>
              </div>
            </div>
            
            <p className="text-[13px] text-gray-400 leading-relaxed max-w-xs">
              We build high-performance spaces and manage facilities that empower people, elevate businesses, and transform communities.
            </p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300 mb-6">Company</h4>
            <div className="flex flex-col gap-y-3 text-[13px] text-gray-400">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">News</a>
              <a href="#" className="hover:text-white transition-colors">Sustainability</a>
            </div>
          </div>

          {/* Services Links */}
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300 mb-6">Services</h4>
            <div className="flex flex-col gap-y-3 text-[13px] text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Construction</a>
              <a href="#" className="hover:text-white transition-colors">Design-Build</a>
              <a href="#" className="hover:text-white transition-colors">Facility Management</a>
              <a href="#" className="hover:text-white transition-colors">Sustainability</a>
            </div>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300 mb-6">Resources</h4>
            <div className="flex flex-col gap-y-3 text-[13px] text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Projects</a>
              <a href="#" className="hover:text-white transition-colors">Insights</a>
              <a href="#" className="hover:text-white transition-colors">Safety</a>
              <a href="#" className="hover:text-white transition-colors">Subcontractors</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300 mb-6">Contact</h4>
            <div className="flex flex-col gap-y-3 text-[13px] text-gray-400 mb-6">
              <p className="leading-relaxed">123 Innovation Drive<br />Suite 200<br />Austin, TX 78701</p>
              <a href="tel:5125550198" className="hover:text-white transition-colors mt-2">(512) 555-0198</a>
              <a href="mailto:hello@buildspace.com" className="hover:text-white transition-colors">hello@buildspace.com</a>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-5 text-gray-400">
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={18} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram"><Instagram size={18} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="YouTube"><Youtube size={18} strokeWidth={1.5} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-[11px] text-gray-500">
          <p className="text-center lg:text-left">© 2024 Build Space. All rights reserved.</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
            <span className="hidden md:inline text-gray-700">|</span>
            <span className="text-gray-300 font-medium tracking-wide">
              Developed by <a href="#" className="text-white hover:underline transition-all">Codex Infotech</a>
            </span>
          </div>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;