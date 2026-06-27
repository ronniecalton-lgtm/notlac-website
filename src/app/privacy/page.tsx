import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen py-24 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-lg prose-blue">
        <h1 className="text-4xl font-extrabold text-[#0B1E36] mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold text-[#0B1E36] mt-8 mb-4">1. Data Collection</h2>
        <p className="mb-4">We collect information that you provide directly to us, such as when you fill out a form, request a consultation, or communicate with us. This may include your name, agency, email address, and phone number.</p>
        
        <h2 className="text-2xl font-bold text-[#0B1E36] mt-8 mb-4">2. CJIS & Security Compliance</h2>
        <p className="mb-4">As a consultancy dealing with law enforcement, we treat data security with the highest priority. While this marketing website does not house CJIS data, any client engagements are governed by strict NDAs and secure data handling protocols.</p>
        
        <h2 className="text-2xl font-bold text-[#0B1E36] mt-8 mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to provide, maintain, and improve our consulting services, respond to your comments and questions, and communicate with you about industry updates and events.</p>
      </div>
    </div>
  );
}