import React from "react";
import { Form } from "react-router-dom";
import LogoutIcon from "../../icons/Logout";

export default function Logout() {
  return (
    <div className="flex justify-left items-center py-3 bg-black">
      <Form action="/logout" method="post">
        <button className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-1 hover:bg-red-600">
          <LogoutIcon style={{ width: "1.25rem", height: "1.25rem" }} />
          <span>Logout</span>
        </button>
      </Form>
    </div>
  );
}
