import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SeoHero from "@/components/sections/seo/SeoHero";
import WhySeo from "@/components/sections/seo/WhySeo";
import SeoServices from "@/components/sections/seo/SeoServices";
import SeoProcess from "@/components/sections/seo/SeoProcess";
import SeoFaq from "@/components/sections/seo/SeoFaq";
import ContactConsultation from "@/components/sections/contact/ContactConsultation";

export const metadata = {
    title: "SEO Services | Professional Search Engine Optimisation | SEO Masterr",
    description: "Drive real, long-term growth with professional SEO services by SEO Masterr. We use ethical, data-driven strategies for on-page, technical, and local SEO to boost rankings and qualified traffic.",
};

export default function SeoServicesPage() {
    return (
        <main>
            <Navbar />
            <SeoHero />
            <WhySeo />
            <SeoServices />
            <SeoProcess />
            <SeoFaq />
            <ContactConsultation />
            <Footer />
        </main>
    );
}
