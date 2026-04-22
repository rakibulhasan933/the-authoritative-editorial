import type { Metadata } from "next";
import Hero from "@/components/hero";
import { OrganizationSchema, BreadcrumbSchema } from "@/components/seo/schema-script";
import { buildMetadataFromSeo, getSeoPayload } from "@/lib/seo-api";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoPayload();
  return buildMetadataFromSeo(seo, "home");
}

export default async function Home() {
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
        <Hero />
      </div>
    </>
  );
}
