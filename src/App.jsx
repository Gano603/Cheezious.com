import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound';
import Navbar from './Pages/components/Navbar';
import Footer from './Pages/components/Footer';
import Product from './Pages/Product/Product';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  document.title = "Cheezious";

  const [cartOpen,setcartOpen] = useState(false);
  return (
    <Router>
      <Navbar cartOpen={cartOpen} setcartOpen={setcartOpen} location={"E-11/1,Islamabad"} />
      <Routes>
        <Route path='/' element={<Home cartOpen={cartOpen} setcartOpen={setcartOpen}/>} />
        <Route path='/product/:title/:title_head' element={<Product />} />
        <Route path='/checkout' element={<Checkout />} />
        {/* <Route path='/product/:title' />
        {({match})=>{
          if(!match || !match.params.title){
            return <redirect to={'/'} />
          }
          else{
            return <Product cart={cart} setcart={setcart} cartOpen={cartOpen} setcartOpen={setcartOpen} />
          }
        }} */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
