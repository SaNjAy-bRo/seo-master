import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GenericServiceHero from "@/components/sections/services/GenericServiceHero";
import ServiceFeatures from "@/components/sections/services/ServiceFeatures";
import SmoFaq from "@/components/sections/services/SmoFaq";
import ContactConsultation from "@/components/sections/contact/ContactConsultation";
import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const metadata = {
    title: "Social Media Marketing Services for Business Growth | SEO Masterr",
    description: "Grow your brand with result-driven Social Media Marketing Services by SEO Masterr. Increase followers, leads, and sales with expert social media strategies",
};

export default function SmoPage() {
    return (
        <main>
            <Navbar />
            <GenericServiceHero
                label="Social Media Marketing"
                title={<>Social Media Marketing Services That Drive <span style={{ color: "var(--color-primary)" }}>Real Business Growth</span></>}
                description="Social media is essential for brand visibility, customer engagement, and revenue growth. At SEO Masterr, we provide data-driven Social Media Marketing Services designed to grow your audience, increase engagement, and generate qualified leads."
                checks={[
                    "Audience Growth",
                    "Customer Engagement",
                    "Qualified Leads"
                ]}
            >
                {/* CTA 1 */}
                <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", display: "inline-flex", boxShadow: "0 10px 30px rgba(249,115,22,0.3)" }}>
                    Get Your Free Social Media Strategy Consultation
                </Link>
            </GenericServiceHero>

            {/* Why Your Business Needs */}
            <ServiceFeatures
                title={<>Why Your Business Needs <span style={{ color: "var(--color-primary)" }}>Social Media Marketing</span></>}
                description="Over 4.8 billion people use social media, meaning your customers are already there. Our services help you connect with them effectively by:"
                features={[
                    { title: "Increasing brand awareness", description: "" },
                    { title: "Generating quality leads", description: "" },
                    { title: "Building trust and authority", description: "" },
                    { title: "Improving customer engagement", description: "" },
                    { title: "Increasing website traffic", description: "" },
                    { title: "Boosting conversions and sales", description: "" }
                ]}
                imageSrc="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
                imageAlt="Social Media Engagement Data"
            />

            {/* CTA 2 */}
            <div style={{ textAlign: "center", padding: "0 1.5rem 4rem", background: "var(--color-bg-white)" }}>
                <Link href="/contact" className="btn-secondary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", display: "inline-flex" }}>
                    Book a Free Growth Audit
                </Link>
            </div>

            {/* Our Social Media Marketing Services */}
            <section className="section" style={{ background: "var(--color-bg-light)", position: "relative" }}>
                <div className="section-inner">
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
                            Our Social Media <span style={{ color: "var(--color-primary)" }}>Marketing Services</span>
                        </h2>
                        <p style={{ color: "var(--color-body)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            We provide complete social media solutions tailored to your unique business goals.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 350px), 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
                        <div className="card" style={{ padding: "2.5rem" }}>
                            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                            </div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem" }}>Strategy Development</h3>
                            <p style={{ color: "var(--color-body)", lineHeight: 1.6 }}>We create customized, data-driven strategies based on your target audience, competitor analysis, industry trends, and platform-specific optimization for maximum ROI.</p>
                        </div>

                        <div className="card" style={{ padding: "2.5rem" }}>
                            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem" }}>Account Setup & Optimization</h3>
                            <p style={{ color: "var(--color-body)", lineHeight: 1.6 }}>We optimize your profiles for better visibility and conversions, including bio optimization, keyword implementation, branding consistency, and CTA setup.</p>
                        </div>

                        <div className="card" style={{ padding: "2.5rem" }}>
                            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                            </div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem" }}>Content Creation & Posting</h3>
                            <p style={{ color: "var(--color-body)", lineHeight: 1.6 }}>Content is the backbone of social media success. We create engaging posts, Reels & short videos, carousel posts, and educational and promotional content.</p>
                        </div>

                        <div className="card" style={{ padding: "2.5rem" }}>
                            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                            </div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem" }}>Social Media Advertising</h3>
                            <p style={{ color: "var(--color-body)", lineHeight: 1.6 }}>We run high-converting ad campaigns on Facebook, Instagram, and LinkedIn. This can be combined with our PPC services for maximum results.</p>
                        </div>

                        <div className="card" style={{ padding: "2.5rem" }}>
                            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                            </div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem" }}>Social Media Management</h3>
                            <p style={{ color: "var(--color-body)", lineHeight: 1.6 }}>We handle everything from posting and monitoring to engagement, reply management, and performance tracking, so you can focus on your business.</p>
                        </div>

                        <div className="card" style={{ padding: "2.5rem" }}>
                            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem" }}>Growth & Lead Generation</h3>
                            <p style={{ color: "var(--color-body)", lineHeight: 1.6 }}>We help you increase followers, generate leads, and grow your brand authority steadily and sustainably over time.</p>
                        </div>
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <Link href="/contact" className="btn-primary" style={{ display: "inline-flex" }}>
                            Start Growing Your Social Media Today
                        </Link>
                    </div>
                </div>
            </section>

            {/* PLATFORMS */}
            <section className="section" style={{ background: "var(--color-bg-white)", position: "relative" }}>
                <div className="section-inner" style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "3rem" }}>
                        Platforms <span style={{ color: "var(--color-primary)" }}>We Manage</span>
                    </h2>

                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
                        {["Instagram Marketing", "Facebook Marketing", "LinkedIn Marketing", "Twitter (X) Marketing", "YouTube Marketing"].map((p, i) => (
                            <div key={i} style={{ padding: "1rem 2rem", background: "var(--color-bg-light)", border: "1px solid var(--color-border)", borderRadius: "99px", fontWeight: 600, color: "var(--color-heading)" }}>
                                {p}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="section" style={{ background: "var(--color-bg-light)", position: "relative" }}>
                <div className="section-inner" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "3rem" }}>
                        Our Social Media Marketing <span style={{ color: "var(--color-primary)" }}>Process</span>
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", textAlign: "left", marginBottom: "3rem" }}>
                        {[
                            { step: "Business Analysis", desc: "Understanding your goals, audience, and competition." },
                            { step: "Strategy Creation", desc: "Developing a custom growth strategy." },
                            { step: "Content Creation", desc: "Producing high-quality, engaging content." },
                            { step: "Posting & Management", desc: "Publishing and managing your social presence." },
                            { step: "Tracking & Optimization", desc: "Continuously tracking performance and improving results." }
                        ].map((s, i) => (
                            <div key={i} style={{ padding: "1.5rem", border: "1px solid var(--color-border)", borderRadius: "12px", background: "#fff", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1.2rem", flexShrink: 0 }}>
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.25rem" }}>{s.step}</h3>
                                    <p style={{ color: "var(--color-body)", margin: 0 }}>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link href="/contact" className="btn-primary" style={{ display: "inline-flex" }}>
                        Get Started With SEO Masterr Today
                    </Link>
                </div>
            </section>

            {/* WHY CHOOSE SEO MASTERR */}
            <ServiceFeatures
                title={<>Why Choose <span style={{ color: "var(--color-primary)" }}>SEO Masterr</span></>}
                description="Businesses trust us because we focus on real business growth, not just vanity metrics. We offer:"
                features={[
                    { title: "Result-Driven Strategy", description: "" },
                    { title: "Experienced Team", description: "" },
                    { title: "Affordable Pricing", description: "" },
                    { title: "Custom Growth Plans", description: "" },
                    { title: "Transparent Reporting", description: "" },
                    { title: "Long-Term Results", description: "" }
                ]}
                imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                imageAlt="SEO Masterr Team"
            />

            {/* CROSS-SELL */}
            <section className="section" style={{ background: "var(--color-heading)", color: "#fff", position: "relative" }}>
                <div className="section-inner" style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem", color: "#fff" }}>
                        Get Complete Digital Growth
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem" }}>
                        To maximize your social media results, combine them with our other expert services:
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
                        <Link href="/services/seo" style={{ padding: "0.75rem 1.5rem", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "99px", color: "#fff" }}>SEO Services</Link>
                        <Link href="/services/web-development" style={{ padding: "0.75rem 1.5rem", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "99px", color: "#fff" }}>Web Development</Link>
                        <Link href="/services/email-marketing" style={{ padding: "0.75rem 1.5rem", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "99px", color: "#fff" }}>Email Marketing</Link>
                        <Link href="/services/ai-seo" style={{ padding: "0.75rem 1.5rem", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "99px", color: "#fff" }}>AI SEO</Link>
                        <Link href="/services/ppc-management" style={{ padding: "0.75rem 1.5rem", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "99px", color: "#fff" }}>PPC Ads</Link>
                        <Link href="/services/content-strategy" style={{ padding: "0.75rem 1.5rem", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "99px", color: "#fff" }}>Content Strategy</Link>
                        <Link href="/services/link-building" style={{ padding: "0.75rem 1.5rem", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "99px", color: "#fff" }}>Backlink Building</Link>
                    </div>

                    <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
                        <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>
                            Request Complete Digital Marketing Plan
                        </Link>
                        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "1rem 2.5rem", fontSize: "1.1rem", fontWeight: 700, borderRadius: "99px", background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.3)" }}>
                            Get Free Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHO NEEDS SMO / RESULTS */}
            <section className="section" style={{ background: "var(--color-bg-white)", position: "relative" }}>
                <div className="section-inner" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                    <div style={{ padding: "3rem", background: "var(--color-bg-light)", borderRadius: "24px", marginBottom: "3rem" }}>
                        <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>Who Needs Social Media Marketing Services?</h3>
                        <p style={{ color: "var(--color-body)", fontSize: "1.1rem" }}>
                            Our services are perfect for small businesses, startups, local businesses, service providers, e-commerce stores, and personal brands.
                        </p>
                    </div>

                    <div style={{ padding: "3rem", border: "2px solid var(--color-primary)", borderRadius: "24px" }}>
                        <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--color-primary)" }}>Results You Can Expect</h3>
                        <p style={{ color: "var(--color-heading)", fontSize: "1.1rem", fontWeight: 500 }}>
                            With SEO Masterr, you can expect increased followers, higher engagement, more leads, better brand awareness, and increased sales.
                        </p>
                    </div>
                </div>
            </section>

            <SmoFaq />

            <Footer />
        </main>
    );
}
