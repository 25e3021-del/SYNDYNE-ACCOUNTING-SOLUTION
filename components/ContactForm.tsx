
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="text-white">
          <h2 className="text-4xl font-extrabold mb-8">Streamline Your Finances, <span className="text-blue-400">One Step At A Time</span></h2>
          <p className="text-xl text-slate-400 mb-12">Let us take care of your books and make this financial year a good one. Reach out for a custom quotation.</p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">Call us</div>
                <div className="text-xl font-bold">+91-925-825-6391</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">Email Us</div>
                <div className="text-xl font-bold">info@syndyne.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl">
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              <input type="email" placeholder="Business Email" className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            </div>
            <input type="tel" placeholder="Your Phone" className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            <textarea placeholder="Enter Message" rows={4} className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
            <button className="w-full bg-blue-600 text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-all">
              Request A Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
