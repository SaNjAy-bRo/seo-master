"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const emailFaqData = [
    {
        question: "What are email marketing services?",
        answer: "Email marketing services help businesses professionally manage and automate sending emails to customers to promote products, nurture leads, and increase sales."
    },
    {
        question: "How much do email marketing services cost?",
        answer: "Costs vary depending on your business size, email volume, and automation needs. We offer affordable pricing perfect for startups and small businesses. Contact us for a custom quote!"
    },
    {
        question: "Is email marketing good for small businesses?",
        answer: "Yes, absolutely. It's one of the most affordable and effective marketing channels available for small businesses, offering a direct line to customers."
    },
    {
        question: "How long does email marketing take to show results?",
        answer: "You can often see initial results within 30 days, with significant, consistent growth typically visible within 3 to 6 months."
    },
    {
        question: "What is the ROI of email marketing?",
        answer: "Email marketing delivers one of the highest returns on investment, averaging ₹3600 for every ₹100 spent. It helps businesses generate consistent sales, repeat customers, and long-term revenue."
    },
    {
        question: "Do I need a large email list to start email marketing?",
        answer: "No, you can start email marketing with even a small list. At SEO Masterr, we help you grow your email list and turn subscribers into paying customers using proven strategies."
    },
    {
        question: "What types of emails do you create?",
        answer: "We create various types of emails including Promotional emails, Newsletter emails, Automation emails, Welcome emails, Sales emails, and Follow-up emails. All emails are optimized for conversions."
    },
    {
        question: "Will email marketing help increase my sales?",
        answer: "Yes. Email marketing helps nurture leads, promote your offers, and bring repeat customers, which directly increases your sales and revenue."
    },
    {
        question: "Do you provide email automation setup?",
        answer: "Yes, SEO Masterr provides complete email automation setup including Welcome sequences, Lead nurturing, Abandoned cart emails, and Sales funnels. This helps automate your business growth."
    }
];

export default function EmailFaq() {
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
                        We believe in clarity and expertise (E-E-A-T). Here are answers to common questions.
                    </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
                    {emailFaqData.map((faq, i) => {
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
