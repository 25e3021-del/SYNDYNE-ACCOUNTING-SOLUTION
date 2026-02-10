
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Happy Clients', value: '300+', sublabel: 'Global Partnerships' },
    { label: 'Projects Done', value: '722+', sublabel: 'Accounting Excellence' },
    { label: 'Experience', value: '8+', sublabel: 'Years in Business' },
    { label: 'Underway', value: '125+', sublabel: 'Active Projects' },
    { label: 'Accuracy', value: '99.9%', sublabel: 'Financial Precision' },
  ];

  return (
    <div className="bg-white py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-4xl font-extrabold text-blue-900 mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-slate-400 font-medium">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
