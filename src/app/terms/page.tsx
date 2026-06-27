import React from 'react';

export default function TermsOfService() {
  return (
    <div className="bg-white min-h-screen py-24 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-lg prose-blue">
        <h1 className="text-4xl font-extrabold text-[#0B1E36] mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold text-[#0B1E36] mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">By accessing or using the Notlac, Inc. website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
        
        <h2 className="text-2xl font-bold text-[#0B1E36] mt-8 mb-4">2. Consulting Engagements</h2>
        <p className="mb-4">Specific consulting engagements will be governed by a separate Master Services Agreement (MSA) and Statement of Work (SOW). In the event of a conflict between these Terms and an MSA, the MSA shall prevail.</p>
        
        <h2 className="text-2xl font-bold text-[#0B1E36] mt-8 mb-4">3. Limitation of Liability</h2>
        <p className="mb-4">Notlac, Inc. shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of our strategic frameworks.</p>
      </div>
    </div>
  );
}