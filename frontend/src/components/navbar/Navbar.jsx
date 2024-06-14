import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h5>LOGO</h5>
        <div className="nav">
          <a href="#">Home</a>
          <a href="#">Cattle</a>
          <a href="#">Meat</a>
          <a href="#">Butcher</a>
          <a href="#">Recipee</a>
          <a href="#" className="navbar-contact">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
