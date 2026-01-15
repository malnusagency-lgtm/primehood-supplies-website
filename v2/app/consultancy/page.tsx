"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ClipboardList, PenTool, TrendingUp, Users } from "lucide-react";
import Button from "@/components/Button";
import Image from "next/image";

const services = [
    {
        icon: ClipboardList,
        title: "School Sports Program Setup",
        description: "Expert guidance on establishing comprehensive sports programs for schools. We help with curriculum planning, equipment lists, and budget optimization to ensure successful student engagement."
    },
    {
        icon: PenTool,
        title: "Facility Planning & Design",
        description: "Professional advice on sports facility construction and upgrades. From pitch layout to gym equipment selection, we ensure your facilities meet international standards and safety requirements."
    },
    {
        icon: Users,
        title: "Corporate Team Building",
        description: "End-to-end solutions for corporate sports days and team-building events. We handle equipment supply, logistical planning, and branded merchandise to boost team morale."
    },
    {
        icon: TrendingUp,
        title: "Equipment Procurement Strategy",
        description: "Helping institutions streamline their procurement processes. We leverage our industry connections to source high-quality gear at the best value, preventing wastage and ensuring durability."
    }
];

export default function ConsultancyPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-primary-dark text-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/images/p3.jpeg"
                        alt="Consultancy Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent text-sm font-bold uppercase tracking-wider mb-4"
                    >
                        Professional Expertise
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl font-heading font-bold text-white mb-6"
                    >
                        Sports Consultancy
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Leverage decades of industry experience to elevate your sports infrastructure and programs.
                    </motion.p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
                    <div className="relative w-48 h-48 shrink-0 rounded-full overflow-hidden border-4 border-gray-100 shadow-inner">
                        <Image
                            src="/images/p1.jpeg"
                            alt="F.G. Kibe"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Why Consult With Us?</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            "At Primehood, we don't just sell equipment; we provide solutions. Our consultancy services are designed to help schools, corporates, and facility managers make informed decisions that save money and maximize impact."
                        </p>
                        <div className="font-bold text-primary-dark">
                            — The Primehood Team
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="pb-20 container mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-center text-primary-dark mb-12">Our Areas of Expertise</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary/30 transition-all group"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Booking Form CTA */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-accent font-bold uppercase tracking-wider mb-2 block">Book a Session</span>
                            <h2 className="text-4xl font-heading font-bold mb-6">Ready to Transform Your Sports Project?</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Schedule a free initial discovery call with our consultants. We'll discuss your needs, challenges, and how we can help you achieve your goals.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-accent" />
                                    <span className="text-gray-300">Detailed needs assessment</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-accent" />
                                    <span className="text-gray-300">Budget planning assistance</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-accent" />
                                    <span className="text-gray-300">Customized solution proposals</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6">Request Consultation</h3>
                            <form className="space-y-4" action="/contact"> {/* Redirect to contact for now as it handles forms */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Organization Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. Hillcrest School" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Contact Person</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Area of Interest</label>
                                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none">
                                        <option>School Program Setup</option>
                                        <option>Facility Planning</option>
                                        <option>Equipment Procurement</option>
                                        <option>Corporate Event</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <Button href="/contact" variant="primary" className="w-full justify-center">
                                    Continue to Booking →
                                </Button>
                                <p className="text-xs text-center text-gray-500 mt-4">
                                    You'll be redirected to our contact form to finalize details.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
