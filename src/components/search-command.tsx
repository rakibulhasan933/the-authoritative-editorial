'use client';

import { useEffect, useState } from 'react';
import { Command } from '@/components/ui/command';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Search } from 'lucide-react';

const searchItems = [
    { id: 1, title: 'The Core Web Vitals Paradigm Shift', category: 'Featured', type: 'article' },
    { id: 2, title: 'Beyond the Keyword: Mapping Semantic Entities', category: 'Content Strategy', type: 'article' },
    { id: 3, title: 'The Anatomy of a High-Converting Informational Query Page', category: 'On-Page', type: 'article' },
    { id: 4, title: 'Migrating to Next.js: The Pre-rendering Checklist for SEO', category: 'Architecture', type: 'brief' },
    { id: 5, title: 'Advanced Schema.org Nesting: Building Relationships', category: 'Markup', type: 'brief' },
    { id: 6, title: 'Why SEO\'s Dead and Search Experience is the Future', category: 'Expert Column', type: 'column' },
    { id: 7, title: 'Deconstructing the Latest Helpful Content Update Signals', category: 'Algorithm Watch', type: 'column' },
];

export function SearchCommand() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const filteredItems = searchItems.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background text-muted-foreground hover:border-accent/30 hover:text-foreground transition-colors text-sm"
            >
                <Search size={16} />
                <span>Search articles...</span>
                <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>

            <button
                onClick={() => setOpen(true)}
                className="sm:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
                <Search size={20} />
            </button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="overflow-hidden p-0 shadow-lg">
                    <Command className="[&_[cmdk-input-wrapper]_svg]:hidden [&_[cmdk-input]]:pl-8">
                        <div className="flex items-center border-b border-border px-4 py-3">
                            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                            <input
                                placeholder="Search articles, categories, authors..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                            />
                        </div>
                        <div className="max-h-[300px] overflow-y-auto p-4 space-y-2">
                            {filteredItems.length === 0 ? (
                                <div className="px-2 py-6 text-center text-sm text-muted-foreground">
                                    No articles found.
                                </div>
                            ) : (
                                filteredItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setOpen(false)}
                                        className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors"
                                    >
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="flex-1">
                                                <p className="font-medium text-foreground text-sm line-clamp-2">
                                                    {item.title}
                                                </p>
                                                <p className="text-xs text-accent mt-1">
                                                    {item.category}
                                                </p>
                                            </div>
                                            <span className="text-xs text-muted-foreground whitespace-nowrap mt-1">
                                                {item.type === 'article' && 'Article'}
                                                {item.type === 'brief' && 'Brief'}
                                                {item.type === 'column' && 'Column'}
                                            </span>
                                        </div>
                                    </button>
                                ))
                            )}
                        </div>
                    </Command>
                </DialogContent>
            </Dialog>
        </>
    );
}
