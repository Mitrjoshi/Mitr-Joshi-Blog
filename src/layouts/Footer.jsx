import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t lg:p-0 px-5 border-[#2b2a2c]">
      <div className="max-w-[1200px] m-auto h-[120px] sm:flex-row flex-col flex sm:justify-between justify-center text-center sm:gap-0 gap-4 items-center">
        <p>Copyright © {currentYear}, Mitr Joshi</p>
        <p>
          Find an issue with this page?{" "}
          <a
            href="https://github.com/Mitrjoshi"
            target="_blank"
            className="text-[#008ae6]"
          >
            Fix it on GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
