"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import Link from "next/link"; // Import Link from Next.js

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const ref = useRef<HTMLElement>(null);

  // State to manage which link is hovered
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isSubMenuHovered, setIsSubMenuHovered] = useState(false); // State to track if sub-menu is hovered

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.scrollY > 10) {
          ref.current.className =
            "z-50 top-0 left-0 fixed right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm transition-colors duration-300";
        } else {
          ref.current.className = "z-50 top-0 left-0 fixed right-0 ";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle mouse entering and leaving sub-menus
  const handleMouseEnterSubMenu = () => {
    setIsSubMenuHovered(true);
  };

  const handleMouseLeaveSubMenu = () => {
    setIsSubMenuHovered(false);
    setHoveredLink(null);
  };

  return (
    <nav ref={ref} className="z-50 top-0 left-0 fixed right-0">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <Link href="/" passHref>
            <h1 className="text-2xl font-bold">The Founded.in</h1>
          </Link>
          <div className="hidden md:flex space-x-4 relative">
            {/* Home Link with Sub-links */}
            <div
              onMouseEnter={() => setHoveredLink("home")}
              onMouseLeave={handleMouseLeaveSubMenu}
              className="relative"
            >
              {hoveredLink === "home" && (
                <div
                  className="absolute left-0 mt-2 bg-white shadow-md p-2 rounded"
                  onMouseEnter={handleMouseEnterSubMenu}
                  onMouseLeave={handleMouseLeaveSubMenu}
                >
                  <Link href="/home/subpage1" passHref>
                    <span className="block dark:text-gray-400 text-gray-700 hover:text-blue-600">
                      Subpage 1
                    </span>
                  </Link>
                  <Link href="/home/subpage2" passHref>
                    <span className="block dark:text-gray-400 text-gray-700 hover:text-blue-600">
                      Subpage 2
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* Categories Link with Sub-links */}
            <div
              onMouseEnter={() => setHoveredLink("categories")}
              onMouseLeave={handleMouseLeaveSubMenu}
              className="relative"
            >
              <Link href="/categories" passHref>
                <span className="dark:text-gray-400 text-gray-700 hover:text-blue-600">
                  Categories
                </span>
              </Link>
              {hoveredLink === "categories" && (
                <div
                  className="absolute left-0 mt-2 bg-white shadow-md p-2 rounded"
                  onMouseEnter={handleMouseEnterSubMenu}
                  onMouseLeave={handleMouseLeaveSubMenu}
                >
                  <Link href="/categories/category1" passHref>
                    <span className="block dark:text-gray-400 text-gray-700 hover:text-blue-600">
                      Category 1
                    </span>
                  </Link>
                  <Link href="/categories/category2" passHref>
                    <span className="block dark:text-gray-400 text-gray-700 hover:text-blue-600">
                      Category 2
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* About Link with Sub-links */}
            <div
              onMouseEnter={() => setHoveredLink("about")}
              onMouseLeave={handleMouseLeaveSubMenu}
              className="relative"
            >
              <Link href="/about" passHref>
                <span className="dark:text-gray-400 text-gray-700 hover:text-blue-600">
                  About
                </span>
              </Link>
              {hoveredLink === "about" && (
                <div
                  className="absolute left-0 mt-2 bg-white shadow-md p-2 rounded"
                  onMouseEnter={handleMouseEnterSubMenu}
                  onMouseLeave={handleMouseLeaveSubMenu}
                >
                  <Link href="/about/team" passHref>
                    <span className="block dark:text-gray-400 text-gray-700 hover:text-blue-600">
                      Team
                    </span>
                  </Link>
                  <Link href="/about/history" passHref>
                    <span className="block dark:text-gray-400 text-gray-700 hover:text-blue-600">
                      History
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* Contact Link with Sub-links */}
            <div
              onMouseEnter={() => setHoveredLink("contact")}
              onMouseLeave={handleMouseLeaveSubMenu}
              className="relative"
            >
              <Link href="/contact" passHref>
                <span className="dark:text-gray-400 text-gray-700 hover:text-blue-600">
                  Contact
                </span>
              </Link>
              {hoveredLink === "contact" && (
                <div
                  className="absolute left-0 mt-2 bg-white shadow-md p-2 rounded"
                  onMouseEnter={handleMouseEnterSubMenu}
                  onMouseLeave={handleMouseLeaveSubMenu}
                >
                  <Link href="/contact/support" passHref>
                    <span className="block dark:text-gray-400 text-gray-700 hover:text-blue-600">
                      Support
                    </span>
                  </Link>
                  <Link href="/contact/faq" passHref>
                    <span className="block dark:text-gray-400 text-gray-700 hover:text-blue-600">
                      FAQ
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* Login Button */}
          <Link href="/login" passHref>
            <Button variant="ghost">Login</Button>
          </Link>
          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </div>
      </div>
    </nav>
  );
};
