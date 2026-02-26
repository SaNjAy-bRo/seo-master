import { Metadata } from "next";
import GenericServiceHero from "@/components/sections/services/GenericServiceHero";
import ServiceFeatures from "@/components/sections/services/ServiceFeatures";
import ContactConsultation from "@/components/sections/contact/ContactConsultation";
import Image from "next/image";
import Link from "next/link";
import WebsiteFaq from "@/components/sections/services/WebsiteFaq";

export const metadata: Metadata = {
    title: "Professional Website Development Services | SEO Masterr",
    description: "Get expert website development services from SEO Masterr. We build fast, secure, and SEO-friendly websites designed to scale your business and drive conversions.",
    alternates: {
        canonical: "https://seomasterr.com/services/website-design",
    }
};

export default function WebsiteDesignServicePage() {
    return (
        <main>

            {/* 1. Hero Section */}
            <GenericServiceHero
                label="Website Development Services"
                title="Professional Website Development Services for Growing Businesses"
                description="At SEO Masterr, we build high performance websites that serve as powerful digital sales machines. We provide reliable Website Development Services designed to help your business build a fast, secure, and conversion-driven online presence. Whether you're a startup, small business, or growing brand, we create custom websites that not only look professional but also generate real results."
                checks={[
                    "High Performance Websites",
                    "Fast, Secure & Conversion-Driven",
                    "Custom Built To Generate Results"
                ]}
            >
                {/* CTA 1 */}
                <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", display: "inline-flex", boxShadow: "0 10px 30px rgba(249,115,22,0.3)" }}>
                    Start Your Website Project Today
                </Link>
            </GenericServiceHero>

            {/* 2. Why Your Business Needs */}
            <ServiceFeatures
                label="Why Choose SEO Masterr?"
                title="Why Choose SEO Masterr for Website Development?"
                description="Choosing the right development partner directly impacts your business growth. At SEO Masterr, we combine expert development with integrated SEO strategy, ensuring your website is built to rank and convert from day one."
                imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                imageAlt="Website Development Setup"
                features={[
                    {
                        title: "Custom-built solutions",
                        description: "We avoid generic templates to create a unique site tailored to your brand."
                    },
                    {
                        title: "SEO-friendly architecture",
                        description: "Built-in technical SEO setup and proper structure provide a ranking advantage from the start."
                    },
                    {
                        title: "Optimized performance",
                        description: "Fast loading speeds and mobile-first, responsive designs are standard."
                    },
                    {
                        title: "Secure & scalable",
                        description: "A secure foundation that grows with your business needs."
                    }
                ]}
            />

            {/* 3. Comprehensive Solutions (Process layout reused) */}
            <section className="section" style={{ background: "var(--color-bg-light)" }}>
                <div className="section-inner">
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <span className="section-label">Specialized Services</span>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1.25rem" }}>
                            Our Comprehensive <span style={{ color: "var(--color-primary)" }}>Website Development Services</span>
                        </h2>
                        <p style={{ color: "var(--color-body)", maxWidth: 700, margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.7 }}>
                            We offer a range of specialized development services tailored to your specific goals:
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                        {/* Box 1 */}
                        <div style={{ background: "#fff", padding: "2.5rem", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
                            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                            </div>
                            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1rem" }}>Custom Website Development</h3>
                            <p style={{ color: "var(--color-body)", lineHeight: 1.7 }}>
                                Tailor-made websites built according to your business goals and brand identity.
                            </p>
                        </div>

                        {/* Box 2 */}
                        <div style={{ background: "#fff", padding: "2.5rem", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
                            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                            </div>
                            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1rem" }}>WordPress Development</h3>
                            <p style={{ color: "var(--color-body)", lineHeight: 1.7 }}>
                                User-friendly, scalable, and SEO Optimized websites ideal for businesses and bloggers.
                            </p>
                        </div>

                        {/* Box 3 */}
                        <div style={{ background: "#fff", padding: "2.5rem", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
                            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                            </div>
                            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1rem" }}>E-commerce Development</h3>
                            <p style={{ color: "var(--color-body)", lineHeight: 1.7 }}>
                                High-converting online stores complete with secure payment gateways and smooth checkout experiences.
                            </p>
                        </div>

                        {/* Box 4 */}
                        <div style={{ background: "#fff", padding: "2.5rem", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
                            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                            </div>
                            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1rem" }}>Business Websites</h3>
                            <p style={{ color: "var(--color-body)", lineHeight: 1.7 }}>
                                Professional corporate sites that build trust and authority for your brand.
                            </p>
                        </div>

                        {/* Box 5 */}
                        <div style={{ background: "#fff", padding: "2.5rem", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
                            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                            </div>
                            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1rem" }}>Landing Page Development</h3>
                            <p style={{ color: "var(--color-body)", lineHeight: 1.7 }}>
                                Conversion-focused pages specifically designed for paid ad campaigns and generating leads.
                            </p>
                        </div>
                    </div>

                    <div style={{ textAlign: "center", marginTop: "4rem" }}>
                        <Link href="/contact" className="btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>
                            Get a Free Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. Our 5-Step Process */}
            <section className="section" style={{ background: "#fff" }}>
                <div className="section-inner" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
                    <div style={{ textAlign: "center" }}>
                        <span className="section-label">How We Build</span>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1.25rem" }}>
                            Our Simple <span style={{ color: "var(--color-primary)" }}>5-Step Process</span>
                        </h2>
                        <p style={{ color: "var(--color-body)", marginBottom: "3rem", fontSize: "1.05rem" }}>
                            We make the process smooth and transparent:
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", textAlign: "left" }}>
                        {[
                            { step: "01", title: "Requirement Analysis", desc: "We start by understanding your goals, competitors, and target audience." },
                            { step: "02", title: "Strategic Planning & Wireframing", desc: "We don't just design; we architect for conversions. Our process begins with strategic layout planning and precision wireframing to map out a seamless user journey. By focusing on User Experience (UX) and high-impact placement, we ensure every element is engineered to turn casual visitors into loyal customers." },
                            { step: "03", title: "Expert Design & Development", desc: "We build high-performance digital assets using clean, lightweight coding and fully responsive design that scales perfectly across all devices. By integrating an SEO-friendly structure from the ground up, we ensure your site isn't just a digital storefront, it’s a ranking powerhouse optimized for maximum visibility and speed." },
                            { step: "04", title: "Testing & Optimization", desc: "Rigorous testing for speed, security, and performance ensures a flawless launch." },
                            { step: "05", title: "Launch & Strategic Support", desc: "We ensure a flawless, high-speed deployment to transition your site from staging to live with zero downtime. Beyond the launch, we offer ongoing support and performance maintenance to keep your digital presence secure, updated, and optimized for long-term business growth." }
                        ].map((item, i) => (
                            <div key={i} style={{ display: "flex", gap: "1.5rem", background: "#f8f9fa", padding: "2rem", borderRadius: "12px", border: "1px solid var(--color-border)" }}>
                                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "rgba(249,115,22,0.2)", lineHeight: 1 }}>{item.step}</div>
                                <div>
                                    <h4 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.5rem" }}>{item.title}</h4>
                                    <p style={{ color: "var(--color-body)", margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Results / Cross-Sell (Custom layout for this page) */}
            <section className="section" style={{ background: "#111", color: "#fff", textAlign: "center" }}>
                <div className="section-inner" style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1.5rem", color: "#fff" }}>
                        Let’s Build Your Website the Right Way
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                        Your website is your digital foundation. Invest in it wisely.
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                        Ready to grow your business with powerful Website Development Services? Contact SEO Masterr today and let’s create a website that works for you 24/7.
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
                        <Link href="/services/seo" style={{ padding: "0.75rem 1.5rem", borderRadius: "99px", background: "rgba(255,255,255,0.1)", color: "#fff", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Explore SEO Services</Link>
                        <Link href="/services/social-media-optimization" style={{ padding: "0.75rem 1.5rem", borderRadius: "99px", background: "rgba(255,255,255,0.1)", color: "#fff", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Explore Social Media Services</Link>
                        <Link href="/services/ppc-management" style={{ padding: "0.75rem 1.5rem", borderRadius: "99px", background: "rgba(255,255,255,0.1)", color: "#fff", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Explore PPC Advertising</Link>
                    </div>

                    <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>
                        Schedule a Free Consultation Now
                    </Link>
                </div>
            </section>

            {/* 6. FAQs */}
            <WebsiteFaq />

            {/* 7. Bottom CTA */}
            <ContactConsultation />

        </main>
    );
}
