import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const googleLogin = useGoogleLogin({
    onSuccess: (res) => {
      console.log(res);
      axios
        .post(import.meta.env.VITE_BACKEND_URL + "/api/users/google", {
          token: res.access_token,
        })
        .then((res) => {
          if (res.data.message === "user created") {
            toast.success(
              "Your Account is created. You can now login via Google."
            );
          } else {
            localStorage.setItem("token", res.data.token);
            if (res.data.user.type === "admin") {
              window.location.href = "/admin";
            } else {
              window.location.href = "/";
            }
          }
        });
    },
  });

  function login() {
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/users/login", {
        email,
        password,
      })
      .then((res) => {
        if (!res.data.user) {
          toast.error(res.data.message);
          return;
        }
        toast.success("Login successful");
        localStorage.setItem("token", res.data.token);
        if (res.data.user.type === "admin") {
          window.location.href = "/admin";
        } else {
          window.location.href = "/";
        }
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      <div className="w-full max-w-md p-8 bg-white border border-orange-200 rounded-lg shadow-md">
        <h2 className="mb-6 text-3xl font-bold text-center text-orange-600">
          Login
        </h2>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              value={email}
              id="email"
              className="w-full p-3 text-gray-800 bg-orange-100 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              id="password"
              className="w-full p-3 text-gray-800 bg-orange-100 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="button"
            className="w-full px-4 py-2 mb-4 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            onClick={login}
          >
            Login
          </button>
        </form>
        <div className="mb-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-orange-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
        <button
          type="button"
          className="w-full px-4 py-2 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          onClick={googleLogin}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
