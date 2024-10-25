import LoadingShimmer from "@/components/LoadingShimmer";
import QuillEditor from "@/components/TipTap";
// import QuillEditor from "@/components/TipTap";
import React from "react";

function Page() {
  return (
    <div className="w-full min-h-screen bg-slate-50">
      <QuillEditor />
    </div>
  );
}

export default Page;
