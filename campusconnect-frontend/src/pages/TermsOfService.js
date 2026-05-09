import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function TermsOfService() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col">
      <nav className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm h-16 flex items-center px-8 z-50">
        <Link to="/" className="text-2xl font-extrabold tracking-tighter text-[#003366] dark:text-white font-headline">CampusConnect</Link>
      </nav>
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-8 tracking-tight">Terms of Service</h1>
          
          <div className="space-y-6 text-slate-600 dark:text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 font-headline">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">By accessing CampusConnect, you agree to abide by these terms. This service is intended for active university students and faculty.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 font-headline">2. Honest Reporting</h2>
              <p className="leading-relaxed">Users must provide accurate and truthful information when reporting items lost or found. Submitting false claims is a violation of the academic honor code.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 font-headline">3. Liability</h2>
              <p className="leading-relaxed">CampusConnect is a facilitator for returning lost items. The university and CampusConnect administrators are not liable for items that are not recovered or are damaged.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer type="auth" />
    </div>
  );
}

export default TermsOfService;
