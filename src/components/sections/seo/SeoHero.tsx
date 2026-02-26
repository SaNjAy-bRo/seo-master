"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";

export default function SeoHero() {
    const header = useScrollReveal();
    const btn = useScrollReveal({ delay: 200 });
    const checks = useScrollReveal({ delay: 300 });

    return (
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
                position: "absolute",
                top: "-10%",
                right: "-5%",
                width: "600px",
                height: "600px",
                background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(0,0,0,0) 70%)",
                borderRadius: "50%",
                filter: "blur(40px)",
                pointerEvents: "none"
            }} />

            <div className="section-inner" style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div ref={header.ref} className={`reveal reveal-up ${header.isVisible ? "visible" : ""}`} style={{ maxWidth: "800px" }}>
                    <span className="section-label" style={{ background: "rgba(249,115,22,0.1)", color: "var(--color-primary)", borderColor: "rgba(249,115,22,0.2)" }}>
                        Professional SEO Services
                    </span>
                    <h1 style={{
                        fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: "1.5rem",
                        color: "#fff"
                    }}>
                        Elevate Your Visibility with <span style={{ color: "var(--color-primary)", display: "inline-block" }}>Expert SEO Services</span>
                    </h1>
                    <p style={{
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                        lineHeight: 1.7,
                        marginBottom: "2.5rem",
                        maxWidth: "700px",
                        margin: "0 auto 2.5rem"
                    }}>
                        At SEO Masterr, we specialize in driving sustainable, organic growth for businesses of all sizes. Our data-driven, white-hat SEO strategies are designed to improve your search engine rankings, attract qualified traffic, and build lasting online authority.
                    </p>
                </div>

                <div ref={checks.ref} className={`reveal reveal-up ${checks.isVisible ? "visible" : ""}`} style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1.5rem",
                    justifyContent: "center",
                    marginBottom: "3rem"
                }}>
                    {["Ethical strategies", "Data-driven execution", "Sustainable results"].map((check, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#fff", fontWeight: 600 }}>
                            <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                            {check}
                        </div>
                    ))}
                </div>

                <div ref={btn.ref} className={`reveal reveal-up ${btn.isVisible ? "visible" : ""}`}>
                    <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
                        Elevate Visibility Now
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </Link>
                </div>
            </div>
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
        </section>
    );
}
