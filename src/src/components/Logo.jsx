import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link to="/" onClick={scrollToTop}>
      <h1 className="font-sans text-[40px] md:text-[45px] text-white">
        Mitr Joshi
      </h1>
    </Link>
  );
};

export default Logo;
