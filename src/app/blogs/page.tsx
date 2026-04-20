import type { Metadata } from "next";
import { Clock, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BreadcrumbSchema } from "@/components/seo/schema-script";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Blog Archives | Expert SEO & Travel Insights",
    description:
        "Explore our comprehensive blog archive featuring expert insights on SEO, technical optimization, content strategy, and digital marketing. Updated weekly with actionable strategies.",
    keywords: [
        "SEO blog",
        "digital marketing articles",
        "content strategy",
        "technical SEO",
        "algorithm updates",
        "conversion optimization",
        "travel insights",
    ],
    openGraph: {
        title: "Blog Archives | Expert SEO & Travel Insights",
        description:
            "Explore our comprehensive blog archive featuring expert insights on SEO and digital marketing.",
        type: "website",
        url: "https://authoritativeeditorial.com/blogs",
        images: [
            {
                url: "https://authoritativeeditorial.com/og-blogs.png",
                width: 1200,
                height: 630,
                alt: "Blog Archives",
            },
        ],
    },
    alternates: {
        canonical: "https://authoritativeeditorial.com/blogs",
    },
};

const blogData = [
    {
        category: 'Content Strategy',
        articles: [
            {
                id: 1,
                title: 'Beyond the Keyword: Mapping Semantic Entities for Topical Authority',
                excerpt: 'Stop chasing single volume metrics. Learn how to structure your content architecture around entity graphs to build unshakeable topical relevance.',
                author: 'Sarah Jenkins',
                readTime: '12 min read',
                date: 'Oct 12, 2024',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
            },
            {
                id: 2,
                title: 'The Art of Long-Form Content: Capturing Search Intent at Scale',
                excerpt: 'Explore the science behind creating comprehensive content that dominates search results and drives sustained organic traffic.',
                author: 'Marcus Chen',
                readTime: '14 min read',
                date: 'Oct 10, 2024',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop'
            },
            {
                id: 3,
                title: 'Content Distribution: From Publishing to Promotion',
                excerpt: 'A deep dive into strategies that ensure your content reaches the right audience at the right time across multiple channels.',
                author: 'Elena Rodriguez',
                readTime: '9 min read',
                date: 'Oct 08, 2024',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop'
            }
        ]
    },
    {
        category: 'Technical SEO',
        articles: [
            {
                id: 4,
                title: 'Core Web Vitals 2024: The New Ranking Reality',
                excerpt: 'Understanding how speed metrics directly impact your search visibility and user experience in the modern web.',
                author: 'Dr. Elias Vance',
                readTime: '15 min read',
                date: 'Oct 11, 2024',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab655c486?w=800&h=400&fit=crop'
            },
            {
                id: 5,
                title: 'Migrating to Next.js: The Pre-rendering Checklist for SEO',
                excerpt: "Client-side rendering pitfalls continue to plague enterprise migrations. Here is the definitive checklist for ensuring your JS framework doesn't tank your crawl budget.",
                author: 'Alex Thompson',
                readTime: '11 min read',
                date: 'Oct 09, 2024',
                image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=400&fit=crop'
            },
            {
                id: 6,
                title: 'Mobile-First Indexing: Optimization Strategies That Matter',
                excerpt: "With Google's shift to mobile-first indexing, we break down the practical strategies that ensure your site ranks well.",
                author: 'Jordan Blake',
                readTime: '10 min read',
                date: 'Oct 07, 2024',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=800&h=400&fit=crop'
            }
        ]
    },
    {
        category: 'Algorithm & Updates',
        articles: [
            {
                id: 7,
                title: 'Deconstructing the Latest Helpful Content Update Signals',
                excerpt: 'Breaking down the signals Google uses to identify genuinely helpful content and how to ensure yours passes the test.',
                author: 'Sophia Martinez',
                readTime: '13 min read',
                date: 'Oct 13, 2024',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop'
            },
            {
                id: 8,
                title: 'E-E-A-T Framework: Building Expertise and Authoritativeness',
                excerpt: 'A comprehensive guide to demonstrating expertise, experience, authoritativeness, and trustworthiness to search engines.',
                author: 'Dr. Patricia Wong',
                readTime: '16 min read',
                date: 'Oct 06, 2024',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop'
            },
            {
                id: 9,
                title: 'Future-Proofing Your SEO Strategy Against Algorithm Changes',
                excerpt: "Discover the timeless principles that remain constant regardless of how Google's algorithm evolves.",
                author: 'Michael Torres',
                readTime: '12 min read',
                date: 'Oct 05, 2024',
                image: 'https://images.unsplash.com/photo-1516534775068-bb57e39c1416?w=800&h=400&fit=crop'
            }
        ]
    },
    {
        category: 'Conversion Optimization',
        articles: [
            {
                id: 10,
                title: 'From Clicks to Conversions: The Complete Analytics Framework',
                excerpt: 'Transform your traffic into meaningful business results by implementing a comprehensive conversion tracking system.',
                author: 'Lisa Anderson',
                readTime: '11 min read',
                date: 'Oct 04, 2024',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop'
            },
            {
                id: 11,
                title: 'Landing Page Psychology: Design for Decision Making',
                excerpt: 'Understand the psychological principles that drive user decisions and apply them to your landing pages.',
                author: 'David Kim',
                readTime: '9 min read',
                date: 'Oct 03, 2024',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
            },
            {
                id: 12,
                title: 'A/B Testing Best Practices: Statistical Significance Explained',
                excerpt: 'Master the mathematics behind A/B testing to make data-driven decisions with confidence.',
                author: 'Rebecca Scott',
                readTime: '10 min read',
                date: 'Oct 02, 2024',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab655c486?w=800&h=400&fit=crop'
            }
        ]
    }
];

export default function BlogsPage() {
    return (
        <>
            {/* ── Breadcrumb Schema ── */}
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://authoritativeeditorial.com" },
                    { name: "Blog", url: "https://authoritativeeditorial.com/blogs" },
                ]}
            />

            <div className="min-h-screen bg-background">
                {/* ── Page Header ── */}
                <header className="mx-2 px-4 sm:px-3 lg:px-4 py-10 md:py-12" role="banner">
                    <div className="space-y-6 w-full">
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                            Expert Insights & Analysis
                        </h1>
                        {/* FIX: replaced invalid `mr-18` with `max-w-2xl` */}
                        <p className="text-lg max-w-2xl md:text-xl text-foreground/70 leading-relaxed">
                            Deep-dive articles exploring the technical and strategic aspects of modern digital excellence. From SEO fundamentals to cutting-edge optimization techniques.
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                            <div className="text-sm text-muted-foreground">
                                <p>Curated by our team of experts • Updated weekly</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* ── Blog Categories ── */}
                <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                    <div className="space-y-32">
                        {blogData.map((categoryGroup, categoryIdx) => (
                            // FIX: was closing with </div> — corrected to </section>
                            <section key={categoryIdx} className="space-y-12" aria-labelledby={`category-${categoryIdx}`}>
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-1 w-12 bg-accent rounded-full" aria-hidden="true"></div>
                                    <h2 id={`category-${categoryIdx}`} className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                                        {categoryGroup.category}
                                    </h2>
                                </div>

                                {/* Articles */}
                                <div className="space-y-12">
                                    {categoryGroup.articles.map((article, idx) => (
                                        <Link
                                            key={article.id}
                                            href={`/blog/${article.id}`}
                                            className="group"
                                            aria-label={`Read: ${article.title}`}
                                        >
                                            {/* FIX: `md:direction-rtl` is not a valid Tailwind class.
                                                Alternating layout is handled via md:order-* on children instead. */}
                                            <article className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                                {/* Image */}
                                                <figure className={`relative overflow-hidden rounded-2xl ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                                                    <div className="aspect-video bg-muted overflow-hidden rounded-2xl border border-border group-hover:border-accent/30 transition-all duration-300">
                                                        <Image
                                                            fill
                                                            src={article.image}
                                                            alt={`Illustration for: ${article.title}`}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <figcaption className="sr-only">Featured image for article: {article.title}</figcaption>
                                                </figure>

                                                {/* Content */}
                                                <div className={`space-y-5 ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                                                    <div className="space-y-3">
                                                        <span className="inline-block text-xs uppercase tracking-widest text-primary font-bold bg-accent/10 px-3 py-1.5 rounded-full">
                                                            {categoryGroup.category}
                                                        </span>
                                                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
                                                            {article.title}
                                                        </h3>
                                                    </div>

                                                    <p className="text-foreground/70 leading-relaxed">
                                                        {article.excerpt}
                                                    </p>

                                                    {/* Meta */}
                                                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border" aria-label="Article metadata">
                                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                            <User size={16} aria-hidden="true" />
                                                            <span className="sr-only">Author: </span>
                                                            <span>{article.author}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                            <Clock size={16} aria-hidden="true" />
                                                            <span className="sr-only">Reading time: </span>
                                                            <span>{article.readTime}</span>
                                                        </div>
                                                        <time className="text-sm text-muted-foreground" dateTime={article.date}>
                                                            {article.date}
                                                        </time>
                                                    </div>

                                                    {/* Read More */}
                                                    <div className="pt-2 flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-200" aria-hidden="true">
                                                        <span>Read Article</span>
                                                        <ArrowRight size={18} />
                                                    </div>
                                                </div>
                                            </article>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </article>
            </div>
        </>
    );
}