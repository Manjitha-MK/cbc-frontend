// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductOverview from "./productOverview";
import ProductPage from "./product";
import LoginPage from "./loginPage";
import Cart from "./cart";


const HomePage = () => {
  return (
    <div className="w-full h-screen bg-gray-100 ">
      <Header />
      <div className="w-full h-[calc(100vh-100px">
        <Routes>
          <Route path="/" element={<h1></h1>} />
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/login" elemen={<LoginPage/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/productInfo/:id" element={<ProductOverview/>} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
