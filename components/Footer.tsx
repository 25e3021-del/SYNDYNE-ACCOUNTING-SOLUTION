
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Logo light />
            <p className="mt-6 text-sm leading-relaxed max-w-xs">
              Syndyne Accounting Solutions is a world-class Outsourced Accounting Service Provider. We enable global businesses to scale by taking over the complexities of financial management.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><i className="fa-brands fa-facebook-f"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Accounting Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Offshore Accounting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Online Bookkeeping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financial Reporting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accounts Payable</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Budgeting & Forecasting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Software Expertise</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">QuickBooks Accounting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Xero Accounting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Zoho Books</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tally Accounting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">MS Business Central</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <p className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-blue-500"></i>
                Highway Towers- Tower 1, Ground Floor A13/2,3,4, Sec 62 Noida (Delhi NCR)
              </p>
              <p className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-blue-500"></i>
                +91-925-825-6391
              </p>
              <p className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-blue-500"></i>
                info@syndyne.com
              </p>
              <p className="flex items-center gap-3">
                <i className="fa-solid fa-clock text-blue-500"></i>
                Mon-Sat (9:00 AM to 6:00 PM)
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 text-center text-[10px] space-y-4">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="#" className="hover:text-white">About Us</a>
            <a href="#" className="hover:text-white">Why Syndyne</a>
            <a href="#" className="hover:text-white">Career</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Blogs</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Confidentiality</a>
          </div>
          <p>
            Syndyne Accounting Solutions is an Outsourced Accounting Service Provider, providing bookkeeping and financial reporting services. <br/>
            Syndyne does not provide services that would require a license to practice public accountancy.
          </p>
          <p>© 2025 Syndyne Accounting Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
