import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join The Founded.In - Create Your Account and Share Your Voice",
  // the founded is a blog site
  description:
    "Become a part of The Founded.In community! Create your account, share your thoughts, and connect with like-minded individuals. Join us today to explore insightful articles and contribute your ideas.",
};

// import { Navbar } from "@/components/Navbar";
export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
