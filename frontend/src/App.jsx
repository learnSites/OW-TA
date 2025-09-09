import React from 'react'; 
import "./App.css";
import Header from "./Components/Header"; 
import Popup from "./Components/Popup"; 
import Home from "./Page/Home";
import DisplayProduct from "./Page/DisplayProduct";
import Cart from "./Page/CartPage";
import Login from "./Page/LoginPage";
import Register from "./Page/RegisterPage";
import ProductList from "./Page/Productlist";
import Footer from './Components/Footer';
import Shipping from './Page/Shipping';
import Confirm from './Page/ComfirmPage';
import Order from './Page/OrderPage';
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// @Aravind----npm install -D tailwindcss@3 postcss autoprefixer  npx tailwindcss init -p

function App() {
  const [open, setOpen] = useState("popClose");

  return (
    <>
      <div className="header">
        <Header toggoleBar={() => setOpen(open === "popClose" ? "popOpen" : "popClose")} />
      </div>

      <div className="bodyContent">
        <Popup open={open} setOpen={setOpen} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/displayProduct" element={<DisplayProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
