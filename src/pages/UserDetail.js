import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function UserDetail() {
    const {id} =useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
            setTimeout(() => {
                   setUser(data);
                   setLoading(false);
            }, 500);
             
            });
    }, [id]);
     if (loading) {
  return (
    <div className="flex justify-center items-center h-screen space-x-2">
      <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-150"></div>
      <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-300"></div>
    </div>
  );
}
    return (
      
    <div className="bg-white rounded-2xl shadow-md p-6">
       <div className="flex items-center space-x-4 mb-4">
        <img
          src={`https://i.pravatar.cc/150?u=${user.id}`}
          alt="Avatar"
          className="w-14 h-14 rounded-full object-cover cursor-pointer"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
  
      </div>
      <div className="text-sm text-gray-600">
        <p><span className="font-semibold">Số điện thoại:</span> {user.phone}</p>
        <p><span className="font-semibold">Địa chỉ:</span>{user.address?.street}, {user.address?.city}</p>
      </div>
    </div>
  
  )
}
