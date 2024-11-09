import React from "react";
import loginImg from "../../assets/man.png";
import Cart from "./Cart";
import "./Navbar.css";

const Navbar = ({ setIsVisible, setPage, cart }) => {
  const productCount = 3;
  const token = localStorage.getItem("token");

  const login = () => {
    setPage("login");
    setIsVisible(true);
    console.log("login");
  };

  const register = () => {
    setPage("registration");
    setIsVisible(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <div className="navbar">
        <h5>LOGO</h5>
        <div className="nav">
          <a className="nav-item" href="/">
            Home
          </a>
          <a className="nav-item" href="/customer-feed">
            Cattle
          </a>
          <a className="nav-item" href="#">
            Meat
          </a>
          <a className="nav-item" href="#">
            Butcher
          </a>
          <a className="nav-item" href="#">
            Recipee
          </a>
          <a className="navbar-contact" href="#footer">
            Contact
          </a>
        </div>
        <div className="nav2">
          {/* show if the user is not login */}
          <button
            className="button"
            onClick={login}
            style={{ display: token ? "none" : "block" }}
          >
            Login
          </button>
          <button
            className="button"
            onClick={register}
            style={{ display: token ? "none" : "block" }}
          >
            Register
          </button>
          {/* show if the user is login */}
          <Cart cart={cart} />
          <div
            className="profile"
            style={{ display: token ? "block" : "none" }}
            onClick={() => {
              window.location.href = "/profile";
            }}
          >
            <img src={loginImg} alt="Logged In" />
            <h5>Profile</h5>
          </div>
          <button
            className="button"
            onClick={logout}
            style={{ display: token ? "block" : "none" }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
