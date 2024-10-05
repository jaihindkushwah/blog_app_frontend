import { getAllContentCategory } from "@/lib/category";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import CalendarGrid from "@/components/ui/calander-grid";

interface Props {
  params: {
    category: string;
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
                className="flex-1 hover:border-l-4 hover:-ml-1 hover:rounded-l-sm border-l-[#1684f9] dark:border-l-[#074b94] "
                href={`/${post.titleId}`}
              >
                <Card className="bg-inherit border-none hover:shadow-sm dark:bg-gray-800 transition-all text-primary-foreground duration-300 cursor-pointer rounded-none">
                  <CardHeader className="space-y-0 pb-2">
                    <CardTitle className="text-gray-800 dark:text-gray-200 ">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      {post.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-16 p-5 py-8 sm:p-10  hidden border lg:block">
          <div className="sticky top-16">
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
