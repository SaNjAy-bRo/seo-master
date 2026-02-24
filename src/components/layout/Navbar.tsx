"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const textColor = scrolled ? "var(--color-body)" : "rgba(255,255,255,0.7)";
    const textHoverColor = "var(--color-primary)";
    const logoTextColor = scrolled ? "var(--color-heading)" : "#fff";
    const hamburgerColor = scrolled ? "var(--color-heading)" : "#fff";

    return (
        <header
            style={{
                position: "fixed",
                top: 0, left: 0, right: 0,
                zIndex: 1000,
                padding: scrolled ? "0.625rem 1.5rem" : "1rem 1.5rem",
                background: scrolled ? "rgba(255, 255, 255, 0.92)" : "transparent",
                backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
                borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
                transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                boxShadow: scrolled ? "var(--shadow-sm)" : "none",
            }}
        >
            <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {/* Logo */}
                <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div style={{ width: 36, height: 36, background: "var(--gradient-primary)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1.1rem", color: "#fff" }}>
                        S
                    </div>
                    <span style={{ fontWeight: 700, fontSize: "1.25rem", color: logoTextColor, transition: "color 0.3s" }}>
                        Seo<span style={{ color: "var(--color-primary)" }}>Masterr</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="nav-desktop">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            style={{ color: textColor, textDecoration: "none", fontSize: "0.875rem", fontWeight: 500, transition: "color 0.2s" }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = textHoverColor)}
                            onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" className="btn-primary" style={{ padding: "0.625rem 1.5rem", fontSize: "0.875rem" }}>
                        Request a Call
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="nav-mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
                >
                    <div style={{ display: "flex", flexDirection: "column", gap: mobileOpen ? 0 : 5, transition: "all 0.3s" }}>
                        <span style={{ width: 24, height: 2, background: hamburgerColor, borderRadius: 2, transition: "all 0.3s", transform: mobileOpen ? "rotate(45deg) translate(2px, 2px)" : "none" }} />
                        <span style={{ width: 24, height: 2, background: hamburgerColor, borderRadius: 2, transition: "all 0.3s", opacity: mobileOpen ? 0 : 1 }} />
                        <span style={{ width: 24, height: 2, background: hamburgerColor, borderRadius: 2, transition: "all 0.3s", transform: mobileOpen ? "rotate(-45deg) translate(2px, -2px)" : "none" }} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div
                    style={{
                        position: "absolute", top: "100%", left: 0, right: 0,
                        background: "rgba(255,255,255,0.98)",
                        backdropFilter: "blur(20px)",
                        borderBottom: "1px solid var(--color-border)",
                        padding: "1.5rem",
                        display: "flex", flexDirection: "column", gap: "0.25rem",
                        boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            style={{ color: "var(--color-body)", textDecoration: "none", fontSize: "1rem", fontWeight: 500, padding: "0.75rem 0", borderBottom: "1px solid var(--color-border)" }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" className="btn-primary" style={{ textAlign: "center", marginTop: "0.75rem" }}>
                        Request a Call
                    </a>
                </div>
            )}

            <style jsx>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
        </header>
    );
}
