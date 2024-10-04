// "use client";
// import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// const ReactQuill = dynamic(() => import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading content...</p>,
// });

// import "react-quill/dist/quill.bubble.css";
// import { useEffect } from "react";
interface BlogPost {
  title: string;
  content: string;
}

interface BlogPostReaderProps {
  post: BlogPost;
}

const RichTextReader: React.FC<BlogPostReaderProps> = ({ post }) => {
  // useEffect(() => {
  //   // Add custom styles for Quill editor with fixed toolbar
  //   const style = document.createElement("style");
  //   style.textContent = `
  //     .ql-bubble .ql-editor pre.ql-syntax {
  //         background-color: #c7c8da;
  //         color: black;
  //         overflow: visible;
  //         font-size: 16px;
  //         padding: 20px;
  //         border-radius: 10px;
  //         margin: 25px 20px;
  //     }
  //     .ql-bubble .ql-editor h2{
  //         color: #020817;
  //       font-size: 22px;
  //     }

  //   `;
  //   document.head.appendChild(style);

  //   return () => {
  //     document.head.removeChild(style);
  //   };
  // }, []);
  return (
    <div className=" mx-auto py-4 sm:p-4 border-none">
      <Card className="w-full max-w-3xl mx-auto bg-inherit border-none">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-[Helvetica Neue, Helvetica, Arial, sans-serif]  font-bold text-gray-900 dark:text-gray-100">
            {post?.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            // prose
            className=" 
            dark:prose-indigo 
            prose-p:tracking-wide 
            prose-li:tracking-wide 
            prose-li:text-base 
            prose-li:leading-relaxed 
            prose-p:leading-relaxed
            dark:prose-invert
            prose-h2:text-bold
            prose-h1:text-bold
            prose-pre:text-sm
            prose-p:text-base 
            sm:prose-p:text-lg 
            sm:prose-h1:text-[30px]
            prose-h1:text-[26px]
            sm:prose-h2:text-[24px]
            prose-h2:text-[22px]
            prose-h2:mt-0
            prose
            sm:prose-li:text-lg
            prose-p:my-1
            dark:text-gray-100
            max-w-none
            prose-pre:bg-[#c8c9d1]
            prose-pre:text-black
            prose-pre:text-[16px]
            prose-pre:p-[20px]
            prose-pre:rounded-[10px]
            prose-pre:mx-[25px]
            prose-pre:my-[20px]
          "
          >
            <div dangerouslySetInnerHTML={{ __html: post?.content }}></div>
            {/* <ReactQuill
              value={post.content}
              readOnly={true}
              theme="bubble"
              modules={{ toolbar: false }}
              className="prose-a:text-blue-600 prose-h4:text-xl"
            /> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RichTextReader;
