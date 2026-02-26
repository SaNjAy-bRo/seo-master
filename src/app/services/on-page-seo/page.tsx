import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GenericServiceHero from "@/components/sections/services/GenericServiceHero";
import ServiceFeatures from "@/components/sections/services/ServiceFeatures";
import WhySeo from "@/components/sections/seo/WhySeo";
import SeoProcess from "@/components/sections/seo/SeoProcess";
import SeoFaq from "@/components/sections/seo/SeoFaq";
import ContactConsultation from "@/components/sections/contact/ContactConsultation";

export const metadata = {
    title: "On-Page SEO & Content Strategy | SEO Masterr",
    description: "We optimize your website's content and structure to be fully search-engine-friendly for better rankings.",
};

export default function OnPageSeoPage() {
    return (
        <main>
            <Navbar />
            <GenericServiceHero
                label="On-Page SEO"
                title={<>Optimized <span style={{ color: "var(--color-primary)" }}>Search Engine Friendly</span> Content</>}
                description="We ensure your website's content and overall structure directly match user search intent to capture better traffic."
                checks={[
                    "Keyword Mapping",
                    "Intent Matching",
                    "Optimized Hierarchy"
                ]}
            />

            <ServiceFeatures
                title={<>Strategic <span style={{ color: "var(--color-primary)" }}>On-Page Execution</span></>}
                description="Our services encompass complete on-page transformations. We optimize your website's content and structure to be fully search-engine-friendly."
                features={[
                    { title: "Keyword Research & Strategy", description: "In-depth On Page SEO Service like strategic keyword mapping and competitor gap analysis." },
                    { title: "Metadata Optimization", description: "Optimizing title tags and meta descriptions to secure better click-through rates on search results." },
                    { title: "Heading Strategy (H1-H6)", description: "Structuring content with a clear heading hierarchy for robust readability and SEO." },
                    { title: "User Search Intent Content", description: "Ensuring all on-page content directly and accurately matches the user's core search intent." },
                    { title: "Internal Linking & Alt Text", description: "Developing dense internal linking structure strategies and optimizing image alt tags across the site." }
                ]}
                imageSrc="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop"
                imageAlt="On-Page SEO Execution"
            />

            <WhySeo />
            <SeoProcess />
            <SeoFaq />
            <ContactConsultation />
            <Footer />
        </main>
    );
}
