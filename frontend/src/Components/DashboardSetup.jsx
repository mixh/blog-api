import BlogList from "../BlogWriter/AdminCard";
import WritePage from "../BlogWriter/Write";
import React from "react";

const DashboardSetup = () => {
  return (
    <>
      <WritePage />
      <BlogList />
    </>
  );
};

export default DashboardSetup;
