
import React from 'react';

const WhoWeServe: React.FC = () => {
  const segments = [
    { title: 'Start-Ups', desc: 'Establishing and streamlining financial processes for entrepreneurs that are starting out.', icon: 'fa-rocket' },
    { title: 'Growing Businesses', desc: 'Providing tailored accounting solutions to optimize growth by giving insights into finances.', icon: 'fa-arrow-trend-up' },
    { title: 'Established Enterprises', desc: 'Advanced remote accounting services to streamline processes for seamless efficiency.', icon: 'fa-building' },
  ];

  const industries = ['Ecommerce', 'Healthcare', 'Hospitality', 'Legal', 'Media & Marketing', 'Real Estate'];

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Who We Serve?</h2>
          <p className="text-slate-600">Empowering businesses of all sizes to thrive.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {segments.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl mb-8">
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-500 mb-8">{s.desc}</p>
              <button className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-800 transition-colors">
                View Pricing
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100">
          <h3 className="text-center text-xl font-bold text-slate-400 uppercase tracking-widest mb-12">Expertise Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((ind, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="w-12 h-12 mx-auto bg-slate-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i className="fa-solid fa-industry text-slate-400 group-hover:text-white"></i>
                </div>
                <div className="text-sm font-bold text-slate-700">{ind}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
