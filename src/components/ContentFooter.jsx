import React from "react";

const ContentFooter = ({ date, language }) => {
  return (
    <div className="flex ss:flex-row flex-col ss:items-center justify-between">
      <p>{date}</p>
      <div>
        <p className="text-[#9e8af9] font-semibold">{language}</p>
      </div>
    </div>
  );
};

export default ContentFooter;
