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
    <div className=" mx-auto py-4 sm:p-4 border-none">
      <Card className="w-full max-w-4xl mx-auto bg-inherit border-none">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-[Helvetica Neue, Helvetica, Arial, sans-serif]  font-bold text-gray-900 dark:text-gray-100">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            // prose
            className=" 
            dark:prose-indigo 
            prose-p:tracking-wide 
            prose-li:tracking-wide prose-p:text-base 
            prose-li:text-sm prose-li:leading-relaxed 
            prose-p:leading-relaxed
            dark:prose-invert
            prose-h5:text-bold
            prose-h4:text-bold
            prose-h3:text-bold
            prose-h2:text-bold
            prose-h1:text-bold
            prose-pre:text-sm 
            prose-pre:my-1
             prose-p:my-1
             prose-p:mb-2
             dark:text-gray-100
           max-w-none 
          "
          >
            <ReactQuill
              value={post.content}
              readOnly={true}
              theme="bubble"
              modules={{ toolbar: false }}
              className="prose-a:text-blue-600 prose-h4:text-xl"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RichTextReader;
