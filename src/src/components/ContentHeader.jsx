import React from "react";

const ContentHeader = ({ title }) => {
  return (
    <div className="pb-4 flex justify-between items-center">
      <h1 className="font-bold md:text-[30px] text-[20px]">{title}</h1>
    </div>
  );
};

export default ContentHeader;
