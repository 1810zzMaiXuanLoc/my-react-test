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
    <div className='fixed inset-0 z-50 bg-gray-800 flex justify-center items-center backdrop-blur-lg'>
        <div className='animate-ping w-12 h-12 rounded-full border-4 border-blue-300 border-dashed'></div>
    </div>  
  );
}
// 
  return (
    <div className="max-w-6xl  mx-auto px-4 py-6 ">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {products.map((p) => (
    <Productcard key={p.id} product={p} />
  ))}
</div>

    </div>
  );
}
