import { ReactNode } from 'react';

interface SchemaScriptProps {
    schema: Record<string, unknown>;
}

/**
 * Renders JSON-LD structured data as a script tag
 * Use this component in your page layouts to include structured data
 */
export function SchemaScript({ schema }: SchemaScriptProps): ReactNode {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
            suppressHydrationWarning
        />
    );
}

/**
 * Organization schema component
 */
export function OrganizationSchema({
    name,
    url,
    logo,
}: {
    name: string;
    url: string;
    logo?: string;
}): ReactNode {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name,
        url,
        ...(logo && { logo }),
        sameAs: [
            'https://www.linkedin.com/company/authoritativeeditorial',
            'https://twitter.com/authoritativeeditorial',
            'https://www.instagram.com/authoritativeeditorial',
        ],
    };

    return <SchemaScript schema={schema} />;
}

/**
 * Breadcrumb schema component
 */
export function BreadcrumbSchema({
    items,
}: {
    items: Array<{ name: string; url: string }>;
}): ReactNode {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return <SchemaScript schema={schema} />;
}

/**
 * Article schema component
 */
export function ArticleSchema({
    title,
    description,
    image,
    author,
    publishedDate,
    modifiedDate,
    keywords,
}: {
    title: string;
    description: string;
    image?: string;
    author: string;
    publishedDate: string;
    modifiedDate: string;
    keywords?: string[];
}): ReactNode {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        ...(image && { image }),
        author: {
            '@type': 'Person',
            name: author,
        },
        datePublished: publishedDate,
        dateModified: modifiedDate,
        ...(keywords && { keywords: keywords.join(', ') }),
    };

    return <SchemaScript schema={schema} />;
}