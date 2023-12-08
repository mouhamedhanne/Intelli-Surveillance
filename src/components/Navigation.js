import React from "react";
import "../styles/components/navigation.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className="fixed-navbar">
      <div className="navigation">
        <Logo />
        <div className="link-navigation">
          <ul>
            <Link style={{ textDecoration: "none" }} to="/">
              <li>Acceuil</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Apropos">
              <li>Apropos</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Services">
              <li>Services</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Blog">
              <li>Blog</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
