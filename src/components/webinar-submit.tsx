"use client";
import { HomepagePayload } from '@/types/home';
import Image from 'next/image';
import React, { Fragment, useState } from 'react'
import { Card } from './ui/card';
import { ArrowRight, Calendar, CheckCircle, Clock, Users, Search, Plus, MapPin, Mail, Briefcase, Phone, } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


interface Registration {
    fullName: string
    email: string
    company: string
    jobTitle: string
    phone: string
    experience: string
}



function WebinarSubmit({ webinar }: { webinar: HomepagePayload['webinars']['items'][0] }) {

    const [selectedWebinar, setSelectedWebinar] = useState<HomepagePayload['webinars']['items'][0] | null>(null);
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

    const handleRegisterClick = (webinar: HomepagePayload['webinars']['items'][0]) => {
        setSelectedWebinar(webinar);
        setIsRegistrationOpen(true);
        setRegistrationSubmitted(false);
    };


    const handleRegistrationSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedWebinar) return;
        try {
            const response = await fetch('/api/webinars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    webinarsId: selectedWebinar.id,
                    ...registrationData
                }),
            });
            const result = await response.json();
            if (result.success) {
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
            } else {
                alert('Registration failed: ' + (result.error || 'Unknown error'));
            }
        } catch (error) {
            alert('Registration failed: ' + (error instanceof Error ? error.message : 'Unknown error'));
        }
    };


    return (
        <Fragment>
            <Card
                key={webinar.id}
                className="overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
                <div className="relative h-44 overflow-hidden bg-muted">
                    <Image
                        src={webinar.image}
                        alt={webinar.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {webinar.categories?.name && (
                        <div className="absolute top-3 left-3">
                            <span className="bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                                {webinar.categories.name}
                            </span>
                        </div>
                    )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                    <h4 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {webinar.title}
                    </h4>
                    <p className="text-sm text-foreground/70 mb-4 line-clamp-2 leading-relaxed flex-1">
                        {webinar.description}
                    </p>

                    <div className="space-y-1.5 mb-4 pt-3 border-t border-border text-xs text-foreground/60">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 shrink-0" />
                            <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 shrink-0" />
                            <span>{webinar.time} · {webinar.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-3.5 h-3.5 shrink-0" />
                            <span>{webinar.attendees.toLocaleString()} registered</span>
                        </div>
                    </div>

                    <Button
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white group/btn rounded-lg"
                        onClick={() => handleRegisterClick(webinar)}
                    >
                        Secure Seat
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </Card>
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

        </Fragment>
    )
}

export default WebinarSubmit