import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ItemCard from "../components/ItemCard";
import Footer from "../components/Footer";

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [nearbyItems, setNearbyItems] = useState([]);

  useEffect(() => {
    API.get(`/items/${id}`).then(res => setItem(res.data)).catch(console.error);
    API.get('/items').then(res => setNearbyItems(res.data.slice(0, 4))).catch(console.error);
  }, [id]);

  const handleClaim = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const message = prompt("Why is this item yours? (Or how can you return it?)");
      if (message === null) return; 
      
      await API.post("/claims", {
        itemId: item._id,
        message,
        claimantUserId: user._id
      });
      alert("Request sent successfully!");
    } catch (err) {
      console.log(err);
      alert("Failed to send request.");
    }
  };

  if (!item) return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></span>
        <p className="font-bold text-primary">Loading Item...</p>
      </div>
    </div>
  );

  const isLost = item.status?.toLowerCase() === 'lost';

  return (
    <div className="bg-surface text-on-surface font-body antialiased min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex pt-16 flex-1">
        <Sidebar />
        
        <main className="flex-1 lg:ml-64 p-4 md:p-8 max-w-7xl mx-auto w-full">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-xs font-medium text-on-surface-variant mb-8 px-2">
            <Link to="/dashboard" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <Link to="/dashboard" className="hover:text-primary transition-colors">Items</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-bold line-clamp-1">{item.title}</span>
          </nav>
          
          {/* Item Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Gallery Left */}
            <div className="lg:col-span-7 space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-highest border border-outline-variant/10 shadow-sm relative group">
                <img 
                  className="w-full h-full object-cover" 
                  alt={item.title} 
                  src={item.imageUrl ? `http://localhost:5000${item.imageUrl}` : 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop'}
                />
                <div className="absolute top-4 left-4">
                  {isLost ? (
                    <span className="px-4 py-1.5 bg-error-container text-on-error-container rounded-full text-xs font-bold tracking-wide uppercase">Lost</span>
                  ) : (
                    <span className="px-4 py-1.5 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-bold tracking-wide uppercase">Found</span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden bg-surface-container-highest group cursor-pointer border border-outline-variant/10">
                  <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="thumbnail 1" src={item.imageUrl ? `http://localhost:5000${item.imageUrl}` : 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop'}/>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-surface-container-highest group cursor-pointer border border-outline-variant/10">
                  <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="thumbnail 2" src={item.imageUrl ? `http://localhost:5000${item.imageUrl}` : 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop'}/>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-surface-container-low flex items-center justify-center border border-outline-variant/15 text-on-surface-variant font-bold text-sm hover:bg-surface-container-high transition-colors cursor-pointer">
                  +2 Photos
                </div>
              </div>
            </div>

            {/* Details Right */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold font-headline text-primary tracking-tight mb-3">{item.title}</h1>
                <p className="text-on-surface-variant flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  Reported Recently • {item.location}
                </p>
              </div>
              
              {/* Info Grid */}
              <div className="bg-surface-container-low rounded-2xl p-6 lg:p-8 space-y-6 border border-outline-variant/5 shadow-sm">
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-outline tracking-widest mb-1">Category</label>
                    <p className="text-primary font-semibold">{item.category || "Uncategorized"}</p>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-outline tracking-widest mb-1">Condition</label>
                    <p className="text-primary font-semibold">Unknown</p>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-outline tracking-widest mb-1">Status</label>
                    <p className="text-primary font-semibold">{item.status}</p>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-outline tracking-widest mb-1">Location</label>
                    <p className="text-primary font-semibold line-clamp-1">{item.location}</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-outline-variant/10">
                  <label className="block text-[10px] uppercase font-bold text-outline tracking-widest mb-2">Description</label>
                  <p className="text-on-surface text-sm leading-relaxed whitespace-pre-wrap">
                    {item.description || "No detailed description provided."}
                  </p>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-col gap-3">
                {isLost ? (
                  <button onClick={handleClaim} className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-bold text-lg shadow-lg hover:opacity-90 active:scale-[0.99] transition-all">
                    I Found This Item
                  </button>
                ) : (
                  <button onClick={handleClaim} className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-bold text-lg shadow-lg hover:opacity-90 active:scale-[0.99] transition-all">
                    Claim This Item
                  </button>
                )}
                
                <button className="w-full py-4 bg-surface-container-highest text-on-surface rounded-xl font-bold text-lg hover:bg-surface-dim transition-all shadow-sm border border-outline-variant/10">
                  Contact {isLost ? 'Owner' : 'Finder'}
                </button>
              </div>
              
              <div className="flex items-center gap-4 px-4 py-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary font-bold">
                  {(item.user?.fullName || "A")[0].toUpperCase()}
                </div>
                <div className="text-xs">
                  <p className="text-outline font-medium">{isLost ? 'Lost by' : 'Found by'}</p>
                  <p className="text-primary font-bold">{item.user?.fullName || "Anonymous Student"}</p>
                </div>
                <div className="ml-auto">
                  <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded-lg text-[10px] font-bold">VERIFIED USER</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Nearby Discoveries */}
          {nearbyItems.length > 0 && (
            <section className="mt-24 mb-12">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-3xl font-extrabold font-headline text-primary tracking-tight">Nearby Discoveries</h2>
                  <p className="text-on-surface-variant mt-1">Items recently reported on campus.</p>
                </div>
                <Link to="/dashboard" className="text-on-primary-fixed-variant font-bold text-sm hover:underline hidden sm:block">View All</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {nearbyItems.map(nearbyItem => (
                  <ItemCard key={nearbyItem._id} item={nearbyItem} />
                ))}
              </div>
            </section>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default ItemDetail;