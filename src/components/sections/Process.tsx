"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
    {
        number: "01",
        title: "Discovery & Audit",
        description: "Deep-dive analysis of your website, competitors, and market to identify growth opportunities and build your SEO roadmap.",
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>),
        deliverables: ["Full Site Audit", "Competitor Analysis", "Keyword Gap Report"],
    },
    {
        number: "02",
        title: "Strategy & Planning",
        description: "Custom keyword strategy, content calendar, and technical optimization plan tailored to your business goals and timeline.",
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>),
        deliverables: ["Keyword Strategy", "Content Calendar", "Technical Plan"],
    },
    {
        number: "03",
        title: "Execute & Optimize",
        description: "Implementing on-page, off-page, and technical SEO while running PPC campaigns and social media growth strategies.",
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>),
        deliverables: ["On-Page Fixes", "Link Building", "PPC Campaigns"],
    },
    {
        number: "04",
        title: "Report & Scale",
        description: "Monthly performance reports with actionable insights, continuous A/B testing, and scaling strategies that deliver ROI.",
        icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>),
        deliverables: ["Monthly Reports", "Growth Insights", "Scale Strategy"],
    },
];

export default function Process() {
    const header = useScrollReveal();
    const step0 = useScrollReveal({ delay: 0 });
    const step1 = useScrollReveal({ delay: 150 });
    const step2 = useScrollReveal({ delay: 300 });
    const step3 = useScrollReveal({ delay: 450 });
    const stepRefs = [step0, step1, step2, step3];

    return (
        <section id="process" className="section" style={{ background: "var(--color-bg-dark)", overflow: "hidden" }}>
            {/* Subtle background pattern */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 20% 80%, rgba(249,115,22,0.06) 0%, transparent 50%)", pointerEvents: "none" }} />

            <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
                {/* Header */}
                <div ref={header.ref} className={`reveal reveal-up ${header.isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "4.5rem" }}>
                    <span className="section-label section-label-dark">How We Work</span>
                    <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1rem", color: "#fff" }}>
                        Our Proven <span style={{ color: "var(--color-primary)" }}>Process</span>
                    </h2>
                    <p style={{ color: "var(--color-body-dark)", maxWidth: 560, margin: "0 auto", fontSize: "1.05rem", lineHeight: 1.7 }}>
                        A transparent, repeatable framework that turns your digital marketing goals into measurable outcomes.
                    </p>
                </div>

                {/* Steps — Alternating Layout */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {steps.map((step, i) => (
                        <div
                            key={step.number}
                            ref={stepRefs[i].ref}
                            className={`reveal ${i % 2 === 0 ? "reveal-left" : "reveal-right"} ${stepRefs[i].isVisible ? "visible" : ""} process-step`}
                            style={{ display: "flex", alignItems: "stretch", position: "relative" }}
                        >
                            {/* Timeline Column */}
                            <div style={{ width: 80, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }} className="process-timeline-col">
                                {/* Vertical line */}
                                {i < steps.length - 1 && (
                                    <div style={{ position: "absolute", top: 56, bottom: 0, width: 2, background: "linear-gradient(to bottom, var(--color-primary), rgba(249,115,22,0.15))", left: "50%", transform: "translateX(-50%)" }} />
                                )}
                                {/* Number badge */}
                                <div style={{
                                    width: 56, height: 56, borderRadius: "50%",
                                    background: i === 0 ? "var(--gradient-primary)" : "transparent",
                                    border: i === 0 ? "none" : "2px solid rgba(249,115,22,0.3)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: i === 0 ? "#fff" : "var(--color-primary)",
                                    fontWeight: 800, fontSize: "1rem",
                                    boxShadow: i === 0 ? "0 0 30px rgba(249,115,22,0.3)" : "none",
                                    zIndex: 2, position: "relative",

                                }}>
                                    {step.number}
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="card-dark" style={{ flex: 1, padding: "2rem 2.25rem", marginBottom: "1.5rem", marginLeft: "1.5rem" }}>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }} className="process-card-inner">
                                    {/* Icon */}
                                    <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(249,115,22,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", flexShrink: 0 }}>
                                        {step.icon}
                                    </div>
                                    {/* Text */}
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>{step.title}</h3>
                                        <p style={{ color: "var(--color-body-dark)", fontSize: "0.938rem", lineHeight: 1.7, marginBottom: "1rem" }}>{step.description}</p>
                                        {/* Deliverables */}
                                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                                            {step.deliverables.map((d) => (
                                                <span key={d} style={{
                                                    padding: "0.25rem 0.75rem",
                                                    background: "rgba(249,115,22,0.08)",
                                                    border: "1px solid rgba(249,115,22,0.15)",
                                                    borderRadius: 100,
                                                    fontSize: "0.75rem",
                                                    fontWeight: 500,
                                                    color: "var(--color-primary)",
                                                }}>
                                                    {d}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .process-timeline-col { display: none !important; }
          .process-step > div:last-child { margin-left: 0 !important; padding: 1.5rem !important; }
          .process-card-inner { flex-direction: column !important; }
        }
      `}</style>
        </section>
    );
}
