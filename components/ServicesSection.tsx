
import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    { title: 'Accounting / Bookkeeping', icon: 'fa-book-open', desc: 'Highest quality of booking is our priority. Understand your business value with proper statements.' },
    { title: 'Tax Preparation', icon: 'fa-file-invoice-dollar', desc: 'Expertise you can trust to raise your standards. Accurate US tax filing with peace of mind assured.' },
    { title: 'Virtual CFO', icon: 'fa-user-tie', desc: 'Committed to your financial growth. Progress calls for an excellent CFO for your enterprise.' },
    { title: 'FBAR / FATCA Consultation', icon: 'fa-earth-americas', desc: 'Understand the intricate details of FBAR and FATCA compliance. We help you stay informed.' },
    { title: 'Payroll Services', icon: 'fa-users-gear', desc: 'Making payroll easy and straightforward. Pay your employees without the headache at affordable prices.' },
    { title: 'Sales Tax', icon: 'fa-calculator', desc: 'Navigating 45 states and thousands of local jurisdictions. Expert handling of complex taxation systems.' },
  ];

  return (
    <div className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Our Expertise</div>
          <h2 className="text-5xl font-black text-slate-900 leading-tight">
            Quality You Can <span className="text-blue-600">Trust</span>
          </h2>
          <p className="text-lg text-slate-500 mt-6 font-medium max-w-2xl mx-auto">
            Finest service with advanced technology and skills catering to your Accounting, Tax, and CFO needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[32px] border border-slate-100 hover:shadow-2xl hover:border-blue-100 transition-all group cursor-pointer hover:-translate-y-2 duration-500">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-500">
                <i className={`fa-solid ${service.icon} text-2xl text-slate-400 group-hover:text-white`}></i>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
