
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Client Testimonials</h2>
          <p className="text-slate-600">See how we've helped others achieve their financial goals.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 italic text-lg text-slate-700 relative">
            <i className="fa-solid fa-quote-left absolute top-6 left-6 text-slate-200 text-4xl"></i>
            <p className="relative z-10 mb-8">
              "Excellent team to work with. Great work. Their attention to detail in our monthly reconciliations has saved us countless hours. Will use their service again for sure."
            </p>
            <div className="flex items-center gap-4 not-italic">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">JK</div>
              <div>
                <div className="font-bold text-slate-900">Jon Kontopos</div>
                <div className="text-sm text-slate-500">Vice President, TechGrowth Global</div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 italic text-lg text-slate-700 relative">
            <i className="fa-solid fa-quote-left absolute top-6 left-6 text-slate-200 text-4xl"></i>
            <p className="relative z-10 mb-8">
              "Syndyne's offshore model is revolutionary. We reduced our accounting overhead by 50% without sacrificing any accuracy in our reporting."
            </p>
            <div className="flex items-center gap-4 not-italic">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">MS</div>
              <div>
                <div className="font-bold text-slate-900">Maria Sanchez</div>
                <div className="text-sm text-slate-500">Founder, Nexa Hospitality</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-20 border-t border-slate-100 text-center">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Awards and Recognition</h4>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
             <span className="font-bold text-lg">Top Clutch 2025</span>
             <span className="font-bold text-lg">NASSCOM Member</span>
             <span className="font-bold text-lg">SOC2 Certified</span>
             <span className="font-bold text-lg">GDPR Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
