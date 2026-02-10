
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Video: High-end metropolitan architecture in crisp daylight */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover scale-105"
        >
          {/* Using a bright, clear daylight corporate architecture video */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-skyscrapers-in-a-business-district-under-a-clear-sky-26616-large.mp4" type="video/mp4" />
        </video>
        {/* Daylight Overlays - Clear, crisp, and professional */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-blue-600/10 to-white/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,255,255,0.05)_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="pt-20 lg:pt-0">
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-xl px-5 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10 animate-in fade-in slide-in-from-left duration-1000">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              India's Premier Accounting Hub
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] mb-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              FINANCIAL <br/>
              <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.5)]">MASTERY</span> <br/>
              AT SCALE
            </h1>
            
            <p className="text-lg md:text-xl text-slate-100 mb-12 leading-relaxed max-w-xl font-medium animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
              Transforming Indian business landscapes with world-class outsourced accounting. We handle the complexity; you lead the growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-12 py-6 rounded-full text-sm font-black uppercase tracking-widest shadow-2xl hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all"
              >
                Book a Consultation
              </button>
              <button 
                onClick={() => {
                  const modalBtn = document.querySelector('[data-video-modal-btn]');
                  if (modalBtn) (modalBtn as HTMLElement).click();
                }}
                className="bg-white/10 backdrop-blur-xl text-white border border-white/30 px-12 py-6 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                  <i className="fa-solid fa-play text-[10px]"></i>
                </div>
                The Syndyne Story
              </button>
            </div>
          </div>

          {/* Right Column: Floating Dashboard UI */}
          <div className="hidden lg:block relative perspective-1000">
            <div className="relative animate-in zoom-in fade-in duration-1000 delay-700">
              {/* Main Dashboard Card */}
              <div className="bg-white/20 backdrop-blur-3xl border border-white/30 rounded-[40px] p-8 shadow-2xl transform rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-700">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Live Financial Pulse</span>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 p-6 rounded-3xl border border-white/10">
                    <div className="text-blue-200 text-xs font-bold mb-2">Net Liquidity</div>
                    <div className="text-3xl font-black text-white">₹8.4M</div>
                    <div className="text-[10px] text-green-300 mt-1 flex items-center gap-1">
                      <i className="fa-solid fa-arrow-up"></i> 12.5% this month
                    </div>
                  </div>
                  <div className="bg-white/10 p-6 rounded-3xl border border-white/10">
                    <div className="text-blue-200 text-xs font-bold mb-2">Tax Compliance</div>
                    <div className="text-3xl font-black text-white">100%</div>
                    <div className="text-[10px] text-blue-200 mt-1">GDPR & SOC2 Verified</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-white/80">
                    <span>OPERATIONAL EFFICIENCY</span>
                    <span>85% OPTIMIZED</span>
                  </div>
                </div>
              </div>

              {/* Smaller floating elements */}
              <div className="absolute -top-12 -right-8 bg-blue-500 p-6 rounded-3xl shadow-2xl animate-bounce-slow">
                <i className="fa-solid fa-building text-white text-3xl"></i>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white/30 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl animate-pulse">
                <div className="text-[10px] font-black text-white uppercase mb-1">Global Scale</div>
                <div className="text-xl font-black text-white">100+ Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Footprint Badges */}
      <div className="absolute bottom-10 left-0 w-full hidden xl:block">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
           <div className="flex gap-12 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
             <span className="text-white font-black text-sm tracking-[0.5em]">GURGAON</span>
             <span className="text-white font-black text-sm tracking-[0.5em]">MUMBAI</span>
             <span className="text-white font-black text-sm tracking-[0.5em]">BANGALORE</span>
             <span className="text-white font-black text-sm tracking-[0.5em]">NOIDA</span>
           </div>
           <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.8em] animate-pulse">
             Trusted Partners Worldwide
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-[-10deg] {
          transform: rotateY(-10deg);
        }
      `}} />
    </div>
  );
};

export default Hero;
