import React from "react";
import "./header.css";
import { Search } from "../Icons/Icons.js";
import Logo from "../../images/logo.png";
import { Link as Anchor } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="containerLogoInput">
        <Anchor to='/' className="containerLogo">
          <img src={Logo} alt="" />
        </Anchor>
        <div className="inputContainer">
          <Search />
          <input type="search" placeholder="Search for something here..." />
        </div>

        <div className="profileContainer">
          <span className="nameProfile">George Brush</span>
          <img className="profileImage" src="./profile.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
