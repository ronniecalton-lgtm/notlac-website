import React from 'react';

export default function LegalNotice() {
  return (
    <div className="bg-white min-h-screen py-24 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-lg prose-blue">
        <h1 className="text-4xl font-extrabold text-[#0B1E36] mb-8">Legal Notice</h1>
        <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold text-[#0B1E36] mt-8 mb-4">1. Company Information</h2>
        <p className="mb-4">Notlac, Inc. is a registered consulting corporation providing advisory services in AI governance, NIST compliance, and operational training for public safety agencies.</p>
        
        <h2 className="text-2xl font-bold text-[#0B1E36] mt-8 mb-4">2. No Legal Advice</h2>
        <p className="mb-4">The information provided on this website, during consultations, or through our services does not, and is not intended to, constitute legal advice. All information, content, and materials available are for general informational and strategic purposes only. Agencies should consult with their respective legal counsel for decisions regarding statutory mandates.</p>
        
        <h2 className="text-2xl font-bold text-[#0B1E36] mt-8 mb-4">3. Intellectual Property</h2>
        <p className="mb-4">All content on this website, including logos, text, graphics, and frameworks, is the property of Notlac, Inc. and is protected by intellectual property laws. Unauthorized use or reproduction is strictly prohibited.</p>
      </div>
    </div>
  );
}