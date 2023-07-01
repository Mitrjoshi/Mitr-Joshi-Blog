import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, logout, loginWithRedirect, isAuthenticated, isLoading } =
    useAuth0();

  useEffect(() => {
    document.title = `Mitr Joshi - Profile`;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="max-w-[1000px] m-auto">
      <div className="flex items-center justify-center md:px-20">
        <p className="sm:text-[50px] text-[30px]  font-bold  py-5 m-auto text-textColor text-center">
          Profile <span className="text-primary">./ </span>
        </p>
      </div>
      <hr className="border-[#2b2a2c]" />

      {isAuthenticated ? (
        <div className="flex mt-10 flex-col gap-5 justify-center items-center">
          <img
            src={user?.picture}
            alt={user?.name}
            className="rounded-full relative h-[140px]"
          />

          <div className="gap-2 grid text-center">
            <p>Name: {user?.name}</p>
            {user?.email ? <p>Email: {user?.email}</p> : null}

            {isAuthenticated && user?.email === "mitrjoshi26@gmail.com" ? (
              <Link
                to="/form"
                className="border border-[#2b2a2c] duration-200 hover:bg-[#2b2a2c50] rounded-lg py-1 px-4 "
              >
                Add blog
              </Link>
            ) : null}
            <button
              onClick={() =>
                logout({
                  logoutParams: { returnTo: window.location.origin },
                })
              }
              className="border text-red-600 border-[#2b2a2c] duration-200 hover:bg-[#2b2a2c50] rounded-lg py-1 px-4 "
            >
              Log out
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col my-5 items-center justify-center">
          <div>
            <h1 className="sm:text-[24px] text-[18px]">
              You are not logged in
            </h1>
          </div>
          <p></p>
          <button
            onClick={() => loginWithRedirect()}
            className="border border-[#2b2a2c] hover:bg-[#2b2a2c50] rounded-lg py-1 px-4  duration-200"
          >
            Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
