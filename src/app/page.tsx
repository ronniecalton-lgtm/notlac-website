import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#0B1E36] text-white overflow-hidden">
      {/* Abstract Background Element (representing a secure digital node) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#00D4FF] rounded-full opacity-10 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-10 flex flex-col items-start justify-center min-h-[80vh]">
        
        {/* Eyebrow Text */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#475569]/30 border border-[#475569] text-[#00D4FF] text-sm font-semibold tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-[#00D4FF] mr-2 animate-pulse"></span>
          Public Safety AI Consulting
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl">
          Secure AI Governance for <br className="hidden lg:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-white">
            Mission-Critical Operations.
          </span>
        </h1>

        {/* Sub-headline integrating operational reality */}
        <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light">
          We bridge the gap between NIST compliance and operational reality. Deploy enterprise AI securely across the entire criminal justice lifecycle—from the 911 dispatcher's console, through complex investigations, to secure detention environments.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link 
            href="/consultation" 
            className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-[#0B1E36] bg-[#00D4FF] rounded-md hover:bg-cyan-300 transition-colors duration-200 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
          >
            Book a Consultation
          </Link>
          <Link 
            href="/services" 
            className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-[#475569] rounded-md hover:bg-[#475569]/50 transition-colors duration-200"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}