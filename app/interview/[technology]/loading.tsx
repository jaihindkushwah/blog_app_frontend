// import LoadingShimmer from "@/components/LoadingShimmer";
import { Skeleton } from "@/components/ui/skeleton";
function Loading() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center">
      <div className="flex flex-col items-center space-y-3 mt-1">
        <div className="space-y-2 w-full max-w-3xl">
          <div className="w-full flex items-center space-x-4">
            <Skeleton className="h-14 w-16 rounded-full" />
            <div className="space-y-2 w-full">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-full" />
            </div>
          </div>
          <Skeleton className="h-3 w-full " />
          <Skeleton className="h-3 w-full " />
          <Skeleton className="h-3 w-full " />
          <Skeleton className="h-3 w-[30%] " />
          <div className="w-full">
            <Skeleton className="h-[240px] mt-4 mb-6 w-full max-w-3xl rounded-xl" />
          </div>

          <Skeleton className="h-3 w-full " />
          <Skeleton className="h-3 w-full " />
          <Skeleton className="h-3 w-full " />
          <Skeleton className="h-3 w-full " />
          <Skeleton className="h-3 w-[75%] " />
          <Skeleton className="h-3 w-full " />
          <Skeleton className="h-3 w-full " />
          <Skeleton className="h-3 w-full " />
          <Skeleton className="h-3 w-[50%] " />
        </div>
      </div>
    </div>
  );
}

export default Loading;
