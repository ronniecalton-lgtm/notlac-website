'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    agency: '',
    email: '',
    phone: '',
    interest: 'governance',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleInterestSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API dispatch / intake processing
    setTimeout(() => {
      setStatus('submitted');
    }, 1200);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-900">
      {/* 1. HEADER SECTION */}
      <section className="bg-[#0B1E36] py-20 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#00D4FF] rounded-full opacity-10 blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-[#00D4FF] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] mr-2.5 animate-pulse"></span>
            Direct Agency Intake
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            Schedule an <span className="text-[#00D4FF]">Executive Briefing</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Connect directly with our team to evaluate your agency's AI governance, CJIS compliance posture, or mission-critical onboarding requirements.
          </p>
        </div>
      </section>

      {/* 2. FORM CONTAINER */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-12">
          
          {status === 'submitted' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] mb-3">
                Inquiry Received
              </h2>
              <p className="text-slate-600 max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                Thank you, {formData.name}. Your operational details have been routed directly to our team. An advisor will contact you within 24 business hours.
              </p>
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link
                  href="/"
                  className="px-6 py-3 bg-[#0B1E36] text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Return to Homepage
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setFormData({
                      name: '',
                      agency: '',
                      email: '',
                      phone: '',
                      interest: 'governance',
                      message: '',
                    });
                    setStatus('idle');
                  }}
                  className="px-6 py-3 bg-slate-100 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-200 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#0B1E36] mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Chief John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white placeholder-slate-400 focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 outline-none transition-all text-sm font-medium" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="agency" className="block text-xs font-bold uppercase tracking-wider text-[#0B1E36] mb-2">
                    Agency / Department <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="agency" 
                    name="agency" 
                    value={formData.agency}
                    onChange={handleChange}
                    placeholder="County Sheriff's Office / Police Dept"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white placeholder-slate-400 focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 outline-none transition-all text-sm font-medium" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#0B1E36] mb-2">
                    Official Government Email <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jdoe@agency.gov"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white placeholder-slate-400 focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 outline-none transition-all text-sm font-medium" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#0B1E36] mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 012-3456"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white placeholder-slate-400 focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 outline-none transition-all text-sm font-medium" 
                  />
                </div>
              </div>

              {/* PRACTICE AREA SEGMENTATION PILLS */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1E36] mb-2.5">
                  Primary Engagement Scope
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'governance', label: 'AI Policy & NIST Audits' },
                    { id: 'implementation', label: 'CAD/RMS Secure Deployment' },
                    { id: 'training', label: 'Operational User Training' },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleInterestSelect(option.id)}
                      className={`py-3 px-4 rounded-lg text-xs font-bold border transition-all text-left flex items-center justify-between ${
                        formData.interest === option.id
                          ? 'border-[#00D4FF] bg-cyan-50/50 text-[#0B1E36] shadow-sm ring-1 ring-[#00D4FF]'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span>{option.label}</span>
                      {formData.interest === option.id && (
                        <span className="w-2 h-2 rounded-full bg-[#00D4FF]"></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#0B1E36] mb-2">
                  Operational Details & Timeline <span className="text-rose-500">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline your agency's current CAD/RMS environment, active vendor evaluations, or training schedule goals..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white placeholder-slate-400 focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 outline-none transition-all text-sm font-medium resize-none" 
                  required
                ></textarea>
              </div>

              {/* ACTION TRIGGER & TRUST BADGING */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-[#0B1E36] hover:bg-slate-800 disabled:bg-slate-700 text-white font-bold text-base py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-3 shadow-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] active:scale-[0.99]"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#00D4FF] border-t-transparent rounded-full animate-spin"></div>
                      <span>Encrypting & Routing Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Agency Briefing Request</span>
                      <span className="text-[#00D4FF] font-bold">→</span>
                    </>
                  )}
                </button>
                
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Mutual NDA Protected</span>
                  </div>
                  <span className="hidden sm:inline text-slate-300">•</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>CJIS Area 5 Standards</span>
                  </div>
                  <span className="hidden sm:inline text-slate-300">•</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Direct Response within 24h</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 text-center pt-2">
                All inquiries are encrypted in transit. For immediate operational escalations, reach us directly at <span className="text-slate-600 font-medium">contact@notlac.com</span>.
              </p>
            </form>
          )}

        </div>
      </section>
    </div>
  );
}