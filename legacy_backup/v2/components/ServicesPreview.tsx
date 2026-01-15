"use client";

import { motion } from "framer-motion";
import { Shield, Shirt, Trophy, Monitor } from "lucide-react";
import Button from "./Button";

const services = [
    {
        icon: Shirt,
        title: "School Uniforms",
        description: "High-quality, durable uniforms for schools and institutions. Custom designed for comfort and identity.",
    },
    {
        icon: Shield,
        title: "Sports Goods",
        description: "Professional equipment for football, basketball, athletics, and more from top global brands.",
    },
    {
        icon: Trophy,
        title: "Trophies & Awards",
        description: "Premium medals, cups, and plaques to celebrate excellence and visualize victory.",
    },
    {
        icon: Monitor,
        title: "Branding & Signage",
        description: "Corporate branding, large format printing, and promotional items that elevate your image.",
    },
];

export default function ServicesPreview() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent text-sm font-bold uppercase tracking-wider mb-2"
                    >
                        What We Do
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-heading font-bold text-primary-dark mb-4"
                    >
                        Comprehensive Sports Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600"
                    >
                        We provide everything you need to succeed, from the gear you wear to the awards you win.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent transition-all duration-300">
                                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button href="/services" variant="outline" icon>
                        View All Services
                    </Button>
                </div>
            </div>
        </section>
    );
}
