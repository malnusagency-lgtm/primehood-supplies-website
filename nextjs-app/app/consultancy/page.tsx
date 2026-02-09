import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Consultancy Services",
    description: "Professional sports consultancy services for schools, clubs, and organizations across Kenya.",
};

export default function ConsultancyPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-heading font-bold text-primary-dark mb-6">
                    Consultancy Services
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl">
                    Expert sports consultancy for schools, clubs, and organizations.
                </p>
            </div>
        </div>
    );
}
