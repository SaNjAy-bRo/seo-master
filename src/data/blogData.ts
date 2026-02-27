export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    category: string;
    readTime: string;
    color: string;
    // SEO Fields
    seoTitle: string;
    seoDescription: string;
    seoTags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "what-is-technical-seo",
        title: "What Is Technical SEO? A Beginner-Friendly Guide",
        excerpt: "Learn the fundamentals of technical SEO and how fixing site architecture, speed, and crawlability can dramatically improve your rankings.",
        content: "<p>Technical SEO is the process of ensuring that a website meets the technical requirements of modern search engines...</p>",
        date: "Feb 18, 2026",
        category: "Technical SEO",
        readTime: "5 min read",
        color: "#F97316",
        seoTitle: "What is Technical SEO? | Technical SEO Guide 2026",
        seoDescription: "An in-depth guide to Technical SEO for beginners. Learn how to optimize your website's architecture, crawling, and indexing for better search engine rankings.",
        seoTags: ["Technical SEO", "SEO Guide", "Website Architecture", "Crawlability", "Site Speed"],
    },
    {
        slug: "what-is-on-page-seo",
        title: "What Is On-Page SEO and Why It Matters in 2026",
        excerpt: "Discover the essential on-page optimization techniques that search engines prioritize in 2026 and how to implement them effectively.",
        content: "<p>On-page SEO refers to the practice of optimizing web pages to earn organic traffic and improve rankings in search engines...</p>",
        date: "Feb 18, 2026",
        category: "On-Page SEO",
        readTime: "4 min read",
        color: "#3B82F6",
        seoTitle: "On-Page SEO Techniques for 2026 | SEO Optimization",
        seoDescription: "Discover top on-page SEO techniques to improve your rankings in 2026. Learn about keyword optimization, content quality, and internal linking.",
        seoTags: ["On-Page SEO", "Search Engine Optimization", "Content Strategy", "Keyword Research"],
    },
    {
        slug: "what-are-seo-services",
        title: "What Are SEO Services and How Do They Work?",
        excerpt: "A comprehensive breakdown of modern SEO services, what to expect from an agency, and how to measure the ROI of your investment.",
        content: "<p>SEO services are services typically offered by an SEO agency that helps your company succeed in search engine optimization...</p>",
        date: "Feb 4, 2026",
        category: "SEO Basics",
        readTime: "6 min read",
        color: "#22C55E",
        seoTitle: "Understanding SEO Services | How SEO Works and ROI",
        seoDescription: "What are SEO services? A complete breakdown of modern SEO agency services, understanding ROI, and choosing the right SEO strategy for business growth.",
        seoTags: ["SEO Services", "Digital Marketing Agent", "SEO Strategy", "Marketing ROI"],
    }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}
