import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { deleteDoc, doc, collection, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useAuth0 } from "@auth0/auth0-react";
import { BlogHeader, BlogAuthor, BlogContent } from "../components";

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const location = useLocation();

  const [postDetails, setPostDetails] = useState([]);
  const { user } = useAuth0();

  const id = location.pathname.slice(6);

  const postCollectRef = doc(db, "blogs", id);

  useEffect(() => {
    const getPost = async () => {
      const docSnap = await getDoc(postCollectRef);
      if (docSnap.exists()) {
        setPostDetails({ ...docSnap.data(), id: docSnap.id });
      } else {
        console.log("Document not found");
      }
    };
    getPost();
  }, []);

  useEffect(() => {
    document.title = `${postDetails?.title}`;
  }, [postDetails]);

  console.log(postDetails.language);

  return (
    <div className="max-w-[1000px] m-auto">
      {postDetails.length !== 0 ? (
        <div>
          <BlogHeader title={postDetails.title} />
          <hr className="border-[#2b2a2c]" />
          <BlogAuthor date={postDetails.date} id={postDetails.id} />
          <hr className="border-[#2b2a2c]" />
          <BlogContent content={postDetails.mainContent} />
        </div>
      ) : (
        <div className="flex h-[80vh] flex-col gap-5 justify-center items-center">
          <p className="sm:text-[26px]">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
