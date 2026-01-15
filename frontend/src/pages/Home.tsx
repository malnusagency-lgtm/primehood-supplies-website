import Hero from "../components/Hero";
import Brands from "../components/Brands";
import ServicesPreview from "../components/ServicesPreview";
import AboutPreview from "../components/AboutPreview";
import Testimonials from "../components/Testimonials";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900">
            <Hero />
            <Brands />
            <ServicesPreview />
            <AboutPreview />
            <Testimonials />
        </main>
    );
}
