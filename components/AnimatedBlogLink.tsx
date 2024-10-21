"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PenIcon } from "lucide-react";

const AnimatedBlogLink: React.FC = () => {
  const text = "Write down your first article";

  const sentence = {
    animate: {
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  const letter = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: [0, 1, 1, 0],
      y: [50, 0, 0, -50],
      transition: {
        times: [0, 0.3, 0.7, 1],
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  return (
    <div className="flex flex-col items-center space-y-4 mt-10">
      <Link href="/create" passHref>
        <div className="flex items-center space-x-2 group">
          <PenIcon className="w-4 h-4 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300" />
          <motion.div
            className="inline-block text-xl font-handwriting text-blue-800 dark:text-blue-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300 cursor-pointer"
            variants={sentence}
            animate="animate"
          >
            {text.split("").map((char, index) => (
              <motion.span key={`${char}-${index}`} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </Link>
    </div>
  );
};

export default AnimatedBlogLink;
