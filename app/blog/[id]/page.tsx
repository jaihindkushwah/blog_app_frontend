// "use client";
// import { useParams } from "next/navigation";
import React from "react";
// import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import RichTextReader from "@/components/RichTextReader";

// Define types for our blog post content

type BlogPost = {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
};

const samplePost: BlogPost = {
  id: 1,
  title: "The Future of Artificial Intelligence: Opportunities and Challenges",
  author: "Dr. Jane Smith",
  date: "2024-03-25",
  content: `
<h3><strong>Quill Rich Text Editor</strong></h3>
<p>
    <br>
</p>
<h3>Quill is a free,
    <a href="https://github.com/quilljs/quill/" target="_blank">open-source</a>WYSIWYG editor built for the modern web. With its
    <a href="http://quilljs.com/docs/modules/" target="_blank">extensible architecture</a>and an
    <a href="http://quilljs.com/docs/api/" target="_blank">expressive API</a>, you can customize it to fulfill your needs. Some built-in features include:</h3>
<p>
    <br>
</p>
<ul>
    <li>
        <span style="color: rgb(230, 0, 0);">Fast and lightweight</span>
    </li>
    <li>
        <span style="font-size: 18px;">Semantic markup</span>
    </li>
    <li>
        <span style="font-size: 18px;">Standardized HTML between browsers</span>
    </li>
    <li>
        <span style="font-size: 18px;">Cross-browser support including Chrome, Firefox, Safari, and IE 9+</span>
    </li>
</ul>
<p>
    <br>
</p>
<h3>Downloads</h3>
<p>
    <br>
</p>
<ol>
    <li>
        <a href="https://quilljs.com/" target="_blank">Quill.js</a>, the free, open-source WYSIWYG editor</li>
    <li>
        <a href="https://zenoamaro.github.io/react-quill" target="_blank">React-quill</a>, a React component that wraps Quill.js</li>
    <li>
        <br>
    </li>
</ol>`,
};

interface Props {
  params: { id: string };
}
const BlogPostPage: React.FC<Props> = ({ params }) => {
  // const router = useParams();
  const { id } = params;
  console.log(id);
  // In a real application, you would fetch the blog post data based on the id
  // For this example, we're using the sample data directly

  if (!samplePost) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className=" min-h-[90vh] bg-gradient-to-br from-gray-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 text-foreground">
      <main className="w-full mx-auto px-4 py-8 pt-16 ">
        <h1>{id}</h1>
        <RichTextReader post={samplePost} />
      </main>
    </div>
  );
};

export default BlogPostPage;
