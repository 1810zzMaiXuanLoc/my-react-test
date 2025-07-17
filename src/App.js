import React from 'react';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import ProductDetail from './pages/ProductDetail.js';
import UserList from './pages/UserList.js';
import UserDetail from './pages/UserDetail.js';

function App() {
  return (
    <>
      
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
    
    </>
  );
}

export default App;
