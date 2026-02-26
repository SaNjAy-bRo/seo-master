"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const smoFaqData = [
    {
        question: "What is social media marketing?",
        answer: "Social media marketing is the process of promoting your business on platforms like Facebook, Instagram, and LinkedIn to increase brand awareness, leads, and sales."
    },
    {
        question: "How much do social media marketing services cost?",
        answer: "The cost depends on your business goals, platforms, and requirements. We offer affordable custom packages."
    },
    {
        question: "How long does it take to see results?",
        answer: "You can start seeing engagement within weeks, but strong growth typically takes 3–6 months."
    },
    {
        question: "Which platform is best for my business?",
        answer: "It depends on your target audience. We help you choose the best platforms based on your specific needs."
    },
    {
        question: "Do you also run social media ads?",
        answer: "Yes, we provide paid advertising services and can integrate with our PPC or ads services for maximum results."
    },
    {
        question: "Why should I choose SEO Masterr?",
        answer: "Because we focus on real business growth, not just followers."
    }
];

export default function SmoFaq() {
    const header = useScrollReveal();

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
                    {smoFaqData.map((faq, i) => {
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
                                        listStyle: "none"
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
