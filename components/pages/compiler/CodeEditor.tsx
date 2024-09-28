"use client";
import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";
import { CodeEditorNavbar } from "./CodeEditorNavbar";
import useCurrentTheme from "@/hooks/useCurrentTheme";
import { LanguageKey, useCompiler } from "@/contexts/CompilerProvider";
interface CodeEditorProps {}

function CodeEditor({}: CodeEditorProps) {
  const [fontSize, setFontSize] = React.useState(14);
  const {
    language,
    setLanguage,
    setCode: setCodeFinalCode,
    code: defaultCode,
  } = useCompiler();
  const [code, setCode] = React.useState<string | undefined>("");
  const options = { fontSize };
  const { currentTheme } = useCurrentTheme();
  const [timeId, setTimeId] = React.useState<any>("");
  useEffect(() => {
    if (!code) return;
    // console.log(date, Date.now());
    if (!timeId) {
      const id = setTimeout(() => {
        setCodeFinalCode(code);
        setTimeId("");
      }, 1000);
      setTimeId(id);
    }
  }, [code, setCodeFinalCode, timeId, setTimeId]);

  return (
    <div className="flex h-full items-center justify-center flex-col">
      <CodeEditorNavbar
        language={language}
        fontSize={fontSize}
        setLanguage={(value) => {
          setLanguage(value as LanguageKey);
        }}
        setFontSize={setFontSize}
      />

      <Editor
        defaultLanguage={language}
        language={language}
        height={"100%"}
        theme={"vs-" + currentTheme}
        width={"100%"}
        options={options}
        value={code ? code : defaultCode}
        defaultValue={defaultCode}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
}

export default CodeEditor;
