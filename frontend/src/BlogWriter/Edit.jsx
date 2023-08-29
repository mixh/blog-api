import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { API_URL } from "../config";
import { getToken } from "../routes/utils";

export default function Edit() {
  const { postId } = useParams();
  const location = useLocation();
  const initialPost = location.state && location.state.post;
  const initialTitle = location.state && location.state.title;
  const date = location.state && location.state.date;

  const [editedTitle, setEditedTitle] = useState(initialTitle);
  const [editedPost, setEditedPost] = useState(initialPost);

  const token = getToken();

  const handleEditSubmit = async () => {
    if (!editedTitle || !editedPost) {
      toast.error("Please fill in both title and post before submitting.");
      return;
    }
    if (editedTitle === initialTitle && editedPost === initialPost) {
      toast.error(
        "No changes detected. Please edit the content before submitting."
      );
      return;
    }

    try {
      const response = await axios.put(
        `${API_URL}/${postId}`,
        {
          title: editedTitle,
          post: editedPost,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Post updated successfully!");
      } else {
        toast.error("Error updating post.");
      }
    } catch (error) {
      console.error("Error updating post:", error);
      toast.error("Error updating post.");
    }
  };

  if (!initialPost || !initialTitle || !date) {
    return <>Blog information not found</>;
  }

  return (
    <div className="bg-black py-24 sm:py-32 min-h-screen font-mono">
      <h1 className="font-mono text-center text-white text-3xl pt-3 pb-5">
        Edit the post
      </h1>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          <textarea
            value={editedTitle}
            defaultValue={initialTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="bg-gray-900 text-xl text-white p-4 rounded-lg w-100 h-20"
            placeholder="Enter your title..."
            required
          />
          <h2 className="text-gray-500 text-lg">{date}</h2>
          <textarea
            value={editedPost}
            defaultValue={initialPost}
            onChange={(e) => setEditedPost(e.target.value)}
            className="bg-gray-900 text-xl text-white p-4 rounded-lg w-full h-60"
            placeholder="Enter your post..."
            required
          />
          <button
            onClick={handleEditSubmit}
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
          >
            Edit
          </button>
        </div>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
}
