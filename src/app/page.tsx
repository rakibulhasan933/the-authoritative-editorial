import type { Metadata } from "next";
import Hero from "@/components/hero";
import { OrganizationSchema, BreadcrumbSchema } from "@/components/seo/schema-script";

export const metadata: Metadata = {
  title: "Momo Travels | SEO & Travel Insights Home",
  description:
    "Welcome to Momo Travels. Discover cutting-edge SEO strategies, travel insights, and expert-led webinars. Join our community of digital marketers and travel enthusiasts today.",
  keywords: [
    "SEO",
    "travel",
    "digital marketing",
    "webinars",
    "online visibility",
    "content marketing",
    "travel guides",
    "search engine optimization",
  ],
  openGraph: {
    title: "Momo Travels | SEO & Travel Insights",
    description:
      "Welcome to Momo Travels. Discover cutting-edge SEO strategies, travel insights, and expert-led webinars.",
    type: "website",
    url: "https://mumotravels.com",
    images: [
      {
        url: "https://mumotravels.com/og-home.png",
        width: 1200,
        height: 630,
        alt: "Momo Travels Home",
      },
    ],
  },
  alternates: {
    canonical: "https://mumotravels.com",
  },
};

export default function Home() {
  return (
    <>
      {/* ── Organization and Breadcrumb Schema ── */}
      <OrganizationSchema
        name="Momo Travels"
        url="https://mumotravels.com"
        logo="https://mumotravels.com/logo.png"
      />
      <BreadcrumbSchema
        items={[{ name: "Home", url: "https://mumotravels.com" }]}
      />

      {/* ── Main content ── */}
      <div className="bg-background">
        <Hero />
      </div>
    </>
  );
}
