"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Shirt, Trophy, Monitor, Activity } from "lucide-react";
import Button from "@/components/Button";

const services = [
    {
        id: "uniforms",
        title: "School Uniforms & PE Kits",
        subtitle: "Education Sector",
        description: "High-quality school uniforms and physical education kits custom-made to your institution's specifications.",
        image: "/images/WhatsApp Image 2026-01-13 at 11.45.13 AM.jpeg",
        icon: Shirt,
        features: [
            "Custom designed to match school colors and logos",
            "Durable, comfortable fabrics for active students",
            "Complete PE kits including shorts, t-shirts, and tracksuits",
            "Bulk orders with competitive pricing",
            "Sports shoes and accessories included"
        ],
        pricingNote: "💡 Bulk Discount: Orders of 100+ units receive special institutional pricing."
    },
    {
        id: "sports",
        title: "Sports Goods & Equipment",
        subtitle: "All Sports",
        description: "Comprehensive range of sports equipment from world-leading brands for all types of sports and activities.",
        image: "/images/p22.jpeg",
        icon: Activity,
        features: [
            "Football: Balls, boots, goalkeeper gloves, goals, training gear",
            "Basketball: Balls, hoops, shoes, jerseys",
            "Volleyball: Balls, nets, poles, knee pads",
            "Athletics: Track equipment, training gear, shoes",
            "Tennis & Badminton: Rackets, balls, nets, accessories"
        ],
        pricingNote: "🏷️ Brands: Adidas, Nike, Puma, Mizuno, Reebok, Kempa, Uhlsport, Admiral, and more."
    },
    {
        id: "trophies",
        title: "Trophies, Medals & Awards",
        subtitle: "Awards & Recognition",
        description: "Celebrate achievements with stunning custom trophies, medals, and awards for sports events and corporate functions.",
        image: "/images/WhatsApp Image 2026-01-13 at 12.10.08 PM.jpeg",
        icon: Trophy,
        features: [
            "Gold, silver, and bronze medals in various designs",
            "Custom engraving with names, dates, and logos",
            "Championship cups and floating trophies",
            "Crystal awards and plaques",
            "Ribbons, lanyards, and certificate holders"
        ],
        pricingNote: "⏰ Fast Turnaround: Rush orders available for last-minute events."
    },
    {
        id: "branding",
        title: "Branding, Signage & Promotional Items",
        subtitle: "Corporate & Events",
        description: "Complete branding solutions to elevate your team's identity and promote your events effectively.",
        image: "/images/WhatsApp Image 2026-01-13 at 12.30.00 PM.jpeg",
        icon: Monitor,
        features: [
            "Team logo design and jersey printing",
            "Event banners, flags, and backdrops",
            "Branded sports bags, water bottles, and caps",
            "Vehicle branding and signage",
            "Corporate branded merchandise"
        ],
        pricingNote: "🎨 Full Service: From design concept to final production."
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-primary-dark text-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <Image
                        src="/images/p7.jpeg"
                        alt="Services Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent text-sm font-bold uppercase tracking-wider mb-4"
                    >
                        What We Offer
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl font-heading font-bold text-white mb-6"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Comprehensive sports solutions from uniforms to equipment, branding to awards.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid Navigation */}
            <section className="py-12 bg-white sticky top-[80px] z-30 shadow-sm border-b border-gray-100 hidden md:block">
                <div className="container mx-auto px-6">
                    <div className="flex justify-center gap-8">
                        {services.map((service) => (
                            <a
                                key={service.id}
                                href={`#${service.id}`}
                                className="flex items-center gap-3 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <service.icon className="w-5 h-5" />
                                </div>
                                <span className="font-heading font-bold text-gray-700 group-hover:text-primary transition-colors">
                                    {service.title.split(" ")[0]}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detail Sections */}
            <div className="container mx-auto px-6 py-12 space-y-24">
                {services.map((service, index) => (
                    <section id={service.id} key={service.id} className="scroll-mt-32">
                        <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={index % 2 === 1 ? 'md:col-start-2' : ''}
                            >
                                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                                </div>
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={index % 2 === 1 ? 'md:col-start-1' : ''}
                            >
                                <span className="text-accent text-sm font-bold uppercase tracking-wider mb-2 block">
                                    {service.subtitle}
                                </span>
                                <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="space-y-4 mb-8">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-8 text-sm text-blue-800">
                                    {service.pricingNote}
                                </div>

                                <Button href="/contact" variant="primary">
                                    Request Quote
                                </Button>
                            </motion.div>
                        </div>
                    </section>
                ))}
            </div>

            {/* CTA */}
            <section className="py-20 bg-primary-dark text-white mt-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-heading font-bold mb-6">Need a Custom Solution?</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Every team is unique. Let's discuss your specific requirements and create a tailored solution.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button href="/contact" variant="primary">Get a Free Quote</Button>
                        <Button href="tel:+254722801926" variant="outline">Call: 0722 801 926</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
