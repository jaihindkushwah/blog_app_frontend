import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import RichTextReader from "@/components/RichTextReader";
import { getContentById } from "@/lib/content";
import type { Metadata } from "next";
// import { Metadata } from 'next';

// Ensure you have the correct Props type
interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  let post = null;

  try {
    const { data } = await getContentById(id.toString());
    post = data;
  } catch (err) {
    // Handle error
  }

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  // Base URL for your application
  const baseUrl = "https://thefounded.in";

  return {
    title: `${post.title} | TheFounded.in`,
    description: `${post.description} | TheFounded.in`,
    openGraph: {
      title: `${post.title} | TheFounded.in`,
      description: `${post.description} | TheFounded.in`,
      type: "article",
      publishedTime: post.createdAt,
      authors: [post?.author || ""],
      url: `${baseUrl}/${post.titleId}`,
      siteName: "The Founded.In",
      images: [
        { url: `${baseUrl}/opengraph-image.png`, width: 1200, height: 630 },
      ], // Updated to absolute URL
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [
        { url: `${baseUrl}/opengraph-image.png`, width: 1200, height: 630 },
      ], // Updated to absolute URL
    },
    alternates: {
      canonical: `${baseUrl}/${post.titleId}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(baseUrl), // Set metadataBase property
  };
}

const BlogPostPage = async ({ params }: Props) => {
  const { id } = params;
  let post = null;
  let error = null;
  // console.log(category, id.toString());

  try {
    // return data.map(({ titleId }) => titleId);
    const { data } = await getContentById(id.toString(), {
      next: { revalidate: 10 },
    });
    post = data;
  } catch (err: any) {
    error = err?.response?.data?.message || "Post not found";
  }

  if (post) {
    return (
      <article className="min-h-[90vh] text-foreground">
        <div className="w-full mx-auto px-2 sm:px-4 py-8 pt-16">
          <RichTextReader post={post} />
        </div>
      </article>
    );
  }
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
};

export default BlogPostPage;
