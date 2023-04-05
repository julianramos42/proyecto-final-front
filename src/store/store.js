import { configureStore } from "@reduxjs/toolkit";
import modalFormReducer from './ModalForm/reducer'

export const store = configureStore({
    reducer: {
        modalFormReducer: modalFormReducer
    }
})