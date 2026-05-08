"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  ClipboardSignature,
  Settings,
  Leaf
} from 'lucide-react';

const servicesData = [
  {
    icon: <Building2 strokeWidth={1} className="w-8 h-8 mb-6 text-gray-800" />,
    title: "COMMERCIAL\nCONSTRUCTION",
    description: "From ground-up builds to complex renovations, we deliver spaces that are built to perform."
  },
  {
    icon: <ClipboardSignature strokeWidth={1} className="w-8 h-8 mb-6 text-gray-800" />,
    title: "DESIGN-BUILD\nSOLUTIONS",
    description: "Integrated design and construction for faster delivery, greater collaboration, and smarter outcomes."
  },
  {
    icon: <Settings strokeWidth={1} className="w-8 h-8 mb-6 text-gray-800" />,
    title: "FACILITY\nMANAGEMENT",
    description: "Proactive management that keeps your facilities running efficiently, safely, and sustainably."
  },
  {
    icon: <Leaf strokeWidth={1} className="w-8 h-8 mb-6 text-gray-800" />,
    title: "SUSTAINABILITY\nFOCUSED",
    description: "Building better for people and the planet through sustainable practices and responsible solutions."
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-[#f9f9f9] text-[#222] py-24 px-10 md:px-20 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* Top Header Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 mb-6 uppercase">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl leading-[1.1] tracking-tight">
              <span className="font-normal text-black">End-to-end solutions.</span>
              <br />
              <span className="font-light text-gray-600">Built around you.</span>
            </h2>
          </motion.div>

          {/* Right Column: Description & Link */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-end lg:pl-10"
          >
            <p className="text-sm text-gray-500 leading-relaxed max-w-md mb-8">
              From pre-construction to long-term facility operations, we deliver integrated solutions with a focus on quality, safety, sustainability, and performance.
            </p>

            <a
              href="#"
              data-cursor-hover
              data-cursor-text="SERVICES"
              className="flex items-center gap-4 group w-max"
            >
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase border-b border-gray-300 pb-1 group-hover:border-gray-800 transition-colors">
                View All Services
              </span>
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-gray-800 transition-colors">
                <ArrowRight size={14} className="text-gray-500 group-hover:text-gray-800 transition-colors" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Bottom Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 lg:divide-x divide-gray-300/60">

          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
              data-cursor-hover
              data-cursor-text="VIEW"
              className={`flex flex-col group cursor-pointer ${index === 0 ? 'lg:pr-10' :
                  index === servicesData.length - 1 ? 'lg:pl-10' : 'lg:px-10'
                } hover:bg-black/[0.02] transition-all duration-500 py-8 -my-8`}
            >
              <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-700">
                {service.icon}
              </div>

              <h3 className="text-xs font-bold tracking-[0.1em] uppercase leading-relaxed mb-4 whitespace-pre-line text-gray-800 group-hover:text-black transition-colors">
                {service.title}
              </h3>

              <p className="text-[13px] text-gray-500 leading-relaxed mb-10 flex-grow pr-4">
                {service.description}
              </p>

              <div className="flex items-center gap-2 group/btn">
                <div className="w-0 h-[1px] bg-black group-hover:w-8 transition-all duration-500" />
                <ArrowRight
                  size={16}
                  className="text-gray-400 transform group-hover:translate-x-1 group-hover:text-black transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;