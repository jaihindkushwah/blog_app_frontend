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
  title: "The Founded.In - Explore Solutions, Share Ideas",
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
