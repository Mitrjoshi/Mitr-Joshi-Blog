import React, { useContext, useState, useEffect } from "react";
import { ContextConstant } from "../utils/Context";
import { useLocation, Link } from "react-router-dom";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { Content } from "../layouts";

const Search = () => {
  const [postList, setPostList] = useState([]);

  const locatiobn = useLocation();
  const searchText = location.pathname.slice(8);

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
    document.title = `Mitr Joshi - ${searchText.replace("%20", " ")}`;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="max-w-[1000px] m-auto">
      <div className="flex items-center justify-center py-5">
        <p className="sm:text-[50px] text-[30px] font-bold m-auto text-textColor">
          Search <span className="text-primary">./ </span>
        </p>
      </div>

      <hr class="border-[#2b2a2c]" />

      {postList.filter((data) =>
        data.language.toLowerCase().includes(searchText.toLowerCase())
      ).length > 0 ? (
        <div className="py-5">
          <div className="grid gap-4">
            {postList
              .filter((data) =>
                data.language.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((data, i) => {
                return (
                  <div key={i}>
                    <Content
                      title={data.title}
                      description={data.description}
                      date={data.date}
                      id={data.id}
                      language={data.language}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div className="pb-5">
          <div className="flex my-5 items-center text-center justify-center">
            <h1 className="sm:text-[24px] text-[18px]">
              Oops, no results found for `
              <span className="font-semibold text-[#9e8af9]">
                {searchText.replace("%20", " ")}
              </span>
              `
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
