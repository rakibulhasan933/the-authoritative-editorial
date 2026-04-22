import homepageFallback from "@/data/homepage.json";

export type HomePageData = typeof homepageFallback;

const getBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};

export async function getHomePageData(): Promise<HomePageData> {
  try {
    const response = await fetch(`${getBaseUrl()}/api/homepage`, {
      next: { revalidate: 120 },
    });
    if (!response.ok) return homepageFallback;
    return (await response.json()) as HomePageData;
  } catch {
    return homepageFallback;
  }
}
