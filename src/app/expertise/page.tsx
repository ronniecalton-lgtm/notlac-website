import React from 'react';
import Link from 'next/link';

export default function ExpertisePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-[#0B1E36] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              The Operational <span className="text-[#00D4FF]">Advantage</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We don't just understand the algorithm; we understand the environment. Our firm is built on over a decade of combined experience in frontline law enforcement and enterprise public safety software.
            </p>
          </div>
        </div>
        {/* Background Accent */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D4FF] to-[#0B1E36]"></div>
      </section>

      {/* THE REALITY GAP / INTRODUCTION */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0B1E36] mb-6">Bridging the Reality Gap</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The biggest failure in public safety AI implementation is the disconnect between theoretical technology and operational reality. Silicon Valley builds tools for ideal conditions; law enforcement operates in high-stress, high-liability realities. Notlac, LLC. was founded to bridge this exact gap, ensuring that NIST compliance and AI governance actually work when deployed to the streets, the dispatch center, and the courtroom.
            </p>
          </div>
        </div>
      </section>

      {/* CORE EXPERIENCE PILLARS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Pillar 1: Frontline Experience */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#00D4FF] rounded-full hidden md:block"></div>
              <h3 className="text-2xl font-extrabold text-[#0B1E36] mb-4 flex items-center">
                <span className="bg-[#0B1E36] text-[#00D4FF] w-8 h-8 rounded flex items-center justify-center mr-3 text-lg font-bold">7</span>
                Years in Criminal Justice
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our foundation is built on actual fieldwork. We have navigated the complexities of the justice system from multiple critical vantage points, giving us an unmatched understanding of agency workflows, evidentiary chains, and liability risks.
              </p>
              <ul className="space-y-4 text-[#475569] font-medium">
                <li className="flex items-center bg-gray-50 p-3 rounded border border-gray-100">
                  <span className="w-2 h-2 bg-[#00D4FF] rounded-full mr-3"></span>
                  911 Dispatch Operations
                </li>
                <li className="flex items-center bg-gray-50 p-3 rounded border border-gray-100">
                  <span className="w-2 h-2 bg-[#00D4FF] rounded-full mr-3"></span>
                  Active Investigations
                </li>
                <li className="flex items-center bg-gray-50 p-3 rounded border border-gray-100">
                  <span className="w-2 h-2 bg-[#00D4FF] rounded-full mr-3"></span>
                  Secure Detention Facility Management
                </li>
              </ul>
            </div>

            {/* Pillar 2: Software Integration */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#0B1E36] rounded-full hidden md:block"></div>
              <h3 className="text-2xl font-extrabold text-[#0B1E36] mb-4 flex items-center">
                <span className="bg-[#00D4FF] text-[#0B1E36] w-8 h-8 rounded flex items-center justify-center mr-3 text-lg font-bold">4</span>
                Years in Enterprise Software
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Beyond the field, we possess deep technical expertise in deploying mission-critical software at a global scale. We know how to integrate advanced AI without disrupting the delicate CAD and RMS ecosystems agencies rely on.
              </p>
              <ul className="space-y-4 text-[#475569] font-medium">
                <li className="flex items-center bg-gray-50 p-3 rounded border border-gray-100">
                  <span className="w-2 h-2 bg-[#0B1E36] rounded-full mr-3"></span>
                  Motorola Solutions Ecosystem Expertise
                </li>
                <li className="flex items-center bg-gray-50 p-3 rounded border border-gray-100">
                  <span className="w-2 h-2 bg-[#0B1E36] rounded-full mr-3"></span>
                  Flex, Command Central, & Spillman Deployments
                </li>
                <li className="flex items-center bg-gray-50 p-3 rounded border border-gray-100">
                  <span className="w-2 h-2 bg-[#0B1E36] rounded-full mr-3"></span>
                  Mobile Video & Digital Evidence Management
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#475569]/5 py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0B1E36] mb-6">Leverage Our Experience</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Stop relying on generic IT consultants for mission-critical deployments. Partner with a firm that speaks your language and understands your operational stakes.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/consultation" className="bg-[#0B1E36] text-white px-8 py-4 rounded-md font-bold hover:bg-[#475569] transition-colors">
              Schedule a Consultation
            </Link>
            <Link href="/services" className="bg-white text-[#0B1E36] border border-[#0B1E36] px-8 py-4 rounded-md font-bold hover:bg-gray-50 transition-colors">
              Review Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}