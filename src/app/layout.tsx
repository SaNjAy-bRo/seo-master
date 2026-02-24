import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SeoMasterr — Expert SEO, SMO & PPC Services",
  description:
    "Drive more traffic, generate leads, and grow your business with result-driven SEO, social media optimization, and paid advertising strategies.",
  keywords: ["SEO", "PPC", "SMO", "digital marketing", "search engine optimization"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
