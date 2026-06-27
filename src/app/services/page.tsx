import React from 'react';

export const metadata = {
  title: 'Services | Notlac, Inc.',
  description: 'Bridging the gap between high-level NIST AI compliance and operational reality for public safety agencies.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-[#475569]">
      {/* Hero Section */}
      <section className="bg-[#0B1E36] px-6 py-24 text-center text-white sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Operational AI, <span className="text-[#00D4FF]">Secured & Deployed.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 sm:text-xl">
            We bridge the critical gap between high-level NIST AI compliance and the actual operational reality of the frontline. Built on over a decade of hands-on criminal justice and mission-critical software experience.
          </p>
        </div>
      </section>

      {/* Core Offerings Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          
          {/* Offering 1: AI Policy & Governance */}
          <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#0B1E36]">
              <svg className="h-8 w-8 text-[#00D4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[#0B1E36]">AI Policy & Governance</h3>
            <p className="flex-grow text-[#475569] leading-relaxed">
              Mitigate legal risk and establish definitive guardrails before deployment. We develop strict, actionable AI policies tailored for law enforcement, ensuring your agency utilizes emerging tech without compromising evidentiary integrity or public trust.
            </p>
          </div>

          {/* Offering 2: Secure Implementation */}
          <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#0B1E36]">
              <svg className="h-8 w-8 text-[#00D4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[#0B1E36]">Secure Implementation</h3>
            <p className="flex-grow text-[#475569] leading-relaxed">
              Deploy with confidence. We oversee the technical rollout of AI systems to ensure rigid adherence to CJIS security policies and local/federal mandates. We integrate modern intelligence tools into legacy workflows seamlessly and securely.
            </p>
          </div>

          {/* Offering 3: Operational Training */}
          <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#0B1E36]">
              <svg className="h-8 w-8 text-[#00D4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[#0B1E36]">Operational Training</h3>
            <p className="flex-grow text-[#475569] leading-relaxed">
              Mission-critical software is only as effective as the frontline personnel using it. We provide targeted, scenario-based training designed for end-users—drastically reducing onboarding friction and driving operational adoption from day one.
            </p>
          </div>

        </div>
      </section>

      {/* The Notlac Advantage Section */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-12">
          <h2 className="mb-6 text-3xl font-bold text-[#0B1E36]">Experience That Dictates Execution</h2>
          <p className="text-lg text-[#475569] leading-relaxed">
            Our frameworks aren't built in a vacuum. Notlac, Inc. leverages 7 years of frontline criminal justice experience—from dispatch to investigations—combined with 4 years of enterprise software onboarding for industry-leading platforms. We know what works in the field because we've been in the field.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0B1E36] py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 text-3xl font-bold text-white">Ready to secure your agency's technological future?</h2>
          <p className="mb-8 text-gray-300">Contact us to discuss your compliance and implementation needs.</p>
          <a
            href="/contact"
            className="inline-block rounded-md bg-[#00D4FF] px-8 py-4 text-sm font-bold text-[#0B1E36] shadow-md transition-colors hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:ring-offset-2 focus:ring-offset-[#0B1E36]"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}