"use client";
import React from "react";
import Lottie from "lottie-react";
import bookAnimation from "@/lib/lottie/Animation - 1725955185529.json";
import loaderAnimation from "@/lib/lottie/Animation - 1725955642754.json";
import roundLoading from "@/lib/lottie/RoundLoding.json";
import { cn } from "@/lib/utils";

interface LoaderAnimationProps extends React.ComponentProps<"div"> {
  type?: "book" | "loader" | "roundLoading";
  animationClassName?: string;
  animationStyle?: React.CSSProperties | undefined;
}
const animations = {
  book: bookAnimation,
  loader: loaderAnimation,
  roundLoading: roundLoading,
};

function LoaderAnimation({
  type = "book",
  animationClassName,
  className,
  animationStyle,
  ...props
}: // ...props
LoaderAnimationProps) {
  return (
    <div
      className={cn(["flex h-[90vh] justify-center items-center", className])}
      {...props}
    >
      <Lottie
        animationData={animations[type]}
        className={cn([
          "w-[50%] h-[50%] sm:w-[40%] sm:h-[40%] md:w-[30%] ",
          animationClassName,
        ])}
        loop={true}
        style={animationStyle}
        // {...props}
      />
    </div>
  );
}

export default LoaderAnimation;
