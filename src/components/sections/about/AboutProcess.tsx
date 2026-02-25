"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
    {
        number: "01",
        title: "Keyword Research & Analysis",
        description: "Identify relevant keywords your audience is searching for. Analyze competition and search volume to target the right terms.",
    },
    {
        number: "02",
        title: "On-Page Optimization",
        description: "Optimize page titles, meta descriptions, headers (H1, H2...), and URLs. Ensure content includes target keywords naturally and is high-quality. Improve internal linking and image alt texts.",
    },
];

export default function AboutProcess() {
    const header = useScrollReveal();
    const s0 = useScrollReveal({ delay: 0 });
    const s1 = useScrollReveal({ delay: 150 });
    const stepRefs = [s0, s1];

    return (
        <section className="section" style={{ background: "var(--color-bg-white)", position: "relative" }}>
            <div className="section-inner" style={{ maxWidth: 800, margin: "0 auto" }}>
                <div ref={header.ref} className={`reveal reveal-up ${header.isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", marginBottom: "1rem" }}>
                        Process <span style={{ color: "var(--color-primary)" }}>We Follow</span>
                    </h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                    {steps.map((step, i) => (
                        <div
                            key={step.number}
                            ref={stepRefs[i].ref}
                            className={`reveal reveal-up about-process-step ${stepRefs[i].isVisible ? "visible" : ""}`}
                            style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}
                        >
                            <div style={{
                                fontSize: "clamp(3.5rem, 6vw, 5rem)",
                                fontWeight: 800,
                                color: "var(--color-bg-warm)",
                                lineHeight: 0.8,
                                WebkitTextStroke: "1px rgba(0,0,0,0.05)"
                            }}>
                                {step.number}
                                <span style={{ color: "var(--color-primary)", fontSize: "1rem", verticalAlign: "bottom" }}>.</span>
                            </div>
                            <div style={{ paddingTop: "0.5rem" }}>
                                <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-heading)" }}>
                                    {step.title}
                                </h3>
                                <p style={{ color: "var(--color-body)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 600px) {
                    .about-process-step { flex-direction: column !important; gap: 1rem !important; text-align: center; align-items: center !important; }
                }
            `}</style>
        </section>
    );
}
