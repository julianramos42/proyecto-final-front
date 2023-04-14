import { configureStore } from "@reduxjs/toolkit";
import modalFormReducer from "./ModalForm/reducer";
import refAboutReducer from "./RefAbout/reducer";
import refCustomersReducer from "./RefCustomers/reducer";
import refContactReducer from "./RefContact/reducer";
import shopsReducer from "./Shops/reducer";
import refHomeReducer from "./RefHome/reducer";
import modalShopReducer from "./ShopModal/reducer";
import favouritesReducer from "./CaptureFavourites/reducer";

export const store = configureStore({
  reducer: {
    modalFormReducer: modalFormReducer,
    modalShopReducer: modalShopReducer,
    refAboutReducer: refAboutReducer,
    refCustomersReducer: refCustomersReducer,
    refContactReducer: refContactReducer,
    shopsReducer: shopsReducer,
    refHomeReducer: refHomeReducer,
    favouritesReducer: favouritesReducer,
  },
});
