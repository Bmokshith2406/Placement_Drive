import React, { useState } from "react";
import axios from "../api/axios";
import { useAuth } from "../context/AuthProvider";
import "./PostForm.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const POST_URL = "/auth/updates";
const PostForm = ({ onPost }) => {
  const { auth, setAuth } = useAuth();
  const [content, setContent] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      // Include the access token in the headers
      const response = await axios.post(
        POST_URL,
        { user: auth.user, content },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      onPost(); // Trigger a refresh of the posts after posting
      setContent(""); // Clear the input field
    } catch (error) {
      console.error("Error posting message:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>Welcome, {auth.user} !</h1>
        <p>Your role is:{auth.roles}</p>
      </div>
      <div className="create">
        <div className="container">
          <strong>Post an Update</strong>
        </div>
        <div className="container-1">
          <form onSubmit={handlePost}>
            <textarea
              name="tweet"
              id="tweet"
              cols="30"
              rows="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <div>
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostForm;
