// components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-xl font-bold">REACT TEST MAI XUÂN LỘC</h1>
        </Link>

        {/* Hamburger icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              // Icon X (đóng)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Icon menu (☰)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu items */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/" className="hover:text-yellow-300">Products</Link>
          <Link to="/users" className="hover:text-yellow-300">Users</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-yellow-300">Home</Link>
          <Link to="/" className="block hover:text-yellow-300">Products</Link>
          <Link to="/users" className="block hover:text-yellow-300">Users</Link>
          <Link to="/about" className="block hover:text-yellow-300">About</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
