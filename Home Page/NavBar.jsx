import React from "react";
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="container">
      <img src="/logo1.png" alt="" height={100} />
      <div className="list">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>SERVICES</li>
        </ul>
      </div>
      <div className="btn">        
      <button className="nav-btn">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
