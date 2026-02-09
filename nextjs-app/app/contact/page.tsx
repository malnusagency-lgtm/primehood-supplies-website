import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Primehood Supplies for sports equipment, uniforms, and consultancy services. Located in Nairobi, Kenya.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-heading font-bold text-primary-dark mb-6">
                    Contact Us
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mb-8">
                    Get in touch with us for all your sports equipment and consultancy needs.
                </p>
                <div className="max-w-2xl">
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-heading font-bold text-lg mb-2">Address</h3>
                            <p className="text-gray-600">Rehema Place, Block F Suite 49<br />Ngong Road, Nairobi</p>
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-lg mb-2">Phone</h3>
                            <p className="text-gray-600">+254 722 801 926</p>
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-lg mb-2">Email</h3>
                            <p className="text-gray-600">primehoodsupplies@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
