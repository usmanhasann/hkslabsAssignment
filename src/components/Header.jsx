import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold text-orange-500">
        <span>
          <img className="max-w-[3rem] cursor-pointer" src={logo} alt="" />
        </span>
      </div>
      {/* Nav  */}
      <nav className="flex gap-6 text-gray-600">
        <a href="#" className="hover:text-orange-500">
          Results
        </a>
        <a href="#" className="hover:text-orange-500 ">
          Pricing
        </a>
        <a href="#" className="hover:text-orange-500 ">
          About
        </a>
      </nav>
      {/* login */}
      <div className="flex gap-4">
        <button className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer">
          Login
        </button>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-sm hover:bg-yellow-500 transition-colors cursor-pointer">
          Create an account
        </button>
      </div>
    </header>
  );
};

export default Header;
