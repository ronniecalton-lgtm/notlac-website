import React from 'react';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-[#0B1E36] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Operational <span className="text-[#00D4FF]">Frameworks</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Actionable intelligence, whitepapers, and NIST-aligned guides designed specifically for law enforcement and public safety leadership.
            </p>
          </div>
        </div>
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#00D4FF] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      </section>

      {/* FEATURED RESOURCE */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-[#0B1E36] p-10 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#00D4FF]"></div>
              <div className="text-[#00D4FF] text-sm font-bold tracking-widest uppercase mb-4">Featured Whitepaper</div>
              <h2 className="text-2xl font-bold text-white mb-4">The 2026 Guide to CJIS-Compliant Generative AI</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                A comprehensive breakdown of how modern large language models interact with Criminal Justice Information Services (CJIS) security policies, and the architectural safeguards required for deployment.
              </p>
            </div>
            <div className="lg:w-3/5 p-10 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-[#0B1E36] mb-4">What's Inside:</h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4FF] mt-1">✓</span>
                  Mapping the NIST AI RMF to law enforcement environments.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4FF] mt-1">✓</span>
                  Data sovereignty and cloud infrastructure requirements.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4FF] mt-1">✓</span>
                  Mitigating legal liability in AI-assisted report writing.
                </li>
              </ul>
              <div>
                <a 
                  href="/resources/Notlac_CJIS_Guide_2026.pdf" 
                  download="Notlac_CJIS_Guide_2026.pdf"
                  className="inline-block bg-[#0B1E36] text-white px-6 py-3 rounded-md font-bold hover:bg-[#475569] transition-colors shadow-md"
                >
                  Download PDF Framework
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCE GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0B1E36]">Latest Insights</h2>
              <p className="text-gray-500 mt-2">Tactical briefs on AI integration and agency policy.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <div className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 bg-gray-100 relative overflow-hidden flex items-center justify-center border-b border-gray-200">
                 <div className="text-[#475569] font-medium tracking-widest text-xs uppercase">Policy Brief</div>
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00D4FF] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs text-gray-400 mb-2">March 12, 2026</div>
                <h3 className="text-xl font-bold text-[#0B1E36] mb-3 group-hover:text-[#00D4FF] transition-colors">Drafting Your Agency's First AI Acceptable Use Policy</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  Why a boilerplate IT policy isn't enough to protect your agency from the legal liabilities of unvetted AI usage in the field.
                </p>
                <Link href="/consultation" className="text-[#0B1E36] font-bold text-sm hover:text-[#00D4FF] transition-colors mt-auto">Read Brief &rarr;</Link>
              </div>
            </div>

            {/* Article 2 */}
            <div className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 bg-gray-100 relative overflow-hidden flex items-center justify-center border-b border-gray-200">
                 <div className="text-[#475569] font-medium tracking-widest text-xs uppercase">Integration Guide</div>
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00D4FF] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs text-gray-400 mb-2">February 28, 2026</div>
                <h3 className="text-xl font-bold text-[#0B1E36] mb-3 group-hover:text-[#00D4FF] transition-colors">AI within CAD/RMS: Preventing Workflow Disruption</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  Best practices for deploying generative AI alongside legacy CAD and RMS systems without compromising the dispatch ecosystem.
                </p>
                <Link href="/consultation" className="text-[#0B1E36] font-bold text-sm hover:text-[#00D4FF] transition-colors mt-auto">Read Guide &rarr;</Link>
              </div>
            </div>

            {/* Article 3 */}
            <div className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 bg-gray-100 relative overflow-hidden flex items-center justify-center border-b border-gray-200">
                 <div className="text-[#475569] font-medium tracking-widest text-xs uppercase">Technical Audit</div>
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00D4FF] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs text-gray-400 mb-2">February 05, 2026</div>
                <h3 className="text-xl font-bold text-[#0B1E36] mb-3 group-hover:text-[#00D4FF] transition-colors">Mobile Video Analytics: The Hallucination Risk</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  An examination of how AI misinterpretations in body-worn camera summaries can compromise the evidentiary chain in active investigations.
                </p>
                <Link href="/consultation" className="text-[#0B1E36] font-bold text-sm hover:text-[#00D4FF] transition-colors mt-auto">Read Audit &rarr;</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0B1E36] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need tailored guidance?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Our frameworks are a starting point. Let us audit your agency's specific architecture and operational procedures to build a secure, customized AI roadmap.
          </p>
          <Link href="/consultation" className="inline-block bg-[#00D4FF] text-[#0B1E36] px-8 py-4 rounded-md font-bold hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(0,212,255,0.4)]">
            Request an Agency Audit
          </Link>
        </div>
      </section>
    </div>
  );
}