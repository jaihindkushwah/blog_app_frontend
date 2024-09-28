// "use client";

// import { useEffect } from "react";
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";

// const Tiptap = () => {
//   const editor = useEditor({
//     extensions: [StarterKit],
//     content: "<p>Hello World! 🌎️</p>",
//   });

//   useEffect(() => {
//     return () => {
//       if (editor) {
//         editor.destroy();
//       }
//     };
//   }, [editor]);

//   return (
//     <div>
//       <style jsx>{`
//         .ProseMirror {
//           padding: 16px;
//           border: 1px solid #ccc;
//           border-radius: 4px;
//           min-height: 150px;
//         }
//       `}</style>
//       <EditorContent editor={editor} />
//     </div>
//   );
// };

// export default Tiptap;
