import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/">
          <img src="https://img.freepik.com/premium-vector/house-real-estate-logo_7169-95.jpg" alt="Logo" /></Link>
        <h3>House Recommender</h3>
      </div>
      {/* <input type="checkbox" id="navbar-toggle" className="navbar-toggle" /> */}
      <label htmlFor="navbar-toggle" className="navbar-toggle-label">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className="navbar-links">
        <li><a href="#get-plan">Get Plan</a></li>
        <li><a href="#design-battle">Design Battle</a></li>
        <li><a href="#use-cases">Use Cases</a></li>
        <li><a href="#join-pro">Join as Pro</a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="signup-button">Sign Up / Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
