import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GenericServiceHero from "@/components/sections/services/GenericServiceHero";
import ServiceFeatures from "@/components/sections/services/ServiceFeatures";
import WhySeo from "@/components/sections/seo/WhySeo";
import SeoProcess from "@/components/sections/seo/SeoProcess";
import SeoFaq from "@/components/sections/seo/SeoFaq";
import ContactConsultation from "@/components/sections/contact/ContactConsultation";

export const metadata = {
    title: "Off-Page SEO & Link Building | SEO Masterr",
    description: "Our Off-Page SEO services focus on strengthening your website's authority and trust with high-quality, natural backlinks.",
};

export default function LinkBuildingPage() {
    return (
        <main>
            <Navbar />
            <GenericServiceHero
                label="Link Building"
                title={<>High-Quality <span style={{ color: "var(--color-primary)" }}>Off-Page Authority</span></>}
                description="Our Off-Page SEO services focus on strengthening your website's authority and trust with high-quality, natural backlinks."
                checks={[
                    "High Domain Authority",
                    "Contextual Outreach",
                    "Spam Link Cleanup"
                ]}
            />

            <ServiceFeatures
                title={<>Natural <span style={{ color: "var(--color-primary)" }}>Link Building Approach</span></>}
                description="Our approach involves building your brand's digital footprint across the web by establishing real trust and authority through natural, high-quality links."
                features={[
                    { title: "Contextual Link Acquisition", description: "Acquiring contextual links from highly relevant, authoritative websites within your industry." },
                    { title: "Brand Mentions", description: "Securing powerful brand mentions across the internet to drastically boost your overall domain authority." },
                    { title: "Spam Link Cleanup", description: "Analyzing and systematically cleaning up any potentially harmful or toxic 'spam' links pointing to your site." }
                ]}
                imageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
                imageAlt="Off-Page Link Building"
                reverse
            />

            <WhySeo />
            <SeoProcess />
            <SeoFaq />
            <ContactConsultation />
            <Footer />
        </main>
    );
}
