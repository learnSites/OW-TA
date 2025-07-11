import "./app.css";
import Header from "./components/header"; 
import Home from "./components/home";
import Footer from './components/footer';
import { useState } from "react";

function App() {
  const [open, setOpen] = useState("popClose");

  return (
    <>
      <div className="header">
        <Header toggoleBar={() => 
          setOpen(open === "popClose" ? "popOpen" : "popOpen")} />
      </div>
      <div className="bodyContent">
        <Home open={open} setOpen={setOpen} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
