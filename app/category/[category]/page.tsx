import { getAllContentCategory } from "@/lib/category";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, CalendarDays } from "lucide-react";
import Link from "next/link";
import CalendarGrid from "@/components/ui/calander-grid";

interface Props {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const post = await await getAllContentCategory(params.category);
  return {
    title: post ? post.title : "Blog Post",
    description: post ? post.description : "Read this blog post",
  };
}

async function Page({ params }: Props) {
  const { category } = params;
  let data = null;
  let error = null;
  try {
    if (category) {
      data = await getAllContentCategory(category);
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
  if (data && data.length > 0)
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3">
        <div className="mt-16 p-5 py-8 sm:p-10   col-span-2 flex flex-col gap-2 items-center">
          {data?.map((post: any) => (
            <div
              key={post._id}
              className="max-h-[450px] flex w-full max-w-[640px]"
            >
              <Link
                key={post._id}
                className="flex-1 transition-transform duration-200 "
                href={`/${post.titleId}`}
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
                        <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                          <CalendarDays size={16} className="mr-2" />
                          {/* <span>{format(new Date(post.createdAt), 'MMMM d, yyyy')}</span> */}
                          <span>{new Date(post.createdAt).toString()}</span>
                        </div>
                      </CardContent>
                    </div>
                    {/* <div className="md:w-1/3 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-4">
                  <img
                    src={`/api/placeholder/300/200?text=${encodeURIComponent(post.title)}`}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded"
                  />
                </div> */}
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-16 p-5 py-8 sm:p-10  hidden border lg:block">
          <div className="sticky top-16 min-w-[360px]">
            <CalendarGrid />
          </div>
        </div>
      </div>
    );

  // error handler

  return (
    <div className="min-h-[95vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="my-4 text-center">{error}</p>
        <Link href="/" passHref>
          <span className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Page;
