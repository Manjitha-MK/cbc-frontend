import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import NavSlider from "./navslider";

export default function Header() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  return (
    <>
      {isSliderOpen && (
        <NavSlider
          closeSlider={() => {
            setIsSliderOpen(false);
          }}
        />
      )}
      <header className="bg-white border-[1px] relative flex border-black w-full h-[70px] justify-center items-center">
        <img
          src="/logo.png"
          className="h-[90%] rounded-full cursor-pointer absolute left-[10px]"
        />
        <div className=" absolute text-[#be843d] hidden lg:block font-semibold justify-between text-center top-2 left-[80px]">
          <h1 className="text-[10px]">MK COMPANY <br/> pvt lmt</h1>
        </div>
        <RxHamburgerMenu
          onClick={() => {
            setIsSliderOpen(true);
          }}
          className="text-3xl absolute right-[10px] lg:hidden cursor-pointer text-[#be843d]"
        />

        <div className="items-center w-[500px] justify-between hidden h-full lg:flex ">
          <Link
            to="/"
            className="text-xl text-[#be843d] font-bold hover:border-b border-b-[#926228]"
          >
            {" "}
            Home{" "}
          </Link>
          <Link
            to="/products"
            className="text-xl text-[#be843d] font-bold hover:border-b border-b-[#926228]"
          >
            {" "}
            Products{" "}
          </Link>
          <Link
            to="/about"
            className="text-xl text-[#be843d] font-bold hover:border-b border-b-[#926228]"
          >
            {" "}
            About Us{" "}
          </Link>
          <Link
            to="/contact"
            className="text-xl text-[#be843d] font-bold hover:border-b border-b-[#926228]"
          >
            {" "}
            Contact Us{" "}
          </Link>
          <Link
            to="/cart"
            className="text-xl text-[#be843d] font-bold hover:border-b border-b-[#926228]"
          >
            {" "}
            Cart{" "}
          </Link>
        </div>
        <div className="absolute items-center justify-center hidden h-full p-2 gap-x-6 right-[15px] lg:flex">
          <Link to="/login">
            <button
              className="px-6 py-1 font-semibold transition-all duration-300 border border-orange-400 rounded-lg shadow-md bg-primary text-accent backdrop-blur-lg hover:bg-orange-500/30"
            >
              Login
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}
