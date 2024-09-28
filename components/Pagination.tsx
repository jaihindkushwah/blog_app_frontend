"use client";
import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationButton,
  PaginationNextButton,
  PaginationPreviousButton,
} from "@/components/ui/pagination";

interface PaginationProps {
  defaultPage?: number | null;
  totalPages: number;
  range?: number;
  onChange?: (num: number) => void;
}
const PaginationComponent = ({
  defaultPage = 1,
  totalPages,
  range = 3,
  onChange,
}: PaginationProps) => {
  // const totalPages = 20;

  // console.log("currentPage range", range);
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const [visibleRange, setVisibleRange] = useState({ start: 1, end: range });

  const getPageNumbers = () => {
    const pageNumbers = [];
    const { start, end } = visibleRange;

    if (start > 1) {
      pageNumbers.push(1);
      if (start > 2) pageNumbers.push("Left");
    }

    for (let i = start; i <= Math.min(end, totalPages); i++) {
      pageNumbers.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pageNumbers.push("Right");
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const handlePageChange = (page: any) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      updateVisibleRange(page);
      onChange && onChange(page);
    }
  };

  const updateVisibleRange = (page: any) => {
    let start = Math.max(1, page - (range - 1));
    let end = Math.min(totalPages, start + range - 1);
    start = Math.max(1, end - (range - 1));
    setVisibleRange({ start, end });
  };

  const handleEllipsisClick = (direction: any) => {
    if (direction === "start") {
      const newStart = Math.max(1, visibleRange.start - range);
      setVisibleRange({ start: newStart, end: newStart + range - 1 });
      handlePageChange(newStart + range - 1);
    } else {
      const newEnd = Math.min(totalPages, visibleRange.end + range);
      setVisibleRange({ start: newEnd - (range - 1), end: newEnd });
      handlePageChange(newEnd);
    }
  };
  useEffect(() => {
    setCurrentPage(defaultPage);
  }, [defaultPage]);

  return (
    <Pagination>
      <PaginationContent>
        {/* <PaginationItem>
          <PaginationPreviousButton
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem> */}
        {getPageNumbers().map((page, index) => (
          <PaginationItem key={index}>
            {page === "Left" || page === "Right" ? (
              <PaginationEllipsis
                className="cursor-pointer"
                dir={page}
                onClick={() =>
                  handleEllipsisClick(page === "Left" ? "start" : "end")
                }
              />
            ) : (
              <PaginationButton
                onClick={() => handlePageChange(page)}
                isActive={currentPage === page}
              >
                {page}
              </PaginationButton>
            )}
          </PaginationItem>
        ))}
        {/* <PaginationItem>
          <PaginationNextButton
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationItem> */}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
