"use client";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IconPlus, IconX } from "@tabler/icons-react";
import { useCompiler } from "@/contexts/CompilerProvider";

const initialTestCases = [{ inputs: "1 2 3" }];

function TestCasesInput() {
  const [activeTab, setActiveTab] = useState("case1");
  const [testCases, setTestCases] = useState(initialTestCases);
  // const [testCaseInputs, setTestCaseInputs] = useState("");
  const { setInputTestCase, inputTestCase } = useCompiler();

  const handleActiveTab = (value: any) => {
    setActiveTab(value);
  };

  // const addTestCase = () => {
  //   if (testCases.length >= 7) return;
  //   const newTestCases = [...testCases, { inputs: "" }];
  //   setTestCases(newTestCases);
  //   setActiveTab(`case${newTestCases.length}`);
  // };

  const removeTestCase = (index: any) => {
    // const newTestCases = testCases.filter((_, i) => i !== index);
    // setTestCases(newTestCases);
    // if (activeTab === `case${index + 1}`) {
    //   setActiveTab(`case${Math.min(index, newTestCases.length)}`);
    // }
  };
  const handleInputChange = (index: number, value: string) => {
    // const newTestCases = [...testCases];
    // newTestCases[index].inputs = value;
    // // console.log(newTestCases);
    // setTestCases(newTestCases);
    setInputTestCase(value);
  };

  return (
    <div className="px-3 py-2 h-full w-full">
      <Tabs
        value={activeTab}
        onValueChange={handleActiveTab}
        className="w-full p-0"
      >
        <TabsList className="py-2 gap-2 h-fit bg-inherit font-sans flex flex-wrap justify-start">
          {testCases.map((_, index) => (
            <TabsTrigger
              key={`case${index + 1}`}
              className={`px-3 font-medium group data-[state=active]:bg-neutral-600/30 data-[state=active]:dark:bg-neutral-100/20 hover:bg-gray-200 relative py-1 rounded-md dark:hover:bg-neutral-100/20`}
              value={`case${index + 1}`}
            >
              <span
                className="absolute rounded-full p-[2px] group-hover:opacity-100 hover:scale-125 opacity-0 dark:bg-neutral-100/20 bg-neutral-400 -right-2 -top-3"
                onClick={(e) => {
                  e.stopPropagation();
                  removeTestCase(index);
                }}
              >
                <IconX size={12} className="text-white" />
              </span>
              Case {index + 1}
            </TabsTrigger>
          ))}
          {/* {testCases.length < 7 && (
            <button
              onClick={addTestCase}
              className="p-1 w-8 h-8 hover:dark:text-gray-200 hover:text-neutral-800"
            >
              <IconPlus size={16} />
            </button>
          )} */}
        </TabsList>
        {testCases.map((item, index) => (
          <TabsContent key={`content${index + 1}`} value={`case${index + 1}`}>
            <Textarea
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="w-full h-full"
              rows={5}
              value={inputTestCase}
              // defaultValue={item.inputs}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default TestCasesInput;
