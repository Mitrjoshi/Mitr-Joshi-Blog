import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { block } from "million/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogContent = block(function BlogBlock({ content }) {
  const [copyMap, setCopyMap] = useState({});

  const handleCopy = (codeSnippet) => {
    navigator.clipboard.writeText(codeSnippet);
    setCopyMap((prevCopyMap) => ({
      ...prevCopyMap,
      [codeSnippet]: true,
    }));
  };

  useEffect(() => {
    setTimeout(() => {
      setCopyMap(false);
    }, 2000);
  }, [copyMap]);

  return (
    <div className="pb-5">
      <ReactMarkdown
        remarkPlugins={[gfm]}
        className="custom-markdown"
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const codeSnippet = String(children).replace(/\n$/, "");
            const isCopied = copyMap[codeSnippet];

            return !inline && match ? (
              <>
                <div className="bg-[#1d2429] justify-between flex rounded-t-[12px] py-2 px-4 items-center mt-[1.25rem]">
                  <div>
                    <span>{match[1]}</span>
                  </div>
                  <button onClick={() => handleCopy(codeSnippet)}>
                    {isCopied ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-check"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-copy"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                        <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                      </svg>
                    )}
                  </button>
                </div>
                <SyntaxHighlighter
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                  customStyle={{
                    backgroundColor: "#1d2429",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderTopRightRadius: "0px",
                    borderTopLeftRadius: "0px",
                    marginTop: "0px",
                    fontSize: "13px",
                    padding: "1rem",
                  }}
                >
                  {codeSnippet}
                </SyntaxHighlighter>
              </>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
});

export default BlogContent;
