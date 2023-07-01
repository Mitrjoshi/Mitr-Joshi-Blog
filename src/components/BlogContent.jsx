import React from "react";
import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { block } from "million/react";

const BlogContent = block(function BlogBlock({ content }) {
  return (
    <div className="pb-5">
      <ReactMarkdown remarkPlugins={[gfm]} className="custom-markdown">
        {content}
      </ReactMarkdown>
    </div>
  );
});

export default BlogContent;
