"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface CustomModules {
  toolbar: {
    container: string;
    handlers: {
      "grid-creator": () => void;
    };
  };
}

const CustomToolbar: React.FC = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <select className="ql-font"></select>
      <select className="ql-header">
        <option value="1"></option>
        <option value="2"></option>
        <option selected></option>
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <button className="ql-underline"></button>
      <button className="ql-strike"></button>
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered"></button>
      <button className="ql-list" value="bullet"></button>
      <button className="ql-indent" value="-1"></button>
      <button className="ql-indent" value="+1"></button>
    </span>
    <span className="ql-formats">
      <button className="ql-script" value="sub"></button>
      <button className="ql-script" value="super"></button>
    </span>
    <span className="ql-formats">
      <button className="ql-direction" value="rtl"></button>
    </span>
    <span className="ql-formats">
      <select className="ql-color"></select>
      <select className="ql-background"></select>
    </span>
    <span className="ql-formats">
      <button className="ql-link"></button>
      <button className="ql-image"></button>
      <button className="ql-code-block"></button>
    </span>
    <span className="ql-formats">
      <button className="ql-clean"></button>
    </span>
    <span className="ql-formats">
      <button className="ql-grid-creator">Grid</button>
    </span>
  </div>
);

const QuillEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");

  const modules: CustomModules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        "grid-creator": function (this: ReactQuill) {
          const table =
            '<table style="width:100%; border-collapse: collapse;"><tr><td style="border: 1px solid black; padding: 8px;">Cell 1</td><td style="border: 1px solid black; padding: 8px;">Cell 2</td></tr><tr><td style="border: 1px solid black; padding: 8px;">Cell 3</td><td style="border: 1px solid black; padding: 8px;">Cell 4</td></tr></table><p></p>';
          const range = this.editor?.getSelection();
          if (range) {
            this.editor?.insertText(range.index, "\n");
            this.editor?.clipboard.dangerouslyPasteHTML(range.index + 1, table);
            this.editor?.setSelection(range.index + table.length + 1, 0);
          }
        },
      },
    },
  };

  const formats: string[] = [
    "font",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "code-block",
    "script",
    "direction",
    "color",
    "background",
    "align",
    "clean",
  ];

  const handleChange = (value: string) => {
    setContent(value);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <CustomToolbar />
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 h-64"
        placeholder="Write your content here"
      />
    </div>
  );
};

export default QuillEditor;
