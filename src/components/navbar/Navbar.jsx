import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="navbar-list logo">Your logo</div>
      <ul className="navbar-list">
        <li className="list-item">Home</li>
        <li className="list-item">About Us</li>
        <li className="list-item">Courses</li>
        <li className="list-item">Pages</li>
        <li className="list-item">Blog</li>
        <li className="list-item blue-background">Contact</li>
      </ul>
      <div>
        <button className="register-btn ">Register Now</button>
      </div>
    </div>
  );
};

export default Navbar;
