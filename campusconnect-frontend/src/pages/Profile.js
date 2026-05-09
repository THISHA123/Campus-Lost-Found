import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col antialiased">
      <Navbar />
      
      <div className="flex pt-16 flex-1">
        <Sidebar />
        
        <main className="flex-1 lg:ml-64 p-4 md:p-8 max-w-7xl mx-auto w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-on-surface-variant mb-8 px-2">
            <Link to="/dashboard" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-bold">Profile</span>
          </nav>
          
          <header className="mb-10 px-2">
            <h1 className="text-3xl md:text-4xl font-headline font-extrabold text-primary tracking-tight mb-2">My Profile</h1>
            <p className="text-on-surface-variant">View your academic identity and manage your account.</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Identity Card */}
            <div className="lg:col-span-1">
              <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 shadow-lg shadow-black/[0.03] text-center flex flex-col items-center">
                <div className="w-32 h-32 bg-secondary-container rounded-full flex items-center justify-center text-4xl text-primary font-bold mb-6 shadow-inner">
                  {user.fullName ? user.fullName[0].toUpperCase() : "A"}
                </div>
                <h2 className="text-2xl font-headline font-extrabold text-primary mb-1">{user.fullName}</h2>
                <p className="text-on-surface-variant text-sm font-medium mb-6">Student</p>
                
                <span className="px-4 py-2 bg-primary-fixed text-on-primary-fixed rounded-xl text-xs font-bold tracking-widest uppercase mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                  Verified Identity
                </span>
                
                <button 
                  onClick={handleLogout}
                  className="w-full py-3 bg-error-container/50 hover:bg-error-container text-on-error-container rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">logout</span>
                  Logout
                </button>
              </div>
            </div>

            {/* Details Section */}
            <div className="lg:col-span-2">
              <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 shadow-sm h-full">
                <h3 className="text-xl font-headline font-bold text-primary mb-6 flex items-center gap-2 border-b border-outline-variant/10 pb-4">
                  <span className="material-symbols-outlined">badge</span>
                  Account Details
                </h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/5">
                      <label className="block text-[10px] uppercase font-bold text-outline tracking-widest mb-1">Full Name</label>
                      <p className="text-on-surface font-semibold text-lg">{user.fullName}</p>
                    </div>
                    
                    <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/5">
                      <label className="block text-[10px] uppercase font-bold text-outline tracking-widest mb-1">University Email</label>
                      <p className="text-on-surface font-semibold text-lg line-clamp-1">{user.email}</p>
                    </div>
                    
                    <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/5">
                      <label className="block text-[10px] uppercase font-bold text-outline tracking-widest mb-1">Registration Number</label>
                      <p className="text-on-surface font-semibold text-lg">{user.regNo || "N/A"}</p>
                    </div>

                    <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/5">
                      <label className="block text-[10px] uppercase font-bold text-outline tracking-widest mb-1">Account Status</label>
                      <p className="text-tertiary-container font-semibold text-lg flex items-center gap-1">
                        Active 
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
