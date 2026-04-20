import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4 lg:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-block">
                            <span className="text-xs text-primary uppercase tracking-widest font-semibold">Featured Insight</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl  font-bold leading-tight text-foreground">
                            The Core Web Vitals Paradigm Shift
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            A deep dive into the discrepancy between synthetic lab data and real-world field metrics, and why your current optimization strategy might be actively harming your ranking.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <Image
                                width={48}
                                height={48}
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
                    <div className="bg-linear-to-br from-accent to-accent/60 rounded-2xl aspect-square flex items-center justify-center overflow-hidden shadow-lg">
                        <div className="w-full h-full bg-accent/40"></div>
                    </div>
                </div>
            </section>

            {/* Actionable Strategies Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center justify-between mb-12">
                    <h3 className="text-4xl  font-bold text-foreground">Actionable Strategies</h3>
                    <Link href="#" className="text-primary font-medium hover:underline flex items-center gap-2">
                        View All
                    </Link>
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
                                <span className="text-xs uppercase tracking-widest text-primary font-semibold">{item.category}</span>
                                <h4 className="text-2xl  font-bold text-foreground">{item.title}</h4>
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
            {/* Featured Webinars Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center justify-between mb-12">
                    <h3 className="text-4xl  font-bold text-foreground">Live & On-Demand Webinars</h3>
                    <Link href="/webinars" className="text-primary font-medium hover:underline flex items-center gap-2">
                        View All
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            id: 1,
                            title: 'Deconstructing Google\'s Helpful Content Ecosystem',
                            description: 'A rigorous analysis of recent patent updates and algorithm shifts targeting information gain and topical authority.',
                            date: 'Oct 24, 2024',
                            time: '10:00 AM EST',
                            duration: '60 min',
                            attendees: 847,
                            category: 'Technical SEO',
                            speaker: { name: 'Dr. Elias Vance', title: 'Head Data Scientist' },
                            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'
                        },
                        {
                            id: 2,
                            title: 'The Entity Graph: Beyond Keyword Targeting',
                            description: 'Learn how to map editorial strategy to Google\'s Knowledge Graph, establishing your brand as a definitive entity.',
                            date: 'Nov 02, 2024',
                            time: '2:00 PM EST',
                            duration: '45 min',
                            attendees: 623,
                            category: 'Content Strategy',
                            speaker: { name: 'Marcus Vance', title: 'Principal Strategist' },
                            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'
                        },
                        {
                            id: 3,
                            title: 'Core Web Vitals in 2024: The Lab vs. Field Data Paradox',
                            description: 'Understanding the divergence between synthetic metrics and real-world performance, and why your current optimization might be incorrect.',
                            date: 'Nov 15, 2024',
                            time: '1:00 PM EST',
                            duration: '50 min',
                            attendees: 521,
                            category: 'AI & Search',
                            speaker: { name: 'Sarah Jenkins', title: 'Technical Lead' },
                            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'
                        }
                    ].map((webinar) => (
                        <Card key={webinar.id} className="overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                            {/* Image */}
                            <div className="relative h-40 overflow-hidden bg-linear-to-br from-muted to-secondary">
                                <Image
                                    src={webinar.image}
                                    alt={webinar.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-3 right-3">
                                    <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                                        {webinar.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h4 className=" text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                    {webinar.title}
                                </h4>
                                <p className="text-sm text-foreground/70 mb-3 line-clamp-2 leading-relaxed">
                                    {webinar.description}
                                </p>

                                {/* Date & Time */}
                                <div className="space-y-1 mb-3 pt-3 border-t border-border text-xs text-foreground/60">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{webinar.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>{webinar.time} • {webinar.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-3.5 h-3.5" />
                                        <span>{webinar.attendees.toLocaleString()} registered</span>
                                    </div>
                                </div>

                                {/* Speaker */}
                                <div className="flex items-center gap-2 pt-3 border-t border-border mb-4">
                                    <Image
                                        width={48}
                                        height={48}
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop"
                                        alt={webinar.speaker.name}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-xs text-foreground truncate">
                                            {webinar.speaker.name}
                                        </p>
                                        <p className="text-xs text-foreground/60 truncate">
                                            {webinar.speaker.title}
                                        </p>
                                    </div>
                                </div>

                                {/* Register Button */}
                                <Link href="/webinars">
                                    <Button className="w-full group/btn bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm transition-colors">
                                        Secure Seat
                                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Two Column Layout */}
            <section className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 py-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Expert Columns */}
                <div className="lg:col-span-2">
                    <Link href="/briefs" className="text-emerald-500 font-medium hover:underline flex items-center gap-2 mb-1">
                        <h3 className="text-3xl  font-bold text-foreground mb-3">Technical Briefs</h3>
                    </Link>
                    <div className="space-y-2">
                        {[
                            {
                                title: 'Migrating to Next.js: The Pre-rendering Checklist for SEO',
                                category: 'Architecture',
                                date: 'Oct 01',
                                description: 'Client-side rendering pitfalls continue to plague enterprise migrations. Here is the definitive checklist for ensuring your JS framework doesn\'t tank your crawl budget.'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="pb-2 border-b border-border last:border-b-0">
                                <div className="space-y-3">
                                    <Link href={item.category} className='group'>
                                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">{item.category}</span>
                                        <h4 className="text-2xl font-bold group-hover:text-primary text-foreground transition-colors">{item.title}</h4>
                                        <p className="text-foreground/70">{item.description}</p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                            <span>{item.date}</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-4">
                    {/* Expert Columns Widget */}
                    <div>
                        <div className="space-y-6">
                            {[
                                {
                                    name: 'Sarah Jenkins',
                                    title: 'Why SEO\'s Dead and Search Experience is the Future',
                                    label: 'The E-Suite View'
                                }
                            ].map((expert, idx) => (
                                <div key={idx} className="p-4 rounded-lg bg-muted/30 border border-border hover:border-accent/30 transition-colors cursor-pointer">
                                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">{expert.label}</p>
                                    <p className="text-sm font-semibold text-foreground mb-1">{expert.title}</p>
                                    <p className="text-xs text-muted-foreground">{expert.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Two Column Layout */}
            <section className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 py-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Expert Columns */}
                <div className="lg:col-span-2">
                    <Link href="/briefs" className="text-emerald-500 font-medium hover:underline flex items-center gap-2 mb-1">
                        <h3 className="text-3xl  font-bold text-foreground mb-3">Social Media</h3>
                    </Link>
                    <div className="space-y-2">
                        {[
                            {
                                title: 'Migrating to Next.js: The Pre-rendering Checklist for SEO',
                                category: 'Architecture',
                                date: 'Oct 01',
                                description: 'Client-side rendering pitfalls continue to plague enterprise migrations. Here is the definitive checklist for ensuring your JS framework doesn\'t tank your crawl budget.'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="pb-2 border-b border-border last:border-b-0">
                                <div className="space-y-3">
                                    <Link href={item.category} className='group'>
                                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">{item.category}</span>
                                        <h4 className="text-2xl font-bold group-hover:text-primary text-foreground transition-colors">{item.title}</h4>
                                        <p className="text-foreground/70">{item.description}</p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                            <span>{item.date}</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-4">
                    {/* Expert Columns Widget */}
                    <div>
                        <div className="space-y-6">
                            {[
                                {
                                    name: 'Sarah Jenkins',
                                    title: 'Why SEO\'s Dead and Search Experience is the Future',
                                    label: 'The E-Suite View'
                                }
                            ].map((expert, idx) => (
                                <div key={idx} className="p-4 rounded-lg bg-muted/30 border border-border hover:border-accent/30 transition-colors cursor-pointer">
                                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">{expert.label}</p>
                                    <p className="text-sm font-semibold text-foreground mb-1">{expert.title}</p>
                                    <p className="text-xs text-muted-foreground">{expert.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Two Column Layout */}
            <section className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 py-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Expert Columns */}
                <div className="lg:col-span-2">
                    <Link href="/briefs" className="text-emerald-500 font-medium hover:underline flex items-center gap-2 mb-1">
                        <h3 className="text-3xl  font-bold text-foreground mb-3">Content</h3>
                    </Link>
                    <div className="space-y-2">
                        {[
                            {
                                title: 'Migrating to Next.js: The Pre-rendering Checklist for SEO',
                                category: 'Architecture',
                                date: 'Oct 01',
                                description: 'Client-side rendering pitfalls continue to plague enterprise migrations. Here is the definitive checklist for ensuring your JS framework doesn\'t tank your crawl budget.'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="pb-2 border-b border-border last:border-b-0">
                                <div className="space-y-3">
                                    <Link href={item.category} className='group'>
                                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">{item.category}</span>
                                        <h4 className="text-2xl font-bold group-hover:text-primary text-foreground transition-colors">{item.title}</h4>
                                        <p className="text-foreground/70">{item.description}</p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                            <span>{item.date}</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-4">
                    {/* Expert Columns Widget */}
                    <div>
                        <div className="space-y-6">
                            {[
                                {
                                    name: 'Sarah Jenkins',
                                    title: 'Why SEO\'s Dead and Search Experience is the Future',
                                    label: 'The E-Suite View'
                                }
                            ].map((expert, idx) => (
                                <div key={idx} className="p-4 rounded-lg bg-muted/30 border border-border hover:border-accent/30 transition-colors cursor-pointer">
                                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">{expert.label}</p>
                                    <p className="text-sm font-semibold text-foreground mb-1">{expert.title}</p>
                                    <p className="text-xs text-muted-foreground">{expert.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Two Column Layout */}
            <section className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 py-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Expert Columns */}
                <div className="lg:col-span-2">
                    <Link href="/briefs" className="text-emerald-500 font-medium hover:underline flex items-center gap-2 mb-1">
                        <h3 className="text-3xl  font-bold text-foreground mb-3">Paid Media</h3>
                    </Link>
                    <div className="space-y-2">
                        {[
                            {
                                title: 'Migrating to Next.js: The Pre-rendering Checklist for SEO',
                                category: 'Architecture',
                                date: 'Oct 01',
                                description: 'Client-side rendering pitfalls continue to plague enterprise migrations. Here is the definitive checklist for ensuring your JS framework doesn\'t tank your crawl budget.'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="pb-2 border-b border-border last:border-b-0">
                                <div className="space-y-3">
                                    <Link href={item.category} className='group'>
                                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">{item.category}</span>
                                        <h4 className="text-2xl font-bold group-hover:text-primary text-foreground transition-colors">{item.title}</h4>
                                        <p className="text-foreground/70">{item.description}</p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                            <span>{item.date}</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-4">
                    {/* Expert Columns Widget */}
                    <div>
                        <div className="space-y-6">
                            {[
                                {
                                    name: 'Sarah Jenkins',
                                    title: 'Why SEO\'s Dead and Search Experience is the Future',
                                    label: 'The E-Suite View'
                                }
                            ].map((expert, idx) => (
                                <div key={idx} className="p-4 rounded-lg bg-muted/30 border border-border hover:border-accent/30 transition-colors cursor-pointer">
                                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">{expert.label}</p>
                                    <p className="text-sm font-semibold text-foreground mb-1">{expert.title}</p>
                                    <p className="text-xs text-muted-foreground">{expert.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Two Column Layout */}
            <section className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 py-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Expert Columns */}
                <div className="lg:col-span-2">
                    <Link href="/briefs" className="text-emerald-500 font-medium hover:underline flex items-center gap-2 mb-1">
                        <h3 className="text-3xl  font-bold text-foreground mb-3">SEO</h3>
                    </Link>
                    <div className="space-y-2">
                        {[
                            {
                                title: 'Migrating to Next.js: The Pre-rendering Checklist for SEO',
                                category: 'Architecture',
                                date: 'Oct 01',
                                description: 'Client-side rendering pitfalls continue to plague enterprise migrations. Here is the definitive checklist for ensuring your JS framework doesn\'t tank your crawl budget.'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="pb-2 border-b border-border last:border-b-0">
                                <div className="space-y-3">
                                    <Link href={item.category} className='group'>
                                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">{item.category}</span>
                                        <h4 className="text-2xl font-bold group-hover:text-primary text-foreground transition-colors">{item.title}</h4>
                                        <p className="text-foreground/70">{item.description}</p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                            <span>{item.date}</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-4">
                    {/* Expert Columns Widget */}
                    <div>
                        <div className="space-y-6">
                            {[
                                {
                                    name: 'Sarah Jenkins',
                                    title: 'Why SEO\'s Dead and Search Experience is the Future',
                                    label: 'The E-Suite View'
                                }
                            ].map((expert, idx) => (
                                <div key={idx} className="p-4 rounded-lg bg-muted/30 border border-border hover:border-accent/30 transition-colors cursor-pointer">
                                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">{expert.label}</p>
                                    <p className="text-sm font-semibold text-foreground mb-1">{expert.title}</p>
                                    <p className="text-xs text-muted-foreground">{expert.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
