import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import NavSlider from "./navslider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <>
      {isSliderOpen && <NavSlider closeSlider={() => setIsSliderOpen(false)} />}

      <header className="relative flex items-center justify-between w-full h-16 px-4 bg-white border border-black md:px-8 lg:px-16">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-12 h-12 rounded-full cursor-pointer"
          />
          {/* Show company name on md and up */}
          <div className="hidden md:flex flex-col text-[#be843d] font-semibold text-xs leading-tight select-none">
            <span>MK COMPANY</span>
            <span>pvt lmt</span>
          </div>
        </div>

        {/* Center: Navigation Links (lg and up) */}
        <nav className="hidden lg:flex gap-8 text-[#be843d] font-bold text-lg">
          <Link to="/" className="hover:border-b border-b-[#926228] transition">
            Home
          </Link>
          <Link
            to="/products"
            className="hover:border-b border-b-[#926228] transition"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="hover:border-b border-b-[#926228] transition"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:border-b border-b-[#926228] transition"
          >
            Contact Us
          </Link>
          <button
            onClick={() => {
              const token = localStorage.getItem("token");
              if (!token) {
                toast.error("You must be logged in to access the cart.");
              } else {
                navigate("/cart");
              }
            }}
            className="hover:border-b border-b-[#926228] transition text-left"
          >
            Cart
          </button>
        </nav>

        {/* Right: Login Button (md and up) & Hamburger Menu (sm and md) */}
        <div className="flex items-center gap-4">
          {/* Login button: visible md and above */}
          <Link to="/login" className="hidden md:inline">
            <button
              className="px-5 py-1 font-semibold transition border border-orange-400 rounded-lg shadow-md bg-primary text-accent backdrop-blur-lg hover:bg-orange-500/30"
              type="button"
            >
              Login
            </button>
          </Link>

          {/* Hamburger: visible only sm and md */}
          <button
            onClick={() => setIsSliderOpen(true)}
            className="lg:hidden text-[#be843d] text-3xl focus:outline-none"
            aria-label="Open menu"
          >
            <RxHamburgerMenu />
          </button>
          <button
            className="px-5 py-1 font-semibold transition border border-orange-400 rounded-lg shadow-md bg-primary text-accent backdrop-blur-lg hover:bg-orange-500/30"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>
    </>
  );
}
