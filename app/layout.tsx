import type { Metadata } from "next";
import "./globals.css";
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import AppMasterProvider from "@/contexts/AppProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "The Founded.In - Explore Solutions, Share Ideas",
    template: "%s | TheFounded.In",
  },
  robots: "follow, index",
  keywords: [
    "founded.in",
    "TheFounded",
    "TheFounded blog",
    "TheFounded.in tech blog",
    "founded.in blog platform",
    "TheFounded platform for tech news",
    "founded.in tech news site",

    // Tech-related content
    "founded.in tech articles",
    "TheFounded.in tech issues",
    "TheFounded tech news",
    "TheFounded tech issue resolutions",
    "TheFounded developer news",
    "founded.in coding tutorials",
    "TheFounded software development blog",

    // Issue resolution focus
    "TheFounded.in issue resolution blog",
    "founded.in coding issues",
    "TheFounded tech troubleshooting",
    "TheFounded debugging tutorials",
    "TheFounded problem-solving platform",
    "TheFounded developer community blog",

    // Tech news keywords
    "TheFounded latest tech news",
    "founded.in technology updates",
    "founded.in software news",
    "TheFounded software updates",
    "founded.in tech trends",

    // Tutorials and programming solutions
    "TheFounded coding tutorials",
    "founded.in programming solutions",
    "founded.in developer tips",
    "TheFounded web development tips",
    "founded.in software development tutorials",
    "founded.in tech how-to guides",

    // Interview tips and developer content
    "TheFounded developer interview questions",
    "founded.in job tips for developers",
    "TheFounded interview preparation blog",

    // Developer tools updates and insights
    "founded.in developer tools updates",
    "TheFounded programming insights",
    "founded.in software engineering tips",

    // Extended tech-related combinations
    "TheFounded tech news articles",
    "founded.in tech blog for developers",
    "TheFounded programming issue solutions",
    "founded.in coding problem-solving articles",
    "TheFounded software tutorials",

    // Long-tail tech keywords
    "TheFounded platform for coding news",
    "founded.in latest coding trends",
    "TheFounded software engineering blog",
    "founded.in tech news platform",
    "TheFounded technology trends blog",
    "founded.in developer tutorials",

    // More specific tech content
    "TheFounded tech industry updates",
    "founded.in latest software news",
    "TheFounded debugging solutions blog",
    "founded.in software troubleshooting tips",
    "TheFounded tech guides",

    // Variations with platform and site
    "TheFounded blog site",
    "founded.in technology blog site",
    "TheFounded coding tutorials site",
    "TheFounded tech news platform",
    "founded.in developer insights blog",
    "TheFounded software blog",
    "founded.in tech tutorials site",

    // Combined keywords for long-tail search
    "founded.in tech news blog",
    "TheFounded tech blog for developers",
    "founded.in coding tutorials platform",
    "founded.in developer tools news",
    "TheFounded latest tech trends",
    "founded.in coding problem resolutions",
    "TheFounded debugging solutions",
    "founded.in programming tips blog",
  ],
  twitter: {
    card: "summary_large_image",
  },
  // openGraph: {
  //   images: [
  //     {
  //       url: "./opengraph-image.png",
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  // },
  // the founded is a blog site
  description:
    "The Founded.In is a dynamic blog platform where innovative minds connect. Explore insightful articles, share your thoughts, and find the solutions you’ve been looking for",
  icons: {
    icon: [{ url: "/logo.svg", sizes: "32x32", type: "image/svg+xml" }],
    apple: [
      {
        url: "/icon?id=apple-touch-icon",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontSans.variable)}>
        <AppMasterProvider session={session}>{children}</AppMasterProvider>
      </body>
    </html>
  );
}
