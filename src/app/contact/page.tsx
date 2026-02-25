import ContactHero from "@/components/sections/contact/ContactHero";
import ContactConsultation from "@/components/sections/contact/ContactConsultation";

export const metadata = {
    title: "Contact Us | Seo Masterr",
    description: "Get in touch with Seo Masterr. We are ready to help you grow your online presence.",
};

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactConsultation />
        </>
    );
}
