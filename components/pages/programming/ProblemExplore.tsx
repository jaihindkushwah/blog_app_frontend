// "use client";

import { ProblemCard } from "@/components/ProblemCard";
import { getProblems } from "@/hooks/dsaProblem";
import ProblemFilter from "./ProblemFilter";
import Pagination from "./Pagination";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

interface ProblemExploreProps {
  searchParams: {
    page?: string;
    status?: string;
    difficulty?: string;
    tags?: string;
  };
}

export default async function ProblemExplore({
  searchParams,
}: ProblemExploreProps) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return;
  }
  const token = session.user?.token as string;
  const {
    problems: ProblemsData,
    currentPage,
    totalPages,
    totalProblems,
  } = await getProblems(token, searchParams);

  return (
    <>
      <div className="py-2 max-h-screen flex w-full">
        <div className="w-full">
          <div className="pb-2 flex justify-between items-center">
            <p className="text-xl font-bold">Explore Problems</p>
          </div>
          <div className="w-full  flex flex-col gap-2 ">
            {ProblemsData?.map((problem) => (
              <ProblemCard key={problem._id} {...problem} id={problem._id} />
            ))}
          </div>
          {!totalProblems || totalProblems === 0 ? (
            <div className="flex flex-col justify-center items-center h-[150px] text-red-700">
              <p className="text-base font-semibold">No Problems Found</p>
            </div>
          ) : null}
          <div className="relative py-3 ">
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        </div>
        <ProblemFilter />
      </div>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps<
//   ProblemExploreProps
// > = async (context) => {
//   const sort = (context.query.sort as SortOption) || "default";
//   const initialProblems = await getProblems();

//   return {
//     props: {
//       initialProblems,
//       initialSort: sort,
//     },
//   };
// };
