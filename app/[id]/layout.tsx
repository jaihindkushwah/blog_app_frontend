import { Footer } from "@/components/footer";
// import { Metadata } from "next";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen h-full bg-gray-100   dark:bg-[#001e2b]">
      <Navbar />
      <div className="min-h-[40vh]">{children}</div>
      <Footer />
    </div>
  );
}
