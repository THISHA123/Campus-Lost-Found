import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col">
      <nav className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm h-16 flex items-center px-8 z-50">
        <Link to="/" className="text-2xl font-extrabold tracking-tighter text-[#003366] dark:text-white font-headline">CampusConnect</Link>
      </nav>
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-8 tracking-tight">Privacy Policy</h1>
          
          <div className="space-y-6 text-slate-600 dark:text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 font-headline">1. Information We Collect</h2>
              <p className="leading-relaxed">When you use CampusConnect, we collect your university email, name, and details about the items you report lost or found. We also collect usage data to improve our academic hub.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 font-headline">2. How We Use Information</h2>
              <p className="leading-relaxed">Your data is strictly used to facilitate the return of lost items to their rightful owners. We do not sell your personal information to third parties.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 font-headline">3. Security</h2>
              <p className="leading-relaxed">We employ an "Academic Architect protocol" to ensure your data is stored securely and only accessible to authorized university personnel.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer type="auth" />
    </div>
  );
}

export default PrivacyPolicy;
