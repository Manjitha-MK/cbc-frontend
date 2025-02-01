import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import NavSlider from "./navslider";

export default function Header() {

  const [isSliderOpen, setIsSliderOpen] = useState(false);

  return (
    <>
      {isSliderOpen&&<NavSlider closeSlider={()=>{setIsSliderOpen(false)}}/>}
      <header className="bg-white w-full h-[100px] relative flex justify-center items-center">
        <img
          src="/logo.png"
          className="h-[80%] rounded-full cursor-pointer absolute left-[10px] "
        />
        <RxHamburgerMenu onClick={()=>{setIsSliderOpen(true)}} className="text-3xl absolute right-[10px] lg:hidden cursor-pointer text-[#be843d]" />

        <div className="items-center w-[500px] justify-between hidden h-full lg:flex md:flex">
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
      </header>
    </>
  );
}
