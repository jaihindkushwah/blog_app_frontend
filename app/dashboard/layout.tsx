import { Footer } from "@/components/footer";
import DashboardPage from "@/components/pages/components/DashboardContent";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full bg-gray-100   dark:bg-[#001e2b]">
      <Navbar />
      <div className="min-h-[40vh] pt-16">
        <DashboardPage>{children}</DashboardPage>
      </div>
      <Footer />
    </div>
  );
}
