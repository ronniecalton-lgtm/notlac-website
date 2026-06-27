import React from 'react';

export default function ConsultationPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* HERO SECTION */}
      <section className="bg-[#0B1E36] py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Schedule a <span className="text-[#00D4FF]">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Connect with our team to discuss your agency's AI governance, secure implementation, or operational training needs.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 md:p-12">
          <form className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#0B1E36] mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 outline-none transition-colors"
                  placeholder="Officer John Doe"
                  required
                />
              </div>
              
              {/* Agency */}
              <div>
                <label htmlFor="agency" className="block text-sm font-bold text-[#0B1E36] mb-2">Agency / Department</label>
                <input 
                  type="text" 
                  id="agency" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 outline-none transition-colors"
                  placeholder="Metropolitan Police Dept."
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#0B1E36] mb-2">Official Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 outline-none transition-colors"
                  placeholder="j.doe@agency.gov"
                  required
                />
              </div>
              
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-[#0B1E36] mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Area of Interest */}
            <div>
              <label htmlFor="interest" className="block text-sm font-bold text-[#0B1E36] mb-2">Primary Area of Interest</label>
              <select 
                id="interest" 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 outline-none transition-colors bg-white text-gray-700"
              >
                <option value="governance">AI Policy & Governance</option>
                <option value="implementation">Secure Implementation & Audits</option>
                <option value="training">Operational Training</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-[#0B1E36] mb-2">Message or Operational Details</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 outline-none transition-colors resize-none"
                placeholder="Briefly describe your agency's current infrastructure or goals..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="button" 
                className="w-full bg-[#0B1E36] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#475569] transition-colors shadow-lg flex justify-center items-center gap-2"
              >
                Submit Inquiry
              </button>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting this form, you agree to our Privacy Policy. For immediate assistance regarding active deployments, please contact our dispatch directly.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}