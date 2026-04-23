import { NextRequest, NextResponse } from "next/server";

type Params = { params: Promise<{ slug: string, category: string }> };
export async function GET(req: NextRequest, { params }: Params) {
    const data = await params;
    const { slug, category } = data;
    try {
        // Replace with your actual third-party API endpoint
        const apiRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/slug/${encodeURIComponent(slug)}`);
        if (!apiRes.ok) {
            return NextResponse.json({ error: "Failed to fetch blog post data" }, { status: apiRes.status });
        }
        const blogData = await apiRes.json();
        return NextResponse.json(blogData);
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
