
import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    { title: 'Accounting Outsourcing', icon: 'fa-briefcase', desc: 'End-to-end management of your books, from day-to-day entries to year-end closing.' },
    { title: 'Accounts Payable', icon: 'fa-file-invoice-dollar', desc: 'Timely vendor payments and invoice processing to optimize your cash flow.' },
    { title: 'Accounts Receivable', icon: 'fa-hand-holding-dollar', desc: 'Efficient collection strategies to reduce DSO and improve liquidity.' },
    { title: 'Hire Virtual Accountant', icon: 'fa-user-tie', desc: 'Dedicated professional resources working as an extension of your in-house team.' },
    { title: 'Financial Reporting', icon: 'fa-chart-pie', desc: 'Accurate, insightful dashboards and statements for data-driven decisions.' },
    { title: 'Payroll Outsourcing', icon: 'fa-users', desc: 'Hassle-free payroll processing with 100% compliance with local laws.' },
    { title: 'Budgeting & Forecasting', icon: 'fa-bullseye', desc: 'Strategic planning tools to navigate your business toward growth.' },
    { title: 'Project Accounting', icon: 'fa-diagram-project', desc: 'Granular tracking of project-specific revenues and expenses.' },
    { title: 'Catch-Up Bookkeeping', icon: 'fa-clock-rotate-left', desc: 'Cleaning up backlogged records to bring your finances up to speed.' },
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Service Ecosystem</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          From startups to established enterprises, we provide modular services tailored to your specific financial complexity.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <i className={`fa-solid ${service.icon} text-2xl text-blue-600 group-hover:text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href="#" className="text-blue-600 text-xs font-bold uppercase tracking-widest hover:underline">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
