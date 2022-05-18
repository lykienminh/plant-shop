import React from 'react';
import './App.css';
import Navigation from './components/Navbar/Navigation';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Success from './pages/Paysuccess';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/success' element={<Success/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
