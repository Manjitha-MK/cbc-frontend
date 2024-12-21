/* eslint-disable no-unused-vars */
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-start justify-between p-8 space-x-32 lg:flex-row lg:p-16">
      {/* Form Section */}
      <div className="w-full mb-8 lg:w-2/3 lg:mb-0">
        <h1 className="mb-6 text-3xl font-bold">CONTACT US</h1>
        <h2 className="mb-4 text-lg">SEND US A MESSAGE</h2>
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
  );
};

export default Contact;
