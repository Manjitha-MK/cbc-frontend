import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("your email");
  const [password, setPassword] = useState("");

  function login() {
    axios
      .post("http://localhost:5000/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.user == null) {
          toast.error(res.data.message);
          return;
        }
        toast.success("Login success");
        localStorage.setItem("token", res.data.token);
        if (res.data.user.type == "admin") {
          window.location.href = "/admin";
        } else {
          window.location.href = "/";
        }
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-center text-white">
          Login
        </h2>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Email Address
            </label>
            <input
              type="email"
              defaultValue={email}
              id="email"
              className="w-full p-3 text-white bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              defaultValue={password}
              id="password"
              className="w-full p-3 text-white bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Submit Button */}
          <button
            type="button"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            onClick={login}
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Do not have an account?{" "}
            <a href="/signup" className="text-blue-400 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
