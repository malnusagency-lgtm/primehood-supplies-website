import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Comprehensive sports solutions including school uniforms, sports equipment, trophies & awards, and corporate branding services.",
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-heading font-bold text-primary-dark mb-6">
                    Our Services
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl">
                    We provide everything you need to succeed, from the gear you wear to the awards you win.
                </p>
            </div>
        </div>
    );
}
