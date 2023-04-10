import React from "react";
import "./header.css";
import { Search } from "../Icons/Icons.js";
import Logo from "../../images/logo.png";
import { useLocation } from "react-router-dom";
import { Link as Anchor } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const hideSearch = location.pathname === "/profile";

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const name = user ? user.name : "";
  const mail = user ? user.mail : "";
  const photo = user ? user.photo : "";
  const lastname = user ? user.lastname : ""

  return (
    <div className="header">
      <div className="containerLogoInput">
        <Anchor to="/" className="containerLogo">
          <img src={Logo} alt="" />
        </Anchor>
        {hideSearch ? null : (
          <div className="inputContainer">
            <Search />
            <input type="search" placeholder="Search for something here..." />
          </div>
        )}

        {token ? (
          <div className="profileContainer">
            <span className="nameProfile">{name} {lastname}</span>
            <img className="profileImage" src={photo} alt="" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
