// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductOverview from "./productOverview";
import ProductPage from "./product";

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-gray-100 ">
      <Header />
      <div className="w-full h-[calc(100vh-100px)] bg-blue-800">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/productInfo/:id" element={<ProductOverview/>} />

        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
