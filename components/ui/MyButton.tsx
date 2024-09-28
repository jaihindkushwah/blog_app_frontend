import { cn } from "@/lib/utils/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes, forwardRef, Ref } from "react";

const buttonVariants = cva(
  "active:scale-95 text-center active:duration-75 transition-all ease-in-out dark:bg-inherit ",
  {
    variants: {
      variant: {
        default:
          "dark:bg-black rounded-full flex items-center bg-white bg-slate-900 text-black dark:text-white  text-center dark:hover:bg-blue-800/50 hover:bg-slate-300/80 dark:border-white border-black",
        primary: "bg-sky-500 text-white",
        secondary: "bg-slate-500 text-white",
        danger: "bg-red-500 text-white",
      },
      size: {
        default: "h-12 px-10 py-2 border-2  ",
        sm: "h-10 px-6 py-2 border-[1.5px]",
        lg: "h-14 px-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface NewButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  title?: string;
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, NewButtonProps>(
  (
    { title, variant, className, children, size, ...props },
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {title}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
