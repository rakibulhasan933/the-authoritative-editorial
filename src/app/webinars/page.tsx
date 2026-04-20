'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Users, Search, Plus, MapPin, Mail, Briefcase, Phone, ArrowRight, CheckCircle } from 'lucide-react';

interface Registration {
    fullName: string
    email: string
    company: string
    jobTitle: string
    phone: string
    experience: string
}

interface Webinar {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    duration: string;
    category: string;
    speaker: {
        name: string;
        title: string;
        image: string;
    };
    attendees: number;
    status: 'upcoming' | 'live' | 'completed';
    image: string;
}

const webinars: Webinar[] = [
    {
        id: '1',
        title: 'Deconstructing Google\'s Helpful Content Ecosystem',
        description: 'A rigorous analysis of recent patent updates and algorithm shifts targeting information gain and topical authority.',
        date: 'Oct 24, 2024',
        time: '10:00 AM EST',
        duration: '60 min',
        category: 'Technical SEO',
        speaker: {
            name: 'Dr. Elena Rostova',
            title: 'Lead Data Scientist, SearchMetrics',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop'
        },
        attendees: 2847,
        status: 'upcoming',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'
    },
    {
        id: '2',
        title: 'The Entity Graph: Beyond Keyword Targeting',
        description: 'Learn how to map your editorial strategy to Google\'s Knowledge Graph, establishing your brand as a definitive entity.',
        date: 'Nov 02, 2024',
        time: '2:00 PM EST',
        duration: '75 min',
        category: 'Content Strategy',
        speaker: {
            name: 'Marcus Vince',
            title: 'Editorial Strategist, Organic Alpha',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop'
        },
        attendees: 1923,
        status: 'upcoming',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'
    },
    {
        id: '3',
        title: 'Core Web Vitals: Lab vs Field Data Analysis',
        description: 'Uncovering the discrepancy between synthetic and real-world metrics in your PageSpeed and CrUX data.',
        date: 'Oct 31, 2024',
        time: '11:30 AM EST',
        duration: '90 min',
        category: 'Performance',
        speaker: {
            name: 'Sarah Chen',
            title: 'Performance Engineer, TechFlow',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=48&h=48&fit=crop'
        },
        attendees: 3120,
        status: 'upcoming',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'
    },
    {
        id: '4',
        title: 'Schema.org Mastery: Enterprise Deployment',
        description: 'Advanced markup patterns for large-scale implementations across multi-location and multi-vertical sites.',
        date: 'Nov 07, 2024',
        time: '3:00 PM EST',
        duration: '60 min',
        category: 'Technical SEO',
        speaker: {
            name: 'Alex Thompson',
            title: 'Structured Data Lead, DataEnhance',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop'
        },
        attendees: 1654,
        status: 'upcoming',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'
    },
    {
        id: '5',
        title: 'Link Architecture for Topical Authority',
        description: 'Building internal linking strategies that create semantic relationships and establish content silos.',
        date: 'Nov 14, 2024',
        time: '1:00 PM EST',
        duration: '75 min',
        category: 'Link Building',
        speaker: {
            name: 'James Rodriguez',
            title: 'SEO Architect, LinkLab',
            image: 'https://images.unsplash.com/photo-1519085360771-9852ef158dba?w=48&h=48&fit=crop'
        },
        attendees: 892,
        status: 'upcoming',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'
    },
    {
        id: '6',
        title: 'AI-Powered Content Optimization Pipeline',
        description: 'Implementing machine learning models to scale content creation while maintaining topical relevance.',
        date: 'Nov 21, 2024',
        time: '10:00 AM EST',
        duration: '90 min',
        category: 'Content Strategy',
        speaker: {
            name: 'Dr. Priya Kapoor',
            title: 'AI Research Lead, ContentMind',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop'
        },
        attendees: 2456,
        status: 'upcoming',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'
    }
];

const categories = [
    'All Sessions',
    'Technical SEO',
    'Content Strategy',
    'Performance',
    'Link Building',
    'On-Page',
    'AI & Search'
];

export default function WebinarsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All Sessions');
    const [searchQuery, setSearchQuery] = useState('');
    // const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    // const [formData, setFormData] = useState({
    //     title: '',
    //     description: '',
    //     date: '',
    //     time: '',
    //     duration: '',
    //     category: ''
    // });
    const [selectedWebinar, setSelectedWebinar] = useState<Webinar | null>(null);
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const [registrationSubmitted, setRegistrationSubmitted] = useState(false);
    const [registrations, setRegistrations] = useState<Registration[]>([]);
    const [registrationData, setRegistrationData] = useState<Registration>({
        fullName: '',
        email: '',
        company: '',
        jobTitle: '',
        phone: '',
        experience: ''
    });

    const filteredWebinars = webinars.filter((webinar) => {
        const matchesCategory = selectedCategory === 'All Sessions' || webinar.category === selectedCategory;
        const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            webinar.speaker.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // const handleAddWebinar = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log('New webinar:', formData);
    //     setFormData({ title: '', description: '', date: '', time: '', duration: '', category: '' });
    //     setIsAddDialogOpen(false);
    // };

    const handleRegisterClick = (webinar: Webinar) => {
        setSelectedWebinar(webinar);
        setIsRegistrationOpen(true);
        setRegistrationSubmitted(false);
    };

    const handleRegistrationSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('[v0] Registration submitted:', { webinar: selectedWebinar?.title, registration: registrationData });
        setRegistrations([...registrations, registrationData]);
        setRegistrationSubmitted(true);

        setTimeout(() => {
            setIsRegistrationOpen(false);
            setRegistrationData({
                fullName: '',
                email: '',
                company: '',
                jobTitle: '',
                phone: '',
                experience: ''
            });
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-linear-to-br from-emerald-50 to-white dark:from-emerald-950 dark:to-slate-900 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-block">
                                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-100 hover:bg-emerald-100">
                                    Master the Algorithm
                                </Badge>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl  font-bold leading-tight text-foreground text-balance">
                                Live & On-Demand Webinars
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                                Join industry leaders for deep-dive sessions into search architecture, entity optimization, and the future of digital authority.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">
                                    Subscribe to Updates
                                </Button>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-linear-to-br from-emerald-400/20 to-teal-400/20 rounded-2xl blur-3xl" />
                            <div className="relative bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 md:p-12 aspect-square flex items-center justify-center overflow-hidden shadow-2xl">
                                <div className="flex flex-col items-center justify-center gap-4 text-white">
                                    <Calendar className="w-16 h-16" />
                                    <div className="text-center">
                                        <p className="text-sm font-medium opacity-90">Next Webinar</p>
                                        <p className="text-2xl font-bold">Oct 24, 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search & Filter Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-6">
                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                        <Input
                            placeholder="Search webinars by title or speaker..."
                            className="pl-12 py-6 text-base rounded-lg border-2 border-border hover:border-emerald-300 focus:border-emerald-500 transition-colors"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                    ? 'bg-emerald-600 text-white shadow-lg'
                                    : 'bg-muted text-foreground hover:bg-muted/80'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Header with Add Button */}
                    <div className="flex items-center justify-between pt-4">
                        <h2 className="text-3xl  font-bold text-foreground">
                            {selectedCategory === 'All Sessions' ? 'Upcoming Webinars' : selectedCategory}
                        </h2>
                        {/* <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                            <DialogTrigger asChild>
                                <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">
                                    <Plus className="w-4 h-4" />
                                    Add Webinar
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-serif">Add New Webinar</DialogTitle>
                                </DialogHeader>
                                <form onSubmit={handleAddWebinar} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Webinar Title</label>
                                        <Input
                                            placeholder="Enter webinar title"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Description</label>
                                        <textarea
                                            placeholder="Enter webinar description"
                                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                            rows={3}
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Date</label>
                                            <Input
                                                type="date"
                                                value={formData.date}
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Time</label>
                                            <Input
                                                type="time"
                                                value={formData.time}
                                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Duration</label>
                                            <Input
                                                placeholder="e.g., 60 min"
                                                value={formData.duration}
                                                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Category</label>
                                            <Select value={formData.category} onValueChange={(value: string) => setFormData({ ...formData, category: value })}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {categories.slice(1).map((cat) => (
                                                        <SelectItem key={cat} value={cat}>
                                                            {cat}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                                        Create Webinar
                                    </Button>
                                </form>
                            </DialogContent>
                        </Dialog> */}
                    </div>

                    <p className="text-muted-foreground">
                        Showing {filteredWebinars.length} of {webinars.length} webinars
                    </p>
                </div>
            </section>

            {/* Webinars Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                {filteredWebinars.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredWebinars.map((webinar) => (
                            <Card key={webinar.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 border-border hover:border-emerald-300">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden bg-muted">
                                    <img
                                        src={webinar.image}
                                        alt={webinar.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <Badge className="absolute top-4 right-4 bg-emerald-600 text-white hover:bg-emerald-700">
                                        {webinar.category}
                                    </Badge>
                                    {webinar.status === 'upcoming' && (
                                        <Badge className="absolute top-4 left-4 bg-blue-600 text-white hover:bg-blue-700">
                                            Upcoming
                                        </Badge>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl  font-bold text-foreground line-clamp-2 group-hover:text-emerald-600 transition-colors">
                                        {webinar.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        {webinar.description}
                                    </p>

                                    {/* Date & Time */}
                                    <div className="space-y-2 pt-2 border-t border-border">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="w-4 h-4 text-emerald-600" />
                                            <span>{webinar.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Clock className="w-4 h-4 text-emerald-600" />
                                            <span>{webinar.time} • {webinar.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Users className="w-4 h-4 text-emerald-600" />
                                            <span>{webinar.attendees.toLocaleString()} registered</span>
                                        </div>
                                    </div>

                                    {/* Speaker */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                                        <img
                                            src={webinar.speaker.image}
                                            alt={webinar.speaker.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-sm text-foreground truncate">
                                                {webinar.speaker.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground truncate">
                                                {webinar.speaker.title}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Register Button */}
                                    <Button
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white group/btn rounded-lg"
                                        onClick={() => handleRegisterClick(webinar)}
                                    >
                                        Secure Seat
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-lg text-muted-foreground">
                            No webinars found matching your criteria.
                        </p>
                    </div>
                )}
            </section>
            {/* Registration Modal */}
            <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    {!registrationSubmitted ? (
                        <>
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-sans">Register for Webinar</DialogTitle>
                            </DialogHeader>
                            {selectedWebinar && (
                                <div className="mb-6 p-4 bg-secondary rounded-lg">
                                    <p className="text-sm text-foreground/70">You are registering for:</p>
                                    <p className="font-sans font-bold text-lg text-foreground">{selectedWebinar.title}</p>
                                    <p className="text-sm text-foreground/60 mt-2">
                                        {selectedWebinar.date} • {selectedWebinar.time} • {selectedWebinar.duration}
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleRegistrationSubmit} className="space-y-4">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Full Name *
                                    </label>
                                    <Input
                                        placeholder="John Doe"
                                        value={registrationData.fullName}
                                        onChange={(e) => setRegistrationData({ ...registrationData, fullName: e.target.value })}
                                        required
                                        className="rounded-lg"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        Email Address *
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="john@example.com"
                                        value={registrationData.email}
                                        onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
                                        required
                                        className="rounded-lg"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        Phone Number
                                    </label>
                                    <Input
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        value={registrationData.phone}
                                        onChange={(e) => setRegistrationData({ ...registrationData, phone: e.target.value })}
                                        className="rounded-lg"
                                    />
                                </div>

                                {/* Company */}
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4" />
                                        Company Name *
                                    </label>
                                    <Input
                                        placeholder="Your Company"
                                        value={registrationData.company}
                                        onChange={(e) => setRegistrationData({ ...registrationData, company: e.target.value })}
                                        required
                                        className="rounded-lg"
                                    />
                                </div>

                                {/* Job Title */}
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Job Title *
                                    </label>
                                    <Input
                                        placeholder="e.g., Digital Marketing Manager"
                                        value={registrationData.jobTitle}
                                        onChange={(e) => setRegistrationData({ ...registrationData, jobTitle: e.target.value })}
                                        required
                                        className="rounded-lg"
                                    />
                                </div>

                                {/* Experience Level */}
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Years of Experience *
                                    </label>
                                    <Select value={registrationData.experience} onValueChange={(value) => setRegistrationData({ ...registrationData, experience: value })}>
                                        <SelectTrigger className="rounded-lg">
                                            <SelectValue placeholder="Select experience level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="0-2">0-2 years</SelectItem>
                                            <SelectItem value="2-5">2-5 years</SelectItem>
                                            <SelectItem value="5-10">5-10 years</SelectItem>
                                            <SelectItem value="10+">10+ years</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Submit Button */}
                                <Button type="submit" className="w-full rounded-lg" size="lg">
                                    Confirm Registration
                                </Button>

                                <p className="text-xs text-foreground/60 text-center">
                                    We&apos;ll send you a confirmation email and webinar link shortly.
                                </p>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-8">
                            <div className="mb-4 flex justify-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                            </div>
                            <h3 className="font-sans text-2xl font-bold text-foreground mb-2">
                                Registration Confirmed!
                            </h3>
                            <p className="text-foreground/70 mb-6">
                                Check your email for the webinar link and details. We&apos;re excited to see you there!
                            </p>
                            <Button
                                onClick={() => setIsRegistrationOpen(false)}
                                className="rounded-lg"
                            >
                                Close
                            </Button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

        </div>
    );
}