
import React from 'react';

const TechStack: React.FC = () => {
  const partners = [
    { name: 'QuickBooks', logo: 'fa-cube' },
    { name: 'Xero', logo: 'fa-circle-notch' },
    { name: 'Zoho Books', logo: 'fa-square-check' },
    { name: 'Tally', logo: 'fa-database' },
    { name: 'MS Dynamics', logo: 'fa-windows' },
    { name: 'Sage', icon: 'fa-leaf' }
  ];

  return (
    <div className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Technology Partners</div>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-12">Empowering innovation with cutting-edge solutions</h2>
        
        <div className="flex flex-wrap justify-center gap-12 opacity-60">
          {partners.map((p, i) => (
            <div key={i} className="flex items-center gap-3 text-2xl font-bold text-slate-800 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <i className={`fa-solid ${p.logo || 'fa-gear'}`}></i>
              <span>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
