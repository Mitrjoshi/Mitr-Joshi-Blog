import React from "react";

const BlogHeader = ({ title }) => {
  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-center md:px-20">
        <p className="sm:text-[50px] text-[30px]  font-bold  py-5 m-auto text-textColor text-center">
          {title} <span className="text-primary">./ </span>
        </p>
      </div>
    </div>
  );
};

export default BlogHeader;
