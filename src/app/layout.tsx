import type { Metadata, Viewport } from "next";
import { Figtree, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider";

// ─── Fonts ────────────────────────────────────────────────────────────────────

/**
 * Figtree — clean geometric sans-serif for UI / body copy.
 * Exposed as --font-sans so Tailwind's `font-sans` utility picks it up.
 */
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

/**
 * Lora — editorial serif for headings and pull-quotes.
 * Exposed as --font-serif so Tailwind's `font-serif` utility picks it up.
 */
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: "Momo Travels | SEO & Travel Insights",
    template: "%s | Momo Travels",
  },
  description:
    "Discover comprehensive SEO insights, travel guides, and expert webinars to boost your online visibility. Join thousands of digital marketers learning with Momo Travels.",
  keywords: [
    "SEO",
    "travel guides",
    "digital marketing",
    "webinars",
    "search engine optimization",
    "content marketing",
    "travel insights",
  ],
  metadataBase: new URL("https://mumotravels.com"),
  alternates: {
    canonical: "https://mumotravels.com",
  },
  openGraph: {
    type: "website",
    siteName: "Momo Travels",
    locale: "en_US",
    url: "https://mumotravels.com",
    title: "Momo Travels | SEO & Travel Insights",
    description:
      "Discover comprehensive SEO insights, travel guides, and expert webinars to boost your online visibility.",
    images: [
      {
        url: "https://mumotravels.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Momo Travels - SEO and Travel Insights",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mumotravels",
    creator: "@mumotravels",
    title: "Momo Travels | SEO & Travel Insights",
    description:
      "Discover comprehensive SEO insights, travel guides, and expert webinars to boost your online visibility.",
    images: ["https://mumotravels.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  creator: "Rakibul Team",
  publisher: "rakibul hasan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

/**
 * Viewport config — kept separate from metadata as required by Next.js 14+.
 * Sets the theme-color to match the navbar background so the browser chrome
 * blends seamlessly on mobile.
 */
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html
      lang="en"
      className={cn(
        // CSS variable tokens picked up by Tailwind's font utilities
        figtree.variable,
        lora.variable,
        // Base rendering
        "h-full antialiased  hydrated",
        // Scrollbar gutter prevents layout shift when scrollbar appears
        "overflow-y-scroll",
      )}
      suppressHydrationWarning
    >
      <head />
      <body className={cn(
        "min-h-full flex flex-col",
        "bg-background text-foreground",
        "selection:bg-primary/20 selection:text-foreground",
      )}>
        <ThemeProvider>
          {/* ── Skip to content link for accessibility ── */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2"
            aria-label="Skip to main content"
          >
            Skip to main content
          </a>

          {/* ── Top navigation ── */}
          <Navbar />

          {/*
           * Page content wrapper.
           * flex-1 makes this section grow so the footer stays at the bottom.
           * Semantic <main> landmark provides navigation context for assistive tech
           */}
          <main
            id="main-content"
            className={cn(
              "flex-1 w-full",
              "bg-background",
              "border-t border-border",
            )}
            role="main"
            aria-label="Main content"
          >
            {/*
             * Inner content container — consistent horizontal padding at every
             * breakpoint, generous vertical padding so articles don't crowd
             * the navbar.
             */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
              {children}
            </div>
          </main>

          {/* ── Footer ── */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
