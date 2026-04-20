'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Clock, Calendar, Share2, BookmarkIcon, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BlogArticle() {
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const article = {
        slug: 'core-web-vitals-paradigm-shift',
        title: 'The Core Web Vitals Paradigm Shift: What Engineering Teams Are Missing',
        excerpt: 'A deep dive into the discrepancy between synthetic lab data and real-world field metrics, and why your current optimization strategy might be actively harming your ranking.',
        author: {
            name: 'Dr. Elias Vance',
            title: 'Head of Technical SEO',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
        },
        publishedDate: 'October 12, 2024',
        readTime: '12 min read',
        category: 'Featured Insight',
        image: 'https://images.unsplash.com/photo-1460925895917-aaf4e2fe1ddc?w=1200&h=600&fit=crop',
        content: `
      In the discourse surrounding technical search engine optimization, few metrics have generated as much discussion—or as much confusion—as Core Web Vitals. What began as a straightforward initiative to measure real-world user experience has evolved into a complex landscape where synthetic lab data often contradicts actual field performance.

      ## The Lab vs. Field Divide

      The fundamental issue lies in the nature of measurement itself. Google's lab-based metrics, collected through Lighthouse audits and synthetic testing environments, measure performance under idealized conditions. A webpage might load flawlessly on a fast connection in a clean browser environment, yet struggle significantly when accessed by a user on a 4G network from a mobile device in an urban area.

      Field data, by contrast, captures real user experiences. Chrome User Experience Report (CrUX) data aggregates performance metrics from actual Chrome users, providing a window into how your site truly performs across diverse hardware, network, and geographic conditions.

      ## Why Your Optimization Strategy Might Be Harming You

      Many engineering teams, in their quest to achieve perfect Lighthouse scores, have begun optimizing specifically for synthetic metrics rather than for actual user experience. This has several unintended consequences:

      ### 1. Premature Optimization
      Chasing laboratory perfection before understanding real-world bottlenecks is a classic case of optimizing in the wrong order. A page might achieve a perfect Lighthouse score while still having significant field performance issues.

      ### 2. Resource Misallocation
      Development time spent optimizing synthetic metrics is time not spent solving actual user problems. If your field data shows users experiencing layout shift on mobile, but your lab tests show perfect CLS scores, you're solving the wrong problem.

      ### 3. The JavaScript Paradox
      Many teams have attempted to improve their Core Web Vitals by reducing JavaScript, only to find that their application becomes less functional and user engagement actually decreases. This represents a fundamental misunderstanding of what these metrics are designed to measure.

      ## The Path Forward

      Rather than optimizing for metrics, optimize for user experience. Here's how:

      ### Prioritize Field Data
      Make CrUX data your primary source of truth. Segment by device type, connection speed, and geography. Understand where your actual users are struggling.

      ### Use Lab Data as Triage
      Lighthouse should be used to identify potential problems, not as a measure of success. When field data shows poor performance, use synthetic testing to understand why.

      ### Measure What Matters
      Core Web Vitals are a proxy for user experience, not user experience itself. Consider measuring actual user engagement metrics alongside Core Web Vitals. Does a faster page lead to more conversions? More time on page?

      ### Test Incrementally
      Before deploying major changes, test them with a subset of users. This allows you to validate that your optimization actually improves field performance before committing to it site-wide.

      ## Conclusion

      The Core Web Vitals paradigm has matured beyond simple metric optimization. The most successful teams are those that view these metrics as starting points for investigation, not endpoints for optimization. By keeping field data at the center of your decision-making process, you'll build faster, more performant websites that users genuinely prefer.

      The future of web performance optimization belongs to those who understand the distinction between measuring performance and improving it.
    `
    };

    const relatedArticles = [
        {
            title: 'The Anatomy of a High-Converting Informational Query Page',
            category: 'On-Page',
            readTime: '6 min read',
            date: 'Oct 08'
        },
        {
            title: 'Advanced Schema.org Nesting: Building Relationships',
            category: 'Markup',
            readTime: '8 min read',
            date: 'Sep 28'
        },
        {
            title: 'Migrating to Next.js: The Pre-rendering Checklist for SEO',
            category: 'Architecture',
            readTime: '10 min read',
            date: 'Oct 01'
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-sm">
                <div className="max-w-4xl mx-8 px-2 sm:px-1 lg:px-4 py-3.5">
                    <Link href="/" className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-500/80 transition-colors text-sm font-medium">
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="mx-2 px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                {/* Article Header */}
                <article className="space-y-6">
                    {/* Category and Title */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center">
                            <span className="text-xs uppercase tracking-widest text-emerald-500 font-bold bg-accent/10 px-3 py-1.5 rounded-full">
                                {article.category}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-pretty">
                            {article.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed text-pretty">
                            {article.excerpt}
                        </p>
                    </div>

                    {/* Article Meta */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 border-t border-b border-border py-6">
                        {/* Author Info */}
                        <div className="flex items-center gap-4">
                            <Image
                                fill
                                src={article.author.avatar}
                                alt={article.author.name}
                                className="w-14 h-14 rounded-full object-cover border border-border"
                            />
                            <div>
                                <p className="font-semibold text-foreground">{article.author.name}</p>
                                <p className="text-sm text-muted-foreground">{article.author.title}</p>
                            </div>
                        </div>

                        {/* Article Details */}
                        <div className="flex flex-wrap gap-6 md:gap-8">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar size={16} />
                                <span>{article.publishedDate}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock size={16} />
                                <span>{article.readTime}</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 md:ml-auto">
                            <button
                                onClick={() => setIsLiked(!isLiked)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm font-medium ${isLiked
                                    ? 'bg-accent/10 text-emerald-500'
                                    : 'bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground'
                                    }`}
                            >
                                <ThumbsUp size={16} />
                                <span className="hidden sm:inline">Like</span>
                            </button>
                            <button
                                onClick={() => setIsBookmarked(!isBookmarked)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm font-medium ${isBookmarked
                                    ? 'bg-accent/10 text-emerald-500'
                                    : 'bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground'
                                    }`}
                            >
                                <BookmarkIcon size={16} />
                                <span className="hidden sm:inline">Save</span>
                            </button>
                            <button className="flex items-center gap-2 px-3 py-2 bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-all text-sm font-medium">
                                <Share2 size={16} />
                                <span className="hidden sm:inline">Share</span>
                            </button>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative rounded-2xl overflow-hidden border border-border">
                        <Image
                            fill
                            src={article.image}
                            alt={article.title}
                            className="w-full h-96 object-cover"
                        />
                    </div>

                    {/* Article Body */}
                    <div className="prose prose-invert max-w-none">
                        <div className="space-y-8 text-lg text-foreground/80 leading-relaxed">
                            {article.content.split('\n\n').map((paragraph, idx) => {
                                if (paragraph.trim().startsWith('##')) {
                                    return (
                                        <h2 key={idx} className="text-3xl font-serif font-bold text-foreground mt-12 mb-6">
                                            {paragraph.trim().replace('## ', '')}
                                        </h2>
                                    );
                                }
                                if (paragraph.trim().startsWith('###')) {
                                    return (
                                        <h3 key={idx} className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                                            {paragraph.trim().replace('### ', '')}
                                        </h3>
                                    );
                                }
                                return paragraph.trim() && <p key={idx} className="text-foreground/80 leading-relaxed">{paragraph.trim()}</p>;
                            })}
                        </div>
                    </div>

                    {/* Article Footer */}
                    <div className="border-t border-border pt-8 space-y-6">
                        {/* Tags/Categories */}
                        <div className="flex flex-wrap gap-2">
                            {['Core Web Vitals', 'SEO', 'Performance', 'Engineering'].map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-muted/40 text-sm text-foreground/70 border border-border hover:border-accent/30 transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Author Bio */}
                        <Card className="p-6 border border-border rounded-xl bg-muted/40">
                            <div className="flex gap-4">
                                <Image
                                    src={article.author.avatar}
                                    alt={article.author.name}
                                    fill
                                    className="w-16 h-16 rounded-full object-cover border border-border shrink-0"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-foreground mb-1">{article.author.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-3">{article.author.title}</p>
                                    <p className="text-sm text-foreground/70 leading-relaxed">
                                        A seasoned technical SEO expert with over a decade of experience optimizing large-scale enterprise websites. Specializing in Core Web Vitals, structured data, and JavaScript framework optimization.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </article>
            </main>

            {/* Related Articles Section */}
            <section className="border-t border-border bg-muted/20 py-5">
                <div className="mx-4 px-4 sm:px-1 lg:px-8">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-12">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedArticles.map((article, idx) => (
                            <Card
                                key={idx}
                                className="group p-6 border border-border rounded-xl hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm"
                            >
                                <div className="space-y-4">
                                    <span className="inline-block text-xs uppercase tracking-widest text-emerald-500 font-bold bg-accent/10 px-2.5 py-1 rounded-full">
                                        {article.category}
                                    </span>
                                    <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-emerald-500 transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                                        <span>{article.date}</span>
                                        <span>•</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-10 px-4 sm:px-2 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <Card className="p-6 md:p-10 border border-border rounded-2xl bg-linear-to-br from-accent/5 to-accent/10 text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                            Stay Updated with Expert Insights
                        </h2>
                        <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
                            Join 15,000+ professionals receiving our weekly analysis of industry trends and technical deep dives.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-center sm:text-left"
                            />
                            <Button className="bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium">
                                Subscribe
                            </Button>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
}
