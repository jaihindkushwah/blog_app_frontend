"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button, buttonVariants } from "./button";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const darkModeToggleVariants = cva("", {
  variants: {
    fixed: {
      default: "fixed bottom-1 right-1 md:hidden z-50",
      "top-right": "fixed top-1 right-1",
      "top-left": "fixed top-1 left-1",
      "bottom-right": "fixed bottom-1 right-1 ",
      "bottom-left": "fixed bottom-1 left-1",
      "top-center": "fixed top-1 left-1/2 -translate-x-1/2",
      "bottom-center": "fixed bottom-1 left-1/2 -translate-x-1/2",
    },
  },
});
interface DarkModeToggleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof darkModeToggleVariants> {
  buttonClassName?: string;
  iconClassName?: string;
}

// className={
//   isFixedBottom
//     ? "fixed bottom-1 right-1 "
//     : "fixed bottom-1 right-1 md:hidden"
// }
export function DarkModeToggle({
  fixed,
  className,
  buttonClassName,
  iconClassName,
}: DarkModeToggleProps) {
  const { setTheme } = useTheme();

  return (
    <div className={cn(darkModeToggleVariants({ fixed, className }))}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className={cn(["rounded-full", buttonClassName])}
          >
            <SunIcon
              className={cn([
                "h-[1.2rem] w-[1.2rem] rounded-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
                iconClassName,
              ])}
            />
            <MoonIcon
              className={cn([
                "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
                iconClassName,
              ])}
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
