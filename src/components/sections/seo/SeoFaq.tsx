"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";

const faqData = [
    {
        question: "1. What are SEO services?",
        answer: "SEO services help improve a website’s visibility on search engines like Google through techniques such as on-page SEO, technical SEO, link building, and content optimization. The goal is to increase organic traffic and long-term online growth."
    },
    {
        question: "2. How long does SEO take to show results?",
        answer: "SEO is a long-term strategy. Most websites start seeing noticeable improvements within 3 to 6 months, depending on competition, website condition, and consistency of SEO efforts."
    },
    {
        question: "3. What SEO services does SEO Masterr provide?",
        answer: "SEO Masterr offers: On-Page SEO, Technical SEO, Off-Page SEO / Link Building, Local SEO, and SEO-Optimized Website Design. All services follow ethical, white-hat SEO practices."
    },
    {
        question: "4. Is SEO better than paid advertising?",
        answer: "Paid ads are your brand’s megaphone they give you an immediate voice in a crowded room. But SEO is your brand’s legacy. It’s the quiet confidence of being the most helpful person in the room, year after year. While ads bring you the first click, SEO earns you the lasting loyalty."
    },
    {
        question: "5. Do you follow Google’s SEO guidelines?",
        answer: "Yes. SEO Masterr strictly follows Google’s Webmaster Guidelines and uses only white-hat SEO techniques to ensure long-term safety and stability of rankings."
    },
    {
        question: "6. Can SEO help small businesses and new websites?",
        answer: "Absolutely. SEO is especially powerful for small businesses and new websites because it helps build online visibility, trust, and authority without relying heavily on paid ads."
    },
    {
        question: "7. Do you provide local SEO services?",
        answer: "Yes. Our Local SEO services help businesses improve visibility in local search results and making it simple for local customers to locate and connect with your business through Google Maps."
    },
    {
        question: "8. Will SEO work for my industry?",
        answer: "SEO works for almost every industry. The strategy may vary depending on competition and search behavior, but a well-planned SEO approach can deliver results for most niches."
    },
    {
        question: "9. How do I get started with SEO Masterr’s SEO services?",
        answer: "You can get started by visiting our Contact Us page or emailing us directly. We respond to all inquiries within 24 hours (Monday–Friday, 10 AM–6 PM IST)."
    }
];

export default function SeoFaq() {
    const header = useScrollReveal();
    const btn = useScrollReveal({ delay: 300 });
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
                    {faqData.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className={`reveal reveal-up ${header.isVisible ? "visible" : ""}`}
                                style={{
                                    transitionDelay: `${i * 50}ms`,
                                    border: "1px solid var(--color-border)",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    background: isOpen ? "#FFF8F0" : "#fff",
                                    transition: "all 0.3s ease"
                                }}
                            >
                                <button
                                    onClick={() => toggleFaq(i)}
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "1.25rem 1.5rem",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        color: "var(--color-heading)",
                                        fontSize: "1.05rem",
                                        fontWeight: 700,
                                    }}
                                >
                                    {faq.question}
                                    <div style={{
                                        width: "32px",
                                        height: "32px",
                                        borderRadius: "50%",
                                        background: isOpen ? "var(--color-primary)" : "rgba(0,0,0,0.05)",
                                        color: isOpen ? "#fff" : "currentColor",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                        marginLeft: "1rem",
                                        transition: "all 0.3s ease",
                                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                                    }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                                    </div>
                                </button>

                                <div style={{
                                    maxHeight: isOpen ? "500px" : "0",
                                    overflow: "hidden",
                                    transition: "max-height 0.4s ease-in-out",
                                }}>
                                    <div style={{ padding: "0 1.5rem 1.5rem", color: "var(--color-body)", lineHeight: 1.7 }}>
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div ref={btn.ref} className={`reveal reveal-up ${btn.isVisible ? "visible" : ""}`} style={{ textAlign: "center" }}>
                    <Link href="/contact" className="btn-secondary" style={{ display: "inline-flex" }}>
                        Ask Now
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
