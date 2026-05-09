import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function ReportLost() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !category || !location) {
      alert("Please fill out the required fields: Item Name, Category, Location.");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();

    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("type", "lost");
    if (image) {
      formData.append("image", image);
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      formData.append("userId", user._id);
    }

    try {
      await API.post("/items/lost", formData);
      alert("Item reported successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Failed to report item.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col antialiased">
      <Navbar />
      
      <div className="flex pt-16 flex-1">
        <Sidebar />
        
        <main className="flex-1 lg:ml-64 bg-surface min-h-full">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
            
            {/* Editorial Header */}
            <header className="mb-12 space-y-2">
              <h1 className="text-4xl md:text-[3.5rem] font-headline font-extrabold text-on-surface leading-tight tracking-tight -ml-1">
                Report <span className="text-primary-container">Lost Item</span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-xl">
                Provide clear details to help our campus community identify and return your missing property. Accuracy speeds up recovery.
              </p>
            </header>
            
            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-12">
              
              {/* Form Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Column: Primary Details */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-sm border border-outline-variant/5 space-y-6">
                    <h3 className="text-xl font-headline font-bold text-primary">Core Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-on-surface-variant mb-2">Item Name</label>
                        <input 
                          className="w-full bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-xl px-4 py-3.5 text-on-surface transition-all placeholder:text-outline-variant" 
                          placeholder="e.g. Blue HydroFlask Bottle" 
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-on-surface-variant mb-2">Category</label>
                          <select 
                            className="w-full bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-xl px-4 py-3.5 text-on-surface transition-all"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            <option value="Electronics">Electronics</option>
                            <option value="Bottles & Food">Bottles & Food</option>
                            <option value="Books & Stationary">Books & Stationary</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Keys & Access Cards">Keys & Access Cards</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-on-surface-variant mb-2">Date Lost</label>
                          <input 
                            className="w-full bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-xl px-4 py-3.5 text-on-surface transition-all" 
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-surface-container-low p-6 md:p-8 rounded-2xl shadow-sm border border-outline-variant/5 space-y-6">
                    <h3 className="text-xl font-headline font-bold text-primary">Detailed Description</h3>
                    <textarea 
                      className="w-full bg-surface-container-lowest border-0 focus:ring-2 focus:ring-primary rounded-xl px-4 py-3 text-on-surface transition-all placeholder:text-outline-variant resize-none" 
                      placeholder="Describe unique features, scratches, stickers, or specific contents that help identify the item..." 
                      rows="6"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                
                {/* Right Column: Visual & Location */}
                <div className="lg:col-span-5 space-y-8">
                  {/* Location Insight */}
                  <div className="bg-surface-container-high/30 p-6 md:p-8 rounded-2xl space-y-4 backdrop-blur-sm border border-outline-variant/10">
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <span className="material-symbols-outlined">location_on</span>
                      <h3 className="text-lg font-headline">Last Known Location</h3>
                    </div>
                    <input 
                      className="w-full bg-surface-container-lowest border-0 focus:ring-2 focus:ring-primary rounded-xl px-4 py-3.5 text-on-surface transition-all shadow-sm" 
                      placeholder="e.g. Science Library, 2nd Floor" 
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                    <div className="h-32 w-full rounded-xl overflow-hidden bg-surface-dim border border-outline-variant/10">
                      <img 
                        className="w-full h-full object-cover" 
                        alt="simplified map illustration showing campus buildings" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBByoNWvKjX9k5CfW_zxDB3EsNx8rg2BCIl5Hn-0JpsVAs8u_YRZrXeF7X3TCOAEaWD7s-gKuRuPYp6Z-975JjqgxmeIvn9epxc2oDSSFfDTLfofc0Yi4ObFQWHnDOTS2rLWVjSWWJnb3uooz-vIrolH2bKPjEXf33mu5tZi8778WvEJVnB3z1M5f6IPf2y32o01-TwidrQQTgmkvlvRRplG6vjYP-Nl_50GN8dLaboUjP_Cx-MwCBfOLNrxStYfi3LbEMJthYx_wg"
                      />
                    </div>
                  </div>
                  
                  {/* Upload Photo Area */}
                  <label className="group relative bg-surface-container-lowest border-2 border-dashed border-outline-variant/30 hover:border-primary transition-all p-8 rounded-2xl flex flex-col items-center justify-center gap-4 text-center cursor-pointer min-h-[300px]">
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => setImage(e.target.files[0])} 
                    />
                    {image ? (
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm">
                          <img src={URL.createObjectURL(image)} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                        <p className="font-bold text-primary truncate max-w-[200px]">{image.name}</p>
                        <span className="text-xs font-bold text-outline-variant hover:text-error transition-colors uppercase tracking-wider">Change Photo</span>
                      </div>
                    ) : (
                      <>
                        <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                          <span className="material-symbols-outlined text-3xl">add_a_photo</span>
                        </div>
                        <div className="space-y-1">
                          <p className="font-bold text-on-surface">Upload Photo</p>
                          <p className="text-sm text-on-surface-variant">Drag and drop or click to browse</p>
                          <p className="text-xs text-outline italic mt-2">Max file size: 5MB (JPG, PNG)</p>
                        </div>
                      </>
                    )}
                  </label>
                </div>
              </div>
              
              {/* Footer Action Bar */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-outline-variant/15">
                <div className="flex w-full md:w-auto items-center gap-4">
                  <button type="button" className="flex-1 md:flex-none px-8 py-4 rounded-xl bg-surface-container-highest text-on-surface font-bold hover:bg-surface-dim transition-all">
                    Save Draft
                  </button>
                  <button type="button" onClick={() => navigate("/dashboard")} className="flex-1 md:flex-none px-8 py-4 rounded-xl text-primary font-bold hover:bg-primary-fixed transition-all">
                    Cancel
                  </button>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Report"}
                </button>
              </div>
            </form>
          </div>
          
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default ReportLost;