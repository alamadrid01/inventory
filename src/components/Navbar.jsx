import React from "react";
import logo from "./assets/logo.png";
import "./styles/Navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="left">
        <img src={logo} alt="logo" />
        <h3>Hi</h3>
      </div>
      <div className="right">
        <button>Say Hello</button>
      </div>
    </nav>
  );
}

export default Navbar;
