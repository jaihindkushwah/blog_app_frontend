"use client";
import {
  TextEditorDrawerDialog,
  RichTextReader,
  useRichTextEditor,
} from "@/components/TextEditor";
import React from "react";
function CreateProblem() {
  const [contents, setContents] = React.useState<string>(
    localStorage.getItem("create_content") || "{}"
  );
  const editor = useRichTextEditor({ content: JSON.parse(contents) });
  console.log(contents);
  const onClick = () => {
    const content = JSON.stringify(editor?.getJSON() || "");
    localStorage.setItem("create_content", content);
    setContents(content);
    // console.log(contents);
  };
  return (
    <div className="flex">
      <div className="flex-1">
        <TextEditorDrawerDialog editor={editor} onClick={onClick} />
        <RichTextReader contents={contents} />
      </div>
      <div className="flex-1"></div>
    </div>
  );
}

export default CreateProblem;
