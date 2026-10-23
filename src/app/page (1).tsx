import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-[#0B1E36] text-white overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#00D4FF] rounded-full opacity-10 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-10 flex flex-col items-start justify-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#475569]/30 border border-[#475569] text-[#00D4FF] text-sm font-semibold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] mr-2 animate-pulse"></span>
            Public Safety AI Consulting
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl">
            Secure AI Governance for <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-white">
              Mission-Critical Operations.
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light">
            We bridge the gap between NIST compliance and operational reality. Deploy enterprise AI securely across the entire criminal justice lifecycle—from the 911 dispatcher's console, through complex investigations, to secure detention environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/consultation" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-[#0B1E36] bg-[#00D4FF] rounded-md hover:bg-cyan-300 transition-colors duration-200 shadow-[0_0_15px_rgba(0,212,255,0.4)]">
              Book a Consultation
            </Link>
            <Link href="/services" className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white bg-transparent border border-[#475569] rounded-md hover:bg-[#475569]/50 transition-colors duration-200">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST BADGES */}
      <section className="bg-[#475569]/10 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-500 tracking-wide uppercase mb-6">
            Aligning with Industry Standards
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-70 grayscale">
            <div className="text-xl font-bold text-[#0B1E36]">CJIS Compliant Architecture</div>
            <div className="text-xl font-bold text-[#0B1E36]">NIST AI RMF Framework</div>
            <div className="text-xl font-bold text-[#0B1E36]">Section 508 Accessible</div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#0B1E36] sm:text-4xl">Comprehensive Consulting Services</h2>
            <p className="mt-4 text-lg text-gray-600">Actionable intelligence and operational readiness for law enforcement agencies navigating the AI landscape.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#0B1E36] rounded-md flex items-center justify-center mb-6">
                <span className="text-[#00D4FF] text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1E36] mb-3">AI Policy & Governance</h3>
              <p className="text-gray-600 mb-6">Develop rigorous, NIST-compliant agency policies that mitigate legal risk, establish clear guardrails, and build public trust.</p>
              <Link href="/consultation" className="text-[#00D4FF] font-semibold hover:text-[#0B1E36] transition-colors">Schedule Audit &rarr;</Link>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#0B1E36] rounded-md flex items-center justify-center mb-6">
                <span className="text-[#00D4FF] text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1E36] mb-3">Secure Implementation</h3>
              <p className="text-gray-600 mb-6">Architect secure environments for generative AI tools, ensuring strict compliance with local, state, and federal data mandates.</p>
              <Link href="/consultation" className="text-[#00D4FF] font-semibold hover:text-[#0B1E36] transition-colors">Review Strategy &rarr;</Link>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#0B1E36] rounded-md flex items-center justify-center mb-6">
                <span className="text-[#00D4FF] text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1E36] mb-3">Operational Training</h3>
              <p className="text-gray-600 mb-6">Comprehensive training programs designed for frontline users. We ensure smooth onboarding for mission-critical deployments—from mobile video integrations to command center operations.</p>
              <Link href="/consultation" className="text-[#00D4FF] font-semibold hover:text-[#0B1E36] transition-colors">Book Training &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
      {/* 4. THE REALITY GAP (WHY US) */}
      <section className="bg-[#0B1E36] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
                The Reality Gap: <br/>
                <span className="text-[#00D4FF]">We Know The Workflow.</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Most AI consultants understand algorithms; we understand the operational reality of the criminal justice system. With over a decade of frontline and software training experience, we know exactly what is at stake.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                From the 911 dispatcher's console and secure detention facilities to active investigations, our frameworks are built for actual law enforcement operations. We integrate AI governance safely alongside mission-critical ecosystems like Flex, Mobile Video, Command Central, and Spillman so your workflows are enhanced, never disrupted.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] mr-3">✓</span>
                  <span className="text-gray-200">Hands-on criminal justice experience</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] mr-3">✓</span>
                  <span className="text-gray-200">Expertise in mission-critical software onboarding</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] mr-3">✓</span>
                  <span className="text-gray-200">Tailored implementation for public safety agencies</span>
                </li>
              </ul>
            </div>
            {/* Visual Placeholder */}
            <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden border border-[#475569]/50 bg-[#475569]/10 flex items-center justify-center shadow-2xl">
               <div className="text-center p-8">
                 <div className="w-16 h-16 border-2 border-[#00D4FF] rounded-full flex items-center justify-center mx-auto mb-4 opacity-50 animate-pulse">
                   <span className="text-[#00D4FF] text-xl font-bold">AI</span>
                 </div>
                 <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">[Operational Environment Image]</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}