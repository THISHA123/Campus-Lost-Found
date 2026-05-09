import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="bg-background font-body text-on-surface min-h-screen flex flex-col relative overflow-hidden">
      {/* Subtle Background Overlay */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/2 opacity-[0.03] pointer-events-none z-0">
        <img 
          className="w-full h-full object-cover object-right-bottom" 
          alt="campus architecture" 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-7xl mx-auto w-full px-6 py-12 lg:px-12 relative z-10 gap-16 lg:gap-8">
        
        {/* Left Side: Text and Stats */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="account_balance">account_balance</span>
            <span className="font-headline font-extrabold text-2xl tracking-tighter text-primary">CampusConnect</span>
          </div>
          
          <div>
            <h1 className="font-headline text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight mb-6">
              Intellectual<br/>Clarity Starts<br/>Here.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md font-medium leading-relaxed">
              Access your academic hub for lost and found items. Join the architectural network of campus clarity.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-outline-variant/10 min-w-[140px]">
              <h4 className="font-headline font-extrabold text-2xl text-primary mb-1">2.4k+</h4>
              <p className="text-xs font-bold text-outline tracking-widest uppercase">Active<br/>Users</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-outline-variant/10 min-w-[140px]">
              <h4 className="font-headline font-extrabold text-2xl text-primary mb-1">100%</h4>
              <p className="text-xs font-bold text-outline tracking-widest uppercase">Secure</p>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full lg:w-[480px]">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-outline-variant/10 relative">
            <div className="absolute top-8 right-8 text-surface-variant">
              <span className="material-symbols-outlined text-4xl">verified_user</span>
            </div>
            
            <header className="mb-10 pr-12">
              <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight mb-2">Welcome Back</h2>
              <p className="text-on-surface-variant text-sm font-medium">Please authenticate to access your portal.</p>
            </header>
            
            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label className="block font-label text-sm font-semibold text-on-surface-variant ml-1" htmlFor="email">University Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-xl">mail</span>
                  </div>
                  <input 
                    className="w-full pl-12 pr-4 py-3.5 bg-surface-container-lowest border-outline-variant/20 border-2 rounded-xl focus:border-primary focus:ring-0 transition-all outline-none text-on-surface font-medium placeholder:text-outline/40" 
                    id="email" 
                    placeholder="e.g. j.doe@university.edu" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="font-label text-sm font-semibold text-on-surface-variant" htmlFor="password">Password</label>
                  <a href="#!" className="text-xs font-bold text-primary hover:underline">Forgot Password?</a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-xl">lock</span>
                  </div>
                  <input 
                    className="w-full pl-12 pr-4 py-3.5 bg-surface-container-lowest border-outline-variant/20 border-2 rounded-xl focus:border-primary focus:ring-0 transition-all outline-none text-on-surface font-medium placeholder:text-outline/40" 
                    id="password" 
                    placeholder="••••••••" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  className="w-full bg-[#001e40] text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-[#002a5c] active:scale-[0.98] transition-all duration-200 flex justify-center items-center gap-2" 
                  type="submit"
                >
                  Authenticate Access
                  <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                </button>
              </div>
            </form>

            <div className="mt-10 text-center border-t border-outline-variant/10 pt-6">
              <p className="text-on-surface-variant font-medium text-sm">
                New to the architect? 
                <Link to="/register" className="text-primary font-extrabold hover:underline underline-offset-4 ml-2">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer type="auth" />
    </div>
  );
}

export default Login;