import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface IPopularPostsProps {
  posts?: {
    _id: string;
    title: string;
    excerpt: string;
  }[];
}

export const PopularPosts: React.FC<IPopularPostsProps> = ({ posts }) => {
  return (
    // import Link from 'next/link';

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 px-4">
      {posts?.map((post, index) => (
        <Link key={index} href={`/blog/${post._id}`}>
          <Card className="bg-white dark:bg-slate-800 shadow-md dark:shadow-none hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-lg cursor-pointer">
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
