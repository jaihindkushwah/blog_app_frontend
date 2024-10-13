import { Footer } from "@/components/footer";
// import Navbar from "@/components/Navbar";
// import { Navbar } from "@/components/Navbar";
import LandingPage from "@/components/pages/landing";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
