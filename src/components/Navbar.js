import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const navbar = () => {
  return (
    <div className="nav">
      <span className="title">DOCTORS' APPOINTMENT APP</span>

         <ul className="nav-links">
           <li>
            <Link className="link" to="/">Home</Link>
                   </li>
                   <li>
            <Link className="link" to="/about">About</Link>
                   </li>
                   <li>
            <Link className="link" to="/contact us">Contact us</Link>
                   </li>
                   <li>
            <Link className="link" to="/support">Support</Link>
                   </li>
         </ul>
      </div>
     );
};
export default navbar;
