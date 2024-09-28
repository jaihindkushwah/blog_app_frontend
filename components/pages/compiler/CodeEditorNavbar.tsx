"use client";
import { cn } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "./ui/slider";
import { Button } from "@/components/ui/button";
import { ResetIcon } from "@radix-ui/react-icons";
import CustomTooltip from "./ui/tooltip";
import { useCompiler } from "@/contexts/CompilerProvider";
interface EditorNavProps {
  fontSize: number;
  setFontSize: any;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export function CodeEditorNavbar({
  fontSize,
  setFontSize,
  setLanguage,
  language,
}: EditorNavProps) {
  const { handleRunSubmit, handleFinalSubmit } = useCompiler();

  return (
    <nav className=" w-full pb-1 pr-6  mt-2 rounded-t-lg flex justify-between pl-2 border-2 border-slate-200 dark:border-0 items-center gap-2">
      <span className="flex gap-3 items-center  ">
        <Select defaultValue={language} onValueChange={(e) => setLanguage(e)}>
          <SelectTrigger className="w-[120px] h-7 focus:ring-0 focus:ring-none focus:ring-offset-0">
            <SelectValue placeholder="language" />
          </SelectTrigger>
          <SelectContent className="ring-0">
            <SelectItem value="java">Java</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="cpp">C++</SelectItem>
            <SelectItem value="javascript">Javascript</SelectItem>
          </SelectContent>
        </Select>
        <CustomTooltip content={"Font Size"}>
          <Slider
            defaultValue={[fontSize]}
            onValueChange={(e) => setFontSize(e)}
            max={30}
            step={1}
            min={10}
            className={cn("w-[20%]", "active:bottom-0 h-1 min-w-20")}
          />
        </CustomTooltip>
        <CustomTooltip content={"Reset Code"}>
          <ResetIcon className="font-bold text-xl" />
        </CustomTooltip>
      </span>
      <span className="flex gap-2">
        <Button
          onClick={handleRunSubmit}
          variant={"default"}
          className="h-6 rounded-full text-[12px] font-medium active:scale-95 text-center active:duration-75 transition-all ease-in-out"
        >
          Run
        </Button>
        <Button
          onClick={handleFinalSubmit}
          variant={"default"}
          className="h-6 rounded-full text-[12px] font-medium active:scale-95 text-center active:duration-75 transition-all ease-in-out"
        >
          Submit
        </Button>
      </span>
    </nav>
  );
}
