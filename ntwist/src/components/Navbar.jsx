import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar-logo">
        <img  src="https://gccirsymposium.innoget.com/gccir/img/ntwist-logo.png" />

      </div>
      <div className="nav-contain">
        <ul
          id="navbar"
          className={isOpen ? "#navbar active" : "#navbar"}
          onClick={toggleClose}
        >
          <div className="home">
            <li>
              <a href="#">Home</a>
            </li>
          </div>
          <div className="Industries">
            <li>
              <a href="#Industries">Industries</a>
            </li>
          </div>
          <div className="Software">
            <li>
              <a href="#Software">Ai Software</a>
            </li>
          </div>
          <div className="Blog">
            <li>
              <a href="#Blog">Blog</a>
            </li>
          </div>
          <div className="contact">
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </div>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
    </nav>
  );
}

export default Navbar;
