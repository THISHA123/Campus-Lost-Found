import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ type = "dashboard" }) {
  if (type === "auth") {
    return (
      <footer className="w-full bg-white/50 backdrop-blur-md border-t border-outline-variant/10 py-6 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-headline font-bold text-lg tracking-tight text-primary block mb-1">CampusConnect</span>
            <p className="text-xs text-outline font-medium">© 2024 CampusConnect Lost & Found. Built for Academic Clarity.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <Link className="text-xs text-outline font-semibold hover:text-primary transition-colors" to="/privacy-policy">Privacy Policy</Link>
            <Link className="text-xs text-outline font-semibold hover:text-primary transition-colors" to="/terms-of-service">Terms of Service</Link>
            <Link className="text-xs text-outline font-semibold hover:text-primary transition-colors" to="/campus-directory">Campus Directory</Link>
            <Link className="text-xs text-outline font-semibold hover:text-primary transition-colors" to="/contact-support">Contact Support</Link>
          </div>
        </div>
      </footer>
    );
  }

  // Default Dashboard Footer
  return (
    <footer className="w-full py-12 px-8 mt-auto bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/50 lg:ml-64 lg:w-[calc(100%-16rem)] relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-headline font-bold text-slate-900 dark:text-white text-xl">CampusConnect</span>
          <p className="font-body text-xs text-slate-500 mt-2 text-center md:text-left">© 2024 CampusConnect Lost & Found. Built for Academic Clarity.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link className="font-body text-xs text-slate-400 hover:text-[#003366] dark:hover:text-white hover:underline transition-all" to="/privacy-policy">Privacy Policy</Link>
          <Link className="font-body text-xs text-slate-400 hover:text-[#003366] dark:hover:text-white hover:underline transition-all" to="/terms-of-service">Terms of Service</Link>
          <Link className="font-body text-xs text-slate-400 hover:text-[#003366] dark:hover:text-white hover:underline transition-all" to="/campus-directory">Campus Directory</Link>
          <Link className="font-body text-xs text-slate-400 hover:text-[#003366] dark:hover:text-white hover:underline transition-all" to="/contact-support">Contact Support</Link>
        </div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-slate-300 hover:text-primary cursor-pointer transition-colors">language</span>
          <span className="material-symbols-outlined text-slate-300 hover:text-primary cursor-pointer transition-colors">help</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
