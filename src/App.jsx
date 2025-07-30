import "./app.css";
import Header from "./components/header"; 
import Popup from "./components/popup"; 
import Home from "./components/home";
import DisplayProduct from "./components/displayProduct";
import Cart from "./components/cartPage";
import Login from "./components/loginPage";
import Register from "./components/registerPage";
import ProductList from "./components/productlist";
import Footer from './components/footer';
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
        </Routes>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
