import { getAllContentCategory } from "@/lib/category";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, ChevronRight, ChevronsRight } from "lucide-react";
import Link from "next/link";
import CalendarGrid from "@/components/ui/calander-grid";
import { Metadata } from "next";
import { PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import AdsCarousel from "@/components/ads-carousel";
import AnimatedBlogLink from "@/components/AnimatedBlogLink";

interface Props {
  params: {
    category: string;
  };
  searchParams: {
    page?: string;
    limit?: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = params;

  const title = `The Founded.in - You can read all ${category} blogs here | TheFounded.in`;
  return {
    title: title + " | TheFounded.in",
    description: "Read this blog post",
    openGraph: {
      title: title + " | TheFounded.in",
      description: "Read this blog post",
      type: "article",
      // publishedTime: post.createdAt,
      // authors: [post.author],
      url: `https://thefounded.in/category/${category}`,
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: "Read this blog post",
    },
    alternates: {
      canonical: `https://thefounded.in/category/${category}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

async function Page({ params, searchParams }: Props) {
  const { category } = params;
  // const handlePageIncrement=()=>{
  let page = parseInt(searchParams?.page || "0");
  // let limit = parseInt(searchParams?.limit || "10");
  let limit = 10;

  let data = null;
  let error = null;
  try {
    if (category) {
      data = await getAllContentCategory(
        { category, page, limit },
        { next: { revalidate: 10 } }
      );
      // console.log(data);
      if (data.length === 0) {
        error = "No data found";
      }
    }
    // console.log(data);
  } catch (error: any) {
    // console.log(error);
    error = error.response.data.error;
  }
  let incrementPage = page + 1;
  let decrementPage = page <= 0 ? 0 : page - 1;

  // if (data && data.length > 0)
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 lg:pl-10">
      <div className="mt-16 p-5 py-8 sm:p-10   col-span-2 flex flex-col gap-2 items-center">
        <div className="flex justify-end gap-1 max-h-[450px]  w-full">
          <PaginationPrevious
            className={`${page == 0 ? "hidden" : "flex"}`}
            href={`/category/${category}?page=${decrementPage}`}
          />
          <PaginationNext
            className={`${!data || data.length === 0 ? "hidden" : "flex"}`}
            href={`/category/${category}?page=${incrementPage}`}
          />
        </div>
        {!data || data.length == 0 ? (
          <div className="flex items-center justify-center mt-5">
            <p className="text-xl font-bold text-red-600">Data Not Found</p>
          </div>
        ) : null}
        {data?.map((post: any) => (
          <div key={post._id} className="max-h-[450px] flex w-full ">
            <Link
              key={post._id}
              href={`/${post.titleId}`}
              className="flex-1 transition-transform duration-200 "
            >
              <Card className="hover:translate-x-1 bg-white  dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className=" p-6">
                    <CardHeader className="p-0">
                      <CardTitle className="text-xl sm:text-2xl  font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex gap-1">
                          <CalendarDays size={16} className="mr-2" />
                          <span>{new Date(post.createdAt).toString()}</span>
                        </span>
                        <button className="text-blue-500 hover:underline">
                          <div
                            className="flex gap-1 items-center"
                            aria-label="Animated waving right-pointing chevrons"
                          >
                            Read more
                            <ChevronsRight
                              className={`w-7 h-7 text-blue-600 animate-wave-left-to-right`}
                              style={{
                                animationDelay: `${0.1}s`,
                              }}
                            />
                          </div>
                        </button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-16 p-5 py-8 sm:p-10  hidden border lg:block">
        <div className="sticky top-40 min-w-[360px]">
          <AdsCarousel />
          <AnimatedBlogLink />
        </div>
      </div>
    </div>
  );

  // error handler

  // return (
  //   <div className="min-h-[95vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
  //     <div className="text-center">
  //       <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
  //       <p className="my-4 text-center">{error}</p>
  //       <Link href="/" passHref>
  //         <span className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
  //           <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
  //         </span>
  //       </Link>
  //     </div>
  //   </div>
  // );
}

export default Page;
