// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header";

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/productInfo" element={<h1>Product Info</h1>} />

        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
