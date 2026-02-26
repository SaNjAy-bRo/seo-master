"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";

const processSteps = [
    {
        title: "Audit & Analysis",
        description: "A thorough review of your current website and SEO standing",
        color: "#F97316",
        icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>)
    },
    {
        title: "Research",
        description: "In-depth keyword and competitor analysis to find opportunities.",
        color: "#3B82F6",
        icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>)
    },
    {
        title: "Strategy",
        description: "Tailored planning based on your business goals and audience",
        color: "#8B5CF6",
        icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>)
    },
    {
        title: "Implementation",
        description: "Execution of on-page, technical, and off-page optimizations.",
        color: "#10B981",
        icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>)
    },
    {
        title: "Monitoring & Reporting",
        description: "Continuous tracking, analysis, and refinement for ongoing improvement.",
        color: "#EC4899",
        icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><rect x="7" y="14" width="4" height="5" /><rect x="15" y="7" width="4" height="12" /></svg>)
    }
];

export default function SeoProcess() {
    const header = useScrollReveal();
    const btn = useScrollReveal({ delay: 300 });

    // We'll reveal each step with a small delay
    const stepReveals = processSteps.map((_, i) => useScrollReveal({ delay: i * 100 }));

    return (
        <section className="section" style={{ background: "var(--color-bg-light)", position: "relative" }}>
            <div className="section-inner">
                <div ref={header.ref} className={`reveal reveal-up ${header.isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span className="section-label">How We Work</span>
                    <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1rem" }}>
                        Our Proven, <span style={{ color: "var(--color-primary)" }}>Ethical Process</span>
                    </h2>
                    <p style={{ color: "var(--color-body)", maxWidth: 660, margin: "0 auto", fontSize: "1.05rem", lineHeight: 1.7 }}>
                        We believe in transparency and a structured approach to every project.
                    </p>
                </div>

                <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
                    {/* The continuous line behind the timeline */}
                    <div style={{
                        position: "absolute",
                        left: "24px",
                        top: "24px",
                        bottom: "24px",
                        width: "2px",
                        background: "rgba(0,0,0,0.05)",
                        zIndex: 1,
                    }} className="timeline-line" />

                    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                        {processSteps.map((step, i) => {
                            const reveal = stepReveals[i];
                            return (
                                <div
                                    key={i}
                                    ref={reveal.ref}
                                    className={`reveal reveal-up ${reveal.isVisible ? "visible" : ""}`}
                                    style={{
                                        display: "flex",
                                        gap: "1.5rem",
                                        position: "relative",
                                        zIndex: 2,
                                    }}
                                >
                                    {/* Icon / Number node */}
                                    <div style={{
                                        width: "48px", height: "48px",
                                        borderRadius: "50%",
                                        background: step.color,
                                        color: "#fff",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        flexShrink: 0,
                                        boxShadow: `0 0 0 8px var(--color-bg-light), 0 4px 12px ${step.color}60`,
                                    }}>
                                        {step.icon}
                                    </div>

                                    {/* Content Card */}
                                    <div style={{
                                        background: "#fff",
                                        padding: "1.5rem 2rem",
                                        borderRadius: "var(--radius-xl)",
                                        boxShadow: "var(--shadow-md)",
                                        border: "1px solid var(--color-border)",
                                        flex: 1
                                    }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                                            <span style={{ fontSize: "1rem", fontWeight: 800, color: step.color, opacity: 0.8 }}>0{i + 1}</span>
                                            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>{step.title}</h3>
                                        </div>
                                        <p style={{ color: "var(--color-body)", lineHeight: 1.6, margin: 0 }}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div ref={btn.ref} className={`reveal reveal-up ${btn.isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginTop: "4rem" }}>
                    <Link href="/contact" className="btn-primary">
                        Enquire Now
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .timeline-line { left: 24px !important; }
                }
            `}</style>
        </section>
    );
}
