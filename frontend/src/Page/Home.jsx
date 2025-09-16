import React from 'react'; 
import Card from "../Components/Card";
import Banner from '../Components/Banner';
import './Home.css';
import { useState } from "react";
import Footer from '../Components/Footer';
import Header from "../Components/Header"; 
import Popup from "../Components/Popup"; 

export default function Home() {
  const [open, setOpen] = useState("popClose");

  const product = [
    { Pdtname: "Home Appliances", logo: "/asset/Home Appliances.jpg" },
    { Pdtname: "Computers & Accessories", logo: "/asset/computer.jpg" },
    { Pdtname: "Mens Collection", logo: "/asset/mens.jpg" },
    { Pdtname: "Kids Collection", logo: "/asset/kids.jpg" },
    { Pdtname: "Women Collection", logo: "/asset/women.jpg" },
    { Pdtname: "Smart Home Devices", logo: "/asset/smarthome.webp" },
    { Pdtname: "Entertainment Electronics", logo: "/asset/game.jpg" },
    { Pdtname: " Mobile & Tablets", logo: "/asset/mobtab.jpg" },
    { Pdtname: "Networking & Connectivity", logo: "/asset/network.jpg" },
  ];

  return (
    <>
      <div className="header">
        <Header toggoleBar={() => setOpen(open === "popClose" ? "popOpen" : "popClose")} />
      </div>

      <div className="bodyContent">
        <Popup open={open} setOpen={setOpen} />
        <div className="contentDiv">
          <Banner />
          {product.map((element, index) => (
            <Card key={index} src={element.logo} name={element.Pdtname} />
          ))}
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
