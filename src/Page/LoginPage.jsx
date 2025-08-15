import React from 'react'; 
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
<div className="w-full h-screen flex items-center justify-center">
  <div className="bg-gray-200 flex flex-col gap-[15px] rounded-[15px] px-[20px] py-[30px]" style={{ boxShadow: "0px 4px 10px 1px" }}>
    <h1 className="text-2xl font-bold mb-4">Login Page</h1>

    <div className="flex items-center w-full">
      <label htmlFor="email" className="w-[30%]">Email/User Id:</label>
      <input type="email" id="email" className=" p-2 border rounded flex-grow" />
    </div>

    <div className="flex items-center w-full">
      <label htmlFor="password" className="w-[30%]">Password:</label>
      <input type="password" id="password" className="p-2 border rounded flex-grow" />
    </div>

    <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </div>

    <div>
        if you are new? <Link to="/register"><a className="text-blue-500">Register</a></Link>
    </div>
  </div>
</div>

  );
}