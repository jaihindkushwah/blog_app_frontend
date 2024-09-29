"use client";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading content...</p>,
});

import "react-quill/dist/quill.bubble.css";
interface BlogPost {
  title: string;
  content: string;
}

interface BlogPostReaderProps {
  post: BlogPost;
}

const RichTextReader: React.FC<BlogPostReaderProps> = ({ post }) => {
  return (
    <div className=" mx-auto p-4">
      <Card className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="dark:prose-invert max-w-none">
            <ReactQuill
              value={post.content}
              readOnly={true}
              theme="bubble"
              modules={{ toolbar: false }}
              className="prose-a:text-blue-600"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RichTextReader;
