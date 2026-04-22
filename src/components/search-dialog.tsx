"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { BookOpen, FileText, LoaderCircle, Search, TrendingUp, Video, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchCategory {
    id: string;
    name: string;
    slug: string;
    description: string;
}

interface SearchResultItem {
    id: string;
    type: "blog" | "webinar";
    title: string;
    description: string;
    href: string;
    category: string;
    publishedAt: string;
    meta: string;
}

interface SearchResponse {
    query: string;
    categoryId: string | null;
    categories: SearchCategory[];
    results: {
        posts: SearchResultItem[];
        webinars: SearchResultItem[];
        total: number;
    };
}

type CategoryPresentation = {
    id: string;
    name: string;
    description: string;
    icon: ReactNode;
};

const fallbackRecentSearches = ["Technical SEO", "JavaScript Framework"];

function getCategoryIcon(index: number) {
    const icons = [
        <TrendingUp key="trending" size={18} />,
        <BookOpen key="library" size={18} />,
        <Video key="webinars" size={18} />,
        <FileText key="articles" size={18} />,
    ];

    return icons[index % icons.length];
}

function formatDisplayDate(value: string) {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return value;

    return parsed.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

function readRecentSearches() {
    if (typeof window === "undefined") return fallbackRecentSearches;

    try {
        const stored = window.localStorage.getItem("seo-dashboard-recent-searches");
        if (!stored) return fallbackRecentSearches;

        const parsed = JSON.parse(stored);
        if (!Array.isArray(parsed)) return fallbackRecentSearches;

        const normalized = parsed
            .filter((item): item is string => typeof item === "string" && item.trim().length > 0)
            .slice(0, 5);

        return normalized.length ? normalized : fallbackRecentSearches;
    } catch {
        return fallbackRecentSearches;
    }
}

function writeRecentSearches(value: string) {
    if (typeof window === "undefined") return;

    const normalized = value.trim();
    if (!normalized) return;

    const next = [normalized, ...readRecentSearches().filter((item) => item !== normalized)].slice(0, 5);
    window.localStorage.setItem("seo-dashboard-recent-searches", JSON.stringify(next));
}

export function SearchDialog() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [categories, setCategories] = useState<SearchCategory[]>([]);
    const [posts, setPosts] = useState<SearchResultItem[]>([]);
    const [webinars, setWebinars] = useState<SearchResultItem[]>([]);
    const [recentSearches, setRecentSearches] = useState<string[]>(fallbackRecentSearches);
    const [isLoading, setIsLoading] = useState(false);

    const openSearch = () => {
        setRecentSearches(readRecentSearches());
        setIsOpen(true);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
                event.preventDefault();
                setIsOpen((current) => !current);
            }

            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const controller = new AbortController();
        const timeoutId = window.setTimeout(async () => {
            setIsLoading(true);

            try {
                const searchParams = new URLSearchParams();
                if (searchQuery.trim()) {
                    searchParams.set("q", searchQuery.trim());
                }

                if (activeCategory) {
                    searchParams.set("category", activeCategory);
                }

                const response = await fetch(`/api/search?${searchParams.toString()}`, {
                    signal: controller.signal,
                });
                console.log({ response });
                if (!response.ok) {
                    throw new Error("Search request failed.");
                }

                const payload = (await response.json()) as SearchResponse;
                setCategories(payload.categories);
                setPosts(payload.results.posts);
                setWebinars(payload.results.webinars);
            } catch (error) {
                if ((error as Error).name !== "AbortError") {
                    setCategories([]);
                    setPosts([]);
                    setWebinars([]);
                }
            } finally {
                setIsLoading(false);
            }
        }, searchQuery.trim() ? 250 : 0);

        return () => {
            controller.abort();
            window.clearTimeout(timeoutId);
        };
    }, [activeCategory, isOpen, searchQuery]);

    const categoryCards: CategoryPresentation[] = categories.map((category, index) => ({
        id: category.id,
        name: category.name,
        description: category.description,
        icon: getCategoryIcon(index),
    }));

    const hasQuery = searchQuery.trim().length > 0;
    const hasResults = posts.length > 0 || webinars.length > 0;

    const handleSearchSelection = (value: string) => {
        setSearchQuery(value);
        writeRecentSearches(value);
        setRecentSearches(readRecentSearches());
    };

    const handleResultSelection = () => {
        if (searchQuery.trim()) {
            writeRecentSearches(searchQuery);
            setRecentSearches(readRecentSearches());
        }
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={openSearch}
                className="hidden md:flex items-center gap-1 px-3 py-2 rounded-lg border border-border bg-muted/40 hover:bg-muted transition-colors cursor-pointer group min-w-56"
            >
                <Search size={18} className="text-muted-foreground group-hover:text-foreground" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground">Search...</span>
                <kbd className="ml-auto text-xs text-muted-foreground bg-background rounded px-2 py-1">
                    ⌘K
                </kbd>
            </button>

            <button
                onClick={openSearch}
                className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                aria-label="Open search"
            >
                <Search size={20} />
            </button>

            {isOpen ? (
                <>
                    <div
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setIsOpen(false)}
                        style={{ animation: "fadeIn 0.2s ease-out" }}
                    />

                    <div
                        className="fixed top-0 left-0 right-0 z-50 flex items-start justify-center pt-20 px-4 pointer-events-none"
                        style={{ animation: "slideDown 0.3s ease-out" }}
                    >
                        <div
                            className="w-full max-w-2xl bg-background border border-border rounded-xl shadow-2xl pointer-events-auto overflow-hidden"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="border-b border-border p-6">
                                <div className="flex items-center gap-2">
                                    <div className="relative flex-1">
                                        <Search
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                                            size={20}
                                        />
                                        <Input
                                            type="text"
                                            placeholder="Search blogs, webinars, and categories..."
                                            value={searchQuery}
                                            onChange={(event) => setSearchQuery(event.target.value)}
                                            autoFocus
                                            className="pl-12 pr-12 py-3 text-base bg-transparent border-0 focus:outline-none focus:ring-0 placeholder:text-muted-foreground"
                                        />
                                        {searchQuery ? (
                                            <button
                                                onClick={() => setSearchQuery("")}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded transition-colors"
                                                aria-label="Clear search"
                                            >
                                                <X size={18} className="text-muted-foreground hover:text-foreground" />
                                            </button>
                                        ) : null}
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                                        title="Close (Esc)"
                                        aria-label="Close search"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="max-h-[60vh] overflow-y-auto">
                                {!hasQuery ? (
                                    <>
                                        <div className="p-6 border-b border-border">
                                            <div className="flex items-center justify-between gap-4 mb-4">
                                                <h3 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                                                    Browse by Category
                                                </h3>
                                                {isLoading ? (
                                                    <LoaderCircle size={16} className="animate-spin text-muted-foreground" />
                                                ) : null}
                                            </div>

                                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                                {categoryCards.map((category) => {
                                                    const isActive = activeCategory === category.id;

                                                    return (
                                                        <button
                                                            key={category.id}
                                                            onClick={() =>
                                                                setActiveCategory((current) => (current === category.id ? null : category.id))
                                                            }
                                                            className={`p-3 rounded-lg border transition-all text-left group ${isActive
                                                                ? "border-accent bg-accent/10"
                                                                : "border-border hover:border-accent/50 hover:bg-muted/50"
                                                                }`}
                                                        >
                                                            <div
                                                                className={`flex items-center gap-3 ${isActive ? "text-accent" : "text-foreground"}`}
                                                            >
                                                                {category.icon}
                                                                <div className="flex-1">
                                                                    <p className="font-semibold text-sm">{category.name}</p>
                                                                    <p className="text-xs text-muted-foreground group-hover:text-foreground/60">
                                                                        {category.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div className="p-6 border-b border-border">
                                            <h3 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-4">
                                                Latest Articles
                                            </h3>
                                            <div className="space-y-2">
                                                {posts.length ? (
                                                    posts.slice(0, 4).map((post) => (
                                                        <Link
                                                            key={post.id}
                                                            href={post.href}
                                                            onClick={handleResultSelection}
                                                            className="w-full text-left px-3 py-3 rounded-lg hover:bg-muted transition-colors text-foreground text-sm flex items-start gap-3 border border-transparent hover:border-border"
                                                        >
                                                            <TrendingUp size={16} className="text-accent shrink-0 mt-0.5" />
                                                            <div>
                                                                <p className="font-medium">{post.title}</p>
                                                                <p className="text-xs text-muted-foreground mt-1">
                                                                    {post.category} | {post.meta}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    ))
                                                ) : (
                                                    <p className="text-sm text-muted-foreground">No blog posts available yet.</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="p-6 border-b border-border">
                                            <h3 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-4">
                                                Upcoming Webinars
                                            </h3>
                                            <div className="space-y-2">
                                                {webinars.length ? (
                                                    webinars.slice(0, 4).map((webinar) => (
                                                        <Link
                                                            key={webinar.id}
                                                            href={webinar.href}
                                                            onClick={handleResultSelection}
                                                            className="w-full text-left px-3 py-3 rounded-lg hover:bg-muted transition-colors text-foreground text-sm flex items-start gap-3 border border-transparent hover:border-border"
                                                        >
                                                            <Video size={16} className="text-accent shrink-0 mt-0.5" />
                                                            <div>
                                                                <p className="font-medium">{webinar.title}</p>
                                                                <p className="text-xs text-muted-foreground mt-1">
                                                                    {webinar.category} | {webinar.meta}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    ))
                                                ) : (
                                                    <p className="text-sm text-muted-foreground">No webinars available yet.</p>
                                                )}
                                            </div>
                                        </div>

                                        {recentSearches.length ? (
                                            <div className="p-6">
                                                <h3 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-4">
                                                    Recent
                                                </h3>
                                                <div className="space-y-2">
                                                    {recentSearches.map((search) => (
                                                        <button
                                                            key={search}
                                                            onClick={() => handleSearchSelection(search)}
                                                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted transition-colors text-foreground text-sm flex items-center gap-2"
                                                        >
                                                            <Search size={16} className="text-muted-foreground shrink-0" />
                                                            {search}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}
                                    </>
                                ) : (
                                    <div className="p-6">
                                        <div className="flex items-center justify-between gap-4">
                                            <p className="text-sm text-muted-foreground">
                                                Showing results for{" "}
                                                <span className="font-semibold text-foreground">&quot;{searchQuery}&quot;</span>
                                            </p>
                                            {isLoading ? (
                                                <LoaderCircle size={16} className="animate-spin text-muted-foreground" />
                                            ) : null}
                                        </div>

                                        {activeCategory ? (
                                            <p className="text-xs text-muted-foreground mt-2">Filtered by selected category.</p>
                                        ) : null}

                                        {hasResults ? (
                                            <div className="mt-5 space-y-6">
                                                {posts.length ? (
                                                    <section>
                                                        <h4 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3">
                                                            Blog Posts
                                                        </h4>
                                                        <div className="space-y-3">
                                                            {posts.map((result) => (
                                                                <Link
                                                                    key={result.id}
                                                                    href={result.href}
                                                                    onClick={handleResultSelection}
                                                                    className="block p-4 rounded-lg hover:bg-muted transition-colors cursor-pointer border border-transparent hover:border-border"
                                                                >
                                                                    <div className="flex items-start gap-3">
                                                                        <BookOpen size={18} className="text-accent shrink-0 mt-0.5" />
                                                                        <div className="min-w-0">
                                                                            <p className="font-medium text-foreground">{result.title}</p>
                                                                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                                                                {result.description}
                                                                            </p>
                                                                            <p className="text-xs text-muted-foreground mt-2">
                                                                                {result.category} | {formatDisplayDate(result.publishedAt)} | {result.meta}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </section>
                                                ) : null}

                                                {webinars.length ? (
                                                    <section>
                                                        <h4 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3">
                                                            Webinars
                                                        </h4>
                                                        <div className="space-y-3">
                                                            {webinars.map((result) => (
                                                                <Link
                                                                    key={result.id}
                                                                    href={result.href}
                                                                    onClick={handleResultSelection}
                                                                    className="block p-4 rounded-lg hover:bg-muted transition-colors cursor-pointer border border-transparent hover:border-border"
                                                                >
                                                                    <div className="flex items-start gap-3">
                                                                        <Video size={18} className="text-accent shrink-0 mt-0.5" />
                                                                        <div className="min-w-0">
                                                                            <p className="font-medium text-foreground">{result.title}</p>
                                                                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                                                                {result.description}
                                                                            </p>
                                                                            <p className="text-xs text-muted-foreground mt-2">
                                                                                {result.category} | {formatDisplayDate(result.publishedAt)} | {result.meta}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </section>
                                                ) : null}
                                            </div>
                                        ) : (
                                            <div className="mt-6 rounded-lg border border-dashed border-border p-6 text-center">
                                                <p className="font-medium text-foreground">No matching content found.</p>
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    Try a different keyword or switch the selected category filter.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="border-t border-border px-6 py-4 bg-muted/30 flex items-center justify-between gap-4 text-xs text-muted-foreground">
                                <span>Search across blogs, webinars, and categories.</span>
                                <div className="flex items-center gap-4">
                                    <span>Ctrl K to open</span>
                                    <span>Esc to close</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}

            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
        </>
    );
}
