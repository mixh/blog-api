import { NavLink } from "react-router-dom";
import { getToken } from "../routes/utils";
import { Form } from "react-router-dom";
import LogoutIcon from "../icons/Logout";

export default function Navbar() {
  const token = getToken();
  return (
    <nav className="bg-gray-900 text-white flex justify-center">
      <ul className="flex flex-wrap justify-between space-x-6 max-auto py-4 px-8 font-mono">
        <li>
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive
                ? "text-blue-500"
                : "text-lg font-medium hover:text-blue-500 transition duration-300"
            }
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/works"
            className={(navData) =>
              navData.isActive
                ? "text-blue-500"
                : "text-lg font-medium hover:text-blue-500 transition duration-300"
            }
          >
            projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={(navData) =>
              navData.isActive
                ? "text-blue-500"
                : "text-lg font-medium hover:text-blue-500 transition duration-300"
            }
          >
            blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={(navData) =>
              navData.isActive
                ? "text-blue-500"
                : "text-lg font-medium hover:text-blue-500 transition duration-300"
            }
          >
            contact
          </NavLink>
        </li>
        {token && (
          <li>
            <NavLink
              to="/dashboard"
              className={(navData) =>
                navData.isActive
                  ? "text-blue-500"
                  : "text-lg font-medium hover:text-blue-500 transition duration-300"
              }
            >
              dashboard
            </NavLink>
          </li>
        )}
        {token && (
          <li>
            <Form action="/logout" method="post">
              <button className=" hover:bg-red-600">
                <LogoutIcon style={{ width: "1.25rem", height: "1.25rem" }} />
              </button>
            </Form>
          </li>
        )}
      </ul>
    </nav>
  );
}
