import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const navbar = () => {
  return (
    <div className="nav">
      <span className="title">DOCTORS' APPOINTMENT APP</span>

         <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact us">Contact us</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
      </div>
     );
};
export default navbar;
