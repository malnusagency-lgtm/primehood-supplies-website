import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/smooth-scroll";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Primehood Supplies - Premier Sports Consultancy in Kenya",
    template: "%s | Primehood Supplies",
  },
  description:
    "Kenya's leading sports consultancy and equipment supplier. We outfit champions with high-quality sports equipment, school uniforms, branding services, and institutional supplies.",
  keywords: [
    "sports equipment Kenya",
    "school uniforms Nairobi",
    "sports consultancy",
    "Adidas Kenya",
    "Nike Kenya",
    "Puma Kenya",
    "sports branding",
    "trophies and awards",
    "corporate signage",
  ],
  authors: [{ name: "Primehood Supplies" }],
  creator: "Primehood Supplies",
  publisher: "Primehood Supplies",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://primehoodsupplies.com",
    title: "Primehood Supplies - Premier Sports Consultancy in Kenya",
    description:
      "Kenya's leading sports consultancy and equipment supplier. We outfit champions and build sporting excellence.",
    siteName: "Primehood Supplies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Primehood Supplies - Premier Sports Consultancy in Kenya",
    description:
      "Kenya's leading sports consultancy and equipment supplier. We outfit champions and build sporting excellence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <SmoothScrollProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
