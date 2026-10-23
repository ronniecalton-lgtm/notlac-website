import React from 'react';
import Link from 'next/link';

interface AgencyPortalProps {
  params: Promise<{
    agencySlug: string;
  }>;
}

export default async function AgencyDashboard({ params }: AgencyPortalProps) {
  const { agencySlug } = await params;
  const agencyName = agencySlug.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* HEADER BAR */}
      <header className="bg-[#0B1E36] text-white border-b border-slate-700 py-6 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <span className="text-xs uppercase font-bold text-[#00D4FF] tracking-wider block mb-1">
              Active Agency Tenant
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight">{agencyName}</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs text-slate-300 font-medium">CJIS Session Encrypted</span>
          </div>
        </div>
      </header>

      {/* DASHBOARD CONTENT */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Audit Status</h3>
            <p className="text-xl font-bold text-[#0B1E36]">NIST AI RMF 1.0 Assessment</p>
            <span className="inline-block mt-3 px-2.5 py-1 bg-cyan-50 text-[#0284C7] text-xs font-bold rounded">
              Phase 2: In Review
            </span>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Policy Deliverables</h3>
            <p className="text-xl font-bold text-[#0B1E36]">Generative AI Policy Draft</p>
            <span className="inline-block mt-3 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded">
              Ready for Command Sign-off
            </span>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Active Training</h3>
            <p className="text-xl font-bold text-[#0B1E36]">Operational Curricula</p>
            <span className="inline-block mt-3 px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded">
              Scheduled Q4
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-lg font-bold text-[#0B1E36] mb-4">Agency Documentation & Artifacts</h2>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Secure repository for agency-specific NIST evaluation matrices, risk mitigation logs, and implementation roadmaps.
          </p>
          <div className="flex gap-4">
            <Link
              href="/consultation"
              className="px-4 py-2 bg-[#0B1E36] hover:bg-slate-800 text-white rounded text-xs font-bold transition-colors"
            >
              Request Artifact Review
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
