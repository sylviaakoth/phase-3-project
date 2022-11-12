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
            HOME
          </a>
        </li>
        <li>
          <a href to="/appointments">
            APPOINTMENT
          </a>
        </li>
        <li>
          <a href to="/contact ">
            CONTACT{" "}
          </a>
        </li>
        <li>
          {" "}
          <a href to="/support">
            {" "}
            SUPPORT
          </a>{" "}
        </li>
      </ul>{" "}
    </nav>
  );
};
export default Navbar;
