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
import MyOrdersPage from "./orders";
import Contact from "./contactPage";
import Footerpage from "./footerPage";
import About from "./about";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-orange-100">
      {/* Fixed Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 px-0 py-0 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productInfo/:id" element={<ProductOverview />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/orders" element={<MyOrdersPage />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>

      {/* Footer */}
      <Footerpage />
    </div>
  );
};

export default HomePage;
