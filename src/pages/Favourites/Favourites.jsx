import React from "react";
import "./favourites.css";
import NavBarStores from "../../components/NavBarStores/NavBarStores";
import CardStoreView from "../../components/CardStoreView/CardStoreView";
import { Delete } from "../../components/Icons/Icons";
import { useSelector } from "react-redux";
import Auth from "../../components/Auth/Auth";
import CategoriesSelect from "../../components/CategoriesSelect/CategoriesSelect";

export default function StoresView() {
  let modalState = useSelector((store) => store.modalFormReducer.state);

  return (
    <>
      <NavBarStores />
      <div className="containerContent">
        {modalState === "register" ? <Auth /> : <></>}
        {modalState === "login" ? <Auth /> : <></>}
        <div className="containerCategories">
          <CategoriesSelect />
          <span className="deleteIcon">
            <Delete />
          </span>
        </div>
        <div className="containerCardsStoresFavourites">
          <div className="buttonClearAll">CLEAR ALL FAVOURITES</div>
          <div className="alignCards"></div>
        </div>
      </div>
    </>
  );
}
