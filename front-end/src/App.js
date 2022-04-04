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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
