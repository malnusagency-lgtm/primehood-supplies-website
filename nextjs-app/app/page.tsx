import Hero from "@/components/hero";
import Brands from "@/components/brands";
import ServicesPreview from "@/components/services-preview";
import AboutPreview from "@/components/about-preview";
import Testimonials from "@/components/testimonials";

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
