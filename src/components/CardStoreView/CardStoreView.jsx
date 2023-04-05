import React from "react";
import "./cardstoreview.css";
import { Favourite } from "../Icons/Icons";

export default function CardStoreView() {
  return (
    <div className="containerCard">
      <div className="halfViewProfile">
        <div className="profileInfo">
          <img src="./profile.jpg" alt="" className="imageProfile" />
          <h3>Georgi Store</h3>
          <p>Categoría</p>
          <div className="buttonVisit">Visit Store</div>
        </div>
      </div>

      <div className="halfView">
        <div className="banner">
          <img src="./Banner.jpg" alt="" className="imageBanner" />
        </div>
        <div className="descriptionStore">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, praesentium dolorem iusto aliquam excepturi possimus!</p>
        </div>
      </div>
    </div>
  );
}
