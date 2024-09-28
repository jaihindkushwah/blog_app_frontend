"use client";
import React, { useState } from "react";
// import { motion } from "framer-motion";
import CustomSidebarLink from "./CustomSidebarLink";

import { Sidebar, SidebarBody } from "@/components/ui/sidebar";
import Link from "next/link";
import Logo from "@/components/Logo";
export function DashboardSidebar() {
  const [open, setOpen] = useState(false);
  return (
    <Sidebar open={open} animate={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10 dark:bg-[#040656]">
        <div className="flex flex-col flex-1 overflow-y-scroll overflow-x-hidden p-2 pr-4">
          <span className="md:block hidden">
            <Logo />
          </span>
          <CustomSidebarLink />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

// export const LogoIcon = () => {
//   return (
//     <Link
//       href="#"
//       className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
//     >
//       <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
//     </Link>
//   );
// };

// Dummy dashboard component with content
