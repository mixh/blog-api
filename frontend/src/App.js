import React from "react";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import Auth from "./routes/Auth";
import Home from "./routes/home";
import Contact from "./routes/Contact";
import Dashboard from "./routes/Dashboard";
import { action as LogoutAction, tokenLoader } from "./routes/utils";
import "react-toastify/dist/ReactToastify.css";
import Work from "./routes/Works";
import ErrorPage from "./Components/Error-Page";
import BlogDetailView from "./BlogAdmin/BlogDetailView";
import BlogListView from "./BlogAdmin/BlogListView";
import Edit from "./BlogWriter/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <BlogListView />,
      },
      {
        path: "/blog/:postId",
        element: <BlogDetailView />,
      },
      {
        path: "admin/edit/:postId",
        element: <Edit />,
      },
      {
        path: "/works",
        element: <Work />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/logout",
        action: LogoutAction,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
