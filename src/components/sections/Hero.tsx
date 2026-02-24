"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
    const label = useScrollReveal({ delay: 200 });
    const heading = useScrollReveal({ delay: 400 });
    const desc = useScrollReveal({ delay: 600 });
    const btns = useScrollReveal({ delay: 800 });
    const stats = useScrollReveal({ delay: 1000 });
    const visual = useScrollReveal({ delay: 600, rootMargin: "0px" });

    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                padding: "7rem 1.5rem 5rem",
                background: "var(--color-bg-dark)",
            }}
        >
            {/* Subtle gradient overlays */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 40%, rgba(249,115,22,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to bottom, transparent, rgba(15,15,15,1))", pointerEvents: "none", zIndex: 1 }} />

            <div className="section-inner" style={{ position: "relative", zIndex: 2 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "3rem", alignItems: "center" }} className="hero-grid">
                    {/* Left */}
                    <div>
                        <div ref={label.ref} className={`reveal reveal-up ${label.isVisible ? "visible" : ""}`}>
                            <span className="section-label section-label-dark" style={{ marginBottom: "1.5rem" }}>
                                Digital Growth Agency
                            </span>
                        </div>
                        <div ref={heading.ref} className={`reveal reveal-up ${heading.isVisible ? "visible" : ""}`}>
                            <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, lineHeight: 1.08, marginBottom: "1.5rem", color: "#fff", letterSpacing: "-0.03em" }}>
                                Boost Your Online Presence with Expert{" "}
                                <span style={{
                                    background: "linear-gradient(135deg, #F97316, #FBBF24)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}>SEO, SMO & PPC</span>{" "}
                                Services
                            </h1>
                        </div>
                        <div ref={desc.ref} className={`reveal reveal-up ${desc.isVisible ? "visible" : ""}`}>
                            <p style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.125rem)", color: "var(--color-body-dark)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: 520 }}>
                                Drive more traffic, generate leads, and grow your business with our
                                result-driven SEO, social media optimization, and paid advertising
                                strategies. Tailored solutions to help your brand stand out online.
                            </p>
                        </div>
                        <div ref={btns.ref} className={`reveal reveal-up hero-btns ${btns.isVisible ? "visible" : ""}`} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <a href="#contact" className="btn-primary">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                Speak to Expert
                            </a>
                            <a href="#services" className="btn-outline-light">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                                </svg>
                                Our Services
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div ref={stats.ref} className={`reveal reveal-up hero-stats ${stats.isVisible ? "visible" : ""}`} style={{ display: "flex", gap: "2.5rem", marginTop: "3.5rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border-dark)", flexWrap: "wrap" }}>
                            {[
                                { value: "150+", label: "Projects Delivered" },
                                { value: "98%", label: "Client Retention" },
                                { value: "3x", label: "Avg Traffic Growth" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--color-primary)" }}>{stat.value}</div>
                                    <div style={{ fontSize: "0.813rem", color: "var(--color-muted-dark)", marginTop: "0.25rem" }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Visual */}
                    <div ref={visual.ref} className={`reveal reveal-right ${visual.isVisible ? "visible" : ""} hero-visual`} style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: "100%", maxWidth: 420, aspectRatio: "1", borderRadius: "50%", background: "radial-gradient(circle at 30% 30%, rgba(249,115,22,0.12) 0%, transparent 70%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                            {/* Floating cards */}
                            <div className="card-dark animate-float" style={{ position: "absolute", top: "8%", right: "-8%", padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.75rem", animationDelay: "0s" }}>
                                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(34,197,94,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                                </div>
                                <div>
                                    <div style={{ fontSize: "0.75rem", color: "var(--color-muted-dark)" }}>Traffic</div>
                                    <div style={{ fontWeight: 700, color: "#22c55e", fontSize: "1rem" }}>+127%</div>
                                </div>
                            </div>

                            <div className="card-dark animate-float" style={{ position: "absolute", bottom: "15%", left: "-12%", padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.75rem", animationDelay: "2s" }}>
                                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(249,115,22,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                </div>
                                <div>
                                    <div style={{ fontSize: "0.75rem", color: "var(--color-muted-dark)" }}>Rankings</div>
                                    <div style={{ fontWeight: 700, color: "var(--color-primary)", fontSize: "1rem" }}>Top 5</div>
                                </div>
                            </div>

                            <div className="card-dark animate-float" style={{ position: "absolute", bottom: "3%", right: "3%", padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.75rem", animationDelay: "4s" }}>
                                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(59,130,246,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                </div>
                                <div>
                                    <div style={{ fontSize: "0.75rem", color: "var(--color-muted-dark)" }}>Leads</div>
                                    <div style={{ fontWeight: 700, color: "#3b82f6", fontSize: "1rem" }}>+85%</div>
                                </div>
                            </div>

                            {/* Center Icon */}
                            <div style={{ width: 100, height: 100, borderRadius: 24, background: "var(--gradient-primary)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 60px rgba(249,115,22,0.25)" }}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; gap: 2rem !important; }
          .hero-visual { display: none !important; }
          .hero-btns { justify-content: center; }
          .hero-stats { justify-content: center; gap: 1.5rem !important; }
        }
      `}</style>
        </section>
    );
}
