import { configureStore } from "@reduxjs/toolkit";
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