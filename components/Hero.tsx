
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-luxury-resort-with-swimming-pool-42000-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 video-overlay bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 bg-blue-600/30 border border-blue-400/40 backdrop-blur-xl px-5 py-2 rounded-full text-blue-50 text-[10px] font-black uppercase tracking-[0.3em] mb-10 animate-in fade-in slide-in-from-left duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            Precision Meets Global Scale
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            REDEFINING <br/>
            <span className="text-blue-500">EXCELLENCE</span> <br/>
            IN ACCOUNTING
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            Save up to 60% on operational costs with Syndyne's technology-driven accounting. We provide the clarity you need to scale with total confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-12 py-6 rounded-full text-sm font-black uppercase tracking-widest shadow-2xl hover:bg-blue-500 hover:scale-105 hover:-rotate-1 active:scale-95 transition-all"
            >
              Request A Consultation
            </button>
            <button className="bg-white/10 backdrop-blur-xl text-white border border-white/20 px-12 py-6 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center gap-3 group">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-play text-[10px]"></i>
              </div>
              Watch Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/50 animate-bounce">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] rotate-90 mb-4 origin-left">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>

      {/* Brand Strips */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden xl:flex flex-col gap-10 p-8 border-l border-white/10 backdrop-blur-sm">
        {['NASSCOM', 'SOC2', 'IACC', 'GDPR', 'CLUTCH'].map((b) => (
           <span key={b} className="text-white/20 text-xs font-black uppercase tracking-[0.4em] origin-right -rotate-90 py-4">
             {b}
           </span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
