import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate= useNavigate();
  const [user, setUser] = useState(null);
  const [showinfo, setShowInfo] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <header className="bg-gray-900 text-white relative z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-xl font-bold">REACT TEST MAI XUÂN LỘC</h1>
        </Link>
{user ? (
<div className="relative">
    <div
      className="flex items-start space-x-3 rounded-md cursor-pointer"
      onClick={() => setShowInfo(!showinfo)}
    >
      <div className="img">
        <img
          src="https://ui-avatars.com/api/?name=Mai+Xuan+Loc&background=random"
          alt="avatar"
  className="w-11 h-11 min-w-11 rounded-full border-2 border-white object-cover"
        />
      </div>
      <div className="text-white">
        <h3 className="font-semibold text-sm">{user.name}</h3>
        <p className="text-xs text-gray-300">{user.email}</p>
      </div>
    </div>

    {showinfo && (
      <div className="info_log absolute bg-gray-700 shadow-lg rounded top-full mt-[13px] p-4 w-64 right-0">
        
            <div
                         className="flex items-center space-x-3 border-b-2 border-gray-400 w-full pb-3"
                           >                
                      <div className="img">
                        <img
                          src="https://ui-avatars.com/api/?name=Mai+Xuan+Loc&background=random"
                          alt="avatar"
                          className="w-11 h-11 rounded-full border-2 border-white object-cover"
                        />
                      </div>
                      <div className="text-white">
                        <h3 className="font-semibold text-sm">{user.name}</h3>
                        <p className="text-xs text-gray-300">{user.email}</p>
                      </div>
          </div>
            <Link to="/profile" className='flex p-1 space-x-3 mt-1 items-center hover:bg-blue-500 rounded-md pb-2'>
            <span className='text-xl'>👤</span>
            <p className='text-white text-sm'>Tài khoản của tôi</p>
            </Link>
            <div className='flex items-center p-2 text-white text-sm space-x-3 hover:bg-blue-500 rounded-md cursor-pointer' onClick={()=>{
              localStorage.removeItem('user');
              navigate("/")
              window.location.reload();
            }}>
             
                <span className='text-xl'>↩️</span>
                <p> Đăng Xuất</p>
             
            </div>
      </div>
    )}
  </div>
) : (
  <Link
    to="/register"
    className="block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
  >
    Đăng ký
  </Link>
)}

       
      </div>
    </header>
  );
}

export default Header;
