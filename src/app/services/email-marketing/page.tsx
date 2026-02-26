import { Metadata } from "next";
import GenericServiceHero from "@/components/sections/services/GenericServiceHero";
import ServiceFeatures from "@/components/sections/services/ServiceFeatures";
import ContactConsultation from "@/components/sections/contact/ContactConsultation";
import Image from "next/image";
import Link from "next/link";
import EmailFaq from "@/components/sections/services/EmailFaq";

export const metadata: Metadata = {
    title: "Email Marketing Services | Turn Subscribers into Customers | SEO Masterr",
    description: "Drive unparalleled ROI with expert Email Marketing Services from SEO Masterr. We design conversion-focused campaigns & automation to nurture leads and boost sales. Get your free strategy!",
    alternates: {
        canonical: "https://seomasterr.com/services/email-marketing",
    }
};

export default function EmailMarketingServicePage() {
    return (
        <main>

            {/* 1. Hero Section */}
            <GenericServiceHero
                label="Email Marketing Services"
                title="Email Marketing Services That Turn Subscribers Into Customers"
                description="Let's be honest: in a noisy digital world, email is personal. It's direct access to an audience you own. It’s not just a marketing channel; it's a direct conversation, delivering an incredible return on investment (ROI) up to ₹3600 for every ₹100 spent. At SEO Masterr, we don't just send emails; we build relationships. Our team of expert strategists provides comprehensive, result-driven Email Marketing Services designed to connect with people, not just inboxes. We turn casual subscribers into loyal, repeat customers."
                checks={[
                    "Build authentic relationships",
                    "Return on Investment up to ₹3600",
                    "Casual subscribers to loyal customers"
                ]}
            >
                {/* CTA 1 */}
                <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", display: "inline-flex", boxShadow: "0 10px 30px rgba(249,115,22,0.3)" }}>
                    Get Your Free Email Marketing Strategy
                </Link>
            </GenericServiceHero>

            {/* 2. Why Your Business Needs */}
            <ServiceFeatures
                label="Why Email Marketing?"
                title="Why Email Marketing is Your Business's Secret Weapon"
                description="You’ve likely heard that email is essential, but do you know why it consistently outperforms social media and paid ads in the long term? Because an email list is an owned asset that builds trust and authority over time."
                imageSrc="https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=800&auto=format&fit=crop"
                imageAlt="Email Marketing Device"
                features={[
                    {
                        title: "Build Relationships",
                        description: "Build long-term, authentic relationships with your audience."
                    },
                    {
                        title: "Consistent Leads",
                        description: "Generate consistent, high-quality prospects and leads."
                    },
                    {
                        title: "Customer Retention",
                        description: "Improve customer retention and ongoing brand loyalty."
                    },
                    {
                        title: "Direct Promotion",
                        description: "Promote products and services directly to an engaged audience."
                    },
                    {
                        title: "Superior ROI",
                        description: "Achieve superior ROI compared to many other digital channels."
                    }
                ]}
            />

            {/* 3. Comprehensive Solutions (Process layout reused) */}
            <section className="section" style={{ background: "var(--color-bg-light)" }}>
                <div className="section-inner">
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <span className="section-label">End-to-End Solutions</span>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1.25rem" }}>
                            Our Comprehensive <span style={{ color: "var(--color-primary)" }}>Email Marketing Solutions</span>
                        </h2>
                        <p style={{ color: "var(--color-body)", maxWidth: 700, margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.7 }}>
                            We offer end-to-end email marketing solutions tailored to your unique business goals whether you're a startup, local business, or growing brand.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                        {/* Box 1 */}
                        <div style={{ background: "#fff", padding: "2.5rem", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
                            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                            </div>
                            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1rem" }}>Strategy & Consulting</h3>
                            <p style={{ color: "var(--color-body)", lineHeight: 1.7 }}>
                                We start with you, not a template. Deep-dive audience research, competitor analysis, and funnel planning to map out the exact customer journey.
                            </p>
                        </div>

                        {/* Box 2 */}
                        <div style={{ background: "#fff", padding: "2.5rem", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
                            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                            </div>
                            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1rem" }}>High-Converting Management</h3>
                            <p style={{ color: "var(--color-body)", lineHeight: 1.7 }}>
                                We design, write, and manage campaigns built to convert. We focus on clear, conversational copy and mobile-first design.
                            </p>
                        </div>

                        {/* Box 3 */}
                        <div style={{ background: "#fff", padding: "2.5rem", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
                            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                            </div>
                            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1rem" }}>Smart Email Automation</h3>
                            <p style={{ color: "var(--color-body)", lineHeight: 1.7 }}>
                                Automate your growth. We set up smart sequences like welcome emails, abandoned cart recovery, and lead nurturing flows.
                            </p>
                        </div>

                        {/* Box 4 */}
                        <div style={{ background: "#fff", padding: "2.5rem", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
                            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                            </div>
                            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1rem" }}>Professional Template Design</h3>
                            <p style={{ color: "var(--color-body)", lineHeight: 1.7 }}>
                                We create custom, brand-focused, responsive email templates that are accessible, visually engaging, and highly recognizable.
                            </p>
                        </div>
                    </div>

                    <div style={{ textAlign: "center", marginTop: "4rem" }}>
                        <Link href="/contact" className="btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>
                            Book Your Free Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. The SEO Masterr Advantage */}
            <section className="section" style={{ background: "#fff" }}>
                <div className="section-inner">
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
                        <div style={{ flex: "1 1 500px" }}>
                            <span className="section-label">Your Growth Partners</span>
                            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1.75rem", lineHeight: 1.2 }}>
                                The SEO Masterr <span style={{ color: "var(--color-primary)" }}>Advantage</span>
                            </h2>
                            <p style={{ color: "var(--color-body)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                                We aren't just an agency; we're invested in your success. We ensure email works seamlessly with all your other marketing efforts. We can integrate your email strategy with your overall digital growth services, including professional SEO services, cutting-edge AI SEO, and PPC or ads services.
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                <div style={{ display: "flex", gap: "1rem" }}>
                                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "4px" }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>Data-Driven Strategy</h4>
                                        <p style={{ color: "var(--color-body)", fontSize: "0.95rem", lineHeight: 1.6 }}>We use real data and A/B testing to continuously improve performance, eliminating guesswork.</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: "1rem" }}>
                                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "4px" }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>Conversion-Focused Campaigns</h4>
                                        <p style={{ color: "var(--color-body)", fontSize: "0.95rem", lineHeight: 1.6 }}>Every email has a purpose: to get results and generate measurable revenue for your business.</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: "1rem" }}>
                                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "4px" }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>Perfect For:</h4>
                                        <p style={{ color: "var(--color-body)", fontSize: "0.95rem", lineHeight: 1.6 }}>Small businesses & Startups, E-commerce stores, Coaches & Service providers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: "1 1 500px", position: "relative" }}>
                            <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "24px", overflow: "hidden", boxShadow: "var(--shadow-xl)" }}>
                                <Image
                                    src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80"
                                    alt="Email Marketing Performance Data"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Our 5-Step Process */}
            <section className="section" style={{ background: "var(--color-bg-light)" }}>
                <div className="section-inner" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                    <span className="section-label">How It Works</span>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1.25rem" }}>
                        Our Simple, <span style={{ color: "var(--color-primary)" }}>5-Step Process</span>
                    </h2>
                    <p style={{ color: "var(--color-body)", marginBottom: "3rem", fontSize: "1.05rem" }}>
                        We keep things transparent and straightforward:
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", textAlign: "left" }}>
                        {[
                            { step: "01", title: "Business Analysis", desc: "We listen to you and understand your audience's unique pain points." },
                            { step: "02", title: "Strategy Creation", desc: "We build a customized, conversion-focused plan." },
                            { step: "03", title: "Campaign Creation", desc: "We write compelling emails and design beautiful templates." },
                            { step: "04", title: "Automation Setup", desc: "We implement the technology so everything runs smoothly." },
                            { step: "05", title: "Optimization", desc: "We track open rates, click rates, and ROI, continuously refining our approach for better results." }
                        ].map((item, i) => (
                            <div key={i} style={{ display: "flex", gap: "1.5rem", background: "#fff", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--color-border)" }}>
                                <div style={{ fontSize: "2rem", fontWeight: 800, color: "rgba(249,115,22,0.2)", lineHeight: 1 }}>{item.step}</div>
                                <div>
                                    <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.25rem" }}>{item.title}</h4>
                                    <p style={{ color: "var(--color-body)", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Results / Cross-Sell */}
            <section className="section" style={{ background: "#111", color: "#fff", textAlign: "center" }}>
                <div className="section-inner" style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1.5rem", color: "#fff" }}>
                        Results You Can Expect
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                        With SEO Masterr, your email program becomes a sustainable revenue engine. You can expect higher sales and automated revenue, more qualified leads, better customer retention rates, and improved ROI.
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
                        <Link href="/services/website-design" style={{ padding: "0.75rem 1.5rem", borderRadius: "99px", background: "rgba(255,255,255,0.1)", color: "#fff", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Explore SEO-Optimized Web Design</Link>
                        <Link href="/services/social-media-optimization" style={{ padding: "0.75rem 1.5rem", borderRadius: "99px", background: "rgba(255,255,255,0.1)", color: "#fff", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Explore Social Media Services</Link>
                    </div>

                    <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>
                        Get a Free Proposal Today
                    </Link>
                </div>
            </section>

            {/* 7. FAQs */}
            <EmailFaq />

            {/* 8. Bottom CTA */}
            <ContactConsultation />

        </main>
    );
}
