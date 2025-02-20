import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutPage from "./src/Pages/Checkout";
import Home from "./src/Pages/Home";
import Checkout from "./src/Pages/Checkout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App; 
