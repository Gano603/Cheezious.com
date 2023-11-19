import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Navbar from './Pages/components/Navbar';
import Footer from './Pages/components/Footer';

function App() {
  document.title = "Cheezious"
  return (
    <Router>
      <Navbar location={"E-11/1,Islamabad"} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
