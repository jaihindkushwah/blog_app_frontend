import Link from "next/link";
import { CalendarDays, ChevronsRight, Clock, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

// const post = {
//   _id: "1",
//   titleId: "react-tailwind-card-design",
//   title: "Mastering Card Design with React and Tailwind CSS",
//   description:
//     "Dive into the world of modern UI design as we explore how to create stunning, responsive card layouts using React components and the utility-first approach of Tailwind CSS. This comprehensive guide covers everything from basic structure to advanced styling techniques, ensuring your cards stand out in both light and dark modes.",
//   createdAt: new Date().toISOString(),
//   readTime: "7 min read",
//   author: "Alex Johnson",
//   tags: ["React", "Tailwind CSS", "UI/UX", "Dark Mode"],
//   imageUrl: "/placeholder.svg?height=400&width=600",
// };
interface Props {
  className?: string;
  post: {
    _id: string;
    titleId: string;
    title: string;
    description: string;
    createdAt: string;
    readTime?: string;
    author?: string;
    tags?: string[];
    imageUrl?: string;
  };
}

export default function BlogPostCard({ post }: Props) {
  // Dummy data for testing

  return (
    <div className="max-w-3.5xl mx-auto">
      <Link
        href={`/${post.titleId}`}
        className="block transition-transform duration-200 hover:scale-[1.02]"
      >
        <Card className="overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative px-2 py-1 ">
              <Image
                src={post?.imageUrl || "/app/opengraph-image.png"}
                alt={post.title}
                width={600}
                height={400}
                // loading="lazy"
                priority
                sizes="fill"
                // fill
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col justify-between md:w-3/5 p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {post.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 mb-3">
                  {post?.tags?.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="sm:text-lg text-base text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className="p-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <span className="flex items-center gap-1">
                    <CalendarDays
                      size={16}
                      className="text-blue-500 dark:text-blue-400"
                    />
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock
                      size={16}
                      className="text-blue-500 dark:text-blue-400"
                    />
                    <span>{post.readTime || "5 min read"}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <User
                      size={16}
                      className="text-blue-500 dark:text-blue-400"
                    />
                    <span>{post.author}</span>
                  </span>
                </div>
                <button className="text-blue-500 hover:underline">
                  <div
                    className="flex gap-1 items-center"
                    aria-label="Animated waving right-pointing chevrons"
                  >
                    Read more
                    <ChevronsRight
                      className={`w-6 h-6 text-blue-600 animate-wave-left-to-right`}
                      style={{
                        animationDelay: `${0.1}s`,
                      }}
                    />
                  </div>
                </button>
              </CardFooter>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
}
