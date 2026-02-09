"use client";

import { motion } from "framer-motion";

const brands = [
    "Adidas", "Nike", "Puma", "Reebok", "Kempa", "Mizuno", "Admiral", "Kelme", "Uhlsport", "FBT", "Under Armour", "Kappa"
];

export default function Brands() {
    return (
        <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                    Trusted by Top Brands
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex gap-16 whitespace-nowrap py-4 px-8"
                >
                    {[...brands, ...brands].map((brand, index) => (
                        <span
                            key={index}
                            className="text-2xl font-heading font-bold text-gray-300 hover:text-primary transition-colors cursor-default"
                        >
                            {brand}
                        </span>
                    ))}
                </motion.div>

                {/* Gradients to fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            </div>
        </section>
    );
}
