import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./src/Pages/Home";
import Checkout from "./src/Pages/Checkout";
import Cart from "./src/Pages/Cart";
import Products from "./src/Pages/Products";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />

        

      </Routes> 
    </Router>
  );
};

export default App; 
