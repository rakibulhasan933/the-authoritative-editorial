import type { Metadata } from "next";
import type { ComponentProps } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DOMPurify from "isomorphic-dompurify";
import { Card } from "@/components/ui/card";
import { buildMetadataFromSeo, getSeoPayload } from "@/lib/seo-api";

type Params = { params: Promise<{ slug: string, category: string }> };

type BlogDetailResponse = {
    post: {
        id: string;
        slug: string;
        title: string;
        excerpt: string;
        publishedDate: string;
        readTime: string;
        category: string;
        categoryId: string | null;
        categorySlug: string | null;
        image: string;
        author: {
            name: string;
            title: string;
            bio?: string;
            avatar: string;
        };
        contentFormat: string;
        content: string;
        seo: {
            metaTitle: string;
            metaDescription: string;
            keywords: string[];
        };
    };
    relatedPosts: Array<{
        id: string;
        slug: string;
        title: string;
        category: string;
        publishedDate: string;
        readTime: string;
    }>;
};

const markdownComponents: ComponentProps<typeof ReactMarkdown>["components"] = {
    h1: (props: ComponentProps<"h1">) => (
        <h1 className="mb-4 mt-8 text-3xl font-bold" {...props} />
    ),
    h2: (props: ComponentProps<"h2">) => (
        <h2 className="mb-3 mt-7 text-2xl font-semibold" {...props} />
    ),
    h3: (props: ComponentProps<"h3">) => (
        <h3 className="mb-3 mt-6 text-xl font-semibold" {...props} />
    ),
    p: (props: ComponentProps<"p">) => (
        <p className="mb-4 leading-7 text-muted-foreground" {...props} />
    ),
    ul: (props: ComponentProps<"ul">) => (
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground" {...props} />
    ),
    ol: (props: ComponentProps<"ol">) => (
        <ol className="mb-4 list-decimal space-y-2 pl-6 text-muted-foreground" {...props} />
    ),
    a: (props: ComponentProps<"a">) => (
        <a className="text-primary underline underline-offset-4" {...props} />
    ),
    code: (props: ComponentProps<"code">) => (
        <code className="rounded bg-muted px-1 py-0.5 text-sm" {...props} />
    ),
    blockquote: (props: ComponentProps<"blockquote">) => (
        <blockquote className="my-6 border-l-2 border-border pl-4 italic" {...props} />
    ),
};

// Hoist formatter — avoid recreating options object on every call
const dateFmt = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
});

function formatPublishedDate(value: string) {
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? value : dateFmt.format(d);
}



async function getBlogPost(slug: string, category: string): Promise<BlogDetailResponse | null> {
    const response = await fetch(
        `https://authoritativeeditorial.vercel.app/api/${category}/${encodeURIComponent(slug)}`,
        {
            cache: "no-store",
        },
    );

    if (!response.ok) {
        return null;
    }

    return (await response.json()) as BlogDetailResponse;
}

// export async function generateMetadata({ params }: Params): Promise<Metadata> {
//     const seo = await getSeoPayload();
//     const { slug, category } = await params;
//     // const metadata = buildMetadataFromSeo(seo, "blogs");

//     const payload = await getBlogPost(slug, category);

//     if (!payload) {
//         return metadata;
//     }

//     return {
//         ...metadata,
//         title: payload.post.seo.metaTitle || payload.post.title,
//         description: payload.post.seo.metaDescription || payload.post.excerpt,
//         keywords: payload.post.seo.keywords,
//     };
// }

export default async function BlogPostPage({ params }: Params) {
    const data = await params;
    const { slug, category } = data;
    const payload = await getBlogPost(slug, category);
    if (!payload) {
        notFound();
    }

    const { post, relatedPosts } = payload;

    // Sanitize HTML content server-side to prevent XSS
    const safeHtml =
        post.contentFormat !== "markdown"
            ? DOMPurify.sanitize(post.content)
            : null;

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/*
                Fixed: was mx-8 which pushed content off-center on mobile.
                Use a consistent max-w + auto margins pattern instead.
            */}
            <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-sm">
                <div className="mx-auto max-w-4xl px-4 py-3.5 sm:px-6 lg:px-8">
                    <Link
                        href={post.categorySlug ? `/${post.categorySlug}` : "/"}
                        /*
                            Fixed: was hardcoded text-emerald-500 which ignores
                            design tokens and breaks in dark mode.
                            Use text-primary from your theme instead.
                        */
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                        <ArrowLeft size={18} />
                        Back to {post.category}
                    </Link>
                </div>
            </header>

            <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
                <article className="space-y-8">
                    <div className="space-y-6">
                        <div className="inline-flex items-center">
                            {/*
                                Fixed: replaced hardcoded text-emerald-500
                                with text-primary everywhere in this file.
                            */}
                            <span className="rounded-full bg-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                                {post.category}
                            </span>
                        </div>
                        <h1 className="text-5xl font-serif font-bold leading-tight text-pretty md:text-6xl lg:text-7xl">
                            {post.title}
                        </h1>
                        <p className="text-xl leading-relaxed text-foreground/70 text-pretty md:text-2xl">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 border-y border-border py-6 md:flex-row md:items-center md:gap-8">
                        <div className="flex items-center gap-4">
                            {/* Fixed: added relative to parent so Image fill works correctly */}
                            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border">
                                <Image
                                    fill
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    className="object-cover"
                                    sizes="56px"
                                />
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">{post.author.name}</p>
                                <p className="text-sm text-muted-foreground">{post.author.title}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-6 md:gap-8">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar size={16} aria-hidden="true" />
                                <time dateTime={post.publishedDate}>
                                    {formatPublishedDate(post.publishedDate)}
                                </time>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock size={16} aria-hidden="true" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>

                    {/*
                        Fixed: replaced fixed h-96 with aspect-video so the hero
                        image scales proportionally at all viewport widths.
                        Added priority since this is always the LCP element.
                    */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border">
                        <Image
                            fill
                            src={post.image}
                            alt={post.title}
                            className="object-cover"
                            sizes="(max-width: 896px) 100vw, 896px"
                            priority
                        />
                    </div>

                    {post.contentFormat === "markdown" ? (
                        <div className="prose prose-neutral max-w-none">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={markdownComponents}
                            >
                                {post.content}
                            </ReactMarkdown>
                        </div>
                    ) : (
                        /*
                            Fixed: raw dangerouslySetInnerHTML is an XSS vector
                            if your CMS content is ever compromised or user-influenced.
                            safeHtml is DOMPurify-sanitized above before render.
                        */
                        <div
                            className="prose prose-neutral max-w-none"
                            dangerouslySetInnerHTML={{ __html: safeHtml ?? "" }}
                        />
                    )}

                    {/*
                        Fixed: author card previously had name + title but no bio,
                        leaving an awkward empty space. Now shows bio when available,
                        and collapses cleanly when absent.
                    */}
                    <div className="border-t border-border pt-8">
                        <Card className="rounded-xl border border-border bg-muted/40 p-6">
                            <div className="flex gap-4">
                                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border">
                                    <Image
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        fill
                                        className="object-cover"
                                        sizes="64px"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-foreground">{post.author.name}</p>
                                    <p className="mb-2 text-sm text-muted-foreground">{post.author.title}</p>
                                    {post.author.bio && (
                                        <p className="text-sm leading-relaxed text-foreground/70">
                                            {post.author.bio}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </Card>
                    </div>
                </article>
            </main>

            {relatedPosts.length > 0 && (
                /*
                    Fixed: was py-5 (20px) with mb-12 on h2 — disproportionate.
                    Now py-12 on the section with mb-8 on the heading.
                */
                <section
                    className="border-t border-border bg-muted/20 py-12"
                    aria-labelledby="related-heading"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2
                            id="related-heading"
                            className="mb-8 text-4xl font-serif font-bold text-foreground"
                        >
                            Related Articles
                        </h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {relatedPosts.map((related) => (
                                <Link key={related.id} href={`/blogs/${related.slug}`}>
                                    <Card className="group cursor-pointer rounded-xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
                                        <div className="space-y-4">
                                            <span className="inline-block rounded-full bg-accent/10 px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                                                {related.category}
                                            </span>
                                            <h3 className="line-clamp-2 text-lg font-serif font-bold text-foreground transition-colors group-hover:text-primary">
                                                {related.title}
                                            </h3>
                                            <div className="flex items-center gap-4 border-t border-border pt-4 text-sm text-muted-foreground">
                                                <time dateTime={related.publishedDate}>
                                                    {formatPublishedDate(related.publishedDate)}
                                                </time>
                                                <span aria-hidden="true">|</span>
                                                <span>{related.readTime}</span>
                                                <ArrowRight
                                                    size={16}
                                                    className="ml-auto"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}