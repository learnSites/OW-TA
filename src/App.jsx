import "./app.css";
import Header from "./components/header"; 
import Popup from "./components/popup"; 
import Home from "./components/home";
import Filter from "./components/filter";
import Footer from './components/footer';
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

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
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
