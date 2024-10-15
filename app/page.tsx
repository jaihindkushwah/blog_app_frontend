import { Footer } from "@/components/footer";
import LandingPage from "@/components/pages/landing";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
interface SearchPageProps {
  searchParams: { q: string };
}

export default function Home({ searchParams }: SearchPageProps) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <LandingPage searchParams={searchParams} />
      <Footer />
    </div>
  );
}
