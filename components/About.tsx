
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-blue-50 rounded-3xl overflow-hidden shadow-inner relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800" 
                alt="Accounting Team" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-10 rounded-3xl shadow-2xl z-20 hidden md:block">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-sm font-bold uppercase tracking-widest leading-tight">Years of<br/>Excellence</div>
            </div>
          </div>

          <div>
            <div className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">How It All Began</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Expertise You Trust, <br/>
              <span className="text-gradient">Results You Count On</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Running a business is like juggling a thousand tasks at once—some days, it feels like the numbers just won’t add up. We’ve been there too. 
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              That’s why, at Syndyne, we set out on a mission over a decade ago to make financial management less about headaches and more about breakthroughs. Inspired by the desire to make a difference, we created a team focused on professionalism, excellence, and a results-driven approach.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-check text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Proven Track Record</h4>
                  <p className="text-sm text-slate-500">100+ satisfied global clients</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-shield-halved text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Ethical Practices</h4>
                  <p className="text-sm text-slate-500">100% data confidentiality</p>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-3 text-blue-600 font-bold hover:gap-5 transition-all">
              Learn more about our journey <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
