import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Product Data
const products = [
    {
        id: 1,
        name: "Professional Football Gear",
        category: "football",
        description: "Superior quality gloves, boots, and FIFA approved match balls.",
        image: "/images/football_gear.png",
        brands: ["Puma", "Adidas", "Nike"],
        tag: "Popular"
    },
    {
        id: 2,
        name: "Custom Team Uniforms",
        category: "apparel",
        description: "Complete team kits including jerseys, shorts, and socks. Fully sublimated.",
        image: "/images/uniforms.png",
        brands: ["FBT", "Custom"],
        tag: "Best Seller"
    },
    {
        id: 3,
        name: "Custom Trophies & Medals",
        category: "accessories",
        description: "High-quality awards for tournaments. Engraving available.",
        image: "/images/trophies.png",
        brands: ["Custom"],
        tag: null
    },
    {
        id: 4,
        name: "Athletics Training Gear",
        category: "athletics",
        description: "Hurdles, starting blocks, and training spikes.",
        image: "/images/athletics_gear.png",
        brands: ["Generic"],
        tag: null
    },

];

const categories = [
    { id: "all", label: "All Products" },
    { id: "football", label: "Football" },
    { id: "basketball", label: "Basketball" },
    { id: "volleyball", label: "Volleyball" },
    { id: "athletics", label: "Athletics" },
    { id: "apparel", label: "Apparel" },
    { id: "accessories", label: "Accessories" }
];

export default function Equipment() {
    const [filter, setFilter] = useState("all");

    const filteredProducts = filter === "all"
        ? products
        : products.filter(p => p.category === filter);

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-primary-dark text-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="/images/p6.jpeg"
                        alt="Equipment Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent text-sm font-bold uppercase tracking-wider mb-4"
                    >
                        Premium Gear
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl font-heading font-bold text-white mb-6"
                    >
                        Our Equipment
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Browse our extensive range of sports equipment from the world's leading brands.
                    </motion.p>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="sticky top-[80px] z-30 py-6 bg-white/80 backdrop-blur-md border-b border-gray-100 mb-12">
                <div className="container mx-auto px-6 overflow-x-auto">
                    <div className="flex justify-start md:justify-center gap-2 min-w-max pb-2 md:pb-0">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${filter === cat.id
                                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="container mx-auto px-6 mb-20">
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group flex flex-col"
                            >
                                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {product.tag && (
                                        <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                                            {product.tag}
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-accent text-xs font-bold uppercase tracking-wider mb-2">
                                        {product.category}
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
                                        {product.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {product.brands.map((brand) => (
                                            <span key={brand} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                {brand}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 mt-auto">
                                        <Link
                                            to="/contact"
                                            className="flex items-center justify-center px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors"
                                        >
                                            Inquire
                                        </Link>
                                        <a
                                            href="https://wa.me/254722801926"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center px-4 py-2 border border-gray-200 text-gray-700 text-sm font-bold rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No products found in this category yet.</p>
                        <button
                            onClick={() => setFilter("all")}
                            className="mt-4 text-primary font-bold hover:underline"
                        >
                            View All Products
                        </button>
                    </div>
                )}

                <div className="mt-12 text-center">
                    <p className="text-gray-500 mb-4">Looking for full pricing details?</p>
                    <Link
                        to="/catalogue"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                    >
                        View Full Pricing Catalogue →
                    </Link>
                </div>
            </section>

            {/* Brands Marquee Placeholder */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-heading font-bold text-gray-400 mb-8 uppercase tracking-widest">Authorized Distributor For</h2>
                    <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {["Adidas", "Nike", "Puma", "Mizuno", "Reebok", "Under Armour"].map(brand => (
                            <span key={brand} className="text-3xl font-heading font-bold text-gray-400 hover:text-primary transition-colors cursor-default">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary-dark text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-heading font-bold mb-4">Need Bulk Equipment?</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Schools, teams, and organizations get special wholesale pricing on bulk orders.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] hover:-translate-y-1 transition-all">Request Wholesale Quote</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
