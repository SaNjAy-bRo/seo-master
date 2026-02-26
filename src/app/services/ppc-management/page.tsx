"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Image from "next/image";
import Link from "next/link";
import PpcFaq from "@/components/sections/services/PpcFaq";

export default function PpcManagementPage() {
    const heroHeader = useScrollReveal();
    const heroBtn = useScrollReveal({ delay: 300 });

    const platformsHeader = useScrollReveal();
    const platformsList = [
        useScrollReveal({ delay: 100 }),
        useScrollReveal({ delay: 150 }),
        useScrollReveal({ delay: 200 }),
        useScrollReveal({ delay: 250 }),
    ];
    const platformsBtn = useScrollReveal({ delay: 350 });

    const benefitsHeader = useScrollReveal();
    const benefitsList = [
        useScrollReveal({ delay: 100 }),
        useScrollReveal({ delay: 150 }),
        useScrollReveal({ delay: 200 }),
        useScrollReveal({ delay: 250 }),
        useScrollReveal({ delay: 300 }),
    ];

    const servicesHeader = useScrollReveal();
    const servicesGrid = [
        useScrollReveal({ delay: 100 }),
        useScrollReveal({ delay: 150 }),
        useScrollReveal({ delay: 200 }),
        useScrollReveal({ delay: 250 }),
        useScrollReveal({ delay: 300 }),
    ];

    const whyChooseHeader = useScrollReveal();
    const whyChooseList = [
        useScrollReveal({ delay: 100 }),
        useScrollReveal({ delay: 150 }),
        useScrollReveal({ delay: 200 }),
        useScrollReveal({ delay: 250 }),
    ];
    const whyChooseBtn = useScrollReveal({ delay: 350 });

    const ctaHeader = useScrollReveal();
    const ctaBtns = useScrollReveal({ delay: 200 });

    return (
        <main>
            {/* HERO SECTION */}
            <section
                className="section hero-section"
                style={{
                    background: "linear-gradient(135deg, #111111 0%, #000000 100%)",
                    position: "relative",
                    overflow: "hidden",
                    color: "#ffffff"
                }}
            >
                {/* Background Details */}
                <div style={{
                    position: "absolute", top: "-10%", right: "-5%", width: "600px", height: "600px",
                    background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(0,0,0,0) 70%)",
                    borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none"
                }} />

                <div className="section-inner" style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                    <div ref={heroHeader.ref} className={`reveal reveal-up ${heroHeader.isVisible ? "visible" : ""}`} style={{ maxWidth: "800px" }}>
                        <span className="section-label" style={{ background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", borderColor: "rgba(249,115,22,0.2)" }}>
                            PPC Services Agency | Google Ads Management
                        </span>
                        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.5rem", color: "#fff" }}>
                            PPC Services That Drive <span style={{ color: "var(--color-primary)", display: "inline-block" }}>Instant Traffic, Leads, and Sales</span>
                        </h1>
                        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(1.1rem, 2vw, 1.25rem)", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "700px", margin: "0 auto 1.5rem" }}>
                            If you want instant traffic and fast business growth, PPC (Pay Per Click) advertising is the most powerful solution.
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "700px", margin: "0 auto 2.5rem" }}>
                            At SEO Masterr, we provide ROI-focused PPC Services to help your business generate high-quality leads, increase sales, and maximize your advertising returns. We create, manage, and optimize paid ad campaigns that deliver measurable results.
                        </p>
                    </div>

                    <div ref={heroBtn.ref} className={`reveal reveal-up ${heroBtn.isVisible ? "visible" : ""}`}>
                        <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
                            Get Free PPC Strategy
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHAT ARE PPC SERVICES */}
            <section className="section" style={{ background: "var(--color-bg-white)", position: "relative" }}>
                <div className="section-inner">
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
                        <div style={{ flex: "1 1 500px" }}>
                            <div ref={platformsHeader.ref} className={`reveal reveal-up ${platformsHeader.isVisible ? "visible" : ""}`}>
                                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
                                    What Are <span style={{ color: "var(--color-primary)" }}>PPC Services?</span>
                                </h2>
                                <p style={{ color: "var(--color-body)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                    PPC Services help businesses advertise on platforms like:
                                </p>

                                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    {["Google Ads", "YouTube Ads", "Facebook Ads", "Instagram Ads"].map((item, i) => (
                                        <li key={i} ref={platformsList[i].ref as any} className={`reveal reveal-up ${platformsList[i].isVisible ? "visible" : ""}`} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </div>
                                            <span style={{ fontSize: "1.05rem", color: "var(--color-heading)", fontWeight: 600 }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p style={{ color: "var(--color-body)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                                    You only pay when someone clicks on your ad.<br />
                                    This makes PPC one of the most cost-effective digital marketing strategies.
                                </p>

                                <div ref={platformsBtn.ref} className={`reveal reveal-up ${platformsBtn.isVisible ? "visible" : ""}`}>
                                    <Link href="/contact" className="btn-primary" style={{ display: "inline-flex" }}>
                                        Start Your PPC Campaign
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div style={{ flex: "1 1 500px", position: "relative" }}>
                            <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "var(--radius-2xl)", overflow: "hidden", boxShadow: "var(--shadow-xl)" }}>
                                <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="PPC Ad Platforms Data" fill style={{ objectFit: "cover", objectPosition: "center" }} sizes="(max-width: 768px) 100vw, 50vw" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY PPC SETCTION */}
            <section className="section" style={{ background: "var(--color-bg-light)", position: "relative" }}>
                <div className="section-inner" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                    <div ref={benefitsHeader.ref} className={`reveal reveal-up ${benefitsHeader.isVisible ? "visible" : ""}`}>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
                            Why PPC Is Important for Your <span style={{ color: "var(--color-primary)" }}>Business</span>
                        </h2>
                        <p style={{ color: "var(--color-body)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                            Benefits of PPC advertising:
                        </p>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center", marginBottom: "3rem" }}>
                        {["Instant website traffic", "High-quality leads", "Fast sales growth", "Full budget control", "Measurable ROI"].map((benefit, i) => (
                            <div key={i} ref={benefitsList[i].ref as any} className={`reveal reveal-up ${benefitsList[i].isVisible ? "visible" : ""}`} style={{
                                background: "#fff", padding: "1rem 1.5rem", borderRadius: "99px", boxShadow: "var(--shadow-sm)",
                                display: "flex", alignItems: "center", gap: "0.75rem", border: "1px solid var(--color-border)"
                            }}>
                                <div style={{ color: "var(--color-primary)" }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <span style={{ fontWeight: 600, color: "var(--color-heading)" }}>{benefit}</span>
                            </div>
                        ))}
                    </div>

                    <p style={{ color: "var(--color-heading)", fontSize: "1.25rem", fontWeight: 700 }}>
                        PPC works faster than organic marketing.
                    </p>
                </div>
            </section>

            {/* OUR PROFESSIONAL PPC SERVICES */}
            <section className="section" style={{ background: "var(--color-bg-white)", position: "relative" }}>
                <div className="section-inner">
                    <div ref={servicesHeader.ref} className={`reveal reveal-up ${servicesHeader.isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
                            Our Professional <span style={{ color: "var(--color-primary)" }}>PPC Services</span>
                        </h2>
                        <p style={{ color: "var(--color-body)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            SEO Masterr provides complete PPC campaign management.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 350px), 1fr))", gap: "1.5rem" }}>

                        {/* Google Ads */}
                        <div ref={servicesGrid[0].ref as any} className={`card reveal reveal-up ${servicesGrid[0].isVisible ? "visible" : ""}`} style={{ display: "flex", flexDirection: "column", height: "100%", padding: "2.5rem" }}>
                            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "1rem" }}>Google Ads Management Services</h3>
                            <p style={{ color: "var(--color-body)", marginBottom: "1.5rem" }}>We create and manage profitable Google Ads campaigns. Includes:</p>
                            <ul style={{ listStyle: "circle", paddingLeft: "1.25rem", color: "var(--color-heading)", fontWeight: 500, display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem", flex: 1 }}>
                                <li>Search Ads</li>
                                <li>Display Ads</li>
                                <li>Shopping Ads</li>
                                <li>YouTube Ads</li>
                            </ul>
                            <Link href="/contact" className="btn-secondary" style={{ alignSelf: "flex-start", fontSize: "0.9rem", padding: "0.75rem 1.5rem" }}>
                                Launch Google Ads Today
                            </Link>
                        </div>

                        {/* Facebook & IG */}
                        <div ref={servicesGrid[1].ref as any} className={`card reveal reveal-up ${servicesGrid[1].isVisible ? "visible" : ""}`} style={{ display: "flex", flexDirection: "column", height: "100%", padding: "2.5rem" }}>
                            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "1rem" }}>Facebook & Instagram Ads Management</h3>
                            <p style={{ color: "var(--color-body)", marginBottom: "1.5rem" }}>Reach your ideal audience on social media platforms. Includes:</p>
                            <ul style={{ listStyle: "circle", paddingLeft: "1.25rem", color: "var(--color-heading)", fontWeight: 500, display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem", flex: 1 }}>
                                <li>Lead generation ads</li>
                                <li>Sales ads</li>
                                <li>Brand awareness ads</li>
                            </ul>
                        </div>

                        {/* Keyword Research */}
                        <div ref={servicesGrid[2].ref as any} className={`card reveal reveal-up ${servicesGrid[2].isVisible ? "visible" : ""}`} style={{ display: "flex", flexDirection: "column", height: "100%", padding: "2.5rem" }}>
                            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "1rem" }}>Keyword Research for PPC</h3>
                            <p style={{ color: "var(--color-body)", marginBottom: "1.5rem" }}>We find high-converting and profitable keywords. This ensures maximum ROI.</p>
                        </div>

                        {/* Setup */}
                        <div ref={servicesGrid[3].ref as any} className={`card reveal reveal-up ${servicesGrid[3].isVisible ? "visible" : ""}`} style={{ display: "flex", flexDirection: "column", height: "100%", padding: "2.5rem" }}>
                            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "1rem" }}>PPC Campaign Setup</h3>
                            <p style={{ color: "var(--color-body)", marginBottom: "1.5rem" }}>We setup campaigns professionally. Includes:</p>
                            <ul style={{ listStyle: "circle", paddingLeft: "1.25rem", color: "var(--color-heading)", fontWeight: 500, display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem", flex: 1 }}>
                                <li>Account setup</li>
                                <li>Campaign structure</li>
                                <li>Audience targeting</li>
                                <li>Conversion tracking</li>
                            </ul>
                        </div>

                        {/* Optimization */}
                        <div ref={servicesGrid[4].ref as any} className={`card reveal reveal-up ${servicesGrid[4].isVisible ? "visible" : ""}`} style={{ display: "flex", flexDirection: "column", height: "100%", padding: "2.5rem" }}>
                            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "1rem" }}>PPC Optimization and Management</h3>
                            <p style={{ color: "var(--color-body)", marginBottom: "1.5rem" }}>We continuously optimize your campaigns. Includes:</p>
                            <ul style={{ listStyle: "circle", paddingLeft: "1.25rem", color: "var(--color-heading)", fontWeight: 500, display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem", flex: 1 }}>
                                <li>Bid optimization</li>
                                <li>Ad copy testing</li>
                                <li>Conversion optimization</li>
                                <li>ROI improvement</li>
                            </ul>
                            <Link href="/contact" className="btn-secondary" style={{ alignSelf: "flex-start", fontSize: "0.9rem", padding: "0.75rem 1.5rem" }}>
                                Improve Your PPC ROI
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SEO MASTERR */}
            <section className="section" style={{ background: "var(--color-bg-light)", position: "relative" }}>
                <div className="section-inner">
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
                        <div style={{ flex: "1 1 500px" }}>
                            <div ref={whyChooseHeader.ref} className={`reveal reveal-up ${whyChooseHeader.isVisible ? "visible" : ""}`}>
                                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
                                    Why Choose SEO Masterr as Your <span style={{ color: "var(--color-primary)" }}>PPC Agency</span>
                                </h2>
                                <p style={{ color: "var(--color-body)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                                    We focus on real business growth.
                                </p>

                                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
                                    {[
                                        { title: "ROI-Focused Campaigns", desc: "We focus on profit, not just clicks." },
                                        { title: "Certified PPC Experts", desc: "Experienced professionals manage your ads." },
                                        { title: "Conversion-Focused Strategy", desc: "We maximize leads and sales." },
                                        { title: "Transparent Reporting", desc: "You get clear performance reports." }
                                    ].map((item, i) => (
                                        <div key={i} ref={whyChooseList[i].ref as any} className={`reveal reveal-up ${whyChooseList[i].isVisible ? "visible" : ""}`} style={{ display: "flex", gap: "1rem" }}>
                                            <div style={{ color: "#22C55E", flexShrink: 0, marginTop: "2px" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </div>
                                            <div>
                                                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-heading)", marginBottom: "0.25rem" }}>{item.title}</h4>
                                                <p style={{ color: "var(--color-body)", margin: 0 }}>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div ref={whyChooseBtn.ref} className={`reveal reveal-up ${whyChooseBtn.isVisible ? "visible" : ""}`}>
                                    <Link href="/contact" className="btn-primary" style={{ display: "inline-flex" }}>
                                        Get Free PPC Audit
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div style={{ flex: "1 1 500px", position: "relative" }}>
                            <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "var(--radius-2xl)", overflow: "hidden", boxShadow: "var(--shadow-xl)" }}>
                                <Image src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop" alt="PPC Agency Experts Analysis" fill style={{ objectFit: "cover", objectPosition: "center" }} sizes="(max-width: 768px) 100vw, 50vw" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="section" style={{ background: "var(--color-bg-white)", position: "relative" }}>
                <div className="section-inner" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "3rem" }}>
                        Our PPC Management <span style={{ color: "var(--color-primary)" }}>Process</span>
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", textAlign: "left", marginBottom: "3rem" }}>
                        {[
                            { step: "Step 1: Business Analysis", desc: "We understand your business goals." },
                            { step: "Step 2: Keyword Research", desc: "We find profitable keywords." },
                            { step: "Step 3: Campaign Setup", desc: "We create optimized campaigns." },
                            { step: "Step 4: Campaign Launch", desc: "We launch ads professionally." },
                            { step: "Step 5: Optimization", desc: "We improve performance continuously." }
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
                        Start Getting Leads Today
                    </Link>
                </div>
            </section>

            {/* FINAL CTA & COMPARISON */}
            <section className="section" style={{ background: "var(--color-heading)", color: "#fff", textAlign: "center" }}>
                <div className="section-inner" style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <div ref={ctaHeader.ref} className={`reveal reveal-up ${ctaHeader.isVisible ? "visible" : ""}`}>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem", color: "#fff" }}>
                            Get Started with PPC Services Today
                        </h2>
                        <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.8)", marginBottom: "2.5rem" }}>
                            Ready to grow your business fast? SEO Masterr is a performance-driven digital marketing agency focused on real results.
                        </p>
                    </div>

                    <div ref={ctaBtns.ref} className={`reveal reveal-up ${ctaBtns.isVisible ? "visible" : ""}`} style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
                        <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>
                            Get Free Consultation
                        </Link>
                        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "1rem 2.5rem", fontSize: "1.1rem", fontWeight: 700, borderRadius: "99px", background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.3)" }}>
                            Contact SEO Masterr
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <PpcFaq />

            <style jsx>{`
                .hero-section {
                    padding-top: 12rem;
                    padding-bottom: 8rem;
                }
                @media (max-width: 768px) {
                    .hero-section {
                        padding-top: 5rem !important;
                        padding-bottom: 3rem !important;
                    }
                }
            `}</style>
        </main>
    );
}
