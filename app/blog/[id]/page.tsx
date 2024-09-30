// "use client";
// import { useParams } from "next/navigation";
import React from "react";
// import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import RichTextReader from "@/components/RichTextReader";
import { getContentById } from "@/lib/content";

// Define types for our blog post content

interface Props {
  params: { id: string };
}
const BlogPostPage: React.FC<Props> = async ({ params }) => {
  // const router = useParams();
  const { id } = params;
  console.log(id);

  try {
    const { data } = await getContentById("66fad7a37211a672ad469887");
    console.log(data);
    if (!data) {
      throw new Error("Post not found");
    }
    return (
      <div className=" min-h-[90vh] bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-foreground">
        <main className="w-full mx-auto px-2 sm:px-4 py-8 pt-16 ">
          <RichTextReader post={data} />
        </main>
      </div>
    );
  } catch (error: any) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="my-4 text-center">{error?.response?.data?.message}</p>
          {/* <p className="my-4 text-center">{error?.response?.data?.message}</p> */}
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }
};

export default BlogPostPage;
