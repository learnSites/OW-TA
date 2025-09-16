import React from 'react'; 
import "./App.css";
import Home from "./Page/Home";
import DisplayProduct from "./Page/DisplayProduct";
import Cart from "./Page/CartPage";
import Login from "./Page/LoginPage";
import Register from "./Page/RegisterPage";
import ProductList from "./Page/Productlist";
import Shipping from './Page/Shipping';
import Confirm from './Page/ComfirmPage';
import Order from './Page/OrderPage';

import { Route, Routes } from "react-router-dom";

// @Aravind----npm install -D tailwindcss@3 postcss autoprefixer  npx tailwindcss init -p

function App() {
  
  return (
    <>
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
    </>
  );
}

export default App;
