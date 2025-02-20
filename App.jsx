import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutPage from "./src/Pages/CheckoutPage";
import Home from "./src/Pages/Home";
import Checkout from "./src/Pages/CheckoutPage";

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
