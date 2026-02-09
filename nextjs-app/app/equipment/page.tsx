import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sports Equipment",
    description: "Browse our extensive collection of professional sports equipment from top brands like Adidas, Nike, Puma, and more.",
};

export default function EquipmentPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-heading font-bold text-primary-dark mb-6">
                    Sports Equipment
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl">
                    Professional equipment for football, basketball, athletics, and more from top global brands.
                </p>
            </div>
        </div>
    );
}
