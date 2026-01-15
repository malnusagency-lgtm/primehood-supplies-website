import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Award, Calendar, Users, MapPin } from "lucide-react";

export default function About() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Page Hero */}
            <section className="relative pt-32 pb-20 bg-primary-dark overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="/images/p22.jpeg"
                        alt="Sports Equipment Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary-dark/50" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent text-sm font-bold uppercase tracking-wider mb-4"
                    >
                        Our Story
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-heading font-bold text-white mb-6"
                    >
                        About Prime Hood Supplies
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        Kenya's premier sports equipment supplier, delivering excellence since 2018. We equip the future champions of tomorrow.
                    </motion.p>
                </div>
            </section>

            {/* Director Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Image Composition */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white">
                                <img
                                    src="/images/WhatsApp Image 2026-01-13 at 12.30.00 PM.jpeg"
                                    alt="F.G. Kibe"
                                    width={600}
                                    height={800}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3">
                                <div className="bg-accent/10 p-3 rounded-full text-accent font-bold text-2xl">
                                    6+
                                </div>
                                <div>
                                    <div className="text-gray-900 font-bold text-sm">Years Leading</div>
                                    <div className="text-gray-500 text-xs uppercase">The Industry</div>
                                </div>
                            </div>
                            <div className="absolute -top-10 -left-10 w-full h-full bg-accent/5 rounded-3xl -z-10" />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-accent text-sm font-bold uppercase tracking-wider mb-2">
                                Meet The Director
                            </div>
                            <h2 className="text-4xl font-heading font-bold text-primary-dark mb-4">
                                F.G. Kibe
                            </h2>
                            <h3 className="text-xl font-medium text-gray-600 mb-6">
                                Director & Founder, Prime Hood Supplies & Evolution Sports House Enterprises
                            </h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                                <p>
                                    F.G. Kibe is a visionary entrepreneur with a passion for sports and excellence. With over 6 years of experience in the sports equipment industry, he has transformed Prime Hood Supplies into one of Kenya's most reliable suppliers of quality sports gear.
                                </p>
                                <p>
                                    His journey began with a simple belief: every athlete, every team, and every school deserves access to quality sports equipment. This vision has led to partnerships with global brands like Adidas, Nike, Puma, and many more.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Sports Industry Expert",
                                    "Global Brand Partnerships",
                                    "Customer-First Approach",
                                    "Quality Assurance"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span className="text-gray-800 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-bold text-primary-dark mb-4">
                            The Prime Hood Story
                        </h2>
                        <p className="text-gray-600">From a small startup to Kenya's trusted sports equipment supplier.</p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { year: "2018", title: "The Beginning", text: "Prime Hood Supplies was founded with a mission to provide quality sports equipment to schools and teams in Kenya. Started with a small inventory and big dreams." },
                            { year: "2020", title: "Brand Partnerships", text: "Secured partnerships with major global sports brands including Adidas, Nike, Puma, and Mizuno. Expanded our product range significantly." },
                            { year: "2022", title: "Expansion", text: "Opened our flagship store at Rehema Place, Nairobi. Added branding, signage, and promotional items to our service offerings." },
                            { year: "2024", title: "500+ Teams Equipped", text: "Reached a milestone of equipping over 500 teams and institutions. Expanded nationwide delivery across Kenya." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white text-xl font-bold font-heading shrink-0 shadow-lg shadow-primary/30">
                                    {item.year}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="py-20 bg-primary-dark text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { icon: Users, value: "500+", label: "Teams Equipped" },
                            { icon: Award, value: "15+", label: "Global Brands" },
                            { icon: Calendar, value: "6+", label: "Years Experience" },
                            { icon: MapPin, value: "47", label: "Counties Served" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10"
                            >
                                <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                                <div className="text-4xl font-heading font-bold mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 container mx-auto px-6 text-center">
                <div className="bg-accent/10 rounded-3xl p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-6">
                            Ready to Partner With Us?
                        </h2>
                        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                            Join the 500+ teams and institutions that trust Prime Hood Supplies for their sports equipment needs.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
