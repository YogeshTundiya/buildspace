"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Insights", href: "#insights" },
  { name: "Careers", href: "#careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      variants={{
        hidden: { y: -30, opacity: 0 },
        visible: { 
          y: 0, 
          opacity: 1,
          transition: { duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }
        }
      }}
      className={`fixed top-0 left-0 w-full px-6 md:px-10 py-6 md:py-8 flex items-center justify-between z-50 transition-all duration-300 ${
        scrolled || isMobileMenuOpen ? "bg-black/95 backdrop-blur-lg py-4 border-b border-white/5" : "bg-transparent"
      }`}
    >
      {/* Logo Area */}
      <Link 
        href="/" 
        data-cursor-hover
        data-cursor-text="HOME"
        className="flex items-center gap-3 group"
      >
        <div className="flex items-center justify-center w-10 h-10 border-2 border-white group-hover:bg-white group-hover:border-white transition-all duration-500">
          <div className="w-1/2 h-full border-r-2 border-white group-hover:border-black flex flex-col justify-end transition-all">
            <div className="h-1/2 border-t-2 border-white group-hover:border-black w-full"></div>
          </div>
          <div className="w-1/2 h-full"></div>
        </div>
        <div className="flex flex-col leading-none font-semibold tracking-widest text-lg text-white">
          <span>BUILD</span>
          <span>SPACE</span>
        </div>
      </Link>

      {/* Center Links */}
      <div className="hidden md:flex gap-10 text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            data-cursor-hover
            data-cursor-text="GO"
            className="hover:text-white transition-colors relative group py-2"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
          </Link>
        ))}
      </div>

      {/* Right CTA / Menu Toggle */}
      <div className="flex items-center gap-4">
        <button 
          data-cursor-hover
          data-cursor-text="START"
          className="hidden sm:flex items-center gap-4 border border-white/20 px-6 lg:px-8 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all group"
        >
          Let&apos;s Build
          <ArrowRight size={14} className="font-light transform group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-white border border-white/10 hover:border-white/40 transition-colors"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 flex flex-col md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-light tracking-widest uppercase text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button 
                className="mt-4 flex items-center justify-center gap-4 border border-white/20 px-8 py-5 text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all"
              >
                Let&apos;s Build
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}