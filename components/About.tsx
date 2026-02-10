
import React from 'react';

const About: React.FC = () => {
  const values = [
    { title: 'Transparent', icon: 'fa-eye', desc: 'We believe in maintaining an honest relationship with our clients.' },
    { title: 'People Focused', icon: 'fa-users', desc: 'We value our employees and clients to create balanced growth.' },
    { title: 'Innovative', icon: 'fa-lightbulb', desc: 'We believe in pushing boundaries and improving efficiency.' }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-slate-100 rounded-[40px] overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1200" 
                alt="SNDJ Global Office" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <div className="text-6xl font-black mb-2">8+</div>
                <div className="text-xs font-black uppercase tracking-[0.4em]">Years of Consulting Excellence</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs mb-6">About SNDJ Global</div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-10 leading-[1.1]">
              Helping Your Business <br/><span className="text-blue-600">Create New</span> Possibilities
            </h2>
            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                SNDJ Global is a leading consultancy and outsourcing firm equipped to deal with all facets of financial management. Our firm emphasizes helping our client’s business reach its full potential using our skills in taxes, consultancy, financial planning, and accounting.
              </p>
              <p>
                We serve as a perfect outsourcing partner for CPAs, Bookkeeping Firms, and EAs in the USA, helping you fulfill bandwidth gaps during Tax Season and throughout the year.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {values.map((v, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <i className={`fa-solid ${v.icon} text-blue-600 mb-3 text-xl`}></i>
                  <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-2">{v.title}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">{v.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-8">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-slate-900 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition-all"
              >
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
