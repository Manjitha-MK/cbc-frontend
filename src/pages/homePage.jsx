// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductOverview from "./productOverview";
import ProductPage from "./product";
import LoginPage from "./loginPage";
import Cart from "./cart";
import Home from "./home";
import ShippingPage from "./shipping";

// import Footerpage from "./footerPage";


const HomePage = () => {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="w-full h-[calc(100vh-100px)]">
        <Routes path="/*">
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/login" elemen={<LoginPage/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/productInfo/:id" element={<ProductOverview/>} />
          <Route path="/shipping" element={<ShippingPage/>} />
        </Routes>
      </div>
      {/* <Footerpage/> */}
    </div>
  );
};

export default HomePage;
