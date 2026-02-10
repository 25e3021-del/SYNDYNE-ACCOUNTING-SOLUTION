
import React from 'react';

const WhoWeServe: React.FC = () => {
  const segments = [
    { title: 'SMEs & Startups', desc: 'Reliable back-office support that allows founders to focus on product-market fit and scaling.', icon: 'fa-rocket' },
    { title: 'Accounting Firms', desc: 'White-label partnerships for CPAs and CAs looking to expand their capacity with offshore expertise.', icon: 'fa-handshake' },
    { title: 'Established Corporates', desc: 'Advanced MIS and project accounting to streamline large-scale financial operations.', icon: 'fa-building-columns' },
  ];

  const industries = ['E-commerce', 'Real Estate', 'Logistics', 'Healthcare', 'Legal Firms', 'Retail'];

  return (
    <div className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Client Focus</div>
          <h2 className="text-5xl font-black text-slate-900">Who We <span className="text-blue-600">Empower</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {segments.map((s, i) => (
            <div key={i} className="relative p-12 bg-slate-50 rounded-[40px] border border-slate-100 group hover:bg-slate-900 transition-colors duration-500">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl mb-8 shadow-xl group-hover:scale-110 transition-transform">
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <h3 className="text-2xl font-black text-slate-900 group-hover:text-white mb-6 transition-colors">{s.title}</h3>
              <p className="text-slate-500 group-hover:text-slate-400 mb-8 font-medium transition-colors">{s.desc}</p>
              <button className="text-blue-600 font-black uppercase tracking-widest text-[10px] group-hover:text-white transition-colors">
                Partner with us →
              </button>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[50px] p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <h3 className="text-white text-xs font-black uppercase tracking-[0.6em] mb-12">Industry Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
            {industries.map((ind, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                  <i className="fa-solid fa-check text-[10px]"></i>
                </div>
                <div className="text-white/60 font-bold text-xs uppercase tracking-widest group-hover:text-white transition-colors">{ind}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
