"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";

// Product Data
const products = [
    {
        id: 1,
        name: "Goalkeeper Gloves",
        category: "football",
        description: "Professional goalkeeper gloves with excellent grip and protection.",
        image: "/images/p22.jpeg",
        brands: ["Adidas", "Nike", "Uhlsport", "Reusch"],
        tag: "Popular"
    },
    {
        id: 2,
        name: "Team Jerseys & Kits",
        category: "apparel",
        description: "Complete team kits with customizable designs and logos.",
        image: "/images/WhatsApp Image 2026-01-13 at 11.45.13 AM.jpeg",
        brands: ["Adidas", "Puma", "Nike", "Kelme"],
        tag: "Best Seller"
    },
    {
        id: 3,
        name: "Trophies & Medals",
        category: "accessories",
        description: "Custom trophies and medals for tournaments and events.",
        image: "/images/WhatsApp Image 2026-01-13 at 12.10.08 PM.jpeg",
        brands: ["Custom Made", "Engraving"],
        tag: null
    },
    {
        id: 4,
        name: "Football Boots",
        category: "football",
        description: "Professional football boots for all playing surfaces.",
        image: "/images/p6.jpeg",
        brands: ["Adidas", "Nike", "Puma"],
        tag: null
    },
    {
        id: 5,
        name: "Match & Training Balls",
        category: "football",
        description: "FIFA-approved match balls and durable training balls.",
        image: "/images/p7.jpeg",
        brands: ["Adidas", "Nike", "Puma", "Molten"],
        tag: "New"
    },
    {
        id: 6,
        name: "Training Equipment",
        category: "athletics",
        description: "Cones, ladders, hurdles, and comprehensive training gear.",
        image: "/images/p3.jpeg",
        brands: ["Adidas", "Nike", "Generic"],
        tag: null
    },
    {
        id: 7,
        name: "Sports Bags",
        category: "accessories",
        description: "Team bags, kit bags, and individual sports bags.",
        image: "/images/p8.jpeg",
        brands: ["Adidas", "Nike", "Puma"],
        tag: null
    },
    {
        id: 8,
        name: "Tracksuits & Warmups",
        category: "apparel",
        description: "Professional tracksuits for teams and institutions.",
        image: "/images/p1.jpeg",
        brands: ["Adidas", "Puma", "Under Armour"],
        tag: null
    }
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

export default function EquipmentPage() {
    const [filter, setFilter] = useState("all");

    const filteredProducts = filter === "all"
        ? products
        : products.filter(p => p.category === filter);

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-primary-dark text-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/images/p6.jpeg"
                        alt="Equipment Background"
                        fill
                        className="object-cover"
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
                        Equipment Catalog
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
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                                            href="/contact"
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
            </section>

            {/* Brands Marquee Placeholder (Reuse component later if needed or just simple grid) */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-heading font-bold text-gray-400 mb-8 uppercase tracking-widest">Authorized Distributor For</h2>
                    <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Simple Text representation for now as per original */}
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
                        <Button href="/contact" variant="primary">Request Wholesale Quote</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
