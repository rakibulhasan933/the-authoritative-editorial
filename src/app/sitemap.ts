import { MetadataRoute } from 'next';

const BASE_URL = 'https://authoritativeeditorial.com';

export default function sitemap(): MetadataRoute.Sitemap {
    // Main pages
    const mainPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/blogs`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/webinars`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];

    // TODO: Add dynamic blog posts when data is available
    // Example for when you have blog data:
    // const blogPosts = blogData.map((post) => ({
    //   url: `${BASE_URL}/blog/${post.slug}`,
    //   lastModified: new Date(post.modifiedTime),
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.7,
    // }));

    // TODO: Add dynamic webinars when data is available
    // const webinarPages = webinarData.map((webinar) => ({
    //   url: `${BASE_URL}/webinars/${webinar.slug}`,
    //   lastModified: new Date(webinar.updatedAt),
    //   changeFrequency: 'weekly' as const,
    //   priority: 0.7,
    // }));

    return mainPages;
}