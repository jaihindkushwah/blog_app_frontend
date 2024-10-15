// import { searchBooks } from '../lib/typesense';

import { searchContents } from "@/lib/typesense";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface SearchPageProps extends React.ComponentProps<"div"> {
  searchParams: { q: string };
}

export default async function SearchPage({
  searchParams,
  className,
}: SearchPageProps) {
  const query = searchParams.q || "";
  const contents = await searchContents(query);

  return (
    <div className={cn("px-4", className)}>
      {/* <h1 className="text-2xl font-bold mb-4">Search Results for {query}</h1> */}
      <ul className="space-y-2 w-full flex flex-col">
        {contents?.map((content) => (
          <Link
            key={content.id}
            className="dark:bg-gray-900 dark:shadow-slate-700  w-full border-none border-b-2 border-slate-300 dark:border-slate-800 p-2 cursor-pointer hover:shadow-md hover:scale-(1.005) shadow-sm"
            href={`/${content.titleId}`}
          >
            <li key={content.id}>
              <span className="font-semibold">{content.title}</span>
              <p className="text-sm mt-[2px] text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">
                {content.description}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
