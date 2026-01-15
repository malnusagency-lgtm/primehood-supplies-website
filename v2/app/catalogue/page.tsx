"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Download } from "lucide-react";
import Button from "@/components/Button";

// Product Data Type
type Product = {
  name: string;
  specs: string;
  retail: string;
  wholesale: string;
};

type CategoryData = {
  id: string;
  title: string;
  icon: string;
  products: Product[];
};

// Catalogue Data
const catalogueData: CategoryData[] = [
  {
    id: "football",
    title: "Football/Soccer",
    icon: "⚽",
    products: [
      { name: "Football Sparo Leather Size 5", specs: "Kenya, No. 4000", retail: "1,450", wholesale: "1,015" },
      { name: "Football Umbro Neo 150 Pro", specs: "FIFA Approved", retail: "6,555", wholesale: "4,589" },
      { name: "Football Mikasa PKC55", specs: "Size 5", retail: "5,500", wholesale: "3,850" },
      { name: "Football Boots Adidas Copa Mundial", specs: "Size 5-11", retail: "5,640", wholesale: "3,248" },
      { name: "Football Goalkeeper Gloves Puma", specs: "Superior", retail: "2,486", wholesale: "1,741" },
      { name: "Shin Guard Adidas", specs: "Junior", retail: "686", wholesale: "481" },
      { name: "Soccer Uniform FBT Sublimated", specs: "Plus socks, Branded", retail: "120,000", wholesale: "-" },
      { name: "Soccer Uniform UhlSports Original", specs: "Set of 20 + Socks", retail: "94,000", wholesale: "-" },
      { name: "Training Bibs Fine Knit", specs: "Senior", retail: "415", wholesale: "221" },
      { name: "Football Goal Net Heavy Duty", specs: "3MM Local, Pair", retail: "15,550", wholesale: "10,885" },
    ]
  },
  {
    id: "basketball",
    title: "Basketball",
    icon: "🏀",
    products: [
      { name: "Basketball Spalding TF 150", specs: "Size 7, Thailand", retail: "2,450", wholesale: "1,715" },
      { name: "Basketball Molten BGR7D", specs: "Orange", retail: "3,365", wholesale: "1,656" },
      { name: "Basketball Spalding Flite NBA", specs: "Indoor/Outdoor, Vietnam", retail: "5,400", wholesale: "3,780" },
      { name: "Basketball Shoes Health", specs: "Size 5-11, Model 9998-1", retail: "5,530", wholesale: "3,875" },
      { name: "Basketball Uniform Joma Men", specs: "FBT Set", retail: "70,000", wholesale: "-" },
      { name: "Basketball Uniform Peak Men", specs: "Set with Socks", retail: "65,000", wholesale: "-" },
      { name: "Basketball Rings Heavy Duty", specs: "Pair", retail: "1,429", wholesale: "1,001" },
    ]
  },
  {
    id: "volleyball",
    title: "Volleyball",
    icon: "🏐",
    products: [
      { name: "Volleyball Mikasa MVA 310", specs: "Coloured", retail: "6,200", wholesale: "4,340" },
      { name: "Volleyball Mikasa MVA 330", specs: "Coloured", retail: "4,700", wholesale: "3,290" },
      { name: "Volleyball Dunlop DS1500", specs: "Coloured", retail: "3,000", wholesale: "2,100" },
      { name: "Volleyball Net FBT HD", specs: "With Wire", retail: "7,000", wholesale: "-" },
      { name: "Volleyball Net Mika Original", specs: "Original", retail: "38,000", wholesale: "-" },
      { name: "Volleyball Uniform FBT Sublimated", specs: "New Arrival, Branded", retail: "120,000", wholesale: "-" },
      { name: "Volleyball Knee Caps Padded Sparo", specs: "Black/Red/Blue, Pair", retail: "1,000", wholesale: "700" },
    ]
  },
  {
    id: "athletics",
    title: "Athletics",
    icon: "🏃",
    products: [
      { name: "Javelin 800 GMS IAAF", specs: "Competition Approved, European", retail: "24,000", wholesale: "-" },
      { name: "Shot Put 7.26 KG", specs: "India", retail: "2,858", wholesale: "2,001" },
      { name: "Discus 2 KG Wooden Sparo", specs: "India", retail: "2,100", wholesale: "-" },
      { name: "Starting Block", specs: "India", retail: "6,000", wholesale: "4,200" },
      { name: "High Jump Post", specs: "India, Pair", retail: "9,286", wholesale: "-" },
      { name: "Hurdle", specs: "India", retail: "7,500", wholesale: "-" },
      { name: "Running Spikes Shoes Health", specs: "Size 5.5-8.5", retail: "3,310", wholesale: "-" },
      { name: "Athletic Vest & Shorts FBT", specs: "Pair", retail: "3,500", wholesale: "-" },
      { name: "Stop-Watch Electronic Sparo", specs: "8 Lap Timer", retail: "3,500", wholesale: "2,450" },
    ]
  },
  {
    id: "rugby",
    title: "Rugby",
    icon: "🏉",
    products: [
      { name: "Rugby Ball Gilbert Size 5 Omega", specs: "Match Ball", retail: "3,500", wholesale: "2,450" },
      { name: "Rugby Uniform FBT Sublimated", specs: "With Bickers + Socks, Set", retail: "200,000", wholesale: "-" },
      { name: "Rugby Uniform Samurai", specs: "Plus Socks, Set", retail: "260,000", wholesale: "-" },
      { name: "Rugby Contact Shield", specs: "Junior/Senior", retail: "14,500", wholesale: "9,450" },
      { name: "Rugby Head Guard FBT", specs: "Each", retail: "4,000", wholesale: "-" },
      { name: "Rugby Tackling Bag Senior", specs: "Each", retail: "20,000", wholesale: "14,000" },
    ]
  },
  {
    id: "hockey",
    title: "Hockey",
    icon: "🏑",
    products: [
      { name: "Hockey Stick TK 1", specs: "Premium", retail: "10,500", wholesale: "-" },
      { name: "Hockey Stick Chakarvarti CX 6000", specs: "Composite", retail: "19,720", wholesale: "13,804" },
      { name: "Hockey Ball Dimple GT Reader", specs: "Made in England", retail: "1,810", wholesale: "1,127" },
      { name: "Hockey Goalkeeper Kit Complete", specs: "With Bag, Superior Alfa", retail: "75,000", wholesale: "29,400" },
      { name: "Hockey Uniform FBT Sublimated", specs: "Plus Socks, Ladies", retail: "120,000", wholesale: "-" },
    ]
  },
  {
    id: "handball",
    title: "Handball",
    icon: "🤾",
    products: [
      { name: "Handball Kempa Size 2", specs: "Each", retail: "4,800", wholesale: "-" },
      { name: "Handball FBT Size 2 & 3", specs: "Each", retail: "5,000", wholesale: "-" },
      { name: "Handball Uniform Kempa Original", specs: "Set of 14 +2GK", retail: "64,000", wholesale: "-" },
      { name: "Handball Uniform FBT Sublimated", specs: "Plus Socks, Branded", retail: "95,000", wholesale: "-" },
      { name: "Kempa Handball Sports Shoe", specs: "Brand New, Pair", retail: "6,500", wholesale: "-" },
    ]
  },
  {
    id: "tennis",
    title: "Tennis & Badminton",
    icon: "🎾",
    products: [
      { name: "Tennis Racket Dunlop Force", specs: "Each", retail: "4,700", wholesale: "3,360" },
      { name: "Tennis Ball Dunlop Fort All Court", specs: "Tin", retail: "1,200", wholesale: "847" },
    ]
  }
];

export default function CataloguePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredData = catalogueData.filter(category => {
    // Category Filter
    if (activeCategory !== "all" && category.id !== activeCategory) return false;

    // Search Filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      // Check if category matches or any product within matches
      const categoryMatches = category.title.toLowerCase().includes(term);
      const hasProductMatch = category.products.some(p => 
        p.name.toLowerCase().includes(term) || 
        p.specs.toLowerCase().includes(term)
      );
      return categoryMatches || hasProductMatch;
    }

    return true;
  }).map(category => {
    // If searching, only return matching products within the category
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        return {
            ...category,
            products: category.products.filter(p => 
                category.title.toLowerCase().includes(term) ||
                p.name.toLowerCase().includes(term) || 
                p.specs.toLowerCase().includes(term)
            )
        };
    }
    return category;
  }).filter(cat => cat.products.length > 0);

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-primary-dark text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/p8.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/90 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Product Catalogue
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Explore our comprehensive inventory with the latest retail and wholesale pricing.
          </motion.p>
        </div>
      </section>

      {/* Control Bar */}
      <section className="sticky top-[80px] z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Category Filter (Desktop) */}
            <div className="hidden md:flex gap-2 text-sm overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-hide">
              <button
                onClick={() => setActiveCategory("all")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                  activeCategory === "all" ? "bg-primary text-white font-bold" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              {catalogueData.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                    activeCategory === cat.id ? "bg-primary text-white font-bold" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.title}
                </button>
              ))}
            </div>
            
             {/* Category Filter (Mobile Dropdown) */}
             <div className="md:hidden w-full">
                <select 
                    value={activeCategory} 
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                >
                    <option value="all">All Categories</option>
                    {catalogueData.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.icon} {cat.title}</option>
                    ))}
                </select>
             </div>
          </div>
        </div>
      </section>

      {/* Catalogue Content */}
      <section className="container mx-auto px-6 py-12">
        <AnimatePresence>
          {filteredData.length > 0 ? (
            <div className="space-y-12">
              {filteredData.map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  layout
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h2 className="text-xl font-heading font-bold text-gray-800">{category.title}</h2>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm md:text-base">
                      <thead>
                        <tr className="bg-gray-50/50 text-gray-500 uppercase text-xs font-bold tracking-wider">
                          <th className="px-6 py-3 font-medium">Product</th>
                          <th className="px-6 py-3 font-medium">Specifications</th>
                          <th className="px-6 py-3 font-medium text-right text-primary">Retail (KSH)</th>
                          <th className="px-6 py-3 font-medium text-right text-green-600">Wholesale (KSH)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {category.products.map((product, idx) => (
                          <tr key={idx} className="hover:bg-blue-50/30 transition-colors group">
                            <td className="px-6 py-4 font-medium text-gray-900 group-hover:text-primary transition-colors">
                              {product.name}
                            </td>
                            <td className="px-6 py-4 text-gray-500">
                              {product.specs}
                            </td>
                            <td className="px-6 py-4 text-right font-bold text-gray-900">
                              {product.retail}
                            </td>
                            <td className="px-6 py-4 text-right font-medium text-green-700">
                              {product.wholesale !== "-" ? product.wholesale : <span className="text-gray-300">-</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
             <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-400">No products found</h3>
                <p className="text-gray-400">Try adjusting your search terms</p>
                <button 
                  onClick={() => {setSearchTerm(""); setActiveCategory("all");}}
                  className="mt-4 text-primary font-bold hover:underline"
                >
                  Clear Filters
                </button>
             </div>
          )}
        </AnimatePresence>

        <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6">Need a custom quote for a large order?</p>
            <div className="flex justify-center gap-4">
                <Button href="/contact" variant="primary">Request Custom Quote</Button>
                <Button href="https://wa.me/254722801926" variant="outline">WhatsApp Us</Button>
            </div>
        </div>
      </section>
    </main>
  );
}
