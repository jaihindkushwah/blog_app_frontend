import { IProblemCardProps, ProblemCard } from "@/components/ProblemCard";
import React from "react";

const data: IProblemCardProps[] = [
  {
    title: "Problem 1",
    difficulty: "Easy",
    id: "1",
    description: "This is a description of the problem",
  },
  {
    title: "Problem 2",
    difficulty: "Medium",
    id: "2",
    description: "This is a description of the problem",
  },
  {
    title: "Problem 3",
    difficulty: "Hard",
    id: "3",
    description: "This is a description of the problem",
  },
  {
    title: "Problem 4",
    difficulty: "Easy",
    id: "4",
    description:
      "This is a description of the problem  This is based on the previous problem",
  },
];

function LiveProblems() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-xl mb-4">Live Contests</p>
        <div className="flex flex-wrap gap-4">
          {data.map((item, index) => (
            <ProblemCard
              className="w-[360px] h-[180px]"
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
      <div className="mt-2 ">
        <p className="text-xl mb-4">Upcoming Contests</p>
        <div className="flex flex-wrap gap-4">
          {data.map((item, index) => (
            <ProblemCard
              className="w-[360px] h-[180px]"
              key={index}
              {...item}
            />
          ))}
          {data.map((item, index) => (
            <ProblemCard
              className="w-[360px] h-[180px]"
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
      <div className="mt-2">
        <p className="text-xl mb-4">Recent Contests</p>
        <div className="flex flex-wrap gap-4">
          {data.map((item, index) => (
            <ProblemCard
              className="w-[360px] h-[180px]"
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LiveProblems;
