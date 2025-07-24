import React from 'react'
import UserCard from '../components/UserCard';

import { useState, useEffect } from 'react';
export default function UserList() {
const [user,setUser]=useState([]);
const [loading,setLoading]=useState(true);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setTimeout(() => {
        setUser(data);
        setLoading(false);
        console.log(data);
      }, 1000);
    });
}, []);

 if (loading) {
  return (
    <div className='fixed inset-0 z-50 bg-gray-800 flex justify-center items-center backdrop-blur-lg'>
        <div className='animate-ping w-12 h-12 rounded-full border-4 border-blue-300 border-dashed'></div>
    </div>  
  );
}
  return (
      <div className="max-w-6xl mx-auto px-4 py-10">
  <h1 className="text-2xl font-bold text-gray-800 mb-6">Danh sách người dùng</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {user.map((u)=>(
    <UserCard key={u.id} user={u} />
  ))}
  </div>
</div>


  )
}
