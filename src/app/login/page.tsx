'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorNotice(null);

    setTimeout(() => {
      setIsLoading(false);
      setErrorNotice(
        'Account not provisioned for active portal session. Credentials must be authorized by your Notlac engagement lead.'
      );
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-900">
      {/* HEADER SECTION */}
      <section className="bg-[#0B1E36] py-16 sm:py-20 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#00D4FF] rounded-full opacity-10 blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-[#00D4FF] text-xs font-semibold tracking-wide uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] mr-2.5 animate-pulse"></span>
            Agency Portal
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            Client <span className="text-[#00D4FF]">Login</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto font-normal">
            Secure command-level access for active audits, policy artifacts, and deployment deliverables.
          </p>
        </div>
      </section>

      {/* LOGIN CARD */}
      <section className="max-w-md mx-auto px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-10">
          
          {errorNotice && (
            <div className="mb-6 bg-rose-50 border border-rose-200 rounded-lg p-4 text-xs text-rose-800 leading-relaxed flex items-start gap-2.5">
              <span className="text-rose-500 font-bold">✕</span>
              <span>{errorNotice}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#0B1E36] mb-2">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 outline-none transition-all text-sm font-medium"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-[#0B1E36]">
                  Password <span className="text-rose-500">*</span>
                </label>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 outline-none transition-all text-sm font-medium"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#0B1E36] hover:bg-slate-800 disabled:bg-slate-700 text-white font-bold text-sm py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-3 shadow-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] active:scale-[0.99]"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#00D4FF] border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In</span>
                    <span className="text-[#00D4FF] font-bold">→</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* ONBOARDING LINK */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500 mb-2">
              Need account access or credentials?
            </p>
            <Link
              href="/consultation"
              className="text-xs font-bold text-[#0284C7] hover:text-[#0B1E36] inline-flex items-center gap-1 transition-colors"
            >
              <span>Contact Engagement Lead</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}