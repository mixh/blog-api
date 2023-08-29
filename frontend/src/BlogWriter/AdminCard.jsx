import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "../config";
import { getToken } from "../routes/utils";
import { toast, ToastContainer } from "react-toastify";
import EditIcon from "../icons/Edit";
import DeleteIcon from "../icons/Delete";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [token]);

  const handleEdit = (blogId) => {
    navigate(`/admin/edit/${blogId}`);
  };

  const handleDelete = (blogId) => {
    axios
      .delete(`${API_URL}/${blogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Post deleted successfully");
        toast.success("Post deleted successfully!", {
          autoClose: 10000, // Show for 10 seconds
        });
        setBlogs(blogs.filter((blog) => blog._id !== blogId));
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        toast.error("Error deleting the post:");
      });
  };

  const sortedBlogs = blogs.slice().reverse();

  return (
    <div className="bg-navy py-24 sm:py-32 min-h-screen font-mono">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
          {sortedBlogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-black rounded-lg overflow-hidden shadow-md"
            >
              <Link
                to={`/blog/${blog._id}`}
                state={{
                  post: blog.post,
                  date: blog.date,
                  title: blog.title,
                }}
                className="cursor-pointer"
              >
                <div className="p-6">
                  <time dateTime={blog.date} className="text-white text-base">
                    {blog.date}
                  </time>
                  <h3 className="mt-4 text-lg font-semibold leading-6 text-white cursor-pointer">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white line-clamp-3">
                    {blog.post.slice(0, 50)}...
                  </p>
                </div>
              </Link>
              <div className="flex justify-between p-4">
                <Link
                  onClick={() => handleEdit(blog._id)}
                  state={{
                    post: blog.post,
                    date: blog.date,
                    title: blog.title,
                  }}
                  className="text-blue-500 cursor-pointer w-5 h-5 mr-1"
                >
                  <EditIcon />
                </Link>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="text-red-500 cursor-pointer  w-5 h-5 mr-1"
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
}

export default BlogList;
