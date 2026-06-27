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
      <body className={inter.className}>
        {/* GLOBAL NAVIGATION BAR */}
        <nav className="w-full bg-[#0B1E36] border-b border-[#475569]/30 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              {/* Logo Area */}
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
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8 items-center">
                <Link href="/" className="text-gray-300 hover:text-[#00D4FF] px-3 py-2 text-sm font-medium transition-colors">Home</Link>
                <Link href="/expertise" className="text-gray-300 hover:text-[#00D4FF] px-3 py-2 text-sm font-medium transition-colors">Our Expertise</Link>
                <Link href="/services" className="text-gray-300 hover:text-[#00D4FF] px-3 py-2 text-sm font-medium transition-colors">Services</Link>
                <Link href="/resources" className="text-gray-300 hover:text-[#00D4FF] px-3 py-2 text-sm font-medium transition-colors">Resources</Link>
              </div>

              {/* CTA Buttons */}
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

        {children}
      </body>
    </html>
  );
}