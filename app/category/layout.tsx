import { Footer } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="mb-20">{children}</div>
      <Footer />
    </div>
  );
}
