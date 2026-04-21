import { NextResponse } from "next/server";
import { FALLBACK_SEO } from "@/lib/seo-api";

export async function GET() {
  return NextResponse.json(FALLBACK_SEO, {
    headers: {
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
