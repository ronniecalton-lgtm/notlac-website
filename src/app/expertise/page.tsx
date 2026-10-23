import React from 'react';
import Link from 'next/link';

export default function ExpertisePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="bg-[#0B1E36] py-20 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#00D4FF] rounded-full opacity-10 blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-[#00D4FF] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] mr-2.5 animate-pulse"></span>
            Operational Foundation
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            Our <span className="text-[#00D4FF]">Expertise</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            Bridging the divide between advanced machine learning governance and frontline public safety operations through authentic field experience.
          </p>
        </div>
      </section>

      {/* 2. STAT CALLOUTS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-5xl font-black text-[#0B1E36] tracking-tight">7+</span>
              <span className="text-sm font-bold text-[#0284C7] uppercase tracking-wider">Years Frontline Experience</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Criminal Justice Operations</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Direct operational tenure across 911 dispatch, secure detention facilities, and state gang task force investigations. We evaluate AI models against real incident response, chain of custody, and evidentiary admissibility.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-semibold text-slate-700 rounded-full">PSAP Workflows</span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-semibold text-slate-700 rounded-full">Chain of Custody</span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-semibold text-slate-700 rounded-full">Evidentiary Integrity</span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-semibold text-slate-700 rounded-full">CJIS Security Policy</span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-5xl font-black text-[#0B1E36] tracking-tight">4+</span>
              <span className="text-sm font-bold text-[#0284C7] uppercase tracking-wider">Years Enterprise SaaS</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Mission-Critical Deployments</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Hands-on leadership onboarding law enforcement agencies to mission-critical public safety platforms. Deep technical specialization in CAD/RMS, digital evidence ecosystems, and command-level workflow enablement.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-semibold text-slate-700 rounded-full">Flex & Spillman CAD/RMS</span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-semibold text-slate-700 rounded-full">CommandCentral</span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-semibold text-slate-700 rounded-full">Mobile Video Solutions</span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-semibold text-slate-700 rounded-full">Statewide Deployments</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE DOMAINS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight">
            Specialized Practice Areas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Engineered specifically for police departments, sheriff's offices, and statewide public safety networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-[#0B1E36] text-[#00D4FF] rounded flex items-center justify-center font-bold text-lg mb-6">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">NIST AI RMF Governance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Operationalizing the NIST AI Risk Management Framework across Govern, Map, Measure, and Manage functions for high-stakes public safety deployments.
              </p>
            </div>
            <Link 
              href="/consultation" 
              className="text-[#0284C7] font-semibold text-sm hover:text-[#0B1E36] inline-flex items-center gap-1.5 group transition-colors pt-3 border-t border-slate-100"
            >
              <span>Explore NIST Audits</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-[#0B1E36] text-[#00D4FF] rounded flex items-center justify-center font-bold text-lg mb-6">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">CAD / RMS Legacy Architecture</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Integrating modern generative tools alongside existing records management systems (RMS) and computer-aided dispatch (CAD) without breaking compliance.
              </p>
            </div>
            <Link 
              href="/consultation" 
              className="text-[#0284C7] font-semibold text-sm hover:text-[#0B1E36] inline-flex items-center gap-1.5 group transition-colors pt-3 border-t border-slate-100"
            >
              <span>Review Architecture Strategy</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-[#0B1E36] text-[#00D4FF] rounded flex items-center justify-center font-bold text-lg mb-6">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Frontline Enablement & Policy</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Practical, role-specific curricula designed for detectives, dispatchers, and field supervisors to safely leverage assistive AI while preventing hallucination risks.
              </p>
            </div>
            <Link 
              href="/consultation" 
              className="text-[#0284C7] font-semibold text-sm hover:text-[#0B1E36] inline-flex items-center gap-1.5 group transition-colors pt-3 border-t border-slate-100"
            >
              <span>Schedule Agency Training</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. HIGH-CONVERTING BOTTOM CTA */}
      <section className="bg-slate-900 border-t border-slate-800 py-16 sm:py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Evaluate Your Agency's AI Readiness
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Book an initial consultation to audit existing workflows, evaluate potential vendor implementations, and align your agency with NIST guidelines.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00D4FF] text-[#0B1E36] font-bold text-base rounded-md hover:bg-[#38bdf8] transition-all duration-200 shadow-md active:scale-95"
          >
            <span>Schedule Agency Consultation</span>
            <span className="ml-2 font-bold">→</span>
          </Link>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> Direct Command-Staff Discussion
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> Mutual Non-Disclosure Agreement
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> CJIS Area 5 Compliant
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}