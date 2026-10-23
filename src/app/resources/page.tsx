import React from 'react';
import Link from 'next/link';

export default function ResourcesPage() {
  const frameworks = [
    {
      badge: 'NIST AI RMF 1.0',
      title: 'Operationalizing NIST AI RMF in Real-Time Operations',
      description:
        'A comprehensive evaluation framework tailored for agency leadership assessing generative AI, automated dispatch transcription, and investigative analytics.',
      deliverables: ['Risk Profile Worksheets', 'Govern & Map Checklists', 'Human-in-the-Loop Safeguards'],
      ctaText: 'Request Framework Briefing',
      href: '/consultation?topic=nist-ai-rmf',
    },
    {
      badge: 'CJIS Security Policy Area 5',
      title: 'Cloud Architecture & Cryptographic Isolation Guide',
      description:
        'Technical implementation standards for multi-factor authentication, tenant boundary encryption, and audit logging when integrating AI tools into CJI pipelines.',
      deliverables: ['FIPS 140-3 Encryption Audit', 'Access Control Topology', 'Chain-of-Custody Logging'],
      ctaText: 'Access Compliance Review',
      href: '/consultation?topic=cjis-compliance',
    },
    {
      badge: 'Procurement Strategy',
      title: 'Agency AI Vendor Due-Diligence Matrix',
      description:
        'Crucial procurement benchmarks and RFP vetting questions to verify vendor data segregation, fine-tuning privacy, and statutory compliance before deployment.',
      deliverables: ['Contractual IP Protections', 'Vendor SLA Requirements', 'Model Training Boundaries'],
      ctaText: 'Download Assessment Matrix',
      href: '/consultation?topic=procurement-matrix',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-900">
      {/* 1. HERO HEADER */}
      <section className="bg-[#0B1E36] py-16 sm:py-20 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#00D4FF] rounded-full opacity-10 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-[#00D4FF] text-xs font-semibold tracking-wide uppercase mb-5">
            Operational Documentation & Insights
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            Standards-Backed <span className="text-[#00D4FF]">Agency Intelligence</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Actionable governance matrices, CJIS compliance checklists, and RFP evaluation frameworks engineered specifically for public safety leaders.
          </p>
        </div>
      </section>

      {/* 2. RESOURCE CARDS GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {frameworks.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl flex flex-col justify-between hover:border-[#00D4FF]/60 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7] bg-cyan-50 px-2.5 py-1 rounded border border-cyan-100">
                    {item.badge}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
                <h2 className="text-xl font-bold text-[#0B1E36] mb-3 leading-snug">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                <div className="mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Included Components
                  </span>
                  <ul className="space-y-2">
                    {item.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="text-xs text-slate-700 flex items-center gap-2">
                        <span className="text-[#00D4FF] font-bold">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <Link
                  href={item.href}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-[#0B1E36] hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm active:scale-[0.99]"
                >
                  <span>{item.ctaText}</span>
                  <span className="text-[#00D4FF]">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 3. EXECUTIVE AUDIT CALLOUT */}
        <div className="mt-12 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-lg font-bold text-[#0B1E36] mb-2">
              Preparing for a State or Federal Compliance Audit?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Schedule an executive gap analysis. We examine your agency's CAD/RMS, automated logging, and video ingestion systems against active FBI CJIS and NIST risk control standards.
            </p>
          </div>
          <Link
            href="/consultation"
            className="whitespace-nowrap px-6 py-3.5 rounded-lg bg-[#00D4FF] hover:bg-[#38bdf8] text-[#0B1E36] text-xs font-bold transition-all shadow-md active:scale-[0.99]"
          >
            Schedule Intake Briefing
          </Link>
        </div>
      </section>
    </div>
  );
}
