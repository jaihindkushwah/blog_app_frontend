import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to The Founded.In - Access Your Account and Share Ideas",
  // the founded is a blog site
  description:
    "Welcome back to The Founded.In! Log in to your account to share your insights, connect with others, and explore engaging content tailored to your interests.",

  openGraph: {
    title: "Login to The Founded.In - Access Your Account and Share Ideas",
    description:
      "Welcome back to The Founded.In! Log in to your account to share your insights, connect with others, and explore engaging content tailored to your interests.",
    url: "https://thefounded.in/login",
  },
  alternates: {
    canonical: `https://thefounded.in/login`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// import { Navbar } from "@/components/Navbar";
export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
