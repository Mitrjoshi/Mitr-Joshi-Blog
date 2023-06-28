import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { ContentHeader, ContentDesc, ContentFooter } from "../components";

const Content = ({ title, description, date, id, language }) => {
  return (
    <Link
      to={`/blog/${id}`}
      className="flex cursor-pointer duration-200 hover:bg-[#19191a80] flex-col justify-start p-4 border-[#2b2a2c] m-auto border rounded-lg"
    >
      <ContentHeader title={title} />
      <hr className="border-[#2b2a2c] mb-4" />
      <ContentDesc description={description} />
      <hr className="border-[#2b2a2c] my-4" />
      <ContentFooter date={date} language={language} />
    </Link>
  );
};

export default Content;
