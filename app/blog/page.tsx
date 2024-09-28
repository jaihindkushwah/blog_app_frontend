// "use client";
// import Reactfrom "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-[100vh] bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/50 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-slate-300">
          Welcome to The Founded.in
        </h1>
        <p className="text-lg sm:text-xl font-medium text-gray-700 dark:text-slate-300 mt-4">
          Discover interesting articles and insights on various topics.
        </p>

        {/* Responsive Search Bar */}
        <div className="w-full max-w-md mx-auto mt-6 lg:mt-8">
          <Input
            type="text"
            placeholder="Search your interest..."
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm p-3 dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>
    </section>
  );
};

const PopularPosts = () => {
  const posts = [
    {
      title: "10 Tips for Productive Writing",
      excerpt: "Boost your writing productivity with these simple tips...",
    },
    {
      title: "The Future of AI in 2024",
      excerpt:
        "Explore the latest trends and predictions in artificial intelligence...",
    },
    {
      title: "Mastering React Hooks",
      excerpt: "Learn how to effectively use React Hooks in your projects...",
    },
    {
      title: "Sustainable Living: A Beginner's Guide",
      excerpt: "Start your journey towards a more sustainable lifestyle...",
    },
    {
      title: "10 Tips for Productive Writing",
      excerpt: "Boost your writing productivity with these simple tips...",
    },
    {
      title: "The Future of AI in 2024",
      excerpt:
        "Explore the latest trends and predictions in artificial intelligence...",
    },
    {
      title: "Mastering React Hooks",
      excerpt: "Learn how to effectively use React Hooks in your projects...",
    },
    {
      title: "Sustainable Living: A Beginner's Guide",
      excerpt: "Start your journey towards a more sustainable lifestyle...",
    },
  ];

  return (
    // import Link from 'next/link';

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 px-4">
      {posts.map((post, index) => (
        <Link key={index} href={`/blog`}>
          <Card className="bg-white dark:bg-gray-900 shadow-md dark:shadow-none hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-lg cursor-pointer">
            <CardHeader>
              <CardTitle className="text-gray-800 dark:text-gray-200">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {post.excerpt}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

const FullBlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      <HeroSection />
      <main className="w-full flex pb-10 flex-col mx-auto flex-grow px-4">
        <h3 className="text-2xl text-center pt-5 font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
          Popular Posts
        </h3>
        <PopularPosts />
      </main>

      <main className="w-full flex pb-10 flex-col mx-auto flex-grow px-4">
        <h3 className="text-2xl text-center pt-5 font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
          Popular Posts
        </h3>
        <PopularPosts />
      </main>

      <main className="w-full flex pb-10 flex-col mx-auto flex-grow px-4">
        <h3 className="text-2xl text-center pt-5 font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
          Popular Posts
        </h3>
        <PopularPosts />
      </main>
    </div>
  );
};

export default FullBlogPage;
