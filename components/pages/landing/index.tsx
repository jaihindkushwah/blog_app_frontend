// "use client";
// import Reactfrom "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
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
  {
    _id: "10",
    title: "How to Get Started with Node.js",
    excerpt:
      "Everything you need to know to begin your journey with Node.js...",
  },
  {
    _id: "11",
    title: "Top 10 Project Management Tools for Developers",
    excerpt:
      "Discover the best tools to manage your software development projects...",
  },
  {
    _id: "12",
    title: "Understanding RESTful APIs",
    excerpt:
      "A comprehensive introduction to RESTful APIs and how they work...",
  },
  {
    _id: "13",
    title: "How to Create a Portfolio Website",
    excerpt:
      "Showcase your work and skills with an impressive portfolio website...",
  },
  {
    _id: "14",
    title: "Introduction to Machine Learning Algorithms",
    excerpt:
      "Learn about the most popular machine learning algorithms and their use cases...",
  },
  {
    _id: "15",
    title: "Optimizing Web Performance for SEO",
    excerpt:
      "Techniques to boost your website's performance and improve its SEO ranking...",
  },
  {
    _id: "16",
    title: "Building Cross-Platform Apps with React Native",
    excerpt:
      "Learn how to build efficient cross-platform apps using React Native...",
  },
  {
    _id: "17",
    title: "The Importance of Cybersecurity in 2024",
    excerpt:
      "Explore why cybersecurity is more critical than ever in the digital age...",
  },
  {
    _id: "18",
    title: "Introduction to Serverless Architecture",
    excerpt:
      "Discover how serverless architecture can transform your web development process...",
  },
  {
    _id: "19",
    title: "Getting Started with Docker",
    excerpt:
      "Learn how to use Docker to simplify the deployment of applications...",
  },
  {
    _id: "20",
    title: "The Benefits of TypeScript for JavaScript Developers",
    excerpt:
      "Why TypeScript is becoming the go-to language for building scalable applications...",
  },
  {
    _id: "21",
    title: "How to Write Clean Code in Any Language",
    excerpt:
      "Learn the principles of clean code and how to apply them in your projects...",
  },
];

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
  return (
    // import Link from 'next/link';

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 px-4">
      {posts.map((post, index) => (
        <Link key={index} href={`/blog/${post._id}`}>
          <Card className="bg-white dark:bg-slate-900 shadow-md dark:shadow-none hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-lg cursor-pointer">
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

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300">
      <HeroSection />
      <main className="w-full flex pb-10 flex-col mx-auto flex-grow px-4">
        <h3 className="text-2xl text-center pt-5 font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
          Trending Posts
        </h3>
        <PopularPosts />
      </main>
    </div>
  );
};

export default LandingPage;
