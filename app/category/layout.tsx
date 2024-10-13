import { Footer } from "@/components/footer";
import dynamic from "next/dynamic";
// import Navbar from "@/components/Navbar";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
// import { Navbar } from "@/components/Navbar";
export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full bg-gray-100   dark:bg-[#001e2b]">
      <Navbar />
      <div className="min-h-[40vh]">{children}</div>
      <Footer />
    </div>
  );
}
