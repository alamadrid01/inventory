import React from "react";
import logo from "./assets/logo.png";
import {Link } from "react-router-dom"
import "./styles/Navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="left">
        <Link to="/"><img src={logo} alt="logo" /></Link>
        <h3>Hi</h3>
      </div>
      <div className="right">
        <button>
          <Link className="link" to="/contact">Say Hello</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
