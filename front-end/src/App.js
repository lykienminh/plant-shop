import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Navigation from './components/Navbar/Navigation';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Success from './pages/Paysuccess';


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Navigation/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
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
