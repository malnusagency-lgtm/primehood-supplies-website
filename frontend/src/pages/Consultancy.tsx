import { motion } from "framer-motion";
import { CheckCircle2, Phone, Mail, Award, BookOpen, Users, PaintBucket, Trophy, Layout } from "lucide-react";
import Button from "../components/Button";

const uniquePoints = [
    "CBE-aligned sports pathways",
    "Professional coaches deployed where needed",
    "All required sports equipment supplied by Prime Hood",
    "Practical implementation, not theory only",
    "One trusted partner from planning to delivery"
];

const consultancyServices = [
    {
        icon: BookOpen,
        id: "cbe-school",
        title: "1. CBE School & Institutional Sports Consultancy",
        target: "Primary Schools | Secondary Schools | Colleges | Universities",
        description: "We help institutions implement structured and assessable sports pathways under the Competency-Based Education (CBE) framework.",
        details: [
            "CBE sports program audits & gap analysis",
            "Design of CBE sports learning pathways",
            "Talent identification & progression frameworks",
            "Annual sports calendars & competitions",
            "Safeguarding, safety & injury prevention policies"
        ],
        coaches: "Certified PE teachers, CBE-oriented coaches, sport-specific technical officials.",
        equipment: "Full school sports kits, uniforms, and equipment for all major sports (Football, athletics, basketball, etc.)."
    },
    {
        icon: Layout,
        id: "facility-planning",
        title: "2. Sports Facility Planning & Equipment Advisory",
        target: "Schools | Universities | Counties | Private Institutions",
        description: "We ensure sports facilities are safe, functional, and ready for learning and competition.",
        details: [
            "Facility layout & sport-specific planning",
            "Equipment specification & standards advisory",
            "Procurement planning & budgeting",
            "Maintenance & equipment lifecycle planning"
        ],
        coaches: null,
        equipment: "Goal posts, nets, courts, track equipment, gym & fitness equipment, conditioning tools."
    },
    {
        icon: Users,
        id: "coaching",
        title: "3. Professional Coaching & Capacity Building",
        target: "Schools | Academies | Counties | NGOs | Corporates",
        description: "We deploy qualified coaches to support performance and institutional capacity.",
        details: [
            "Short-term & long-term coaching programs",
            "PE teacher & coach upskilling for CBE delivery",
            "Refereeing & officiating support",
            "Sports administration training"
        ],
        coaches: "Experts in Football, Athletics, Basketball, Volleyball, Netball, Rugby, and Fitness.",
        equipment: "Coaching kits, training equipment, practice & match gear."
    },
    {
        icon: Award,
        id: "athlete-dev",
        title: "4. Athlete Development & Talent Pathways",
        target: "Elite Schools | Academies | NGOs",
        description: "We create clear, ethical, and sustainable athlete pathways.",
        details: [
            "Talent identification & tracking",
            "School-to-academy progression models",
            "Athlete welfare & safeguarding frameworks",
            "Academic–sport balance advisory"
        ],
        coaches: null,
        equipment: "Performance & training equipment, recovery & protective gear."
    },
    {
        icon: PaintBucket,
        id: "branding",
        title: "5. Sports Branding, Kits & Team Identity",
        target: "Schools | Counties | Clubs | Academies | Corporates",
        description: "We help institutions build strong, professional sports identities.",
        details: [
            "Team & institutional sports branding",
            "Kit design & customization",
            "Sponsorship & merchandise advisory"
        ],
        coaches: null,
        equipment: "Custom-branded kits & uniforms, training wear & accessories."
    },
    {
        icon: Trophy,
        id: "events",
        title: "6. Sports Events & Competition Support",
        target: "Inter-School | County | Corporate | Community Events",
        description: "We support well-organized, safe, and professional sports events.",
        details: [
            "Tournament & league planning",
            "Technical officiating & logistics support",
            "Risk management & safety compliance"
        ],
        coaches: null,
        equipment: "Match & event equipment, branding, signage & safety gear."
    }
];

export default function Consultancy() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">

            {/* Hero */}
            <section className="relative pt-32 pb-24 bg-primary-dark text-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="/images/p3.jpeg"
                        alt="Consultancy Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/90 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent text-sm font-bold uppercase tracking-wider mb-4"
                    >
                        CBE-Aligned • Coaches Provided • Equipment Supplied
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
                    >
                        Expert Sports Consultancy
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Prime Hood Sports Consultancy delivers end-to-end sports development solutions across Kenya. We support schools, institutions, and corporates by designing, equipping, and implementing CBE-aligned sports programs.
                    </motion.p>
                </div>
            </section>

            {/* Differentiation Section */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-heading font-bold text-primary-dark mb-10">What Makes Our Consultancy Different</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                            {uniquePoints.map((point, i) => (
                                <motion.div
                                    key={point}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">{point}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Services */}
            <section className="py-20 container mx-auto px-6">
                <div className="space-y-16">
                    {consultancyServices.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-100px" }}
                            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row"
                        >
                            <div className="md:w-1/3 bg-primary/5 p-8 md:p-12 flex flex-col justify-center border-r border-gray-100">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-6">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Target Audience</p>
                                <p className="text-gray-600 text-sm">{service.target}</p>
                            </div>

                            <div className="md:w-2/3 p-8 md:p-12">
                                <p className="text-lg text-gray-700 mb-8 font-medium">
                                    {service.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h4 className="font-bold text-primary-dark mb-4 border-b border-gray-100 pb-2">Key Services</h4>
                                        <ul className="space-y-2">
                                            {service.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                                                    <span className="text-accent mt-1">•</span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-6">
                                        {service.coaches && (
                                            <div>
                                                <h4 className="font-bold text-primary-dark mb-2 text-sm uppercase">Coaches Provided</h4>
                                                <p className="text-sm text-gray-600">{service.coaches}</p>
                                            </div>
                                        )}
                                        <div>
                                            <h4 className="font-bold text-primary-dark mb-2 text-sm uppercase">Equipment Supplied</h4>
                                            <p className="text-sm text-gray-600">{service.equipment}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Trust & Commitment */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-heading font-bold mb-8">Who We Work With</h2>
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {["Schools & Educational Institutions", "Universities & Colleges", "County Governments", "Sports Academies & Clubs", "NGOs", "Corporate Organizations"].map((client, i) => (
                            <span key={i} className="px-6 py-3 bg-white/10 rounded-full text-sm font-bold backdrop-blur-sm border border-white/10">
                                {client}
                            </span>
                        ))}
                    </div>

                    <div className="bg-gradient-to-br from-primary to-accent p-10 rounded-3xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-heading font-bold mb-4">Our Commitment</h2>
                            <p className="text-xl font-medium leading-relaxed">
                                "Prime Hood does not offer consultancy in isolation. We provide the expertise, the coaches, and the equipment required to turn plans into results."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-heading font-bold text-primary-dark mb-8">Ready to Transform Your Sports Program?</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <Button href="tel:+254722801926" variant="primary" className="!px-8 !py-4 !text-lg">
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5" />
                                <span>Talk to Our Consultancy Team</span>
                            </div>
                        </Button>
                        <Button href="/contact" variant="outline" className="!px-8 !py-4 !text-lg bg-white">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5" />
                                <span>Request a Sports Program Assessment</span>
                            </div>
                        </Button>
                    </div>
                </div>
            </section>

        </main>
    );
}
