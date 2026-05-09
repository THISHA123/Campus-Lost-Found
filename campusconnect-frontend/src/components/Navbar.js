import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm dark:shadow-none h-16">
      <div className="flex justify-between items-center px-8 h-full max-w-[1920px] mx-auto">
        <Link to="/dashboard" className="text-2xl font-extrabold tracking-tighter text-[#003366] dark:text-white font-headline">CampusConnect</Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/dashboard" className="text-[#003366] border-b-2 border-[#003366] pb-1 dark:text-blue-400 dark:border-blue-400 font-headline font-bold tracking-tight text-sm">Home</Link>
          <Link to="/categories" className="text-slate-500 hover:text-[#003366] dark:text-slate-400 dark:hover:text-white transition-colors font-headline font-bold tracking-tight text-sm">Categories</Link>
          <Link to="/my-reports" className="text-slate-500 hover:text-[#003366] dark:text-slate-400 dark:hover:text-white transition-colors font-headline font-bold tracking-tight text-sm">Reports</Link>
          <Link to="/profile" className="text-slate-500 hover:text-[#003366] dark:text-slate-400 dark:hover:text-white transition-colors font-headline font-bold tracking-tight text-sm">Profile</Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
          <Link to="/profile" className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 text-slate-600 dark:text-slate-300 flex items-center justify-center">
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;