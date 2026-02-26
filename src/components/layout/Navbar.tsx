"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/* ── Desktop Nav Links are explicitly rendered now ── */

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);

    let dropdownTimeout: NodeJS.Timeout;

    const handleMouseEnter = (menu: string) => {
        clearTimeout(dropdownTimeout);
        setActiveDropdown(menu);
    };

    const handleMouseLeave = () => {
        dropdownTimeout = setTimeout(() => {
            setActiveDropdown(null);
        }, 150); // slight delay to prevent flickering
    };

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
                        <img
                            src={(!mobileOpen && scrolled) ? "/logo.png" : "/logo.jpeg"}
                            alt="SeoMasterr"
                            style={{
                                height: "40px",
                                width: "auto",
                                display: "block"
                            }}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "1.75rem", height: "100%" }}>
                        <DesktopNavItem href="/" icon={IconHome} label="HOME" color={textColor} hoverColor={textHoverColor} />

                        {/* Blog with Mega Menu */}
                        <div
                            style={{ height: "100%", display: "flex", alignItems: "center" }}
                            onMouseEnter={() => handleMouseEnter("blog")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <DesktopNavItem href="/#blog" icon={IconBlog} label="BLOG" hasDropdown color={textColor} hoverColor={textHoverColor} isActive={activeDropdown === "blog"} />
                            <MegaMenu isOpen={activeDropdown === "blog"} type="blog" />
                        </div>

                        {/* Services with Mega Menu */}
                        <div
                            style={{ height: "100%", display: "flex", alignItems: "center" }}
                            onMouseEnter={() => handleMouseEnter("services")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <DesktopNavItem href="/#services" icon={IconServices} label="SERVICES" hasDropdown color={textColor} hoverColor={textHoverColor} isActive={activeDropdown === "services"} />
                            <MegaMenu isOpen={activeDropdown === "services"} type="services" />
                        </div>

                        <DesktopNavItem href="/about" icon={IconAbout} label="ABOUT US" color={textColor} hoverColor={textHoverColor} />
                        <DesktopNavItem href="/contact" icon={IconPhone} label="CONTACT US" color="var(--color-primary)" hoverColor="var(--color-primary)" />

                        <button onClick={(e) => { e.preventDefault(); setIsSubscribeModalOpen(true); }} style={{
                            display: "flex", alignItems: "center", gap: "0.5rem",
                            padding: "0.45rem 1.25rem", borderRadius: "99px",
                            border: "1px solid rgba(255,255,255,0.3)",
                            color: "#fff", textDecoration: "none", fontSize: "0.75rem", fontWeight: 700,
                            letterSpacing: "0.05em", transition: "all 0.2s",
                            background: "transparent", cursor: "pointer"
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                        >
                            <span style={{ display: "flex", alignItems: "center", transform: "scale(0.9)" }}><IconBell /></span>
                            SUBSCRIBE
                        </button>
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
                        <MobileNavSubItem href="/services/seo" icon={IconSearch} label="SEO Services" onClick={close} />
                        <MobileNavSubItem href="/services/website-design" icon={IconGrid} label="Website Design" onClick={close} />
                        <MobileNavSubItem href="/services/social-media-optimization" icon={IconSearch} label="Social Media Marketing" onClick={close} />
                        <MobileNavSubItem href="/services/email-marketing" icon={IconSearch} label="Email Marketing" onClick={close} />
                        <MobileNavSubItem href="/services/ppc-management" icon={IconSearch} label="PPC Services" onClick={close} />
                    </MobileSubSection>

                    {/* Services */}
                    <MobileNavItem href="#services" icon={IconServices} label="Services" onClick={close} />

                    {/* Sub-section: More Services */}
                    <MobileSubSection accentColor="var(--color-primary)">
                        <MobileNavSubItem href="/#services" icon={IconGrid} label="All Services" onClick={close} />
                        <MobileNavSubItem href="/#process" icon={IconProcess} label="Process" onClick={close} />
                    </MobileSubSection>

                    {/* About Us */}
                    <MobileNavItem href="/about" icon={IconAbout} label="About Us" onClick={close} />

                    {/* Contact Us */}
                    <MobileNavItem href="/contact" icon={IconPhone} label="Contact Us" onClick={close} />
                </nav>

                {/* ── Bottom: Subscribe ── */}
                <div style={{ padding: "1rem 1.5rem 2rem", marginTop: "auto" }}>
                    <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: "1.25rem" }} />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setIsSubscribeModalOpen(true);
                            close();
                        }}
                        style={{
                            display: "block",
                            width: "100%",
                            textAlign: "center",
                            padding: "0.875rem",
                            border: "1.5px solid rgba(255,255,255,0.2)",
                            borderRadius: 12,
                            color: "#fff",
                            background: "transparent",
                            fontSize: "0.813rem",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            cursor: "pointer",
                        }}
                    >
                        Subscribe
                    </button>
                </div>
            </div>

            {/* ── Subscribe Modal ── */}
            {isSubscribeModalOpen && (
                <div style={{
                    position: "fixed", inset: 0, zIndex: 1200,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)"
                }} onClick={() => setIsSubscribeModalOpen(false)}>
                    <div style={{
                        background: "#fff", borderRadius: "12px", padding: "3rem 2.5rem",
                        width: "90%", maxWidth: "450px", textAlign: "center",
                        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                        position: "relative"
                    }} onClick={(e) => e.stopPropagation()}>

                        <button
                            onClick={() => setIsSubscribeModalOpen(false)}
                            style={{
                                position: "absolute", top: "1rem", right: "1rem",
                                background: "none", border: "none", fontSize: "1.5rem",
                                color: "#999", cursor: "pointer", lineHeight: 1
                            }}
                        >&times;</button>

                        <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "#111", marginBottom: "1.75rem" }}>
                            Enter your email to subscribe
                        </h3>

                        <div style={{ position: "relative", marginBottom: "1.5rem" }}>
                            <span style={{
                                position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)",
                                color: "#888", display: "flex", alignItems: "center"
                            }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="m2 6 10 7 10-7"></path></svg>
                            </span>
                            <input
                                type="email"
                                placeholder="example@mail.com"
                                style={{
                                    width: "100%", padding: "0.875rem 1rem 0.875rem 2.75rem",
                                    borderRadius: "8px", border: "1px solid #ccc",
                                    fontSize: "1rem", outline: "none", color: "#333",
                                    boxSizing: "border-box"
                                }}
                            />
                        </div>

                        <button style={{
                            background: "#FF7A00", color: "#fff", border: "none",
                            borderRadius: "99px", padding: "0.75rem 2rem",
                            fontSize: "0.95rem", fontWeight: 700, letterSpacing: "0.05em",
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            cursor: "pointer", boxShadow: "0 4px 14px rgba(255, 122, 0, 0.4)",
                            transition: "transform 0.2s"
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                            SUBMIT
                        </button>
                    </div>
                </div>
            )
            }

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

function DesktopNavItem({ href, icon: Icon, label, hasDropdown, color, hoverColor, isActive }: {
    href: string; icon: React.FC; label: string; hasDropdown?: boolean; color: string; hoverColor: string; isActive?: boolean;
}) {
    return (
        <a
            href={href}
            style={{
                display: "flex", alignItems: "center", gap: "0.35rem",
                color: isActive ? hoverColor : color, textDecoration: "none", fontSize: "0.75rem", fontWeight: 600,
                transition: "color 0.2s", letterSpacing: "0.02em",
                height: "100%", position: "relative"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
            onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = color; }}
        >
            <span style={{ display: "flex", alignItems: "center", transform: "scale(0.85)", opacity: 0.9 }}><Icon /></span>
            {label}
            {hasDropdown && <span style={{ display: "flex", alignItems: "center", marginLeft: "-0.1rem", opacity: 0.7, transform: isActive ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}><IconChevronDown /></span>}

            {/* Minimal invisible padding to bridge gap to dropdown */}
            {hasDropdown && <div style={{ position: "absolute", bottom: "-20px", left: 0, right: 0, height: "20px" }} />}
        </a>
    );
}

function MegaMenu({ isOpen, type }: { isOpen: boolean, type: "blog" | "services" }) {
    if (!isOpen) return null;

    const isBlog = type === "blog";

    return (
        <div style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#FFF8F0", // Light orange/white as requested
            borderTop: "1px solid rgba(249,115,22,0.1)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            padding: "2rem 1.5rem 3rem",
            cursor: "default",
            animation: "megaMenuFadeIn 0.2s ease-out forwards",
            transformOrigin: "top"
        }}>
            <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 1.5rem" }}>

                {/* Top Categories Row */}
                <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2.5rem" }}>
                    <Link href={isBlog ? "/#blog" : "/services/seo"} style={{ textDecoration: "none" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1.25rem", border: "1px solid var(--color-primary)", borderRadius: "99px", color: "var(--color-primary)", background: "rgba(249,115,22,0.1)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.02em", cursor: "pointer", transition: "all 0.2s" }}>
                            <span style={{ color: "var(--color-primary)" }}><IconBlog /></span>
                            {isBlog ? "SEO" : "Technical SEO"}
                        </div>
                    </Link>
                </div>

                <style jsx>{`
                    @keyframes megaMenuFadeIn {
                        from { opacity: 0; transform: translateY(-5px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .mega-card {
                        background: #F97316; /* Solid orange background */
                        border: 1px solid rgba(0,0,0,0.1);
                        border-radius: 12px;
                        overflow: hidden;
                        aspect-ratio: 16/10;
                        position: relative;
                        padding: 1.5rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        color: #ffffff; /* White text for contrast */
                        text-decoration: none;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                    }
                    .mega-card:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 12px 30px rgba(249,115,22,0.3);
                        border-color: rgba(0,0,0,0.2);
                        background: #EA580C; /* Slightly darker solid orange on hover */
                    }
                    .mega-card-content {
                        z-index: 2;
                        position: relative;
                        color: #ffffff;
                    }
                `}</style>

                {/* Content Grid */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>

                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111", marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>
                            {isBlog ? "Latest in SEO" : "Featured Services"}
                        </h3>

                        {isBlog ? (
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", maxWidth: "900px" }}>
                                {/* Card 1 */}
                                <div>
                                    <a href="/#blog" className="mega-card">
                                        <div className="mega-card-content">
                                            <h4 style={{ fontSize: "1.1rem", fontWeight: 800, lineHeight: 1.3, marginBottom: "0.25rem" }}>
                                                What is Technical SEO? Simple Beginner Guide
                                            </h4>
                                            <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.85)", display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: 600 }}>
                                                <IconBlog /> Feb 18, 2026
                                            </div>
                                        </div>
                                    </a>
                                    <div style={{ fontSize: "0.85rem", color: "#444", fontWeight: 500, marginTop: "1rem", lineHeight: 1.5, paddingRight: "1rem" }}>
                                        What is Technical SEO? A Beginner-Friendly Explanation
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div>
                                    <a href="/#blog" className="mega-card">
                                        <div className="mega-card-content">
                                            <h4 style={{ fontSize: "1.1rem", fontWeight: 800, lineHeight: 1.3, marginBottom: "0.25rem" }}>
                                                What Is On-Page SEO & Why It Matters in 2026
                                            </h4>
                                            <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.85)", display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: 600 }}>
                                                <IconBlog /> Feb 18, 2026
                                            </div>
                                        </div>
                                    </a>
                                    <div style={{ fontSize: "0.85rem", color: "#444", fontWeight: 500, marginTop: "1rem", lineHeight: 1.5, paddingRight: "1rem" }}>
                                        What Is On-Page SEO and Why It Matters in 2026
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div>
                                    <a href="/#blog" className="mega-card">
                                        <div className="mega-card-content">
                                            <h4 style={{ fontSize: "1.1rem", fontWeight: 800, lineHeight: 1.3, marginBottom: "0.25rem" }}>
                                                What Are SEO Services and How Do They Work?
                                            </h4>
                                            <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.85)", display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: 600 }}>
                                                <IconBlog /> Feb 4, 2026
                                            </div>
                                        </div>
                                    </a>
                                    <div style={{ fontSize: "0.85rem", color: "#444", fontWeight: 500, marginTop: "1rem", lineHeight: 1.5, paddingRight: "1rem" }}>
                                        What Are SEO Services and How Do They Work?
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div style={{ display: "flex", gap: "1.5rem", maxWidth: "900px", overflowX: "auto", paddingBottom: "1.5rem", scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}>
                                {[
                                    { title: "SEO Services", href: "/services/seo", desc: "Comprehensive search rankings." },
                                    { title: "Website Design", href: "/services/website-design", desc: "Custom conversion-focused sites." },
                                    { title: "Social Media Marketing", href: "/services/social-media-optimization", desc: "Audience growth & engagement." },
                                    { title: "Email Marketing", href: "/services/email-marketing", desc: "Automated nurturing campaigns." },
                                    { title: "PPC Services", href: "/services/ppc-management", desc: "ROI-driven paid advertising." }
                                ].map((svc, i) => (
                                    <div key={i} style={{ flex: "0 0 calc(33.333% - 1rem)", minWidth: "220px" }}>
                                        <a href={svc.href} className="mega-card">
                                            <div className="mega-card-content">
                                                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, lineHeight: 1.3, marginBottom: "0.25rem" }}>
                                                    {svc.title}
                                                </h4>
                                            </div>
                                        </a>
                                        <div style={{ fontSize: "0.85rem", color: "#444", fontWeight: 500, marginTop: "1rem", lineHeight: 1.5, paddingRight: "1rem" }}>
                                            {svc.desc}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Side Promotion Card */}
                    <div style={{ width: "280px", flexShrink: 0, marginLeft: "2rem", background: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)", borderRadius: "16px", padding: "2.5rem", color: "#fff", boxShadow: "0 10px 30px rgba(109,40,217,0.2)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ position: "relative", zIndex: 2 }}>
                            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", marginBottom: "0.75rem" }}>
                                Ready to Grow?
                            </div>
                            <h4 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                                Contact Us Today
                            </h4>
                            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.9)", marginBottom: "2rem", lineHeight: 1.5 }}>
                                Start building a strong digital presence now.
                            </p>
                            <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#6D28D9", padding: "0.7rem 1.5rem", borderRadius: "99px", fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.05em", textDecoration: "none", transition: "transform 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                                REACH OUT <span style={{ strokeWidth: 3, transform: "rotate(-90deg)" }}><IconChevronDown /></span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

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

const IconBell = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
);

const IconChevronDown = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);
