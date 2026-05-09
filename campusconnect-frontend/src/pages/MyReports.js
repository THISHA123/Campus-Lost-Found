import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ItemCard from "../components/ItemCard";
import Footer from "../components/Footer";

function MyReports() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMyItems = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) return;
        const res = await API.get(`/items/user/${user._id}`);
        setItems(res.data);
      } catch (err) {
        console.error("Failed to fetch user items", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyItems();
  }, []);

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
            <span className="text-primary font-bold">My Reports</span>
          </nav>
          
          <header className="mb-10 px-2">
            <h1 className="text-3xl md:text-4xl font-headline font-extrabold text-primary tracking-tight mb-2">My Reports</h1>
            <p className="text-on-surface-variant">Manage and track the lost or found items you have reported.</p>
          </header>

          <section>
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <span className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></span>
                <p className="font-bold text-primary">Loading your reports...</p>
              </div>
            ) : items.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {items.map(item => (
                  <ItemCard key={item._id} item={item} />
                ))}
              </div>
            ) : (
              <div className="bg-surface-container-lowest border border-dashed border-outline-variant/50 rounded-2xl p-12 text-center flex flex-col items-center justify-center max-w-2xl mx-auto shadow-sm">
                <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center text-outline mb-4">
                  <span className="material-symbols-outlined text-3xl">inventory_2</span>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">No Reports Yet</h3>
                <p className="text-on-surface-variant text-sm mb-8 max-w-sm">
                  You haven't reported any lost or found items. When you do, they will appear here so you can easily track their status.
                </p>
                <Link to="/report" className="px-8 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">add_circle</span>
                  Report an Item
                </Link>
              </div>
            )}
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default MyReports;
