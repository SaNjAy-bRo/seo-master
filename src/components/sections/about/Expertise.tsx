"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Image from "next/image";

export default function Expertise() {
    const header = useScrollReveal();
    const text = useScrollReveal({ delay: 200 });
    const imageReveal = useScrollReveal({ delay: 100 });

    return (
        <section className="section" style={{ background: "var(--color-bg-orange-soft)", overflow: "hidden" }}>
            <div className="section-inner">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="expertise-grid">
                    {/* Left: Image (Placeholder for Moss SEO) */}
                    <div ref={imageReveal.ref} className={`reveal reveal-scale ${imageReveal.isVisible ? "visible" : ""}`}>
                        <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: 24, overflow: "hidden", boxShadow: "var(--shadow-warm)" }}>
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80"
                                alt="SEO Expertise"
                                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div>
                        <div ref={header.ref} className={`reveal reveal-up ${header.isVisible ? "visible" : ""}`}>
                            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", marginBottom: "1.5rem" }}>
                                Expertise You Can <span style={{ color: "var(--color-primary)" }}>Trust</span>
                            </h2>
                        </div>
                        <div ref={text.ref} className={`reveal reveal-up ${text.isVisible ? "visible" : ""}`}>
                            <p style={{ color: "var(--color-body)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                                With years of experience in the digital marketing landscape, we have the knowledge and tools to
                                propel your business forward. We stay ahead of industry trends and search engine algorithm updates
                                to ensure your strategies are always effective and compliant.
                            </p>
                            <p style={{ color: "var(--color-body)", fontSize: "1rem", lineHeight: 1.8 }}>
                                Our dedicated team is committed to transparency and delivering measurable results, so you can
                                confidently trust us as your growth partner.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .expertise-grid { grid-template-columns: 1fr !important; text-align: center; gap: 2.5rem !important; }
                    /* Reverse order on mobile so text is above image */
                    .expertise-grid > div:nth-child(2) { grid-row: 1; }
                    .expertise-grid > div:nth-child(1) { grid-row: 2; }
                }
            `}</style>
        </section>
    );
}
