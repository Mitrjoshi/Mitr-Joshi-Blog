import React, { useState, useRef, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  addDoc,
  collection,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { styles } from "../styles.js";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Edit = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState("");
  const [mainContent, setMainContent] = useState("");
  const [postDetails, setPostDetails] = useState([]);

  const postCollectRef = collection(db, "blogs");

  const formRef = useRef(null);
  const navigate = useNavigate();

  //update the state according to the post details
  useEffect(() => {
    setTitle(postDetails?.title);
    setDescription(postDetails?.description);
    setDate(postDetails?.date);
    setLanguage(postDetails?.language);
    setMainContent(postDetails?.mainContent);
  }, [postDetails]);

  const location = useLocation(); //getting the id from url
  const id = location.pathname.slice(6);

  //updating the post
  const handleEdit = async (
    updatedTitle,
    updatedDescription,
    updatedDate,
    updatedLanguage,
    updatedMainContent
  ) => {
    const specificDoc = doc(db, "blogs", id);
    const newFields = {
      title: updatedTitle,
      description: updatedDescription,
      date: updatedDate,
      language: updatedLanguage,
      mainContent: updatedMainContent,
    };
    await updateDoc(specificDoc, newFields);
  };

  const postCollectRefParticular = doc(db, "blogs", id);

  //getting the post details
  useEffect(() => {
    const getPost = async () => {
      const docSnap = await getDoc(postCollectRefParticular);
      if (docSnap.exists()) {
        setPostDetails({ ...docSnap.data(), id: docSnap.id });
      } else {
        console.log("Document not found");
      }
    };
    getPost();
  }, [id]);

  //delete the post
  const deletePost = async (uniqueId) => {
    const postDoc = doc(db, "blogs", uniqueId);
    await deleteDoc(postDoc);
    navigate("/");
  };

  useEffect(() => {
    document.title = `Mitr Joshi - Edit`;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      {postDetails.length !== 0 ? (
        <div className="pb-5 max-w-[1000px] m-auto flex flex-col items-center justify-center">
          {isAuthenticated && user?.email === "mitrjoshi26@gmail.com" ? (
            <>
              <div>
                <p className="sm:text-[50px] text-[30px]  font-bold  py-5 m-auto text-textColor text-center">
                  Edit Blog <span className="text-primary">./ </span>
                </p>
              </div>
              <hr class="border-[#2b2a2c]" />
              <form className="flex flex-col gap-2 w-[350px]" ref={formRef}>
                <div>
                  <label>Title</label>
                  <input
                    required
                    type="text"
                    placeholder="Add title"
                    className={`${styles.input}`}
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                  />
                </div>
                <div>
                  <label>Description</label>
                  <input
                    required
                    type="text"
                    placeholder="Add description"
                    className={`${styles.input}`}
                    onChange={(event) => setDescription(event.target.value)}
                    value={description}
                  />
                </div>

                <div>
                  <label>Date</label>
                  <input
                    required
                    type="text"
                    placeholder="Add date"
                    className={`${styles.input}`}
                    onChange={(event) => setDate(event.target.value)}
                    value={date}
                  />
                </div>

                <div>
                  <label>Language</label>
                  <input
                    required
                    type="text"
                    placeholder="Add language"
                    className={`${styles.input}`}
                    onChange={(event) => setLanguage(event.target.value)}
                    value={language}
                  />
                </div>

                <div>
                  <label>Content</label>
                  <textarea
                    required
                    className={`${styles.textarea}`}
                    placeholder="Add content"
                    onChange={(event) => setMainContent(event.target.value)}
                    value={mainContent}
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <button
                    className="border border-[#2b2a2c] hover:bg-[#2b2a2c50] rounded-lg py-1 px-4  duration-200"
                    type="button"
                    onClick={() =>
                      handleEdit(
                        title,
                        description,
                        date,
                        language,
                        mainContent
                      )
                    }
                  >
                    Save
                  </button>
                  <button
                    className="border text-red-600 border-[#2b2a2c] hover:bg-[#2b2a2c50] rounded-lg py-1 px-4  duration-200"
                    type="button"
                    onClick={() => deletePost(postDetails.id)}
                  >
                    Delete
                  </button>
                </div>
                <Link
                  to={`/blog/${postDetails.id}`}
                  className="flex justify-center items-center border border-[#2b2a2c] hover:bg-[#2b2a2c50] rounded-lg py-1 px-4  duration-200"
                >
                  <p>Preview</p>
                </Link>
              </form>
            </>
          ) : (
            <div className="max-w-[1000px] m-auto">
              <div>
                <p className="sm:text-[50px] text-[30px]  font-bold  py-5 m-auto text-textColor text-center">
                  You are not authorized for this page{" "}
                  <span className="text-primary">./ </span>
                </p>
              </div>
              <hr className="border-[#2b2a2c]" />
            </div>
          )}
        </div>
      ) : (
        <div className="flex h-[80vh] flex-col gap-5 justify-center items-center">
          <p className="sm:text-[26px]">Loading...</p>
        </div>
      )}
    </>
  );
};

export default Edit;
