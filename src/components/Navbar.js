import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const navbar = () => {
  return (
    <nav className="nav">
      <h3 className="doctor">DOCTORS' APPOINTMENT APP</h3>
      <ul className="nav-links">
        <Link to="/" className="home">
          <li> Home </li>
        </Link>
        <Link to="/Contact" className="contact">
          <li> Contact </li>
        </Link>
        <Link to="/Appointments" className="appointments">
          <li> Appointments </li>
        </Link>
        <Link to="/Support" className="support">
          <li> Support </li>
        </Link>
      </ul>
    </nav>
  );
};
export default navbar;
