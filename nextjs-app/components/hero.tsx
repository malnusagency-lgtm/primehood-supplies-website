"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import Button from "./button";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current || !textRef.current || !imageRef.current) return;

        const ctx = gsap.context(() => {
            // Text reveal animation
            gsap.from(textRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                delay: 0.2,
            });

            // Image reveal animation
            gsap.from(imageRef.current, {
                opacity: 0,
                scale: 0.9,
                duration: 1,
                ease: "power3.out",
                delay: 0.4,
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center overflow-hidden bg-primary-dark pt-20"
        >
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/p3.jpeg"
                    alt="Sports Background"
                    fill
                    className="object-cover opacity-30"
                    priority
                    quality={85}
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/80 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    ref={textRef}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-accent text-sm font-medium uppercase tracking-wider">
                            Premier Sports Consultancy
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                        Elevating <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
                            Kenyan Sports
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                        We outfit champions and build sporting excellence. From school uniforms to professional equipment, Primehood is your trusted partner in victory.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button href="/contact" variant="primary" icon>
                            Start Your Journey
                        </Button>
                        <Button href="/equipment" variant="secondary">
                            View Catalog
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 flex gap-12 border-t border-white/10 pt-8">
                        <div>
                            <div className="text-4xl font-heading font-bold text-white mb-1">
                                10<span className="text-accent">+</span>
                            </div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl font-heading font-bold text-white mb-1">
                                500<span className="text-accent">+</span>
                            </div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">Clients Served</div>
                        </div>
                        <div>
                            <div className="text-4xl font-heading font-bold text-white mb-1">
                                50<span className="text-accent">+</span>
                            </div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">Partner Brands</div>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image / Visual */}
                <motion.div
                    ref={imageRef}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-[400px] h-[500px] mx-auto">
                        {/* Main Image */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-20 border-[4px] border-white/10">
                            <Image
                                src="/images/p1.jpeg"
                                alt="F.G. Kibe - Director"
                                fill
                                className="object-cover"
                                priority
                                quality={90}
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute inset-[-20px] bg-gradient-to-tr from-primary to-accent rounded-2xl blur-3xl opacity-40 z-10 animate-pulse" />

                        {/* Floating Card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl z-30 flex items-center gap-4 shadow-xl"
                        >
                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-dark font-bold text-xl">
                                🏆
                            </div>
                            <div>
                                <div className="text-white font-bold text-lg">Award Winning</div>
                                <div className="text-gray-300 text-xs uppercase">Consultancy</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
