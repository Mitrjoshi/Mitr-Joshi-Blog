import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Logo } from "../components";
import { Sidemenu } from "./";
import { useAuth0 } from "@auth0/auth0-react";
import { ContextConstant } from "../utils/Context";

const Navbar = () => {
  const options = [
    {
      id: 1,
      title: "",
      img: <GitHubIcon sx={{ fontSize: "32px" }} />,
      link: "https://github.com/Mitrjoshi",
    },
    {
      id: 2,
      title: "",
      img: <TwitterIcon sx={{ fontSize: "32px" }} />,
      link: "https://twitter.com/itsMitrr_",
    },
    {
      id: 3,
      title: "",
      img: <LinkedInIcon sx={{ fontSize: "32px" }} />,
      link: "https://www.linkedin.com/in/mitr-joshi-467097222/",
    },
  ];

  const navigate = useNavigate();

  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();

  const { searchText, setSearchText } = useContext(ContextConstant);

  let searchViaText = "";
  const handleSearch = (event) => {
    searchViaText = event.target.value;
  };

  const handleSearchKey = (event) => {
    if (event.key === "Enter") {
      navigate(`/search/${searchViaText}`);
    }
  };

  return (
    <div className="w-full lg:p-0 px-5 fixed z-50 border-y border-[#2b2a2c] backdrop-blur-[15px]">
      <div className="h-[68px] flex justify-between items-center max-w-[1200px]  m-auto">
        <Logo />

        <div className="sm:flex hidden items-center gap-4">
          <Link
            className="hover:text-white text-[#7a7f89]"
            to="https://mitrjoshi.netlify.app/"
            target="_blank"
          >
            Portfolio
          </Link>

          <input
            maxlength="20"
            type="search"
            onChange={handleSearch}
            onKeyPress={handleSearchKey}
            placeholder="Search by Language..."
            className={` bg-[#2c2b2e] w-[200px] h-[32px] text-[14px] input-field px-3 outline-none text-[#c6cacf] rounded-lg `}
          />
          {options.map((options, i) => {
            return (
              <a href={options.link} key={i} target="_blank">
                {options.title}
                {options.img}
              </a>
            );
          })}
          {isLoading ? (
            <div className="flex h-[50vh] flex-col gap-5 justify-center items-center">
              <div>
                <svg
                  version="1.1"
                  id="loader-1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="40px"
                  height="40px"
                  viewBox="0 0 50 50"
                  class="enable-background:new 0 0 50 50;"
                  xml:space="preserve"
                >
                  <path
                    fill="#000"
                    d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
                    id="svg-path-loader-1"
                  >
                    <animateTransform
                      attributeType="xml"
                      attributeName="transform"
                      type="rotate"
                      from="0 25 25"
                      to="360 25 25"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </div>
            </div>
          ) : (
            <div>
              {isAuthenticated ? (
                <>
                  <Link to="/profile" className=" relative ">
                    {user?.picture ? (
                      <img
                        src={user?.picture}
                        alt={user?.name}
                        className="h-[32px] rounded-full"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-user-circle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                      </svg>
                    )}

                    <span className="absolute h-[10px] w-[10px] bg-green-600 rounded-full top-[24px] right-0"></span>
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => loginWithRedirect()}
                  className="border border-[#2b2a2c] hover:bg-[#2b2a2c50] rounded-lg py-1 px-4  duration-200"
                >
                  Log in
                </button>
              )}
            </div>
          )}
        </div>
        <div className="sm:hidden flex">
          <Sidemenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
