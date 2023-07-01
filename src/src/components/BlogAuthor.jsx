import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const BlogAuthor = ({ date, id }) => {
  const { user } = useAuth0();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        url: window.location.href,
      });
    } else {
      console.log("Web Share API not supported.");
    }
  };

  return (
    <div className="flex items-center justify-between py-5 text-[16px] text-[#bebebe]">
      <div className="flex md:flex-row flex-col md:gap-4">
        <p>
          Author -{" "}
          <a
            href="https://mitrjoshi.netlify.app/"
            target="_blank"
            className="text-[#008ae6] font-semibold underline"
          >
            Mitr Joshi
          </a>
        </p>
        <p className="sm:hidden flex">{date}</p>
      </div>
      <div className="flex gap-5 items-center">
        <p className="sm:flex hidden">{date}</p>
        {user?.email === "mitrjoshi26@gmail.com" ? (
          <div className="flex gap-2 items-center">
            {/* pencil */}
            <Link
              to={`/edit/${id}`}
              className="border p-2 rounded-lg hover:bg-[#2b2a2c50] duration-200 border-[#2b2a2c]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-pencil"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                <path d="M13.5 6.5l4 4" />
              </svg>
            </Link>
            <button
              onClick={handleShare}
              className="border p-2 rounded-lg hover:bg-[#2b2a2c50] duration-200 border-[#2b2a2c]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-share"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M8.7 10.7l6.6 -3.4" />
                <path d="M8.7 13.3l6.6 3.4" />
              </svg>
            </button>
          </div>
        ) : (
          <button
            onClick={handleShare}
            className="border p-2 rounded-lg hover:bg-[#2b2a2c50] duration-200 border-[#2b2a2c]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-share"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M8.7 10.7l6.6 -3.4" />
              <path d="M8.7 13.3l6.6 3.4" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogAuthor;
