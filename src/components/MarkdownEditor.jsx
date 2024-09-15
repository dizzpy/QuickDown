import React, { forwardRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';  // Import remark-gfm for advanced markdown features

const MarkdownEditor = forwardRef(({ markdown, onMarkdownChange }, ref) => {
  return (
    <div className="flex h-screen p-4">
      {/* Left side: Markdown input */}
      <div className="w-1/2 p-4">
        <textarea
          value={markdown}
          onChange={(e) => onMarkdownChange(e.target.value)}
          className="w-full h-full p-2 border border-gray-300 rounded"
          placeholder="Enter Markdown here..."
        />
      </div>

      {/* Right side: Markdown preview */}
      <div className="w-1/2 p-4">
        <div
          ref={ref}
          className="markdown-preview p-4 border border-gray-300 rounded bg-white h-full overflow-auto"
        >
          <ReactMarkdown 
            children={markdown} 
            remarkPlugins={[remarkGfm]} 
            className="prose" // Use prose for Tailwind typography styles
          />
        </div>
      </div>
    </div>
  );
});

export default MarkdownEditor;
