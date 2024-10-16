import { PopularPosts } from "./PopularPosts";
import SearchPage from "@/components/SearchPage";
import SearchInput from "./SearchInput";
import React from "react";

const posts = [
  {
    _id: "1",
    title: "How to Build Scalable Web Applications",
    excerpt:
      "Discover the key principles for building scalable and resilient web apps...",
  },
  {
    _id: "2",
    title: "Understanding Cloud Computing Basics",
    excerpt:
      "A beginner's guide to understanding the fundamentals of cloud computing...",
  },
  {
    _id: "3",
    title: "Top 5 Design Patterns in JavaScript",
    excerpt:
      "Learn about essential design patterns that improve your JavaScript code...",
  },
  {
    _id: "4",
    title: "The Rise of Quantum Computing",
    excerpt:
      "Quantum computing is closer than you think. Here's what to expect...",
  },
  {
    _id: "5",
    title: "Building a Personal Brand in Tech",
    excerpt:
      "Strategies for creating a standout personal brand in the tech industry...",
  },
  {
    _id: "6",
    title: "Exploring Blockchain Beyond Cryptocurrency",
    excerpt:
      "Dive into the real-world applications of blockchain technology beyond Bitcoin...",
  },
  {
    _id: "7",
    title: "Effective Debugging Techniques in JavaScript",
    excerpt:
      "Master debugging techniques to quickly resolve issues in your JavaScript code...",
  },
  {
    _id: "8",
    title: "A Beginner's Guide to Next.js",
    excerpt:
      "Learn the basics of Next.js and how to build fast, server-rendered web apps...",
  },
  {
    _id: "9",
    title: "5 Must-Know CSS Grid Layout Techniques",
    excerpt: "Get creative with these essential CSS Grid layout techniques...",
  },
];

interface SearchPageProps {
  searchParams: { q: string };
}
const LandingPage: React.FC<SearchPageProps> = ({ searchParams }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-300">
      <section className="relative h-[100vh] pb-32  bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
        {/* <div className="absolute w-[10%] h-[40%] rounded-r-full bg-blue-200 dark:bg-slate-800 bottom-0 left-2 -rotate-45 "></div> */}
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-slate-300">
            Welcome to The Founded.in
          </h1>
          <p className="text-lg sm:text-xl font-medium text-gray-700 dark:text-slate-300 mt-4">
            Discover interesting articles and insights on various topics.
          </p>

          <div
            className={`w-full border-gray-300
              bg-[#fdfdfd]
           dark:bg-[#202020] ${
             searchParams.q ? "rounded-t-full" : "rounded-full"
           } shadow-sm  
          flex flex-col items-center max-w-md md:max-w-lg mx-auto
           mt-8 lg:mt-10`}
          >
            <SearchInput />
            {searchParams.q ? (
              <div className="relative w-full top-0 rounded-b-full flex bg-inherit justify-center">
                <SearchPage
                  className="absolute w-full top-0 max-h-[320px] bg-inherit rounded-b-2xl pb-4  overflow-y-scroll"
                  searchParams={searchParams}
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* <main className="w-full flex pb-10 flex-col mx-auto flex-grow px-4 dark:border-t-0 border border-t-[#dcdbd9]">
        <span className="text-2xl text-center pt-5 font-semibold mb-2 text-indigo-900 dark:text-indigo-100">
          Popular Blogs for Tech Enthusiasts
        </span>
        <PopularPosts posts={posts} />
      </main> */}
    </div>
  );
};

export default LandingPage;
