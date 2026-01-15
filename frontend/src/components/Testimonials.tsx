import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "St. Mary's School",
        role: "Sports Department",
        content: "Primehood Supplies has consistently delivered top-tier quality uniforms for our teams. Their attention to detail and timeliness is unmatched in Nairobi.",
        rating: 5,
    },
    {
        name: "Safari FC",
        role: "Team Manager",
        content: "The Adidas kits we sourced through F.G. Kibe have transformed our team's professional look. Excellent service and genuine products.",
        rating: 5,
    },
    {
        name: "Kenya Corporate League",
        role: "Organizer",
        content: "For our annual awards, the trophies and medals from Primehood were stunning. They truly elevated the prestige of our event.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-primary-dark relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Quote className="w-8 h-8 text-accent" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-heading font-bold text-white mb-4"
                    >
                        Trusted by Champions
                    </motion.h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Don't just take our word for it. Here is what our partners and clients say about our service.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < testimonial.rating ? "text-gold fill-gold" : "text-gray-600"}`}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-300 italic mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div>
                                <div className="font-heading font-bold text-white text-lg">
                                    {testimonial.name}
                                </div>
                                <div className="text-accent text-sm uppercase tracking-wider font-medium">
                                    {testimonial.role}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
