import { Footer } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "The Founded by the People",
  // the founded is a blog site
  description: "The founded is a blog site",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer></Footer>
    </div>
  );
}
