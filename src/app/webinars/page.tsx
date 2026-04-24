import WebinarsPage from '@/components/webinars';
import React from 'react'

async function page() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/webinars`, {
        next: {
            revalidate: 0,
        },
    });
    if (!res.ok) {
        console.error('Failed to fetch webinars:', res.statusText);
    }
    const webinars = await res.json();

    const categories = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories`, { next: { revalidate: 0 } });
    if (!categories.ok) {
        console.error('Failed to fetch categories:', categories.statusText);
    }
    const category = await categories.json();
    return (
        <div>
            <WebinarsPage webinars={webinars.webinars} categories={category.categories} />
        </div>
    )
}

export default page