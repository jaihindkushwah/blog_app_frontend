// import Search from './components/Search';

import Search from "@/components/Search";
import SearchPage from "./search/page";
interface SearchPageProps {
  searchParams: { q: string };
}

export default function Home({ searchParams }: SearchPageProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book Search</h1>
      <Search />
      <SearchPage searchParams={searchParams} />
    </div>
  );
}
