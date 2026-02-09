"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./button";
import { CheckCircle2 } from "lucide-react";

export default function AboutPreview() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border-[8px] border-white">
                            <Image
                                src="/images/p1.jpeg"
                                alt="F.G. Kibe - Director"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                quality={85}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />

                            {/* Quote Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white">
                                <p className="font-heading italic font-medium text-lg mb-2">
                                    &quot;My Sport, My Friends And I&quot;
                                </p>
                                <p className="text-sm text-accent uppercase tracking-wider font-bold">
                                    — F.G. Kibe, Director
                                </p>
                            </div>
                        </div>

                        {/* Decorative Dots */}
                        <div className="absolute -z-10 top-10 -left-10 w-24 h-24 grid grid-cols-5 gap-2">
                            {[...Array(25)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-primary/30 rounded-full" />
                            ))}
                        </div>

                        <div className="absolute -z-10 bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="text-accent text-sm font-bold uppercase tracking-wider mb-4">
                            About Primehood
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-6 leading-tight">
                            Decades of <span className="text-primary">Excellence</span> in Sports Consultancy
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Prime Hood Supplies & Evolution Sports House Enterprises is Kenya&apos;s leading sports consultancy, directed by F.G. Kibe. We specialize in providing high-quality sports equipment, branding services, and institutional supplies.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "Authorized dealer for global brands (Adidas, Nike, Puma)",
                                "Specialized school uniform manufacturing",
                                "Corporate branding and signage experts",
                                "Trusted by leading schools and clubs across Kenya"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button href="/about" variant="primary" icon>
                            More About Us
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
