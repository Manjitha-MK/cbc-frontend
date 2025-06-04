/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footerpage() {
  return (
    <footer className="pt-10 pb-6 text-gray-700 bg-pink-50">
      <div className="container grid grid-cols-1 gap-8 px-4 mx-auto text-center md:grid-cols-3 md:text-left">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600">CosmeticGlow</h2>
          <p className="mt-2 text-sm">
            Empowering your beauty with premium cosmetic products.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="mb-2 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="transition hover:text-pink-500">Home</a></li>
            <li><a href="#" className="transition hover:text-pink-500">Products</a></li>
            <li><a href="#" className="transition hover:text-pink-500">About Us</a></li>
            <li><a href="#" className="transition hover:text-pink-500">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="mb-2 text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center gap-4 text-xl text-pink-600 md:justify-start">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="pt-4 mt-8 text-sm text-center text-gray-500 border-t border-gray-200">
        &copy; 2025 CosmeticGlow. All Rights Reserved.
      </div>
    </footer>
  );
}
