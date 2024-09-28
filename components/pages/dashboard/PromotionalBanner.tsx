"use client";
import { IconX } from "@tabler/icons-react";
import React, { useState } from "react";

function PromotionalBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="h-10 bg-violet-500 flex item-center justify-center">
      <div className="h-full w-full flex items-center justify-center">
        Offers and Promotions will be here soon
      </div>
      <button onClick={() => setOpen(false)} className="w-fit mr-2 ml-2 ">
        <IconX className="transform hover:rotate-90 hover:text-blue-700 duration-300" />
      </button>
    </div>
  );
}

export default PromotionalBanner;
