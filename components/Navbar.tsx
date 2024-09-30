"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import Link from "next/link"; // Import Link from Next.js
import { HamburgerMenuPage } from "./HumbergerMenu";
import NavbarMenu from "./NavbarMenu";
import { signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();
  const ref = useRef<HTMLElement>(null);

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

  return (
    <nav ref={ref} className="z-50 top-0 left-0 fixed right-0">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <Link href="/" passHref>
            <h1 className="text-xl sm:text-2xl font-bold">The Founded.in</h1>
          </Link>

          <div className="hidden md:flex space-x-4 relative">
            {/* Home Link with Sub-links */}
            <NavbarMenu />
          </div>
        </div>
        <div className=" flex items-center space-x-2">
          {session?.user.id ? (
            <>
              {session?.user.role === "creator" ? (
                <Link className="sm:block hidden" href="/create" passHref>
                  <Button variant="ghost">Profile</Button>
                </Link>
              ) : null}
              <Button
                className="sm:block hidden"
                variant="ghost"
                onClick={() => signOut()}
              >
                Logout
              </Button>
            </>
          ) : (
            <Link href="/login" passHref>
              <Button variant="ghost">Login</Button>
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <HamburgerMenuPage />
        </div>
      </div>
    </nav>
  );
};
