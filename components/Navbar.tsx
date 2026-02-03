
import React, { useState } from 'react';
import Logo from './Logo';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const regions = ['USA', 'UK', 'Australia', 'Global'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'glass-nav py-2 shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="transform scale-75 origin-left">
              <Logo light={!scrolled} />
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group ${scrolled ? 'text-slate-800 hover:text-blue-600' : 'text-white hover:text-blue-300'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <div className="flex items-center border-l pl-8 space-x-6 border-slate-300/30">
              <select className={`bg-transparent text-[11px] font-black uppercase tracking-tighter outline-none border-none cursor-pointer ${scrolled ? 'text-slate-700' : 'text-white'}`}>
                {regions.map(r => <option key={r} value={r} className="text-black">{r}</option>)}
              </select>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-7 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-3 rounded-xl bg-white/10 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl ${scrolled ? 'text-slate-900' : 'text-white'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[110] flex flex-col items-center justify-center p-8 animate-in fade-in slide-in-from-right duration-500">
          <button 
            className="absolute top-8 right-8 text-slate-900 text-4xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          
          <div className="mb-12">
            <Logo />
          </div>

          <div className="space-y-8 text-center w-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-2xl font-black text-slate-900 uppercase tracking-widest hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
               onClick={() => { setIsMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
               className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-lg shadow-2xl"
            >
              Book a Free Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
