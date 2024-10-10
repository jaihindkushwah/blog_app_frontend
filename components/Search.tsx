"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    router.push(`/search?q=${encodeURIComponent(newQuery)}`);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        className="w-full border p-2 mb-4"
        placeholder="Search for books..."
      />
    </div>
  );
}
