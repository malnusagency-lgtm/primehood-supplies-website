import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-dark text-white pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center font-heading text-2xl font-bold text-white">
                                P
                            </div>
                            <div className="font-heading text-xl font-bold leading-tight">
                                PRIMEHOOD<br />
                                <span className="text-accent">SUPPLIES</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Kenya&apos;s premier sports consultancy and equipment supplier. We outfit champions and build sporting excellence.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    aria-label={`Social media link ${i + 1}`}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {["Home", "About Us", "Services", "Equipment", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-gray-400 hover:text-accent transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-heading text-lg font-bold mb-6">Our Services</h4>
                        <ul className="space-y-4">
                            <li className="text-gray-400">School Uniforms</li>
                            <li className="text-gray-400">Sports Branding</li>
                            <li className="text-gray-400">Corporate Signage</li>
                            <li className="text-gray-400">Trophies & Awards</li>
                            <li className="text-gray-400">Sports Equipment</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-heading text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <MapPin className="w-6 h-6 text-accent shrink-0" />
                                <span className="text-gray-400">
                                    Rehema Place, Block F Suite 49<br />
                                    Ngong Road, Nairobi
                                </span>
                            </li>
                            <li className="flex gap-4">
                                <Phone className="w-6 h-6 text-accent shrink-0" />
                                <span className="text-gray-400">+254 722 801 926</span>
                            </li>
                            <li className="flex gap-4">
                                <Mail className="w-6 h-6 text-accent shrink-0" />
                                <span className="text-gray-400">primehoodsupplies@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>© {currentYear} Prime Hood Supplies. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
