import CodeEditor from "@/components/pages/compiler/CodeEditor";
import CodeRunSkeleton from "@/components/pages/compiler/ui/CodeRunSkeleton";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import TestCaseTabs from "@/components/pages/compiler/TestCaseTabs";
import ProblemSection from "@/components/pages/compiler/ProblemSection";
import { DarkModeToggle } from "@/components/ui/DarkModeToggleButton";

export function Compiler() {
  const isRunning = false;

  return (
    <div className="dark:bg-black bg-[#f0f0f0] scrollbar-hide">
      <DarkModeToggle fixed={"bottom-right"} />
      <ResizablePanelGroup
        direction="horizontal"
        className="w-screen h-screen p-2"
      >
        <ResizablePanel
          defaultSize={42}
          minSize={20}
          className="border-r-4 dark:border-r-transparent rounded-lg dark:bg-[#262626] bg-white"
        >
          <ProblemSection />
        </ResizablePanel>
        <ResizableHandle className="bg-inherit hover:bg-blue-500 rounded-lg w-[3px]" />
        <ResizablePanel
          defaultSize={58}
          minSize={30}
          className="ml-1 rounded-lg"
        >
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel
              defaultSize={60}
              minSize={10}
              className="mb-1 dark:bg-[#262626] rounded-lg"
            >
              <CodeEditor />
            </ResizablePanel>
            <ResizableHandle className="bg-inherit  hover:bg-blue-500 rounded-lg w-1" />
            {/* <ResizablePanel
              defaultSize={40}
              minSize={10}
              className="rounded-lg dark:bg-[#262626] mt-1"
            > */}
            {/* show skeleton when user click to run the code or submit */}
            {/* <div className="p-1">
                {isRunning ? <CodeRunSkeleton /> : <TestCaseTabs />}
              </div> */}
            {/* </ResizablePanel> */}
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default Compiler;
