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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
