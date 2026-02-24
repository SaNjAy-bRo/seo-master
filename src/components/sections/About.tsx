"use client";

export default function About() {
    const stats = [
        { icon: "🚀", value: "150+", label: "Projects Completed", color: "#F97316" },
        { icon: "👥", value: "80+", label: "Happy Clients", color: "#3B82F6" },
        { icon: "📈", value: "3x", label: "Average Growth", color: "#22C55E" },
        { icon: "🏆", value: "5+", label: "Years Experience", color: "#A855F7" },
    ];

    return (
        <section id="about" className="section" style={{ background: "var(--color-bg-orange-soft)", position: "relative", overflow: "hidden" }}>
            {/* Decorative corner shape */}
            <div style={{ position: "absolute", top: -80, right: -80, width: 280, height: 280, borderRadius: "50%", background: "rgba(249,115,22,0.06)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -60, left: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(249,115,22,0.04)", pointerEvents: "none" }} />

            <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="about-grid">
                    {/* Left */}
                    <div>
                        <span className="section-label">About Us</span>
                        <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1.5rem" }}>
                            Drive Traffic & Grow Your Business with{" "}
                            <span style={{ color: "var(--color-primary)" }}>Proven SEO Strategies</span>
                        </h2>
                        <p style={{ color: "var(--color-body)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                            Unlock your website&apos;s full potential with our result-driven SEO
                            services. Improve search rankings, increase organic traffic, and
                            grow your online presence with customized strategies tailored for
                            your business.
                        </p>
                        <p style={{ color: "var(--color-muted)", fontSize: "0.938rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                            Our team of certified digital marketing experts combines data-driven insights
                            with creative strategy to deliver measurable results. We don&apos;t just
                            optimize — we transform your digital presence.
                        </p>

                        {/* Features mini-list */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                            {["Data-driven keyword research & targeting", "White-hat link building strategies", "Transparent monthly reporting"].map((item) => (
                                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--gradient-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <span style={{ fontSize: "0.875rem", color: "var(--color-body)", fontWeight: 500 }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#services" className="btn-primary">
                            Learn More
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </a>
                    </div>

                    {/* Right — Stats */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="about-stats-grid">
                        {stats.map((stat, i) => (
                            <div
                                key={stat.label}
                                className="card"
                                style={{
                                    padding: "1.75rem",
                                    textAlign: "center",
                                    transform: i % 2 !== 0 ? "translateY(1.5rem)" : "none",
                                    background: "#fff",
                                    boxShadow: "var(--shadow-warm)",
                                }}
                            >
                                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{stat.icon}</div>
                                <div style={{ fontSize: "2rem", fontWeight: 800, color: stat.color, marginBottom: "0.25rem" }}>{stat.value}</div>
                                <div style={{ fontSize: "0.813rem", color: "var(--color-muted)" }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; text-align: center; }
          .about-stats-grid > div { transform: none !important; }
        }
      `}</style>
        </section>
    );
}
