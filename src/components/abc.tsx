'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { SearchDialog } from '@/components/search-dialog';

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-12">
                            <h1 className="text-xl font-serif font-bold text-foreground tracking-tight whitespace-nowrap">
                                The Authoritative Editorial
                            </h1>
                            <nav className="hidden md:flex items-center gap-1">
                                <a href="#" className="text-sm font-medium text-foreground/80 hover:text-accent px-3 py-2 rounded-md transition-colors">Insights</a>
                                <a href="#" className="text-sm font-medium text-foreground/80 hover:text-accent px-3 py-2 rounded-md transition-colors">Webinars</a>
                                <a href="#" className="text-sm font-medium text-foreground/80 hover:text-accent px-3 py-2 rounded-md transition-colors">Library</a>
                                <a href="#" className="text-sm font-medium text-foreground/80 hover:text-accent px-3 py-2 rounded-md transition-colors">Case Studies</a>
                            </nav>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button className="hidden md:inline-flex bg-foreground text-background hover:bg-foreground/90 text-sm font-medium">
                                Subscribe
                            </Button>
                            <button className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors">
                                <Menu size={20} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center">
                            <span className="text-xs uppercase tracking-widest text-accent font-bold bg-accent/10 px-3 py-1.5 rounded-full">
                                Featured Insight
                            </span>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-foreground">
                                The Core Web Vitals Paradigm Shift
                            </h2>
                            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-lg">
                                A deep dive into the discrepancy between synthetic lab data and real-world field metrics, and why your current optimization strategy might be actively harming your ranking.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 pt-6 border-t border-border">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop"
                                alt="Dr. Elias Vance"
                                className="w-12 h-12 rounded-full object-cover border border-border"
                            />
                            <div>
                                <p className="font-semibold text-foreground text-sm">Dr. Elias Vance</p>
                                <p className="text-xs text-muted-foreground">Head of Technical SEO • 12 min read</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-br from-accent via-accent/80 to-accent/40 rounded-2xl aspect-square flex items-center justify-center overflow-hidden shadow-2xl border border-accent/20">
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent opacity-50"></div>
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="text-white/80 text-center">
                                    <p className="text-sm font-medium opacity-75">Featured Content</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Actionable Strategies Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Actionable Strategies</h3>
                    <a href="#" className="text-accent font-medium hover:text-accent/80 transition-colors flex items-center gap-2 text-sm">
                        View All <span className="text-base">→</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            category: 'Content Strategy',
                            title: 'Beyond the Keyword: Mapping Semantic Entities for Topical Authority',
                            description: 'Stop chasing single volume metrics. Learn how to structure your content architecture around entity graphs to build unshakeable topical relevance.',
                            date: 'Oct 12',
                            read: '8 min read'
                        },
                        {
                            category: 'On-Page',
                            title: 'The Anatomy of a High-Converting Informational Query Page',
                            description: 'Analyzing 500 top-ranking "How-To" guides to discover the exact formatting, rich snippet deployment, and UX patterns that win featured snippets.',
                            date: 'Oct 08',
                            read: '6 min read'
                        }
                    ].map((item, idx) => (
                        <Card key={idx} className="group p-8 border border-border rounded-xl hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm">
                            <div className="space-y-4">
                                <span className="inline-block text-xs uppercase tracking-widest text-accent font-bold bg-accent/10 px-2.5 py-1 rounded-full">{item.category}</span>
                                <h4 className="text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors">{item.title}</h4>
                                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
                                    <span>{item.date}</span>
                                    <span>•</span>
                                    <span>{item.read}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Two Column Layout */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Expert Columns */}
                <div className="lg:col-span-2">
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-10">Technical Briefs</h3>
                    <div className="space-y-8">
                        {[
                            {
                                title: 'Migrating to Next.js: The Pre-rendering Checklist for SEO',
                                category: 'Architecture',
                                date: 'Oct 01',
                                description: 'Client-side rendering pitfalls continue to plague enterprise migrations. Here is the definitive checklist for ensuring your JS framework doesn&apos;t tank your crawl budget.'
                            },
                            {
                                title: 'Advanced Schema.org Nesting: Building Relationships',
                                category: 'Markup',
                                date: 'Sep 28',
                                description: 'Don&apos;t just add LocalBusiness markup. Learn how to nest Review, Offer, and Organization schemas to provide search engines with a comprehensive data entity.'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group pb-8 border-b border-border last:border-b-0 hover:pl-4 transition-all duration-300 cursor-pointer">
                                <div className="space-y-3">
                                    <span className="inline-block text-xs uppercase tracking-widest text-accent font-bold bg-accent/10 px-2.5 py-1 rounded-full">{item.category}</span>
                                    <h4 className="text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors">{item.title}</h4>
                                    <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-10">
                    {/* Expert Columns Widget */}
                    <div>
                        <h4 className="text-2xl font-serif font-bold text-foreground mb-6">Expert Columns</h4>
                        <div className="space-y-4">
                            {[
                                {
                                    name: 'Sarah Jenkins',
                                    title: 'Why SEO&apos;s Dead and Search Experience is the Future',
                                    label: 'The E-Suite View'
                                },
                                {
                                    name: 'Marcus Chen',
                                    title: 'Deconstructing the Latest Helpful Content Update Signals',
                                    label: 'Algorithm Watch'
                                }
                            ].map((expert, idx) => (
                                <div key={idx} className="group p-4 rounded-lg bg-muted/40 border border-border hover:border-accent/40 hover:bg-muted/60 transition-all duration-300 cursor-pointer">
                                    <p className="text-xs uppercase tracking-widest text-accent font-bold mb-2">{expert.label}</p>
                                    <p className="text-sm font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">{expert.title}</p>
                                    <p className="text-xs text-muted-foreground">{expert.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <Card className="p-6 border border-border rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 hover:border-accent/30 transition-all duration-300">
                        <h5 className="text-lg font-serif font-bold text-foreground mb-2">The Briefing</h5>
                        <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Stay informed</p>
                        <p className="text-sm text-foreground/70 mb-5 leading-relaxed">
                            Join 15,000+ professionals receiving our weekly analysis of search trends.
                        </p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your work email"
                                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                            />
                            <Button className="w-full bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium">
                                Subscribe Now
                            </Button>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border bg-background/95 backdrop-blur-sm mt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <h6 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Company</h6>
                            <ul className="space-y-2.5 text-sm">
                                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">About</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Resources</h6>
                            <ul className="space-y-2.5 text-sm">
                                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Editorial Guidelines</a></li>
                                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">RSS Feed</a></li>
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-2">
                            <h6 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Newsletter</h6>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                />
                                <Button className="bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                        <p>© 2024 The Authoritative Editorial. All rights reserved.</p>
                        <div className="flex items-center gap-6 text-xs">
                            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
                            <a href="#" className="hover:text-accent transition-colors">Terms</a>
                            <a href="#" className="hover:text-accent transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
