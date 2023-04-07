import { createReducer } from "@reduxjs/toolkit";
import refHomeActions from "./actions";

const {refHome} = refHomeActions

const initialState = {
    state: ''
}

const refHomeReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            refHome,
            (state,action) => {
                let newState = {
                    ...state,
                    reference: action.payload.reference
                }
                return newState
            }
        )
)

export default refHomeReducer