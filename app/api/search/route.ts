// File: ./app/api/search/route.ts
import { NextRequest, NextResponse } from "next/server";
import typesense from "typesense";
// import { Book } from "@/types/book";

export interface Book {
  _id: string;
  title: string;
  authors: string[];
  publication_year: number;
  average_rating: number;
  ratings_count: number;
  image_url: string;
}

// Typesense client
const typesenseClient = new typesense.Client({
  nodes: [{ host: "localhost", port: 8108, protocol: "http" }],
  apiKey: "JaihindKushwaha",
});

const TYPESENSE_COLLECTION_NAME = "books";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";

  const searchParameters: any = {
    q: query,
    query_by: "title",
    prefix: false,
    infix: "always",
  };

  try {
    // Perform search using Typesense
    const searchResult = await typesenseClient
      .collections("books")
      .documents()
      .search(searchParameters);

    const formattedResults = searchResult?.hits?.map((hit: any) => ({
      title: hit.document.title,
      authors: hit.document.authors,
      publication_year: hit.document.publication_year,
      id: hit.document.id,
      average_rating: hit.document.average_rating,
      image_url: hit.document.image_url,
      ratings_count: hit.document.ratings_count,
    }));

    return NextResponse.json(formattedResults);
  } catch (error) {
    console.error("Error performing search:", error);
    return NextResponse.json(
      { error: "An error occurred while searching" },
      { status: 500 }
    );
  }
}
