import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We provide the best quality cattle for Qurbani. Our goal is to ensure 
            that you have a hassle-free and satisfying experience.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cattle">Cattle</a></li>
            <li><a href="/meat">Meat</a></li>
            <li><a href="/butcher">Butcher</a></li>
            <li><a href="/recipee">Recipee</a></li>
          </ul>
        </div>
        <div className="footer-section ">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: <a href="mailto:contact@gorulagbe.com">contact@gorulagbe.com</a></li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 10 Akhalia Ghat, Sylhet, Bangladesh</li>
          </ul>
          {/* <div className="footer-section social">
            <h2>Follow Us</h2>
            <div className="social-links">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 GoruLagbe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
