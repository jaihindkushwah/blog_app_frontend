import { getAllContent } from "@/lib/content";

// app/sitemap.xml.js

import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://thefounded.in/";

  // Dynamically fetch your URLs (e.g., from a database or API)
  const { data: posts } = await getAllContent();

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

  const dynamicPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/${post.titleId}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "daily",
    alternates: {
      languages: {
        en: `${baseUrl}`,
      },
    },
  }));

  return [...pages, ...dynamicPages];

  // return [
  //   {
  //     url: "https://acme.com",
  //     lastModified: new Date(),
  //     alternates: {
  //       languages: {
  //         es: "https://acme.com/es",
  //         de: "https://acme.com/de",
  //       },
  //     },
  //   },
  // ];
}
// Replace with your data fetching logic
