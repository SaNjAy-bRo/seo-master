import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutProcess from "@/components/sections/about/AboutProcess";
import Expertise from "@/components/sections/about/Expertise";
import Contact from "@/components/sections/Contact"; // Reusing the global contact section

export const metadata = {
    title: "About Us | Seo Masterr",
    description: "Learn more about Seo Masterr, our expertise, and our proven SEO process.",
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutProcess />
            <Expertise />
            <Contact />
        </>
    );
}
