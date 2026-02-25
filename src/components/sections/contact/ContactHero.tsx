"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactHero() {
    const label = useScrollReveal({ delay: 200 });
    const heading = useScrollReveal({ delay: 400 });
    const desc = useScrollReveal({ delay: 600 });
    const visual = useScrollReveal({ delay: 600, rootMargin: "0px" });

    return (
        <section
            style={{
                minHeight: "80vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                padding: "8rem 1.5rem 5rem",
                background: "var(--color-bg-dark)",
            }}
        >
            {/* Subtle gradient overlays analogous to homepage Hero */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 40%, rgba(249,115,22,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to bottom, transparent, rgba(15,15,15,1))", pointerEvents: "none", zIndex: 1 }} />

            <div className="section-inner" style={{ position: "relative", zIndex: 2 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "4rem", alignItems: "center" }} className="hero-grid">
                    {/* Left Side text content */}
                    <div>
                        <div ref={label.ref} className={`reveal reveal-up ${label.isVisible ? "visible" : ""}`}>
                            <span className="section-label section-label-dark" style={{ marginBottom: "1.5rem" }}>
                                Contact Us
                            </span>
                        </div>
                        <div ref={heading.ref} className={`reveal reveal-up ${heading.isVisible ? "visible" : ""}`}>
                            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.05, marginBottom: "1.5rem", color: "#fff", letterSpacing: "-0.03em" }}>
                                Get in <span style={{
                                    background: "linear-gradient(135deg, #F97316, #FBBF24)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}>Touch</span> with<br />Seo Masterr
                            </h1>
                        </div>
                        <div ref={desc.ref} className={`reveal reveal-up ${desc.isVisible ? "visible" : ""}`}>
                            <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.15rem)", color: "var(--color-body-dark)", lineHeight: 1.8, maxWidth: 540 }}>
                                Have questions or need expert SEO guidance? Reach out to our team today, and
                                we'll help you grow your online presence, improve search rankings, and achieve
                                your digital marketing goals.
                            </p>
                        </div>
                    </div>

                    {/* Right Side Visual (Unsplash Placeholder via img) */}
                    <div ref={visual.ref} className={`reveal reveal-right ${visual.isVisible ? "visible" : ""} hero-visual`} style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ position: "relative", width: "100%", maxWidth: 440, aspectRatio: "1/1", borderRadius: "50%", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 80px rgba(249,115,22,0.15)" }}>
                            <img
                                src="https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=800&q=80"
                                alt="SEO Consultation"
                                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                            />
                            {/* Orange tint overlay to vibe with website */}
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(45deg, rgba(249,115,22,0.4) 0%, transparent 100%)", mixBlendMode: "overlay" }} />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 900px) {
                    .hero-grid { grid-template-columns: 1fr !important; text-align: center; gap: 3rem !important; }
                    .hero-visual { display: flex !important; margin-top: 1rem; }
                    .hero-visual > div { border-radius: 32px !important; max-width: 500px !important; aspectRatio: 4/3 !important; }
                }
            `}</style>
        </section>
    );
}
