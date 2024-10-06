import { Separator } from "@radix-ui/react-separator";
import { Facebook, Twitter, Instagram, Rss } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="dark:bg-gray-800/50 bg-gray-800 text-gray-200 py-8 pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              The Founded.in is dedicated to sharing insights and knowledge on
              various topics.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" passHref>
                  <span className="text-sm hover:underline">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/categories" passHref>
                  <span className="text-sm hover:underline">Categories</span>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <span className="text-sm hover:underline">About</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <span className="text-sm hover:underline">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/technology" passHref>
                  <span className="text-sm hover:underline">Technology</span>
                </Link>
              </li>
              <li>
                <Link href="/categories/education" passHref>
                  <span className="text-sm hover:underline">Education</span>
                </Link>
              </li>
              <li>
                <Link href="/categories/lifestyle" passHref>
                  <span className="text-sm hover:underline">Lifestyle</span>
                </Link>
              </li>
              <li>
                <Link href="/categories/travel" passHref>
                  <span className="text-sm hover:underline">Travel</span>
                </Link>
              </li>
              <li>
                <Link href="/categories/food" passHref>
                  <span className="text-sm hover:underline">Food</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" passHref>
                <span className="text-gray-400 hover:text-white">
                  <Facebook size={20} />
                </span>
              </Link>
              <Link href="https://twitter.com" passHref>
                <span className="text-gray-400 hover:text-white">
                  <Twitter size={20} />
                </span>
              </Link>
              <Link href="https://instagram.com" passHref>
                <span className="text-gray-400 hover:text-white">
                  <Instagram size={20} />
                </span>
              </Link>
              <Link href="/rss-feed" passHref>
                <span className="text-gray-400 hover:text-white">
                  <Rss size={20} />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} The Founded.in. All rights
            reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" passHref>
              <span className="text-sm hover:underline">Privacy Policy</span>
            </Link>
            <Link href="/terms-of-service" passHref>
              <span className="text-sm hover:underline">Terms of Service</span>
            </Link>
          </div>
          <Separator className="my-4 bg-gray-700" />
          <div>
            <p className="text-slate-400 text-start text-sm">
              <span className="font-semibold text-white text-base ">
                Disclaimer:{" "}
              </span>
              The content on this blog is provided for informational purposes
              only and reflects the opinions of the authors. We do not guarantee
              the accuracy, reliability, or completeness of any information. Any
              matching functionality within the site is for user convenience
              only and should not be considered as professional advice or
              recommendations. External links provided are not endorsed, and we
              are not responsible for the content of any linked sites. Use of
              this site and its features is at your own risk. By using this
              site, you agree to this disclaimer and the terms of service.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
