import typesense from "typesense";

const typesenseClient = new typesense.Client({
  nodes: [
    {
      host: process.env.TYPESENSE_HOST || "localhost",
      port: parseInt(process.env.TYPESENSE_PORT || "8108"),
      protocol: "http",
    },
  ],
  apiKey: process.env.TYPESENSE_API_KEY || "JaihindKushwaha",
});

export interface BookResult {
  id: string;
  title: string;
  // authors: string[];
  description: string;
  createdAt: string;
  titleId: string;
}

export async function searchContents(
  query: string
): Promise<BookResult[] | undefined> {
  if (!query) return [];

  const searchParameters: any = {
    q: query,
    query_by: "title",
    // prefix: true,
    infix: "always",
    per_page: 10,
  };

  try {
    const searchResult = await typesenseClient
      .collections("contents")
      .documents()
      .search(searchParameters);

    return searchResult?.hits?.map((hit: any) => ({
      title: hit.document.title,
      description: hit.document.description,
      createdAt: hit.document.created,
      id: hit.document.id,
      titleId: hit.document.titleId,
      // average_rating: hit.document.average_rating,
      // image_url: hit.document.image_url,
      // ratings_count: hit.document.ratings_count,
    }));

    //   return formattedResults;
  } catch (error) {
    console.error("Error performing search:", error);
    return [];
  }
}
