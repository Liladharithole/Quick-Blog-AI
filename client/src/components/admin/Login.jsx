import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-2xl font-semibold">
              {" "}
              <span className="text-primary">Admin</span> Login
            </h1>
            <p className="text-gray-500">Enter your credentials to login</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-6 w-full sm:max-w-md text-gray-600"
          >
            <div className="flex flex-col">
              <label>Email</label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="border-b-2 border-gray-300 p-2 outline-none mb-6 focus:border-primary"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                type="password"
                required
                placeholder="Enter your password"
                className="border-b-2 border-gray-300 p-2 outline-none mb-6 focus:border-primary"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full py-2 bg-primary text-white  cursor-pointer hover:bg-primary/80 transition-all duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
