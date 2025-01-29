import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 left-0 w-full p-2 backdrop-blur-lg bg-black/30 text-white z-50"
      style={{
        backgroundImage: "url('/assets/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="Logo.webp" alt="Home Logo" className="w-10 h-10" />
          <span className="text-lg font-semibold">Home</span>
        </Link>

        <div className="hidden md:flex gap-4">
          <Link
            to="/login"
            className="bg-[#008080] text-white px-4 py-2 rounded-full hover:bg-[#006666]"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black"
          >
            Sign Up
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4">
          <Link
            to="/login"
            className="bg-[#008080] text-white px-4 py-2 rounded-full w-full text-center"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="border border-white text-white px-4 py-2 rounded-full w-full text-center"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
