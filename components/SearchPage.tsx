// import { searchBooks } from '../lib/typesense';

import { searchBooks } from "@/lib/typesense";

export const dynamic = "force-dynamic";

interface SearchPageProps {
  searchParams: { q: string };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || "";
  const books = await searchBooks(query);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for {query}</h1>
      <ul className="space-y-2">
        {books?.map((book) => (
          <li key={book.id} className="border p-2">
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.authors.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
