import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GenericServiceHero from "@/components/sections/services/GenericServiceHero";
import ServiceFeatures from "@/components/sections/services/ServiceFeatures";
import WhySeo from "@/components/sections/seo/WhySeo";
import SeoProcess from "@/components/sections/seo/SeoProcess";
import SeoFaq from "@/components/sections/seo/SeoFaq";
import ContactConsultation from "@/components/sections/contact/ContactConsultation";

export const metadata = {
    title: "Content Strategy | SEO Masterr",
    description: "SEO-driven content planning, blog writing, and copywriting that ranks, engages, and converts your target audience.",
};

export default function ContentStrategyPage() {
    return (
        <main>
            <Navbar />
            <GenericServiceHero
                label="Content Strategy"
                title={<>Copywriting that Ranks, Engages, & <span style={{ color: "var(--color-primary)" }}>Converts</span></>}
                description="We deliver SEO-driven content planning, blog writing, and copywriting tailored precisely to your target audience."
                checks={[
                    "SEO-Driven Writing",
                    "Audience Focused",
                    "High Conversion Copy"
                ]}
            />

            <ServiceFeatures
                title={<>Strategic <span style={{ color: "var(--color-primary)" }}>Content Creation</span></>}
                description="Our content strategy isn't just about filling pages with words; it's about delivering the exact value your users are searching for."
                features={[
                    { title: "Topic Ideation", description: "Discovering what your audience actually wants to read and building a roadmap around it." },
                    { title: "SEO Blog Writing", description: "Crafting long-form articles that secure featured snippets and rank for high-volume keywords." },
                    { title: "Sales Copywriting", description: "Writing persuasive website copy that seamlessly moves the user from interest to the checkout button." }
                ]}
                imageSrc="https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=800&auto=format&fit=crop"
                imageAlt="Content Strategy Planning"
            />

            <WhySeo />
            <SeoProcess />
            <SeoFaq />
            <ContactConsultation />
            <Footer />
        </main>
    );
}
