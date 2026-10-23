import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-[#0B1E36] text-white overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#00D4FF] rounded-full opacity-10 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10 flex flex-col items-start justify-center">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-[#00D4FF] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] mr-2.5 animate-pulse"></span>
            Public Safety AI Consulting
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] max-w-4xl">
            Secure AI Governance for <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-cyan-200 to-white">
              Mission-Critical Operations.
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-normal">
            We bridge the gap between NIST compliance and operational reality. Deploy enterprise AI securely across the entire criminal justice lifecycle—from the 911 dispatcher's console, through complex investigations, to secure detention environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/consultation" 
              className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-[#0B1E36] bg-[#00D4FF] rounded-md hover:bg-[#38bdf8] transition-all duration-200 shadow-md active:scale-95"
            >
              Book a Consultation
            </Link>
            <Link 
              href="/services" 
              className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white bg-slate-800/60 border border-slate-700 rounded-md hover:bg-slate-700/60 transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. REFACTORED AUTHORITY & COMPLIANCE BAR */}
      <section className="bg-slate-900 border-y border-slate-800 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 tracking-widest uppercase mb-5">
            Architecture & Operational Compliance Standards
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center justify-center gap-3 bg-slate-800/60 border border-slate-700/70 rounded-lg py-3 px-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D4FF] flex-shrink-0"></span>
              <span className="text-sm font-semibold tracking-wide text-white">CJIS Policy Area 5 Aligned</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-slate-800/60 border border-slate-700/70 rounded-lg py-3 px-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D4FF] flex-shrink-0"></span>
              <span className="text-sm font-semibold tracking-wide text-white">NIST AI RMF 1.0 Framework</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-slate-800/60 border border-slate-700/70 rounded-lg py-3 px-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D4FF] flex-shrink-0"></span>
              <span className="text-sm font-semibold tracking-wide text-white">Section 508 / WCAG Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight">
              Comprehensive Consulting Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Actionable intelligence and operational readiness for law enforcement agencies navigating the AI landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#0B1E36] rounded-lg flex items-center justify-center mb-6">
                  <span className="text-[#00D4FF] text-xl font-black">01</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B1E36] mb-3">AI Policy & Governance</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Develop rigorous, NIST-compliant agency policies that mitigate legal risk, establish clear guardrails, and build public trust.
                </p>
              </div>
              <Link 
                href="/consultation" 
                className="text-[#0284C7] font-semibold text-sm hover:text-[#0B1E36] inline-flex items-center gap-1.5 group transition-colors pt-2 border-t border-slate-100"
              >
                <span>Schedule Policy Audit</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#0B1E36] rounded-lg flex items-center justify-center mb-6">
                  <span className="text-[#00D4FF] text-xl font-black">02</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B1E36] mb-3">Secure Implementation</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Architect secure environments for generative AI tools, ensuring strict compliance with local, state, and federal data mandates.
                </p>
              </div>
              <Link 
                href="/consultation" 
                className="text-[#0284C7] font-semibold text-sm hover:text-[#0B1E36] inline-flex items-center gap-1.5 group transition-colors pt-2 border-t border-slate-100"
              >
                <span>Review Implementation Strategy</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#0B1E36] rounded-lg flex items-center justify-center mb-6">
                  <span className="text-[#00D4FF] text-xl font-black">03</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B1E36] mb-3">Operational Training</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Comprehensive training programs designed for frontline users. We ensure smooth onboarding for mission-critical deployments—from mobile video integrations to command center operations.
                </p>
              </div>
              <Link 
                href="/consultation" 
                className="text-[#0284C7] font-semibold text-sm hover:text-[#0B1E36] inline-flex items-center gap-1.5 group transition-colors pt-2 border-t border-slate-100"
              >
                <span>Book Training Session</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE REALITY GAP (WHY US) */}
      <section className="bg-[#0B1E36] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-block text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-3">
                Frontline Domain Expertise
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight leading-tight">
                The Reality Gap: <br/>
                <span className="text-[#00D4FF]">We Know The Workflow.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
                Most AI consultants understand algorithms; we understand the operational reality of the criminal justice system. With over a decade of frontline and software training experience, we know exactly what is at stake.
              </p>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                From the 911 dispatcher's console and secure detention facilities to active investigations, our frameworks are built for actual law enforcement operations. We integrate AI governance safely alongside mission-critical ecosystems like Flex, Mobile Video, CommandCentral, and Spillman so your workflows are enhanced, never disrupted.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] mr-3 mt-0.5 flex-shrink-0 text-sm font-bold">✓</span>
                  <span className="text-slate-200 text-sm sm:text-base font-medium">Hands-on criminal justice experience across dispatch, corrections, and investigations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] mr-3 mt-0.5 flex-shrink-0 text-sm font-bold">✓</span>
                  <span className="text-slate-200 text-sm sm:text-base font-medium">Expertise in mission-critical software onboarding and legacy CAD/RMS migration</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] mr-3 mt-0.5 flex-shrink-0 text-sm font-bold">✓</span>
                  <span className="text-slate-200 text-sm sm:text-base font-medium">Tailored implementation frameworks aligned with CJIS Area 5 requirements</span>
                </li>
              </ul>
            </div>
            
            {/* Operational Environment Image */}
            <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl">
              <Image
                src="/operations-room.jpg"
                alt="Public Safety Dispatch and Real-Time Operations Center"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}