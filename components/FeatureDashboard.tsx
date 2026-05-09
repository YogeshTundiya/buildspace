"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Target } from 'lucide-react';
import Image from 'next/image';

const stats = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-white/40" />,
    label: "Safety Score",
    value: "99.8%",
    desc: "Exceeding OSHA standards consistently."
  },
  {
    icon: <Zap className="w-5 h-5 text-white/40" />,
    label: "Efficiency",
    value: "14.5%",
    desc: "Energy savings in managed facilities."
  },
  {
    icon: <Globe className="w-5 h-5 text-white/40" />,
    label: "Global Reach",
    value: "12",
    desc: "Countries with active build sites."
  },
  {
    icon: <Target className="w-5 h-5 text-white/40" />,
    label: "Precision",
    value: "0.1mm",
    desc: "Tolerance in technical engineering."
  }
];

const FeatureDashboard = () => {
  return (
    <section className="bg-[#050505] py-32 px-10 md:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-24">
          <div className="lg:col-span-7">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] tracking-[0.4em] text-white/30 uppercase font-bold mb-6"
            >
              System Performance
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-4xl md:text-6xl font-light text-white tracking-tight leading-[1.1]"
            >
              Measured by <span className="italic text-white/60">impact.</span><br />
              Driven by <span className="text-white/40">data.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-5">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-white/60 text-sm md:text-base leading-relaxed max-w-md font-light"
            >
              We don&apos;t just build; we optimize. Our integrated approach combines physical excellence with digital intelligence to ensure your assets perform at their peak.
            </motion.p>
          </div>
        </div>

        {/* The "Dashboard" Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              data-cursor-hover
              data-cursor-text="STATS"
              className="group p-8 bg-white/[0.03] border border-white/5 rounded-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                {stat.icon}
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
              </div>
              
              <div className="mb-2">
                <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase font-bold">
                  {stat.label}
                </span>
              </div>
              
              <div className="mb-4">
                <h3 className="text-3xl md:text-4xl font-light text-white">
                  {stat.value}
                </h3>
              </div>
              
              <p className="text-xs text-white/40 font-light leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-24 w-full h-[400px] relative overflow-hidden rounded-sm group"
        >
          <Image 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
            alt="Technical Precision"
            fill
            className="object-cover grayscale opacity-40 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          
          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                Engineered for Longevity
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                Our facilities are built with a focus on future-proofing. From modular electrical systems to sustainable material sourcing, we ensure your investment grows with your business.
              </p>
            </div>
            
            <button 
              data-cursor-hover
              data-cursor-text="VIEW"
              className="px-8 py-4 border border-white/20 text-[10px] tracking-[0.3em] uppercase text-white font-bold hover:bg-white hover:text-black transition-all"
            >
              Technical Specs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureDashboard;
