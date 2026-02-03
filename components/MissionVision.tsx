
import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <div className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-12">
            <div>
              <div className="w-12 h-1 bg-blue-500 mb-6"></div>
              <h3 className="text-3xl font-bold mb-6 italic">Our Mission</h3>
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                To empower businesses by providing reliable, high-quality, and technology-driven outsourcing services, enabling our clients to focus on growth while we deliver excellence and trust in every partnership.
              </p>
            </div>
            <div>
              <div className="w-12 h-1 bg-blue-500 mb-6"></div>
              <h3 className="text-3xl font-bold mb-6 italic">Our Vision</h3>
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                To be the most trusted and innovative outsourcing partner, transforming businesses through ethical practices, advanced solutions, and unwavering commitment to professionalism.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10">
            <h3 className="text-3xl font-bold mb-8">Values That Guide Us</h3>
            <div className="space-y-8">
              {[
                { title: 'Trust & Integrity', desc: 'The bedrock of every client relationship we build.' },
                { title: 'Innovation Driven', desc: 'Leveraging technology to redefine financial efficiency.' },
                { title: 'Uncompromising Excellence', desc: 'Striving for perfection in every ledger and report.' },
                { title: 'Ethical Business', desc: 'Strict adherence to global compliance standards.' }
              ].map((value, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{value.title}</h4>
                    <p className="text-slate-400 text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
