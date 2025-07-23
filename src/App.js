import React from 'react';  
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import ProductDetail from './pages/ProductDetail.js';
import UserList from './pages/UserList.js';
import UserDetail from './pages/UserDetail.js';
import HeartFall from './components/HeartFall.js';
import Register from './components/Register.js';
import FakeUser from './pages/FakeUser.js';
import Sidebar from './components/Sidebar.js';
function App() {
  return (
    <>
      
        {/* <HeartFall/> */}
      <BrowserRouter>
      <div className="relative min-h-screen flex flex-col">
      <Header />
        <div className="flex overflow-hidden min-h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/users/:id" element={<UserDetail />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </div>
      <Footer />
       </div>
      </BrowserRouter>
   
    </>
  );
}

export default App;
