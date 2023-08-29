import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { getToken } from "../routes/utils";
import { toast, ToastContainer } from "react-toastify";

function WritePage() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const token = "Bearer " + getToken();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePostChange = (e) => {
    setPost(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${API_URL}/`,
        {
          title: title,
          post: post,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 201) {
        toast.success("Post submitted successfully!", {
          autoClose: 10000, // Show for 10 seconds
        });
        setTitle("");
        setPost("");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error submitting post:", error);
    }
  };

  return (
    <div className="bg-navy py-24 sm:py-32 min-h-screen font-mono ">
      <h1 className="font-mono text-center text-white text-3xl pt-3 pb-5 underline decoration-dotted">
        Write a post
      </h1>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <label className="text-white font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="bg-black rounded-lg p-2 text-white"
            required
          />

          <label className="text-white font-semibold">Post</label>
          <textarea
            value={post}
            onChange={handlePostChange}
            rows="6"
            className="bg-black rounded-lg p-2 h-80 text-white"
            required
          />

          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
}

export default WritePage;
