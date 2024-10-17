import { Footer } from "@/components/footer";
import dynamic from "next/dynamic";
// import { Navbar } from "@/components/Navbar";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
import "react-quill/dist/quill.snow.css";
export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
