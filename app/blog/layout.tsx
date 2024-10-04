import { Footer } from "@/components/footer"; // Ensure the path is correct
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

// Dynamically import the Navbar component without server-side rendering
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "The Founded by the People",
  description: "The founded is a blog site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={fontSans.variable}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
