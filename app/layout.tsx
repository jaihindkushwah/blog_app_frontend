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
  title: "The Founded any problems...",
  // the founded is a blog site
  description: "The founded is a blog site",
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
