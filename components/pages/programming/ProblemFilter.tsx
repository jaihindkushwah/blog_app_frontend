"use client";
import React, { useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
// import { useRouter } from "next/router";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IFilterCheckboxProps extends React.ComponentProps<typeof Checkbox> {
  title: string;
}
const FilerCheckbox: React.FC<IFilterCheckboxProps> = ({ title, ...props }) => {
  return (
    <span className="flex gap-2 items-center">
      <Checkbox {...props} />
      <p>{title}</p>
    </span>
  );
};

function ProblemFilter() {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const handleFilter = useCallback(
    (key: string, value: string, checked: boolean | string) => {
      // setStatus({ ...status, [key]: value });
      const updatedSearchParams = new URLSearchParams(searchParams.toString());
      const status1 = updatedSearchParams.get(key)?.split(",") || [];
      // ['solved']
      const newStatus = status1.filter((item) => value != item);
      if (checked) {
        newStatus.push(value);
      }
      if (newStatus.length > 0) {
        updatedSearchParams.set(key, newStatus.join(","));
      } else {
        updatedSearchParams.delete(key);
      }
      updatedSearchParams.set("page", "1");
      let newFilter = path + "?" + updatedSearchParams.toString();
      // console.log(newFilter);
      router.push(newFilter);
      //   console.log(newStatus);
    },
    [path, router, searchParams]
  );
  const handleCheckboxCheck = useCallback(
    (key: string, value: string) => {
      const updatedSearchParams = new URLSearchParams(searchParams.toString());
      const status = updatedSearchParams.get(key)?.split(",");
      //   console.log(status);
      if (status && status.includes(value)) {
        return true;
      }
      return false;
    },
    [searchParams]
  );

  return (
    <div className=" ml-3 relative max-w-[330px] w-full  sm:block hidden">
      <div className="pb-2 flex flex-col p-5  gap-3 items-center sticky top-0 right-0">
        <Card className="w-fit mt-3 pt-5 ">
          {/* <CardHeader></CardHeader> */}
          <CardContent className="min-h-[300px] ">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg">Status</p>
              <FilerCheckbox
                checked={handleCheckboxCheck("status", "solved")}
                onCheckedChange={(e) => {
                  handleFilter("status", "solved", e);
                }}
                title="Solved"
              />
              <FilerCheckbox
                checked={handleCheckboxCheck("status", "unsolved")}
                onCheckedChange={(e) => {
                  handleFilter("status", "unsolved", e);
                }}
                title="Unsolved"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <p className="font-bold text-lg ">Difficulty</p>
              <FilerCheckbox
                onCheckedChange={(e) => {
                  handleFilter("difficulty", "Easy", e);
                }}
                checked={handleCheckboxCheck("difficulty", "Easy")}
                title="Easy"
              />
              <FilerCheckbox
                onCheckedChange={(e) => {
                  handleFilter("difficulty", "Medium", e);
                }}
                checked={handleCheckboxCheck("difficulty", "Medium")}
                title="Medium"
              />
              <FilerCheckbox
                checked={handleCheckboxCheck("difficulty", "Hard")}
                onCheckedChange={(e) => {
                  handleFilter("difficulty", "Hard", e);
                }}
                title="Hard"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <p className="font-bold text-lg">Tags</p>
              <div className="grid md:grid-cols-1 lg:grid-cols-2  grid-cols-2  gap-2 ">
                <FilerCheckbox
                  checked={handleCheckboxCheck("tags", "Array")}
                  onCheckedChange={(e) => {
                    handleFilter("tags", "Array", e);
                  }}
                  title="Array"
                />
                <FilerCheckbox
                  checked={handleCheckboxCheck("tags", "LinkedList")}
                  onCheckedChange={(e) => {
                    handleFilter("tags", "LinkedList", e);
                  }}
                  title="Linked List"
                />
                <FilerCheckbox
                  checked={handleCheckboxCheck("tags", "Tree")}
                  onCheckedChange={(e) => {
                    handleFilter("tags", "Tree", e);
                  }}
                  title="Tree"
                />
                <FilerCheckbox
                  checked={handleCheckboxCheck("tags", "Graph")}
                  onCheckedChange={(e) => {
                    handleFilter("tags", "Graph", e);
                  }}
                  title="Graph"
                />
                <FilerCheckbox
                  checked={handleCheckboxCheck("tags", "Math")}
                  onCheckedChange={(e) => {
                    handleFilter("tags", "Math", e);
                  }}
                  title="Math"
                />
                <FilerCheckbox
                  checked={handleCheckboxCheck("tags", "Bitmask")}
                  onCheckedChange={(e) => {
                    handleFilter("tags", "Bitmask", e);
                  }}
                  title="Bitmask"
                />
                <FilerCheckbox
                  checked={handleCheckboxCheck("tags", "String")}
                  onCheckedChange={(e) => {
                    handleFilter("tags", "String", e);
                  }}
                  title="String"
                />
                <FilerCheckbox
                  checked={handleCheckboxCheck("tags", "Backtracking")}
                  onCheckedChange={(e) => {
                    handleFilter("tags", "Backtracking", e);
                  }}
                  title="Backtracking"
                />
                <FilerCheckbox
                  checked={handleCheckboxCheck("tags", "Greedy")}
                  onCheckedChange={(e) => {
                    handleFilter("tags", "Greedy", e);
                  }}
                  title="Greedy"
                />
                <FilerCheckbox
                  checked={handleCheckboxCheck("tags", "Heap")}
                  onCheckedChange={(e) => {
                    handleFilter("tags", "Heap", e);
                  }}
                  title="Heap"
                />
                <FilerCheckbox
                  checked={handleCheckboxCheck("tags", "Sorting")}
                  onCheckedChange={(e) => {
                    handleFilter("tags", "Sorting", e);
                  }}
                  title="Sorting"
                />
                <FilerCheckbox
                  checked={handleCheckboxCheck("tags", "Stack")}
                  onCheckedChange={(e) => {
                    handleFilter("tags", "Stack", e);
                  }}
                  title="Stack"
                />
                <FilerCheckbox
                  checked={handleCheckboxCheck("tags", "Searching")}
                  onCheckedChange={(e) => {
                    handleFilter("tags", "Searching", e);
                  }}
                  title="Searching"
                />
                <FilerCheckbox
                  checked={handleCheckboxCheck("tags", "BinarySearch")}
                  onCheckedChange={(e) => {
                    handleFilter("tags", "BinarySearch", e);
                  }}
                  title="Binary Search"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div></div>
    </div>
  );
}

export default ProblemFilter;
