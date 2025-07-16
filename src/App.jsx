import "./app.css";
import Header from "./components/header"; 
import Popup from "./components/popup"; 
import Home from "./components/home";
import Banner from "./components/banner";
import Footer from './components/footer';
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  const [open, setOpen] = useState("popClose");

  return (
    <>
      <div className="header">
        <Header toggoleBar={() => setOpen(open === "popClose" ? "popOpen" : "popClose")} />
      </div>

      <div className="bodyContent">
        <Popup open={open} setOpen={setOpen} />
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/banner" component={Banner} />
        </Switch>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
