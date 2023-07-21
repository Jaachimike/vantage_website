import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="/path/to/logo.png" alt="Logo" className="w-12 h-12" />
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
