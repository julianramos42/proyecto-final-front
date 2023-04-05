import { configureStore } from "@reduxjs/toolkit";
import modalFormReducer from './ModalForm/reducer'
import refAboutReducer from './RefAbout/reducer'

export const store = configureStore({
    reducer: {
        modalFormReducer: modalFormReducer,
        refAboutReducer: refAboutReducer
    }
})