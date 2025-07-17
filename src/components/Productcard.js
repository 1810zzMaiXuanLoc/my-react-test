import React from 'react';
import  { Link } from 'react-router-dom';
export default function Productcard({ product }) {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-xl uppercase truncate">{product.title}</h1>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
      </div>
      <Link to={`/product/${product.id}`}>
      <img
        className="h-56 w-full object-contain mt-2 p-2"
        src={product.image}
        alt={product.title}
      />
      </Link>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-gray-200 font-bold text-xl">${product.price}</h1>
      
        <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
          Add to cart
        </button>
      </div>
    </div>
  );
}
