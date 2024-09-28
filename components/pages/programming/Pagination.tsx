"use client";
import PaginationComponent from "@/components/Pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo } from "react";

interface IPaginationProps {
  currentPage?: number;
  totalPages?: number;
  totalProblems?: number;
}
function Pagination({ totalPages, currentPage }: IPaginationProps) {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  // const [totalPage, setTotalPages] = React.useState(0);
  const handlePageChange = (value: number) => {
    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("page", value + "");
    router.push(path + "?" + updatedSearchParams.toString());
  };

  if (totalPages && totalPages <= 1) return null;
  return (
    // <div>
    <PaginationComponent
      totalPages={totalPages || 0}
      defaultPage={currentPage}
      onChange={handlePageChange}
      // range={totalPages && totalPages < 3 ? totalPages : 3}
    />
    // </div>
  );
}

export default Pagination;
