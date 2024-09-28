import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function CodeRunSkeleton() {
  return (
    <div className="w-full flex flex-col gap-2 h-full items-center justify-center p-6">
      <Skeleton className="w-full h-[20px] rounded-full" />
      <Skeleton className="w-full h-[20px] rounded-full" />
      <Skeleton className="w-full h-[20px] rounded-full" />
    </div>
  );
}

export default CodeRunSkeleton;
