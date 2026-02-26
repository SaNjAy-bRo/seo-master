"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
    {
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="8" y1="11" x2="14" y2="11" /></svg>),
        title: "SEO Services",
        description: "Comprehensive SEO strategies to improve organic rankings, increase high-quality traffic, and build long-term online authority.",
        accent: "#F97316",
        href: "/services/seo"
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>),
        title: "Website Design",
        description: "Custom, SEO-optimized, and fast-loading websites designed to engage your audience and drive meaningful conversions.",
        accent: "#3B82F6",
        href: "/services/website-design"
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>),
        title: "Social Media Marketing",
        description: "Data-driven social strategies to grow your audience, increase engagement, and connect with your target market directly.",
        accent: "#EC4899",
        href: "/services/social-media-optimization"
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>),
        title: "Email Marketing",
        description: "Automated and personalized email campaigns designed to nurture leads, drive sales, and build customer loyalty.",
        accent: "#22C55E",
        href: "/services/email-marketing"
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>),
        title: "PPC Services",
        description: "ROI-focused Pay-Per-Click advertising campaigns to generate instant traffic, high-quality leads, and fast sales growth.",
        accent: "#A855F7",
        href: "/services/ppc-management"
    }
];

export default function Services() {
    const header = useScrollReveal();
    const s0 = useScrollReveal({ delay: 0 });
    const s1 = useScrollReveal({ delay: 100 });
    const s2 = useScrollReveal({ delay: 200 });
    const s3 = useScrollReveal({ delay: 150 });
    const s4 = useScrollReveal({ delay: 250 });
    const s5 = useScrollReveal({ delay: 350 });
    const cardRefs = [s0, s1, s2, s3, s4, s5];
    const ctaBtn = useScrollReveal({ delay: 200 });

    return (
        <section id="services" className="section" style={{ background: "var(--color-bg-white)", position: "relative" }}>
            <div className="section-inner">
                <div ref={header.ref} className={`reveal reveal-up ${header.isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span className="section-label">What We Do</span>
                    <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1rem" }}>
                        Services We <span style={{ color: "var(--color-primary)" }}>Provide</span>
                    </h2>
                    <p style={{ color: "var(--color-body)", maxWidth: 560, margin: "0 auto", fontSize: "1.05rem", lineHeight: 1.7 }}>
                        Comprehensive digital marketing solutions to grow your business and maximize your online presence.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "1.5rem" }} className="services-grid">
                    {services.map((service, i) => (
                        <div
                            key={service.title}
                            ref={cardRefs[i].ref}
                            className={`card reveal reveal-up ${cardRefs[i].isVisible ? "visible" : ""}`}
                            style={{
                                padding: "0",
                                display: "flex",
                                flexDirection: "column",
                                overflow: "hidden",
                                background: "#fff",
                            }}
                        >
                            {/* Color accent strip at top */}
                            <div style={{ height: 4, background: service.accent, borderRadius: "var(--radius-lg) var(--radius-lg) 0 0" }} />
                            <div style={{ padding: "1.75rem 2rem 2rem", display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
                                <div style={{
                                    width: 56, height: 56, borderRadius: 14,
                                    background: `${service.accent}12`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: service.accent,
                                }}>
                                    {service.icon}
                                </div>
                                <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>{service.title}</h3>
                                <p style={{ color: "var(--color-body)", fontSize: "0.938rem", lineHeight: 1.7, margin: 0 }}>{service.description}</p>
                                <a
                                    href={service.href}
                                    style={{ color: service.accent, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.375rem", marginTop: "auto", transition: "gap 0.2s" }}
                                    onMouseEnter={(e) => (e.currentTarget.style.gap = "0.75rem")}
                                    onMouseLeave={(e) => (e.currentTarget.style.gap = "0.375rem")}
                                >
                                    Learn More
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div ref={ctaBtn.ref} className={`reveal reveal-up ${ctaBtn.isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginTop: "3rem" }}>
                    <a href="#contact" className="btn-secondary">
                        View All Services
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </a>
                </div>
            </div>
            <style jsx>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
