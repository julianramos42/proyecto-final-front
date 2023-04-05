import { createReducer } from "@reduxjs/toolkit";
import refAboutActions from "./actions";

const {refAbout} = refAboutActions

const initialState = {
    state: ''
}

const refAboutReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            refAbout,
            (state,action) => {
                let newState = {
                    ...state,
                    reference: action.payload.reference
                }
                return newState
            }
        )
)

export default refAboutReducer