import React, { useState } from "react";
import "./navbarstores.css";
import { Link as Anchor } from "react-router-dom";
import {
  Store,
  Stores,
  Profile,
  Favourite,
  SupportAgent,
  LogOut,
  ArrowLeft,
  ArrowRight,
} from "../Icons/Icons.js";

import Header from "../Header/Header";

export default function NavBarStores() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <>
      <Header />
      <div className="arrowContainerLeft" onClick={toggleNav}>
        <ArrowRight />
      </div>

      <div
        className={`containerNavStore  ${
          !isNavOpen && "containerNavStoreClosed"
        } `}
      >
        <div className="arrowContainer" onClick={toggleNav}>
          <ArrowLeft />
        </div>
        <div className="anchorsContainer">
          <span className="buttonEffect">
            <Anchor className="buttonAnchor">
              <Store />
              Stores
            </Anchor>
          </span>
          <span className="buttonEffect">
            <Anchor className="buttonAnchor">
              <Stores />
              My Stores
            </Anchor>
          </span>
          <span className="buttonEffect">
            <Anchor className="buttonAnchor">
              <Profile />
              Profile
            </Anchor>
          </span>
          <span className="buttonEffect">
            <Anchor className="buttonAnchor">
              <Favourite />
              Favourites
            </Anchor>
          </span>
          <span className="buttonEffect">
            <Anchor className="buttonAnchor">
              <Profile />
              Login
            </Anchor>
          </span>
          <div className="logOutHelp">
            <span className="buttonEffect">
              <Anchor className="buttonAnchor">
                <SupportAgent />
                Support Center
              </Anchor>
            </span>
            <span className="buttonEffect">
              <Anchor className="buttonAnchor">
                <LogOut />
                Logout
              </Anchor>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
