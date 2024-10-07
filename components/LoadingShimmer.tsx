import { Skeleton } from "@/components/ui/skeleton";
function LoadingShimmer() {
  return (
    // <div className="max-w-screen h-screen flex justify-center items-center">
    <div className="flex flex-col items-center space-y-3 mt-1">
      <Skeleton className="h-[125px] w-full max-w-3xl rounded-xl" />
      <div className="space-y-2 w-full max-w-3xl">
        <Skeleton className="h-5 w-full " />
        <Skeleton className="h-5 w-full " />
      </div>
    </div>
    // </div>
  );
}

export default LoadingShimmer;
