import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import Logo from "../../Images/logo.png";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between w-[60%]">
        {/* Logo */}

        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-auto h-12" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Homepage
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
          <Link to="/movies" className="text-white hover:text-gray-300">
            Movies
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
