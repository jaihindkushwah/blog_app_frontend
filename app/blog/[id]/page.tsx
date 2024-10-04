"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import RichTextReader from "@/components/RichTextReader";
import { getContentById } from "@/lib/content";
import { useRouter } from "next/navigation";

const BlogPostPage: React.FC = () => {
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const { data } = await getContentById("MongoDB Atlas Search_412bf4b0");
        setPost(data);
        console.log(data);
      } catch (error: any) {
        setError(error?.response?.data?.message || "Post not found");
      }
    };

    fetchContent();
  }, []);

  if (error) {
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
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-foreground">
      <main className="w-full mx-auto px-2 sm:px-4 py-8 pt-16">
        <RichTextReader post={post} />
      </main>
    </div>
  );
};

export default BlogPostPage;
