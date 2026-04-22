import { NextResponse } from "next/server";
import homepageData from "@/data/homepage.json";

export async function GET() {
  return NextResponse.json(homepageData, {
    headers: {
      "Cache-Control": "public, s-maxage=120, stale-while-revalidate=300",
    },
  });
}
