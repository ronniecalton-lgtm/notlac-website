import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Services | Notlac Public Safety AI Consulting',
  description: 'Bridging the gap between high-level NIST AI compliance and operational reality for public safety agencies.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700">
      {/* 1. HERO SECTION */}
      <section className="bg-[#0B1E36] px-6 py-20 sm:py-24 text-center text-white sm:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#00D4FF] rounded-full opacity-10 blur-[120px] pointer-events-none"></div>
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-[#00D4FF] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] mr-2.5 animate-pulse"></span>
            Operational Solutions
          </div>
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Operational AI, <span className="text-[#00D4FF]">Secured & Deployed.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We bridge the critical gap between high-level NIST AI compliance and the operational realities of the frontline. Built on over a decade of hands-on criminal justice experience and enterprise public safety software onboarding.
          </p>
        </div>
      </section>

      {/* 2. CORE OFFERINGS GRID */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 sm:px-12 lg:px-24 -mt-10 relative z-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Offering 1: AI Policy & Governance */}
          <div id="governance" className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#0B1E36] text-[#00D4FF]">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[#0B1E36]">AI Policy & Governance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Mitigate legal risk and establish definitive guardrails before deployment. We develop strict, actionable AI policies tailored for law enforcement, ensuring your agency utilizes emerging technology without compromising evidentiary integrity, Brady disclosure compliance, or public trust.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded">NIST Govern / Map</span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded">Evidentiary Safeguards</span>
              </div>
              <Link 
                href="/consultation?service=governance" 
                className="text-[#0284C7] font-semibold text-sm hover:text-[#0B1E36] inline-flex items-center gap-1.5 group transition-colors pt-3 border-t border-slate-100 w-full"
              >
                <span>Request Governance Audit</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Offering 2: Secure Implementation */}
          <div id="implementation" className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#0B1E36] text-[#00D4FF]">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[#0B1E36]">Secure Implementation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Deploy with operational certainty. We oversee the technical rollout of AI systems to ensure rigid adherence to CJIS Security Policy Area 5 and federal data security mandates. We integrate modern intelligence tools into legacy CAD/RMS environments without downtime or process disruption.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded">CJIS Area 5 Compliance</span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded">CAD/RMS Integration</span>
              </div>
              <Link 
                href="/consultation?service=implementation" 
                className="text-[#0284C7] font-semibold text-sm hover:text-[#0B1E36] inline-flex items-center gap-1.5 group transition-colors pt-3 border-t border-slate-100 w-full"
              >
                <span>Review Implementation Plan</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Offering 3: Operational Training */}
          <div id="training" className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#0B1E36] text-[#00D4FF]">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[#0B1E36]">Operational Training</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Mission-critical software is only as effective as the frontline personnel using it. We deliver role-specific, scenario-based training curricula designed for dispatchers, detectives, and command staff—drastically reducing onboarding friction and preventing misuse from day one.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded">Role-Based Enablement</span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded">Hands-on Scenarios</span>
              </div>
              <Link 
                href="/consultation?service=training" 
                className="text-[#0284C7] font-semibold text-sm hover:text-[#0B1E36] inline-flex items-center gap-1.5 group transition-colors pt-3 border-t border-slate-100 w-full"
              >
                <span>Schedule Agency Training</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE NOTLAC ADVANTAGE SECTION */}
      <section className="bg-white py-20 border-y border-slate-200">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-12">
          <div className="inline-block text-[#0284C7] text-xs font-bold tracking-widest uppercase mb-3">
            Practical Execution
          </div>
          <h2 className="mb-6 text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight">
            Experience That Dictates Execution
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Our frameworks aren't built in an academic vacuum. Notlac, LLC leverages 7 years of frontline criminal justice experience—from 911 dispatch consoles to state investigative task forces—combined with 4 years of enterprise software onboarding for industry-leading public safety platforms. We design deployments that work in the field because we've operated in the field.
          </p>
        </div>
      </section>

      {/* 4. HIGH-CONVERTING BOTTOM CTA */}
      <section className="bg-[#0B1E36] py-16 sm:py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to secure your agency's technological future?
          </h2>
          <p className="mb-8 text-slate-300 text-base sm:text-lg">
            Schedule an executive briefing to evaluate compliance, assess vendor solutions, and protect operational workflows.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-md bg-[#00D4FF] px-8 py-4 text-base font-bold text-[#0B1E36] shadow-md transition-all hover:bg-[#38bdf8] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:ring-offset-2 focus:ring-offset-[#0B1E36]"
          >
            <span>Schedule Agency Consultation</span>
            <span className="ml-2 font-bold">→</span>
          </Link>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> Command-Staff Consultation
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> Mutual NDA Protected
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