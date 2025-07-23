import React, { useEffect, useState } from 'react';

export default function FakeUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Dùng useEffect để gọi API giả
  useEffect(() => {
    console.log("🔁 Đang gọi API giả...");

    // Giả lập gọi API: chờ 2 giây
    setTimeout(() => {
      const fakeUser = {
        name: "Mai Xuân Lộc",
        email: "loc@example.com"
      };
      setUser(fakeUser);
      setLoading(false);
      console.log("✅ API gọi xong!");
    }, 2000);
  }, []); // chạy 1 lần khi component mount

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Demo gọi API giả</h1>

      {loading ? (
        <div className="flex justify-center items-center flex-col">
          <div className="animate-spin h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent mb-2"></div>
          <p className="text-gray-500">Đang tải dữ liệu...</p>
        </div>
      ) : (
        <div className="text-lg bg-gray-100 p-4 rounded shadow inline-block">
          <p><strong>👋 Xin chào:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
}
