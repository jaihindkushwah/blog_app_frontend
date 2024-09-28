"use client";
import Image from "next/image";
import Link from "next/link";
import React, { HTMLAttributes, ReactNode } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { signOut, useSession } from "next-auth/react";

export const HamburgerMenuPage = () => {
  const { data: session } = useSession();
  return (
    <HamburgerMenu bgColor={`bg-inherit`} textColor="dark:text-white text-dark">
      <Sheet>
        <span className="flex justify-between items-center">
          <Image
            // src="https://links.papareact.com/a943ae"
            src={"/logo2.jpeg"}
            alt="logo"
            width={1920}
            height={1080}
            className="rounded-sm sm:h-[43px] sm:w-36 h-[36px] w-28 mb-2 z-40"
          />
          <SheetTrigger>
            <span className="text-center text-4xl ">&#8801;</span>
          </SheetTrigger>
        </span>
        <SheetContent side="top">
          <HamburgerMenuNav className="flex flex-col items-center sm:gap-4 gap-2">
            <HamburgerMenuItem>
              <HamburgerMenuLink href="/">Home</HamburgerMenuLink>
            </HamburgerMenuItem>
            <HamburgerMenuItem>
              <HamburgerMenuLink href="/#about">About</HamburgerMenuLink>
            </HamburgerMenuItem>
            <HamburgerMenuItem>
              <HamburgerMenuLink href="/#contact">Contact</HamburgerMenuLink>
            </HamburgerMenuItem>
            {session?.user.name ? (
              <>
                <HamburgerMenuItem>
                  <HamburgerMenuLink href="/pages/protected/profile">
                    Profile
                  </HamburgerMenuLink>
                </HamburgerMenuItem>
                <HamburgerMenuItem>
                  <HamburgerMenuLink href="/pages/protected/dashboard">
                    Dashboard
                  </HamburgerMenuLink>
                </HamburgerMenuItem>
                <HamburgerMenuItem>
                  <HamburgerMenuLink href="#" onClick={() => signOut()}>
                    Logout
                  </HamburgerMenuLink>
                </HamburgerMenuItem>
              </>
            ) : (
              <HamburgerMenuItem>
                <HamburgerMenuLink href="/auth/login">Login</HamburgerMenuLink>
              </HamburgerMenuItem>
            )}
          </HamburgerMenuNav>
        </SheetContent>
      </Sheet>
    </HamburgerMenu>
  );
};

/* Logic */

const style = {
  nav: `  pl-0 mb-0`,
  navbar: ` md:hidden block font-light  py-1 sm:py-2 px-4 z-50`,
  collapse: `transition-height ease-in-out duration-300`,
  toggler: `float-right pt-1.5 text-4xl focus:outline-none focus:shadow`,
  link: `block cursor-pointer sm:text-[16px] py-1.5 px-4  hover:text-gray-400 font-medium `,
  brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400`,
};

interface HamburgerMenuProps extends HTMLAttributes<HTMLElement> {
  bgColor: string;
  textColor: string;
  children: ReactNode;
}
function HamburgerMenu({
  children,
  bgColor,
  textColor,
  ...props
}: HamburgerMenuProps) {
  return (
    <nav className={`${bgColor} ${textColor} ${style.navbar}`} {...props}>
      {children}
    </nav>
  );
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
interface HamburgerMenuBrandProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}
function HamburgerMenuBrand({
  children,
  href,
  ...props
}: HamburgerMenuBrandProps) {
  return (
    <Link href={href} className={style.brand} {...props}>
      <strong>{children}</strong>
    </Link>
  );
}

interface HamburgerMenuCollapseProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  children: ReactNode;
}

interface HamburgerMenuNavProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}
function HamburgerMenuNav({ children, ...props }: HamburgerMenuNavProps) {
  return (
    <ul className={style.nav} {...props}>
      {children}
    </ul>
  );
}

interface HamburgerMenuItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}
function HamburgerMenuItem({ children, ...props }: HamburgerMenuItemProps) {
  return <li {...props}>{children}</li>;
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */

interface HamburgerMenuLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}
function HamburgerMenuLink({
  children,
  href,
  ...props
}: HamburgerMenuLinkProps) {
  return (
    <Link href={href} className={style.link} {...props}>
      {children}
    </Link>
  );
}
