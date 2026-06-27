import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Notlac, Inc. | Public Safety AI Consulting',
  description: 'NIST Operational Training & Law-enforcement AI Consulting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* GLOBAL NAVIGATION BAR */}
        <nav className="w-full bg-[#0B1E36] border-b border-[#475569]/30 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#00D4FF] rounded-sm flex items-center justify-center">
                    <span className="text-[#0B1E36] font-bold text-xl">N</span>
                  </div>
                  <span className="text-white font-extrabold text-2xl tracking-tight">
                    NOTLAC<span className="font-light text-gray-400 text-sm ml-1">Inc.</span>
                  </span>
                </Link>
              </div>
              
              <div className="hidden md:flex space-x-8 items-center">
                <Link href="/" className="text-gray-300 hover:text-[#00D4FF] px-3 py-2 text-sm font-medium transition-colors">Home</Link>
                <Link href="/expertise" className="text-gray-300 hover:text-[#00D4FF] px-3 py-2 text-sm font-medium transition-colors">Our Expertise</Link>
                <Link href="/services" className="text-gray-300 hover:text-[#00D4FF] px-3 py-2 text-sm font-medium transition-colors">Services</Link>
                <Link href="/resources" className="text-gray-300 hover:text-[#00D4FF] px-3 py-2 text-sm font-medium transition-colors">Resources</Link>
              </div>

              <div className="hidden md:flex items-center space-x-4">
                <Link href="/login" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors border border-transparent hover:border-gray-500 rounded-md">
                  Client Login
                </Link>
                <Link href="/consultation" className="bg-[#00D4FF] text-[#0B1E36] px-4 py-2 rounded-md text-sm font-bold hover:bg-cyan-300 transition-colors shadow-[0_0_10px_rgba(0,212,255,0.3)]">
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* MAIN PAGE CONTENT */}
        <main className="flex-grow">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="bg-[#0B1E36] border-t border-[#475569]/30 pt-16 pb-8 text-white mt-auto">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-2">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-[#00D4FF] rounded-sm flex items-center justify-center">
                    <span className="text-[#0B1E36] font-bold text-sm">N</span>
                  </div>
                  <span className="text-white font-extrabold text-xl tracking-tight">
                    NOTLAC<span className="font-light text-gray-400 text-xs ml-1">Inc.</span>
                  </span>
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  Premier consulting firm guiding public safety agencies through NIST-compliant AI implementation, governance, and operational training.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4 tracking-wide">Solutions</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/services#governance" className="hover:text-[#00D4FF] transition-colors">AI Policy & Governance</Link></li>
                  <li><Link href="/services#implementation" className="hover:text-[#00D4FF] transition-colors">Secure Implementation</Link></li>
                  <li><Link href="/services#training" className="hover:text-[#00D4FF] transition-colors">Operational Training</Link></li>
                  <li><Link href="/consultation" className="hover:text-[#00D4FF] transition-colors">NIST Audits</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4 tracking-wide">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/expertise" className="hover:text-[#00D4FF] transition-colors">Our Expertise</Link></li>
                  <li><Link href="/resources" className="hover:text-[#00D4FF] transition-colors">Resources & Insights</Link></li>
                  <li><Link href="/contact" className="hover:text-[#00D4FF] transition-colors">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            
            {/* SUB-FOOTER WITH LEGAL LINKS */}
            <div className="pt-8 border-t border-[#475569]/30 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4 text-gray-500 text-xs">
                <p>&copy; {new Date().getFullYear()} Notlac, Inc. All rights reserved.</p>
                <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="flex space-x-4">
                  <Link href="/legal" className="hover:text-[#00D4FF] transition-colors">Legal Notice</Link>
                  <Link href="/privacy" className="hover:text-[#00D4FF] transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-[#00D4FF] transition-colors">Terms of Service</Link>
                </div>
              </div>
              <p className="text-gray-500 text-xs">
                CJIS Compliant Architecture | NIST AI RMF Aligned
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}