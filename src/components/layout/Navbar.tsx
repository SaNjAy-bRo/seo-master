"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/* ── Desktop-only link list (simple) ── */
const desktopLinks = [
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

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const close = () => setMobileOpen(false);

    const textColor = scrolled ? "var(--color-body)" : "rgba(255,255,255,0.7)";
    const textHoverColor = "var(--color-primary)";
    const logoTextColor = scrolled ? "var(--color-heading)" : "#fff";
    const barColor = mobileOpen ? "#fff" : scrolled ? "var(--color-heading)" : "#fff";

    return (
        <>
            {/* ── Top Bar ── */}
            <header
                style={{
                    position: "fixed", top: 0, left: 0, right: 0,
                    zIndex: 1100,
                    padding: scrolled ? "0.625rem 1.5rem" : "1rem 1.5rem",
                    background: mobileOpen ? "#111" : scrolled ? "rgba(255,255,255,0.92)" : "transparent",
                    backdropFilter: !mobileOpen && scrolled ? "blur(16px) saturate(180%)" : "none",
                    borderBottom: !mobileOpen && scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
                    transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                    boxShadow: !mobileOpen && scrolled ? "var(--shadow-sm)" : "none",
                }}
            >
                <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <div style={{ width: 36, height: 36, background: "var(--gradient-primary)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1.1rem", color: "#fff" }}>
                            S
                        </div>
                        <span style={{ fontWeight: 700, fontSize: "1.25rem", color: mobileOpen ? "#fff" : logoTextColor, transition: "color 0.3s" }}>
                            Seo<span style={{ color: "var(--color-primary)" }}>Masterr</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                        {desktopLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                style={{ color: textColor, textDecoration: "none", fontSize: "0.875rem", fontWeight: 500, transition: "color 0.2s" }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = textHoverColor)}
                                onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
                            >{link.label}</a>
                        ))}
                        <a href="#contact" className="btn-primary" style={{ padding: "0.625rem 1.5rem", fontSize: "0.875rem" }}>
                            Request a Call
                        </a>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="nav-mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                        style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: mobileOpen ? 0 : 5, transition: "all 0.3s" }}>
                            <span style={{ width: 24, height: 2, background: barColor, borderRadius: 2, transition: "all 0.3s", transform: mobileOpen ? "rotate(45deg) translate(2px, 2px)" : "none" }} />
                            <span style={{ width: 24, height: 2, background: barColor, borderRadius: 2, transition: "all 0.3s", opacity: mobileOpen ? 0 : 1 }} />
                            <span style={{ width: 24, height: 2, background: barColor, borderRadius: 2, transition: "all 0.3s", transform: mobileOpen ? "rotate(-45deg) translate(2px, -2px)" : "none" }} />
                        </div>
                    </button>
                </div>
            </header>

            {/* ── Full-Screen Mobile Menu ── */}
            <div
                className="mobile-menu-panel"
                aria-hidden={!mobileOpen}
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 1050,
                    background: "#111111",
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "4.5rem",
                    overflowY: "auto",
                    WebkitOverflowScrolling: "touch",
                    opacity: mobileOpen ? 1 : 0,
                    visibility: mobileOpen ? "visible" : "hidden",
                    transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
                    transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease, visibility 0.35s ease",
                }}
            >
                {/* ── Menu Title ── */}
                <div style={{ padding: "1rem 1.5rem 0.75rem" }}>
                    <span style={{ fontSize: "1.35rem", fontWeight: 700, color: "#fff" }}>Menu</span>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "0 1.5rem 0.5rem" }} />

                {/* ── Navigation Items ── */}
                <nav style={{ flex: 1, padding: "0 1rem", display: "flex", flexDirection: "column", gap: "2px" }}>

                    {/* Home — active */}
                    <MobileNavItem href="#" icon={IconHome} label="Home" active onClick={close} />

                    {/* Blog */}
                    <MobileNavItem href="#blog" icon={IconBlog} label="Blog" onClick={close} />

                    {/* Sub-section: Services (SEO group) */}
                    <MobileSubSection accentColor="var(--color-primary)">
                        <MobileNavSubItem href="#services" icon={IconGrid} label="All Services" onClick={close} />
                        <MobileNavSubItem href="#services" icon={IconSearch} label="SEO" onClick={close} />
                    </MobileSubSection>

                    {/* Services */}
                    <MobileNavItem href="#services" icon={IconServices} label="Services" onClick={close} />

                    {/* Sub-section: More Services */}
                    <MobileSubSection accentColor="var(--color-primary)">
                        <MobileNavSubItem href="#services" icon={IconGrid} label="All Services" onClick={close} />
                        <MobileNavSubItem href="#process" icon={IconProcess} label="Process" onClick={close} />
                    </MobileSubSection>

                    {/* About Us */}
                    <MobileNavItem href="#about" icon={IconAbout} label="About Us" onClick={close} />

                    {/* Contact Us */}
                    <MobileNavItem href="#contact" icon={IconPhone} label="Contact Us" onClick={close} />
                </nav>

                {/* ── Bottom: Subscribe ── */}
                <div style={{ padding: "1rem 1.5rem 2rem", marginTop: "auto" }}>
                    <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: "1.25rem" }} />
                    <a
                        href="#contact"
                        onClick={close}
                        style={{
                            display: "block",
                            textAlign: "center",
                            padding: "0.875rem",
                            border: "1.5px solid rgba(255,255,255,0.2)",
                            borderRadius: 12,
                            color: "#fff",
                            textDecoration: "none",
                            fontSize: "0.813rem",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                        }}
                    >
                        Subscribe
                    </a>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .nav-desktop { display: none !important; }
                    .nav-mobile-toggle { display: flex !important; }
                }
                @media (min-width: 769px) {
                    .mobile-menu-panel {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
}

/* ────────────────────────────────────────────
   Small Sub-components — keeps JSX clean
   ──────────────────────────────────────────── */

function MobileNavItem({ href, icon: Icon, label, active, onClick }: {
    href: string; icon: React.FC; label: string; active?: boolean; onClick: () => void;
}) {
    return (
        <a
            href={href}
            onClick={onClick}
            style={{
                display: "flex", alignItems: "center", gap: "0.875rem",
                padding: "0.85rem 1rem",
                borderRadius: 12,
                background: active ? "rgba(249,115,22,0.12)" : "transparent",
                color: active ? "#fff" : "rgba(255,255,255,0.65)",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: active ? 600 : 500,
                transition: "background 0.2s, color 0.2s",
            }}
        >
            <span style={{ display: "flex", alignItems: "center", color: active ? "var(--color-primary)" : "rgba(255,255,255,0.35)", flexShrink: 0 }}>
                <Icon />
            </span>
            {label}
        </a>
    );
}

function MobileSubSection({ accentColor, children }: { accentColor: string; children: React.ReactNode }) {
    return (
        <div style={{
            marginLeft: "1.25rem",
            paddingLeft: "1.25rem",
            borderLeft: `2.5px solid ${accentColor}`,
            display: "flex", flexDirection: "column", gap: "2px",
            margin: "0.15rem 0 0.15rem 1.25rem",
        }}>
            {children}
        </div>
    );
}

function MobileNavSubItem({ href, icon: Icon, label, onClick }: {
    href: string; icon: React.FC; label: string; onClick: () => void;
}) {
    return (
        <a
            href={href}
            onClick={onClick}
            style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                padding: "0.625rem 0.75rem",
                borderRadius: 10,
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 600,
                transition: "color 0.2s",
            }}
        >
            <span style={{ display: "flex", alignItems: "center", color: "rgba(255,255,255,0.3)", flexShrink: 0 }}>
                <Icon />
            </span>
            {label}
        </a>
    );
}

/* ────────────────────────────────────────────
   Icons — small inline SVG components
   ──────────────────────────────────────────── */

const IconHome = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

const IconBlog = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
);

const IconServices = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
);

const IconGrid = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
);

const IconSearch = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const IconProcess = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);

const IconAbout = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
);

const IconPhone = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);
