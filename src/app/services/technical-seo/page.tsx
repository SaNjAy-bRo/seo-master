import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GenericServiceHero from "@/components/sections/services/GenericServiceHero";
import ServiceFeatures from "@/components/sections/services/ServiceFeatures";
import WhySeo from "@/components/sections/seo/WhySeo";
import SeoProcess from "@/components/sections/seo/SeoProcess";
import SeoFaq from "@/components/sections/seo/SeoFaq";
import ContactConsultation from "@/components/sections/contact/ContactConsultation";

export const metadata = {
    title: "Technical SEO | SEO Masterr",
    description: "The unseen backbone of a high-performing site, our technical optimization ensures your site is fast, healthy, and easily crawlable.",
};

export default function TechnicalSeoPage() {
    return (
        <main>
            <Navbar />
            <GenericServiceHero
                label="Technical SEO"
                title={<>Unseen Backbone of a <span style={{ color: "var(--color-primary)" }}>High-Performing Site</span></>}
                description="Our technical optimization ensures your site is fast, healthy, and easily crawlable by search engines."
                checks={[
                    "Fast & Healthy Site",
                    "Seamless Crawlability",
                    "Core Web Vitals Pass"
                ]}
            />

            <ServiceFeatures
                title={<>Technical <span style={{ color: "var(--color-primary)" }}>SEO Focus Areas</span></>}
                description="The unseen backbone of a high-performing site, our technical optimization ensures your site is fast, healthy, and easily crawlable. Our focus areas include:"
                features={[
                    { title: "Crawlability & Indexability", description: "Improving site architecture with professional Technical SEO Service crawlability and indexability." },
                    { title: "Page Speed & Core Web Vitals", description: "Boosting page speed and core web vitals for a significantly better user experience." },
                    { title: "Mobile-friendliness", description: "Ensuring flawless mobile-friendliness across all devices and screen sizes." },
                    { title: "Technical Issue Resolution", description: "Resolving complex canonical, redirect, and search engine indexing issues." }
                ]}
                imageSrc="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop"
                imageAlt="Technical SEO Code Graph"
            />

            <WhySeo />
            <SeoProcess />
            <SeoFaq />
            <ContactConsultation />
            <Footer />
        </main>
    );
}
