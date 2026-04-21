import type { Metadata } from "next";

export type SeoPageKey = "layout" | "home" | "blogs";

export type SeoEntry = {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
};

type SeoApiPayload = {
  siteName: string;
  locale: string;
  titleTemplate: string;
  twitterSite: string;
  twitterCreator: string;
  creator: string;
  publisher: string;
  pages: Record<SeoPageKey, SeoEntry>;
};

const FALLBACK_SEO: SeoApiPayload = {
  siteName: "The Authoritative Editorial",
  locale: "en_US",
  titleTemplate: "%s | The Authoritative Editorial",
  twitterSite: "@authoritativeeditorial",
  twitterCreator: "@authoritativeeditorial",
  creator: "Rakibul Team",
  publisher: "rakibul hasan",
  pages: {
    layout: {
      title: "The Authoritative Editorial | SEO & Travel Insights",
      description:
        "Discover comprehensive SEO insights, travel guides, and expert webinars to boost your online visibility. Join thousands of digital marketers learning with The Authoritative Editorial.",
      keywords: [
        "SEO",
        "travel guides",
        "digital marketing",
        "webinars",
        "search engine optimization",
        "content marketing",
        "travel insights",
      ],
      canonical: "https://authoritativeeditorial.com",
      ogImage: "https://authoritativeeditorial.com/og-image.png",
      ogType: "website",
    },
    home: {
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
      canonical: "https://authoritativeeditorial.com",
      ogImage: "https://authoritativeeditorial.com/og-home.png",
      ogTitle: "The Authoritative Editorial | SEO & Travel Insights",
      ogDescription:
        "Welcome to The Authoritative Editorial. Discover cutting-edge SEO strategies, travel insights, and expert-led webinars.",
      ogType: "website",
    },
    blogs: {
      title: "Blog Archives | Expert SEO & Travel Insights",
      description:
        "Explore our comprehensive blog archive featuring expert insights on SEO, technical optimization, content strategy, and digital marketing. Updated weekly with actionable strategies.",
      keywords: [
        "SEO blog",
        "digital marketing articles",
        "content strategy",
        "technical SEO",
        "algorithm updates",
        "conversion optimization",
        "travel insights",
      ],
      canonical: "https://authoritativeeditorial.com/blogs",
      ogImage: "https://authoritativeeditorial.com/og-blogs.png",
      ogType: "website",
    },
  },
};

const getBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};

export async function getSeoPayload(): Promise<SeoApiPayload> {
  try {
    const response = await fetch(`${getBaseUrl()}/api/seo`, {
      next: { revalidate: 300 },
    });
    if (!response.ok) return FALLBACK_SEO;

    const data = (await response.json()) as Partial<SeoApiPayload>;
    return {
      ...FALLBACK_SEO,
      ...data,
      pages: {
        ...FALLBACK_SEO.pages,
        ...(data.pages ?? {}),
      },
    };
  } catch {
    return FALLBACK_SEO;
  }
}

export function buildMetadataFromSeo(
  seoPayload: SeoApiPayload,
  pageKey: SeoPageKey
): Metadata {
  const page = seoPayload.pages[pageKey];

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    metadataBase: new URL(page.canonical),
    alternates: {
      canonical: page.canonical,
    },
    openGraph: {
      type: page.ogType ?? "website",
      siteName: seoPayload.siteName,
      locale: seoPayload.locale,
      url: page.canonical,
      title: page.ogTitle ?? page.title,
      description: page.ogDescription ?? page.description,
      images: [
        {
          url: page.ogImage,
          width: 1200,
          height: 630,
          alt: `${seoPayload.siteName} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: seoPayload.twitterSite,
      creator: seoPayload.twitterCreator,
      title: page.ogTitle ?? page.title,
      description: page.ogDescription ?? page.description,
      images: [page.ogImage],
    },
  };
}

export { FALLBACK_SEO };
