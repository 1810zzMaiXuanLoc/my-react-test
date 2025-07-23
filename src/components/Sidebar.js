import React from 'react';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <aside className="min-h-screen w-64 bg-gray-800 text-white p-4 z-40 hidden md:block">
      <nav className="space-y-4">
        <Link to="/" className="block hover:text-yellow-300 transtion-all duration-200 hover:translate-x-2">🏠 Home</Link>
        <Link to="/" className="block hover:text-yellow-300 transtion-all duration-200 hover:translate-x-2">🛍️ Products</Link>
        <Link to="/users" className="block hover:text-yellow-300 transtion-all duration-200 hover:translate-x-2">👥 Users</Link>
        <Link to="/about" className="block hover:text-yellow-300 transtion-all duration-200 hover:translate-x-2">ℹ️ About</Link>

       
      </nav>
    </aside>
  );
}
