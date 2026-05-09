import { useEffect, useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ItemCard from "../components/ItemCard";
import Footer from "../components/Footer";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const fetchItems = async () => {
    try {
      const res = await API.get(`/items?search=${search}&category=${category}`);
      setItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [search, category]);

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <Navbar />
      
      <div className="flex pt-16">
        <Sidebar />
        
        <main className="flex-1 lg:ml-64 p-4 md:p-8 bg-surface overflow-x-hidden">
          
          {/* Header Banner */}
          <header className="mb-12 relative rounded-[2rem] overflow-hidden bg-primary h-[400px] flex items-center shadow-xl shadow-primary/10">
            <img 
              alt="Campus Architecture" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay pointer-events-none" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsvW-KUK2Y3teRkWDet5kJqKEXBaPNXiy_sjOjWRpoSNWaAW83TairFEqXb3vHlEFLf9MHn-QD7kjUWGeJGgmwGc78mdG6dKX9WQnyRdd8n0ByB_-xRUkC8KWW2Tig8LVH7fb1PwxdWq-hONUrSuChck9wV_kLNsMRXktP62i5h73YhRrhxHqGkt2FkDmvY7m95niHJ8ylRoiOm0T1aTFjiFKdTjDBR5wRioJnQKhP8oZuPdATZNcxbn3RXCJethlxAaTSH8wIatw"
            />
            <div className="relative z-10 px-6 md:px-12 max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold text-white tracking-tight leading-tight mb-6">
                Lost something? <br/><span className="text-primary-fixed-dim">We'll help you find it.</span>
              </h1>
              
              <div className="relative max-w-xl mb-8">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline">search</span>
                </div>
                <input 
                  className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest border-none rounded-xl focus:ring-2 focus:ring-primary-fixed transition-all text-on-surface shadow-lg shadow-black/5" 
                  placeholder="Search for lost items, locations, or categories..." 
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && fetchItems()}
                />
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button onClick={() => navigate("/report")} className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-headline font-bold shadow-lg transition-transform active:scale-95">
                  Report Lost
                </button>
                <button onClick={() => navigate("/report")} className="px-8 py-4 bg-surface-container-highest text-on-surface rounded-xl font-headline font-bold shadow-sm transition-transform active:scale-95">
                  Report Found
                </button>
              </div>
            </div>
          </header>

          {/* Recent Activity Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">Recent Activity</h2>
                <p className="text-on-surface-variant mt-1">Stay updated with the latest items reported on campus.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setCategory("")} className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${category === "" ? "bg-primary text-white" : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"}`}>All Items</button>
                <button onClick={() => setCategory("Electronics")} className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${category === "Electronics" ? "bg-primary text-white" : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"}`}>Tech</button>
                <button onClick={() => setCategory("Accessories")} className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${category === "Accessories" ? "bg-primary text-white" : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"}`}>Accessories</button>
                <button onClick={() => setCategory("Books")} className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${category === "Books" ? "bg-primary text-white" : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"}`}>Books</button>
              </div>
            </div>
            
            {items.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {items.map(item => (
                  <ItemCard key={item._id} item={item} />
                ))}
              </div>
            ) : (
              <div className="bg-surface-container-lowest border border-dashed border-outline-variant rounded-2xl p-12 text-center flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-outline mb-2">inventory_2</span>
                <h3 className="text-lg font-bold text-on-surface">No items found</h3>
                <p className="text-on-surface-variant text-sm">Be the first to report a lost or found item on campus.</p>
              </div>
            )}
          </section>

          {/* Bottom Cards Section */}
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
            <div className="bg-surface-container-low rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between group hover:bg-surface-container-high transition-colors gap-8">
              <div className="flex-1">
                <div className="w-12 h-12 bg-primary-container text-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined">map</span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary mb-2">Interactive Map</h3>
                <p className="text-on-surface-variant max-w-xs">Locate lost items and reporting kiosks across the entire campus ecosystem.</p>
                <button className="mt-6 flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                  Open Campus Map
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              <div className="hidden sm:block">
                <div className="w-40 h-40 rounded-2xl bg-white p-2 shadow-inner border border-outline-variant/10">
                  <div className="w-full h-full rounded-xl overflow-hidden grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                    <img alt="Map Preview" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAkQJveIsksHorE-cXx54LOIeLJnaMaytD3Ob_emm5I2BgjEKa3yWRhgDoHCcPSfA7tTGiSy2bb7sx2LCYrkN2CkedkogfA9csLnhvtV9861jcYWXGaV62skAE5k190Sbs5x2farR0IrbjNzUgEKHurfzZECORWvhmKkHvnlVEbNtD_mzPxDdnDiF6PEyWiZ_Ey76tlIas3jnaUXOBPFVYdM-5JB1fwAXO_5JE-tlQAUfv4QxSRiT9v8fZkyW9ffkEtNK4bplo5f8"/>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#003366] rounded-3xl p-8 text-white relative overflow-hidden group shadow-lg">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-primary-fixed-dim">verified</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-2">Verification System</h3>
                <p className="text-primary-fixed-dim max-w-xs leading-relaxed">Our Academic Architect protocol ensures every claimed item reaches its rightful owner.</p>
                <button className="mt-6 flex items-center gap-2 font-bold text-white group-hover:gap-3 transition-all">
                  Learn about Security
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] opacity-[0.03] group-hover:opacity-[0.08] group-hover:rotate-12 transition-all duration-700 pointer-events-none">security</span>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}

export default Dashboard;