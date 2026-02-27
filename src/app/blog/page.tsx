import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/data/blogData";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Blog | SEO Masterr Insights & Articles",
    description: "Read the latest SEO tips, digital marketing insights, and strategies to grow your online business from the experts at SEO Masterr.",
    keywords: ["SEO blog", "digital marketing articles", "SEO tips", "marketing insights"],
};

export default function BlogListingPage() {
    return (
        <main>
            <Navbar />
            <section className="section" style={{ background: "var(--color-bg-cream)", minHeight: "80vh", paddingTop: "120px" }}>
                <div className="section-inner">
                    <div style={{ marginBottom: "3rem", textAlign: "center" }}>
                        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
                            Latest <span style={{ color: "var(--color-primary)" }}>Articles</span> & Insights
                        </h1>
                        <p style={{ color: "var(--color-body)", fontSize: "1.1rem", maxWidth: 600, margin: "auto" }}>
                            Stay updated with our latest thoughts, strategy breakdowns, and industry news.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "1.5rem" }} className="blog-grid">
                        {blogPosts.map((post) => (
                            <article
                                key={post.slug}
                                className="card"
                                style={{ overflow: "hidden", background: "#fff", display: "flex", flexDirection: "column" }}
                            >
                                <div style={{ position: "relative" }}>
                                    <div style={{ height: 4, background: post.color }} />
                                    <div style={{ height: 160, background: `linear-gradient(135deg, ${post.color}08 0%, ${post.color}15 50%, ${post.color}05 100%)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                                        <div style={{ position: "absolute", top: "1rem", left: "1rem", padding: "0.25rem 0.75rem", background: `${post.color}12`, border: `1px solid ${post.color}20`, color: post.color, borderRadius: 8, fontSize: "0.75rem", fontWeight: 600 }}>
                                            {post.category}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                                    <div style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem", fontSize: "0.813rem", color: "var(--color-muted)" }}>
                                        <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
                                    </div>
                                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.4 }}>{post.title}</h3>
                                    <p style={{ color: "var(--color-body)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem", flex: 1 }}>{post.excerpt}</p>

                                    {/* Displaying tags here briefly as a preview */}
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                                        {post.seoTags.slice(0, 2).map(tag => (
                                            <span key={tag} style={{ fontSize: "0.7rem", padding: "0.2rem 0.5rem", background: "var(--color-bg)", borderRadius: "4px", color: "var(--color-muted)" }}>#{tag}</span>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        style={{ color: post.color, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.375rem" }}
                                    >
                                        Read Full Article
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
