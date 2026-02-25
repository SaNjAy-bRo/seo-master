"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactIconMap = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
const ContactIconMail = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
);
const ContactIconPhone = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const ContactIconClock = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const ContactIconBriefcase = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
);

export default function ContactConsultation() {
    const leftCol = useScrollReveal({ delay: 0 });
    const rightCol = useScrollReveal({ delay: 200 });

    return (
        <section className="section" id="consultation" style={{ background: "var(--color-bg-white)", position: "relative" }}>
            <div className="section-inner">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }} className="contact-grid">

                    {/* Left Column: Get In Touch Details */}
                    <div ref={leftCol.ref} className={`reveal reveal-up ${leftCol.isVisible ? "visible" : ""}`} style={{ display: "flex", flexDirection: "column" }}>
                        <div className="card" style={{ flexGrow: 1, padding: "3rem", display: "flex", flexDirection: "column" }}>
                            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", marginBottom: "3rem" }}>
                                Get in <span style={{ color: "var(--color-primary)" }}>Touch</span>
                            </h2>

                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-body)" }}>
                                    <ContactIconMap />
                                    <span style={{ fontSize: "1.05rem", fontWeight: 500 }}>Remote<br />India - 751003</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-body)" }}>
                                    <ContactIconMail />
                                    <a href="mailto:contact@seomasterr.com" style={{ fontSize: "1.05rem", fontWeight: 500, color: "inherit", textDecoration: "none" }}>contact@seomasterr.com</a>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-body)" }}>
                                    <ContactIconPhone />
                                    <a href="tel:917787846060" style={{ fontSize: "1.05rem", fontWeight: 500, color: "inherit", textDecoration: "none" }}>917787846060</a>
                                </div>
                            </div>

                            <div style={{ height: "1px", background: "var(--color-border)", marginBottom: "2rem" }} />

                            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-body)" }}>
                                    <ContactIconClock />
                                    <span style={{ fontSize: "0.95rem", fontWeight: 500 }}>Mon - Sat: 9:00 AM - 6:00 PM</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-body)" }}>
                                    <ContactIconBriefcase />
                                    <span style={{ fontSize: "0.95rem", fontWeight: 500 }}>We usually reply within 24 hours</span>
                                </div>
                            </div>

                            <div style={{ marginBottom: "2rem" }}>
                                <span style={{ display: "block", fontSize: "0.85rem", color: "var(--color-body)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
                                    Call us Toll-Free
                                </span>
                                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-heading)" }}>
                                    1234322
                                </span>
                            </div>

                            <div style={{ marginTop: "auto", background: "var(--color-bg-dark)", padding: "2rem", borderRadius: "16px", color: "#fff" }}>
                                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>Would you like to start a project with us?</h3>
                                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                                    Tell us your goals and challenges — we'll help you solve them with tailored solutions and fast support.
                                </p>
                                <a href="tel:917787846060" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", background: "#fff", color: "#000", fontSize: "0.9rem" }}>
                                    <span style={{ opacity: 0.6 }}><ContactIconPhone /></span> CALL NOW
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Request Consultation Form */}
                    <div ref={rightCol.ref} className={`reveal reveal-up ${rightCol.isVisible ? "visible" : ""}`} style={{ display: "flex", flexDirection: "column" }}>
                        <div className="card" style={{ flexGrow: 1, padding: "3rem" }}>
                            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", marginBottom: "3rem" }}>
                                Request C<span style={{ color: "var(--color-primary)" }}>onsultation</span>
                            </h2>

                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <label htmlFor="name" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-body)", marginBottom: "0.5rem" }}>Your Name *</label>
                                    <div style={{ position: "relative" }}>
                                        <input type="text" id="name" placeholder="John Doe" required className="form-input" style={{ paddingLeft: "3rem" }} />
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--color-body)", opacity: 0.5 }}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-body)", marginBottom: "0.5rem" }}>Your Email *</label>
                                    <div style={{ position: "relative" }}>
                                        <input type="email" id="email" placeholder="john@example.com" required className="form-input" style={{ paddingLeft: "3rem" }} />
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--color-body)", opacity: 0.5 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-body)", marginBottom: "0.5rem" }}>Phone</label>
                                    <div style={{ position: "relative" }}>
                                        <input type="tel" id="phone" placeholder="+1 (555) 000-0000" className="form-input" style={{ paddingLeft: "3rem" }} />
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--color-body)", opacity: 0.5 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-body)", marginBottom: "0.5rem" }}>Your Message *</label>
                                    <div style={{ position: "relative" }}>
                                        <textarea id="message" rows={5} placeholder="How can we help you?" required className="form-input" style={{ paddingLeft: "3rem", resize: "vertical" }}></textarea>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", left: "1rem", top: "1.2rem", color: "var(--color-body)", opacity: 0.5 }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                    </div>
                                </div>

                                <button type="submit" className="btn-primary" style={{ width: "100%", padding: "1rem", fontSize: "1rem", display: "flex", justifyContent: "center", gap: "0.5rem" }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                                    SUBMIT REQUEST
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .form-group {
                    margin-bottom: 1.5rem;
                }
                .form-input {
                    width: 100%;
                    padding: 1rem 1.25rem;
                    border-radius: 12px;
                    border: 1px solid var(--color-border);
                    background: transparent;
                    color: var(--color-heading);
                    font-size: 1rem;
                    transition: all 0.2s;
                    font-family: inherit;
                }
                .form-input:focus {
                    outline: none;
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 4px rgba(249,115,22,0.1);
                }
                .form-input::placeholder {
                    color: var(--color-body);
                    opacity: 0.5;
                }
                @media (max-width: 900px) {
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                @media (max-width: 600px) {
                    .card {
                        padding: 2rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
