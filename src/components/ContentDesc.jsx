import React from "react";

const ContentDesc = ({ description }) => {
  return (
    <>
      <div className="ss:flex hidden">
        <p>{description}</p>
      </div>
      <div className="ss:hidden grid">
        <p>{description.slice(0, 100)}...</p>
        <p className="text-[#008ae6] underline">Read more</p>
      </div>
    </>
  );
};

export default ContentDesc;
