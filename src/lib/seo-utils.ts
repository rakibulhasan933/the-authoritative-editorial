/**
 * SEO Utilities for metadata, structured data, and optimization
 */

export interface SEOMetadata {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    ogType?: 'website' | 'article' | 'blog' | 'video.other';
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    keywords?: string[];
    robots?: string;
}

export interface SchemaArticle {
    headline: string;
    description: string;
    image?: string;
    datePublished: string;
    dateModified: string;
    author: {
        '@type': 'Person';
        name: string;
    };
    keywords?: string[];
}

export interface SchemaBreadcrumb {
    name: string;
    item: string;
}

/**
 * Generate complete metadata object for pages
 */
export const generateMetadata = (seo: SEOMetadata) => {
    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords?.join(', '),
        authors: seo.author ? [{ name: seo.author }] : undefined,
        robots: seo.robots || 'index, follow',
        canonical: seo.canonical,
        openGraph: {
            title: seo.title,
            description: seo.description,
            type: seo.ogType || 'website',
            url: seo.canonical,
            images: seo.ogImage ? [{ url: seo.ogImage }] : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title: seo.title,
            description: seo.description,
            images: seo.ogImage ? [seo.ogImage] : undefined,
        },
    };
};

/**
 * Create JSON-LD schema for articles
 */
export const createArticleSchema = (data: SchemaArticle) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.headline,
        description: data.description,
        image: data.image,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        author: data.author,
        keywords: data.keywords?.join(', '),
    };
};

/**
 * Create JSON-LD schema for blog posts
 */
export const createBlogPostingSchema = (data: SchemaArticle & { inLanguage: string }) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: data.headline,
        description: data.description,
        image: data.image,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        author: data.author,
        inLanguage: data.inLanguage,
        keywords: data.keywords?.join(', '),
    };
};

/**
 * Create JSON-LD schema for organization
 */
export const createOrganizationSchema = (orgName: string, orgUrl: string, logoUrl?: string) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: orgName,
        url: orgUrl,
        logo: logoUrl,
        sameAs: [
            'https://www.linkedin.com/company/mumotravels',
            'https://twitter.com/mumotravels',
            'https://www.instagram.com/mumotravels',
        ],
    };
};

/**
 * Create JSON-LD schema for breadcrumbs
 */
export const createBreadcrumbSchema = (breadcrumbs: SchemaBreadcrumb[]) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.item,
        })),
    };
};

/**
 * Create JSON-LD schema for events
 */
export const createEventSchema = (
    name: string,
    description: string,
    startDate: string,
    endDate: string,
    location: string,
    image?: string
) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name,
        description,
        startDate,
        endDate,
        location: {
            '@type': 'Place',
            name: location,
        },
        image,
    };
};

/**
 * Format date for schema.org (ISO 8601)
 */
export const formatSchemaDate = (date: Date | string): string => {
    if (typeof date === 'string') {
        return new Date(date).toISOString();
    }
    return date.toISOString();
};

/**
 * Generate URL slug from text
 */
export const slugify = (text: string): string => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

/**
 * Clean and optimize meta description
 */
export const optimizeDescription = (text: string, maxLength: number = 160): string => {
    const trimmed = text.trim();
    if (trimmed.length <= maxLength) return trimmed;
    return `${trimmed.substring(0, maxLength - 3)}...`;
};
