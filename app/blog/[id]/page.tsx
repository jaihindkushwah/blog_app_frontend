"use client";
import { useParams } from "next/navigation";
import React from "react";
// import { useRouter } from 'next/router';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Define types for our blog post content
type BlogPostContent = {
  type: "paragraph" | "heading" | "image";
  content: string;
  level?: 1 | 2 | 3; // For headings
  alt?: string; // For images
};

type BlogPost = {
  id: number;
  title: string;
  author: string;
  date: string;
  content: BlogPostContent[];
};

// Sample blog post data
const blogPost: BlogPost = {
  id: 1,
  title: "The Future of Artificial Intelligence: Opportunities and Challenges",
  author: "Dr. Jane Smith",
  date: "2024-03-25",
  content: [
    {
      type: "paragraph",
      content:
        "Artificial Intelligence (AI) has become an integral part of our daily lives, revolutionizing industries and reshaping the way we interact with technology. As we stand on the brink of a new era, it's crucial to examine both the immense opportunities and the potential challenges that AI presents to society.",
    },
    { type: "heading", level: 2, content: "The Current State of AI" },
    {
      type: "paragraph",
      content:
        "In recent years, we've witnessed remarkable advancements in AI technologies. Machine learning algorithms have become increasingly sophisticated, enabling computers to perform tasks that once seemed impossible. From natural language processing to computer vision, AI systems are now capable of understanding and interpreting complex data with unprecedented accuracy.",
    },
    {
      type: "image",
      content: "/api/placeholder/800/400",
      alt: "AI concept illustration",
    },
    {
      type: "paragraph",
      content:
        "One of the most significant breakthroughs has been in the field of deep learning, a subset of machine learning inspired by the structure and function of the human brain. Deep learning models have achieved human-level performance in various tasks, including image recognition, speech synthesis, and even game playing.",
    },
    { type: "heading", level: 2, content: "Opportunities in AI" },
    {
      type: "paragraph",
      content:
        "The potential applications of AI are vast and far-reaching. In healthcare, AI-powered diagnostic tools are already assisting doctors in detecting diseases earlier and more accurately than ever before. AI algorithms can analyze medical images, patient data, and research papers to provide valuable insights and treatment recommendations.",
    },
    {
      type: "paragraph",
      content:
        "In the field of environmental conservation, AI is being used to monitor and predict climate change patterns, optimize energy consumption, and develop more sustainable practices. Machine learning models can process vast amounts of environmental data to identify trends and suggest targeted interventions.",
    },
    {
      type: "image",
      content: "/api/placeholder/800/400",
      alt: "AI in healthcare illustration",
    },
    {
      type: "paragraph",
      content:
        "The transportation industry is on the verge of a major transformation with the development of autonomous vehicles. AI-driven cars have the potential to reduce accidents, improve traffic flow, and provide mobility solutions for those unable to drive.",
    },
    {
      type: "heading",
      level: 2,
      content: "Challenges and Ethical Considerations",
    },
    {
      type: "paragraph",
      content:
        "While the opportunities presented by AI are exciting, we must also address the challenges and ethical considerations that come with this powerful technology. One of the primary concerns is the potential displacement of jobs due to automation. As AI systems become more capable, many traditional roles may become obsolete, requiring a significant shift in workforce skills and education.",
    },
    {
      type: "paragraph",
      content:
        "Privacy and data security are also major concerns in the age of AI. Machine learning models require vast amounts of data to function effectively, raising questions about data collection, storage, and usage. Ensuring the responsible use of personal information while maintaining the benefits of AI-driven services is a delicate balance that must be struck.",
    },
    {
      type: "image",
      content: "/api/placeholder/800/400",
      alt: "AI ethics illustration",
    },
    {
      type: "paragraph",
      content:
        "Another critical issue is the potential for bias in AI systems. If not carefully designed and trained, AI algorithms can perpetuate and even amplify existing societal biases, leading to unfair or discriminatory outcomes. Addressing this challenge requires diverse teams, careful data curation, and ongoing monitoring of AI systems.",
    },
    { type: "heading", level: 2, content: "The Path Forward" },
    {
      type: "paragraph",
      content:
        "As we navigate the future of AI, it's essential to foster collaboration between technologists, policymakers, ethicists, and the public. Developing robust regulatory frameworks and ethical guidelines for AI development and deployment will be crucial in harnessing the benefits of this technology while mitigating its risks.",
    },
    {
      type: "paragraph",
      content:
        "Education and reskilling initiatives will play a vital role in preparing the workforce for an AI-driven future. Emphasizing skills such as critical thinking, creativity, and emotional intelligence – areas where humans still outperform machines – will be key to adapting to the changing job market.",
    },
    {
      type: "paragraph",
      content:
        "In conclusion, the future of AI holds immense promise for solving some of humanity's most pressing challenges. However, realizing this potential requires careful consideration of the ethical implications and societal impacts of AI. By fostering responsible development and deployment of AI technologies, we can work towards a future where artificial intelligence enhances and empowers human capabilities, rather than replacing them.",
    },
  ],
};

const BlogPostPage: React.FC = () => {
  const router = useParams();
  //   const { id } = router.id;

  // In a real application, you would fetch the blog post data based on the id
  // For this example, we're using the sample data directly

  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Link href="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 text-foreground">
      <main className="w-full mx-auto px-4 py-8 pt-16">
        {/* <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link> */}
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-300">
            {blogPost.title}
          </h1>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            By {blogPost.author} | {blogPost.date}
          </div>
          <div className="prose dark:prose-invert max-w-none">
            {blogPost.content.map((item, index) => {
              switch (item.type) {
                case "paragraph":
                  return (
                    <p key={index} className="mb-4">
                      {item.content}
                    </p>
                  );
                case "heading":
                  const HeadingTag =
                    `h${item.level}` as keyof JSX.IntrinsicElements;
                  return (
                    <HeadingTag
                      key={index}
                      className="mt-6 mb-4 text-blue-600 dark:text-blue-300"
                    >
                      {item.content}
                    </HeadingTag>
                  );
                case "image":
                  return (
                    <div key={index} className="my-6">
                      <Image
                        src={item.content}
                        alt={item.alt || ""}
                        width={800}
                        height={400}
                        layout="responsive"
                        className="rounded-lg"
                      />
                      {item.alt && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                          {item.alt}
                        </p>
                      )}
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPostPage;
