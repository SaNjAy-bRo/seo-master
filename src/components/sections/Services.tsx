"use client";

const services = [
    {
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="8" y1="11" x2="14" y2="11" /></svg>),
        title: "Technical SEO",
        description: "Site speed optimization, crawlability fixes, schema markup, and Core Web Vitals improvements to build a solid foundation.",
        accent: "#F97316",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>),
        title: "On-Page SEO",
        description: "Keyword research, content optimization, meta tags, internal linking, and heading structure to maximize ranking potential.",
        accent: "#3B82F6",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>),
        title: "Link Building",
        description: "High-authority backlink acquisition through outreach, guest posting, and digital PR to boost domain authority.",
        accent: "#22C55E",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>),
        title: "PPC Management",
        description: "Data-driven Google & social ads campaigns with continuous A/B testing and ROI optimization for maximum conversions.",
        accent: "#A855F7",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>),
        title: "Social Media Optimization",
        description: "Platform-specific strategies for LinkedIn, Instagram, YouTube, and more to build engagement and brand authority.",
        accent: "#EC4899",
    },
    {
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>),
        title: "Content Strategy",
        description: "SEO-driven content planning, blog writing, and copywriting that ranks, engages, and converts your target audience.",
        accent: "#F59E0B",
    },
];

export default function Services() {
    return (
        <section id="services" className="section" style={{ background: "var(--color-bg-white)", position: "relative" }}>
            <div className="section-inner">
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span className="section-label">What We Do</span>
                    <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1rem" }}>
                        Services We <span style={{ color: "var(--color-primary)" }}>Provide</span>
                    </h2>
                    <p style={{ color: "var(--color-body)", maxWidth: 560, margin: "0 auto", fontSize: "1.05rem", lineHeight: 1.7 }}>
                        Comprehensive digital marketing solutions to grow your business and maximize your online presence.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }} className="services-grid">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="card"
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
                                    href="#contact"
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

                <div style={{ textAlign: "center", marginTop: "3rem" }}>
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
