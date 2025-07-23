import React, { useEffect, useState } from 'react';
import Productcard from '../components/Productcard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setProducts(data);
        setLoading(false);
        }, 500);
        
      });
  }, []);

  if (loading) {
  return (
    <div className="flex justify-center items-center h-screen space-x-2">
      <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-150"></div>
      <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-300"></div>
    </div>
  );
}
// 
  return (
    <div className="max-w-6xl  mx-auto px-4 py-6 ">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {products.map((product) => (
    <Productcard key={product.id} product={product} />
  ))}
</div>

    </div>
  );
}
