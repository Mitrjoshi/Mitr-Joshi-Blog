import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import { ContextConstant } from "../utils/Context";

export default function Sidemenu() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const currentYear = new Date().getFullYear();

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const options = [
    {
      id: 1,
      title: "Portfolio",
      link: "https://mitrjoshi.netlify.app",
    },
    {
      id: 2,
      title: "Github",
      link: "https://github.com/Mitrjoshi",
    },
    {
      id: 3,
      title: "Twitter",
      link: "https://twitter.com/itsMitrr_",
    },
    {
      id: 4,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/mitr-joshi-467097222/",
    },
    {
      id: 5,
      title: "Profile",
      link: "/profile",
    },
  ];
  const navigate = useNavigate();

  const { searchText, setSearchText } = useContext(ContextConstant);

  let searchViaText = "";
  const handleSearch = (event) => {
    searchViaText = event.target.value;
  };

  const handleSearchKey = (event) => {
    if (event.key === "Enter") {
      navigate(`/search/${searchViaText}`);
      setState({ ...state, right: false });
    }
  };

  const list = (anchor) => (
    <Box
      sx={{
        backgroundColor: "#111111",
        height: "100%",
        width: "300px",
      }}
      role="presentation"
    >
      <div className="flex items-center justify-between px-5 h-[69px]">
        <div>
          <p className="sm:text-[40px] text-[30px] flex items-center justify-center  font-bold  py-5 m-auto text-textColor">
            Blog <span className="text-primary">./ </span>
          </p>
        </div>
        <button
          className="border p-2 rounded-lg hover:bg-[#2b2a2c50] duration-200 border-[#2b2a2c]"
          onClick={toggleDrawer(anchor, false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-layout-sidebar-right-collapse"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#e2e8f0"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M15 4v16" />
            <path d="M9 10l2 2l-2 2" />
          </svg>
        </button>
      </div>
      <hr className="border-[#2b2a2c]" />
      <div className="w-full p-3">
        <input
          maxlength="20"
          type="search"
          onChange={handleSearch}
          onKeyPress={handleSearchKey}
          placeholder="Search by Language..."
          className={` bg-[#2c2b2e] w-full h-[32px] text-[14px] input-field px-3 outline-none text-[#c6cacf] rounded-lg `}
        />
      </div>
      <hr className="border-[#2b2a2c]" />
      <div
        className="grid text-[#f2f2f2]  gap-2 py-4"
        onClick={toggleDrawer(anchor, false)}
      >
        {options.map((options, i) => {
          return (
            <>
              {options.id !== 5 ? (
                <a
                  href={options.link}
                  className="flex justify-between gap-4 px-4 items-center h-[40px]  hover:bg-[#202020]"
                  key={i}
                  target="_blank"
                >
                  {options.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-right"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#e3e3e3"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                  </svg>
                </a>
              ) : (
                <Link
                  to={options.link}
                  className="flex justify-between gap-4 px-4 items-center h-[40px]  hover:bg-[#202020]"
                  key={i}
                >
                  {options.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-right"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#e3e3e3"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                  </svg>
                </Link>
              )}
            </>
          );
        })}
        {isAuthenticated ? (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="mx-4 border border-[#2b2a2c] hover:bg-[#2b2a2c50] rounded-lg py-1 px-4  duration-200"
          >
            Log out
          </button>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="mx-4 border border-[#2b2a2c] hover:bg-[#2b2a2c50] rounded-lg py-1 px-4  duration-200"
          >
            Log in
          </button>
        )}
      </div>
    </Box>
  );

  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div>
            <button
              className="border p-2 rounded-lg hover:bg-[#2b2a2c50] duration-200 border-[#2b2a2c]"
              onClick={toggleDrawer(anchor, true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-layout-sidebar-left-collapse"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#e2e8f0"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M9 4v16" />
                <path d="M15 10l-2 2l2 2" />
              </svg>
            </button>
          </div>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}
