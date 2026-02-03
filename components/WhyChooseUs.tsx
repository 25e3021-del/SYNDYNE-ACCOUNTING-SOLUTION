
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const pillars = [
    { title: 'Experience That Delivers', desc: '10+ years of being a trusted outsourced accounting partner.', icon: 'fa-calendar-check' },
    { title: 'Comprehensive Services', desc: 'Tailored and accurate bookkeeping and accounting solutions.', icon: 'fa-layer-group' },
    { title: 'Cost-Effective Solutions', desc: 'Boost savings of up to 60% with expert outsourced bookkeeping.', icon: 'fa-money-bill-trend-up' },
    { title: 'Local Expertise', desc: 'Leveraging in-depth local expertise to serve global clients.', icon: 'fa-earth-americas' },
    { title: 'Proven Track Record', desc: '100+ satisfied clients trust us to fuel their growth.', icon: 'fa-award' },
    { title: 'Ethical Practices', desc: 'Skilled accountants adhering to strict confidentiality.', icon: 'fa-handshake' },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8">Why Choose <span className="text-blue-600">Syndyne?</span></h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {pillars.map((p, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <i className={`fa-solid ${p.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{p.title}</h4>
                    <p className="text-sm text-slate-500">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-50"></div>
            <h3 className="text-3xl font-bold mb-6">Ready to Experience the Advantage?</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Partner with Syndyne Accounting Solutions to streamline your finances, giving you the freedom to drive innovation and grow your business with confidence.
            </p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold shadow-xl hover:bg-blue-50 transition-all">
              Contact Us Today!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
