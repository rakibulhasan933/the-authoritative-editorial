import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const fakeHomePageData = {
    hero: {
        label: 'Featured Insight',
        title: 'The Core Web Vitals Paradigm Shift',
        description:
            'A deep dive into synthetic lab data vs real-world field metrics, and what actually impacts rankings today.',
        author: {
            name: 'Dr. Elias Vance',
            role: 'Head of Technical SEO',
            readTime: '12 min read',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop',
        },
    },
    actionableStrategies: {
        category: 'Actionable Strategies',
        viewAllHref: '#',
        items: [
            {
                title: 'Beyond the Keyword: Mapping Semantic Entities for Authority',
                description:
                    'Learn how to structure content around entity relationships to build durable topical relevance.',
                date: 'Oct 12',
                read: '8 min read',
            },
            {
                title: 'The Anatomy of a High-Converting Informational Query Page',
                description:
                    'Patterns from top ranking how-to pages that win snippets and keep users engaged.',
                date: 'Oct 08',
                read: '6 min read',
            },
        ],
    },
    webinars: {
        title: 'Live & On-Demand Webinars',
        viewAllHref: '/webinars',
        items: [
            {
                id: 1,
                title: "Deconstructing Google's Helpful Content Ecosystem",
                description: 'A practical analysis of information gain, authority, and content quality signals.',
                date: 'Oct 24, 2024',
                time: '10:00 AM EST',
                duration: '60 min',
                attendees: 847,
                category: 'Technical SEO',
                speaker: {
                    name: 'Dr. Elias Vance',
                    title: 'Head Data Scientist',
                },
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
            },
            {
                id: 2,
                title: 'The Entity Graph: Beyond Keyword Targeting',
                description: "Map editorial strategy to Google's knowledge systems for stronger visibility.",
                date: 'Nov 02, 2024',
                time: '2:00 PM EST',
                duration: '45 min',
                attendees: 623,
                category: 'Content Strategy',
                speaker: {
                    name: 'Marcus Vance',
                    title: 'Principal Strategist',
                },
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
            },
            {
                id: 3,
                title: 'Core Web Vitals in 2024: The Lab vs. Field Data Paradox',
                description: 'Why lab improvements alone can miss real ranking outcomes.',
                date: 'Nov 15, 2024',
                time: '1:00 PM EST',
                duration: '50 min',
                attendees: 521,
                category: 'AI & Search',
                speaker: {
                    name: 'Sarah Jenkins',
                    title: 'Technical Lead',
                },
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
            },
        ],
    },
    contentSections: [
        {
            category: 'Technical Briefs',
            href: '/briefs',
            articles: [
                {
                    title: 'Migrating to Next.js: The Pre-rendering Checklist for SEO',
                    date: 'Oct 01',
                    description: "A practical migration checklist that protects crawlability and indexation.",
                },
            ],
            sidebar: [
                {
                    name: 'Sarah Jenkins',
                    title: "Why SEO's Dead and Search Experience is the Future",
                    label: 'The E-Suite View',
                },
            ],
        },
        {
            category: 'Content',
            href: '/briefs',
            articles: [
                {
                    title: 'Building Topic Clusters That Actually Rank',
                    date: 'Oct 05',
                    description: 'Internal linking and editorial depth patterns used by leading publishers.',
                },
            ],
            sidebar: [
                {
                    name: 'Marcus Vance',
                    title: 'How to Align Content Ops with Search Intent',
                    label: 'Editorial Ops',
                },
            ],
        },
    ],
};

export default function Home() {
    const data = fakeHomePageData;

    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            {/* selceted 1st hero section blog post */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4 lg:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-block">
                            <span className="text-xs text-primary uppercase tracking-widest font-semibold">{data.hero.label}</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl  font-bold leading-tight text-foreground">
                            {data.hero.title}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {data.hero.description}
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <Image
                                width={48}
                                height={48}
                                src={data.hero.author.avatar}
                                alt={data.hero.author.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-foreground">{data.hero.author.name}</p>
                                <p className="text-sm text-muted-foreground">{data.hero.author.role} • {data.hero.author.readTime}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-linear-to-br from-accent to-accent/60 rounded-2xl aspect-square flex items-center justify-center overflow-hidden shadow-lg">
                        <div className="w-full h-full bg-accent/40"></div>
                    </div>
                </div>
            </section>

            {/* Actionable Strategies Section */}
            {/* category selected selected category 2 blog posts */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center justify-between mb-12">
                    <h3 className="text-4xl  font-bold text-foreground">{data.actionableStrategies.category}</h3>
                    <Link href={data.actionableStrategies.viewAllHref} className="text-primary font-medium hover:underline flex items-center gap-2">
                        View All
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.actionableStrategies.items.map((item, idx) => (
                        <Card key={idx} className="p-8 border border-border hover:shadow-lg hover:border-accent/30 transition-all">
                            <div className="space-y-4">
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
            {/* selected  3 webinars */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center justify-between mb-12">
                    <h3 className="text-4xl  font-bold text-foreground">{data.webinars.title}</h3>
                    <Link href={data.webinars.viewAllHref} className="text-primary font-medium hover:underline flex items-center gap-2">
                        View All
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.webinars.items.map((webinar) => (
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
                                        width={28}
                                        height={28}
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
            {/* selected category blog posts */}
            {data.contentSections.map((section, sectionIdx) => (
                <section key={`${section.category}-${sectionIdx}`} className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 py-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <Link href={section.href} className="text-emerald-500 font-medium hover:underline flex items-center gap-2 mb-1">
                            <h3 className="text-3xl  font-bold text-foreground mb-3">{section.category}</h3>
                        </Link>
                        <div className="space-y-2">
                            {/* selected category blog posts */}
                            {section.articles.map((item, idx) => (
                                <div key={`${item.title}-${idx}`} className="pb-2 border-b border-border last:border-b-0">
                                    <div className="space-y-3">
                                        <Link href={section.href} className='group'>
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

                    <div className="space-y-4">
                        <div>
                            <div className="space-y-6">
                                {/* selected 2 category 2 blog posts */}
                                {section.sidebar.map((expert, idx) => (
                                    <div key={`${expert.title}-${idx}`} className="p-4 rounded-lg bg-muted/30 border border-border hover:border-accent/30 transition-colors cursor-pointer">
                                        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">{expert.label}</p>
                                        <p className="text-sm font-semibold text-foreground mb-1">{expert.title}</p>
                                        <p className="text-xs text-muted-foreground">{expert.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ))}

        </div>
    );
}
