import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className="navigation">
      <Logo />
      <div className="link-navigation">
        <ul>
          <NavLink style={{ textDecoration: "none" }} to="/">
            <li>Acceuil</li>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/Apropos">
            <li>Apropos</li>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/Services">
            <li>Services</li>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/Blog">
            <li>Blog</li>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/FAQ">
            <li>FAQ</li>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/Contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
