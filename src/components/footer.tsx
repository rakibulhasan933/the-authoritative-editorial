"use client";

import * as React from "react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FOOTER_COLS = [
    {
        label: "Sections",
        links: [
            { label: "News", href: "/news" },
            { label: "SEO", href: "/seo" },
            { label: "Paid Media", href: "/paid-media" },
            { label: "Content", href: "/content" },
            { label: "Social Media", href: "/social" },
            { label: "Digital Experience", href: "/digital/experience" },
            { label: "WordPress", href: "/digital/wordpress" },
        ],
    },
    {
        label: "Topics",
        links: [
            { label: "Link Building", href: "/seo/link-building" },
            { label: "Local Search", href: "/seo/local" },
            { label: "Mobile Search", href: "/seo/mobile" },
            { label: "International SEO", href: "/seo/international" },
            { label: "Enterprise SEO", href: "/seo/enterprise" },
            { label: "PPC", href: "/paid-media/ppc" },
            { label: "Analytics & Data", href: "/digital/analytics" },
            { label: "Reddit", href: "/social/reddit" },
        ],
    },
    {
        label: "Resources",
        links: [
            { label: "Webinars", href: "/webinars" },
            { label: "Rundowns", href: "/rundowns" },
            { label: "Library", href: "/library" },
            { label: "E-Books", href: "/ebooks" },
            { label: "SEJ Show", href: "/podcast" },
            { label: "Algorithm Updates", href: "/google-algorithm" },
            { label: "SEO Conferences", href: "/conferences" },
        ],
    },
    {
        label: "Advertise",
        links: [
            { label: "Advertising on SEJ", href: "/advertise" },
            { label: "Case Study: B2B SaaS", href: "/advertise/case-study" },
            { label: "Banner Ads", href: "/advertise/banners" },
        ],
        extra: {
            label: "Guides",
            links: [
                { label: "Beginner's SEO Guide", href: "/guides/seo-beginners" },
                { label: "Core Web Vitals", href: "/guides/core-web-vitals" },
                { label: "Technical SEO", href: "/guides/technical-seo" },
                { label: "Keyword Research", href: "/guides/keyword-research" },
            ],
        },
    },
    {
        label: "Company",
        links: [
            { label: "Subscribe", href: "/subscribe" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Careers", href: "/careers" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Do Not Sell My Info", href: "/privacy/do-not-sell" },
        ],
        extra: {
            label: "Podcast",
            links: [
                { label: "SEJ Show", href: "/podcast" },
                { label: "Latest Episodes", href: "/podcast/episodes" },
                { label: "Subscribe on Spotify", href: "https://spotify.com" },
            ],
        },
    },
];

const BOTTOM_LINKS = [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Settings", href: "/cookies" },
    { label: "Accessibility", href: "/accessibility" },
];

// ─── Social Icons ─────────────────────────────────────────────────────────────

function IconLinkedIn() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}
function IconX() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}
function IconFacebook() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
    );
}
function IconYouTube() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
            <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0f172a" />
        </svg>
    );
}
function IconInstagram() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}
function IconReddit() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
            <path d="M7.5 12.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm9 0c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM12 16c-1.1 0-2-.45-2.5-1h5c-.5.55-1.4 1-2.5 1z" fill="#0f172a" />
        </svg>
    );
}
function IconPinterest() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.62-.31-1.55c0-1.45.84-2.54 1.89-2.54.89 0 1.32.67 1.32 1.47 0 .9-.57 2.23-.87 3.47-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.1-2.36 3.1-5.15 0-2.13-1.44-3.62-3.49-3.62-2.38 0-3.77 1.79-3.77 3.63 0 .72.28 1.49.62 1.91.07.08.08.15.06.24-.06.26-.2.82-.23.94-.04.15-.13.18-.29.11-1.08-.5-1.75-2.1-1.75-3.38 0-2.74 1.99-5.26 5.74-5.26 3.01 0 5.35 2.14 5.35 5.01 0 2.99-1.88 5.39-4.5 5.39-.88 0-1.71-.46-1.99-1l-.54 2.02c-.2.75-.73 1.69-1.08 2.26.81.25 1.67.39 2.55.39 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
    );
}
function IconRSS() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.18 15.64a2.18 2.18 0 012.18 2.18C8.36 19.01 7.38 20 6.18 20 4.98 20 4 19.01 4 17.82a2.18 2.18 0 012.18-2.18M4 4.44A15.56 15.56 0 0119.56 20h-2.83A12.73 12.73 0 004 7.27V4.44m0 5.66a9.9 9.9 0 019.9 9.9h-2.83A7.07 7.07 0 004 12.93V10.1z" />
        </svg>
    );
}

const SOCIAL_LINKS = [
    { label: "LinkedIn", icon: IconLinkedIn, href: "https://linkedin.com" },
    { label: "X / Twitter", icon: IconX, href: "https://x.com" },
    { label: "Facebook", icon: IconFacebook, href: "https://facebook.com" },
    { label: "YouTube", icon: IconYouTube, href: "https://youtube.com" },
    { label: "Instagram", icon: IconInstagram, href: "https://instagram.com" },
    { label: "Reddit", icon: IconReddit, href: "https://reddit.com" },
    { label: "Pinterest", icon: IconPinterest, href: "https://pinterest.com" },
    { label: "RSS", icon: IconRSS, href: "/rss" },
];

// ─── Newsletter ────────────────────────────────────────────────────────────────

function Newsletter() {
    const [email, setEmail] = React.useState("");
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;
        setSubmitted(true);
    };

    return (
        <div className="bg-slate-800 border border-white/8 rounded-xl p-4 mb-5">
            <p className="text-[11px] font-bold tracking-widest uppercase text-emerald-500 mb-1.5">
                Weekly digest
            </p>
            <p className="text-[12px] text-slate-400 mb-3 leading-snug">
                Top stories, no noise. Delivered every Tuesday.
            </p>
            {submitted ? (
                <p className="text-[12px] text-emerald-400 font-medium">
                    You&lsquo;re in — check your inbox!
                </p>
            ) : (
                <form onSubmit={handleSubmit} className="flex gap-1.5">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        aria-label="Email address"
                        className="flex-1 min-w-0 px-2.5 py-1.5 rounded-md border border-white/12 bg-white/6 text-[12px] text-white placeholder:text-white/30 outline-none focus:border-emerald-500 transition-colors"
                    />
                    <button
                        type="submit"
                        className="px-3 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white text-[12px] font-semibold shrink-0 transition-colors"
                    >
                        Subscribe
                    </button>
                </form>
            )}
        </div>
    );
}

// ─── Column ────────────────────────────────────────────────────────────────────

function FooterCol({ col }: { col: typeof FOOTER_COLS[0] }) {
    return (
        <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-emerald-500 mb-3">
                {col.label}
            </p>
            <ul className="space-y-0">
                {col.links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="block py-[3.5px] text-[12.5px] text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-150 leading-snug"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            {"extra" in col && col.extra && (
                <div className="mt-4">
                    <p className="text-[11px] font-bold tracking-widest uppercase text-emerald-500 mb-3">
                        {col.extra.label}
                    </p>
                    <ul className="space-y-0">
                        {col.extra.links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="block py-[3.5px] text-[12.5px] text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-150 leading-snug"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

// ─── Main Footer ───────────────────────────────────────────────────────────────

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">

            {/* Top section */}
            <div className="border-b border-white/[0.07]">
                <div className="max-w-300 mx-auto px-5 lg:px-6 pt-12 pb-0">
                    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-12">

                        {/* Brand column */}
                        <div>
                            {/* Logo */}
                            <div className="mb-4">
                                <Link href="/" className="inline-block">
                                    <span className="block text-[22px] font-extrabold tracking-tight leading-[1.1] text-white">
                                        Search<br />Engine<br />
                                        <span className="text-emerald-500">Journal</span>
                                    </span>
                                </Link>
                            </div>

                            <p className="text-[13px] text-slate-400 leading-relaxed mb-5 max-w-50 lg:max-w-full">
                                Timely, relevant insights for SEOs, marketers, and entrepreneurs to grow their businesses.
                            </p>
                            {/* Social icons */}
                            <div className="flex flex-wrap gap-1.5 pb-10">
                                {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
                                    <Link
                                        key={label}
                                        href={href}
                                        title={label}
                                        aria-label={label}
                                        className="w-7.5 h-7.5 rounded-md bg-white/6 border border-white/[0.07] flex items-center justify-center text-slate-400 hover:bg-emerald-500/15 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                                    >
                                        <Icon />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Link columns */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-7 lg:gap-5 pb-12">
                            {FOOTER_COLS.map((col) => (
                                <FooterCol key={col.label} col={col} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="max-w-300 mx-auto px-5 lg:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 flex-wrap">
                <span className="text-[12px] text-slate-500">
                    © 2026 Search Engine Journal. All rights reserved. Published by Alpha Brand Media.
                </span>
                <nav className="flex flex-wrap gap-4" aria-label="Legal links">
                    {BOTTOM_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-[12px] text-slate-600 hover:text-slate-400 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

        </footer>
    );
}