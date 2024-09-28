import { Footer } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import LandingPage from "@/components/pages/landing";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
