import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function ContactSupport() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col">
      <nav className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm h-16 flex items-center px-8 z-50">
        <Link to="/" className="text-2xl font-extrabold tracking-tighter text-[#003366] dark:text-white font-headline">CampusConnect</Link>
      </nav>
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
            <span className="material-symbols-outlined text-4xl">support_agent</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-4 tracking-tight">Contact Support</h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10">Need help tracking down an item or experiencing issues with the CampusConnect platform? We're here to assist.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Email Support Card */}
            <a href="mailto:support@campusconnect.edu" className="group relative bg-surface-container-lowest dark:bg-slate-700/30 p-8 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden block">
              <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-primary/5 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                
                <h2 className="text-2xl font-headline font-bold text-slate-900 dark:text-white mb-2">Email Support</h2>
                <p className="text-slate-500 dark:text-slate-400 mb-6 flex-1">
                  Send us an email anytime. We usually respond within 24 hours during business days.
                </p>
                
                <div className="flex items-center gap-3 text-primary font-bold">
                  support@campusconnect.edu
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">arrow_forward</span>
                </div>
              </div>
            </a>

            {/* Call Office Card */}
            <a href="tel:+18005550199" className="group relative bg-surface-container-lowest dark:bg-slate-700/30 p-8 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden block">
              <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-tertiary-container/30 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-tertiary-container/50 text-tertiary-container-on rounded-2xl flex items-center justify-center mb-6 group-hover:bg-tertiary-container group-hover:text-tertiary-container-on transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">call</span>
                </div>
                
                <h2 className="text-2xl font-headline font-bold text-slate-900 dark:text-white mb-2">Call Office</h2>
                <p className="text-slate-500 dark:text-slate-400 mb-6 flex-1">
                  Speak directly with our campus support team. Available Mon-Fri, 9am - 5pm.
                </p>
                
                <div className="flex items-center gap-3 text-tertiary-container-on font-bold">
                  +1 (800) 555-0199
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">arrow_forward</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>

      <Footer type="auth" />
    </div>
  );
}

export default ContactSupport;
