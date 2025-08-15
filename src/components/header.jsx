import React from 'react'; 
import './header.css';
import Profile from "./PopupProfile";

export default function Header({ toggoleBar }) {
  return (
    <>
      <div className="menuDiv">
        <div onClick={toggoleBar} className="headMenu" id="togglePopup">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="searchDiv">
        <div className="inputFields">
          <input className="headerInput" type="text" placeholder="Search With OW-TA" />
          <img className="headerLogo" src="/asset/ow-ta_Logo.png" alt="finding Logo" />
        </div>
      </div>
      <Profile />
    </>
  );
}
