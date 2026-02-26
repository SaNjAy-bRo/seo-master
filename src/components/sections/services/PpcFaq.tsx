"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const ppcFaqData = [
    {
        question: "What are PPC services?",
        answer: "PPC services help businesses run paid ads on Google and social media to generate traffic, leads, and sales."
    },
    {
        question: "How much do PPC services cost?",
        answer: "PPC costs depend on your budget, industry, and competition. SEO Masterr offers customized PPC plans."
    },
    {
        question: "How fast can PPC generate results?",
        answer: "PPC can generate traffic and leads immediately after launching campaigns."
    },
    {
        question: "Is PPC better than SEO?",
        answer: "PPC gives instant results, while SEO provides long-term growth. Both work best together."
    },
    {
        question: "Why choose SEO Masterr for PPC services?",
        answer: "SEO Masterr provides ROI-focused PPC campaigns designed to increase leads and sales."
    },
    {
        question: "Which platform is best for PPC?",
        answer: "Google Ads is the most effective platform, but Facebook and Instagram ads also deliver excellent results."
    },
    {
        question: "Do you provide Google Ads management?",
        answer: "Yes, SEO Masterr provides complete Google Ads management services."
    },
    {
        question: "Is PPC good for small businesses?",
        answer: "Yes, PPC is one of the fastest ways for small businesses to generate leads and sales."
    },
    {
        question: "How do you measure PPC performance?",
        answer: "We track: Clicks, Conversions, Cost per lead, and ROI."
    },
    {
        question: "Can PPC increase sales?",
        answer: "Yes, PPC helps generate targeted traffic, which increases sales."
    }
];

export default function PpcFaq() {
    const header = useScrollReveal();
    const btn = useScrollReveal({ delay: 300 });

    return (
        <section className="section" style={{ background: "var(--color-bg-white)", position: "relative" }}>
            <div className="section-inner" style={{ maxWidth: "800px", margin: "0 auto" }}>
                <div ref={header.ref} className={`reveal reveal-up ${header.isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <span className="section-label">Questions?</span>
                    <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1rem" }}>
                        Frequently Asked <span style={{ color: "var(--color-primary)" }}>Questions</span> (FAQ)
                    </h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
                    {ppcFaqData.map((faq, i) => {
                        return (
                            <details
                                key={i}
                                className={`reveal reveal-up ${header.isVisible ? "visible" : ""}`}
                                style={{
                                    transitionDelay: `${i * 50}ms`,
                                    border: "1px solid var(--color-border)",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    background: "#fff",
                                }}
                            >
                                <summary
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "1.25rem 1.5rem",
                                        cursor: "pointer",
                                        color: "var(--color-heading)",
                                        fontSize: "1.05rem",
                                        fontWeight: 700,
                                        listStyle: "none" // Hide default arrow
                                    }}
                                >
                                    {faq.question}
                                    <div style={{
                                        width: "32px", height: "32px", borderRadius: "50%", background: "rgba(0,0,0,0.05)",
                                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginLeft: "1rem",
                                    }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                                    </div>
                                </summary>
                                <div style={{ padding: "0 1.5rem 1.5rem", color: "var(--color-body)", lineHeight: 1.7 }}>
                                    {faq.answer}
                                </div>
                                <style jsx>{`
                                    details > summary::-webkit-details-marker { display: none; }
                                    details[open] summary ~ div { animation: sweep .3s ease-in-out; }
                                    details[open] summary div { transform: rotate(180deg); background: var(--color-primary); color: #fff; }
                                    @keyframes sweep { 0% { opacity: 0; margin-top: -10px; } 100% { opacity: 1; margin-top: 0; } }
                                `}</style>
                            </details>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
