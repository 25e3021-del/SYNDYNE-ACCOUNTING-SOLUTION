
import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'glass-nav py-2' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Desktop Links - Now aligned to the left side in the absence of a logo */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[11px] font-black uppercase tracking-widest transition-all duration-300 relative group ${scrolled ? 'text-slate-800 hover:text-blue-600' : 'text-white hover:text-blue-300'}`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              
              {/* Brand Video Button */}
              <button 
                data-video-modal-btn
                onClick={() => setIsVideoModalOpen(true)}
                className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300 px-4 py-2 rounded-full border ${scrolled ? 'border-slate-200 text-slate-800 hover:bg-slate-50' : 'border-white/20 text-white hover:bg-white/10'}`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Watch Film
              </button>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Toggle and Actions */}
            <div className="flex items-center gap-4 lg:hidden ml-auto">
               <button 
                onClick={() => setIsVideoModalOpen(true)}
                className={`p-3 rounded-xl transition-all ${scrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'}`}
              >
                <i className="fa-solid fa-play"></i>
              </button>
              <button 
                className={`p-3 rounded-xl transition-all ${scrolled ? 'text-slate-900' : 'text-white bg-white/10'}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-[110] flex flex-col items-center justify-center p-8 animate-in fade-in slide-in-from-right duration-500">
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-slate-900 text-3xl">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="space-y-8 text-center w-full">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-3xl font-black text-slate-900 uppercase tracking-widest hover:text-blue-600"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => { setIsMobileMenuOpen(false); setIsVideoModalOpen(true); }}
                className="w-full bg-slate-100 text-slate-900 py-6 rounded-2xl font-black uppercase tracking-widest text-lg mb-4"
              >
                Watch Brand Intro
              </button>
              <button 
                onClick={() => { setIsMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-lg shadow-2xl"
              >
                Consult Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Brand Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 animate-in fade-in zoom-in duration-300">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl" onClick={() => setIsVideoModalOpen(false)}></div>
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.3)] border border-white/10">
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-white/20"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
            <video 
              autoPlay 
              controls 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-skyscraper-at-the-start-of-a-sunny-day-20224-large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-10 left-10 z-10 pointer-events-none">
               <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.3em] mb-4 w-fit">Now Playing</div>
               <h3 className="text-white text-3xl font-black uppercase tracking-widest drop-shadow-lg">Syndyne: The Future of Accounting</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
