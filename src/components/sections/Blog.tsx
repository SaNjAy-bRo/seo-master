"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const blogPosts = [
    {
        title: "What Is Technical SEO? A Beginner-Friendly Guide",
        excerpt: "Learn the fundamentals of technical SEO and how fixing site architecture, speed, and crawlability can dramatically improve your rankings.",
        date: "Feb 18, 2026",
        category: "Technical SEO",
        readTime: "5 min read",
        color: "#F97316",
    },
    {
        title: "What Is On-Page SEO and Why It Matters in 2026",
        excerpt: "Discover the essential on-page optimization techniques that search engines prioritize in 2026 and how to implement them effectively.",
        date: "Feb 18, 2026",
        category: "On-Page SEO",
        readTime: "4 min read",
        color: "#3B82F6",
    },
    {
        title: "What Are SEO Services and How Do They Work?",
        excerpt: "A comprehensive breakdown of modern SEO services, what to expect from an agency, and how to measure the ROI of your investment.",
        date: "Feb 4, 2026",
        category: "SEO Basics",
        readTime: "6 min read",
        color: "#22C55E",
    },
];

export default function Blog() {
    const header = useScrollReveal();
    const card0 = useScrollReveal({ delay: 0 });
    const card1 = useScrollReveal({ delay: 150 });
    const card2 = useScrollReveal({ delay: 300 });
    const cardRefs = [card0, card1, card2];

    return (
        <section id="blog" className="section" style={{ background: "var(--color-bg-cream)" }}>
            <div className="section-inner">
                <div ref={header.ref} className={`reveal reveal-up ${header.isVisible ? "visible" : ""}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
                    <div>
                        <span className="section-label">Insights</span>
                        <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "0.75rem" }}>
                            Latest <span style={{ color: "var(--color-primary)" }}>Blogs</span>
                        </h2>
                        <p style={{ color: "var(--color-body)", maxWidth: 480, fontSize: "1rem", lineHeight: 1.7 }}>
                            Stay updated with our latest insights, tips, and industry trends.
                        </p>
                    </div>
                    <a href="#" className="btn-secondary" style={{ flexShrink: 0 }}>
                        View All Blogs
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </a>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "1.5rem" }} className="blog-grid">
                    {blogPosts.map((post, i) => (
                        <article
                            key={post.title}
                            ref={cardRefs[i].ref}
                            className={`card reveal reveal-up ${cardRefs[i].isVisible ? "visible" : ""}`}
                            style={{ overflow: "hidden", background: "#fff" }}
                        >
                            {/* Color bar + gradient banner */}
                            <div style={{ position: "relative" }}>
                                <div style={{ height: 4, background: post.color }} />
                                <div style={{ height: 160, background: `linear-gradient(135deg, ${post.color}08 0%, ${post.color}15 50%, ${post.color}05 100%)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                                    <div style={{ position: "absolute", top: "1rem", left: "1rem", padding: "0.25rem 0.75rem", background: `${post.color}12`, border: `1px solid ${post.color}20`, color: post.color, borderRadius: 8, fontSize: "0.75rem", fontWeight: 600 }}>
                                        {post.category}
                                    </div>
                                    {/* Large decorative number */}
                                    <div style={{ fontSize: "5rem", fontWeight: 800, color: `${post.color}12`, lineHeight: 1 }}>
                                        {post.readTime.charAt(0)}
                                    </div>
                                </div>
                            </div>

                            <div style={{ padding: "1.5rem" }}>
                                <div style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem", fontSize: "0.813rem", color: "var(--color-muted)" }}>
                                    <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
                                </div>
                                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.4 }}>{post.title}</h3>
                                <p style={{ color: "var(--color-body)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1rem" }}>{post.excerpt}</p>
                                <a
                                    href="#"
                                    style={{ color: post.color, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.375rem", transition: "gap 0.2s" }}
                                    onMouseEnter={(e) => (e.currentTarget.style.gap = "0.75rem")}
                                    onMouseLeave={(e) => (e.currentTarget.style.gap = "0.375rem")}
                                >
                                    Read Article
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <style jsx>{`
        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
