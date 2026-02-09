import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product Catalogue",
    description: "Explore our complete catalogue of sports equipment, uniforms, and branding solutions with detailed pricing.",
};

export default function CataloguePage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-heading font-bold text-primary-dark mb-6">
                    Product Catalogue
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl">
                    Browse our complete catalogue of sports equipment and services.
                </p>
            </div>
        </div>
    );
}
