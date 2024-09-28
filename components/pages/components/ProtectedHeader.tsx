"use client";
// import { buttonVariants } from "@/components/ui/button";
// import useLogout from "@/hooks/useLogout";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { useSelector } from "react-redux";
// import { getAuthState } from "@/store/auth";
import { getAvatarFallbackName } from "@/lib/getAvatarFallbackName";
import { DarkModeToggle } from "@/components/ui/DarkModeToggleButton";
import { useSession, signOut } from "next-auth/react";
import Logo from "@/components/Logo";

export function ProfileAvatar() {
  // const { profile } = useSelector(getAuthState);
  const { data: session } = useSession();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="w-12 h-12 border">
            <AvatarImage src={session?.user.avatar} alt={session?.user?.name} />
            <AvatarFallback>
              {getAvatarFallbackName(session?.user.name)}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-1">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/pages/protected/profile">
            <DropdownMenuItem className="cursor-pointer">
              Profile
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem className="cursor-pointer">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Team</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Subscription
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

function ProtectedHeader() {
  return (
    <header className="flex gap-4 items-center md:justify-end justify-between  p-3 ">
      <span className="md:hidden block">
        <Logo />
      </span>
      <span className="flex gap-4 items-center justify-end  p-3">
        <DarkModeToggle />
        <ProfileAvatar />
      </span>
    </header>
  );
}

export default ProtectedHeader;
