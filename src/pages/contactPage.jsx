/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaTwitter, FaX, FaYoutube } from "react-icons/fa6";


const Contact = () => {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-16">
      <div className="mx-auto mb-10 max-w-7xl">
        <div className="flex flex-col-reverse gap-10 lg:flex-row">
          {/* Info Section */}
          <div className="w-full p-6 bg-gray-100 rounded-lg lg:w-1/3">
            <div className="mb-8">
              <h2 className="mb-4 text-lg font-bold">OUR ADDRESS</h2>
              <p className="text-sm text-gray-700">
                Not Your Mother’s Haircare
                <br /> c/o DeMert Brands
                <br /> P.O. Box 82586
                <br /> Tampa, FL 33682
              </p>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-lg font-bold">OUR SOCIAL</h2>
              <div className="flex space-x-4 text-2xl">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FaFacebook />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-800">
                  <FaInstagramSquare />
                </a>
                <a href="#" className="text-red-600 hover:text-red-800">
                  <FaYoutube />
                </a>
                <a href="#" className="text-black hover:text-gray-800">
                  <FaX />
                </a>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-bold">EMAIL US</h2>
              <p className="text-sm text-gray-700">
                For Product Questions/Concerns, Brand Information & General Inquiries:
                <br />
                <a
                  href="mailto:hello@nymbrands.com"
                  className="text-black underline"
                >
                  hello@nymbrands.com
                </a>
              </p>
              <p className="mt-4 text-sm text-gray-700">
                Visit our corporate website: DeMert Brands:
                <br />
                <a
                  href="https://www.demertbrands.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline"
                >
                  www.demertbrands.com
                </a>
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full p-6 bg-white rounded-lg shadow-md lg:w-2/3">
            <h1 className="mb-4 text-3xl font-bold">CONTACT US</h1>
            <h2 className="mb-2 text-lg">SEND US A MESSAGE</h2>
            <p className="mb-6 text-sm text-gray-600">*Denotes Mandatory Fields</p>

            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">Name*</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Email*</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Message</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  rows="5"
                  placeholder="Type message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 text-white bg-black rounded-md hover:bg-gray-800"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Contact;
