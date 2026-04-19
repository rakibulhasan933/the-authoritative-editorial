import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {

    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4 lg:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-block">
                            <span className="text-xs text-emerald-500 uppercase tracking-widest  font-semibold">Featured Insight</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-foreground">
                            The Core Web Vitals Paradigm Shift
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            A deep dive into the discrepancy between synthetic lab data and real-world field metrics, and why your current optimization strategy might be actively harming your ranking.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop"
                                alt="Dr. Elias Vance"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-foreground">Dr. Elias Vance</p>
                                <p className="text-sm text-muted-foreground">Head of Technical SEO • 12 min read</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-accent to-accent/60 rounded-2xl aspect-square flex items-center justify-center overflow-hidden shadow-lg">
                        <div className="w-full h-full bg-accent/40"></div>
                    </div>
                </div>
            </section>

            {/* Actionable Strategies Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center justify-between mb-12">
                    <h3 className="text-4xl font-serif font-bold text-foreground">Actionable Strategies</h3>
                    <a href="#" className="text-emerald-500 font-medium hover:underline flex items-center gap-2">
                        View All →
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
                        <Card key={idx} className="p-8 border border-border hover:shadow-lg hover:border-accent/30 transition-all">
                            <div className="space-y-4">
                                <span className="text-xs uppercase tracking-widest text-emerald-500 font-semibold">{item.category}</span>
                                <h4 className="text-2xl font-serif font-bold text-foreground">{item.title}</h4>
                                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Expert Columns */}
                <div className="lg:col-span-2">
                    <h3 className="text-3xl font-serif font-bold text-foreground mb-8">Technical Briefs</h3>
                    <div className="space-y-8">
                        {[
                            {
                                title: 'Migrating to Next.js: The Pre-rendering Checklist for SEO',
                                category: 'Architecture',
                                date: 'Oct 01',
                                description: 'Client-side rendering pitfalls continue to plague enterprise migrations. Here is the definitive checklist for ensuring your JS framework doesn\'t tank your crawl budget.'
                            },
                            {
                                title: 'Advanced Schema.org Nesting: Building Relationships',
                                category: 'Markup',
                                date: 'Sep 28',
                                description: 'Don\'t just add LocalBusiness markup. Learn how to nest Review, Offer, and Organization schemas to provide search engines with a comprehensive data entity.'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="pb-8 border-b border-border last:border-b-0">
                                <div className="space-y-3">
                                    <span className="text-xs uppercase tracking-widest text-emerald-500 font-semibold">{item.category}</span>
                                    <h4 className="text-2xl font-serif font-bold text-foreground">{item.title}</h4>
                                    <p className="text-foreground/70">{item.description}</p>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    {/* Expert Columns Widget */}
                    <div>
                        <h4 className="text-2xl font-serif font-bold text-foreground mb-6">Expert Columns</h4>
                        <div className="space-y-6">
                            {[
                                {
                                    name: 'Sarah Jenkins',
                                    title: 'Why SEO\'s Dead and Search Experience is the Future',
                                    label: 'The E-Suite View'
                                },
                                {
                                    name: 'Marcus Chen',
                                    title: 'Deconstructing the Latest Helpful Content Update Signals',
                                    label: 'Algorithm Watch'
                                }
                            ].map((expert, idx) => (
                                <div key={idx} className="p-4 rounded-lg bg-muted/30 border border-border hover:border-accent/30 transition-colors cursor-pointer">
                                    <p className="text-xs uppercase tracking-widest text-emerald-500 font-semibold mb-2">{expert.label}</p>
                                    <p className="text-sm font-semibold text-foreground mb-1">{expert.title}</p>
                                    <p className="text-xs text-muted-foreground">{expert.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <Card className="p-6 border border-accent/20 bg-accent/5">
                        <h5 className="text-lg font-serif font-bold text-foreground mb-3">The Briefing</h5>
                        <p className="text-sm text-foreground/70 mb-4">
                            Join 15,000+ professionals receiving our weekly analysis of search trends.
                        </p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your work email"
                                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                            <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                                Subscribe Now
                            </Button>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
}
