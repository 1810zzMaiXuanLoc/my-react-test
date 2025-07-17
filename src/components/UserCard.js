import React from 'react'
import { Link } from 'react-router-dom';
export default function UserCard({ user }) {
    return (
      
    <div className="bg-white rounded-2xl shadow-md p-6">
      <Link to={`/users/${user.id}`}>
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
          </Link>
      <div className="text-sm text-gray-600">
        <p><span className="font-semibold">Số điện thoại:</span> {user.phone}</p>
        <p><span className="font-semibold">Địa chỉ:</span>{user.address?.street}, {user.address?.city}</p>
      </div>
    </div>
  
  )
}
