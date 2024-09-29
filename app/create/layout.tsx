import { Footer } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
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
