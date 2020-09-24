import React from "react";
import { NavLink } from "react-router-dom";
import "./logo.css";

const Logo = (props) => (
  <div className="logo">
    <div className="logoImage">
      <img src={require("../../assets/tsunlogo.png")} alt="" />
    </div>
    <div className="logoLink">
      <NavLink to="/">Tsundoku</NavLink>
    </div>
  </div>
);
export default Logo;
