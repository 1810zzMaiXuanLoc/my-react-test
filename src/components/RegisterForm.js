import React from 'react';
import { set, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    setLoading(true);
    localStorage.setItem('user', JSON.stringify(data));
    setTimeout(() => {
         navigator("/")
         console.log("Đăng ký thành công:", data);
         window.location.reload();
    }, 2000);
   
  };
 if (loading) {
  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-lg'>
        <div className='animate-spin w-12 h-12 rounded-full border-4 border-white border-dashed'></div>
    </div>  
  );
}

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Form đăng ký</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block">Tên:</label>
          <input {...register("name", { required: "Tên không được trống" })}
                 className="w-full p-2 border rounded" />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block">Email:</label>
          <input {...register("email", { 
                    required: "Email không được trống",
                    pattern: { value: /^\S+@\S+$/, message: "Email không hợp lệ" }
                  })}
                 className="w-full p-2 border rounded" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block">Mật khẩu:</label>
          <input type="password"
                 {...register("password", { required: true, minLength: 6 })}
                 className="w-full p-2 border rounded" />
          {errors.password && <p className="text-red-500">Mật khẩu ít nhất 6 ký tự</p>}
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Đăng ký
        </button>
      </form>
    </div>
  );
}
