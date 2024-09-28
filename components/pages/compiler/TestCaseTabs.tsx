"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TestCasesInput from "./TestCasesInput";
import TestOutput from "./TestOutput";
import { useCompiler } from "@/contexts/CompilerProvider";

function TestCaseTabs() {
  const { currentTestCaseTab, setCurrentTestCaseTab, output } = useCompiler();
  return (
    <Tabs
      value={currentTestCaseTab}
      onValueChange={setCurrentTestCaseTab}
      className="w-full h-full"
    >
      <TabsList className="bg-inherit pb-0 pt-0">
        <TabsTrigger className="px-2 py-1" value="input">
          Test Cases
        </TabsTrigger>
        <TabsTrigger className="px-2 py-1" value="output">
          Test Output
        </TabsTrigger>
      </TabsList>
      <TabsContent className="mt-0" value="input">
        <TestCasesInput />
      </TabsContent>
      <TabsContent
        className=" px-3 h-full w-full py-2 focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0 mt-0 "
        value="output"
      >
        <TestOutput output={output?.output} />
      </TabsContent>
    </Tabs>
  );
}

export default TestCaseTabs;
