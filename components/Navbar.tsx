
import React, { useState } from 'react';
import Logo from './Logo.tsx';

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
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'glass-nav py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="group">
            <div className="transform scale-[0.65] md:scale-[0.75] origin-left">
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
                className={`text-[11px] font-black uppercase tracking-widest transition-all duration-300 relative group ${scrolled ? 'text-slate-800 hover:text-blue-600' : 'text-white hover:text-blue-300'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-3 rounded-xl transition-all ${scrolled ? 'text-slate-900' : 'text-white bg-white/10'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[110] flex flex-col items-center justify-center p-8 animate-in fade-in slide-in-from-right duration-500">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-slate-900 text-3xl">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="mb-12 transform scale-125"><Logo /></div>
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
              onClick={() => { setIsMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-lg shadow-2xl"
            >
              Consult Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
