"use client";
// import SearchPage from "@/components/SearchPage";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function SearchInput() {
  const router = useRouter();
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    router.push(`?q=${encodeURIComponent(newQuery)}`);
  };
  return (
    <span
      className="flex items-center w-full border center h-[40px]  sm:pl-4 
    sm:text-base sm:h-[45px]  bg-inherit  rounded-full shadow-sm p-3 
    focus-visible:ring-offset-0  focus:outline-none focus-visible:ring-0
     dark:text-white pl-2"
    >
      <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      <Input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search your interest..."
        className="flex-1 center  sm:text-base h-full shadow-none   bg-inherit border-0  p-3 focus-visible:ring-offset-0  focus:outline-none focus-visible:ring-0 dark:text-white pl-2"
      />
    </span>
  );
}

export default SearchInput;
