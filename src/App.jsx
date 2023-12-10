import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound';
import Navbar from './Pages/components/Navbar';
import Footer from './Pages/components/Footer';
import Product from './Pages/Product/Product';
import Checkout from './Pages/Checkout/Checkout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Cart_resp_header from './Pages/Home/components/Cart_resp_header'
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from './features/cart/cartSlice';

function App() {
  document.title = "Cheezious";
  const cart = useSelector(state => state.cart)
  const disp = useDispatch();

  window.addEventListener('beforeunload',()=>{
      localStorage.setItem("cart", JSON.stringify(cart));
  })

  window.addEventListener('load',()=> {
    const cartget = (JSON.parse(localStorage.getItem("cart")));
    if(cartget) disp(setCart(cartget));
  })

  const [cartOpen,setcartOpen] = useState(false);
  return (
    <Router>
      <Navbar cartOpen={cartOpen} setcartOpen={setcartOpen} location={"E-11/1,Islamabad"} />
      <Routes>
        <Route path='/' element={<Home cartOpen={cartOpen} setcartOpen={setcartOpen}/>} />
        <Route path='/product/:title/:title_head' element={<Product />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <Cart_resp_header />
    </Router>
  );
}

export default App;
