'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Deliverable {
  id: string;
  title: string;
  category: string;
  version: string;
  updated: string;
  status: string;
  badgeClass: string;
}

interface AgencyPortalViewProps {
  agencySlug: string;
  formattedAgency: string;
  deliverables: Deliverable[];
}

export default function AgencyPortalView({
  agencySlug,
  formattedAgency,
  deliverables,
}: AgencyPortalViewProps) {
  const router = useRouter();

  const handleSignOut = () => {
    document.cookie = 'notlac_session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    router.replace('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* 1. SECURE HEADER */}
      <header className="bg-[#0B1E36] text-white border-b border-slate-700 py-6 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-[11px] uppercase font-bold text-[#00D4FF] tracking-wider">
                Authorized Tenant Session
              </span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight">{formattedAgency}</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-300 font-mono bg-slate-800 px-3 py-1.5 rounded border border-slate-700">
              Tenant: {agencySlug}
            </span>
            <button
              onClick={handleSignOut}
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* 2. DASHBOARD BODY */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-10 space-y-10">
        {/* NIST AUDIT STATUS CARDS */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              NIST AI Risk Management Framework Status
            </h2>
            <span className="text-xs font-semibold text-[#0284C7]">Audit Cycle: 2026-Q4</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-slate-400 uppercase">1. Govern</span>
              <p className="text-lg font-bold text-[#0B1E36] mt-1">100% Complete</p>
              <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-emerald-500 h-full w-full"></div>
              </div>
              <span className="text-[11px] text-slate-500 mt-2 block">Command policies adopted</span>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-slate-400 uppercase">2. Map</span>
              <p className="text-lg font-bold text-[#0B1E36] mt-1">85% Complete</p>
              <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-[#00D4FF] h-full w-[85%]"></div>
              </div>
              <span className="text-[11px] text-slate-500 mt-2 block">CAD/RMS integrations mapped</span>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-slate-400 uppercase">3. Measure</span>
              <p className="text-lg font-bold text-[#0B1E36] mt-1">60% Complete</p>
              <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-[#0284C7] h-full w-[60%]"></div>
              </div>
              <span className="text-[11px] text-slate-500 mt-2 block">Testing model safeguards</span>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-slate-400 uppercase">4. Manage</span>
              <p className="text-lg font-bold text-[#0B1E36] mt-1">In Progress</p>
              <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-amber-400 h-full w-[40%]"></div>
              </div>
              <span className="text-[11px] text-slate-500 mt-2 block">Incident escalation paths</span>
            </div>
          </div>
        </section>

        {/* ACTIVE DELIVERABLES TABLE */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
              <h2 className="text-base font-bold text-[#0B1E36]">Active Agency Artifacts & Deliverables</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Versioned documentation, SOPs, and compliance matrices under active consultation.
              </p>
            </div>
            <Link
              href="/consultation?topic=deliverable-inquiry"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0B1E36] hover:bg-slate-800 text-white text-xs font-bold transition-all"
            >
              <span>Request Revisions</span>
              <span className="text-[#00D4FF]">→</span>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/75 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-6">Artifact ID</th>
                  <th className="py-3 px-6">Deliverable Name</th>
                  <th className="py-3 px-6">Category</th>
                  <th className="py-3 px-6">Version</th>
                  <th className="py-3 px-6">Updated</th>
                  <th className="py-3 px-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs text-slate-800">
                {deliverables.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-mono font-medium text-slate-500">{item.id}</td>
                    <td className="py-4 px-6 font-bold text-[#0B1E36]">{item.title}</td>
                    <td className="py-4 px-6 text-slate-600">{item.category}</td>
                    <td className="py-4 px-6 font-mono text-slate-600">{item.version}</td>
                    <td className="py-4 px-6 text-slate-500">{item.updated}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-block px-2.5 py-1 rounded text-[11px] font-bold border ${item.badgeClass}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CJIS AREA 5 ATTESTATION BAR */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded bg-cyan-50 border border-cyan-100 text-[#0284C7] font-bold">
              CJIS
            </span>
            <div>
              <p className="font-bold text-[#0B1E36]">Data Custody & Security Policy Area 5 Compliance</p>
              <p className="text-slate-500">
                Session validated via FIPS 140-3 boundary controls. All document views and export actions are logged.
              </p>
            </div>
          </div>
          <span className="text-slate-400 font-mono text-[11px] whitespace-nowrap">
            Audit Hash: 8f4c...3e1a
          </span>
        </section>
      </main>
    </div>
  );
}
