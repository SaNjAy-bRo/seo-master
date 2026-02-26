"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const seoServicesData = [
    {
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>),
        title: "On-Page SEO",
        description: "In-depth keyword research, meta tag optimization, structured heading hierarchy (H1-H6), search intent alignment, and internal linking strategies.",
        accent: "#3B82F6",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="8" y1="11" x2="14" y2="11" /></svg>),
        title: "Technical SEO",
        description: "Improving crawlability and indexability, boosting Core Web Vitals, ensuring mobile-friendliness, and resolving canonical or redirect issues.",
        accent: "#F97316",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>),
        title: "Off-Page SEO & Link Building",
        description: "Acquiring contextual links from authoritative sites, securing brand mentions, and analyzing spam links to strengthen domain trust.",
        accent: "#22C55E",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>),
        title: "Local SEO",
        description: "Optimizing Google Business Profiles, ensuring NAP consistency, and generating location-based content and citations for local visibility.",
        accent: "#A855F7",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>),
        title: "SEO Optimized Website Design",
        description: "Building fast-loading, mobile-responsive websites with clean architectures, user-friendly navigation, and conversion-focused layouts.",
        accent: "#EC4899",
    }
];

export default function SeoServices() {
    const header = useScrollReveal();
    const s0 = useScrollReveal({ delay: 0 });
    const s1 = useScrollReveal({ delay: 100 });
    const s2 = useScrollReveal({ delay: 200 });
    const s3 = useScrollReveal({ delay: 150 });
    const s4 = useScrollReveal({ delay: 250 });
    const cardRefs = [s0, s1, s2, s3, s4];

    return (
        <section className="section" style={{ background: "var(--color-bg-white)", position: "relative" }}>
            <div className="section-inner">
                <div ref={header.ref} className={`reveal reveal-up ${header.isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span className="section-label">What We Offer</span>
                    <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1rem" }}>
                        Our Comprehensive <span style={{ color: "var(--color-primary)" }}>Suite of SEO Solutions</span>
                    </h2>
                    <p style={{ color: "var(--color-body)", maxWidth: 660, margin: "0 auto", fontSize: "1.05rem", lineHeight: 1.7 }}>
                        We offer tailored services to meet your specific needs, whether you're a startup, a local business, or an established E-Commerce brand.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "1.5rem" }} className="services-grid">
                    {seoServicesData.map((service, i) => (
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
                            <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
                                <div style={{
                                    width: 56, height: 56, borderRadius: 14,
                                    background: `${service.accent}12`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: service.accent,
                                }}>
                                    {service.icon}
                                </div>
                                <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>{service.title}</h3>
                                <p style={{ color: "var(--color-body)", fontSize: "0.938rem", lineHeight: 1.7, margin: 0 }}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
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
