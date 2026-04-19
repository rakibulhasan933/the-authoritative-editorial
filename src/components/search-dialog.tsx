'use client';

import { useState, useEffect } from 'react';
import { Search, X, TrendingUp, BookOpen, Video, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchCategory {
    id: string;
    name: string;
    icon: React.ReactNode;
    description: string;
}

const searchCategories: SearchCategory[] = [
    {
        id: 'insights',
        name: 'Insights',
        icon: <TrendingUp size={18} />,
        description: 'Featured articles and analysis'
    },
    {
        id: 'library',
        name: 'Library',
        icon: <BookOpen size={18} />,
        description: 'Resource collection'
    },
    {
        id: 'webinars',
        name: 'Webinars',
        icon: <Video size={18} />,
        description: 'Educational events'
    },
    {
        id: 'case-studies',
        name: 'Case Studies',
        icon: <FileText size={18} />,
        description: 'Real-world examples'
    }
];

const trendingSearches = [
    'Core Web Vitals',
    'Next.js SEO',
    'Schema.org Markup',
    'Content Strategy',
    'Performance Optimization'
];

const recentSearches = [
    'Technical SEO',
    'JavaScript Framework'
];

export function SearchDialog() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(!isOpen);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return (
        <>
            {/* Search Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="hidden md:flex items-center gap-1 px-1 py-1 rounded-lg border border-border bg-muted/40 hover:bg-muted transition-colors cursor-pointer group"
            >
                <Search size={18} className="text-muted-foreground group-hover:text-foreground" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground">Search...</span>
                <kbd className="ml-auto text-xs text-muted-foreground bg-background rounded px-1 py-1">
                    ⌘K
                </kbd>
            </button>

            {/* Mobile Search Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
                <Search size={20} />
            </button>

            {/* Search Dialog Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                    style={{ animation: 'fadeIn 0.2s ease-out' }}
                />
            )}

            {/* Search Dialog Content */}
            {isOpen && (
                <div
                    className="fixed top-0 left-0 right-0 z-50 flex items-start justify-center pt-20 px-4 pointer-events-none"
                    style={{ animation: 'slideDown 0.3s ease-out' }}
                >
                    <div
                        className="w-full max-w-2xl bg-background border border-border rounded-xl shadow-2xl pointer-events-auto overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Search Input */}
                        <div className="border-b border-border p-6">
                            <div className="flex items-center gap-2">
                                <div className="relative flex-1">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                                    <Input
                                        type="text"
                                        placeholder="Search insights, webinars, case studies..."
                                        value={searchQuery}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                                        autoFocus
                                        className="pl-12 pr-12 py-3 text-base bg-transparent border-0 focus:outline-none focus:ring-0 placeholder:text-muted-foreground"
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery('')}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded transition-colors"
                                        >
                                            <X size={18} className="text-muted-foreground hover:text-foreground" />
                                        </button>
                                    )}
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                                    title="Close (Esc)"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Search Content */}
                        <div className="max-h-[60vh] overflow-y-auto">
                            {!searchQuery ? (
                                <>
                                    {/* Search Categories */}
                                    <div className="p-6 border-b border-border">
                                        <h3 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-4">
                                            Browse by Category
                                        </h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            {searchCategories.map((category) => (
                                                <button
                                                    key={category.id}
                                                    onClick={() => {
                                                        setActiveCategory(category.id);
                                                        setSearchQuery(category.name);
                                                    }}
                                                    className={`p-3 rounded-lg border transition-all text-left group ${activeCategory === category.id
                                                        ? 'border-accent bg-accent/10'
                                                        : 'border-border hover:border-accent/50 hover:bg-muted/50'
                                                        }`}
                                                >
                                                    <div className={`flex items-center gap-3 ${activeCategory === category.id ? 'text-accent' : 'text-foreground'
                                                        }`}>
                                                        {category.icon}
                                                        <div className="flex-1">
                                                            <p className="font-semibold text-sm">{category.name}</p>
                                                            <p className="text-xs text-muted-foreground group-hover:text-foreground/60">
                                                                {category.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Trending Searches */}
                                    <div className="p-6 border-b border-border">
                                        <h3 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-4">
                                            Trending Now
                                        </h3>
                                        <div className="space-y-2">
                                            {trendingSearches.map((search) => (
                                                <button
                                                    key={search}
                                                    onClick={() => setSearchQuery(search)}
                                                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted transition-colors text-foreground text-sm flex items-center gap-2"
                                                >
                                                    <TrendingUp size={16} className="text-accent flex-shrink-0" />
                                                    {search}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Recent Searches */}
                                    {recentSearches.length > 0 && (
                                        <div className="p-6">
                                            <h3 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-4">
                                                Recent
                                            </h3>
                                            <div className="space-y-2">
                                                {recentSearches.map((search) => (
                                                    <button
                                                        key={search}
                                                        onClick={() => setSearchQuery(search)}
                                                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted transition-colors text-foreground text-sm flex items-center gap-2"
                                                    >
                                                        <Search size={16} className="text-muted-foreground shrink-0" />
                                                        {search}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                /* Search Results */
                                <div className="p-6">
                                    <p className="text-sm text-muted-foreground">
                                        Showing results for <span className="font-semibold text-foreground">&quot;{searchQuery}&quot;</span>
                                    </p>
                                    <div className="mt-4 space-y-3">
                                        {['Article 1: ' + searchQuery, 'Article 2: ' + searchQuery, 'Guide: ' + searchQuery].map(
                                            (result, idx) => (
                                                <div
                                                    key={idx}
                                                    className="p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer border border-transparent hover:border-border"
                                                >
                                                    <p className="font-medium text-foreground">{result}</p>
                                                    <p className="text-xs text-muted-foreground mt-1">Related content • 5 min read</p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer Help Text */}
                        <div className="border-t border-border px-6 py-4 bg-muted/30 flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-4">
                                <span>↑↓ to navigate</span>
                                <span>Enter to select</span>
                                <span>Esc to close</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
