import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

function BlogListView() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setBlogs(response.data);
    });
  }, []);

  const sortedBlogs = blogs.slice().reverse();

  return (
    <div className="bg-navy py-24 sm:py-32 min-h-screen font-mono">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-2xl leading-8 text-white">
            I write sometimes.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
        <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sortedBlogs.map((blog) => (
            <Link
              to={`/blog/${blog._id}`}
              key={blog._id}
              state={{
                post: blog.post,
                date: blog.date,
                title: blog.title,
              }}
              className="group hover:shadow-lg transition-shadow"
            >
              <div className="bg-black rounded-lg overflow-hidden shadow-md h-full p-6">
                <time dateTime={blog.date} className="text-gray-500 text-base">
                  {blog.date}
                </time>
                <h3 className="mt-4 text-lg font-semibold leading-6 text-white group-hover:text-slate-400 cursor-pointer">
                  {blog.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-100 line-clamp-3">
                  {blog.post.slice(0, 50)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogListView;
