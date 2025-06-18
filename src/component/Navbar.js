import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav
      className="navbar"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "auto",
        backgroundPosition: "middle-center",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="navbar-left">
        <ul>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#features" className="nav-link">Features</a></li>
          <li><a href="#solutions" className="nav-link">Solutions</a></li>
        </ul>
      </div>
      <div className="navbar-center">SWAYAMYOU</div>
      <div className="navbar-right">
        <button className="Sign">Book Demo</button>
      </div>
    </nav>
  );
}

export default Navbar;
