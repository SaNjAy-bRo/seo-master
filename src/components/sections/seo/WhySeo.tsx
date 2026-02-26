"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";
import Image from "next/image";

export default function WhySeo() {
    const header = useScrollReveal();
    const list = [
        useScrollReveal({ delay: 100 }),
        useScrollReveal({ delay: 150 }),
        useScrollReveal({ delay: 200 }),
        useScrollReveal({ delay: 250 }),
        useScrollReveal({ delay: 300 }),
    ];
    const imageReveal = useScrollReveal({ delay: 200, threshold: 0.1 });
    const btnReveal = useScrollReveal({ delay: 350 });

    const benefits = [
        "Secure higher positions on Google search results.",
        "Boost the volume and quality of your organic traffic.",
        "Enhance overall website performance and user experience.",
        "Establish long-term online credibility and authority.",
        "Decrease reliance on costly paid advertising channels."
    ];

    return (
        <section className="section" style={{ background: "var(--color-bg-light)", position: "relative" }}>
            <div className="section-inner">
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>

                    {/* Left: Text Content */}
                    <div style={{ flex: "1 1 500px" }}>
                        <div ref={header.ref} className={`reveal reveal-up ${header.isVisible ? "visible" : ""}`}>
                            <span className="section-label">Why Us?</span>
                            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
                                Why <span style={{ color: "var(--color-primary)" }}>Ethical SEO Service</span> Essential for Success
                            </h2>
                            <p style={{ color: "var(--color-body)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                                In today's competitive digital landscape, a strong foundation in ethical SEO is non-negotiable. We focus on techniques that align with Google's guidelines, ensuring your website's safety and stability for the long haul.
                            </p>

                            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.25rem", color: "var(--color-heading)" }}>
                                Effective SEO helps you:
                            </h3>

                            <div style={{ padding: 0, margin: "0 0 2.5rem 0", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {benefits.map((benefit, i) => (
                                    <div
                                        key={i}
                                        ref={list[i].ref as React.Ref<HTMLDivElement>}
                                        className={`reveal reveal-up ${list[i].isVisible ? "visible" : ""}`}
                                        style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}
                                    >
                                        <div style={{
                                            width: 24, height: 24, borderRadius: "50%", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)",
                                            flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "4px"
                                        }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        </div>
                                        <span style={{ fontSize: "1.05rem", color: "var(--color-heading)", lineHeight: 1.5, fontWeight: 500 }}>
                                            {benefit}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div ref={btnReveal.ref} className={`reveal reveal-up ${btnReveal.isVisible ? "visible" : ""}`}>
                                <Link href="/contact" className="btn-primary" style={{ display: "inline-flex" }}>
                                    Get Your Free Audit
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right: Graphic / Image */}
                    <div
                        ref={imageReveal.ref}
                        className={`reveal reveal-left ${imageReveal.isVisible ? "visible" : ""}`}
                        style={{ flex: "1 1 500px", position: "relative" }}
                    >
                        <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "var(--radius-2xl)", overflow: "hidden", boxShadow: "var(--shadow-xl)" }}>
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(45deg, #F97316 0%, #EA580C 100%)", opacity: 0.1, zIndex: 1 }} />
                            <Image
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                                alt="Ethical SEO Graph"
                                fill
                                style={{ objectFit: "cover", objectPosition: "center" }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Floating Stats Card for aesthetic */}
                        <div style={{
                            position: "absolute", bottom: "-2rem", left: "-2rem", background: "#fff",
                            padding: "1.5rem", borderRadius: "16px", boxShadow: "var(--shadow-lg)",
                            display: "flex", alignItems: "center", gap: "1rem", zIndex: 2
                        }}>
                            <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(34, 197, 94, 0.1)", color: "#22C55E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                            </div>
                            <div>
                                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-heading)", lineHeight: 1 }}>+150%</div>
                                <div style={{ fontSize: "0.85rem", color: "var(--color-body)", fontWeight: 500, marginTop: "0.25rem" }}>Organic Growth</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <style jsx>{`
                @media (max-width: 768px) {
                    .reveal-left > div > div:last-child {
                        bottom: 1rem !important; left: 1rem !important;
                        padding: 1rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
