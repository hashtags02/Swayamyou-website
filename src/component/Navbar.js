import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <nav
      className="navbar"
      style={{
        backgroundImage: "url('/background.png')",
          backgroundSize: 'auto',
        backgroundPosition:  'middle-center',
        backgroundRepeat: 'repeat'
      }}
    >
      <div className="navbar-left">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Solutions</li>
        </ul>
      </div>
      <div className="navbar-center">SWAYAMYOU</div>
      <div className="navbar-right">
        <button className="Sign">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
