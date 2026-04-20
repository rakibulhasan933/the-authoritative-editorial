import type { Metadata } from "next";
import Hero from "@/components/hero";
import { OrganizationSchema, BreadcrumbSchema } from "@/components/seo/schema-script";

export const metadata: Metadata = {
  title: "The Authoritative Editorial | SEO & Travel Insights Home",
  description:
    "Welcome to The Authoritative Editorial. Discover cutting-edge SEO strategies, travel insights, and expert-led webinars. Join our community of digital marketers and travel enthusiasts today.",
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
    title: "The Authoritative Editorial | SEO & Travel Insights",
    description:
      "Welcome to The Authoritative Editorial. Discover cutting-edge SEO strategies, travel insights, and expert-led webinars.",
    type: "website",
    url: "https://authoritativeeditorial.com",
    images: [
      {
        url: "https://authoritativeeditorial.com/og-home.png",
        width: 1200,
        height: 630,
        alt: "The Authoritative Editorial Home",
      },
    ],
  },
  alternates: {
    canonical: "https://authoritativeeditorial.com",
  },
};

export default function Home() {
  return (
    <>
      {/* ── Organization and Breadcrumb Schema ── */}
      <OrganizationSchema
        name="The Authoritative Editorial"
        url="https://authoritativeeditorial.com"
        logo="https://authoritativeeditorial.com/logo.png"
      />
      <BreadcrumbSchema
        items={[{ name: "Home", url: "https://authoritativeeditorial.com" }]}
      />

      {/* ── Main content ── */}
      <div className="bg-background">
        <Hero />
      </div>
    </>
  );
}
