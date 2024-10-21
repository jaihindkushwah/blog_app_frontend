type PageProps = {
  params: {
    id: string;
    category: string;
  };
};

// const Page = ({ params }: PageProps) => {
//   const { category, id } = params;
//   return (
//     <div className="h-[50vh] mt-20">
//       <h1>Category: {category}</h1>
//       <h2>Post ID: {id}</h2>
//     </div>
//   );
// };

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import RichTextReader from "@/components/RichTextReader";
import { getContentById } from "@/lib/content";

interface Props {
  params: {
    category: string;
    id: string;
  };
}
// Async function to fetch the post data on the server
const BlogPostPage = async ({ params }: Props) => {
  const { category, id } = params;
  let post = null;
  let error = null;
  console.log(category, id.toString());

  try {
    const { data } = await getContentById(id.toString());
    // console.log(data);
    post = data;
  } catch (err: any) {
    error = err?.response?.data?.message || "Post not found";
    // console.log(error);
  }

  if (post) {
    return (
      <article className="min-h-[90vh]   text-foreground">
        <div className="w-full mx-auto px-2 sm:px-4 py-8 pt-16">
          <RichTextReader post={post} />
        </div>
      </article>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
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
};

export default BlogPostPage;
