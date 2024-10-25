"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Italic, Underline } from "lucide-react";
import { Button } from "@/components/ui/button";

const Toolbar = ({ editor, position }: { editor?: any; position?: any }) => {
  if (!editor) {
    return null;
  }

  return (
    <div
      className="flex items-center space-x-2 bg-white border rounded shadow-lg p-2"
      style={{
        position: "absolute",
        top: `-${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "bg-muted" : ""}
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "bg-muted" : ""}
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "bg-muted" : ""}
      >
        <Underline className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default function TiptapToolbarEditor() {
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });
  const editorRef = useRef<any>(null);

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Select some text to see the formatting toolbar!</p>",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
  });

  const handleSelection = useCallback(() => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0 && editor) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const editorRect = editorRef?.current?.getBoundingClientRect();

      setToolbarPosition({
        top: rect.top - editorRect.top - 40,
        left: rect.left - editorRect.left,
      });
      setShowToolbar(true);
    } else {
      setShowToolbar(false);
    }
  }, [editor]);

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelection);
    return () => {
      document.removeEventListener("selectionchange", handleSelection);
    };
  }, [handleSelection]);

  return (
    <div className="container mx-auto p-4" ref={editorRef}>
      <div className="relative border rounded p-4">
        <EditorContent editor={editor} />
        {showToolbar && <Toolbar editor={editor} position={toolbarPosition} />}
      </div>
    </div>
  );
}
