import React, { useState, useRef, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles.js";

const Form = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState("");
  const [mainContent, setMainContent] = useState("");

  const postCollectRef = collection(db, "blogs");

  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(postCollectRef, {
        title,
        description,
        date,
        language,
        mainContent,
      });
      formRef.current.reset();
      navigate("/");
    } catch (error) {}
  };

  useEffect(() => {
    document.title = `Mitr Joshi - Add Blog`;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="pb-5 max-w-[1000px] m-auto flex flex-col items-center justify-center">
      {!isLoading ? (
        <>
          {isAuthenticated && user?.email === "mitrjoshi26@gmail.com" ? (
            <>
              <div>
                <p className="sm:text-[50px] text-[30px]  font-bold  py-5 m-auto text-textColor text-center">
                  Add Blog <span className="text-primary">./ </span>
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
                  />
                </div>

                <div>
                  <label>Content</label>
                  <textarea
                    required
                    className={`${styles.textarea}`}
                    placeholder="Add content"
                    onChange={(event) => setMainContent(event.target.value)}
                  ></textarea>
                </div>

                <button
                  className="border border-[#2b2a2c] hover:bg-[#2b2a2c50] rounded-lg py-1 px-4  duration-200 max-w-[120px]"
                  type="button"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </>
          ) : (
            <div className="flex h-[80vh] flex-col gap-5 justify-center items-center">
              <p className="sm:text-[26px]">Loading...</p>
            </div>
          )}
        </>
      ) : (
        <div>
          <p className="sm:text-[50px] text-[30px]  font-bold  py-5 m-auto text-textColor text-center">
            You are not authorized for this page{" "}
            <span className="text-primary">./ </span>
          </p>
          <hr className="border-[#2b2a2c]" />
        </div>
      )}
    </div>
  );
};

export default Form;
