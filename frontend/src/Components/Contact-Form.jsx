import { useState } from "react";
import { API_URL } from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email,
      name,
      message,
    };

    try {
      const response = await fetch(API_URL + "/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Email sent successfully");
        toast.success("form submitted successfully");
        setEmail("");
        setName("");
        setMessage("");
      } else {
        toast.error("Unable to submit form");
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error in sending mail", error);
    }
  };
  return (
    <>
      <div className="p-6 bg-white shadow-md rounded-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Name:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 text-black"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Email:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 text-black"
              type="email"
              placeholder="Your Email."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Message:
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 text-black"
              placeholder="Type your message here."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-violet-700 hover:bg-violet-900 text-white px-4 py-2 rounded-md"
          >
            Send
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default ContactForm;
