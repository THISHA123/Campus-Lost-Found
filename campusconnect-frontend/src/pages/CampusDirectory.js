import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function CampusDirectory() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col">
      <nav className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm h-16 flex items-center px-8 z-50">
        <Link to="/" className="text-2xl font-extrabold tracking-tighter text-[#003366] dark:text-white font-headline">CampusConnect</Link>
      </nav>
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">domain</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight">Campus Directory</h1>
          </div>
          
          <div className="grid gap-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-700/50 rounded-2xl border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Main Library Lost & Found</h3>
              <p className="text-slate-500 mb-2">Location: 1st Floor Security Desk</p>
              <p className="text-sm font-medium text-primary">Hours: 8:00 AM - 10:00 PM</p>
            </div>
            
            <div className="p-6 bg-slate-50 dark:bg-slate-700/50 rounded-2xl border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Student Union Center</h3>
              <p className="text-slate-500 mb-2">Location: Information Booth</p>
              <p className="text-sm font-medium text-primary">Hours: 9:00 AM - 6:00 PM</p>
            </div>
            
            <div className="p-6 bg-slate-50 dark:bg-slate-700/50 rounded-2xl border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Campus Security Office</h3>
              <p className="text-slate-500 mb-2">Location: North Wing, Building A</p>
              <p className="text-sm font-medium text-primary">Hours: 24/7</p>
            </div>
          </div>
        </div>
      </main>

      <Footer type="auth" />
    </div>
  );
}

export default CampusDirectory;
