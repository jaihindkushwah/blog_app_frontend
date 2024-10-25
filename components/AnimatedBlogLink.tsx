"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PenSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const EnhancedAnimatedBlogLink: React.FC = () => {
  const text = "Write-your-first-article";

  const containerVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    initial: { rotate: -45, scale: 0.8 },
    animate: { rotate: 0, scale: 1 },
    hover: {
      rotate: 15,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const letterVariants = {
    initial: { y: 10, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.03,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
    hover: (i: number) => ({
      y: -3,
      transition: {
        delay: i * 0.03,
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    }),
  };

  return (
    <Link href="/create" passHref>
      <motion.div
        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
        variants={containerVariants}
        whileHover="hover"
      >
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <PenSquare className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </motion.div>
        <Button
          variant="ghost"
          className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white bg-transparent hover:bg-transparent p-0"
        >
          {text.split("-").map((char, index) => (
            <motion.span
              key={`${char} - ${index}`}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              custom={index}
              whileHover="hover"
            >
              {char}
              &nbsp;
            </motion.span>
          ))}
        </Button>
      </motion.div>
    </Link>
  );
};

export default EnhancedAnimatedBlogLink;
