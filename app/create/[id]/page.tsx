"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import RichTextReader from "@/components/RichTextReader";
import axios from "axios";
import { useSession } from "next-auth/react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { useParams, useRouter } from "next/navigation";
import SpinLoader from "@/components/SpinLoader";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

interface BlogPost {
  title: string;
  content: string;
}

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, false] }],
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
  title: string;
  description?: string;
  category?: string;
  _id?: string;
}
function TextEditorDrawerDialog({
  contents,
}: {
  onClick?: () => {};
  contents: BlogPost;
}) {
  const [open, setOpen] = React.useState(false);

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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  let contentId = useParams().id;
  const [post, setPost] = useState<BlogPost>({
    title: "",
    content: "",
    description: "",
    category: "",
    _id: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prev) => ({ ...prev, title: e.target.value }));
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prev) => ({ ...prev, description: e.target.value }));
  };

  const handleContentChange = (content: string) => {
    setPost((prev) => ({ ...prev, content }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post.content) {
      alert("Content is required");
      return;
    }
    try {
      setIsLoading(true);
      const requestData = {
        ...post,
        createdBy: session?.user.id,
        author: session?.user.name,
      };
      const res = await fetch(`/api/protect/content/${contentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      await res.json();
      // console.log(data);
      setIsSubmitted(true);
      setPost({ title: "", content: "", description: "", category: "" });
      alert("Content submitted successfully");
      router.push("/dashboard");
    } catch (error: any) {
      console.log(error);
      alert(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getContent = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/protect/content/" + contentId);
        const data = await response.data;
        // console.log(data);
        setPost(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (contentId) getContent();
    // console.log("contentId ", contentId);
  }, [contentId]);

  useEffect(() => {
    // Add custom styles for Quill editor with fixed toolbar
    const style = document.createElement("style");
    style.textContent = `
      .fixed-toolbar-quill .quill {
        display: flex;
        flex-direction: column;
        height: 100%;
        border-radius:10px
      }
      .fixed-toolbar-quill .ql-toolbar.ql-snow {
        position: sticky;
        top: 0;
        z-index: 1;
        background-color: white;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
      }
      .fixed-toolbar-quill .ql-container.ql-snow {
        flex: 1;
        overflow: auto;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
      }
      .fixed-toolbar-quill .ql-editor {
        min-height: 100%;
      }
      .dark .fixed-toolbar-quill .ql-toolbar.ql-snow {
        background-color: #374151;
        border-color: #4b5563;
      }
      .dark .fixed-toolbar-quill .ql-container.ql-snow {
        background-color: #1f2937;
        border-color: #4b5563;
        color: #e5e7eb;
      }
      .dark .fixed-toolbar-quill .ql-editor.ql-blank::before {
        color: #9ca3af;
      }
      .dark .fixed-toolbar-quill .ql-snow .ql-stroke {
        stroke: #e5e7eb;
      }
      .dark .fixed-toolbar-quill .ql-snow .ql-fill {
        fill: #e5e7eb;
      }
      .dark .fixed-toolbar-quill .ql-picker-label {
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
      {isLoading ? <SpinLoader /> : null}
      <Card className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">
            Edit your Blog Post
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
                htmlFor="Category"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Category
              </label>
              <Select
                required
                value={post.category}
                onValueChange={(value) => {
                  setPost((prev) => ({ ...prev, category: value }));
                }}
              >
                <SelectTrigger className="w-full mt-1 dark:bg-gray-700 dark:text-gray-100">
                  <SelectValue placeholder="Please Select a category" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-700 dark:text-gray-100">
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    <SelectItem value="interview">Job Interview</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="politics">Politics</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="culture">Culture</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="lifestyle">LifeStyle</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Description
              </label>
              <Input
                id="description"
                value={post.description}
                onChange={handleDescriptionChange}
                placeholder="Enter your blog description"
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
              <div className="min-h-[40vh]  max-h-[60vh] fixed-toolbar-quill overflow-scroll">
                <ReactQuill
                  value={post.content}
                  onChange={handleContentChange}
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  placeholder="Write your blog post content here"
                  className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
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
