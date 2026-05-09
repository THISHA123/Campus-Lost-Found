import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#f2f4f6] dark:bg-slate-900 flex-col p-6 gap-y-2 pt-24 hidden lg:flex z-40">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-headline font-bold">AA</div>
        <div>
          <div className="text-sm font-semibold text-[#003366] dark:text-white">Academic Architect</div>
          <div className="text-[10px] text-slate-500">University Campus</div>
        </div>
      </div>
      <nav className="space-y-1">
        <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 text-[#003366] dark:text-white rounded-xl shadow-sm font-semibold transition-all">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-sm font-medium">Dashboard</span>
        </Link>
        <Link to="/categories" className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800/50 rounded-xl transition-all hover:translate-x-1">
          <span className="material-symbols-outlined">category</span>
          <span className="text-sm font-medium">Categories</span>
        </Link>
        <Link to="/my-reports" className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800/50 rounded-xl transition-all hover:translate-x-1">
          <span className="material-symbols-outlined">assignment</span>
          <span className="text-sm font-medium">My Reports</span>
        </Link>
        <Link to="/profile" className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800/50 rounded-xl transition-all hover:translate-x-1">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="text-sm font-medium">Profile</span>
        </Link>
      </nav>
      <div className="mt-auto pt-6">
        <button 
          onClick={() => navigate("/report")}
          className="w-full bg-gradient-to-br from-[#001e40] to-[#003366] text-white py-4 rounded-xl font-headline font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-base">add_circle</span>
          Report Lost Item
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;