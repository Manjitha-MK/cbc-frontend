// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductOverview from "./productOverview";
import ProductPage from "./product";
import LoginPage from "./loginPage";
import Cart from "./cart";
import Home from "./home";
import Footerpage from "./footerPage";


const HomePage = () => {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="w-full h-[calc(100vh-100px)]">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/login" elemen={<LoginPage/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/productInfo/:id" element={<ProductOverview/>} />
        </Routes>
      </div>
      <Footerpage/>
    </div>
  );
};

export default HomePage;
