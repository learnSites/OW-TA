import React from 'react'; 
import { useState, useEffect, useRef } from "react";
import './popupProfile.css';
import fun from '/asset/fun.jpg';
import { Link } from "react-router-dom";

export default function Popup() {
  let [isHover, setHover] = useState(false);
  let [click, setClick] = useState(false);
  let popupRdf = useRef(null);

  useEffect(() => {
    function handleOutClick(event) {
      if (popupRdf.current && !popupRdf.current.contains(event.target)) {
        setClick(false);
      }
    }

    document.addEventListener('mousedown', handleOutClick);
    return () => {
      document.removeEventListener('mousedown', handleOutClick);
    };
  }, []);

  return (
    <>
    <div
      ref={popupRdf}
      onClick={() => (click == true) ? setClick(false) : setClick(true)}
      style={{ position: "relative",width: '11%'}}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex justify-between items-center">
        <p className="text-white">Welcome , Aravind A</p>
        <div className='headProfile'>
          <img className='ProfilImg' src={fun} alt="Profile" />
        </div>
      </div>

      {isHover && !click && (
        <div className="popDiv" style={{ fontSize: "16px"}}>
          <div className="flex flex-col gap-[12px]">
            <p className="headContent">Personal Details</p>
            <p className="innerContent">Phone: 8122479301</p>
            <p className="innerContent">E-mail : arusamyarvnd12@gmail.com</p>
            <p style={{ fontSize: '14px', padding: '0px 0px 0px 10px', color: 'gray' }}>
              For More Details <u>Click the Profile</u>.
            </p>
          </div>
        </div>
      )}

      {click && (
        <div className="popDiv gap-[20px]" style={{ fontSize: "16px" }}>
          <div  className="flex flex-col gap-[12px]">
            <p className="headContent">Personal Details</p>
            <p className="innerContent">Phone: 8122479301</p>
            <p className="innerContent">E-mail : arusamyarvnd12@gmail.com</p>
          </div>
          <div  className="flex flex-col gap-[12px]">
            <p className="headContent">Your Orders</p>
            <p className="innerContent">Home Appliances: 4</p>
            <div className="innerContent">
                <button className="contentButton">Orders</button>
            </div>
          </div>
          <div  className="flex flex-col gap-[12px]">
            <p className="headContent">Your Cart</p>
            <p className="innerContent">Home Appliances: 1</p>
            <p className="innerContent">Computer & Accessories: 2</p>
            <p className="innerContent">Smart Home Devices: 7</p>
            <p className="innerContent">Quantity : 3</p>
            <p className="innerContent">Total Price : 3000</p>
            <div className="innerContent">
                <Link to="/cart">
                    <button className="contentButton">Cart</button>
                </Link>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
