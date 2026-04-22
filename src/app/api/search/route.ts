import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    const upstream = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/search`);

    // Forward all query params (q, category, etc.)
    searchParams.forEach((value, key) => {
        upstream.searchParams.set(key, value);
    });

    const response = await fetch(upstream.toString(), {
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    return NextResponse.json(data);
}