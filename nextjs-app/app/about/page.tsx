import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Primehood Supplies, Kenya's leading sports consultancy directed by F.G. Kibe. Decades of excellence in sports equipment and branding.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-heading font-bold text-primary-dark mb-6">
                    About Primehood Supplies
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl">
                    Prime Hood Supplies & Evolution Sports House Enterprises is Kenya&apos;s leading sports consultancy, directed by F.G. Kibe. We specialize in providing high-quality sports equipment, branding services, and institutional supplies.
                </p>
            </div>
        </div>
    );
}
