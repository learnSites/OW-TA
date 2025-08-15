import React from 'react'; 
import './popup.css';
import { useRef, useEffect } from "react";

export default function Popup({ open, setOpen }) {
  const pop = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {

      if (
        open === "popOpen" &&
        pop.current &&
        !pop.current.contains(event.target) &&
        !event.target.closest("#togglePopup")
      ) {
        setOpen("popClose");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);


  return (
    <div className={open} ref={pop}>
      <div className='topSection'>
        <div style={{ height: '100px' }}>
          <img className='profileSrc' src="/asset/fun.jpg" alt="profile" />
        </div>
        <div className='linkWords'>Profile</div>
        <div className='lineEnd'></div>
        <div className='linkWords'>Security management</div>
        <div className='lineEnd'></div>
        <div className='linkWords'>Settings</div>
        <div className='lineEnd'></div>
        <div className='linkWords'>Privacy Policy</div>
      </div>
      <div className='bottomSection'>
        <button className='anotherLog'>Login Another Account</button>
        <div style={{ height: '32px' }}>
          <button className='logOut'>Logout</button>
        </div>
      </div>
    </div>
  );
}
