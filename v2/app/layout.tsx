import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prime Hood Supplies | Sports Consultancy & Equipment",
  description: "Kenya's premier sports equipment supplier and consultancy. We outfit champions with top-tier gear from Adidas, Nike, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-white text-gray-800`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
