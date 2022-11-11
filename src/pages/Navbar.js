import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        DOCTORS' APPOINTMENT APP
      </a>
      <ul className="ul">
        <li>
          <a href to="/">
            Home
          </a>
        </li>
        <li>
          <a href to="/appointments">
            Appointments
          </a>
        </li>
        <li>
          <a href to="/contact ">
            Contact{" "}
          </a>
        </li>
        <li>
          {" "}
          <a href to="/support">
            {" "}
            Support
          </a>{" "}
        </li>
      </ul>{" "}
    </nav>
  );
};
export default Navbar;
