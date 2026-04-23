import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadataFromSeo, getSeoPayload } from "@/lib/seo-api";

type Params = {
    params: Promise<{ category: string }>;
};

type CategoryApiResponse = {
    category: {
        id: string | null;
        name: string;
        slug: string | null;
    };
    total: number;
    posts: Array<{
        id: string;
        slug: string;
        title: string;
        excerpt: string;
        publishedDate: string;
        readTime: string;
        category: string;
        image: string;
        author: {
            name: string;
        };
    }>;
};


// Hoist formatter — Intl.DateTimeFormat construction is expensive, create once
const fmt = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
});

function formatDate(value: string) {
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? value : fmt.format(d);
}

async function getCategoryBlogs(category: string) {
    const response = await fetch(
        `https://authoritativeeditorial.vercel.app/api/blogs/category/${encodeURIComponent(category)}`,
        {
            next: {
                revalidate: 30
                // Enables on-demand revalidation via revalidateTag()
            },
        },
    );

    if (!response.ok) {
        return null;
    }

    return (await response.json()) as CategoryApiResponse;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const seo = await getSeoPayload();
    const { category } = await params;
    const metadata = buildMetadataFromSeo(seo, "blogs");

    const payload = await getCategoryBlogs(category);
    const categoryName = payload?.category.name ?? decodeURIComponent(category);

    return {
        ...metadata,
        title: `${categoryName} | Blog Archives`,
        description: `Explore ${categoryName} articles, insights, and analysis from our editorial team.`,
    };
}

export default async function Page({ params }: Params) {
    const { category } = await params;
    const payload = await getCategoryBlogs(category);

    if (!payload || payload.total === 0) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header now shows category name, not hardcoded marketing copy */}
            <header className="mx-2 px-4 py-10 sm:px-3 md:py-12 lg:px-4" role="banner">
                <div className="w-full space-y-6">
                    <h1 className="text-5xl font-serif font-bold leading-tight text-foreground md:text-6xl">
                        {payload.category.name}
                    </h1>
                    <p className="max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl">
                        {payload.total} article{payload.total !== 1 ? "s" : ""} in this category
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                        <div className="text-sm text-muted-foreground">
                            <p>Curated by our team of experts • Updated weekly</p>
                        </div>
                    </div>
                </div>
            </header>

            <article className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                {/* Removed redundant space-y-32 wrapper with single child */}
                <section className="space-y-12" aria-labelledby="category-title">
                    {/* Removed duplicate h2 category title — h1 in header already carries it */}

                    {/* divide-y gives clean visual separation between articles */}
                    <div className="divide-y divide-border">
                        {payload.posts.map((article, idx) => (
                            <Link
                                key={article.id}
                                href={`/${category}/${article.slug}`}
                                className="group"
                                aria-label={`Read: ${article.title}`}
                            >
                                <article className="grid grid-cols-1 items-center gap-8 py-12 md:grid-cols-2">
                                    <figure
                                        className={`relative overflow-hidden rounded-2xl ${idx % 2 === 1 ? "md:order-2" : "md:order-1"
                                            }`}
                                    >
                                        {/* relative is required on the parent of a fill Image */}
                                        <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-muted transition-all duration-300 group-hover:border-accent/30">
                                            <Image
                                                fill
                                                src={article.image}
                                                alt={`Illustration for: ${article.title}`}
                                                // sizes tells the browser the rendered width so it
                                                // fetches the correct resolution, not a full-viewport image
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                // First image: eager + priority for LCP optimisation
                                                // All others: lazy
                                                priority={idx === 0}
                                                loading={idx === 0 ? "eager" : "lazy"}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <figcaption className="sr-only">
                                            Featured image for article: {article.title}
                                        </figcaption>
                                    </figure>

                                    <div
                                        className={`space-y-5 ${idx % 2 === 1 ? "md:order-1" : "md:order-2"}`}
                                    >
                                        <div className="space-y-3">
                                            <span className="inline-block rounded-full bg-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                                                {article.category}
                                            </span>
                                            <h3 className="text-2xl font-serif font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary md:text-3xl">
                                                {article.title}
                                            </h3>
                                        </div>

                                        <p className="leading-relaxed text-foreground/70">{article.excerpt}</p>

                                        <div
                                            className="flex flex-wrap items-center gap-4 border-t border-border pt-4"
                                            aria-label="Article metadata"
                                        >
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <User size={16} aria-hidden="true" />
                                                <span className="sr-only">Author: </span>
                                                <span>{article.author.name}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Clock size={16} aria-hidden="true" />
                                                <span className="sr-only">Reading time: </span>
                                                <span>{article.readTime}</span>
                                            </div>
                                            <time
                                                className="text-sm text-muted-foreground"
                                                dateTime={article.publishedDate}
                                            >
                                                {formatDate(article.publishedDate)}
                                            </time>
                                        </div>

                                        <div
                                            className="flex items-center gap-2 pt-2 font-medium text-primary transition-all duration-200 group-hover:gap-3"
                                            aria-hidden="true"
                                        >
                                            <span>Read Article</span>
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </section>
            </article>
        </div>
    );
}