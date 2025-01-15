import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-50">
      <h1 className="mb-4 text-6xl font-extrabold text-red-600">404</h1>
      <h2 className="mb-2 text-2xl font-semibold text-gray-800">
        Oops! Product Not Found
      </h2>
      <p className="mb-6 text-center text-gray-600">
        The product you are looking for might have been removed or is temporarily unavailable.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 font-bold text-white transition duration-300 bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
      >
        Go Back to Home
      </button>
    </div>
  );
}
