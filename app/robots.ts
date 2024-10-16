import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/create", "/admin", "/private", "/dashboard", "/api"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: "/nogooglebot",
      },
    ],
    sitemap: "https://thefounded.in/sitemap.xml",
    host: "https://thefounded.in",
  };
}
