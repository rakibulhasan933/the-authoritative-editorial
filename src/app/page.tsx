import type { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema } from "@/components/seo/schema-script";
import { buildMetadataFromSeo, getSeoPayload } from "@/lib/seo-api";
import Hero from "@/components/hero";
import { HomepagePayload } from "@/types/home";


export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoPayload();
  return buildMetadataFromSeo(seo, "home");
}

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/homepage`, {
    next: { revalidate: 0 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch homepage data");
  }
  const data: HomepagePayload = await response.json();
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
        <Hero data={data} />
      </div>
    </>
  );
}
