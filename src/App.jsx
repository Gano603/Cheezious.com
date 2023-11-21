import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Navbar from './Pages/components/Navbar';
import Footer from './Pages/components/Footer';

function App() {
  document.title = "Cheezious";

  const [cartOpen,setcartOpen] = useState(false);
  const [cart,setcart] = useState({})

  return (
    <Router>
      <Navbar cartOpen={cartOpen} setcartOpen={setcartOpen} cart={cart} location={"E-11/1,Islamabad"} />
      <Routes>
        <Route path='/' element={<Home cart={cart} setcart={setcart} cartOpen={cartOpen} setcartOpen={setcartOpen}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
