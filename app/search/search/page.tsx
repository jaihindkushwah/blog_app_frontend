// import { searchBooks } from '../lib/typesense';

import { searchContents } from "@/lib/typesense";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface SearchPageProps {
  searchParams: { q: string };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || "";
  const contents = await searchContents(query);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for -: {query}</h1>
      <ul className="space-y-2">
        {contents?.map((content) => (
          <Link key={content.id} href={`/${content.titleId}`}>
            <li className="border p-2">
              <h3 className="font-semibold">{content.title}</h3>
              <p className="text-sm text-gray-600">{content.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
