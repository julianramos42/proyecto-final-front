import React from "react";
import NavBarStores from "../../components/NavBarStores/NavBarStores";
import "./mystore.css";
import { Delete, UpLoad } from "../../components/Icons/Icons";

export default function MyStore() {
  return (
    <>
      <NavBarStores />
      <div className="containerContent">
        <div className="myStoreBanner">
          <span className="containerBannerMyStore">
            <img src="./Banner.jpg" alt="" />
          </span>

          <div className="profileImageMyStore">
            <img src="./profile.jpg" alt="" />
          </div>
        </div>
        <div className="infoMyStore">
          <span className="containerInfoMyStore">
            <h3 className="storeName">Georgi Brushelas Store</h3>
            <p>Shoes</p>
          </span>
          <span className="buttonsContainer">
            <div className="buttonEditBanner">
              <UpLoad/>
              Edit Banner
            </div>
            <div className="buttonDeleteAll">Delete All</div>
          </span>
        </div>
        <div className="viewContentMyStore">
          <div className="containerCardsMyStore"></div>
        </div>
      </div>
    </>
  );
}
