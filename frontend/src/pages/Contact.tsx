import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CreditCard, Send, MessageCircle } from "lucide-react";
import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Contact() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setFormStatus("success");
            // Reset after 3 seconds
            setTimeout(() => setFormStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-primary-dark text-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/p7.jpeg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent text-sm font-bold uppercase tracking-wider mb-4"
                    >
                        Get In Touch
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl font-heading font-bold text-white mb-6"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Have questions or ready to place an order? We're here to help you equip your team for success.
                    </motion.p>
                </div>
            </section>

            {/* Info Cards */}
            <section className="relative z-20 -mt-16 container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { icon: Phone, title: "Call Us", text: "+254 722 801 926", link: "tel:+254722801926" },
                        { icon: Mail, title: "Email Us", text: "primehoodsupplies@gmail.com", link: "mailto:primehoodsupplies@gmail.com" },
                        { icon: MessageCircle, title: "WhatsApp", text: "Quick Response Guaranteed", link: "https://wa.me/254722801926" },
                        { icon: MapPin, title: "Visit Us", text: "Rehema Place, Ngong Rd", link: "#map" }
                    ].map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.link}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all text-center group"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h4 className="font-heading font-bold text-gray-900 mb-2">{item.title}</h4>
                            <p className="text-gray-500 text-sm">{item.text}</p>
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Left Column: Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">Our Office</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Visit our showroom to see our full range of sports equipment and discuss your requirements in person.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 mb-1">Office Address</h5>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Rehema Place Block F Suite 49,<br />
                                        Opposite Nakumatt Prestige,<br />
                                        Ngong Road Ring Road Junction,<br />
                                        Nairobi, Kenya
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 mb-1">Postal Address</h5>
                                    <p className="text-gray-600 text-sm">
                                        P.O. Box 5403-00200<br />
                                        Nairobi, Kenya
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-[300px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-md mb-8">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819373833946!2d36.78879841475388!3d-1.2840299990576378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6a0c2a16b%3A0x8ec9e7c2a8b4e45d!2sNgong%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1673655890123!5m2!1sen!2ske"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Payment & Hours */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-100 p-6 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <h4 className="font-bold text-gray-900">Business Hours</h4>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Mon - Fri</span>
                                        <span className="font-bold text-gray-900">8:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Saturday</span>
                                        <span className="font-bold text-gray-900">9:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Sunday</span>
                                        <span className="font-bold text-red-500">Closed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-6 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <CreditCard className="w-6 h-6 text-primary" />
                                    <h4 className="font-bold text-gray-900">Payment Methods</h4>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center justify-between">
                                        <span className="text-sm font-bold text-gray-600">M-Pesa Paybill</span>
                                        <span className="text-sm font-bold text-green-600">522533</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center justify-between">
                                        <span className="text-sm font-bold text-gray-600">KCB Till</span>
                                        <span className="text-sm font-bold text-blue-600">7950831</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
                    >
                        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Send Us a Message</h3>
                        <p className="text-gray-500 mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" required placeholder="John" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" required placeholder="Doe" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" required placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Service Interested In</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white">
                                    <option value="">Select a service...</option>
                                    <option value="school-uniforms">School Uniforms</option>
                                    <option value="sports-equipment">Sports Equipment</option>
                                    <option value="trophies">Trophies & Awards</option>
                                    <option value="branding">Branding & Signage</option>
                                    <option value="wholesale">Wholesale Order</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea required rows={5} placeholder="Tell us about your needs..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus === 'submitting' || formStatus === 'success'}
                                className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider text-white transition-all transform hover:-translate-y-1 ${formStatus === 'success'
                                    ? 'bg-green-500 hover:bg-green-600'
                                    : 'bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl'
                                    }`}
                            >
                                {formStatus === 'submitting' ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </span>
                                ) : formStatus === 'success' ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        Message Sent!
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                                        Send Message
                                        <Send className="w-4 h-4" />
                                    </span>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
