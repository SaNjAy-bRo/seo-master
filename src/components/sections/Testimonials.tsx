"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
    {
        name: "Arjun Mehta",
        role: "Founder, TechBridge Solutions",
        quote: "SeoMasterr transformed our online visibility. Within 3 months, our organic traffic grew by 180% and we started ranking on the first page for 15+ keywords.",
        rating: 5,
        metric: "+180% Traffic",
        metricIcon: "📈",
    },
    {
        name: "Priya Sharma",
        role: "Marketing Head, GreenLeaf Organics",
        quote: "Their PPC campaigns delivered a 4.2x ROAS in the very first month. The team is data-driven, responsive, and genuinely invested in our success.",
        rating: 5,
        metric: "4.2x ROAS",
        metricIcon: "🎯",
    },
    {
        name: "Rahul Verma",
        role: "CEO, UrbanCraft Studios",
        quote: "We tried multiple agencies before, but SeoMasterr's technical SEO audit uncovered issues no one else found. Our Core Web Vitals scores improved drastically.",
        rating: 5,
        metric: "95+ CWV Score",
        metricIcon: "⚡",
    },
];

export default function Testimonials() {
    const header = useScrollReveal();
    const t0 = useScrollReveal({ delay: 0 });
    const t1 = useScrollReveal({ delay: 150 });
    const t2 = useScrollReveal({ delay: 300 });
    const cardRefs = [t0, t1, t2];

    return (
        <section id="testimonials" className="section" style={{ background: "var(--color-bg-orange-soft)", position: "relative", overflow: "hidden" }}>
            {/* Decorative */}
            <div style={{ position: "absolute", top: "50%", right: -100, width: 300, height: 300, borderRadius: "50%", background: "rgba(249,115,22,0.05)", pointerEvents: "none", transform: "translateY(-50%)" }} />

            <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
                <div ref={header.ref} className={`reveal reveal-up ${header.isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span className="section-label">Client Success</span>
                    <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1rem" }}>
                        What Our Clients <span style={{ color: "var(--color-primary)" }}>Say</span>
                    </h2>
                    <p style={{ color: "var(--color-body)", maxWidth: 480, margin: "0 auto", fontSize: "1.05rem", lineHeight: 1.7 }}>
                        Real results from real businesses. Here&apos;s what our partners have to say.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "1.5rem" }} className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            ref={cardRefs[i].ref}
                            className={`card reveal reveal-up ${cardRefs[i].isVisible ? "visible" : ""}`}
                            style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem", background: "#fff", boxShadow: "var(--shadow-warm)" }}
                        >
                            {/* Top row — stars + metric */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ display: "flex", gap: "0.2rem" }}>
                                    {Array.from({ length: t.rating }).map((_, j) => (
                                        <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="#F97316" stroke="none">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    ))}
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", padding: "0.25rem 0.75rem", background: "var(--color-primary-light-solid)", border: "1px solid rgba(249,115,22,0.12)", borderRadius: 8, fontSize: "0.75rem", fontWeight: 700, color: "var(--color-primary)" }}>
                                    <span>{t.metricIcon}</span>
                                    {t.metric}
                                </div>
                            </div>

                            {/* Quote */}
                            <div style={{ position: "relative", flex: 1 }}>
                                <div style={{ position: "absolute", top: -8, left: -4, fontSize: "3rem", color: "rgba(249,115,22,0.15)", fontFamily: "Georgia, serif", lineHeight: 1 }}>&ldquo;</div>
                                <p style={{ color: "var(--color-body)", fontSize: "0.938rem", lineHeight: 1.8, paddingTop: "1rem" }}>
                                    {t.quote}
                                </p>
                            </div>

                            {/* Author */}
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingTop: "1rem", borderTop: "1px solid var(--color-border)" }}>
                                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--gradient-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "1rem", color: "#fff" }}>
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: "0.938rem" }}>{t.name}</div>
                                    <div style={{ fontSize: "0.813rem", color: "var(--color-muted)" }}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
