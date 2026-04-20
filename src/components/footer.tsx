"use client";
import Link from "next/link";
import { Button } from "./ui/button";


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="border-t border-border bg-background/95 backdrop-blur-sm mt-24"
            role="contentinfo"
            aria-label="Site footer"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <nav className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12" aria-label="Footer navigation">
                    <div>
                        <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Company</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1">About</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1">Contact</Link></li>
                            <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Resources</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1">Privacy Policy</Link></li>
                            <li><Link href="/guidelines" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1">Editorial Guidelines</Link></li>
                            <li><Link href="/feed" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1">RSS Feed</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-2">
                        <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Newsletter</h3>
                        <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter subscription">
                            <label htmlFor="newsletter-email" className="sr-only">Enter your email to subscribe</label>
                            <input
                                id="newsletter-email"
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                aria-label="Email address"
                                required
                            />
                            <Button
                                className="bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                aria-label="Subscribe to newsletter"
                            >
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </nav>

                <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>&copy; {currentYear} Momo Travels. All rights reserved.</p>
                    <nav className="flex items-center gap-6 text-xs" aria-label="Footer legal links">
                        <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1">Privacy</Link>
                        <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1">Terms</Link>
                        <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1">Contact</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
