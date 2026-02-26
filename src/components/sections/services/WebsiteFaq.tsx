"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const websiteFaqData = [
    {
        question: "How long does it take to develop a professional website?",
        answer: "Typically, our development process takes between 2 to 6 weeks. This timeline depends on the complexity of the project, required features, and the level of customization needed to meet your business goals."
    },
    {
        question: "Will my new website be mobile-friendly and SEO Optimized?",
        answer: "Absolutely. At SEO Masterr, every site we build features a mobile first responsive design and an SEO-friendly architecture. We ensure clean URL structures and technical SEO setups are integrated from day one."
    },
    {
        question: "Can you help with more than just web development, like SEO or Ads?",
        answer: "Yes! We offer a full suite of digital growth tools. Beyond development, we provide specialized SEO services, social media marketing, PPC advertising services, and email marketing services to ensure your new site gets the traffic it deserves."
    },
    {
        question: "Do you provide support and maintenance after the site goes live?",
        answer: "Yes, we don't just launch and leave. We offer ongoing maintenance, security monitoring, and technical support plans to keep your website running smoothly and securely 24/7."
    },
    {
        question: "Can I update the content on my website myself?",
        answer: "Definitely. We specialize in building user-friendly CMS-based websites (like WordPress). This allows you to easily manage and update your text, images, and blog posts without needing any technical or coding knowledge."
    }
];

export default function WebsiteFaq() {
    const header = useScrollReveal();

    return (
        <section className="section" style={{ background: "var(--color-bg-white)", position: "relative" }}>
            <div className="section-inner" style={{ maxWidth: "800px", margin: "0 auto" }}>
                <div ref={header.ref} className={`reveal reveal-up ${header.isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <span className="section-label">Questions?</span>
                    <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1rem" }}>
                        Frequently Asked <span style={{ color: "var(--color-primary)" }}>Questions</span> (FAQ)
                    </h2>
                    <p style={{ color: "var(--color-body)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto" }}>
                        We believe in clarity and expertise (E-E-A-T). Here are answers to common questions about our website design process.
                    </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
                    {websiteFaqData.map((faq, i) => {
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
