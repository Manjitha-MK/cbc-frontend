import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white w-full h-[100px] relative flex justify-center items-center ">
      <img
        src="/logo.png"
        className="h-[80%] rounded-full cursor-pointer absolute left-[10px] "
      />

      <div className="flex items-center w-[500px] justify-evenly">
        <Link to="/" className="text-xl text-[#be843d] font-bold hover:border-b border-b-[#926228]">
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
        <Link to="/about" className="text-xl text-[#be843d] font-bold hover:border-b border-b-[#926228]">
          {" "}
          About Us{" "}
        </Link>
        <Link to="/contact" className="text-xl text-[#be843d] font-bold hover:border-b border-b-[#926228]">
          {" "}
          Contact Us{" "}
        </Link>
        <Link to="/cart" className="text-xl text-[#be843d] font-bold hover:border-b border-b-[#926228]">
          {" "}
          Cart{" "}
        </Link>
      </div>
    </header>
  );
}
