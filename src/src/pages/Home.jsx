import React, { useState, useEffect, useContext } from "react";
import { Content } from "../layouts";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();

  const [postList, setPostList] = useState([]);

  const postCollectRef = collection(db, "blogs");

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(
        query(collection(db, "blogs"), orderBy("date", "desc"))
      );
      setPostList(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getPosts();
  }, []);

  useEffect(() => {
    document.title = `Mitr Joshi - Blog`;
  }, []);

  return (
    <div className="max-w-[1000px] m-auto">
      <div className="flex items-center justify-center py-5">
        <p className="sm:text-[50px] text-[30px]  font-bold m-auto text-textColor">
          Blog <span className="text-primary">./ </span>
        </p>
      </div>

      <hr class="border-[#2b2a2c]" />

      <div className="py-5">
        {postList.length !== 0 ? (
          <div className="grid gap-4">
            {postList.map((posts, i) => {
              return (
                <div key={i}>
                  <Content
                    title={posts.title}
                    description={posts.description}
                    date={posts.date}
                    id={posts.id}
                    language={posts.language}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex h-[50vh] flex-col gap-5 justify-center items-center">
            <p className="sm:text-[26px]">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
