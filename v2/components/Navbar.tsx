"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Button from "./Button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Equipment", href: "/equipment" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-primary-dark/95 backdrop-blur-md py-4 shadow-lg border-b border-white/10"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center font-heading text-xl font-bold text-white shadow-glow group-hover:scale-105 transition-transform">
                        P
                    </div>
                    <div className="font-heading text-lg font-bold leading-tight text-white">
                        PRIMEHOOD<br />
                        <span className="text-accent">SUPPLIES</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "text-sm font-medium uppercase tracking-wider relative py-2 transition-colors hover:text-accent",
                                    pathname === link.href ? "text-accent" : "text-white"
                                )}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 bottom-0 w-full h-0.5 bg-accent"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>
                    <Button href="/contact" variant="primary" className="!px-6 !py-2 !text-sm">
                        Get Quote
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary-dark/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={clsx(
                                        "text-lg font-heading font-bold uppercase tracking-wider",
                                        pathname === link.href ? "text-accent" : "text-white"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button href="/contact" variant="primary" className="w-full">
                                Get Quote
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
