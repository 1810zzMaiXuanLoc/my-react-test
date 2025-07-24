// src/pages/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
            setProduct(data);
            setLoading(false);
        }, 500);
      
      });
  }, [id]);

 if (loading) {
  return (
    <div className='fixed inset-0 z-50 bg-gray-800 flex justify-center items-center backdrop-blur-lg'>
        <div className='animate-ping w-12 h-12 rounded-full border-4 border-blue-300 border-dashed'></div>
    </div>  
  );
}

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-full h-64 object-contain" />
      <p className="text-gray-700 mt-4">{product.description}</p>
      <h2 className="text-xl font-semibold mt-4">${product.price}</h2>
    </div>
  );
}
