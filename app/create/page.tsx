"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RichTextReader from "@/components/RichTextReader";
// import BlogPostReader from "./TextReader";
// Dynamically import react-quill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

// import "react-quill/dist/quill.snow.css";
// import { RichTextReader } from "@/components/TextEditor";

interface BlogPost {
  title: string;
  content: string;
}

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "code-block"],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ direction: "rtl" }],
    // ["formula"],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ align: [] }],
    ["clean"],
  ],
};

const formats = [
  "font",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "code-block",
  "script",
  "direction",
  "color",
  "background",
  "align",
  "clean",
  //   "formula",
];

interface BlogPost {
  content: string;
}
function TextEditorDrawerDialog({
  contents,
}: {
  onClick?: () => {};
  contents: BlogPost;
}) {
  const [open, setOpen] = React.useState(false);
  //   useEffect(() => {
  //     // Add custom styles for Quill editor in read-only mode
  //     const style = document.createElement("style");
  //     style.textContent = `
  //       .ql-editor {
  //         padding: 0;
  //       }
  //       .ql-editor h1, .ql-editor h2, .ql-editor h3 {
  //         margin-top: 1em;
  //         margin-bottom: 0.5em;
  //       }
  //       .ql-editor p {
  //         margin-bottom: 1em;
  //       }
  //       .ql-editor ul, .ql-editor ol {
  //         padding-left: 1.5em;
  //         margin-bottom: 1em;
  //       }
  //       .ql-editor.ql-blank::before {
  //         color: inherit;
  //         opacity: 0.6;
  //       }
  //       .dark .ql-editor {
  //         color: #e5e7eb;
  //       }
  //       .dark .ql-editor h1, .dark .ql-editor h2, .dark .ql-editor h3 {
  //         color: #f3f4f6;
  //       }
  //       .dark .ql-editor a {
  //         color: #60a5fa;
  //       }
  //       .dark .ql-editor blockquote {
  //         border-left-color: #4b5563;
  //       }
  //     `;
  //     document.head.appendChild(style);

  //     return () => {
  //       document.head.removeChild(style);
  //     };
  //   }, []);
  return (
    <Dialog modal={false} open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="w-full   bg-[#bd1e59] dark:hover:bg-[#e0457e] text-white dark:bg-[#bd1e59] hover:bg-pink-800 mt-4"
        >
          Preview
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[840px] max-h-screen overflow-scroll">
        <DialogHeader></DialogHeader>
        <div className="relative">
          <RichTextReader post={contents} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

const BlogWritingPage: React.FC = () => {
  const [post, setPost] = useState<BlogPost>({ title: "", content: "" });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleContentChange = (content: string) => {
    console.log(content);
    setPost((prev) => ({ ...prev, content }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    // console.log(post);
    setIsSubmitted(true);
    // Reset form
    setPost({ title: "", content: "" });
  };

  useEffect(() => {
    // Add custom styles for Quill editor
    const style = document.createElement("style");
    style.textContent = `
      .ql-toolbar.ql-snow {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
      }
      .ql-container.ql-snow {
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
      }
      .dark .ql-toolbar.ql-snow,
      .dark .ql-container.ql-snow {
        border-color: #4b5563;
      }
      .dark .ql-toolbar.ql-snow {
        background-color: #374151;
      }
      .dark .ql-container.ql-snow {
        background-color: #1f2937;
        color: #e5e7eb;
      }
      .dark .ql-editor.ql-blank::before {
        color: #9ca3af;
      }
      .dark .ql-snow .ql-stroke {
        stroke: #e5e7eb;
      }
      .dark .ql-snow .ql-fill {
        fill: #e5e7eb;
      }
      .dark .ql-picker-label {
        color: #e5e7eb;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16 p-4">
      {/* <TextEditorDrawerDialog contents={post.content} /> */}
      <Card className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">
            Write a New Blog Post
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Title
              </label>
              <Input
                id="title"
                value={post.title}
                onChange={handleTitleChange}
                placeholder="Enter your blog post title"
                required
                className="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Content
              </label>
              <div className="min-h-[50vh] rounded-lg overflow-hidden">
                <ReactQuill
                  value={post.content}
                  onChange={handleContentChange}
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  placeholder="Write your blog post content here"
                  className=" bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <TextEditorDrawerDialog contents={post} />
              <Button
                type="submit"
                className="w-full  bg-[#bd1e59] dark:hover:bg-[#e0457e] text-white dark:bg-[#bd1e59] hover:bg-pink-800 mt-4"
              >
                Publish Post
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      {isSubmitted && (
        <Alert variant="default" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your blog post has been submitted successfully!
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default BlogWritingPage;
