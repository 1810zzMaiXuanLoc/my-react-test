import React from 'react';
import  { Link } from 'react-router-dom';
export default function Productcard({ product }) {
  return (
<div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-xl uppercase truncate">{product.title}</h1>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
      </div>
      <Link to={`/product/${product.id}`}>
      <img
        className="h-48 w-full object-contain p-4 transition-transform duration-300 hover:scale-105"
        src={product.image}
        alt={product.title}
      />
      </Link>
     <div className="bg-gray-900 text-white px-4 py-3 space-y-2 rounded-b-lg">
  <div className="text-xl font-bold text-yellow-300">${product.price}</div>
  <button className="w-full bg-white text-gray-900 font-semibold rounded px-3 py-2 hover:bg-gray-200 transition">
    🛒 Add to cart
  </button>
</div>

    </div>
  );
}
