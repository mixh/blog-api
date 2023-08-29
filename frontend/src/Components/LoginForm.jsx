import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../config";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = { email: email, password: password };
      const response = await fetch(API_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        const expiration = new Date();
        expiration.setHours(expiration.getHours() + 1);
        localStorage.setItem("expiration", expiration.toISOString());
        toast.success("authentication successful!!");
        navigate("/dashboard");
      } else {
        toast.error("Couldnt Authenticate the User.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error);
    }
  };

  return (
    <>
      <div className="font-mono flex min-h-screen justify-center items-center bg-navy">
        <div className="w-full max-w-md bg-black rounded-lg shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            Sign in to your account
          </h2>
          <form className="space-y-4 w-full">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-md font-semibold"
                onClick={handleLogin}
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-white">
            Not Mihir?{" "}
            <a
              href="/"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Click here to go back.
            </a>
          </p>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginForm;
