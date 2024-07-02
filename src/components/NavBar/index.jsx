import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.svg";
import "./styles.scss";

const NavigationBar = () => {
  return (
    <nav className="fl-navbar-container">
      <div className="fl-navbar-logo">
        <Link to="/">
          <img src={icon} alt="icon" />
        </Link>
      </div>
      <div className="fl-navbar-items">
        <div>
          <Link className="fl-navbar-item" to="/about">
            About
          </Link>
        </div>
        <div>
          <Link className="fl-navbar-item" to="/blog">
            Blog
          </Link>
        </div>
        <div>
          <Link className="fl-navbar-item" to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="fl-navbar-button">
        <p>TestTest</p>
      </div>
    </nav>
  );
};

export default NavigationBar;
