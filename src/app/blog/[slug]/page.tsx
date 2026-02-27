import { getBlogPostBySlug, blogPosts } from "@/data/blogData";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const resolvedParams = await params;
    const post = getBlogPostBySlug(resolvedParams.slug);

    if (!post) {
        return {
            title: "Post Not Found | SEO Masterr",
            description: "The requested blog post could not be found."
        };
    }

    return {
        title: post.seoTitle,
        description: post.seoDescription,
        keywords: post.seoTags,
        openGraph: {
            title: post.seoTitle,
            description: post.seoDescription,
            type: "article",
            publishedTime: post.date,
            tags: post.seoTags,
            authors: ["SEO Masterr"],
        },
        twitter: {
            card: "summary_large_image",
            title: post.seoTitle,
            description: post.seoDescription,
        }
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = getBlogPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <main>
            <Navbar />

            <article className="section" style={{ background: "var(--color-bg-cream)", minHeight: "80vh", paddingTop: "120px" }}>
                <div className="section-inner" style={{ maxWidth: "800px", margin: "0 auto" }}>

                    {/* Back to Blog */}
                    <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--color-primary)", textDecoration: "none", fontWeight: 600, marginBottom: "2rem" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                        Back to Articles
                    </Link>

                    {/* Metadata Header */}
                    <div style={{ marginBottom: "2rem" }}>
                        <div style={{ display: "inline-block", padding: "0.25rem 0.75rem", background: `${post.color}15`, border: `1px solid ${post.color}30`, color: post.color, borderRadius: 8, fontSize: "0.875rem", fontWeight: 600, marginBottom: "1rem" }}>
                            {post.category}
                        </div>
                        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
                            {post.title}
                        </h1>
                        <div style={{ display: "flex", gap: "1rem", fontSize: "0.95rem", color: "var(--color-muted)", alignItems: "center" }}>
                            <span>{post.date}</span>
                            <span style={{ display: "inline-block", width: "4px", height: "4px", background: "var(--color-muted)", borderRadius: "50%" }}></span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <div style={{ height: "4px", width: "100%", background: `linear-gradient(90deg, ${post.color}, transparent)`, marginBottom: "3rem" }}></div>

                    {/* Content */}
                    <div
                        style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--color-body)" }}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags */}
                    <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border)" }}>
                        <h4 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Related Tags:</h4>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                            {post.seoTags.map(tag => (
                                <span key={tag} style={{ padding: "0.3rem 0.75rem", background: "#fff", border: "1px solid var(--color-border)", borderRadius: "20px", fontSize: "0.85rem", color: "var(--color-muted)" }}>
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
