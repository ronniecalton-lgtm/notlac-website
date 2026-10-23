'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agencyCode, setAgencyCode] = useState('');
  const [authMethod, setAuthMethod] = useState<'password' | 'passkey'>('password');
  const [isLoading, setIsLoading] = useState(false);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorNotice(null);

    setTimeout(() => {
      setIsLoading(false);
      setErrorNotice(
        'Agency domain not provisioned for active portal session. Multi-factor credentials must be provisioned by your Notlac implementation lead.'
      );
    }, 1200);
  };

  const handlePasskeyAuth = () => {
    setIsLoading(true);
    setErrorNotice(null);

    setTimeout(() => {
      setIsLoading(false);
      setErrorNotice(
        'No hardware security key (FIDO2 / WebAuthn) registered for this agency identifier. Please initialize via your deployment manager.'
      );
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-900">
      {/* 1. HEADER SECTION */}
      <section className="bg-[#0B1E36] py-16 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#00D4FF] rounded-full opacity-10 blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-[#00D4FF] text-xs font-semibold tracking-wide uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] mr-2.5 animate-pulse"></span>
            Restricted Agency Environment
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            Client <span className="text-[#00D4FF]">Portal</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto font-normal">
            Secure command-level access for active audits, policy artifacts, and deployment deliverables.
          </p>
        </div>
      </section>

      {/* 2. AUTHENTICATION CONTAINER */}
      <section className="max-w-xl mx-auto px-6 lg:px-8 -mt-8 relative z-20">
        <div className="mb-4 bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 text-xs text-amber-900 flex items-start gap-3">
          <span className="text-amber-600 font-bold text-base leading-none">⚠</span>
          <div className="leading-relaxed">
            <span className="font-bold uppercase tracking-wider">Authorized Use Only:</span> This system is restricted exclusively to authorized agency personnel. All sessions, queries, and cryptographic handshakes are logged in adherence with CJIS Security Policy Area 5 standards.
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-10">
          <div className="flex border-b border-slate-200 mb-6 pb-2">
            <button
              type="button"
              onClick={() => setAuthMethod('password')}
              className={`pb-2 text-xs font-bold uppercase tracking-wider mr-6 transition-colors border-b-2 -mb-2.5 ${
                authMethod === 'password'
                  ? 'border-[#00D4FF] text-[#0B1E36]'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Enterprise Credentials
            </button>
            <button
              type="button"
              onClick={() => setAuthMethod('passkey')}
              className={`pb-2 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 -mb-2.5 flex items-center gap-1.5 ${
                authMethod === 'passkey'
                  ? 'border-[#00D4FF] text-[#0B1E36]'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              <span>FIDO2 / Passkey</span>
              <span className="px-1.5 py-0.5 rounded bg-cyan-100 text-[#0284C7] text-[10px] font-black">MFA</span>
            </button>
          </div>

          {errorNotice && (
            <div className="mb-6 bg-rose-50 border border-rose-200 rounded-lg p-4 text-xs text-rose-800 leading-relaxed flex items-start gap-2.5">
              <span className="text-rose-500 font-bold">✕</span>
              <span>{errorNotice}</span>
            </div>
          )}

          {authMethod === 'password' ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="agencyCode" className="block text-xs font-bold uppercase tracking-wider text-[#0B1E36] mb-2">
                  Agency Identifier / ORI <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="agencyCode"
                  value={agencyCode}
                  onChange={(e) => setAgencyCode(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 outline-none transition-all text-sm font-medium uppercase tracking-wide"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#0B1E36] mb-2">
                  Authorized Government Email <span className="text-rose-500">*</span>
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
                  <span className="text-[11px] text-slate-400">CJIS Multi-Character Policy Enforced</span>
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
                      <span>Verifying Security Clearance...</span>
                    </>
                  ) : (
                    <>
                      <span>Authenticate Session</span>
                      <span className="text-[#00D4FF] font-bold">→</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6 text-center py-4">
              <div className="w-14 h-14 bg-cyan-50 border border-cyan-200 text-[#0284C7] rounded-full flex items-center justify-center mx-auto">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0B1E36] mb-1">Hardware Security Key / Biometric</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Authenticate using FIDO2 WebAuthn, Touch ID, or agency security keys for zero-trust compliance.
                </p>
              </div>

              <button
                type="button"
                onClick={handlePasskeyAuth}
                disabled={isLoading}
                className="w-full bg-[#00D4FF] hover:bg-[#38bdf8] text-[#0B1E36] font-bold text-sm py-3.5 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm border border-cyan-300 active:scale-[0.99]"
              >
                {isLoading ? (
                  <span>Awaiting Key Signature...</span>
                ) : (
                  <span>Verify with Security Key</span>
                )}
              </button>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500 mb-2">
              Unprovisioned agency or forgotten credentials?
            </p>
            <Link
              href="/consultation"
              className="text-xs font-bold text-[#0284C7] hover:text-[#0B1E36] inline-flex items-center gap-1 transition-colors"
            >
              <span>Request Agency Access Onboarding</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold">✓</span>
            <span>TLS 1.3 / AES-256 Encrypted</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold">✓</span>
            <span>CJIS Area 5 MFA Standard</span>
          </div>
        </div>
      </section>
    </div>
  );
}