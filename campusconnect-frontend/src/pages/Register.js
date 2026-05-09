import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [fullName, setFullName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/signup", { fullName, regNo, email, password });
      alert("Registration successful");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="bg-background font-body text-on-surface min-h-screen flex flex-col md:flex-row">
      <aside className="hidden md:flex md:w-5/12 lg:w-4/12 relative overflow-hidden bg-primary-container p-12 flex-col justify-between">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <span className="material-symbols-outlined text-tertiary-fixed text-4xl" data-icon="account_balance">account_balance</span>
            <span className="font-headline font-extrabold text-2xl tracking-tighter text-white">Campus Found</span>
          </div>
          <h1 className="font-headline text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Your Digital <br/>Campus <br/><span className="text-tertiary-fixed">Landmark.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xs font-light leading-relaxed">
            Join a secure ecosystem designed to reconnect the campus community with what matters most.
          </p>
        </div>
        <div className="relative z-10 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-white" data-icon="verified_user">verified_user</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">Secure Authentication</h3>
              <p className="text-white/50 text-sm">Exclusive to verified university credentials.</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <img className="w-full h-full object-cover grayscale" alt="abstract architectural close-up of a modern university building" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA9vanlsktqHdxjj1t2-vcpye4KWG_WsHOvd0MKYsIdXvP0k9J61YR1CEM1v1LSnKahkYzeLUkXT9fZg95Kha8zdbHQ9oqvJ1XtBHE-_8SKPsjBmAc2cAQmMQqysb22oJAWuInKLLU6OQCUbm6QjiTJwA24tuTEqND6BZ83L_PUrZq35SXdP9C7DZAMgrvAIgArHpo-UtmDW0SsnqxzxSWj1M1RAynbm6qySP4MPbUqmittqYnj0yWLJU1kJk_pk_scGtx6KzNcdA"/>
          <div className="absolute inset-0 architect-gradient mix-blend-multiply"></div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 bg-surface">
        <div className="w-full max-w-md">
          <div className="md:hidden flex items-center gap-2 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl" data-icon="account_balance">account_balance</span>
            <span className="font-headline font-bold text-xl tracking-tight text-primary">Campus Found</span>
          </div>
          <header className="mb-10">
            <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight mb-2">Create Account</h2>
            <p className="text-on-surface-variant font-medium">Enter your details to register as a student.</p>
          </header>
          
          <form className="space-y-6" onSubmit={handleRegister}>
            <div className="space-y-2">
              <label className="block font-label text-sm font-semibold text-on-surface-variant ml-1" htmlFor="full-name">Full Name</label>
              <div className="relative">
                <input 
                  className="w-full px-4 py-3.5 bg-surface-container-lowest border-outline-variant/15 border-2 rounded-xl focus:border-primary focus:ring-0 transition-all outline-none text-on-surface font-medium placeholder:text-outline/40" 
                  id="full-name" 
                  placeholder="John Doe" 
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block font-label text-sm font-semibold text-on-surface-variant ml-1" htmlFor="reg-number">University Registration Number</label>
              <div className="relative">
                <input 
                  className="w-full px-4 py-3.5 bg-surface-container-lowest border-outline-variant/15 border-2 rounded-xl focus:border-primary focus:ring-0 transition-all outline-none text-on-surface font-medium placeholder:text-outline/40" 
                  id="reg-number" 
                  placeholder="2021/ICT/113" 
                  type="text"
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block font-label text-sm font-semibold text-on-surface-variant ml-1" htmlFor="email">University Email</label>
              <div className="relative">
                <input 
                  className="w-full px-4 py-3.5 bg-surface-container-lowest border-outline-variant/15 border-2 rounded-xl focus:border-primary focus:ring-0 transition-all outline-none text-on-surface font-medium placeholder:text-outline/40" 
                  id="email" 
                  placeholder="j.doe@university.edu" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block font-label text-sm font-semibold text-on-surface-variant ml-1" htmlFor="password">Password</label>
              <div className="relative">
                <input 
                  className="w-full px-4 py-3.5 bg-surface-container-lowest border-outline-variant/15 border-2 rounded-xl focus:border-primary focus:ring-0 transition-all outline-none text-on-surface font-medium placeholder:text-outline/40" 
                  id="password" 
                  placeholder="••••••••" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="pt-2">
              <button className="w-full architect-gradient text-white font-bold py-4 rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-200" type="submit">
                Sign Up
              </button>
            </div>
          </form>

          <footer className="mt-12 text-center">
            <p className="text-on-surface-variant font-medium text-sm">
              Already have an account? 
              <Link to="/" className="text-primary-container font-extrabold hover:underline underline-offset-4 ml-1">Login</Link>
            </p>
          </footer>
          
          <div className="mt-16 pt-8 border-t border-outline-variant/10 flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <Link className="text-xs text-outline font-semibold uppercase tracking-widest hover:text-primary" to="/terms-of-service">Terms of Service</Link>
            <Link className="text-xs text-outline font-semibold uppercase tracking-widest hover:text-primary" to="/privacy-policy">Privacy Policy</Link>
            <Link className="text-xs text-outline font-semibold uppercase tracking-widest hover:text-primary" to="/contact-support">Contact Support</Link>
          </div>
        </div>
      </main>

      <div className="fixed top-8 right-8 z-50">
        <div className="architect-glass border border-white/20 rounded-full px-6 py-2 shadow-xl shadow-black/5 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-primary-container">Campus Verified</span>
        </div>
      </div>
    </div>
  );
}

export default Register;
