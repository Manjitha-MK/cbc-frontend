/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export default function NavSlider({ closeSlider }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeSlider}
        className="fixed inset-0 z-10 bg-black bg-opacity-70 lg:hidden"
      ></div>

      {/* Slider panel */}
      <div className="fixed top-0 left-0 z-20 flex flex-col h-full bg-white w-72">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <img
            src="/logo.png"
            alt="Logo"
            className="rounded-full cursor-pointer w-14 h-14"
          />
           <div className="mt-2 ml-0 text-center text-[#be843d] text-[12px] font-semibold leading-tight">
            <p>MK COMPANY</p>
            <p>pvt lmt</p>
          </div>
          <IoMdClose
            onClick={closeSlider}
            className="text-3xl cursor-pointer text-accent"
          />
         
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-6 p-6 text-xl font-bold text-accent">
          <Link to="/" onClick={closeSlider} className="hover:border-b border-b-accent">
            Home
          </Link>
          <Link to="/products" onClick={closeSlider} className="hover:border-b border-b-accent">
            Products
          </Link>
          <Link to="/about" onClick={closeSlider} className="hover:border-b border-b-accent">
            About Us
          </Link>
          <Link to="/contact" onClick={closeSlider} className="hover:border-b border-b-accent">
            Contact Us
          </Link>
          <Link to="/cart" onClick={closeSlider} className="hover:border-b border-b-accent">
            Cart
          </Link>
        </nav>
      </div>
    </>
  );
}
