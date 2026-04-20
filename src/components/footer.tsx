import * as React from "react";
import Link from "next/link";
import { Button } from "./ui/button";


export default function Footer() {
    return (
        < footer className="border-t border-border bg-background/95 backdrop-blur-sm mt-24" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h6 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Company</h6>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link href="#" className="text-muted-foreground hover:text-accent transition-colors">About</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-accent transition-colors">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Resources</h6>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link href="#" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-accent transition-colors">Editorial Guidelines</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-accent transition-colors">RSS Feed</Link></li>
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
                        <Link href="#" className="hover:text-accent transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-accent transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-accent transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer >
    );
}