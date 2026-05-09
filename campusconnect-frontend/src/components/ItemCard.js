import { Link } from "react-router-dom";

function ItemCard({ item }) {
  const isLost = item.status?.toLowerCase() === 'lost';
  
  return (
    <div className="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all hover:shadow-xl border border-outline-variant/10 flex flex-col h-full">
      <div className="aspect-video overflow-hidden relative bg-surface-container-highest">
        <img 
          src={item.imageUrl ? `http://localhost:5000${item.imageUrl}` : 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop'} 
          alt={item.title || "Item"} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-4 left-4">
          {isLost ? (
            <span className="bg-error-container text-on-error-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Lost</span>
          ) : (
            <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Found</span>
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-headline font-bold text-primary mb-2 line-clamp-1">{item.title}</h3>
        <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
          <span className="material-symbols-outlined text-base">location_on</span>
          <span className="line-clamp-1">{item.location}</span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-outline-variant/10">
          <span className="text-xs text-outline font-medium">Recently reported</span>
          <Link to={`/item/${item._id}`} className="text-primary font-bold text-sm hover:underline">
            {isLost ? "View Details" : "Claim Item"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;