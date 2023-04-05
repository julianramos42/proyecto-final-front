import React from "react";
import NavBarStores from "../../components/NavBarStores/NavBarStores";

export default function Profile() {
  return (
    <>
      <NavBarStores />
      <div className="containerContent">
        <div className="backgroundProfile">
          <div className="topProfile">Welcome back George!</div>
          <img src="profile.jpg" alt="" />
          <span>
            <label>Name</label>
            <input type="text" placeholder="George" />
          </span>
          <span>
            <label>Surname</label>
            <input type="text" placeholder="Surname" />
          </span>
          <span>
            <label>Email</label>
            <input type="text" placeholder="GeorgeBrush@lance.app" />
          </span>
          <span className="containerButtonsProfile">
            <div className="buttonProfile">Cancel</div>
            <div className="buttonProfile">Save</div>
          </span>
        </div>
      </div>
    </>
  );
}
