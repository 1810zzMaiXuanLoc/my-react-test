import React, { useEffect, useState } from 'react'

export default function Profile() {
    const[loading, setLoading]=useState(true);
    const [user,setUser]=useState(null);
    useEffect(()=>{
        const fetchUser=JSON.parse(localStorage.getItem('user'));
        setTimeout(() => {
          setUser(fetchUser);
          setLoading(false);
        }, 500);
      
        
    },[]);
     if (loading) {
  return (
    <div className='fixed inset-0 z-50 bg-gray-800 flex justify-center items-center backdrop-blur-lg'>
        <div className='animate-ping w-12 h-12 rounded-full border-4 border-blue-300 border-dashed'></div>
    </div>  
  );
}
    if(!user){
        return <div className='text-center p-6'>Bạn chưa đăng nhập</div>
    }
  return (
    <div className="bg-gradient-to-r from-yellow-200 to-pink-400 min-h-screen p-6 flex items-center justify-center">
  <div className="w-full max-w-lg bg-white/40 backdrop-blur-md rounded-xl shadow-xl p-8">
    <div className="flex flex-col items-center text-center space-y-6">
      <img
        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`}
        alt="avatar"
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
      />
      <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
      <div className="flex justify-center gap-8 mt-4">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-800">Following</h3>
          <p className="text-sm text-gray-700">120</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-800">Followers</h3>
          <p className="text-sm text-gray-700">200</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-800">Posts</h3>
          <p className="text-sm text-gray-700">15</p>
        </div>
      </div>

     
      <div className="flex gap-4 mt-6">
        <button className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform duration-200">
          💬 Message
        </button>
        <button className="px-6 py-2 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform duration-200">
          ➕ Follow
        </button>
      </div>
    </div>
  </div>
</div>

  )
}
