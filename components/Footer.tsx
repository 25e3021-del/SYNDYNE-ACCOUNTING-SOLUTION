
import React from 'react';
import Logo from './Logo.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-32 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1">
            <div className="transform scale-90 origin-left mb-8">
              <Logo light />
            </div>
            <p className="text-sm leading-relaxed font-medium text-slate-500">
              SNDJ Global is an accounting firm working with a team of experts in numbers and contributing to your growth.
            </p>
            <div className="mt-8 space-y-2 text-[11px] font-bold uppercase tracking-widest">
              <div className="text-white">Jay Desai, CEO</div>
              <div className="text-blue-500">+1 561-536-6050</div>
            </div>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-10">USA Offices</h4>
            <div className="space-y-6 text-xs leading-relaxed">
              <p>
                <span className="text-blue-500 font-black block mb-1">WASHINGTON</span>
                Plazza 600, 600 Stewart Street, <br/>Suite 300, Seattle, WA 98101
              </p>
              <p>
                <span className="text-blue-500 font-black block mb-1">CALIFORNIA</span>
                DBA R & A Business Services <br/>3820 Del Amo Blvd, Torrance, CA 90503
              </p>
              <p>
                <span className="text-blue-500 font-black block mb-1">NEW YORK</span>
                575 5th Avenue, 14th Floor <br/>New York City, NY 10017
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-10">Quick Links</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><a href="#services" className="hover:text-blue-500">Tax Preparation</a></li>
              <li><a href="#services" className="hover:text-blue-500">FBAR Consultation</a></li>
              <li><a href="#services" className="hover:text-blue-500">Virtual CFO</a></li>
              <li><a href="#services" className="hover:text-blue-500">Payroll Service</a></li>
              <li><a href="#services" className="hover:text-blue-500">Sales Tax</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-10">Direct Contact</h4>
            <div className="space-y-4 text-xs font-medium">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-blue-500"></i>
                <span>Sandip Desai: +1 201-940-3400</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-blue-500"></i>
                <span>Yatri Shah: +1 201-633-1141</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-blue-500"></i>
                <span>info@sndjglobal.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 text-center">
          <p className="text-[10px] font-black text-slate-600 tracking-[0.2em]">© 2025 SNDJ GLOBAL. ALL RIGHTS RESERVED. DESIGNED FOR ACCURACY.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
