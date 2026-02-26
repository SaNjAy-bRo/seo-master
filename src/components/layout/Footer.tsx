"use client";

import Link from "next/link";

const footerLinks = {
    Company: [
        { label: "About Us", href: "/about" },
        { label: "Our Process", href: "/#process" },
        { label: "Blog", href: "/#blog" },
        { label: "Contact", href: "/contact" },
    ],
    Services: [
        { label: "Technical SEO", href: "/#services" },
        { label: "On-Page SEO", href: "/#services" },
        { label: "PPC Management", href: "/#services" },
        { label: "Social Media", href: "/#services" },
    ],
};

const socialLinks = [
    { label: "LinkedIn", icon: "in" },
    { label: "Instagram", icon: "ig" },
    { label: "YouTube", icon: "yt" },
    { label: "Twitter", icon: "x" },
    { label: "Facebook", icon: "fb" },
];

export default function Footer() {
    return (
        <footer style={{ background: "var(--color-bg-dark)", padding: "4rem 1.5rem 2rem" }}>
            <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "3rem", marginBottom: "3rem" }}>
                    {/* Brand */}
                    <div style={{ maxWidth: 320 }}>
                        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                            <img
                                src="/logo.jpeg"
                                alt="SeoMasterr"
                                style={{
                                    height: "40px",
                                    width: "auto",
                                    display: "block"
                                }}
                            />
                        </Link>
                        <p style={{ color: "var(--color-muted-dark)", fontSize: "0.875rem", lineHeight: 1.7 }}>
                            At Seomasterr, we specialize in delivering measurable digital growth. From driving traffic through expert SEO practices to generating qualified leads via PPC and social media campaigns.
                        </p>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff", marginBottom: "1.25rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{title}</h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            style={{ color: "var(--color-muted-dark)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted-dark)")}
                                        >{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter */}
                    <div>
                        <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff", marginBottom: "1.25rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Newsletter</h4>
                        <p style={{ color: "var(--color-muted-dark)", fontSize: "0.875rem", marginBottom: "1rem", lineHeight: 1.6 }}>Stay updated with our latest news, offers, and tips directly in your inbox.</p>
                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                            <input type="email" placeholder="Your email" style={{ flex: "1 1 180px", padding: "0.625rem 1rem", background: "var(--color-bg-dark-card)", border: "1px solid var(--color-border-dark)", borderRadius: 10, color: "#fff", fontSize: "0.875rem", outline: "none" }} />
                            <button className="btn-primary" style={{ padding: "0.625rem 1.25rem", fontSize: "0.813rem", whiteSpace: "nowrap" }}>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div style={{ height: 1, background: "var(--color-border-dark)", marginBottom: "1.5rem" }} />

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                        <p style={{ color: "var(--color-muted-dark)", fontSize: "0.813rem", margin: 0 }}>© 2026 SeoMasterr. All rights reserved.</p>
                        <div style={{ display: "flex", gap: "1rem", color: "var(--color-muted-dark)", fontSize: "0.813rem" }}>
                            <Link href="/privacy-policy" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted-dark)"}>Privacy Policy</Link>
                            <Link href="#" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted-dark)"}>Terms of Service</Link>
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                        {socialLinks.map((s) => (
                            <a
                                key={s.label}
                                href="#"
                                aria-label={s.label}
                                title={s.label}
                                style={{ width: 36, height: 36, borderRadius: 10, background: "var(--color-bg-dark-card)", border: "1px solid var(--color-border-dark)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-muted-dark)", textDecoration: "none", fontSize: "0.75rem", fontWeight: 700, transition: "all 0.25s" }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-primary)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--color-primary)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--color-bg-dark-card)"; e.currentTarget.style.color = "var(--color-muted-dark)"; e.currentTarget.style.borderColor = "var(--color-border-dark)"; }}
                            >{s.icon}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
