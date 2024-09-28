// "use client";
// import React from "react";
// import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
// import { useRouter } from "next/navigation";

const NotFound = () => {
  // const router = useRouter();
  return (
    <div className="flex items-center justify-center h-full  ">
      <div className="max-w-md w-full px-8 py-10  dark:bg-gray-800 shadow-lg rounded-lg text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          404
        </h1>
        <h2 className=" text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <span
          className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
          // onClick={() => router.push("/")}
        >
          <HomeIcon className="mr-2 h-4 w-4" />
          Go back home
        </span>
      </div>
    </div>
  );
};

export default NotFound;
