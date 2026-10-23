import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Notlac | Public Safety AI Consulting',
  description: 'NIST Operational Training & Law-enforcement AI Consulting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white text-slate-900`}>
        {/* GLOBAL NAVIGATION BAR */}
        <nav className="w-full bg-[#0B1E36] border-b border-slate-700/60 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              {/* Brand Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center gap-2.5 group">
                  <div className="w-8 h-8 bg-[#00D4FF] rounded flex items-center justify-center transition-transform group-hover:scale-105">
                    <span className="text-[#0B1E36] font-black text-xl leading-none">N</span>
                  </div>
                  <span className="text-white font-extrabold text-2xl tracking-tight">
                    NOTLAC
                  </span>
                </Link>
              </div>

              {/* Desktop Route Links */}
              <div className="hidden md:flex space-x-8 items-center">
                <Link href="/" className="text-slate-200 hover:text-[#00D4FF] px-2 py-1 text-sm font-medium transition-colors">
                  Home
                </Link>
                <Link href="/expertise" className="text-slate-200 hover:text-[#00D4FF] px-2 py-1 text-sm font-medium transition-colors">
                  Our Expertise
                </Link>
                <Link href="/services" className="text-slate-200 hover:text-[#00D4FF] px-2 py-1 text-sm font-medium transition-colors">
                  Services
                </Link>
                <Link href="/resources" className="text-slate-200 hover:text-[#00D4FF] px-2 py-1 text-sm font-medium transition-colors">
                  Resources
                </Link>
              </div>

              {/* Desktop CTAs */}
              <div className="hidden md:flex items-center space-x-4">
                <Link 
                  href="/login" 
                  className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors border border-slate-700 hover:border-slate-500 rounded-md"
                >
                  Client Portal
                </Link>
                <Link 
                  href="/consultation" 
                  className="bg-[#00D4FF] text-[#0B1E36] px-4 py-2 rounded-md text-sm font-bold hover:bg-[#38bdf8] transition-all border border-cyan-300 active:scale-95 shadow-sm"
                >
                  Book Consultation
                </Link>
              </div>

              {/* Mobile Quick Action + Menu Toggle */}
              <div className="flex md:hidden items-center gap-3">
                <Link 
                  href="/consultation" 
                  className="bg-[#00D4FF] text-[#0B1E36] px-3 py-1.5 rounded text-xs font-bold"
                >
                  Consult
                </Link>
                <details className="relative group">
                  <summary className="list-none cursor-pointer p-2 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00D4FF] rounded">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  </summary>
                  <div className="absolute right-0 mt-3 w-56 bg-[#0B1E36] border border-slate-700 rounded-lg shadow-2xl py-3 px-4 flex flex-col gap-3 z-50">
                    <Link href="/" className="text-slate-200 hover:text-[#00D4FF] text-sm font-medium py-1">
                      Home
                    </Link>
                    <Link href="/expertise" className="text-slate-200 hover:text-[#00D4FF] text-sm font-medium py-1">
                      Our Expertise
                    </Link>
                    <Link href="/services" className="text-slate-200 hover:text-[#00D4FF] text-sm font-medium py-1">
                      Services
                    </Link>
                    <Link href="/resources" className="text-slate-200 hover:text-[#00D4FF] text-sm font-medium py-1">
                      Resources
                    </Link>
                    <div className="pt-2 border-t border-slate-700 flex flex-col gap-2">
                      <Link href="/login" className="text-slate-300 hover:text-white text-xs font-medium py-1">
                        Client Portal
                      </Link>
                      <Link href="/consultation" className="bg-[#00D4FF] text-[#0B1E36] text-center py-2 rounded text-xs font-bold">
                        Book Consultation
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </nav>

        {/* MAIN PAGE CONTENT */}
        <main className="flex-grow">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="bg-[#0B1E36] border-t border-slate-800 pt-16 pb-8 text-white mt-auto">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-2">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-[#00D4FF] rounded-sm flex items-center justify-center">
                    <span className="text-[#0B1E36] font-black text-sm">N</span>
                  </div>
                  <span className="text-white font-extrabold text-xl tracking-tight">
                    NOTLAC
                  </span>
                </Link>
                <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                  Premier consulting firm guiding public safety agencies through NIST-compliant AI implementation, governance, and operational training.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Solutions</h4>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  <li><Link href="/services#governance" className="hover:text-[#00D4FF] transition-colors">AI Policy & Governance</Link></li>
                  <li><Link href="/services#implementation" className="hover:text-[#00D4FF] transition-colors">Secure Implementation</Link></li>
                  <li><Link href="/services#training" className="hover:text-[#00D4FF] transition-colors">Operational Training</Link></li>
                  <li><Link href="/consultation" className="hover:text-[#00D4FF] transition-colors">NIST Audits</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Company</h4>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  <li><Link href="/expertise" className="hover:text-[#00D4FF] transition-colors">Our Expertise</Link></li>
                  <li><Link href="/resources" className="hover:text-[#00D4FF] transition-colors">Resources & Insights</Link></li>
                  <li><Link href="/consultation" className="hover:text-[#00D4FF] transition-colors">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            
            {/* SUB-FOOTER WITH LEGAL & ACCREDITATION LINKS */}
            <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4 text-slate-400 text-xs">
                <p>&copy; {new Date().getFullYear()} Notlac, LLC. All rights reserved.</p>
                <div className="hidden md:block w-1 h-1 bg-slate-600 rounded-full"></div>
                <div className="flex space-x-4">
                  <Link href="/legal" className="hover:text-[#00D4FF] transition-colors">Legal Notice</Link>
                  <Link href="/privacy" className="hover:text-[#00D4FF] transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-[#00D4FF] transition-colors">Terms of Service</Link>
                </div>
              </div>
              <p className="text-slate-400 text-xs font-medium">
                CJIS Policy Area 5 Aligned | NIST AI RMF 1.0 Compliant
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}