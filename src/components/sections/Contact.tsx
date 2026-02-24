"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
    const header = useScrollReveal();
    const form = useScrollReveal({ delay: 100 });
    const info = useScrollReveal({ delay: 200 });

    const contactInfo = [
        {
            icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>),
            label: "Address",
            value: "Remote, India - 751003",
        },
        {
            icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>),
            label: "Phone",
            value: "+91 7787846060",
        },
        {
            icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>),
            label: "Email",
            value: "contact@seomasterr.com",
        },
    ];

    return (
        <section id="contact" className="section" style={{ background: "var(--color-bg-warm)" }}>
            <div className="section-inner">
                <div ref={header.ref} className={`reveal reveal-up ${header.isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span className="section-label">Contact</span>
                    <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1rem" }}>
                        Get In <span style={{ color: "var(--color-primary)" }}>Touch</span>
                    </h2>
                    <p style={{ color: "var(--color-body)", maxWidth: 520, margin: "0 auto", fontSize: "1.05rem", lineHeight: 1.7 }}>
                        Ready to grow your business? Drop us a message and our team will get back to you within 24 hours.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2rem", alignItems: "start" }} className="contact-grid">
                    {/* Form */}
                    <div ref={form.ref} className={`card reveal reveal-left ${form.isVisible ? "visible" : ""}`} style={{ padding: "2.5rem" }}>
                        <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }} onSubmit={(e) => e.preventDefault()}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="contact-name-grid">
                                <div>
                                    <label style={{ display: "block", fontSize: "0.813rem", fontWeight: 600, color: "var(--color-heading)", marginBottom: "0.5rem" }}>First Name</label>
                                    <input type="text" placeholder="John" style={inputStyle} />
                                </div>
                                <div>
                                    <label style={{ display: "block", fontSize: "0.813rem", fontWeight: 600, color: "var(--color-heading)", marginBottom: "0.5rem" }}>Last Name</label>
                                    <input type="text" placeholder="Doe" style={inputStyle} />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: "block", fontSize: "0.813rem", fontWeight: 600, color: "var(--color-heading)", marginBottom: "0.5rem" }}>Email</label>
                                <input type="email" placeholder="john@company.com" style={inputStyle} />
                            </div>
                            <div>
                                <label style={{ display: "block", fontSize: "0.813rem", fontWeight: 600, color: "var(--color-heading)", marginBottom: "0.5rem" }}>Service Needed</label>
                                <select style={{ ...inputStyle, cursor: "pointer" }} defaultValue="">
                                    <option value="" disabled>Select a service</option>
                                    <option value="seo">Technical SEO</option>
                                    <option value="onpage">On-Page SEO</option>
                                    <option value="ppc">PPC Management</option>
                                    <option value="smo">Social Media Optimization</option>
                                    <option value="content">Content Strategy</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: "block", fontSize: "0.813rem", fontWeight: 600, color: "var(--color-heading)", marginBottom: "0.5rem" }}>Message</label>
                                <textarea placeholder="Tell us about your project..." rows={4} style={{ ...inputStyle, resize: "vertical" }} />
                            </div>
                            <button className="btn-primary" type="submit" style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }}>
                                Send Message
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                            </button>
                        </form>
                    </div>

                    {/* Info Cards */}
                    <div ref={info.ref} className={`reveal reveal-right ${info.isVisible ? "visible" : ""}`} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        {contactInfo.map((item) => (
                            <div key={item.label} className="card" style={{ padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--color-primary-light-solid)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", flexShrink: 0 }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <div style={{ fontSize: "0.75rem", color: "var(--color-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>{item.label}</div>
                                    <div style={{ fontSize: "0.938rem", fontWeight: 500 }}>{item.value}</div>
                                </div>
                            </div>
                        ))}
                        <div className="card" style={{ padding: "2rem", background: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)", borderColor: "rgba(249,115,22,0.2)" }}>
                            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>Ready to scale?</h4>
                            <p style={{ color: "var(--color-body)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1rem" }}>Book a free 30-minute strategy call with our SEO experts.</p>
                            <a href="tel:+917787846060" className="btn-primary" style={{ fontSize: "0.875rem", padding: "0.75rem 1.5rem" }}>Schedule a Call</a>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-name-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    background: "var(--color-bg-light)",
    border: "1px solid var(--color-border)",
    borderRadius: 10,
    color: "var(--color-heading)",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
};
