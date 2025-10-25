import React from "react";

export const TextView = ({ htmlContent }) => {
  return (
    <>
      <style>
        {`
        /* ===============================
   🎨 CKEditor Custom Styles
   =============================== */
 
/* Remove borders from editor when focused */
.editor-container {
  border: none !important;
}
  ..ck.ck-editor__editable_inline > *:first-child
Specificity: (0,3,0)
        {margin:0 !important;}
 
.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable) {
  outline: none;
  border: none;
  box-shadow: var(--ck-inner-shadow), 0 0;
}
  .editor-container__editor{
  padding:0 !important;
  }
 
.ck-content {
  color: white;
}
 
/* ===============================
   📦 Layout Containers
   =============================== */
 
.main-container {
  width: 100%;
//   padding: 1rem;
}
 
.editor-container {
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  overflow: hidden;
  color: white;
}
 
.editor-container_balloon-editor {
  /* Optional: Add custom balloon editor styles here */
}
 
.editor-container_include-style {
  /* Optional: Styles for include-style variant */
}
 
.editor-container__editor {
  min-height: 300px;
  padding: 1rem;
}
 
.editor-container__editor .ck-editor__editable {
  min-height: 250px;
}
 
/* ===============================
   📝 CKEditor Content Reset
   =============================== */
 
.ckeditor-content {
  all: revert; /* Removes Tailwind overrides */
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  color: #222;
}
 
.ckeditor-content p {
  margin-bottom: 1em;
}
 
.ckeditor-content ul,
.ckeditor-content ol {
  margin: 1em 0;
  padding-left: 2em;
}
 
.ckeditor-content blockquote {
  border-left: 4px solid #ccc;
  padding-left: 1em;
  color: #555;
  margin: 1em 0;
}
 
.ckeditor-content img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}
 
.ckeditor-content table {
  border-collapse: collapse;
  width: 100%;
  margin: 1em 0;
}
 
.ckeditor-content th,
.ckeditor-content td {
  border: 1px solid #ddd;
  padding: 8px;
}
 
/* ===============================
   🌐 General Styles (ckeditor-content.css)
   =============================== */
 
body {
  font-family: system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #222;
 
}
 
/* Headings */
h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  font-weight: bold;
}
 
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  font-weight: bold;
}
 
h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  font-weight: bold;
}
 
h4 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  font-weight: bold;
}
 
h5 {
  display: block;
  font-size: 0.83em;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  font-weight: bold;
}
 
h6 {
  display: block;
  font-size: 0.67em;
  margin-block-start: 2.33em;
  margin-block-end: 2.33em;
  font-weight: bold;
}
 
/* Paragraphs */
p {
  margin-bottom: 1em;
}
 
/* Lists */
ul,
ol {
  margin: 1em 0;
  padding-left: 2em;
}
 
li {
  margin-bottom: 0.25em;
}
 
/* Links */
a {
  color: #0d6efd;
  text-decoration: none;
}
 
/* Blockquotes */
blockquote {
  border-left: 4px solid #ccc;
  padding-left: 1em;
  color: #555;
  margin: 1em 0;
}
 
/* Images */
img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}
 
/* Tables */
table {
  border-collapse: collapse;
  width: 100%;
  margin: 1em 0;
}
 
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
 
/* Code Blocks */
pre {
  background: #f6f6f6;
  padding: 10px;
  border-radius: 6px;
  overflow-x: auto;
}
 
code {
  font-family: monospace;
  background: #f6f6f6;
  padding: 2px 4px;
  border-radius: 4px;
}
 
/* Horizontal Line */
hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 2em 0;
}
ol, ul, menu {
  list-style: inside;
    margin: 0;
    padding: 0;
}
       
`}
      </style>{" "}
      <div
        className="space-y-4 text-white text-base font-unbounded leading-loose"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </>
  );
};
