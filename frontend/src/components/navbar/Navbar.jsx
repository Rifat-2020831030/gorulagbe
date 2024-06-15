import React from "react";
import loginImg from "../../assets/login.png";
import "./Navbar.css";

const Navbar = ({ setIsVisible, setPage }) => {
  const token = localStorage.getItem("token");

  const login = () => {
    setPage("login");
    setIsVisible(true);
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
          <a href="#">Home</a>
          <a href="#">Cattle</a>
          <a href="#">Meat</a>
          <a href="#">Butcher</a>
          <a href="#">Recipee</a>
          <a href="#" className="navbar-contact">
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
          <div
            className="profile"
            style={{ display: token ? "block" : "none" }}
          >
            <img src={loginImg} alt="Logged In" />
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
