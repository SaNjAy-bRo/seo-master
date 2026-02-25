"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Image from "next/image";

export default function AboutHero() {
    const label = useScrollReveal({ delay: 200 });
    const heading = useScrollReveal({ delay: 400 });
    const desc = useScrollReveal({ delay: 600 });
    const visual = useScrollReveal({ delay: 600, rootMargin: "0px" });

    return (
        <section
            style={{
                minHeight: "100vh",
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
                <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "3rem", alignItems: "center" }} className="hero-grid">
                    {/* Left Side text content */}
                    <div>
                        <div ref={label.ref} className={`reveal reveal-up ${label.isVisible ? "visible" : ""}`}>
                            <span className="section-label section-label-dark" style={{ marginBottom: "1.5rem" }}>
                                About Us
                            </span>
                        </div>
                        <div ref={heading.ref} className={`reveal reveal-up ${heading.isVisible ? "visible" : ""}`}>
                            <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, lineHeight: 1.08, marginBottom: "1.5rem", color: "#fff", letterSpacing: "-0.03em" }}>
                                Seo Masterr – Boost Your Online Presence with Expert{" "}
                                <span style={{
                                    background: "linear-gradient(135deg, #F97316, #FBBF24)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}>SEO Solutions</span>
                            </h1>
                        </div>
                        <div ref={desc.ref} className={`reveal reveal-up ${desc.isVisible ? "visible" : ""}`}>
                            <p style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.125rem)", color: "var(--color-body-dark)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: 520 }}>
                                Seo Masterr helps businesses grow online through advanced SEO, SMO, and PPC strategies. We
                                optimize your website, improve search rankings, and drive targeted traffic to increase visibility,
                                leads, and sales.
                            </p>
                        </div>
                    </div>

                    {/* Right Side Visual (Unsplash Placeholder) */}
                    <div ref={visual.ref} className={`reveal reveal-right ${visual.isVisible ? "visible" : ""} hero-visual`} style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ position: "relative", width: "100%", maxWidth: 500, aspectRatio: "4/3", borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 80px rgba(249,115,22,0.15)" }}>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
                                alt="SEO Strategy Laptop"
                                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                            />
                            {/* Orange tint overlay to vibe with website */}
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(45deg, rgba(249,115,22,0.3) 0%, transparent 100%)", mixBlendMode: "overlay" }} />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .hero-grid { grid-template-columns: 1fr !important; text-align: center; gap: 2.5rem !important; }
                    .hero-visual { display: flex !important; margin-top: 1rem; }
                }
            `}</style>
        </section>
    );
}
