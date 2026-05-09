import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const categoriesData = [
  {
    name: 'Electronics',
    icon: 'devices',
    description: 'Phones, laptops, chargers, and other electronic devices.',
    color: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
    lightColor: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
  },
  {
    name: 'Accessories',
    icon: 'watch',
    description: 'Watches, jewelry, sunglasses, and other personal accessories.',
    color: 'bg-purple-500',
    hoverColor: 'hover:bg-purple-600',
    lightColor: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
  },
  {
    name: 'Books & Supplies',
    icon: 'menu_book',
    description: 'Textbooks, notebooks, stationery, and academic materials.',
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
    lightColor: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
  },
  {
    name: 'Clothing',
    icon: 'checkroom',
    description: 'Jackets, sweaters, hats, and other articles of clothing.',
    color: 'bg-orange-500',
    hoverColor: 'hover:bg-orange-600',
    lightColor: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
  },
  {
    name: 'Documents',
    icon: 'description',
    description: 'ID cards, folders, important papers, and documents.',
    color: 'bg-red-500',
    hoverColor: 'hover:bg-red-600',
    lightColor: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
  },
  {
    name: 'Keys',
    icon: 'key',
    description: 'Room keys, car keys, and keychains.',
    color: 'bg-yellow-500',
    hoverColor: 'hover:bg-yellow-600',
    lightColor: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
  },
  {
    name: 'Bags & Wallets',
    icon: 'backpack',
    description: 'Backpacks, purses, wallets, and bags.',
    color: 'bg-indigo-500',
    hoverColor: 'hover:bg-indigo-600',
    lightColor: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'
  },
  {
    name: 'Others',
    icon: 'category',
    description: 'Items that do not fit into the other categories.',
    color: 'bg-slate-500',
    hoverColor: 'hover:bg-slate-600',
    lightColor: 'bg-slate-100 text-slate-600 dark:bg-slate-900/30 dark:text-slate-400'
  }
];

function Categories() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <Navbar />
      
      <div className="flex pt-16">
        <Sidebar />
        
        <main className="flex-1 lg:ml-64 p-4 md:p-8 bg-surface overflow-x-hidden min-h-[calc(100vh-4rem)]">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight mb-4">
              Item Categories
            </h1>
            <p className="text-on-surface-variant max-w-2xl text-lg">
              Browse lost and found items by category. Select a category below to filter items and find what you're looking for faster.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 gap-6 pb-12">
            {categoriesData.map((cat, index) => (
              <div 
                key={index} 
                onClick={() => navigate(`/dashboard?category=${cat.name}`)}
                className="group relative bg-white dark:bg-slate-800/50 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-100 dark:border-slate-700/50 hover:-translate-y-1 overflow-hidden"
              >
                {/* Background decorative element */}
                <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full ${cat.color} opacity-10 group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all ${cat.lightColor}`}>
                    <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-headline font-bold text-slate-900 dark:text-white mb-3">
                    {cat.name}
                  </h3>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {cat.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Browse Category
                    <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Categories;
