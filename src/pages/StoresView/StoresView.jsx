import React, { useEffect } from "react";
import "./storesview.css";
import NavBarStores from "../../components/NavBarStores/NavBarStores";
import CardStoreView from "../../components/CardStoreView/CardStoreView";
import { Delete } from "../../components/Icons/Icons";
import Auth from "../../components/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/Shops/actions";
import CategoriesSelect from "../../components/CategoriesSelect/CategoriesSelect";

export default function StoresView() {
  let modalState = useSelector((store) => store.modalFormReducer.state);

  const dispatch = useDispatch();
  const shop = useSelector((store) => store.shopsReducer.shop);

  useEffect(() => {
    dispatch(actions.captureShop());
  }, [dispatch]);

<<<<<<< HEAD
=======
  console.log(shop);
>>>>>>> 8bf6eabe759b2ebb2f9d6b6c04033b15178fe009
  return (
    <>
      <NavBarStores />
      <div className="containerContent">
        {modalState === "register" ? <Auth /> : <></>}
        {modalState === "login" ? <Auth /> : <></>}
        <div className="containerCategories">
<<<<<<< HEAD
          <CategoriesSelect />
=======
          <CategoriesSelect/>
>>>>>>> 8bf6eabe759b2ebb2f9d6b6c04033b15178fe009
          <span className="deleteIcon">
            <Delete />
          </span>
        </div>
        <div className="containerCardsStores">
          <div className="alignCards">
            {shop?.map((shop) => (
              <CardStoreView key={shop.id} shop={shop} />
            ))}
<<<<<<< HEAD
=======
            
>>>>>>> 8bf6eabe759b2ebb2f9d6b6c04033b15178fe009
          </div>
        </div>
      </div>
    </>
  );
}
