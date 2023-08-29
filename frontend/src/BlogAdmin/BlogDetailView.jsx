import React from "react";
/* eslint-disable react/prop-types */

import { useLocation } from "react-router-dom";

const BlogPost = () => {
  const location = useLocation();
  console.log(location.state);
  const post = location.state && location.state.post;
  const title = location.state && location.state.title;
  const date = location.state && location.state.date;

  if (!post) {
    return <>Blog post not found</>;
  }

  if (!title) {
    return <>Blog Title not found</>;
  }

  if (!date) {
    return <>Blog date not found</>;
  }

  return (
    <>
      <div className="bg-navy p-10 sm:py-32 min-h-screen z-50">
        <div className="mx-auto  px-6 lg:px-8">
          <div className="mx-auto  lg:mx-0">
            <h1 className=" mt-3 text-4xl font-bold leading-6 text-white">
              {title}
            </h1>
            <h2 className="text-white text-lg oldstyle-nums"> {date} </h2>
            <p
              className="whitespace-pre-line subpixel-antialiased
            first-letter:text-7xl first-letter:font-bold first-letter:text-white
            first-letter:mr-3 first-letter:float-left text-xl mt-5 text-justify  leading-6 text-gray-200"
            >
              {post}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogPost;
