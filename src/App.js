import React from 'react';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import ProductDetail from './pages/ProductDetail.js';
import UserList from './pages/UserList.js';
import UserDetail from './pages/UserDetail.js';
import HeartFall from './components/HeartFall.js';

function App() {
  return (
    <>
      <div className="relative overflow-hidden">
        <HeartFall/>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail  />} />
          <Route path="/users" element={<UserList/>}/>
          <Route path="/users/:id" element={<UserDetail/>}/>
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
