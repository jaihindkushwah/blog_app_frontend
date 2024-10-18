import { getAllContent } from "@/lib/content";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://thefounded.in/";

  let posts: any = [];

  try {
    // Dynamically fetch your URLs (e.g., from a database or API)
    const response = await getAllContent({ next: { revalidate: 10 } });
    posts = response.data || []; // Handle the case if data is undefined
  } catch (error) {
    console.error("Failed to fetch content:", error);
    // Optionally, you can return a default sitemap or an empty array
  }
  function escapeXml(str: string) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/'/g, "&apos;")
      .replace(/"/g, "&quot;");
  }

  const pages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      alternates: {
        languages: {
          en: `${baseUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/register`,
      lastModified: new Date(),
      changeFrequency: "daily",
      alternates: {
        languages: {
          en: `${baseUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: "daily",
      alternates: {
        languages: {
          en: `${baseUrl}`,
        },
      },
    },
    // Add more static pages
  ];

  const dynamicPages: MetadataRoute.Sitemap = posts.map((post: any) => ({
    url: `${baseUrl}/${escapeXml(post.titleId)}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "always",
    alternates: {
      languages: {
        en: `${baseUrl}`,
      },
    },
  }));

  return [...pages, ...dynamicPages];
}
