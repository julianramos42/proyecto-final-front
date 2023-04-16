import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import modalFormReducer from './ModalForm/reducer'
import refAboutReducer from './RefAbout/reducer'
import refCustomersReducer from './RefCustomers/reducer'
import refContactReducer from './RefContact/reducer'
import refHomeReducer from './RefHome/reducer'

export const store = configureStore({
    reducer: {
        modalFormReducer: modalFormReducer,
        refAboutReducer: refAboutReducer,
        refCustomersReducer: refCustomersReducer,
        refContactReducer: refContactReducer,
        refHomeReducer: refHomeReducer,
    }
})
=======
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
>>>>>>> 4c96e51f70c63c2f4b9ef6678413a5c07ac069a9
