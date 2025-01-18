import { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6"; // React icons


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "/home/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white">
      <nav className="px-4 py-4 lg:px-14">
        <div className="flex items-center justify-between gap-8 text-base">
          <a
            href=""
            className="flex items-center space-x-3 text-2xl font-semibold"
          >
            <img
              src=""
              alt=""
              className="items-center inline-block w-12 h-12"
            />
            <span className="ml-2 text-lg font-bold text-[#263238]">MK</span>
          </a>

          {/* Menu for large devices */}
          <ul className="hidden space-x-12 md:flex">
            {navItems.map(({link,  path }) => (
              <li key={path}>
                {link}
              </li>
            ))}
          </ul>
          {/* btn for large devices */}
          <div className="items-center hidden space-x-12 lg:flex">
            <a
              href="/"
              className="items-center hidden lg:flex text-brandPrimary hover:text-gray-900"
            >
              Login
            </a>
            <button className="px-4 py-2 text-white transition-all duration-300 rounded bg-brandPrimary hover:bg-neutralDGrey">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

       
        
      </nav>
    </header>
  );
};

export default Navbar;
