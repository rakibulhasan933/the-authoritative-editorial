"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    Mail,
    Search,
    Download,
    Play,
    BookOpen,
    Mic,
    Building2,
    Briefcase,
    ChevronDown,
    Menu,
    X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SearchDialog } from "../search-dialog";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavLink {
    label: string;
    href: string;
    icon?: LucideIcon;
    underline?: boolean;
}

interface PromoData {
    badge: string;
    title: string;
    description: string;
    cta: string;
    href: string;
    color: string;
    ctaIcon: "download" | "play";
}

interface MenuCol {
    label?: string;
    links: NavLink[];
    wide?: boolean;
}

interface MenuData {
    cols: MenuCol[];
    promo?: PromoData;
}

interface MoreColData {
    label: string;
    links: NavLink[];
    extra?: { label: string; links: NavLink[] };
    social?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const MENUS: Record<string, MenuData> = {
    latest: {
        cols: [
            {
                links: [
                    { label: "All News", href: "/news" },
                    { label: "SEO News", href: "/news/seo" },
                    { label: "PPC News", href: "/news/ppc" },
                    { label: "Social Media News", href: "/news/social" },
                    { label: "Webinars", href: "/webinars", icon: BookOpen },
                    { label: "Podcast", href: "/podcast", icon: Mic },
                    { label: "For Agencies", href: "/agencies", icon: Building2, underline: true },
                    { label: "Careers", href: "/careers", icon: Briefcase },
                ],
            },
        ],
        promo: {
            badge: "WEBINAR",
            title: "Your Lead Gen is Running. Your Pipeline Isn't. Here's Why.",
            description: "Join Heather Campbell and Jennifer McDonald — frameworks from 300+ successful webinars.",
            cta: "Register Now",
            href: "/webinars/lead-gen",
            color: "from-emerald-950 to-teal-900",
            ctaIcon: "play",
        },
    },
    seo: {
        cols: [
            {
                label: "Topics",
                wide: true,
                links: [
                    { label: "All SEO", href: "/seo" },
                    { label: "Enterprise SEO", href: "/seo/enterprise" },
                    { label: "Algorithm Updates", href: "/seo/algorithm-updates" },
                    { label: "International SEO", href: "/seo/international" },
                    { label: "Link Building", href: "/seo/link-building" },
                    { label: "Local SEO", href: "/seo/local" },
                    { label: "Mobile SEO", href: "/seo/mobile" },
                    { label: "On-Page SEO", href: "/seo/on-page" },
                    { label: "SEO Strategy", href: "/seo/strategy" },
                    { label: "Technical SEO", href: "/seo/technical" },
                    { label: "Web Dev For SEO", href: "/seo/web-dev" },
                    { label: "WordPress SEO", href: "/seo/wordpress" },
                ],
            },
            {
                label: "Columns",
                links: [
                    { label: "Search Visibility With Bill Hunt", href: "/columns/bill-hunt" },
                    { label: "Enterprise SEO With Dan Taylor", href: "/columns/dan-taylor" },
                    { label: "Ask An SEO", href: "/columns/ask-an-seo" },
                    { label: "SEO Pulse", href: "/columns/seo-pulse" },
                ],
            },
        ],
        promo: {
            badge: "GUIDE",
            title: "Vibe Code Tools That Solve Your SEO Problems",
            description: "You don't need to code to build working SEO tools, just the right prompts.",
            cta: "Download Now",
            href: "/guides/vibe-code-seo",
            color: "from-blue-950 to-blue-900",
            ctaIcon: "download",
        },
    },
    paid: {
        cols: [
            {
                label: "Topics",
                wide: true,
                links: [
                    { label: "All Paid Media", href: "/paid-media" },
                    { label: "Paid Media News", href: "/paid-media/news" },
                    { label: "Paid Strategy", href: "/paid-media/strategy" },
                    { label: "Display Ads", href: "/paid-media/display" },
                    { label: "PPC", href: "/paid-media/ppc" },
                    { label: "Programmatic", href: "/paid-media/programmatic" },
                    { label: "Social Media Advertising", href: "/paid-media/social-ads" },
                    { label: "Video Advertising", href: "/paid-media/video" },
                ],
            },
            {
                label: "Columns",
                links: [
                    { label: "Ask A PPC", href: "/columns/ask-a-ppc" },
                    { label: "PPC Pulse", href: "/columns/ppc-pulse" },
                ],
            },
        ],
        promo: {
            badge: "WEBINAR",
            title: "500M AI Searches Later: How To Improve AI Search Visibility",
            description: "Get the most data-backed, actionable guidance available.",
            cta: "Register Now",
            href: "/webinars/ai-search-visibility",
            color: "from-violet-950 to-purple-900",
            ctaIcon: "play",
        },
    },
    content: {
        cols: [
            {
                label: "Topics",
                links: [
                    { label: "All Content", href: "/content" },
                    { label: "Content News", href: "/content/news" },
                    { label: "Content Strategy", href: "/content/strategy" },
                    { label: "Content Creation", href: "/content/creation" },
                    { label: "Content Marketing", href: "/content/marketing" },
                    { label: "Content Trends", href: "/content/trends" },
                ],
            },
        ],
        promo: {
            badge: "GUIDE",
            title: "The New Publishing Standard in the AI Era",
            description: "Discover how leading publishers are pivoting to a unified approach.",
            cta: "Download Now",
            href: "/guides/publishing-ai-era",
            color: "from-orange-950 to-amber-900",
            ctaIcon: "download",
        },
    },
    social: {
        cols: [
            {
                label: "Topics",
                wide: true,
                links: [
                    { label: "All Social Media", href: "/social" },
                    { label: "Social Media News", href: "/social/news" },
                    { label: "Social Strategy", href: "/social/strategy" },
                    { label: "Social Advertising", href: "/social/advertising" },
                    { label: "Bluesky", href: "/social/bluesky" },
                    { label: "Facebook", href: "/social/facebook" },
                    { label: "LinkedIn", href: "/social/linkedin" },
                    { label: "TikTok", href: "/social/tiktok" },
                    { label: "Twitter", href: "/social/twitter" },
                    { label: "YouTube", href: "/social/youtube" },
                    { label: "Reddit", href: "/social/reddit" },
                    { label: "Instagram", href: "/social/instagram" },
                ],
            },
        ],
        promo: {
            badge: "WEBINAR",
            title: "500M AI Searches Later: Improve AI Search Visibility",
            description: "Get data-backed guidance on improving your brand visibility.",
            cta: "Register Now",
            href: "/webinars/ai-search-visibility",
            color: "from-violet-950 to-purple-900",
            ctaIcon: "play",
        },
    },
    digital: {
        cols: [
            {
                label: "Topics",
                wide: true,
                links: [
                    { label: "All Digital Marketing", href: "/digital" },
                    { label: "Digital Strategy", href: "/digital/strategy" },
                    { label: "Affiliate Marketing", href: "/digital/affiliate" },
                    { label: "Analytics & Data", href: "/digital/analytics" },
                    { label: "Digital Experience", href: "/digital/experience" },
                    { label: "Generative AI", href: "/digital/ai" },
                    { label: "Digital Trends", href: "/digital/trends" },
                    { label: "Ecommerce", href: "/digital/ecommerce" },
                    { label: "Lead Generation", href: "/digital/lead-gen" },
                    { label: "WordPress", href: "/digital/wordpress" },
                ],
            },
        ],
        promo: {
            badge: "GUIDE",
            title: "The New Publishing Standard in the AI Era",
            description: "Discover how leading publishers are pivoting for sustainable revenue.",
            cta: "Download Now",
            href: "/guides/publishing-ai-era",
            color: "from-orange-950 to-amber-900",
            ctaIcon: "download",
        },
    },
};

const MORE_COLS: MoreColData[] = [
    {
        label: "Guides",
        links: [
            { label: "All Guides", href: "/guides" },
            { label: "Beginner's Guide to SEO", href: "/guides/seo-beginners" },
            { label: "Core Web Vitals Guide", href: "/guides/core-web-vitals" },
            { label: "Google E-E-A-T Guide", href: "/guides/eeat" },
            { label: "Link Building Guide", href: "/guides/link-building" },
            { label: "Local SEO Guide", href: "/guides/local-seo" },
            { label: "On-Page SEO", href: "/guides/on-page-seo" },
            { label: "Ranking Factors", href: "/guides/ranking-factors" },
            { label: "WordPress SEO", href: "/guides/wordpress-seo" },
            { label: "Technical SEO", href: "/guides/technical-seo" },
            { label: "SEO Audit", href: "/guides/seo-audit" },
            { label: "Keyword Research Guide", href: "/guides/keyword-research" },
            { label: "PPC Guide", href: "/guides/ppc" },
            { label: "Facebook Ads Guide", href: "/guides/facebook-ads" },
            { label: "Content Marketing Guide", href: "/guides/content-marketing" },
        ],
    },
    {
        label: "Resources",
        links: [
            { label: "Webinars", href: "/webinars" },
            { label: "Rundowns", href: "/rundowns" },
            { label: "Library", href: "/library" },
            { label: "Ebooks", href: "/ebooks" },
            { label: "SEJ Show + Podcast", href: "/podcast" },
            { label: "Google Algorithm Updates", href: "/google-algorithm" },
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
            label: "Company",
            links: [
                { label: "Subscribe", href: "/subscribe" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Careers", href: "/careers" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Do Not Sell My Info", href: "/privacy/do-not-sell" },
            ],
        },
    },
    {
        label: "Follow Us",
        links: [],
        social: true,
    },
];

const SOCIAL_ICONS = [
    { label: "Google News", char: "G" },
    { label: "LinkedIn", char: "in" },
    { label: "YouTube", char: "▶" },
    { label: "Facebook", char: "f" },
    { label: "X / Twitter", char: "𝕏" },
    { label: "Bluesky", char: "B" },
    { label: "Instagram", char: "I" },
    { label: "Reddit", char: "R" },
    { label: "Pinterest", char: "P" },
    { label: "RSS", char: "◉" },
];

const NAV_ITEMS = [
    { id: "latest", label: "Latest" },
    { id: "seo", label: "SEO" },
    { id: "paid", label: "Paid Media" },
    { id: "content", label: "Content" },
    { id: "social", label: "Social" },
    { id: "digital", label: "Digital" },
    { id: "webinars", label: "Webinars", href: "/webinars" },
    { id: "more", label: "More" },
    { id: "advertise", label: "Advertise", href: "/advertise" },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function PromoCard({ promo }: { promo: PromoData }) {
    return (
        <div className="w-52 shrink-0">
            <div className={cn("rounded-lg bg-linear-to-br p-4 mb-2.5 h-21 flex items-center justify-center", promo.color)}>
                <span className="text-white/30 text-[10px] font-bold tracking-widest uppercase">Preview</span>
            </div>
            <span className="inline-block text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded border border-emerald-200 bg-emerald-50 text-emerald-700 mb-1.5">
                {promo.badge}
            </span>
            <p className="text-[12.5px] font-medium text-gray-900 leading-snug mb-1">{promo.title}</p>
            <p className="text-[11px] text-gray-400 leading-relaxed mb-2.5">{promo.description}</p>
            <Link
                href={promo.href}
                className="flex items-center justify-center gap-1.5 w-full py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white text-[11.5px] font-semibold transition-colors"
            >
                {promo.ctaIcon === "download" ? <Download className="h-2.5 w-2.5" /> : <Play className="h-2.5 w-2.5" />}
                {promo.cta}
            </Link>
        </div>
    );
}

function LinkList({ links }: { links: NavLink[] }) {
    return (
        <ul className="space-y-0">
            {links.map((link) => {
                const Icon = link.icon;
                return (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={cn(
                                "flex items-center gap-1.5 py-[4.5px] text-[12.5px] text-gray-600 hover:text-emerald-600 transition-colors leading-tight group",
                                link.underline && "underline underline-offset-2"
                            )}
                        >
                            {Icon && <Icon className="h-3 w-3 text-gray-400 group-hover:text-emerald-500 transition-colors shrink-0" />}
                            {link.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

function VSep() {
    return <div className="w-px self-stretch bg-gray-100 shrink-0" />;
}

function SectionLabel({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
    return (
        <p className={cn("text-[10px] font-bold tracking-widest uppercase mb-2.5", muted ? "text-gray-400" : "text-emerald-600")}>
            {children}
        </p>
    );
}

// ─── Mega Menu Content ─────────────────────────────────────────────────────────

function MegaMenuContent({ menuId }: { menuId: string }) {
    if (menuId === "more") {
        return (
            <div className="flex gap-7 items-start">
                {MORE_COLS.map((col, i) => (
                    <React.Fragment key={col.label}>
                        {i > 0 && <VSep />}
                        {col.social ? (
                            <div className="w-32.5 shrink-0">
                                <SectionLabel>{col.label}</SectionLabel>
                                <div className="grid grid-cols-3 gap-1.5">
                                    {SOCIAL_ICONS.map((s) => (
                                        <button
                                            key={s.label}
                                            title={s.label}
                                            type="button"
                                            className="w-8 h-8 rounded-md bg-gray-100 hover:bg-emerald-50 hover:text-emerald-600 flex items-center justify-center text-[11px] font-bold text-gray-600 transition-colors border border-gray-200"
                                        >
                                            {s.char}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="min-w-35">
                                <SectionLabel>{col.label}</SectionLabel>
                                <LinkList links={col.links} />
                                {col.extra && (
                                    <div className="mt-3.5">
                                        <SectionLabel>{col.extra.label}</SectionLabel>
                                        <LinkList links={col.extra.links} />
                                    </div>
                                )}
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        );
    }

    const menu = MENUS[menuId];
    if (!menu) return null;

    const wideCols = menu.cols.filter((c) => c.wide);
    const narrowCols = menu.cols.filter((c) => !c.wide);

    return (
        <div className="flex gap-7 items-start">
            {wideCols.length > 0 ? (
                <>
                    <div className="flex-1 min-w-0">
                        <SectionLabel muted>{wideCols[0].label ?? "Topics"}</SectionLabel>
                        <div className="columns-2 gap-5">
                            {wideCols.flatMap((c) => c.links).map((link) => {
                                const Icon = link.icon;
                                return (
                                    <div key={link.href} className="break-inside-avoid">
                                        <Link
                                            href={link.href}
                                            className="flex items-center gap-1.5 py-[4.5px] text-[12.5px] text-gray-600 hover:text-emerald-600 transition-colors leading-tight"
                                        >
                                            {Icon && <Icon className="h-3 w-3 text-gray-400 shrink-0" />}
                                            {link.label}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {narrowCols.map((col) => (
                        <React.Fragment key={col.label}>
                            <VSep />
                            <div className="w-44 shrink-0">
                                <SectionLabel>{col.label}</SectionLabel>
                                <LinkList links={col.links} />
                            </div>
                        </React.Fragment>
                    ))}
                </>
            ) : (
                narrowCols.map((col, i) => (
                    <React.Fragment key={col.label ?? i}>
                        {i > 0 && <VSep />}
                        <div className="flex-1">
                            {col.label && <SectionLabel muted>{col.label}</SectionLabel>}
                            <LinkList links={col.links} />
                        </div>
                    </React.Fragment>
                ))
            )}
            {menu.promo && (
                <>
                    <VSep />
                    <PromoCard promo={menu.promo} />
                </>
            )}
        </div>
    );
}

// ─── Mobile Accordion Item ─────────────────────────────────────────────────────

function MobileAccordion({ id, label }: { id: string; label: string }) {
    const [open, setOpen] = React.useState(false);

    const getAllLinks = () => {
        if (id === "more") {
            return MORE_COLS.filter((c) => !c.social).flatMap((c) => {
                const groups: { label: string; links: NavLink[] }[] = [{ label: c.label, links: c.links }];
                if (c.extra) groups.push({ label: c.extra.label, links: c.extra.links });
                return groups;
            });
        }
        const menu = MENUS[id];
        if (!menu) return [];
        return menu.cols.map((c) => ({ label: c.label ?? "", links: c.links }));
    };

    const groups = getAllLinks();

    return (
        <div>
            <button
                type="button"
                onClick={() => setOpen((p) => !p)}
                className="flex items-center justify-between w-full px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
            >
                {label}
                <ChevronDown className={cn("h-3.5 w-3.5 text-gray-400 transition-transform duration-200", open && "rotate-180")} />
            </button>

            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    open ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                {groups.map((g, gi) => (
                    <div key={gi}>
                        {g.label && (
                            <p className="text-[10px] font-bold tracking-widest uppercase text-emerald-600 px-7 pt-2.5 pb-1">
                                {g.label}
                            </p>
                        )}
                        <div className="px-7 pb-1">
                            {g.links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block py-1.5 text-[13px] text-gray-600 border-b border-gray-100 last:border-0 hover:text-emerald-600 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="h-px bg-gray-100" />
        </div>
    );
}

// ─── Main Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    const navRef = React.useRef<HTMLElement>(null);

    const isMenuOpen = openMenu !== null;

    const handleMouseEnter = (id: string) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setOpenMenu(id);
    };

    const handleMouseLeave = () => {
        closeTimer.current = setTimeout(() => setOpenMenu(null), 100);
    };

    const handleMegaMouseEnter = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
    };

    React.useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") { setOpenMenu(null); setDrawerOpen(false); }
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, []);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setDrawerOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <header
                ref={navRef}
                className="sticky top-0 z-50 w-full bg-white border-b border-gray-200"
                onMouseLeave={handleMouseLeave}
            >
                {/* ── Main bar ── */}
                <div className="flex items-center h-14 px-4 sm:px-5 lg:px-6 gap-0">

                    {/* Logo */}
                    <Link href="/" className="shrink-0 mr-4 font-bold text-[15px] tracking-tight text-gray-900">
                        The Authoritative{" "}
                        <span className="text-emerald-500">Editorial</span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-stretch h-14 flex-1 min-w-0 overflow-hidden">
                        {NAV_ITEMS.map((item) =>
                            item.href ? (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className="h-14 flex items-center px-3 text-[12.5px] font-medium text-gray-600 border-b-2 border-transparent hover:border-emerald-500 hover:text-emerald-600 hover:bg-gray-50 transition-colors whitespace-nowrap"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <button
                                    key={item.id}
                                    type="button"
                                    onMouseEnter={() => handleMouseEnter(item.id)}
                                    className={cn(
                                        "h-14 flex items-center gap-1 px-3 text-[12.5px] font-medium border-b-2 border-transparent transition-colors whitespace-nowrap",
                                        openMenu === item.id
                                            ? "text-emerald-600 border-emerald-500 bg-gray-50"
                                            : "text-gray-600 hover:text-emerald-600 hover:border-emerald-500 hover:bg-gray-50"
                                    )}
                                >
                                    {item.label}
                                    <ChevronDown
                                        className={cn(
                                            "h-2.5 w-2.5 opacity-50 transition-transform duration-200",
                                            openMenu === item.id && "rotate-180"
                                        )}
                                    />
                                </button>
                            )
                        )}
                    </nav>

                    {/* Right actions — slide away when menu open */}
                    <div
                        className={cn(
                            "hidden lg:flex items-center gap-0.5 shrink-0 overflow-hidden transition-all duration-300 ease-in-out",
                            isMenuOpen ? "max-w-0 opacity-0 pointer-events-none" : "max-w-full opacity-100"
                        )}
                    >
                        <SearchDialog />
                    </div>

                    {/* Mobile: search + hamburger */}
                    <div className="flex lg:hidden items-center gap-1 ml-auto">
                        <SearchDialog />
                        <button
                            type="button"
                            aria-label={drawerOpen ? "Close menu" : "Open menu"}
                            onClick={() => setDrawerOpen((p) => !p)}
                            className="w-9 h-9 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
                        >
                            {drawerOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                {/* ── Desktop Mega Menu ── */}
                <div
                    className={cn(
                        "hidden lg:block absolute left-0 right-0 top-14 bg-white border-b border-gray-200 overflow-hidden transition-all duration-300 ease-in-out z-40",
                        isMenuOpen ? "max-h-105 opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
                    )}
                    onMouseEnter={handleMegaMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="max-w-7xl mx-auto px-6 py-5 pb-7">
                        {openMenu && <MegaMenuContent menuId={openMenu} />}
                    </div>
                </div>
            </header>

            {/* ── Mobile Drawer ── */}
            <div
                className={cn(
                    "lg:hidden sticky top-14 z-40 w-full bg-white border-b border-gray-200 overflow-hidden transition-all duration-300 ease-in-out",
                    drawerOpen ? "max-h-[85vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
                )}
            >
                <div className="py-2 pb-5">
                    {NAV_ITEMS.map((item) =>
                        item.href ? (
                            <div key={item.id}>
                                <Link href={item.href} className="flex items-center px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-emerald-600 transition-colors">
                                    {item.label}
                                </Link>
                                <div className="h-px bg-gray-100" />
                            </div>
                        ) : (
                            <MobileAccordion key={item.id} id={item.id} label={item.label} />
                        )
                    )}
                    {/* Mobile actions */}
                    <div className="flex items-center gap-3 px-5 pt-3">
                        <button type="button" className="flex items-center gap-1.5 text-[12.5px] text-gray-600 hover:text-emerald-600 transition-colors">
                            <Mail className="h-3.5 w-3.5" /> Newsletter
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}